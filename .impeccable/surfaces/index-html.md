---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

## Direction contract

THESIS: Elliott brings a patrol officer's discipline — vigilant, decisive, exact — to a Bardstown family's move. The surface refuses the category default (soft golden-hour photography, script logotype, generic "dream home" bokeh) and instead reads as a duty console: alert, in-command, built to be trusted under pressure.

OWN-WORLD: Patrol-dispatch material family. Ground is near-black gunmetal/navy (`--ey-navy` deepened); content modules dock as cream "case-file" paper (`--ey-cream`) for legibility. Structural accents: Signal One red (`--s1-red-strong`) and a new patrol blue, both full palette roles, not sprinkles. Duty tan (repurposed `--ey-bourbon`) carries canvas/leather/stitched-edge details. Display type is a literal stencil face (Big Shoulders Stencil) for headlines; UI chrome (nav, labels, eyebrows, badges) runs in an angular technical face (Chakra Petch); body copy runs in a plain, official-document sans (Public Sans). Hardware shapes: sharp corners, occasional single chamfered corner, chevron/hazard-stripe dividers as icon-sized SVG, stitched/bolt details on card edges.

STORY: A visitor arrives mid-"dispatch" — a duty light bar is active overhead, the site reads as Elliott's command console for their move. They believe he treats their sale/purchase like a mission he's trained for, not a sales pitch. They search homes or open a line of contact — one clear action per screen, dispatch-themed but never buried in theme.

FIRST VIEWPORT: Full-width light-bar strip spans the top of the viewport, a slow red/blue wash (not a fast strobe — WCAG-safe cadence, `prefers-reduced-motion` honored) sitting above/behind the Elliott Young + Signal One Realty lockup, which reads as a duty nameplate. Below it, a dispatch-style eyebrow ("UNIT DISPATCHED · BARDSTOWN, KY" register), a stencilled H1, Elliott's portrait framed like an ID/duty photo with a case-number-style index tag, and one primary action styled as a dispatch command button, one secondary text link.

FORM: Brief-pinned direction (user specified the police/tactical theme and the flashing red/blue light bar explicitly); `concept-seed` skipped per mode-persuade.md's pinned-direction exception — this session reads mode-persuade.md directly rather than rolling challengers. Primary material drawn from the patrol-dispatch family (light bar, radio/CAD dispatch, duty hardware, incident paperwork, reflective signage) ahead of costume literalism (badges-as-gimmick, handcuffs, full SWAT gear) and ahead of the architectural/masonry candidate (sheriff's-office brick-and-cornerstone), which read too static for a Persuade surface's need for an active, demonstrable mechanism.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Scope and mode

Full homepage redesign (`index.html`, `homepage.css`, `homepage.js`). Visitor mode: Persuade. Full commitment confirmed by the user — tactical language runs through every section (nav, buttons, cards, dividers, type), not a header-only accent. Dark/tactical as the dominant register, confirmed over a warm-foundation-with-accents alternative.

Audience, job, action: Bardstown/Nelson/Bullitt-county buyers and sellers (see PRODUCT.md) deciding whether to trust Elliott with a personal move; the working action is "search homes" (links to the brokerage's Flexmls search) or "start a conversation" (email/call), same destinations as the current build — no new backend.

Proof/content/constraints: Elliott's real portrait and bio, Signal One Realty's real logo and office details, Equal Housing Opportunity disclosure — all preserved, unaltered in fact. No fabricated department name, rank, badge number, years of service, or current-officer claim; policing is referenced as background, past tense, generic ("background in policing"), never a specific department's insignia. No literal costume elements (handcuffs, holsters, weapons, real badge replicas). Content, copy claims, and functional links carry over from the current homepage; only presentation is replaced.

Memorable moment: the light bar activating over the duty nameplate on load, and the stencilled "DISPATCH" command button as the primary CTA.

Unresolved decisions: none blocking; exact patrol-blue hex and light-bar timing curve are build-time craft decisions within the OWN-WORLD block's constraints.
