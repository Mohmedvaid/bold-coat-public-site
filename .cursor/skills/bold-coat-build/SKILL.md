---
name: bold-coat-build
description: Enforces Bold Coat Painters hard rules, build phases, ask-vs-decide, and definition of done. Use when building any page or feature in bold-coat-public-site, starting work, or checking launch readiness.
---

# Bold Coat Build

## Before any code

1. Read `CLAUDE.md` hard rules.
2. Read `docs/01` through `docs/05` as needed for the task.
3. Read `docs/README.md` and confirm current phase in `docs/process/01-phases.md`.
4. Pick or update a backlog row in `docs/process/02-backlog.md`.
5. Create/update a feature doc from `docs/templates/feature.md` when starting a capability.

## Hard rules (never violate)

Summaries only. Full text is in `CLAUDE.md`:

1. No em dashes anywhere.
2. Prices only from `src/config/calculator.json`. Else `TODO(mohmed)`.
3. No business-model internals in copy. Sell outcomes.
4. Reviews only from `reviews.json`. First name + town. No competitors.
5. Red never for fluid paint motifs. Fluids are navy only.
6. Trust claims only from `site.ts`. PENDING means render nothing.
7. Unique title, meta, one H1, canonical, OG, schema, alts.
8. A11y floor + reduced motion.
9. Lighthouse mobile 95+ budget.
10. No cookie consent banner.

## Ask vs decide

**Decide:** structure, spacing, animation details, responsive behavior, file layout.

**Ask Mohmed:** any price, warranty years, review counts, stats, final business claims, photos, Zapier URL, env vars.

## Done gate

Run `docs/process/04-definition-of-done.md` before claiming a page or PR is done.

## Related skills

- `bold-coat-astro`, `bold-coat-design-system`, `bold-coat-seo-content`, `bold-coat-forms-leads`
- Personal: `clean-code`, `git-branching-workflow`, `frontend-performance`
