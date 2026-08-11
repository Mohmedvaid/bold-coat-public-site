# 01 - Build Phases

Phases map 1:1 to the build order in `CLAUDE.md`. Do not start the next phase until the current exit criteria pass.

| Phase | Scope | Exit criteria |
|---|---|---|
| 0. Foundations | Repo scaffold, tokens, Base/Page layouts, Navbar, Footer | Tokens match docs/02; sticky nav + footer NAP; no horizontal scroll at 360px |
| 1. Homepage | All homepage sections per docs/02 | Unique meta, schema, TrustBar/Stats from config (hide PENDING), DoD pass |
| 2. Services | Service template + 5 service pages | Each page unique meta/H1/FAQ schema; internal links to cities and contact |
| 3. Cities | City template + Winnetka proof, then other 10 | Anti-doorway uniqueness; 500+ town-specific words; sitemap only for ready towns |
| 4. Pricing | `/pricing` + EstimateCalculator island | calculator.json bands only; `approved: false` shows coming-soon; keyboard a11y |
| 5. Projects | Collection + hub + detail | Placeholders OK until photos; no street addresses or full names |
| 6. Blog | Hub + post template | Templates ready; launch queue can wait until after ship |
| 7. Company + legal | About, Contact, /service-areas, terms, privacy | Forms post to `/api/lead`; legal pages linked from footer |
| 8. Redirects + SEO audit | vercel.json map, sitemap, schema audit | 301 table matches docs/03; curl spot checks; no duplicate meta |
| 9. Lead path (deferred) | `/api/lead`, thank-you, GTM conversion | Honeypot + Turnstile; Zapier forward; `lead_submit` / `phone_click` / `calculator_result` |

## Phase rules

- Stay on one phase branch theme when possible (`feat/phase-0-foundations`).
- Winnetka is the city proof page: perfect it before cloning the other ten.
- Blog content writing is post-launch; templates are in-phase.
- **Priority now:** finish and launch the visible site (copy, photos, PENDING config, calculator approval, preview DoD). Do not start Phase 9 until that work is done.
- **Phase 9 is deferred.** The live lead API (Turnstile, Zapier, conversion wiring) is more advanced integration work and comes after launch readiness. Until then, contact forms keep the phone fallback when `/api/lead` is unavailable.
- Preview URL must pass the docs/04 checklist before DNS cutover. Phase 9 is not a cutover blocker while deferred; forms can fall back to phone until the lead path ships.

## Current phase

**Phases 0 to 8 complete.** Phase 9 Lead path is **on hold** (deferred until after launch finish). Current focus: launch polish (photos, PENDING claims, copy approval, calculator bands, preview DoD).

Update this section when priorities change.
