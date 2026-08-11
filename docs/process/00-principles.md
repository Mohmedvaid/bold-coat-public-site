# 00 - Engineering Principles

Principles for this marketing site. Prefer them over cleverness.

## YAGNI

Ship the locked stack only: Astro static, one lead endpoint, three React islands. No CRM, portal, booking, payments, or extra frameworks in this repo.

## Single source of truth

| Concern | Source |
|---|---|
| Hard business and brand rules | `CLAUDE.md` |
| Design tokens and components | `docs/02-design-system.md` |
| Routes, forms, deploy | `docs/03-architecture-and-deploy.md` |
| SEO and content shapes | `docs/04-seo-and-content.md` |
| Calculator numbers | `src/config/calculator.json` only |
| Trust stats and NAP | `src/config/site.ts` only |
| Reviews | `src/content/reviews/reviews.json` only |

If a value is missing or `PENDING`, render nothing or `TODO(mohmed)`. Never invent numbers or claims.

## Small, focused units

- One component, one job.
- Pages compose sections; sections compose primitives.
- React islands only when interactivity requires it (`BeforeAfterSlider`, `EstimateCalculator`, `MobileNav`).
- Prefer deleting code over abstracting early.

## Match the neighborhood

When editing, match existing naming, import style, and file layout in `docs/03`. Do not introduce a second CSS approach, icon set, or state library.

## Accessibility and performance are features

Semantic landmarks, visible focus, keyboard-operable islands, `prefers-reduced-motion`, Lighthouse mobile 95+. Treat regressions as bugs, not polish.

## Documentation with the change

New user-facing capability: add or update a feature doc. Architectural fork: add an ADR. Shortcut: log tech debt the same day.

## Ask vs decide

Decide: structure, spacing, animation details, responsive behavior, file organization.

Ask Mohmed: prices, warranty years, review counts, stats, final business claims, photo picks, Zapier URL, env vars.
