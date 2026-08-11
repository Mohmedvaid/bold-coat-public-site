# Feature: Phase 2 Services

- **Backlog ID:** B-005
- **Phase:** 2
- **Status:** done
- **Owner:** agent
- **Skills:** bold-coat-build, bold-coat-astro, bold-coat-seo-content

## Problem

Visitors and Google need dedicated service pages for exterior, interior, cabinets, fence/deck, and commercial work, each with unique copy, FAQs, and links into the city network.

## Scope

In:

- MDX services content collection
- Shared service template at `/services/[slug]`
- Five service pages with unique meta, H1, Service + FAQPage schema
- Cream hero placeholders
- Links to all 11 cities and contact/CTA

Out:

- Real photos
- City pages (Phase 3)
- Forms beyond existing CTA links

## Spec links

- docs/03 content collections, docs/04 service meta and linking
- DoD: docs/process/04-definition-of-done.md

## Approach

Define `services` collection in `content.config.ts`, author five MDX entries, render via one dynamic route with FAQ accordion and city strip.

## Acceptance criteria

- [x] Five routes build and appear in sitemap
- [x] Unique title under 60 chars and unique description 140 to 160 chars each
- [x] One H1 per page; Service + FAQPage JSON-LD
- [x] Internal links to all 11 cities and /contact
- [x] No inventing prices, reviews, or PENDING claims
- [x] `npm run build` succeeds; no em dashes

## Open questions for Mohmed

- Final FAQ wording and any service-specific claims

## Tech debt / follow-ups

- Hero photos when archive arrives
