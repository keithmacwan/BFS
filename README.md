# BioFacility Solutions Website — v34.5

- Added **Equipment Infrastructure Readiness** as a dedicated BFS service page while preserving all v34.4 Funding Application Technical Support content.
- Reframed Core Capability /06 around equipment that is **purchased, leased, rented, relocated or temporarily installed**.
- Added a dedicated equipment-readiness callout in the Equipment, Capital & Funding Readiness section.
- Added vendor and rental-provider positioning, site-readiness review, utility translation, gap assessment, enabling-work definition, installation coordination and commissioning support.
- Added the new page to `sitemap.xml` and updated homepage cache-busting to `v34-5`.

# BioFacility Solutions Website — v34

- Full-site editorial and positioning pass while retaining the existing visual design and the core tagline **“Protecting science through resilient infrastructure.”**
- Broadened the homepage from laboratory-only positioning to professional engineering and critical-infrastructure advisory for life sciences, healthcare, research and other critical facilities.
- Preserved **Laboratory Infrastructure Risk Assessment** as the flagship lab-specific service and strengthened the Engineering + Laboratory Science differentiation.
- Added **Equipment & Infrastructure Feasibility** and a new **When to Call BioFacility Solutions** section.
- Expanded Industries to include pharmaceutical/biopharmaceutical, biotechnology/life sciences, universities, diagnostic/analytical labs and other critical/technical facilities.
- Reframed Funding Readiness as **Equipment, Capital & Funding Readiness** to cover equipment procurement, renovation, expansion, capital planning and research funding.
- Strengthened the full project lifecycle from feasibility and assessment through design, specifications, procurement support, commissioning and turnover.
- Broadened sitewide calls to action to **Discuss a Project / Discuss Your Facility or Project**.
- Moved standards information lower on the homepage so visitors first understand services, industries and differentiators before technical credibility detail.
- Standardized the company name everywhere as **BioFacility Solutions**.
- Updated CSS/JS cache-busting references to v34.

# BioFacility Solutions Website — v33

- Moved the long-form resource call-to-action from a fixed/floating overlay to a centered inline block immediately above the footer.
- Footer links (email, appointment, Privacy, Home) are no longer obscured by the CTA.
- Retains all v32 privacy, SEO, social-preview, sitemap, robots.txt, branded 404, standards, and mobile fixes.

# BioFacility Solutions Website — v32

## v32 additions
- Added Open Graph and Twitter Card metadata to all public HTML pages.
- Added `assets/bfs-social-preview.png` (1200 × 630) for LinkedIn, Slack and email link previews.
- Added a dedicated `contact.html` page and Contact navigation link.
- Added “Project consultations by appointment” messaging alongside the BFS email address.
- Added `privacy.html` and `terms.html`, plus privacy consent language on inquiry forms.
- Added `robots.txt`, `sitemap.xml`, and branded `404.html`.
- Updated `contact.php` to redirect to the dedicated Contact page and require form consent.
- Retained all v30 standards integration and prior mobile/layout fixes.

# BioFacility Solutions Website — v30

- Added a Standards & Codes Reference page and homepage standards-informed engineering section.
- Added standards resource links to the Resources menu and BFS Resources section.
- Added project-specific applicability language to avoid implying every standard applies to every engagement.
- Retains v29 mobile layout fixes.

# BioFacility Solutions Website — v25

This version builds on BFS Website v23 and integrates the laboratory-science advisory content provided by BFS, including scientific consequence mapping, equipment utility mapping, operational resilience, and laboratory quality/compliance support.

Risk-framework and visual-proof update:
- Replaced the public-facing term “Playbook” with “Framework” throughout the website.
- Added a responsive representative risk register with safeguards, exposure, detectability and recovery readiness.
- Added a five-level Laboratory Resilience Maturity visual from Reactive to Predictive.
- Added an original People–Process–Technology operating-model graphic.
- Added a phased action roadmap separating immediate safeguards, operational controls, engineering priorities and capital resilience.
- Added a homepage link from the example finding to the sample risk register.

Credentials, client assurance and readability update:
- Updated founder credentials to **Keith Macwan, M.Eng., P.Eng.** and **Vinitha Macwan, MSc**.
- Expanded the founder biographies while keeping each well under 800 words.
- Keith's biography is grounded in the available resume, including healthcare infrastructure, BAS/controls, commissioning, operational readiness and his University of Toronto M.Eng.
- Vinitha's biography remains intentionally conservative because a separate Vinitha resume was not located in the available files; it uses the laboratory-science information already provided for the site plus the MSc credential supplied by the client.
- Added a client-assurance strip covering professional engineering accountability, principal-led engagements and the Engineering + Laboratory Science model.
- Increased small numbering throughout service accordions, market cards, process steps, risk frameworks and checklist items.

**Insurance publishing note:** Keep the professional-liability statement live only after the policy is active and the wording matches the actual coverage.

# BioFacility Solutions Website v13

Typography and navigation polish:
- Enlarged and strengthened section labels/eyebrows throughout the site.
- Replaced the small Resources glyph with a larger CSS-drawn chevron.
- Changed the homepage credential strip from “professional engineering” to “Specialist engineering advisory.”
- Reduced em-dash-heavy copy in visible website text.
- Preserved the v12 service accordion, dual-perspective layout and assessment form.

# BioFacility Solutions Website — v10 Premium Redesign

This version is a complete professional-design pass for the BioFacility Solutions website.

## Design direction
- Executive consulting presentation style
- Dark navy, white and restrained teal palette
- Larger, more legible typography and generous whitespace
- Refined line-icon system
- Editorial hero layout with laboratory imagery
- Consistent card, border, spacing and CTA system
- Responsive desktop, tablet and mobile layouts
- Reduced visual clutter and stronger content hierarchy

## Main pages
- `index.html` — primary BFS website
- `laboratory-infrastructure-risk-assessment.html` — Risk Assessment Framework
- `25-questions.html` — 25-Question Facility Risk Checklist
- `ult-freezer-infrastructure-guide.html` — ULT Freezer Infrastructure Guide
- `critical-laboratory-alarm-guide.html` — Critical Laboratory Alarm Guide

## Deployment
The site is static HTML/CSS/JavaScript and can be deployed directly to Hostinger or stored in GitHub for version-controlled deployment.

The current mailto contact form is a starter implementation and should be replaced with a production web form before launch.

## Brand update
- New BFS shield / infrastructure / DNA logo mark added across the site header and favicon.
- Company motto: **Protecting science through resilient infrastructure.**

## v12 contact-form note
The homepage assessment form now posts to `contact.php`, which sends requests to `info@biofacilitysolutions.ca` using PHP's `mail()` function. Deploy the site to PHP-enabled Hostinger hosting and test the form after publishing. For best deliverability, make sure `info@biofacilitysolutions.ca` is an active mailbox on the domain and that the domain's SPF/DKIM settings are configured in Hostinger. If the hosting plan does not permit PHP mail, replace the handler with authenticated SMTP before launch.


## Regulatory positioning
BioFacility Solutions has received its PEO Certificate of Authorization. The website now identifies Certificate of Authorization #100698710 and the legal operating entity, 1001727497 Ontario Inc. (o/a BioFacility Solutions). The site intentionally uses “engineering consulting services” and “professional engineering services” but does not use the restricted personal title “Consulting Engineer.”


## v20 hero copy refinement
- Removed the phrase “P.Eng.-led” from customer-facing copy.
- Simplified the homepage hero to one concise service statement.
- Removed the duplicated motto line from the hero; the motto remains in the site brand/header.
- Credential strip now reads: Ontario P.Eng. | PEO Certificate of Authorization | Engineering + Laboratory Science.
- Added cache-busting query strings for GitHub/Hostinger deployment consistency.


## v23 update
- Institutional experience integrated into each principal bio.
- Consulting cards and capability details tightened.
- ULT technical-context/limitations section removed.
- Critical Alarm hero now shows seven individual checklist links.
- Visible em-dash styling removed from key site copy.


## v25 update
- Consolidated Engineering + Laboratory Science into a clear Infrastructure → Scientific Consequence → Engineering Action model.
- Added four integrated laboratory-science advisory capabilities: scientific consequence mapping, equipment & utility planning, quality/change-control support, and operational resilience.
- Strengthened Vinitha Macwan's laboratory science and quality positioning.


## v26 regulatory credential update

- PEO Certificate of Authorization #100698710 added consistently across the public website.
- Legal operating entity added to the footer and assurance messaging.

- Liability-insurance claims are intentionally omitted from the public site in this build because the CofA approval letter does not itself confirm active insurance coverage. Add them once active coverage is confirmed.


## v32 changes
- Removed standalone Contact page and Contact navigation item.
- Request an Assessment links now go directly to the homepage assessment form.
- Removed Terms of Use page and Terms links.
- Retained Privacy Policy, sitemap, robots.txt, Open Graph metadata, and branded 404 page.
