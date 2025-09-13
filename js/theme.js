(function () {
    const root = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    const storageKey = 'fyr_theme';

    function applyTheme(theme) {
        if (theme === 'light') {
            root.setAttribute('data-theme', 'light');
            toggle.textContent = '🌞';
            toggle.setAttribute('aria-pressed', 'true');
        } else {
            root.removeAttribute('data-theme');
            toggle.textContent = '🌙';
            toggle.setAttribute('aria-pressed', 'false');
        }
    }

    const saved = localStorage.getItem(storageKey);
    if (saved) applyTheme(saved);

    toggle.addEventListener('click', () => {
        const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        const next = current === 'light' ? 'dark' : 'light';
        localStorage.setItem(storageKey, next);
        applyTheme(next);
    });
})();
