This folder contains small tools used to produce static artifacts for the `website/` site.

prerender.js
- Purpose: Reads `website/index.html` and the locale files in `website/i18n/*.json` and produces localized static pages at `website/<lang>/index.html`.
- Usage (from the `website/` folder):

```bash
node tools/prerender.js
```

Notes
- The script replaces element inner text by matching `id` attributes in `index.html` with keys in the locale JSON.
- It sets `<html lang="xx">` and `dir="rtl"` for Arabic.
- If you later change the template structure, ensure the ids used in the i18n JSON map to elements in the template.
