# Feature: Phase 5 Projects

- **Backlog ID:** B-009
- **Phase:** 5
- **Status:** done
- **Owner:** agent
- **Skills:** bold-coat-build, bold-coat-seo-content, bold-coat-astro

## Problem

The site needs a projects hub and case-study template so city/service pages can link to local proof without street addresses or full customer names.

## Scope

In:

- Projects MDX collection
- `/projects` hub and `/projects/[slug]` detail
- Placeholder entries with cream gallery blocks
- ImageGallery + BreadcrumbList schema
- Optional before/after slider when flagged

Out:

- Real photography
- Full archive volume

## Spec links

- docs/03 projects schema, docs/04 project template

## Acceptance criteria

- [x] Hub and at least 3 project pages build
- [x] Unique meta, one H1, no street addresses or full names
- [x] Links to city and service pages
- [x] Cream placeholders only
- [x] `npm run build` succeeds; no em dashes

## Open questions for Mohmed

- Photo archive and final project narratives

## Tech debt / follow-ups

- Replace placeholders when photos arrive
