# Chicagoland SEO & Market Fit Research

**Date:** 2026-08-10  
**Status:** briefing (not a build phase)  
**Audience:** internal strategy for Bold Coat Painters

Companion canvas: open `chicagoland-seo-markets.canvas.tsx` beside chat for the interactive tables.

## Framing (important)

Target markets by **home value, estate density, and willingness to pay for prep-heavy work**. Do not target (or avoid) towns by ethnicity or immigration status. Low-median suburbs and many South / far-SW Chicago pockets are a poor fit because average tickets will not support premium scopes. That is an economics filter, not a demographic one.

## Where rankings actually come from

For a local painter, page-one rankings are won by **money pages**, not blog alone:

1. **City pages** (`/winnetka`, `/hinsdale`, …) for `house painters [town]`
2. **Service pages** for `[service] north shore` / Chicago suburbs
3. **`/pricing`** for cost-calculator and “cost to paint…” queries
4. **Blog** as support: cost education, surface problems, quote comparison, then internal links into 1 to 3

Old WP failure mode (from docs/01): ~27 near-duplicate doorway city pages, no real blog depth, position ~45. The rebuild already fixes uniqueness for 11 premium towns. Do not recreate thin pages for Skokie, Naperville, or broad Chicago.

### Competitor pattern

Z&Z and similar firms rank with long, town-specific FAQ posts (“House painters in Lake Forest: every question…”). Franchise location pages are weak on design and uniqueness. Bold Coat should steal the **local FAQ depth** and beat them on design, real projects, unique city prose, and the calculator (prices only from `calculator.json`).

### Query clusters that convert

| Cluster | Examples | Best page |
|---|---|---|
| Town + painter | house painters Winnetka, painters Kenilworth IL | City page |
| Town + exterior | exterior painters Highland Park | City + exterior service |
| Cost | cost to paint house exterior Chicago / North Shore | /pricing + cost blog |
| Surface | cedar siding painting North Shore | Blog → exterior |
| Decision | how to compare painting quotes | Blog → contact |
| Cabinets | cabinet painting vs replace Chicago | Blog → cabinets |

## Premium markets to prioritize

Approx. 2025 single-family medians from Chicago Magazine’s June/July 2026 suburb rankings (methodology varies; treat as relative bands). Kenilworth medians from parallel realtor guides.

### Core (already on site or must stay primary)

| Town | Median (approx) | Note |
|---|---|---|
| Winnetka | $1.98M | Proof city; keep perfecting |
| Glencoe | $1.70M | Cedar/stucco, lake exposure |
| Hinsdale | $1.41M | Western prestige corridor |
| Lake Forest | $1.38M | Estate scale |
| Wilmette | $1.28M | Strong volume + lakefront |
| Northfield | $1.18M | Quiet premium pocket |
| Oak Brook | $1.08M | High values, lower density |
| Glenview | $870K | Hardie/vinyl volume + estates |
| Highland Park | $856K | Ravinia + mid-century mix |
| Northbrook | $850K | Solid ticket sizes |
| Kenilworth | ~$1.4M–$2M+ | Tiny, ultra-premium |

### Strong expansion (no dedicated city page yet)

Only after the 11 cores move in GSC. Prefer content or selective ads first; full city pages only if unique prose exists.

| Town | Median (approx) | Why |
|---|---|---|
| South Barrington | ~$1.13M | Large lots, estate exteriors |
| Burr Ridge | ~$1.1M–$1.25M | Pairs with Hinsdale / Oak Brook |
| Western Springs | $913K | Strong west fit |
| Long Grove | $990K | NW premium; less doorway spam |
| River Forest | $935K | Historic homes |
| Lake Bluff | $865K | Natural North Shore extension |
| Deerfield | $750K | Spill from HP / Lake Forest |
| La Grange | $730K | West cluster with Western Springs |

### Soft / selective (affluent but not primary SEO bets)

- **Evanston** (~$824K): mixed housing, heavy competition, students/rentals dilute average ticket
- **Naperville** (~$700K): large affluent market but franchise battlefield; mid tickets common
- Use `/service-areas` or paid search; do not build doorway city pages yet

## Markets to deprioritize

| Area | Median (approx) | Why |
|---|---|---|
| Skokie | ~$489K | Tickets rarely match premium prep scopes |
| Niles / Schaumburg | ~$450–475K | Franchise price competition |
| Aurora / Bolingbrook | ~$360–395K | Volume market, wrong economics |
| South / far-SW city pockets | often under ~$250K | Home values below premium band |
| Broad “Chicago” SEO pages | mixed | Dilutes brand; keep redirect → `/service-areas` |

Old WP also ranked dozens of city+service combos (`/skokie/exterior-painting`, etc.). Those now 301 correctly. Do not bring them back as thin content.

## Blog ideas

Ship after launch, about one per week. First eight in docs/04 still stand; expanded below.

### P0 (first ~8 weeks): high intent

1. How Much Does Exterior House Painting Cost on the North Shore (2026) → `/pricing`, Winnetka, Wilmette  
2. Interior Painting Cost Guide for Chicago Suburbs (2026) → `/pricing`, interiors  
3. Cedar Siding on the North Shore: Why Lake Weather Eats Cheap Paint Jobs → exterior, Glencoe, Winnetka  
4. How to Compare Painting Quotes Without Getting Burned → contact, process  
5. Cabinet Painting vs Replacement: Real Numbers for Chicago Kitchens → cabinets, `/pricing` (ranges only from calculator.json)  
6. When Is the Best Time to Paint Your Home Exterior in Chicago → exterior, contact  
7. Brick, Stucco, and Hardie: How Prep Differs by Surface → exterior  
8. The Best Exterior Paint Colors for North Shore Homes (With Local Examples) → projects, cities  

### P1 (months 3 to 4): local SERP depth (Z&Z-style)

One long “every question homeowners ask” post per core town, starting with:

- Winnetka  
- Lake Forest  
- Hinsdale  
- Wilmette  
- Highland Park  

Each must link the matching city page and stay unique (no template swap of the town name).

### P2 (niche premium)

- Landmark / historic-district paint considerations (Winnetka, Hinsdale, River Forest)  
- Estate exteriors: scaffolding, trim runs, carriage houses (Lake Forest, Kenilworth)  
- HOA / subdivision paint rules (Oak Brook, Burr Ridge)  
- Fence and deck staining through freeze-thaw on the North Shore  
- Occupied-home interior painting for professionals who work from home  

Hard rules still apply: no invented prices, no PENDING trust numbers, no business-model internals, no em dashes.

## Recommended sequence

1. Keep SEO gravity on the live **11 cities + 5 services + /pricing**.  
2. After visual launch finish, publish **P0** posts and interlink hard.  
3. Add **town FAQ** posts for the top five cores.  
4. Expand geography only then: Lake Bluff, Western Springs, Burr Ridge, South Barrington.  
5. Leave Phase 9 (lead API) deferred per process docs; phone fallback is fine until launch polish is done.

## Sources

- Chicago Magazine, “The Best Suburbs to Call Home,” June/July 2026 (205 suburbs, 2025 SFH median sale prices via MRED)  
- Local North Shore / luxury suburb market guides (2025–2026 realtor roundups)  
- Competitor content samples: Z&Z Painting town FAQ posts, Big League location pages, regional cost guides  

Update this file when GSC shows which towns move first, or when Mohmed approves expansion city pages.
