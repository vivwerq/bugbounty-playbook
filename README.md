# Bug Bounty Playbook — Web Manual

A local, static copy of a Bug Bounty field manual / playbook split into separate HTML, CSS, and JavaScript files.

This repository contains a browsable offline manual intended for authorized security research and learning.

## Files
- `index.html` — Main HTML file (entry point). Open this to view the playbook.
- `style.css` — Styling for the manual (CSS variables, layout, components).
- `script.js` — Client-side behavior (progress bar, sidebar interactions, expand/collapse cards).

> Note: `index.html` currently references `style.css` and `script.js`. If you previously saw `styles.css` or a different filename, verify which CSS file is present in the folder and update the `<link>` in `index.html` accordingly.

## Quick start (view locally)
Easiest option: run a lightweight local HTTP server and open the page in your browser.

```bash
cd /home/comrade/bb-playbook
# Python 3 built-in server (serves on :8000)
python3 -m http.server 8000
# then open in your browser:
# http://localhost:8000/index.html
```

You can also open `index.html` directly in the browser using the file:// URL, but some features (fonts, CORS, or relative fetches) behave more reliably when served over HTTP.

## What to check if something looks off
- Verify the CSS filename referenced in `index.html` matches the file in the repo (common names: `style.css` vs `styles.css`).
- If the page renders oddly or is partially duplicated, open `index.html` in a text editor and check for accidental duplicated sections (e.g., a second `<!DOCTYPE html>` inside the file). If you find duplication, you can:
  - Recreate a clean `index.html` by copying content from the authoritative original (if you have it), or
  - Ask me to rebuild `index.html` from a source version and re-link `style.css` and `script.js`.

## Editing
- CSS: edit `style.css` to tweak styles or theme colors.
- JS: edit `script.js` for behavior changes (navbar filter, progress bar, collapse behavior).
- HTML: edit `index.html` to adjust content, add sections, or change navigation links.
