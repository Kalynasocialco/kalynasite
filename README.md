# Kalyna Social Co. — Website

Marketing website for **Kalyna Social Co.**, a social media management agency serving Edmonton-area trades and service-based businesses.

Built as a static, dependency-free site: plain HTML, CSS, and vanilla JavaScript. No build step, no framework, no package manager.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — hero, brand story, services preview, approach, audience, CTA |
| `about.html` | Founder story, beliefs, and background |
| `services.html` | Packages, pricing, comparison table, add-ons, and process |
| `portfolio.html` | Client case studies with results, plus website builds |
| `contact.html` | Contact form and next-steps overview |
| `privacy.html` | Privacy policy |

## Project structure

```
.
├── *.html              # One file per page (see table above)
├── css/
│   ├── base.css        # Design tokens, typography, header, footer, shared components
│   ├── intro.css       # Intro berry-drop animation (home page only)
│   └── <page>.css      # Page-specific styles (home, about, services, etc.)
├── js/
│   ├── main.js         # Shared behavior: nav, scroll reveal, header shrink, stat rotator
│   ├── intro.js        # Home-page intro animation controller
│   └── contact.js      # Contact form submit handler
└── images/             # Logos, photos, client avatars, feed mockups, build thumbnails
```

### CSS conventions

- `css/base.css` is loaded on every page and defines the design tokens (colors, fonts,
  spacing, motion) as CSS custom properties under `:root`, plus shared elements like the
  header, footer, buttons, and scroll-reveal animations.
- Each page then loads its own stylesheet (e.g. `css/home.css`) for page-specific layout.

### JavaScript

- `main.js` runs on every page and handles the mobile nav toggle, scroll-reveal
  animations (via `IntersectionObserver`), the shrinking header, active-nav highlighting,
  and the rotating stat card on the home hero.
- `intro.js` plays the one-time berry-drop intro animation on the home page. It runs once
  per browser session (tracked with `sessionStorage`) and respects
  `prefers-reduced-motion`.
- `contact.js` handles the contact form. **Note:** the form is not yet wired to a
  backend — on submit it shows a message asking visitors to email directly.

## Running locally

No build step is required. Open `index.html` directly in a browser, or serve the folder
with any static file server, for example:

```bash
# Python
python -m http.server 8000

# Node (if you have it)
npx serve .
```

Then visit `http://localhost:8000`.

## Deployment

Any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.). Deploy the
repository root as-is — there is nothing to compile.

## TODO / known gaps

- **Contact form has no backend.** Hook the form in `contact.html` up to a form service
  (Formspree, Netlify Forms, etc.) or an email endpoint, then update `js/contact.js`.

## Contact

- Email: hello@kalynasocial.com
- Phone: (778) 838-1908
- Edmonton & surrounding area.
