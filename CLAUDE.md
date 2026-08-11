# CLAUDE.md - Bold Coat Painters Website

Read this first. Then read /docs in order (01 to 05) before writing any code. Then read `docs/README.md` for process docs (phases, backlog, tech debt, DoD, branching) and agent skills.

## What this project is

A complete rebuild of boldcoatpainters.com, replacing a WordPress/Elementor site. Static-first marketing site for a premium residential painting company serving Chicago's North Shore. The site's jobs, in order: rank organically in 11 premium suburbs, convert visitors into estimate requests, and look unmistakably better than every franchise painter site in America.

Positioning (internal north star, never a tagline): premium firm, not everyone can afford us. The site should feel modern, clean, professional, and creative, with real photography and tasteful paint-inspired motion. Premium, not luxury. Not corporate-template either.

## Stack (locked)

- Astro 5, static output, with exactly one server endpoint for lead submission
- Tailwind CSS v4 (tokens via @theme, see docs/02)
- React islands only where interactivity is required: BeforeAfterSlider, EstimateCalculator, MobileNav
- MDX content collections: services, cities, projects, blog (schemas in docs/03)
- Fonts self-hosted via @fontsource-variable/fraunces and @fontsource-variable/inter
- Deployed on Vercel (redirects, /api/lead function, image optimization). Never assume GitHub Pages.
- @astrojs/sitemap, robots.txt, JSON-LD schema per docs/04

## Hard rules (never violate)

1. No em dashes anywhere: not in copy, not in comments, not in commit messages. Use commas, periods, colons, or parentheses.
2. Pricing: the ONLY numbers that may appear anywhere are the ranges in `src/config/calculator.json`. Never compute prices from formulas, never mention production rates, wages, margins, deposits, or cost structure in code, comments, or content. If a price is needed and not in that file, insert `TODO(mohmed)` and stop.
3. Business model silence: never mention subcontractors, crews' employment structure, payouts, or internal operations in any user-facing copy. Sell outcomes: vetted, background-checked, supervised, fully insured teams.
4. Testimonials: only from `src/content/reviews/reviews.json`. First name + town only. Never invent reviews. Never include the names Repair Rangers or any competitor.
5. Red (#D9402E) is never used for drips, splatter, or any fluid paint motif. Fluids are navy only. Red is solid UI: buttons, links, dots, arrows.
6. Trust claims (warranty years, review counts, stats numbers) come only from `src/config/site.ts`. If a value is marked PENDING, render nothing rather than a placeholder claim.
7. Every page ships with: unique title under 60 chars, unique meta description 140 to 160 chars, one H1, canonical URL, OG tags, schema per docs/04, descriptive alt text on every image.
8. Accessibility floor: semantic landmarks, visible focus states, keyboard-operable slider and calculator, prefers-reduced-motion swaps all motion for opacity fades, color contrast per docs/02.
9. Performance budget: Lighthouse 95+ on mobile for every template. No layout shift from fonts (size-adjust fallbacks), no render-blocking third parties, images through astro:assets with explicit dimensions.
10. Do not add a cookie consent banner. Analytics per docs/03 only.

## Build order

1. Design tokens + base layout + Navbar + Footer
2. Homepage (docs/02 has the section-by-section spec)
3. Service template + the 5 service pages
4. City template + Winnetka as the proof page, then the other 10
5. /pricing with calculator island
6. Projects collection + template (placeholder entries until photos are supplied)
7. Blog hub + post template
8. About, Contact, /service-areas, legal pages
9. vercel.json redirects (full map in docs/03), sitemap, schema audit
10. Lead endpoint + form wiring + thank-you page with conversion event

## Definition of done per page

Renders correct schema, passes the meta checklist in docs/04, no horizontal scroll at 360px, images have alts, internal links per the linking rules, zero console errors, and copy contains no banned topics from the hard rules.

## When to ask vs decide

Decide yourself: component structure, animation implementation details, spacing, responsive behavior, code organization.
Ask Mohmed: any price number, warranty years, review counts, stat figures, final copy claims about the business, photo selections, and anything touching the Zapier webhook URL or environment variables.

## Process docs and skills

Process kit: `docs/process/` (principles, phases, backlog, tech debt, DoD, git branching, ADR index). Templates: `docs/templates/`. Living feature/ADR folders: `docs/features/`, `docs/adr/`.

Project skills (`.cursor/skills/`): `bold-coat-build`, `bold-coat-astro`, `bold-coat-seo-content`, `bold-coat-forms-leads`, `bold-coat-design-system`.

Personal skills (`~/.cursor/skills/`): `clean-code`, `git-branching-workflow`, `frontend-performance`, `feature-docs-writing`, `tech-debt-management`.
