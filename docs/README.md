# Bold Coat Painters: Docs Index

Read this after `CLAUDE.md`. Product specs first, then process.

## Product specs (locked)

Read in order before writing code:

1. [01-brief.md](01-brief.md): business context, goals, audience
2. [02-design-system.md](02-design-system.md): tokens, components, homepage sections
3. [03-architecture-and-deploy.md](03-architecture-and-deploy.md): stack, routes, forms, Vercel
4. [04-seo-and-content.md](04-seo-and-content.md): meta, schema, city/service templates
5. [05-calculator-spec.md](05-calculator-spec.md): estimate calculator guardrails

Hard rules (em dashes, pricing silence, trust claims, a11y, perf) live only in `CLAUDE.md`. Do not restate them elsewhere as a second source of truth.

## Process

| Doc | Purpose |
|---|---|
| [process/00-principles.md](process/00-principles.md) | Engineering principles for this repo |
| [process/01-phases.md](process/01-phases.md) | Build phases and exit criteria |
| [process/02-backlog.md](process/02-backlog.md) | Living backlog (P0 to P3) |
| [process/03-tech-debt.md](process/03-tech-debt.md) | Debt log and paydown rules |
| [process/04-definition-of-done.md](process/04-definition-of-done.md) | Page and PR checklists |
| [process/05-git-branching.md](process/05-git-branching.md) | Branches, commits, PRs |
| [process/06-adr-index.md](process/06-adr-index.md) | Architecture decision records |
| [process/07-status-handoff.md](process/07-status-handoff.md) | Where we left off, remaining launch work |

## Templates and living docs

- Feature template: [templates/feature.md](templates/feature.md) → write into `features/`
- ADR template: [templates/adr.md](templates/adr.md) → write into `adr/`
- Design specs (brainstorming): [superpowers/specs/](superpowers/specs/)
- Research: [research/seo-research.md](research/seo-research.md) (locked Core 11 + Expansion 8)
- Brand logos: [brand/logo-assets.md](brand/logo-assets.md) (SVG masters + export pack)

## Agent skills

**Project** (in `.cursor/skills/`): `bold-coat-build`, `bold-coat-astro`, `bold-coat-seo-content`, `bold-coat-forms-leads`, `bold-coat-design-system`.

**Personal** (in `~/.cursor/skills/`): `clean-code`, `git-branching-workflow`, `frontend-performance`, `feature-docs-writing`, `tech-debt-management`.

## Default workflow

1. Confirm phase and pick a backlog item.
2. Create or update a feature doc from the template.
3. Implement against product specs and hard rules.
4. Pass definition of done.
5. Log tech debt if you took a shortcut.
6. Open a PR on a feature branch.
