# Notes for Claude

The owner is not a developer. Explain anything they must do themselves in plain, numbered steps. Use UK English.

## Project
- Astro 5 static site + Tailwind CSS 4, deployed on Netlify from `main`. See README.md for where content lives.
- Company-wide settings: `src/config/site.ts`. Services/blog/case studies: Markdown in `src/content/`.
- Forms: Netlify Forms (`contact`, `estimate`, `ai-readiness`) with honeypot `bot-field`. Keep the static HTML forms so Netlify can detect them.
- JavaScript only for menus, tabs/slider, estimator and quiz; everything must still work without it.
- Before committing: `npm run build` must pass. For visual changes, screenshot with Playwright and show the owner.
- Keep Lighthouse at 95+ (check colour contrast — WCAG AA) and keep JSON-LD valid.

## Content rules
- Plain English, no jargon (no "Directorate", "Engagement Protocol", "Executive Circulation" style language).
- Never invent clients, statistics, certifications, awards, reviews or case studies. Ask the owner for evidence first.
- Never name or describe the engineering delivery partner, and never use its clients, case studies, statistics or certifications. It's fine to say delivery is carried out by "our established engineering partner".
- Not evidenced (do not use): "UK leading", ISO 9001/27001, cloud partner badges, engineer/project/deployment counts.
- Confirmed facts: company no. 17076839; registered office Towngate House, 116-118 Towngate, Leyland PR25 2LQ; ICO registered; Sprint 0 is £4,250 with £2,125 credited if the client proceeds to build; financing over 3–5 years via third-party lenders. The two testimonials are from real clients.
- Tax: never promise tax benefits — say "consult your accountant".
- Don't promise response times, call lengths, code ownership or guarantees unless the owner confirms them.
