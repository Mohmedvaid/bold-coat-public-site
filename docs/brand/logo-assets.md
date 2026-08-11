# Brand logo assets

**Status:** SVG masters checked into `public/brand/`. Site nav still uses the HTML wordmark in `Logo.astro` until you swap it to these files.  
**Source of truth for colors:** `docs/02-design-system.md` (navy `#1F2A44`, cream `#F1EBE0`, ink `#1A1A1A`, red `#D9402E`, gold `#F2C94C`).

## What is in the repo now

| File | Use |
|---|---|
| [`/brand/logo-wordmark.svg`](../../public/brand/logo-wordmark.svg) | Master wordmark (`currentColor` + red/gold dots) |
| [`/brand/logo-wordmark-on-navy.svg`](../../public/brand/logo-wordmark-on-navy.svg) | Cream text for navy nav/footer |
| [`/brand/logo-wordmark-on-paper.svg`](../../public/brand/logo-wordmark-on-paper.svg) | Ink text for light backgrounds |
| [`/brand/logo-mark.svg`](../../public/brand/logo-mark.svg) | Square mark (red + gold dots on navy) |
| [`/favicon.svg`](../../public/favicon.svg) | Browser tab icon (same mark, 32 viewBox) |

The live site wordmark you liked is the Fraunces treatment in `Logo.astro` (dots in both O letters). These SVGs match that idea. **Text is still live type**, not outlined paths. Before final WebP/PNG export, open the SVG in Figma or Illustrator, install Fraunces, convert text to outlines, then export. That locks the lettershapes so they do not depend on the viewer having the font.

## Do you need WebP of the logo?

Usually **no for the website header**.

- **SVG** is best for the logo on the site: tiny file, sharp on all screens, no CLS from raster scaling, perfect Lighthouse story.
- **WebP / PNG / JPG** are for places that do not accept SVG well, or for social/SEO cards that expect a raster.

So: keep SVG for nav/footer/favicon. Export WebP/PNG only for the pack below.

## Asset pack to export (SEO + speed)

### Always ship on the site

| Asset | Format | Size | Why |
|---|---|---|---|
| Header / footer wordmark | **SVG** | as-is | Fastest, sharpest |
| Favicon | **SVG** | already in `/favicon.svg` | Modern browsers |
| Apple touch icon | **PNG** | 180×180 | iOS home screen; no SVG |
| Legacy favicon (optional) | **ICO** or 32×32 PNG | 32×32 | Older clients; low priority |

### SEO / share / Google

| Asset | Format | Size | Why |
|---|---|---|---|
| Open Graph / Twitter default | **JPG or WebP** | **1200×630** | Linked in `Base.astro` as `/og-default.jpg` (missing today). Navy field + wordmark + short line of copy. |
| JSON-LD / Organization logo | **PNG or JPG** | **112×112 min**, prefer **1200×1200** or use the GBP square | `image` on LocalBusiness schema |
| Google Business Profile logo | **PNG** | **720×720** (up to 1080×1080) | Square mark, not the wide wordmark. Reads in a circle crop. |
| GBP cover (optional) | **JPG** | **1024×576+** | Project photo later; not the logo |

### Nice to have (off-site)

| Asset | Format | Size | Why |
|---|---|---|---|
| Email signature | PNG | ~200–280px wide wordmark @2x | Many email clients hate SVG |
| Meta / Google / Thumbtack ads | PNG or JPG | per platform | Usually square mark + wordmark lockup |
| Print / yard signs | PDF or outlined SVG | vector | Out of web scope |

## Recommended export recipe (for you in Figma)

1. Open `logo-wordmark-on-navy.svg` and `logo-mark.svg`.
2. Install Fraunces, convert text to outlines.
3. Export:
   - `logo-mark-720.png` (720×720, navy square + dots) → GBP + schema
   - `apple-touch-icon.png` (180×180, opaque, same mark)
   - `og-default.jpg` (1200×630): navy background, cream wordmark centered or left, optional short line “North Shore painters”
4. Keep SVG as the site source. Do not replace the header with a WebP logo.

## Performance notes

- One SVG wordmark inline or as `<img src="/brand/...">` is typically **under a few KB**. Better than a 40KB WebP logo.
- Do not lazy-load the header logo (LCP-adjacent).
- Prefers-reduced-motion does not affect static logos.
- When photos arrive, put **photos** through `astro:assets` as AVIF/WebP. Logos stay SVG.

## Site wiring (follow-up)

When you are ready:

1. Point `Logo.astro` at `/brand/logo-wordmark-on-navy.svg` (or inline the SVG).
2. Add `<link rel="apple-touch-icon" href="/apple-touch-icon.png" />` in `Base.astro`.
3. Add real `/og-default.jpg` and reference it (already the default prop).
4. Point LocalBusiness `image` at the square mark URL once hosted.
5. Close TD-005 (typed wordmark until real SVG).

Until outlines are exported, the HTML `Logo.astro` wordmark remains a valid on-site stand-in because Fraunces is already self-hosted.
