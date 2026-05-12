# Pyne Technologies Figma Spec

This spec is the source of truth for recreating the Pyne Technologies design in Figma when a Figma file connection is available.

## Frames

- Desktop Home: 1440px wide, light background, sticky header, animated hero with Launch Cockpit, stats strip, services, AI, process, clients marquee, blog preview, contact CTA.
- Mobile Home: 390px wide, stacked hero, compact nav menu, single-column cards, contact form.
- Service Detail: hero with service copy and media, feature/outcome panels, contact form.
- AI Detail: light lime intro, capability panel, practical workflow CTA.
- Contact: contact info tiles and lead form.

## Brand System

- Logo: use `public/pyne-logo.svg`; bright P mark with circuit/spark/motion styling plus Pyne Technologies wordmark.
- Color tokens are in `design/pyne-design-tokens.json`.
- Use light surfaces only. No dark mode and no dark section backgrounds.
- Buttons are rounded pills. Cards are 24px radius. Large panels are 30px radius.
- Typography should be bold and friendly: display headings at 900 weight, body at 600.

## Components

- Header: logo left, dropdown nav groups, client/blog/contact links, lime CTA.
- Launch Cockpit Hero: no-face interactive orbit surface with four mode buttons, central glass card, changing metric tile, service stack chips, and Brief/Design/Build/Launch progress rail.
- Dropdown item: title, short description, arrow icon.
- Service card: image, colored icon square, kicker, title, description, detail link.
- AI tile: icon, title, short description.
- Stat tile: large animated number and short label.
- Process card: numbered step, yellow icon chip, title, short explanation.
- Contact form: name, email, phone, interest, service/product, message, WhatsApp CTA, email draft CTA.

## Prototype Notes

- Hero card gently floats; yellow presentation note drifts vertically.
- Service cards lift and rotate slightly on hover.
- Client cards move in a horizontal marquee.
- Scroll reveals use fade-up and should respect reduced-motion settings.

## Content Source

All content is centralized in `lib/site-data.ts`. Figma text should match that file unless new approved marketing copy replaces it.
