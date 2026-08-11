# Status Handoff (2026-08-10)

Living snapshot of where the Bold Coat rebuild stands. Update this when priorities change or a launch gate closes. Detail lives in phases, backlog, and tech debt; this page is the briefing.

## Where we left off

- **Build phases 0 to 8 are complete and merged to `main`.**
- **Phase 9 (live `/api/lead`, Turnstile, Zapier, conversion polish) is deferred** until after the visible site is finished for launch.
- Local preview was last served with `npm run build && npm run preview` at `http://127.0.0.1:4321/`.
- Repo: `Mohmedvaid/bold-coat-public-site`. Latest process note: Phase 9 deferral ([PR #12](https://github.com/Mohmedvaid/bold-coat-public-site/pull/12)).

**Current priority:** finish and launch the site people see (photos, PENDING config, copy approval, calculator bands, preview DoD). Not the advanced lead API.

## What shipped

| Phase | What is on `main` |
|---|---|
| 0 | Astro 5 + Tailwind v4, tokens, Base/Page, Navbar, Footer, fonts |
| 1 | Homepage sections (cream placeholders for photos) |
| 2 | 5 service pages + Service/FAQ schema |
| 3 | 11 city pages at root slugs (Winnetka proof + rest) |
| 4 | `/pricing` + EstimateCalculator (`approved: false` → coming soon UI) |
| 5 | Projects hub + 4 placeholder case studies |
| 6 | Blog hub + post template + 5 sample posts |
| 7 | About, Contact (EstimateForm), service-areas, privacy, terms, thank-you |
| 8 | `vercel.json` 301s (WP sitemap diffed), sitemap excludes thank-you, `npm run seo-audit` |

Useful commands:

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 4321
npm run seo-audit
```

## What remains for launch finish

Ordered by how much it blocks a credible public site.

### Needs Mohmed (cannot invent)

| Item | Why it matters | Tracked as |
|---|---|---|
| Photo archive | Replace cream heroes, slider, cards, project galleries | B-020, TD-001, TD-008, TD-014 |
| Logo SVG | Replace typed wordmark | TD-005 |
| GBP street + postal | Complete NAP / LocalBusiness address | TD-006 |
| Warranty years, review rating/count, stats | Trust claims still PENDING (render nothing until set) | B-021, TD-002 |
| Approve `calculator.json` bands | Flip `approved: true` so calculator is live | B-022, TD-003, TD-013 |
| Copy approval | Promise/process, services, cities, About | TD-009, TD-010, TD-011, TD-017 |
| Legal counsel pass | Privacy + terms are launch drafts | TD-016 |

### Engineering / launch ops (after content gates)

| Item | Notes | Tracked as |
|---|---|---|
| Vercel preview + docs/04 checklist | Unique meta already audited locally; confirm on preview | DoD + docs/04 |
| DNS cutover | Point apex/www to Vercel; keep WP up ~30 days | docs/03 |
| GSC sitemap + index 11 cities | After DNS | B-023 |
| Redirect miss triage | First two weeks of Coverage/404s | B-024, TD-018 |
| Favicon cleanup | Scaffold `.ico` still present; SVG is active | TD-007 |

Forms today: Contact POSTs `/api/lead` and falls back to phone when the endpoint is missing. Compact forms still GET `/contact` with query prefill. That is intentional until Phase 9.

## Explicitly deferred (do later)

| Item | Why deferred | Tracked as |
|---|---|---|
| Phase 9 lead path | Advanced: Turnstile, Zapier webhook, live `/api/lead`, GTM conversion polish | B-013 |
| Weekly blog launch queue | Templates exist; author after ship | B-030, TD-015 |
| Real project galleries | Needs photo archive | B-031 |
| Extra city FAQ depth | Nice after core launch | B-032 |
| Motion / extra towns polish | P3 | B-040, B-041 |

## Suggested next session

1. Walk the preview and note visual/copy fixes.
2. Supply or approve: photos, logo, GBP address, warranty/reviews/stats, calculator bands.
3. Apply approved assets/config on a fresh branch; re-run `npm run build && npm run seo-audit`.
4. Deploy a Vercel preview and run the docs/04 pre-launch checklist.
5. Only after launch finish: Phase 9 with Zapier + Turnstile secrets from Mohmed.

## Source of truth links

- Phases: [01-phases.md](01-phases.md)
- Backlog: [02-backlog.md](02-backlog.md)
- Tech debt: [03-tech-debt.md](03-tech-debt.md)
- Definition of done: [04-definition-of-done.md](04-definition-of-done.md)
- Product specs: [docs/01](../01-brief.md) through [docs/05](../05-calculator-spec.md)
- Hard rules: [CLAUDE.md](../../CLAUDE.md)

Update the date in the title when you revise this handoff.
