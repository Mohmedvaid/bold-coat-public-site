# SEO Research (locked markets)

**Date:** 2026-08-10  
**Status:** approved direction for site geography and content  
**Audience:** internal (Bold Coat Painters)

This is the canonical market + SEO briefing. Do not expand city pages or public “we serve” lists beyond the towns below without an explicit decision.

Companion canvas (optional): `chicagoland-seo-markets.canvas.tsx` in the Cursor canvases folder.

## Locked policy

**We only market and SEO-target:**

1. **Core 11** (live city pages today)
2. **Expansion 8** (listed on `/service-areas` only for now; no city pages until cores move and unique prose exists)

**We do not** build doorway pages, blog hubs, or primary nav/footer emphasis for Skokie, Naperville, Evanston, Chicago, Schaumburg, Aurora, Bolingbrook, Niles, South Side / far-SW city pockets, or other low-fit suburbs from the old WordPress map.

Old WP URLs for those towns stay as **301 redirects** in `vercel.json` (equity capture). Redirects are not an invitation to re-publish thin location content.

Target by **home value, estate density, and ticket fit**, not demographics.

## Core 11 (primary SEO)

Live at `/{slug}`. Own these SERPs first.

| Town | Slug | Median (approx) | Note |
|---|---|---|---|
| Winnetka | winnetka | $1.98M | Proof city |
| Glencoe | glencoe | $1.70M | Cedar/stucco, lake exposure |
| Kenilworth | kenilworth | ~$1.4M–$2M+ | Tiny, ultra-premium |
| Hinsdale | hinsdale | $1.41M | Western prestige |
| Lake Forest | lake-forest | $1.38M | Estate scale |
| Wilmette | wilmette | $1.28M | Volume + lakefront |
| Northfield | northfield | $1.18M | Quiet premium pocket |
| Oak Brook | oak-brook | $1.08M | High values, lower density |
| Glenview | glenview | $870K | Hardie/vinyl + estates |
| Highland Park | highland-park | $856K | Ravinia + mid-century |
| Northbrook | northbrook | $850K | Solid ticket sizes |

Medians: Chicago Magazine June/July 2026 suburb rankings (2025 SFH sales) where available; Kenilworth from parallel market guides. Treat as relative bands.

## Expansion 8 (after cores; no city pages yet)

Listed in `site.additionalAreas` and on `/service-areas`. Full city pages only after GSC movement on the core 11 and approved unique copy.

| Town | Median (approx) | Why |
|---|---|---|
| South Barrington | ~$1.13M | Large lots, estate exteriors |
| Burr Ridge | ~$1.1M–$1.25M | Pairs with Hinsdale / Oak Brook |
| Long Grove | $990K | NW premium |
| River Forest | $935K | Historic homes |
| Western Springs | $913K | Strong west fit |
| Lake Bluff | $865K | North Shore extension |
| Deerfield | $750K | Spill from HP / Lake Forest |
| La Grange | $730K | West cluster with Western Springs |

## Out of scope (do not market)

Examples only. Not exhaustive.

- Skokie, Niles, Schaumburg, Lincolnwood  
- Naperville, Aurora, Bolingbrook, Plainfield  
- Broad Chicago / South Side / far-SW city SEO pages  
- Evanston as a primary SEO bet (mixed tickets; competition)  

If someone from an out-of-scope town requests an estimate, handle case by case. Do not chase them with location pages.

## How rankings are won

Money pages first, blog second:

1. City pages for `house painters [town]`
2. Service pages for `[service] north shore`
3. `/pricing` for cost / calculator queries
4. Blog that links into 1 to 3 (cost, cedar/weather, quote comparison, town FAQs)

Competitor note: Z&Z-style long town FAQ posts rank. Franchise doorway pages are weak. Steal local depth; beat them on design, projects, unique prose, calculator (prices only from `calculator.json`).

### Query clusters

| Cluster | Examples | Best page |
|---|---|---|
| Town + painter | house painters Winnetka | City page |
| Town + exterior | exterior painters Highland Park | City + exterior |
| Cost | cost to paint house exterior North Shore | /pricing + cost blog |
| Surface | cedar siding painting North Shore | Blog → exterior |
| Decision | how to compare painting quotes | Blog → contact |
| Cabinets | cabinet painting vs replace Chicago | Blog → cabinets |

## Blog queue (post-launch, ~1/week)

### P0

1. Exterior painting cost on the North Shore (2026)  
2. Interior painting cost guide for Chicago suburbs (2026)  
3. Cedar siding + lake weather  
4. How to compare painting quotes  
5. Cabinet painting vs replacement  
6. Best time to paint exteriors in Chicago  
7. Brick, stucco, and Hardie prep differences  
8. Best exterior colors for North Shore homes  

### P1 (town FAQ depth)

Winnetka, Lake Forest, Hinsdale, Wilmette, Highland Park (unique posts only).

### P2 (niche premium)

Landmark/historic paint rules; estate exteriors; HOA rules in Oak Brook / Burr Ridge; deck/fence freeze-thaw; occupied-home interiors.

Hard rules still apply (CLAUDE.md): no invented prices, no PENDING trust claims, no em dashes.

## Site cleanup checklist (from this decision)

- [x] Canonical research doc at `docs/research/seo-research.md`
- [x] `site.additionalAreas` limited to Expansion 8
- [x] `/service-areas` copy matches locked lists
- [ ] Do not add new city pages outside Core 11 without approval
- [ ] Keep `vercel.json` redirects for old WP towns (301 only)

## Sources

- Chicago Magazine, “The Best Suburbs to Call Home,” June/July 2026  
- North Shore / luxury suburb market guides (2025–2026)  
- Competitor samples: Z&Z town FAQs, Big League location pages, regional cost guides  

Supersedes the earlier draft filename `2026-08-chicagoland-seo-markets.md`.
