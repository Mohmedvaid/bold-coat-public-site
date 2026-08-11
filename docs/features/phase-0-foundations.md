# Feature: Phase 0 Foundations

- **Backlog ID:** B-001, B-002, B-003
- **Phase:** 0
- **Status:** done
- **Owner:** agent
- **Skills:** bold-coat-build, bold-coat-astro, bold-coat-design-system

## Problem

Repo is docs-only. Need a runnable Astro site shell with design tokens, base layouts, Navbar, and Footer before any page content.

## Scope

In:

- Astro 5 static scaffold + Tailwind v4 + React integration
- Fonts (Fraunces + Inter variable) with swap and size-adjust
- `src/config/site.ts` with NAP, PENDING trust fields
- `global.css` `@theme` tokens from docs/02
- `Base.astro` / `Page.astro`, Navbar, Footer, MobileNav island
- Stub homepage proving layout shell
- Minimal `public/robots.txt`

Out:

- Homepage sections (Phase 1)
- Content collections, forms, calculator, redirects map

## Spec links

- Product: docs/02, docs/03
- DoD: docs/process/04-definition-of-done.md (shell: no horizontal scroll at 360px)

## Approach

Scaffold with official Astro tooling, wire Tailwind v4 via Vite plugin, port tokens, build navy nav/footer per design system with cream wordmark logo component until real SVG assets arrive.

## Acceptance criteria

- [x] `npm run build` succeeds
- [x] Tokens match docs/02 hex values
- [x] Sticky navy Navbar with phone + Free Estimate CTA
- [x] Footer with four columns + NAP + midnight copyright bar
- [x] PENDING warranty/reviews not rendered as claims
- [x] No em dashes; no horizontal scroll at 360px (shell verified in layout)

## Open questions for Mohmed

- Exact GBP street address for NAP (seeded from docs; confirm)
- Logo SVG assets (using typed wordmark until supplied)

## Tech debt / follow-ups

- TD logo assets when available
- Real favicons / OG image in later phase
