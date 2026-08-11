# 06 - ADR Index

Architecture Decision Records capture durable forks (hosting, form pipeline, content model). Skip ADRs for routine UI tweaks.

## When to write an ADR

- Choosing or changing platform (Vercel, analytics, form backend)
- Changing content collection shape or URL strategy
- Adding a new React island or server endpoint
- Anything that would surprise a future agent reading only the code

## When not to

- Spacing, copy edits, component restyles inside docs/02
- Filling PENDING config after Mohmed confirms values

## Index

| ID | Title | Status | Date |
|---|---|---|---|
| ADR-0001 | Vercel over GitHub Pages; static + one lead function | accepted | 2026-08-10 |
| ADR-0002 | MDX content collections for services, cities, projects, blog | accepted | 2026-08-10 |
| ADR-0003 | Zapier webhook for leads (no DB in this repo) | accepted | 2026-08-10 |

Seed ADRs below document decisions already locked in docs/03. New decisions use `templates/adr.md` and land in `docs/adr/`.

## Seed summaries

### ADR-0001: Vercel hosting

GitHub Pages cannot do real 301s or the lead function. Vercel provides redirects, `/api/lead`, image optimization, previews. See docs/03.

### ADR-0002: MDX collections

Services, cities, projects, and blog are content collections with zod schemas so pages stay data-driven and unique. Reviews stay JSON-only from Mohmed.

### ADR-0003: Lead forwarding via Zapier

No database in this repo. `/api/lead` validates, checks Turnstile, forwards to `ZAPIER_LEAD_HOOK`. Matches existing Thumbtack/Meta plumbing.
