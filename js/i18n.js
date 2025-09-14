(function () {
    const langs = { en: 'English', fr: 'Français', ar: 'العربية' };
    const select = document.getElementById('lang-select');
    const storageKey = 'fyr_lang';

    async function loadLocale(lang) {
        try {
            // Add cache busting parameter to ensure fresh fetch
            const timestamp = Date.now();
            const res = await fetch(`i18n/${lang}.json?v=${timestamp}`);
            if (!res.ok) {
                throw new Error(`HTTP ${res.status}`);
            }
            const data = await res.json();
            console.log(`Loaded ${lang} locale with ${Object.keys(data).length} keys`);
            applyTranslations(data);
            handleRTL(lang);
        } catch (e) {
            console.warn('i18n load failed', e);
            // Fallback to English if translation fails
            if (lang !== 'en') {
                loadLocale('en');
            }
        }
    }

    function applyTranslations(data) {
        let applied = 0;
        for (const [k, v] of Object.entries(data)) {
            const el = document.getElementById(k);
            if (el) {
                if (el.tagName === 'META') {
                    el.setAttribute('content', v);
                } else if (el.tagName === 'TITLE') {
                    // Force title update by setting both
                    el.textContent = v;
                    setTimeout(() => {
                        document.title = v;
                    }, 10);
                } else {
                    el.textContent = v;
                }
                applied++;
            }
        }
        console.log(`Applied ${applied} translations out of ${Object.keys(data).length} available keys`);
    }

    function handleRTL(lang) {
        const html = document.documentElement;
        const body = document.body;

        if (lang === 'ar') {
            html.setAttribute('dir', 'rtl');
            html.setAttribute('lang', 'ar');
            body.classList.add('rtl');

            // Update CSS custom properties for RTL
            document.documentElement.style.setProperty('--text-align', 'right');
            document.documentElement.style.setProperty('--flex-direction', 'row-reverse');
        } else {
            html.removeAttribute('dir');
            html.setAttribute('lang', lang);
            body.classList.remove('rtl');

            // Reset CSS custom properties
            document.documentElement.style.setProperty('--text-align', 'left');
            document.documentElement.style.setProperty('--flex-direction', 'row');
        }
    }

    function initLanguageSelector() {
        // Get saved language or detect from browser
        const browserLang = navigator.language.split('-')[0];
        const supportedLangs = Object.keys(langs);
        const saved = localStorage.getItem(storageKey) ||
            (supportedLangs.includes(browserLang) ? browserLang : 'en');

        select.value = saved;
        loadLocale(saved);

        // Add smooth transition for language changes
        select.addEventListener('change', (e) => {
            const lang = e.target.value;
            console.log(`Language selected: ${lang}`);
            localStorage.setItem(storageKey, lang);

            // Add loading animation
            document.body.style.opacity = '0.8';
            document.body.style.transition = 'opacity 0.3s ease';

            setTimeout(() => {
                loadLocale(lang);
                document.body.style.opacity = '1';
            }, 150);
        });
    }

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLanguageSelector);
    } else {
        initLanguageSelector();
    }

    // Add CSS for RTL support
    const rtlStyles = `
        .rtl .hero-actions {
            flex-direction: row-reverse;
        }
        .rtl .header-inner {
            flex-direction: row-reverse;
        }
        .rtl .main-nav {
            flex-direction: row-reverse;
        }
        .rtl .controls {
            flex-direction: row-reverse;
        }
        .rtl .system-grid {
            direction: rtl;
        }
        .rtl .benefits-grid {
            direction: rtl;
        }
        .rtl .benefit-item {
            flex-direction: row-reverse;
        }
        .rtl .store-buttons {
            flex-direction: row-reverse;
        }
        .rtl .cta-buttons {
            flex-direction: row-reverse;
        }
        .rtl .legal-actions {
            flex-direction: row-reverse;
        }
    `;

    // Inject RTL styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = rtlStyles;
    document.head.appendChild(styleSheet);
})();
