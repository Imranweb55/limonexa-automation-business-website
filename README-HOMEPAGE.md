# Limonexa Business Automation — Home Page

This is the complete Home Page build: every file, in the exact folder
structure it belongs in inside your project. Copy everything from this
package straight into your repo root (`limonexa-business-automation-website/`),
overwriting the matching files.

---

## 1. Full folder structure

```
limonexa-business-automation-website/
│
├── index.html                          ← page title updated
├── package.json                        ← Tailwind added as a dependency
├── vite.config.js                      ← Tailwind plugin registered here
│
└── src/
    ├── App.jsx                         ← renders the Home page
    ├── main.jsx                        ← unchanged, entry point
    ├── index.css                       ← Tailwind import + brand theme (see §3)
    │
    ├── assets/
    │   ├── logo/
    │   │   └── limonexa-logo.png       ← your official logo
    │   └── videos/
    │       └── README.txt              ← notes on adding the hero video later
    │
    ├── components/
    │   ├── Navbar/
    │   │   └── Navbar.jsx
    │   ├── Hero/
    │   │   ├── Hero.jsx
    │   │   └── AutomationGraphic.jsx   ← the animated "AI hub" visual
    │   └── CursorEffect/
    │       └── CursorEffect.jsx        ← cursor particle-network effect
    │
    └── pages/
        └── Home/
            └── Home.jsx                ← assembles Navbar + Hero + CursorEffect
```

Every file below is provided in this exact same folder layout — just drag
the whole thing into your project and let it overwrite.

---

## 2. Where each file goes (plain language)

| File you received              | Where it lives in your project                          |
|---------------------------------|-----------------------------------------------------------|
| `index.html`                    | project root (same level as `package.json`)              |
| `package.json`                  | project root                                              |
| `vite.config.js`                | project root                                              |
| `src/App.jsx`                   | `src/App.jsx`                                              |
| `src/index.css`                 | `src/index.css`                                            |
| `src/assets/logo/limonexa-logo.png` | `src/assets/logo/limonexa-logo.png`                   |
| `src/assets/videos/README.txt`  | `src/assets/videos/README.txt`                             |
| `src/components/Navbar/Navbar.jsx` | `src/components/Navbar/Navbar.jsx`                     |
| `src/components/Hero/Hero.jsx`  | `src/components/Hero/Hero.jsx`                              |
| `src/components/Hero/AutomationGraphic.jsx` | `src/components/Hero/AutomationGraphic.jsx`     |
| `src/components/CursorEffect/CursorEffect.jsx` | `src/components/CursorEffect/CursorEffect.jsx` |
| `src/pages/Home/Home.jsx`       | `src/pages/Home/Home.jsx`                                   |

If a folder doesn't exist yet in your repo (e.g. `src/components/Hero/`),
just create it — most code editors let you create a new folder by typing
`components/Hero/Hero.jsx` as the filename when you hit "New File", and it
creates the folders automatically.

**Delete these old files if they exist in your repo** — their styles were
moved into Tailwind classes directly in the `.jsx` files, so the separate
CSS files are no longer used:
```
src/components/Navbar/Navbar.css
src/components/Hero/Hero.css
src/components/Hero/AutomationGraphic.css
src/components/CursorEffect/CursorEffect.css
src/pages/Home/Home.css
src/styles/variables.css   (and the src/styles folder, if now empty)
```

---

## 3. How Tailwind is configured (step by step)

**Step 1 — install the packages.** From your project root:
```bash
npm install tailwindcss @tailwindcss/vite
```
(This is already listed in the `package.json` you received — running
`npm install` in your project will pull these in automatically.)

**Step 2 — register the plugin.** `vite.config.js` imports Tailwind's Vite
plugin and adds it to the `plugins` array:
```js
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**Step 3 — import Tailwind + define the brand theme.** This all happens in
`src/index.css`, which is imported once in `src/main.jsx` (already wired up,
no change needed there). The top of the file:
```css
@import "tailwindcss";

@theme {
  --color-brand-navy: #06192f;
  --color-brand-blue: #0764c0;
  --color-brand-blue-pale: #7ec1ff;
  /* ...etc — sampled directly from your logo */
}
```
Registering colors this way is what makes classes like `bg-brand-blue`,
`text-brand-blue-pale`, `border-brand-blue-pale/28` work anywhere in the
components — Tailwind generates the utility classes from these variables
automatically. No `tailwind.config.js` file is needed; Tailwind v4 reads
config straight from CSS.

The same file also defines the custom animations used by the hero graphic
(`animate-ag-pulse`, `animate-ag-float`, `animate-ag-spin`, etc.) as
`@keyframes` + `--animate-*` theme entries, for the same reason: Tailwind
needs a keyframe animation defined once, globally, before a class can use it.

**Step 4 — run it.**
```bash
npm install
npm run dev       # local development at http://localhost:5173
npm run build     # production build → outputs to dist/
```
Nothing else is required — no separate Tailwind CLI step, no PostCSS config
file. The Vite plugin handles compilation on save.

---

## 4. About the logo

`src/assets/logo/limonexa-logo.png` is the exact logo file you provided,
untouched — same colors, same shape. It's placed on a dark navbar using
`mix-blend-mode: screen` (a `mix-blend-screen` Tailwind class in
`Navbar.jsx`) so its light background disappears visually without actually
editing the image. If you'd like an image with the background truly removed
(a transparent PNG), let me know and I'll process that separately.

---

## 5. About the hero video

No video file was ever uploaded to this conversation — only the logo and a
design reference screenshot. The hero currently uses a live animated
"AI hub" graphic (`AutomationGraphic.jsx`) in its place. Once you upload
your video, drop it at `src/assets/videos/hero.mp4` and open `Hero.jsx` —
there's a comment block labeled `VIDEO_SLOT` showing exactly how to swap the
graphic for the video while keeping the same scroll animation.

---

## 6. Scope reminder

Per your original spec, this delivery covers **only the Home Page**
(Navbar + Hero section). Other pages (About, Services, Solutions, Contact,
Pricing, Case Studies) were intentionally left untouched, ready for the next
step whenever you're ready.
