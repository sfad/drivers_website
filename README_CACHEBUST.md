Cache-busting loader for website assets

What it does

- The inline loader in `index.html` performs a `HEAD` request for each asset (CSS and JS).
- It tries to read `ETag` or `Last-Modified` headers from the response.
- If one is present it appends `?v=<value>` to the asset URL (ETag or Last-Modified URL-encoded).
- If headers are missing or the HEAD request fails, it falls back to using the current timestamp so the browser won't use a cached copy.

Why this helps

- When you replace `css/styles.css` or any `js/*.js` file on the server, the `ETag` or `Last-Modified` value will usually change.
- The appended query string makes the browser request the new file instead of relying on a cached copy.

Server requirements / recommendations

- Ensure your web server returns `ETag` or `Last-Modified` headers for static assets. Most servers (nginx, Apache, static file hosting) do this by default.
- If you use a CDN, confirm it forwards or updates `ETag`/`Last-Modified` appropriately.

Forcing an update (if headers aren't available)

- If your server does not provide helpful headers, the loader falls back to a timestamp which effectively forces reloads but prevents caching entirely. To avoid this, configure your server to provide `Last-Modified` or `ETag` headers.

Notes and limitations

- The loader issues `HEAD` requests which may add a small delay before assets begin loading. This is usually negligible but can affect first-byte time on very slow networks.
- If you prefer, you can replace the runtime loader with build-time hashing (e.g., add a hash to filenames at build time) for more deterministic cache control.
