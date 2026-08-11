---
name: bold-coat-astro
description: Astro 5 static site patterns for Bold Coat: layouts, Tailwind v4 tokens, MDX collections, React islands, Vercel deploy. Use when scaffolding, adding pages, components, content collections, or vercel.json.
---

# Bold Coat Astro

## Stack (locked)

- Astro 5, static output
- Exactly one server endpoint: `POST /api/lead`
- Tailwind CSS v4 via `@theme` in `src/styles/global.css`
- React islands only: `BeforeAfterSlider`, `EstimateCalculator`, `MobileNav`
- Fonts: `@fontsource-variable/fraunces`, `@fontsource-variable/inter`
- Deploy: Vercel (never GitHub Pages)

## Repo layout target

See `docs/03-architecture-and-deploy.md`. Keep:

```
src/components/   # Astro + islands/
src/layouts/      # Base.astro, Page.astro
src/pages/
src/content/      # collections
src/config/       # site.ts, calculator.json
src/styles/       # global.css
```

## Rules

- Images through `astro:assets` with explicit width/height.
- No new state libraries, CSS frameworks, or islands without an ADR.
- Content schemas live in `content.config.ts` per docs/03.
- City URLs stay root-level (`/winnetka`) to preserve equity.
- Redirects and headers only in `vercel.json`.

## When scaffolding Phase 0

1. Init Astro 5 + Tailwind v4 + React integration.
2. Wire fonts with `font-display: swap` and size-adjust fallbacks.
3. Port tokens from docs/02 into `@theme`.
4. Build Base layout (LocalBusiness schema shell) + Navbar + Footer.

## Related

- Design tokens: skill `bold-coat-design-system` + docs/02
- Forms: skill `bold-coat-forms-leads` + docs/03
- Perf: personal skill `frontend-performance`
