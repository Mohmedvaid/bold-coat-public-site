# 02 - Design System

Register: modern, clean, professional, creative. Premium, not luxury. Warm and trustworthy, with controlled paint-inspired personality. The current logo is kept as-is: black rounded wordmark, red dot O in BOLD, yellow dot O in COAT, brush-stroke underline. The system is built around that logo plus the navy already in market.

## Color tokens

| Token | Hex | Role |
|---|---|---|
| navy | #1F2A44 | Primary. Navbar, footer, section bands, primary buttons, all paint drips and fluid motifs |
| midnight | #151F33 | Navy hover states, footer bottom strip |
| paper | #FBFAF7 | Main background |
| cream | #F1EBE0 | Alternating sections, cards |
| ink | #1A1A1A | Headlines, body text |
| red | #D9402E | CTA buttons, links, small solid accents. Never fluid motifs |
| gold | #F2C94C | Star ratings, tiny dots, one highlight underline per page max. Never text, never fills |
| stone | #8A857D | Meta text, captions |

Proportions target: 58% paper/cream, 20% navy, 14% ink, 6% red, 2% gold.

Contrast rules: ink on paper and cream, AAA. Navy on paper, AAA. Paper text on navy, AAA. White on red passes for button text at button sizes. Red as text on paper: links and short labels only, 16px+. Gold never carries text.

Note for the builder: do not drift toward the generic AI palette (cream background, high-contrast serif, terracotta accent). This palette is deliberately anchored to an existing logo and an in-market navy. Follow it exactly.

## Typography

- Display: Fraunces Variable. Headlines only. Hero 44 to 64px desktop (28 to 36 mobile), section headings 32 to 40px. Use optical sizing, tight leading (1.05 to 1.15), normal case. Fraunces never below 24px.
- Body and UI: Inter Variable. Body 17 to 18px, line-height 1.6. Buttons and nav 15 to 16px medium.
- Labels: Inter, uppercase, letterspaced 6 to 8%, 12 to 13px, in navy or stone. Used as section eyebrows only ("EXTERIOR PAINTING", "OUR PROCESS"). Maximum one per section.
- Numbers in stats: Fraunces, large, ink.

Headline voice: plain confident English a homeowner would say. "Exterior and interior painting, done right." Never positioning poetry, never corporate filler.

## Signature elements (the two things people remember)

1. Brush-stroke underline: the logo's underline becomes the sitewide motif. One key word per hero gets a hand-painted navy brush-stroke underline that draws in left to right (500ms ease-out) on load or scroll-into-view. Implemented as an inline SVG path with stroke-dashoffset animation. This is the only underline animation on a page.
2. Before/after slider: navy handle with a red dot grip, used on the homepage and project pages. Keyboard operable (arrow keys), touch friendly, no layout shift.

## Motion rules

- Fluid paint motifs (drips, splatter texture) render in navy only. One drip detail per page maximum: the section divider (a thin navy rule with a single small drip at 20% from the left) or the CTA band's top edge drip, not both.
- Gold splatter may appear once, as background texture at 4 to 8% opacity behind the stats bar.
- Scroll reveals: opacity + 12px translate, 300ms ease-out, staggered 60ms. Applied to cards and section content, never to the hero image or LCP element.
- Hover: buttons darken (navy to midnight, red darkens 8%), cards lift 2px with a soft shadow, links get the brush-stroke color.
- prefers-reduced-motion: all motion becomes simple opacity fades, the slider still works without animation.
- Nothing loops infinitely. No parallax on mobile.

## Core components

- **Navbar**: navy background, reversed logo (cream letters, red and gold dots) left, links (Services dropdown, Projects, Pricing, Blog, About, Contact), phone number, one red "Free Estimate" button. Sticky, compresses on scroll. Mobile: sheet menu, phone and estimate button always visible.
- **Footer**: navy, reversed logo, four columns (Services, Areas, Company, Contact with NAP), trust strip (license, insured, warranty from config), midnight bottom bar with copyright.
- **Buttons**: primary red fill with paper text; secondary navy outline that fills navy on hover; tertiary text link in red with arrow. Two filled buttons per viewport maximum.
- **TrustBar**: gold stars, aggregated rating and count from config, "Licensed & Insured", "Serving the North Shore". Sits under the hero CTA.
- **StatsBar**: cream band, three or four stats from config, small red and gold dot accents echoing the logo.
- **BeforeAfterSlider**: React island as specced above.
- **ServiceCard**: photo top, Fraunces title, two-line description, red "Learn more" link.
- **ProjectCard**: large photo, town + service label eyebrow, title, one-line scope.
- **ReviewCard**: white card, gold stars, quote, "First name, Town".
- **ProcessSteps**: navy numbered circles, day-by-day copy. Numbering is allowed here because it is a real sequence.
- **PromiseBlock**: "The Bold Coat Promise", five commitments, check marks in navy, one gold dot accent.
- **FAQ**: accordion, ships FAQPage schema, chevron rotates.
- **CTABand**: navy full-width, paper Fraunces headline, red button, navy-on-navy drip along the top edge (this counts as the page's drip when used).
- **SectionDivider**: the thin-rule-with-one-drip motif for pages not using CTABand's drip.
- **EstimateForm** and **EstimateCalculator**: docs/03 and docs/05.

## Photography rules

Real project photos only, bright and daylight-forward, big suburban homes prominent. No stock imagery anywhere. Every image gets a descriptive alt with service and general location ("freshly painted cedar siding exterior, Winnetka"). Before/after pairs must be identically framed. Until Mohmed supplies the archive, use solid cream placeholder blocks with the correct aspect ratios, never stock placeholders.

## Homepage section order

1. Hero: full-width bright photo of a large freshly painted suburban home, headline with one brush-stroke-underlined word, subline, red estimate button + "See our work" text link, TrustBar beneath.
2. StatsBar.
3. Before/after slider with a short lead-in line.
4. Services grid (Exterior, Interior, Cabinets prioritized, second row Deck & Fence, Commercial).
5. PromiseBlock.
6. Featured project (large photo, town eyebrow, link to case study).
7. ProcessSteps (3 steps, each with a line of day-level detail).
8. Reviews (3 cards + aggregated count line).
9. Calculator teaser: "Get an instant ballpark" with a red link to /pricing.
10. CTABand.
