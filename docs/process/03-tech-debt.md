# 03 - Tech Debt

Log shortcuts the same day you take them. Silent debt becomes launch risk.

## Rules

1. Every intentional shortcut gets a row below.
2. Prefer fixing P0 debt before starting a new phase.
3. Never “fix” debt by inventing prices, reviews, or trust claims.
4. Placeholders (cream blocks, `approved: false`, PENDING config) are tracked debt until Mohmed supplies real values.

## Severity

| Level | Meaning |
|---|---|
| S0 | Blocks launch or breaks hard rules |
| S1 | Hurts SEO, a11y, or Lighthouse budget |
| S2 | Maintainability / cleanup |
| S3 | Nice polish |

## Log

| ID | Date | Severity | Area | Description | Paydown plan | Status |
|---|---|---|---|---|---|---|
| TD-001 | 2026-08-10 | S1 | Content | No photo archive yet; cream placeholders | Replace when Mohmed supplies assets | open |
| TD-002 | 2026-08-10 | S0 | Config | warrantyYears / aggregateReviews PENDING | Confirm with Mohmed; then render | open |
| TD-003 | 2026-08-10 | S0 | Calculator | calculator.json `approved: false` | Mohmed approves bands | open |
| TD-004 | 2026-08-10 | S2 | Repo | App not scaffolded; docs-only | Phase 0 scaffold | closed |
| TD-005 | 2026-08-10 | S2 | Brand | Typed Logo wordmark until real SVG assets | Swap when Mohmed supplies logo files | open |
| TD-006 | 2026-08-10 | S1 | NAP | Street address / postal empty pending GBP confirm | Fill site.ts address fields | open |
| TD-007 | 2026-08-10 | S3 | Assets | Default scaffold favicon.ico still present; SVG favicon active | Remove ico or replace with brand set | open |
| TD-008 | 2026-08-10 | S1 | Content | Homepage uses cream placeholders (hero, slider, cards) | Swap when photo archive arrives | open |
| TD-009 | 2026-08-10 | S2 | Copy | Promise and process wording is draft until Mohmed approves | Replace with approved copy | open |

## Paydown cadence

- When picking sprint work, include at least one open S0/S1 item if any exist.
- Closing a debt row requires a PR note: `Closes TD-00X`.
