---
name: bold-coat-forms-leads
description: Bold Coat lead capture: estimate forms, calculator post-result capture, POST /api/lead, Turnstile, Zapier forward, thank-you and GTM events. Use when building forms, the lead API, or conversion tracking.
---

# Bold Coat Forms and Leads

## Spec

Full flow in `docs/03-architecture-and-deploy.md`. Calculator capture in `docs/05-calculator-spec.md`.

## Endpoint

`POST /api/lead`

Payload shape:

```
{ name, phone, email, town, service, message?, source: 'estimate-form' | 'calculator', calcSelections?, honeypot }
```

Flow:

1. Reject if honeypot filled
2. Validate Cloudflare Turnstile
3. Forward to `process.env.ZAPIER_LEAD_HOOK`
4. 200 → client goes to `/thank-you` (fires conversion)
5. Failure → inline retry + phone fallback

No database. No email sender in this repo.

## Env (ask Mohmed, never invent)

- `ZAPIER_LEAD_HOOK`
- `TURNSTILE_SECRET`
- `PUBLIC_TURNSTILE_SITE_KEY`

## Surfaces

- Full form on `/contact`
- Compact form in CTABand on city pages
- Post-result capture in calculator (`source: 'calculator'`)

## Analytics events

- `lead_submit` (with source)
- `phone_click`
- `calculator_result` (type/band only, no dollar values)

GTM id from config (`GTM-WHZFVX73`). Load GTM after first interaction or 3s idle. No consent banner.

## Related

- Calculator UI/bands: docs/05 + `bold-coat-design-system`
- Ask Mohmed before wiring secrets
