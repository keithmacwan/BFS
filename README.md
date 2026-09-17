# BioFacility Solutions Website v17

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
- Added a client-assurance strip covering professional liability insurance, principal-led engagements and the Engineering + Laboratory Science model.
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
This package is intended for use only after BioFacility Solutions has received its PEO Certificate of Authorization. Add the C of A number to the site once issued if desired. The site intentionally uses “engineering consulting services” and “professional engineering services” but does not use the restricted personal title “Consulting Engineer.”


## v20 hero copy refinement
- Removed the phrase “P.Eng.-led” from customer-facing copy.
- Simplified the homepage hero to one concise service statement.
- Removed the duplicated motto line from the hero; the motto remains in the site brand/header.
- Credential strip now reads: Ontario P.Eng. | PEO Certificate of Authorization | Engineering + Laboratory Science.
- Added cache-busting query strings for GitHub/Hostinger deployment consistency.


## v23 update
- Institutional experience integrated into each principal bio.
- Professional liability insurance added to assurance/credential messaging.
- Consulting cards and capability details tightened.
- ULT technical-context/limitations section removed.
- Critical Alarm hero now shows seven individual checklist links.
- Visible em-dash styling removed from key site copy.
