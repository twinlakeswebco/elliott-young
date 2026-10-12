# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Home buyers and sellers in Bardstown, Nelson County, and Bullitt County, Kentucky. Many are first-time buyers or people relocating to the area; sellers are turning the page on a home they've lived in. They're looking for a local agent who gives personal, trustworthy, clearly-communicated guidance rather than a transactional experience.

## Product Purpose

A personal website for Elliott Young, a REALTOR with Signal One Realty, that introduces him, helps buyers explore available homes, and gives buyers and sellers a clear way to reach him. It exists to be Elliott's own front door — distinct from, but carrying, his brokerage's branding.

## Positioning

Service-first, personal guidance shaped by Elliott's background in policing: listening closely, communicating clearly, and attending to detail. He frames real estate as personal — not just a transaction but a move tied to someone's family and next chapter — backed by Signal One Realty's brokerage support. This is the differentiator over a generic local-agent pitch, not price, speed, or inventory size.

## Operating Context

- Elliott is a Bullitt County native living and working in Bardstown; brokerage is Signal One Realty (principal broker Joedy Gilliland), office at 637 N 3rd Street, Bardstown, KY 40004.
- Client/approval relationship: this is a Twin Lakes Web Co. LLC (Casey Keown) build for Elliott, currently a pre-launch preview. Elliott/brokerage must approve the first-person bio adaptation, geographic positioning, office details, and final branding before production launch (see `PREVIEW.md`).
- Scope per the signed proposal (`Proposal/elliott-young-website-proposal.pdf`) is five pages: Homepage, About, MLS search, Financing, Contact. Only the homepage (`index.html`) is built; About, Contact, Finance, Home, and MLS-Search currently hold only placeholder 404 pages.
- MLS search depends on an approved IDX solution plus broker approval and GLAR access coordination — not yet in place. Financing page depends on lender-approved content from Elliott's preferred lenders — not yet supplied.
- Two rounds of revisions are contracted once a completed-site review notice goes out; changes beyond that scope need a separate agreement.
- Hosting is GitHub Pages (buildless, static); local asset/page URLs are kept relative to support a `/elliott-young/` project path.

## Capabilities and Constraints

- Static HTML/CSS/JS only, no build step, no framework — matches the existing codebase (`index.html`, `homepage.css`, `homepage.js`, `brand-tokens.css`).
- Current homepage links out to the brokerage's existing Flexmls search page rather than an embedded listing feed; there is no live MLS/IDX integration or contact form yet.
- Undecided / explicitly open: domain name, hosting/Cloudflare costs, IDX/MLS provider choice, final ongoing-cost figures — all pending written approval before work proceeds per the proposal.
- No specific accessibility standard (e.g. WCAG AA) is mandated by the brokerage or any IDX provider; standard good practice applies (keyboard access, alt text, Equal Housing Opportunity disclosure, which the current footer already includes).
- No unverified testimonials, listing prices, or performance claims may be used (per `PREVIEW.md`); Facebook profile content could not be verified and is linked only, not quoted.

## Brand Commitments

- Name/identity: "Elliott Young" wordmark with a red accent dot, tagged "REAL ESTATE · BARDSTOWN, KY"; Signal One Realty brokerage logo displayed alongside it.
- Palette: navy (`--ey-navy #1B2A41`) and cream (`--ey-cream #F7F4EF`) as Elliott's primary palette, with Signal One red (`--s1-red-strong #C8102E`) as the accent, plus a bourbon-toned secondary accent (`--ey-bourbon` / `--ey-bourbon-deep`) — recorded in `brand-tokens.css`.
- Typography: Fraunces for display/headings, Raleway for body text (Raleway also matches the brokerage's own site).
- Shape language: square-leaning, tight corners (2–4px radius), no heavy shadows — echoes the brokerage's square-button, flat style.
- Equal Housing Opportunity disclosure and brokerage address/phone must remain visible in the footer.
- Elliott's bio voice: first-person, grounded in being a Christian, husband, father, and Bullitt County native with a policing background — adapted from his brokerage bio, pending his approval of the adaptation.

## Evidence on Hand

- Elliott's bio, email, and brokerage property-search link: sourced from signalonerealty.com (see `assets/ASSET-SOURCES.md`).
- Brokerage phone and office address: sourced from signalonerealty.com/contact, realtor.com, and Zillow listings (not Elliott's direct number).
- Portrait (`assets/Elliott.jpg`, 430×654) and brokerage logo (`assets/icon-brand.png`) are on hand; a higher-resolution original portrait would improve large-screen sharpness. Vector logo files (SVG/EPS) and a reversed white brokerage logo are still needed.
- No testimonials, case studies, press, or performance data exist yet and none should be fabricated.
- Facebook profile links are included but their content was not readable/verifiable in the research session, so no claims are derived from them.

## Product Principles

- Personal before corporate: Elliott's own voice and story lead; the brokerage brands supportingly, not as the headline.
- Never fabricate proof: no invented testimonials, prices, or performance claims — only what Elliott, the brokerage, or verifiable public sources supply.
- Respect pending approvals: MLS/IDX and financing content stay provisional (and clearly non-live where applicable) until broker, GLAR, and lender sign-off land.
- One clear next step per visitor: buyers get a path to search homes or talk to Elliott; sellers get a path to start that conversation — no competing CTAs.
- Preserve brokerage trust signals: Equal Housing Opportunity, office address, and Signal One branding stay visible and unaltered.
