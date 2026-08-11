# 05 - Git Branching and Commits

## Default branch

`main` is production. Never force-push `main`.

## Branch names

```
feat/<short-area>          # new capability
fix/<short-area>           # bug fix
chore/<short-area>         # tooling, deps, docs-only process
content/<short-area>       # MDX/copy/images without app logic
```

Examples: `feat/phase-0-foundations`, `feat/winnetka-city-page`, `fix/navbar-focus`, `content/blog-exterior-cost`.

One concern per branch. Prefer short-lived branches merged via PR.

## Commits

- Imperative mood, focus on why: `Add city template anti-doorway sections`
- No em dashes in commit messages
- Do not commit `.env`, secrets, or Zapier URLs
- Do not use `--no-verify` or force push unless Mohmed explicitly asks

## Pull requests

- Title mirrors the branch intent
- Body: summary (1 to 3 bullets) + test plan checklist
- Link backlog ID (`B-00X`) and feature doc path when relevant
- Preview URL checked before merge
- Squash or merge per repo convention once set; until then prefer squash for feature branches

## Release / cutover

DNS and production cutover follow docs/03 launch steps. Tag only if Mohmed wants versioned releases (`v0.1.0-preview`, `v1.0.0`).
