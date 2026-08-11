---
name: bold-coat-design-system
description: Bold Coat visual system: colors, typography, motion, brush-stroke underline, before/after slider, core components. Use when styling UI, building homepage sections, or adding visual motifs.
---

# Bold Coat Design System

## Spec

Authoritative detail: `docs/02-design-system.md`. Do not invent a second palette.

## Color (exact)

| Token | Hex | Role |
|---|---|---|
| navy | #1F2A44 | Primary, fluids, nav/footer |
| midnight | #151F33 | Navy hover, footer strip |
| paper | #FBFAF7 | Background |
| cream | #F1EBE0 | Alternating bands |
| ink | #1A1A1A | Text |
| red | #D9402E | CTAs, links, solid accents only |
| gold | #F2C94C | Stars, tiny dots, one underline max |
| stone | #8A857D | Meta/captions |

**Critical:** Red never for drips/splatter/fluids. Fluids are navy only. One drip motif per page max.

Avoid generic AI looks (purple gradients, terracotta-on-cream serif clichés). Stay on this logo-anchored system.

## Type

- Display: Fraunces Variable (headlines only, never below 24px)
- Body/UI: Inter Variable
- Labels: Inter uppercase letterspaced eyebrows, max one per section

## Signature motion

1. Brush-stroke underline on one hero keyword (SVG stroke-dashoffset, ~500ms)
2. Before/after slider: navy handle, red dot grip, keyboard operable

Scroll reveals: opacity + 12px, 300ms, stagger 60ms. Never on LCP/hero image. `prefers-reduced-motion` → opacity fades only. Nothing loops infinitely.

## Photography

Real project photos only. Until archive exists, cream placeholder blocks with correct aspect ratios. Never stock.

## Homepage order

Follow the numbered section list in docs/02 exactly.

## Related

- Perf budget: personal `frontend-performance`
- Build rules: `bold-coat-build`
