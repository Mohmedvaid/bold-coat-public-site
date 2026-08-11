# 02 - Backlog

Living list. Priorities: P0 must ship for launch, P1 launch-week, P2 post-launch, P3 nice-to-have.

Status: `todo` | `doing` | `blocked` | `done`

## P0 (launch blockers)

| ID | Item | Phase | Status | Notes |
|---|---|---|---|---|
| B-001 | Scaffold Astro 5 + Tailwind v4 + fonts | 0 | done | Astro 5.18 + Tailwind v4 + React |
| B-002 | Design tokens in global.css `@theme` | 0 | done | Exact hex from docs/02 |
| B-003 | Base + Page layouts, Navbar, Footer | 0 | done | MobileNav island included |
| B-004 | Homepage sections | 1 | done | Cream placeholders until photos |
| B-005 | Service template + 5 pages | 2 | done | MDX collection + /services/[slug] |
| B-006 | City template + Winnetka | 3 | todo | Proof page first |
| B-007 | Remaining 10 city pages | 3 | todo | Blocked on unique prose |
| B-008 | Pricing + calculator island | 4 | todo | Ship with `approved: false` until Mohmed OK |
| B-009 | Projects hub + detail | 5 | todo | Placeholder entries OK |
| B-010 | Blog hub + post template | 6 | todo | |
| B-011 | About, Contact, service-areas, legal | 7 | todo | |
| B-012 | vercel.json redirects + sitemap | 8 | todo | Diff against live WP sitemap |
| B-013 | `/api/lead` + thank-you + GTM | 9 | todo | Ask Mohmed for Zapier + Turnstile secrets |

## P1 (launch week)

| ID | Item | Status | Notes |
|---|---|---|---|
| B-020 | Mohmed supplies photo archive | todo | Replace cream placeholders |
| B-021 | Confirm warrantyYears and aggregateReviews | todo | PENDING until confirmed |
| B-022 | Approve calculator.json bands | todo | Flip `approved: true` |
| B-023 | GSC sitemap submit + index 11 cities | todo | After DNS |
| B-024 | Redirect miss triage (2 weeks) | todo | Watch Coverage/404s |

## P2 (post-launch)

| ID | Item | Status | Notes |
|---|---|---|---|
| B-030 | Weekly blog posts (launch queue in docs/04) | todo | One per week |
| B-031 | Real project case studies with gallery | todo | |
| B-032 | Town-specific FAQs for all 11 cities | todo | |

## P3 (later)

| ID | Item | Status | Notes |
|---|---|---|---|
| B-040 | Extra motion polish beyond spec | todo | Never at cost of LCP |
| B-041 | Additional service-area towns (content only) | todo | Keep on /service-areas unless equity warrants a page |

## How to add an item

1. Assign next ID in the priority band.
2. Link a feature doc under `docs/features/` when work starts.
3. Move status to `done` only after definition of done passes.
