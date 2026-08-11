# Feature: Phase 8 Redirects and SEO Audit

- **Backlog ID:** B-012
- **Phase:** 8
- **Status:** done
- **Owner:** agent
- **Skills:** bold-coat-build, bold-coat-seo-content

## Problem

Old WordPress URLs must 301 to the new IA, and the new site needs a sitemap/schema/meta pass so cutover does not create soft-404s or duplicate metadata.

## Scope

In:

- `vercel.json` 301 map from docs/03 plus WP `page-sitemap.xml` stragglers
- Sitemap filter excluding `/thank-you`
- Meta uniqueness + schema presence audit script against `dist/`
- Sitewide schema `@type` as LocalBusiness + HousePainter

Out:

- Live DNS cutover curl checks (post-deploy)
- GSC submit (B-023)
- Blanket catch-all `/:path*` → `/` (unsafe on Vercel: overrides static routes)

## Spec links

- docs/03 redirect map, docs/04 pre-launch checklist

## Acceptance criteria

- [x] vercel.json covers docs/03 rows and WP city/service combos (0 uncovered WP page paths)
- [x] `/thank-you` excluded from sitemap
- [x] Audit script reports unique titles/descriptions and expected schema types
- [x] `npm run build` succeeds; no em dashes

## Open questions for Mohmed

- None for this phase

## Tech debt / follow-ups

- Post-launch redirect miss triage (B-024 / TD-018)
- Optional Rich Results validation per template after preview is live
