# Feature: Phase 4 Pricing Calculator

- **Backlog ID:** B-008
- **Phase:** 4
- **Status:** done
- **Owner:** agent
- **Skills:** bold-coat-build, bold-coat-forms-leads, bold-coat-seo-content

## Problem

Cost-intent searchers need a North Shore painting cost page with an honest ballpark tool that converts to estimate requests without undercutting real quotes.

## Scope

In:

- `src/config/calculator.json` (placeholder bands, `approved: false`)
- EstimateCalculator React island (full UX behind the flag; coming-soon when not approved)
- `/pricing` page with 1,200+ words of cost-guide prose and FAQ schema
- Lead capture on results posts to `/api/lead` with phone fallback until Phase 9

Out:

- Approving live bands (Mohmed)
- Zapier/Turnstile wiring
- Blog cost posts (templates later)

## Spec links

- docs/05-calculator-spec.md
- docs/04 pricing meta

## Acceptance criteria

- [x] `/pricing` builds with unique meta and one H1
- [x] Calculator shows coming soon while `approved: false`
- [x] All dollar amounts come only from calculator.json
- [x] FAQPage schema present
- [x] Keyboard-operable step UI exists in the island for when approved flips true
- [x] `npm run build` succeeds; no em dashes
- [x] Cost guide prose exceeds 1,200 words

## Open questions for Mohmed

- Approve or edit calculator.json bands, then set `approved: true`

## Tech debt / follow-ups

- Wire lead POST fully in Phase 9
- Flip approved after Mohmed review
