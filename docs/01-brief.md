# 01 - Project Brief

## Business context

Bold Coat Painters is a premium residential painting company serving Chicago's North Shore and select western suburbs. Services: exterior painting, interior painting, cabinet painting, deck and fence staining, commercial painting. The brand is established in market: logo on yard signs, ads, proposals, and social. The website is the weak link and is being rebuilt from scratch.

Positioning: premium, not luxury. A firm discerning homeowners choose and not everyone can afford. That is an internal compass for tone and design decisions, never printed on the site.

## Why the rebuild

The current WordPress site has: near-duplicate doorway city pages (~27) that suppress rankings, copied competitor copy on a service page, no blog, no about page, no case studies, redundant CTAs everywhere, templated metadata, and a heavy Elementor stack. Sixteen months of Search Console shows ~100K impressions, 197 clicks, average position 45.7. The site is effectively invisible.

## Goals, in order

1. Rank on page one for painter and painting-cost queries in 11 premium towns: Winnetka, Wilmette, Kenilworth, Glencoe, Northfield, Lake Forest, Highland Park, Northbrook, Glenview, Hinsdale, Oak Brook.
2. Convert visits into estimate requests (form submissions and calls). Every page has one clear path to the estimate form, without CTA spam.
3. Be visibly the best-designed painting site a visitor has ever seen from a contractor. Design is a differentiator here, not decoration.
4. Publish weekly blog content post-launch (templates ready at launch).

## Audience

North Shore homeowners, roughly 35 to 65, high home values, research-heavy buyers who read reviews and compare 2 to 3 companies. They are reassured by process, warranty, insurance, and real local photos. They are repelled by pushy sales design and by cheap-looking sites.

## Competitive frame

National franchises (CertaPro, Five Star Painting, WOW 1 Day) win on trust mechanics: named promises, warranty numbers, aggregated review counts, process pages. Their weaknesses are structural: template design, slow sites, stock photography, doorway location pages, zero real project case studies. This site steals their trust mechanics and beats them on design, speed, real photography, project case studies, local depth, and an instant online estimate calculator.

Trust mechanics to implement:
- The Bold Coat Promise: a named block of 5 concrete commitments (daily updates, clean job site every evening, on-time start, final walkthrough sign-off, written warranty). Final wording approved by Mohmed.
- Warranty stated as a number sitewide (value PENDING in site config until confirmed).
- Aggregated review proof: one line combining Google, Thumbtack, and Facebook counts (values PENDING).
- A process section with day-by-day specificity.

## Success metrics

- Lighthouse mobile 95+ on all templates
- All 11 city pages indexed within 2 weeks of launch, ranking movement within 90 days
- Estimate form conversion tracked end to end (GTM event to ad platforms)
- Zero duplicate-content flags: every indexed page passes a uniqueness sniff test

## Out of scope

CRM, customer portal, online booking, payment. Future apps live on separate repos and subdomains (docs/03). This site stays a static marketing property with one lead endpoint.
