# 05 - Git Branching and Commits

## Default branch

`main` is production. Never force-push `main`.

## Hard rule: never work on `main`

- **Do not edit, commit, or experiment on `main`.**
- At the start of every task: `git checkout main && git pull`, then immediately `git checkout -b <type>/<short-area>`.
- All code, docs, and config changes happen on that branch only.
- Merge to `main` only via PR. After merge, pull `main`, then start a **new** branch for the next task. Do not stay on `main` to “just fix one thing.”

## Branch names

```
feat/<short-area>          # new capability
fix/<short-area>           # bug fix
chore/<short-area>         # tooling, deps, docs-only process
content/<short-area>       # MDX/copy/images without app logic
docs/<short-area>          # documentation only
```

Examples: `feat/phase-0-foundations`, `feat/winnetka-city-page`, `fix/navbar-focus`, `content/blog-exterior-cost`, `docs/git-never-work-on-main`.

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
