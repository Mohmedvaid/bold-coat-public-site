# Design: Process Docs and Agent Skills

Date: 2026-08-10  
Status: approved  
Scope: documentation and Cursor skills only (no Astro app bootstrap)

## Goal

Give agents and humans a durable operating system for building Bold Coat Painters: process docs (phases, backlog, tech debt, DoD, branching, ADRs), thin project skills for site-specific rules, and reusable personal skills for craft (clean code, git, performance, feature docs, tech debt).

## Decisions locked with Mohmed

- Skills location: both project (`.cursor/skills/`) and personal (`~/.cursor/skills/`)
- Docs depth: full process kit (not lean, not per-feature stubs yet)
- Personal skills: clean-code, git-branching-workflow, frontend-performance, feature-docs-writing, tech-debt-management
- Project skills: bold-coat-build, bold-coat-astro, bold-coat-seo-content, bold-coat-forms-leads, bold-coat-design-system
- Architecture approach: mirror docs + thin skills (product truth stays in `docs/01`–`05` and `CLAUDE.md`)

## Doc layout

```
docs/
  01-brief.md … 05-calculator-spec.md   # existing product specs (unchanged)
  README.md                             # read order + links
  process/
    00-principles.md
    01-phases.md
    02-backlog.md
    03-tech-debt.md
    04-definition-of-done.md
    05-git-branching.md
    06-adr-index.md
  templates/
    feature.md
    adr.md
  features/                             # .gitkeep; fill as features start
  adr/                                  # .gitkeep; fill when decisions need ADRs
  superpowers/specs/                    # design specs from brainstorming
```

Process docs must not restate pricing bands, warranty numbers, or business-model claims. They point at `CLAUDE.md` hard rules and `docs/01`–`05`.

## Skills

### Personal (`~/.cursor/skills/`)

| Skill | Purpose |
|---|---|
| clean-code | Naming, small units, no drive-by refactors, match existing style |
| git-branching-workflow | Branch naming, PR hygiene, commit message style |
| frontend-performance | LCP/CLS, images, fonts, islands budget |
| feature-docs-writing | Feature docs and ADR workflow from templates |
| tech-debt-management | Log debt, prioritize paydown, avoid silent hacks |

### Project (`.cursor/skills/`)

| Skill | Purpose |
|---|---|
| bold-coat-build | Hard rules, build order, ask-vs-decide, DoD gate |
| bold-coat-astro | Layouts, islands, collections, Tailwind tokens, Vercel |
| bold-coat-seo-content | Meta, schema, city anti-doorway, linking |
| bold-coat-forms-leads | Forms, `/api/lead`, Turnstile, GTM events |
| bold-coat-design-system | Color/type/motion, red vs navy fluid rule |

Skills stay under ~500 lines each, use progressive disclosure, and link into `docs/` rather than duplicating long specs.

## Agent workflow

1. Read `CLAUDE.md`, then `docs/01`–`05`, then `docs/README.md`.
2. Before feature work: check phase + backlog → write or update a feature doc from `templates/feature.md` → implement → run DoD → log debt if any.
3. Before commit/PR: follow `docs/process/05-git-branching.md` and the personal git skill.
4. Ask Mohmed for prices, warranty, review counts, stats, final business claims, photos, Zapier/env secrets.

## Out of scope for this pass

- Scaffolding Astro, Tailwind, or any `src/` code
- Filling `docs/features/` stubs per build-order item
- Committing unless Mohmed asks

## Success criteria

- `docs/README.md` and process kit exist and are cross-linked
- Five project skills and five personal skills exist with clear descriptions
- `CLAUDE.md` points at process docs and skills
- No em dashes in any new copy
- Hard rules remain single-sourced in `CLAUDE.md`
