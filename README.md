# Montenegro Travel Hub — Starter Site

A Next.js starter for your Montenegro tourism affiliate/content site. Homepage,
blog (markdown-powered), and placeholder pages for Hotels / Car Rentals / Tours
are already wired up — customize from here.

## What's in here

- `src/app/page.js` — homepage
- `src/app/blog/` — blog listing + individual post pages (reads from `content/posts/`)
- `src/app/hotels/`, `car-rentals/`, `tours/`, `about/` — your affiliate pages (marked with TODOs)
- `content/posts/` — your blog posts as markdown files (two examples included)
- `src/components/` — Nav, Footer, and a reusable "Coastline" divider graphic
- `src/app/globals.css` — color palette / design tokens, change these to restyle the whole site

## Run it locally

You'll need [Node.js](https://nodejs.org) installed (v18+).

```bash
npm install
npm run dev
```

Then open http://localhost:3000 — it'll hot-reload as you edit files.

## Adding a new blog post

Create a new file in `content/posts/your-post-slug.md`:

```md
---
title: "Your Post Title"
date: "2026-07-15"
excerpt: "One or two sentences that show up on the blog listing page."
---

Your content here, in normal markdown. Use `## Heading` for subheadings.
```

It'll automatically show up on `/blog` and be live at `/blog/your-post-slug` — no
other code changes needed.

## Adding your affiliate links

Open `src/app/hotels/page.js`, `car-rentals/page.js`, and `tours/page.js` — each
has a `TODO` block marking where to drop in your affiliate widget code or
comparison content once your applications are approved:

- Booking.com Partner Hub (hotels)
- Discover Cars / RentalCars.com (car rentals)
- GetYourGuide / Viator (tours & activities)

## Changing the design

All colors live in `src/app/globals.css` as CSS variables (`--ink`, `--stone`,
`--bronze`, `--sage`, `--clay`). Change those values to shift the whole site's
palette without touching component code. Fonts are set in `src/app/layout.js`
(currently Fraunces for headings, Work Sans for body — swap for any Google Font
by changing the import).

## Deploying

The fastest path:

1. Push this folder to a new GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and import the repo.
3. Vercel auto-detects Next.js — click Deploy. No config needed.
4. Once live, connect your custom domain in the Vercel project's Domains tab.

Every time you push a new commit (e.g. a new blog post), Vercel redeploys automatically.

## Before going live

- [ ] Register your domain and connect it in Vercel
- [ ] Add Google Analytics 4 + Search Console
- [ ] Replace the placeholder copy in `about/page.js` with your real story
- [ ] Fill in the three affiliate TODO sections once accounts are approved
- [ ] Write your next 3–5 posts using the format above
