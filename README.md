# Find Your Ride — Website (Static)

Local preview

1. Open `index.html` in a browser (you can run a simple static server):

```bash
# from project root
python3 -m http.server 8000 --directory website
# then open http://localhost:8000
```

The remote site is at https://findyouride.com

Notes
- This is a static production-ready site using HTML/CSS/JS only.
- Translations are in `i18n/` (EN, FR, AR). Language toggling uses `localStorage`.
- Theme toggling is available in the header and persists via `localStorage`.
- Logo assets are referenced from `drivers_app/assets/icons/` (canonical source). If you want them copied into `website/assets/icons/`, approve and I'll copy them.
