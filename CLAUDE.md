# Notes for Claude

The owner is not a developer. Explain anything they must do themselves in plain, numbered steps. Use UK English.

## Project
- Astro 5 static site + Tailwind CSS 4, deployed on Netlify from `main`. See README.md for where content lives.
- Company-wide settings: `src/config/site.ts`. Services/blog/case studies: Markdown in `src/content/`.
- Forms: Netlify Forms (`contact`, `estimate`, `ai-readiness`) with honeypot `bot-field`. Keep the static HTML forms so Netlify can detect them.
- JavaScript only for menus, tabs/slider, estimator and quiz; everything must still work without it.
- Before committing: `npm run build` must pass. For visual changes, screenshot with Playwright and show the owner.
- Keep Lighthouse at 95+ (check colour contrast, WCAG AA) and keep JSON-LD valid.

## Content rules
- Plain English, no jargon (no "Directorate", "Engagement Protocol", "Executive Circulation" style language).
- Never use long dashes (— or –) anywhere on the site. Use commas, colons, full stops or "to" for ranges.
- Never invent clients, statistics, certifications, awards, reviews or case studies. Ask the owner for evidence first.
- Never name or describe the engineering delivery partner, and never use its clients, case studies, statistics or certifications. It's fine to say delivery is carried out by "our established engineering partner".
- Not evidenced (do not use): "UK leading", ISO 9001/27001, cloud partner badges, engineer/project/deployment counts.
- Confirmed facts: company no. 17076839; registered office Towngate House, 116-118 Towngate, Leyland PR25 2LQ; ICO registered; Sprint 0 starts at £4,250 (always say "from £4,250"); half the Sprint 0 fee is credited if the client proceeds to build; financing over 3 to 5 years via third-party lenders. The two testimonials are from real clients.
- Tax: never promise tax benefits; say "consult your accountant".
- Don't promise response times, call lengths, code ownership or guarantees unless the owner confirms them.

## Positioning (owner's direction)
- Target enterprise and large organisations with substantial budgets. Six service areas: AI Engineering, Data & Analytics, Cloud & Infrastructure, Digital Products, Blockchain & Digital Assets, Engineering Teams (see src/content/services).
- Do not show prices on the main site (no Sprint 0 price, no estimator in menus). Pricing page and estimator are kept in the code for a possible lower-cost offer later.
- Financing can be mentioned briefly as an option, without figures beyond "3 to 5 years".

## Design (owner's direction: Apple-like, premium, easy to read, not AI-looking)
- Inter only. Large clean sentence-case headlines (`display`, `title`), generous white space, one idea per section.
- White, light grey (`grey` #f5f5f7) and black (`night`) panels with large rounded corners; blue (`blue` #0066cc) for links and buttons; "Learn more ›" text links.
- Avoid AI-design tells: gradient text, glows, blurred blobs, glass panels, decorative swirls or dots, fake dashboards with made-up numbers, icon-in-coloured-square card grids, emoji, floating cards, marquees.
- Copy: everyday English people actually say, short sentences, no slogans or long dashes. Never put the location in the main content; it belongs in the footer only.
