# Professional Website

A clean, responsive static website built with HTML, CSS, and JavaScript. Ready to host on GitHub Pages, Netlify, or any static host.

## Structure

```
professional-website/
├── index.html          # Home
├── about.html          # About
├── services.html       # Services
├── contact.html        # Contact
├── 404.html            # Not found (for static hosts that support it)
├── css/
│   ├── variables.css   # Design tokens
│   ├── base.css        # Reset & typography
│   └── main.css        # Layout & components
├── js/
│   ├── main.js         # Entry & global behavior
│   ├── navigation.js   # Nav & mobile menu
│   └── utils.js        # Shared helpers
└── assets/             # Images, icons (optional)
```

## Run locally

Open `index.html` in a browser, or use a simple server:

```bash
# Python 3
python -m http.server 8080

# Node (npx)
npx serve .
```

Then visit `http://localhost:8080`.

## Deploy

- **GitHub Pages:** Push to a repo, enable Pages in Settings, select branch (e.g. `main`).
- **Netlify / Vercel:** Drag the folder or connect the repo; no build step needed.

## License

MIT
