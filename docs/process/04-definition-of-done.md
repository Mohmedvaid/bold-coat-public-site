# 04 - Definition of Done

## Per page

- [ ] Unique title under 60 characters
- [ ] Unique meta description 140 to 160 characters
- [ ] Exactly one H1
- [ ] Canonical URL + OG tags
- [ ] Schema per docs/04 (no PENDING claims emitted)
- [ ] Descriptive alt on every image (or labeled placeholder)
- [ ] Internal links follow docs/04 linking rules
- [ ] No horizontal scroll at 360px width
- [ ] Zero console errors
- [ ] Copy has no banned topics (CLAUDE.md hard rules 1 to 4)
- [ ] No em dashes anywhere on the page or in related code comments
- [ ] `prefers-reduced-motion` respected if motion is present
- [ ] Lighthouse mobile path toward 95+ (measure on templates)

## Per PR

- [ ] Touches only the stated backlog/feature scope (no drive-by refactors)
- [ ] Feature doc updated if behavior changed
- [ ] Tech debt logged if a shortcut was taken
- [ ] Branch named per docs/process/05-git-branching.md
- [ ] Preview deploy checked on mobile width
- [ ] Ask-vs-decide: no invented prices, stats, warranty, or reviews

## Per phase exit

- [ ] All P0 backlog items for that phase are `done`
- [ ] Phase line in docs/process/01-phases.md updated
- [ ] No open S0 debt introduced by the phase without a paydown plan
