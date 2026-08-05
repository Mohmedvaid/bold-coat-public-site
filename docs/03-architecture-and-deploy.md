# 03 - Architecture, Content, Forms, Deploy

## Hosting decision: Vercel, not GitHub Pages

GitHub Pages cannot serve real 301 redirects and cannot run the lead endpoint. This migration lives or dies on 301s from the old WordPress URLs, so GitHub Pages is disqualified. Vercel free tier provides: `vercel.json` redirects, one serverless function at `/api/lead`, image optimization, preview deployments, custom domain with SSL. Cloudflare Pages is the acceptable alternative if ever needed.

Separation principle: this repo is the marketing site and nothing else. Future products (CRM, APIs, tools) are separate repos and separate Vercel projects on subdomains (app.boldcoatpainters.com, api.boldcoatpainters.com). The site never imports from or depends on them.

## Repo layout

```
/
  CLAUDE.md
  docs/
  public/            favicons, robots.txt, og fallback image
  src/
    components/      Astro components + islands/
    layouts/         Base.astro, Page.astro
    pages/           routes below
    content/         collections (config in content.config.ts)
    config/          site.ts, calculator.json
    styles/          global.css (tokens via @theme)
  vercel.json        redirects + headers
```

## Routes

| Route | Template |
|---|---|
| / | Home |
| /about | About |
| /pricing | Pricing + calculator |
| /contact | Estimate form page |
| /thank-you | Post-submit confirmation (noindex) |
| /projects, /projects/[slug] | Case study hub + detail |
| /blog, /blog/[slug] | Blog hub + post |
| /services/interior-painting, /services/exterior-painting, /services/cabinet-painting, /services/fence-deck-staining, /services/commercial-painting | Service template |
| /winnetka, /wilmette, /kenilworth, /glencoe, /northfield, /lake-forest, /highland-park, /northbrook, /glenview, /hinsdale, /oak-brook | City template (root-level slugs preserve existing URL equity) |
| /service-areas | Single page listing all other served towns |
| /terms-conditions, /privacy-policy | Legal |

## Content collections (zod schemas in content.config.ts)

- **services**: title, slug, heroImage, summary, body MDX, faqs[], relatedCities[]
- **cities**: name, slug, county, heroImage, housingStockNotes (MDX body), faqs[], featuredProjects[], nearbyCities[]
- **projects**: title, slug, city, services[], date, coverImage, gallery[], scopeSummary, colorsUsed[], durationDays, body MDX. Never include street addresses or full customer names.
- **blog**: title, slug, date, category (cost | exteriors | interiors | colors | projects), coverImage, description, body MDX
- **reviews**: reviews.json, entries: quote, firstName, town, service, rating, source (google | thumbtack | facebook). Only real reviews supplied by Mohmed.

`src/config/site.ts`: NAP (name, address per GBP, phone +1-773-899-7215), social URLs, warrantyYears: PENDING, stats (homes, years, clients: seed from current site, Mohmed confirms), aggregateReviews {rating: PENDING, count: PENDING}, GTM id GTM-WHZFVX73.

## Redirect map (vercel.json, all 301)

Kept city slugs (old and new identical, no redirect needed): /winnetka, /wilmette, /kenilworth, /glencoe, /highland-park, /northbrook, /glenview, /hinsdale, /oak-brook.

| Old WordPress URL | New |
|---|---|
| /chicago/, /skokie/, /evanston/, /naperville/, /schaumburg/, /arlington-heights/, /aurora/, /barrington/, /bolingbrook/, /deerfield/, /downers-grove/, /elmhurst/, /la-grange/, /niles/, /oak-park/, /oakbrook-terrace/, /plainfield/, /river-forest/, /wheaton/, /western-springs/ | /service-areas |
| /locations/ | /service-areas |
| /gallery/ | /projects |
| /contact-us/ | /contact |
| /request-a-free-estimate/ | /contact |
| /services/residential-painting/ | /services/interior-painting |
| /services/ | / |

Also add a catch-all rule: any unknown old path 301s to /. Trailing-slash variants must both resolve. Before launch, pull the live WP sitemap and diff against this table to catch stragglers.

## Lead capture

One endpoint: `POST /api/lead` (Vercel function).

Payload: `{ name, phone, email, town, service, message?, source: 'estimate-form' | 'calculator', calcSelections?, honeypot }`

Flow: reject if honeypot filled, validate a Cloudflare Turnstile token, then forward the payload to `process.env.ZAPIER_LEAD_HOOK` (Zapier Catch Hook; Zapier routes to DripJobs and sends the notification email, matching the existing Thumbtack and Meta lead plumbing). On success respond 200 and the client redirects to /thank-you, which fires the GTM conversion event. On failure, show an inline retry message with the phone number as fallback.

No database. No email service in this repo. Environment variables: `ZAPIER_LEAD_HOOK`, `TURNSTILE_SECRET`, `PUBLIC_TURNSTILE_SITE_KEY`.

Forms appear: full form on /contact, compact form in CTABand on city pages, post-result capture in the calculator. All post to the same endpoint with distinct `source`.

## Analytics

Keep GTM (GTM-WHZFVX73) with GA4 and the Meta Pixel configured inside GTM. Load GTM after first interaction or 3s idle, whichever first, to protect LCP. Do not install Complianz or any consent banner. Events: `lead_submit` (with source), `phone_click`, `calculator_result`.

## Performance

- astro:assets everywhere, AVIF/WebP, explicit width/height, lazy below the fold, hero eager with fetchpriority high
- Fonts: fontsource variable, `font-display: swap`, size-adjusted fallback metrics to kill CLS
- Zero third-party scripts outside GTM
- Budget: Lighthouse mobile 95+, LCP under 2.0s on the homepage over 4G

## Launch cutover

1. Build complete on a Vercel preview URL, full checklist pass (docs/04).
2. Freeze WordPress edits. Export any remaining images.
3. Point DNS (A/CNAME per Vercel) for apex and www. Keep WP host alive 30 days as fallback.
4. Verify 301s live with curl spot checks.
5. GSC: submit new sitemap, request indexing on the 11 city pages, /pricing, and /projects.
6. Watch Coverage and 404 reports daily for two weeks; patch redirect misses immediately.
