# Feature: Phase 7 Company and Legal

- **Backlog ID:** B-011
- **Phase:** 7
- **Status:** done
- **Owner:** agent
- **Skills:** bold-coat-build, bold-coat-forms-leads, bold-coat-seo-content

## Problem

The site needs About, Contact, service-areas, and legal pages so nav/footer links resolve and estimate requests have a full form destination.

## Scope

In:

- `/about`, `/contact`, `/service-areas`, `/terms-conditions`, `/privacy-policy`
- Full estimate form posting to `/api/lead` with phone fallback until Phase 9
- Prefill contact fields from compact-form query params
- Minimal `/thank-you` (noindex) for successful submits

Out:

- Zapier/Turnstile secrets and real lead forwarding (Phase 9 polish)
- Final legal counsel review

## Spec links

- docs/03 routes and forms, docs/01 positioning

## Acceptance criteria

- [x] All five company/legal routes build (plus thank-you)
- [x] Unique meta and one H1 each
- [x] Contact form posts to `/api/lead` with honeypot + phone fallback
- [x] Service-areas lists non-primary towns and links the 11 city pages
- [x] No invented trust numbers or business-model internals
- [x] `npm run build` succeeds; no em dashes

## Open questions for Mohmed

- Final About copy and legal text review

## Tech debt / follow-ups

- Attorney review of privacy/terms (TD-016)
- Wire Turnstile + live `/api/lead` in Phase 9 (TD-012)
