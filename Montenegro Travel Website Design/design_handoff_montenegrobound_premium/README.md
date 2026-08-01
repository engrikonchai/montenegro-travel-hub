# Handoff: MontenegroBound Premium Interactions Upgrade

## Overview
This bundle upgrades the MontenegroBound tourism site (montenegrobound.vercel.app) with premium micro-interactions and polish across all pages: Home, Hotels, Car Rentals, Tours, Blog, About, and a "Plan my trip" itinerary builder. Branding, structure, and content are unchanged — the goal is motion/interaction polish, not a redesign.

## About the Design Files
The `.dc.html` files in this bundle are **design references built as self-contained HTML prototypes** — they show the intended look, layout, copy, and interaction behavior (including exact hover/press states and timing), but they are **not production code to copy directly**. The task is to **recreate these designs inside the existing montenegrobound Next.js codebase**, using its real components, routing, and data (the current live site's actual Hotel/Tour/Blog data), styled with whatever CSS approach the codebase already uses (CSS Modules / Tailwind / styled-components — match what's there). Do not introduce React/Framer Motion/GSAP as net-new dependencies unless the codebase doesn't already have an animation library — if it's plain CSS today, plain CSS transitions/keyframes are fine and preferred for simplicity.

## Fidelity
**High-fidelity.** Colors, spacing, typography, and every interaction (hover lift amounts, transition durations/easings, press-scale values) in the HTML files are final — recreate them pixel- and timing-accurate.

## Screens / Views

### 1. Home (`Home.dc.html`)
- **Purpose:** Landing page — hero, interactive region map, 3 category cards (Hotels/Cars/Tours), value props, latest blog posts, closing CTA.
- **Hero:** Full-height (100vh, min-height 640px) image with gradient overlay, staggered text entrance (title lines, subtitle, CTAs fade+slide in with 0.05s/0.16s/0.3s/0.44s delays, 0.8s cubic-bezier(.16,1,.3,1)), scroll-linked parallax on the hero image (translateY = scrollY × 0.25 for "bold" motion mode, × 0.08 for "calm"), bouncing scroll-indicator chevron.
- **Region map:** Interactive Leaflet map (see `region-map.html`) filterable via pill chips that fly the map to a region and open its popup.
- **Category/blog cards:** White cards, 24px/20px radius, `box-shadow: 0 20px 40px -24px rgba(20,40,80,.2)`; on hover: `translateY(-8px)` + deeper shadow, plus the image inside scales to 1.07 over 0.5s; on press: `translateY(-4px) scale(0.98)`.
- **Scroll-reveal:** Sections/cards fade up (`translateY(26px)→0`, opacity 0→1, 0.7s cubic-bezier(.16,1,.3,1)) as they cross ~90% of viewport height — implement with IntersectionObserver in the real app (the prototype uses a scroll-position check for preview reliability; IntersectionObserver is the correct real-world approach).
- **Scroll-progress bar:** 3px fixed bar at the very top, azure (`oklch(58% 0.16 235)`), width tracks `scrollY / (scrollHeight - innerHeight) * 100`.
- **Sticky mobile CTA:** Below 860px viewport width, a fixed bottom bar with a "Plan my trip →" pill button; it slides off-screen (`translateY(120%)`) when scrolling down past 200px, and slides back when scrolling up (0.3s cubic-bezier(.16,1,.3,1)).

### 2. Hotels / Tours (`Hotels.dc.html`, `Tours.dc.html`)
- Fixed 400px hero image with gradient + title.
- Filter pill row (client-side filter by region/type/category), active pill = azure fill, inactive = light gray.
- Card grid (auto-fit, min 320px), same hover/press/image-zoom behavior as Home's cards.

### 3. Car Rentals (`CarRentals.dc.html`)
- Same hero/header pattern. Agency comparison cards with feature bullet lists; numbered "Before you book" tip list.

### 4. Blog (`Blog.dc.html`)
- Featured post: large 2-column card (image left, text right on desktop, stacks on mobile via `repeat(auto-fit,minmax(300px,1fr))`), hover lifts + deepens shadow, image zooms 1.06.
- Post grid below, same card hover pattern as other pages.

### 5. About (`About.dc.html`)
- 2-column hero (bio text + founder photo, stacks on mobile), "How we work" 4-up value grid, closing gradient CTA band with radial-dot texture overlay.

### 6. Plan / Trip Planner (`Plan.dc.html`)
- **This is the flagship feature.** 3-question wizard (days → interests → transport mode) in a white card (32px radius, big soft shadow), each step animates in with `mbFadeIn` (fade + translateY(14px→0), 0.5s cubic-bezier(.16,1,.3,1)).
- Segmented progress bar (`width: step/3 * 100%`, 0.4s transition).
- Choice buttons (day count, interests, transport) use a shared "chip" style: azure fill when selected, light gray otherwise, `translateY(-3px)` on hover, `scale(0.94)` on press.
- On completion, reveals a day-by-day itinerary (fade in) built from a small template dataset filtered by chosen interests, each day in a bordered card.
- Deals section: hero deal card (2-col, driver service ad) + accordion list of regional activity deals (Durmitor/Kolašin/Coast/Skadar), each with a copyable promo code button that shows "Copied!" for 1.6s after click (`navigator.clipboard.writeText`).
- Interactive places map (`places-map.html`) filterable the same way as the region map.

## Interactions & Behavior (site-wide)
- **Buttons/links/chips:** every interactive element has a hover state (color/bg shift + slight lift, `translateY(-2px)` typically) and a press state (`scale(0.92–0.98)`), transition 0.15–0.2s `cubic-bezier(.16,1,.3,1)`.
- **Nav links:** color shifts to azure on hover, 0.2s ease.
- **Header:** fixed, transparent over the hero, switches to solid white background + shadow once `scrollY > 40`; logo swaps from a white mark to a navy mark at the same threshold.
- **Mobile nav:** hamburger → full-screen overlay menu (slide/fade), closes on link click or X.
- **Footer links:** `rgba(255,255,255,.68)` → white on hover.
- **Responsive breakpoint:** 860px mobile/desktop split throughout (not a standard Tailwind breakpoint — pick the closest, e.g. custom `md` at 860px, or `lg`).

## State Management
- `scrollY`, `scrollDirection`, `viewportWidth` (header state, parallax, sticky-bar direction, reveal triggers).
- `mobileMenuOpen` (bool).
- Hotels/Tours: `activeFilter` (string).
- Plan: `step` (1–4), `days` (number|null), `interests` (string[]), `mode` (string|null), `mapFilter`, `openRegion` (accordion), `copiedId`/`heroCopied` (clipboard feedback, reset after 1.6s via `setTimeout`).

## Design Tokens
- **Colors:** background `oklch(99% 0.004 240)`, ink `oklch(22% 0.03 250)`, azure primary `oklch(58% 0.16 235)` / darker `oklch(46% 0.15 235)`, muted text `oklch(45% 0.02 240)`, light surface `oklch(96.5% 0.008 235)`, dark footer/stat bg `oklch(20% 0.03 250)`, accent orange `oklch(72–74% 0.13–0.16 45–70)` (ratings/highlights).
- **Type:** Headings "Plus Jakarta Sans" 600–800 weight; body "Manrope" 400–700.
- **Radius:** pills `100px`; cards `20–32px`; small elements `14–16px`.
- **Shadows:** cards `0 20px 40px -24px rgba(20,40,80,.2)` → hover `0 30px 54px -20px rgba(20,40,80,.3)`.
- **Easing:** `cubic-bezier(.16,1,.3,1)` used throughout for a premium, slightly overshooting-decelerate feel.

## Assets
- Logo: PNG, white version for dark/hero header state, navy version for scrolled/solid state (both embedded as base64 in the HTML files — extract and host as real image assets).
- Photography: Unsplash images (credited inline in each `image-slot` — keep the credit/attribution or replace with licensed brand photography).
- Maps: Leaflet.js + OpenStreetMap tiles (`region-map.html`, `places-map.html` show the exact marker/popup/fly-to implementation).

## Files
- `Home.dc.html`, `Hotels.dc.html`, `CarRentals.dc.html`, `Tours.dc.html`, `Blog.dc.html`, `About.dc.html`, `Plan.dc.html` — one per page.
- `region-map.html`, `places-map.html` — standalone Leaflet map implementations (embedded via iframe in the prototypes; reimplement as a proper React map component using `react-leaflet` or similar).
- `image-slot.js` — prototype-only placeholder/drag-drop helper, not needed in production (replace with `next/image` or your existing image component).

## Next Steps for Vercel Deploy
This is a documentation package, not a deployable artifact. To ship:
1. Open your real montenegrobound Next.js repo in Claude Code (or your editor of choice).
2. Give Claude Code this README + the reference HTML files and ask it to implement the interactions/polish described above using the codebase's existing components and styling approach.
3. Test locally (`npm run dev`), then `git push` — Vercel's existing auto-deploy will pick it up, same as any other change.
