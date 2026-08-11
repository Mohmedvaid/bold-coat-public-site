# Feature: Phase 1 Homepage

- **Backlog ID:** B-004
- **Phase:** 1
- **Status:** done
- **Owner:** agent
- **Skills:** bold-coat-build, bold-coat-design-system, bold-coat-seo-content

## Problem

The Phase 0 shell is not a converting homepage. Visitors need the full section stack from docs/02 so the site can rank, prove process, and send people to the estimate form.

## Scope

In:

- All ten homepage sections in spec order
- Cream placeholders (no photos, no stock)
- TrustBar / StatsBar / Reviews hide PENDING or empty data
- BeforeAfterSlider React island (keyboard + touch)
- CTABand drip as the page's single fluid motif

Out:

- Real photography
- Calculator island (Phase 4)
- Live reviews (none supplied yet)
- Forms / lead endpoint

## Spec links

- Product: docs/02 homepage section order, docs/04 home meta
- DoD: docs/process/04-definition-of-done.md

## Approach

Compose Astro section components on `src/pages/index.astro`. Reviews load from `src/config/reviews.json` (empty until Mohmed supplies quotes). Stats and aggregate ratings stay in `site.ts` and render nothing while PENDING.

## Acceptance criteria

- [x] Homepage follows docs/02 section order
- [x] Unique title under 60 chars, description 140 to 160 chars, one H1
- [x] No invented reviews, prices, or PENDING claims
- [x] Slider is keyboard operable
- [x] `npm run build` succeeds
- [x] No em dashes

## Open questions for Mohmed

- Final Bold Coat Promise wording
- Process step copy
- Photo archive for hero, slider, featured project

## Tech debt / follow-ups

- Replace cream blocks when photos arrive
- Populate reviews.json with real quotes only
