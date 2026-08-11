# Feature: Phase 3 City Pages

- **Backlog ID:** B-006, B-007
- **Phase:** 3
- **Status:** done
- **Owner:** agent
- **Skills:** bold-coat-build, bold-coat-seo-content, bold-coat-astro

## Problem

City URLs hold existing equity and must rank without doorway duplication. Each town needs unique housing-stock prose, FAQs, and internal links.

## Scope

In:

- Cities MDX collection with anti-doorway fields
- Root-level `/[slug]` template for the 11 towns
- Winnetka as proof, then the other 10 with unique copy
- Compact estimate form + calculator link
- FAQPage schema; cream placeholders for projects

Out:

- Real project photos and case studies
- Lead API wiring (form posts toward /contact until Phase 9)
- /service-areas page (Phase 7)

## Spec links

- docs/04 city template, docs/03 routes
- DoD: docs/process/04-definition-of-done.md

## Approach

Extend `content.config.ts` with `cities`. Generate only `ready: true` entries. Each MDX file has town-specific body, FAQs (2+ unique), and nearby city links.

## Acceptance criteria

- [x] Eleven city routes build
- [x] Unique meta and H1 per town; FAQPage schema
- [x] 500+ town-specific words in body for each
- [x] Services strip, nearby links, compact form, calculator link
- [x] No invented reviews or PENDING claims
- [x] `npm run build` succeeds; no em dashes

## Open questions for Mohmed

- Final town-specific claims and landmark/HOA wording

## Tech debt / follow-ups

- Replace nearby project placeholders when projects collection ships
- Wire compact form to `/api/lead` in Phase 9
