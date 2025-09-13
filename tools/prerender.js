#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const templatesDir = root; // root of website
const i18nDir = path.join(root, 'i18n');

function escapeHtml(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function replaceById(html, id, replacement) {
    // Matches an opening tag that contains id="id" (or id='id'), then captures inner content until the matching closing tag.
    const re = new RegExp(`(<[^>]*\\bid=["']${id}["'][^>]*>)([\\s\\S]*?)(<\\/[^>]+>)`, 'i');
    return html.replace(re, (m, open, inner, close) => {
        return open + replacement + close;
    });
}

function setHtmlLangDir(html, lang, dir) {
    // Replace <html ...> tag
    return html.replace(/<html([^>]*)>/i, `<html$1 lang="${lang}"${dir ? ` dir="${dir}"` : ''}>`);
}

function ensureDir(p) {
    if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function prerender() {
    const locales = fs.readdirSync(i18nDir).filter(f => f.endsWith('.json'));

    // find top-level html templates (ignore existing localized folders)
    const exclude = ['routes.html', 'passengers.html', 'profile.html'];
    const templates = fs.readdirSync(templatesDir).filter(f => {
        return f.endsWith('.html') && !exclude.includes(f);
    });

    locales.forEach(file => {
        const lang = path.basename(file, '.json');
        const data = JSON.parse(fs.readFileSync(path.join(i18nDir, file), 'utf8'));
        const dir = lang === 'ar' ? 'rtl' : '';

        templates.forEach(templateFile => {
            const template = fs.readFileSync(path.join(templatesDir, templateFile), 'utf8');
            let out = template;

            out = setHtmlLangDir(out, lang, dir);

            for (const [k, v] of Object.entries(data)) {
                try {
                    const safe = escapeHtml(v);
                    out = replaceById(out, k, safe);
                } catch (e) {
                    // ignore failures for missing ids
                }
            }

            // Write output to a locale subfolder preserving filename
            const outDir = path.join(root, lang);
            ensureDir(outDir);
            const outPath = path.join(outDir, templateFile);
            fs.writeFileSync(outPath, out, 'utf8');
            console.log('Wrote', outPath);
        });
    });
}

prerender();
