# Handoff: MontenegroBound Full Redesign

## Overview
This is a **full visual redesign** of the MontenegroBound tourism site (montenegrobound.vercel.app), replacing its current look entirely with the design shown in the attached `.dc.html` reference files. This is not a polish pass on the existing design — the new look (azure/teal accent, Manrope + Plus Jakarta Sans type, card-driven layout, premium micro-interactions) replaces the current serif/cream/dark-hero identity site-wide.

## About the Design Files
The `.dc.html` files are self-contained HTML prototypes showing the exact final look: colors, spacing, typography, copy, layout, and every interaction (hover/press states, transition timing, scroll effects). They are reference material, not code to paste in directly — recreate them inside the real Next.js codebase (`engrikonchai/montenegro-travel-hub`), reusing its real data, routing, and content, rebuilding its components/styling to match this new design system.

## Fidelity
**High-fidelity, full redesign.** Match colors, spacing, typography, and interaction timing exactly as shown in the HTML files.

## Real Codebase Context (read first)
This repo is Next.js (App Router) with Tailwind v4 (CSS variables in `src/app/globals.css`, `@theme inline`), fonts loaded via `next/font/google` (currently Fraunces + Work Sans — **replace with Manrope + Plus Jakarta Sans** to match the new design) in `src/app/layout.js`. Key files to rebuild:
- `src/app/globals.css` — replace the `--ink/--stone/--bronze` "Budva midnight" token set with the new azure palette (see Design Tokens below).
- `src/components/Nav.js` — rebuild as the new glass/solid header with logo color-swap on scroll, new nav link styling, new mobile menu.
- `src/components/Footer.js`, `Coastline.js` — Coastline divider can stay conceptually (a signature mountain-line motif) but re-skin its stroke color to the new azure; footer becomes the dark-navy 3-column footer shown in the new design.
- `src/components/PageHero.js` — rebuild per the new Home hero spec (parallax, staggered entrance, chevron).
- `src/components/HotelCard.js`, `TourCard.js` — rebuild as the new white rounded-card style with image-zoom-on-hover and lift-on-hover.
- `src/app/page.js` and the `hotels/`, `car-rentals/`, `tours/`, `blog/`, `about/` route pages — restyle to match `Hotels.dc.html`, `CarRentals.dc.html`, `Tours.dc.html`, `Blog.dc.html`, `About.dc.html` respectively, keeping their real data (from `src/data/hotels.js`, `src/lib/tours.js`, `content/posts/*.md`).
- There is currently **no trip-planner route** — `Plan.dc.html` describes a new page/feature to add at `/plan`, including a 3-question wizard, itinerary builder, and a deals/promo-code section. Treat this as new functionality, not a restyle.

## Screens / Views

### 1. Home (`Home.dc.html`)
- **Hero:** Full-height image with gradient overlay, staggered text entrance (title/subtitle/CTAs fade+slide in, 0.05s/0.16s/0.3s/0.44s delays, 0.8s `cubic-bezier(.16,1,.3,1)`), scroll-linked parallax on the hero image, bouncing scroll-indicator chevron.
- **Region map:** Interactive Leaflet map (see `region-map.html`) filterable via pill chips that fly the map to a region and open its popup.
- **Category/blog cards:** White cards, 24px/20px radius, `box-shadow: 0 20px 40px -24px rgba(20,40,80,.2)`; hover: `translateY(-8px)` + deeper shadow, image inside scales to 1.07 over 0.5s; press: `translateY(-4px) scale(0.98)`.
- **Scroll-reveal:** Sections/cards fade up (`translateY(26px)→0`, opacity 0→1, 0.7s `cubic-bezier(.16,1,.3,1)`) via IntersectionObserver as they enter the viewport.
- **Scroll-progress bar:** 3px fixed bar at the top, azure, width tracks scroll percentage.
- **Sticky mobile CTA:** Below ~860px viewport, fixed bottom "Plan my trip →" bar; slides off-screen on scroll-down past 200px, back on scroll-up (0.3s `cubic-bezier(.16,1,.3,1)`).

### 2. Hotels / Tours (`Hotels.dc.html`, `Tours.dc.html`)
Fixed 400px hero image + gradient + title. Filter pill row (active = azure fill, inactive = light gray). Card grid (auto-fit, min 320px) with the same hover/press/image-zoom as Home.

### 3. Car Rentals (`CarRentals.dc.html`)
Same hero/header pattern. Agency comparison cards with feature bullet lists; numbered "Before you book" tips.

### 4. Blog (`Blog.dc.html`)
Featured post as a large 2-column card (stacks on mobile), hover lifts + deepens shadow, image zooms 1.06. Post grid below with standard card hover pattern.

### 5. About (`About.dc.html`)
2-column hero (bio + founder photo, stacks on mobile), 4-up "How we work" value grid, closing gradient CTA band with radial-dot texture overlay.

### 6. Plan / Trip Planner (`Plan.dc.html`) — NEW route
Flagship feature. 3-question wizard (days → interests → transport) in a white card (32px radius, soft shadow), each step fades in (`translateY(14px→0)`, 0.5s `cubic-bezier(.16,1,.3,1)`). Segmented progress bar. Chip-style choice buttons (azure when selected). On completion, reveals a day-by-day itinerary. Deals section with a hero deal card + accordion of regional deals, each with a copyable promo code button ("Copied!" feedback for 1.6s via `navigator.clipboard.writeText`). Interactive places map (`places-map.html`).

## Interactions & Behavior (site-wide)
- Every button/link/chip: hover state (color/bg shift + `translateY(-2px)` lift) and press state (`scale(0.92–0.98)`), 0.15–0.2s `cubic-bezier(.16,1,.3,1)`.
- Nav links: color shifts to azure on hover, 0.2s ease.
- Header: fixed; transparent over hero, switches to solid white + shadow past `scrollY > 40`; logo swaps white→navy mark at the same threshold.
- Mobile nav: hamburger → full-screen/slide overlay menu.
- Footer links: `rgba(255,255,255,.68)` → white on hover.
- Responsive breakpoint: ~860px mobile/desktop split throughout.

## State Management
- `scrollY`, `scrollDirection`, `viewportWidth`.
- `mobileMenuOpen`.
- Hotels/Tours: `activeFilter`.
- Plan: `step`, `days`, `interests[]`, `mode`, `mapFilter`, `openRegion`, `copiedId`/`heroCopied` (reset via `setTimeout` after 1.6s).

## Design Tokens (NEW — replaces the current "Budva midnight" set)
- **Background:** `oklch(99% 0.004 240)` (near-white).
- **Ink/text:** `oklch(22% 0.03 250)`.
- **Azure primary:** `oklch(58% 0.16 235)`; darker hover state `oklch(46% 0.15 235)`.
- **Muted text:** `oklch(45% 0.02 240)`.
- **Light surface (chips/filters):** `oklch(96.5% 0.008 235)`.
- **Dark footer/stat band:** `oklch(20% 0.03 250)`.
- **Accent orange (ratings):** `oklch(72–74% 0.13–0.16 45–70)`.
- **Type:** Headings "Plus Jakarta Sans" 600–800; body "Manrope" 400–700.
- **Radius:** pills `100px`; cards `20–32px`; small elements `14–16px`.
- **Shadows:** cards `0 20px 40px -24px rgba(20,40,80,.2)` → hover `0 30px 54px -20px rgba(20,40,80,.3)`.
- **Easing:** `cubic-bezier(.16,1,.3,1)` used throughout.

## Assets
- Logo: need a white version (dark/hero header state) and a navy version (scrolled/solid state) — request these from the user if not already provided, or extract from the `.dc.html` files (embedded as base64).
- Photography: keep using the real site's existing Unsplash/local images where content matches; the `.dc.html` files show which images are used per section.
- Maps: Leaflet.js + OpenStreetMap. `region-map.html` and `places-map.html` show the exact marker/popup/fly-to implementation — reimplement using `react-leaflet`.

## Files
- `Home.dc.html`, `Hotels.dc.html`, `CarRentals.dc.html`, `Tours.dc.html`, `Blog.dc.html`, `About.dc.html`, `Plan.dc.html` — one per page/route.
- `region-map.html`, `places-map.html` — standalone Leaflet implementations to port to `react-leaflet`.
- `image-slot.js` — prototype-only placeholder helper, not needed in production (use `next/image`).

## Next Steps for Vercel Deploy
1. Open the real `montenegro-travel-hub` repo in Claude Code.
2. Give it this README + the reference HTML files, and the prompt below.
3. Test locally (`npm run dev`), then `git push` — Vercel's existing auto-deploy picks it up.
