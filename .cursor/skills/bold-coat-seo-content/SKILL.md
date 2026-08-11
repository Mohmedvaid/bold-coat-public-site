---
name: bold-coat-seo-content
description: Bold Coat SEO and content rules: meta patterns, JSON-LD schema, city anti-doorway formula, internal linking, blog templates. Use when writing page copy, city/service/blog/project templates, or auditing metadata.
---

# Bold Coat SEO and Content

## Always read

`docs/04-seo-and-content.md` and hard rules 4, 6, 7 in `CLAUDE.md`.

## Meta checklist

- Title under 60 chars, unique per page
- Description 140 to 160 chars, unique, concrete, soft CTA
- One H1
- Canonical + OG
- Never reuse descriptions across pages

## Schema

- Sitewide LocalBusiness / HousePainter from `site.ts`
- Service, FAQPage, Article, ImageGallery, BreadcrumbList as specified in docs/04
- Never emit aggregateRating or warranty schema while values are PENDING

## City pages (anti-doorway)

Required sections and 500+ town-specific words. If unique prose is missing, do not put the town in the sitemap.

Winnetka is the proof page. Perfect it before cloning others.

## Copy voice

Plain confident English. No positioning poetry. No em dashes. No competitor names. Reviews: first name + town only from `reviews.json`.

## Linking

Follow internal linking rules in docs/04. Service pages link cities and contact. City pages link services, nearby cities, projects, calculator.

## Related

- Build gate: `bold-coat-build`
- Feature docs: personal `feature-docs-writing`
