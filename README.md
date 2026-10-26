# Advica AI Solutions — website

This is the code for **advicaaisolutions.co.uk**. You don't need to be a developer to change it: almost all the words live in a few plain files, and you can ask Claude to make changes for you.

- **Going live for the first time?** Follow [SETUP-GUIDE.md](SETUP-GUIDE.md) (GitHub → Netlify → form emails → domain).
- **Changing something?** Read on.

---

## How changes go live

1. A file in this repository is changed (by you on GitHub, or by Claude).
2. The change is saved ("committed") to the `main` branch on GitHub.
3. Netlify notices automatically, rebuilds the site and publishes it — usually within 1–2 minutes.

If a change breaks the build, Netlify keeps the previous version live, so the site never goes down. You'll see the failed build in Netlify under **Deploys**.

### Editing a file yourself on GitHub
1. Go to the repository on github.com and open the file (e.g. `src/config/site.ts`).
2. Click the **pencil icon** (Edit this file).
3. Make your change. Keep quote marks `' '` and commas exactly as they are.
4. Click **Commit changes…**, write a short note (e.g. "Update phone number") and click **Commit changes** again.
5. Wait 1–2 minutes and refresh the website.

---

## Where everything lives

| What you want to change | File |
|---|---|
| Company name, phone, email, address, company number, LinkedIn | `src/config/site.ts` |
| **"Book a Call" link** (Cal.com / Calendly) | `src/config/site.ts` → `bookingUrl` |
| Sprint 0 price and credit | `src/config/site.ts` → `pricing` |
| **Estimator price ranges** | `src/config/site.ts` → `estimator` |
| Headline numbers / stats strip (hidden while empty) | `src/config/site.ts` → `stats` |
| Testimonials | `src/config/site.ts` → `testimonials` |
| Main menu and dropdowns | `src/config/site.ts` → `nav` |
| Footer links | `src/config/site.ts` → `footerLinks` |
| Privacy-friendly analytics | `src/config/site.ts` → `analyticsSnippet` |
| The 4 process steps (homepage + How It Works) | `src/data/steps.ts` |
| Contact form drop-down choices | `src/data/form-options.ts` |
| Estimator questions | `src/data/estimator-questions.ts` |
| AI readiness quiz questions, tips and score bands | `src/data/quiz-questions.ts` |
| **Service pages** (AI & Data, Software & Cloud, Extra Engineers) | `src/content/services/*.md` |
| **Blog posts** (Insights) | `src/content/insights/*.md` |
| **Case studies** | `src/content/case-studies/*.md` |
| Homepage wording | `src/pages/index.astro` |
| How It Works page | `src/pages/how-it-works.astro` |
| Pricing page | `src/pages/pricing.astro` |
| About + Partnerships | `src/pages/about.astro` |
| Contact page and form | `src/pages/contact.astro` |
| Privacy policy / Terms | `src/pages/privacy.astro` / `src/pages/terms.astro` |
| Colours, fonts and visual style | `src/styles/global.css` (top of file) |
| Animated 3D sphere on the homepage | `src/scripts/sphere.ts` |
| Product mock-up screens on the homepage | `src/components/ProductShowcase.astro` |
| Logo | `src/components/Logo.astro` and `public/favicon.svg` |
| Social-share image | `public/og-default.png` (1200 × 630 pixels) |
| Redirects from old web addresses | `netlify.toml` |
| Original text from the old website (reference only) | `content-archive/` |

Files ending `.md` are plain text with a settings block at the top between `---` lines. Files ending `.astro` or `.ts` contain some code — easiest to ask Claude to change those.

---

## Common jobs

### Add the booking link
In `src/config/site.ts`, find `bookingUrl: ''` and paste your link between the quote marks:
```ts
bookingUrl: 'https://cal.com/advica/discovery-call',
```
Every "Book a call" button on the site (and the mobile bar) now opens it.

### Change contact details
In `src/config/site.ts`, edit `email`, `phone` **and** `phoneLink` (the same number in international format with no spaces, e.g. `+442039166415` — this is what makes click-to-call work).

### Turn on estimator prices
1. In `src/config/site.ts`, find `estimator`.
2. For each size (`small`, `medium`, `large`, `xl`), set `min` and `max` in pounds, e.g. `min: 15000, max: 30000`.
3. Optionally set `engineerMonthly` (cost per engineer per month).
4. Change `showPrices: false` to `showPrices: true`.

Until you do this, the estimator shows a project size and recommends Sprint 0, without a £ range.

### Add a blog post
1. Go to `src/content/insights/` on GitHub and click **Add file → Create new file**.
2. Name it with dashes, e.g. `ai-for-accountancy-firms.md` (this becomes the web address `/insights/ai-for-accountancy-firms`).
3. Paste this and fill it in:
   ```md
   ---
   title: "Your headline here"
   description: "One or two sentences shown in Google and on the Insights page."
   date: 2026-11-01
   category: Strategy
   readingTime: 4 min read
   ---

   Your opening paragraph.

   ## A sub-heading

   More text. **Bold**, *italic*, [a link](/contact), and lists:

   - point one
   - point two
   ```
4. Commit. It appears at the top of the Insights page automatically.
   Add `draft: true` to the settings block to save it without publishing.

### Add a case study
1. Open `src/content/case-studies/_template.md` and copy everything.
2. Create a new file in the same folder, e.g. `invoice-automation-for-xyz.md`, and paste.
3. Fill in every field. **Only publish real projects, with the client's permission.**
4. Change `draft: true` to `draft: false` and commit. The "coming soon" message is replaced automatically on the homepage and Case Studies page.

### Add a testimonial
In `src/config/site.ts` → `testimonials`, copy one `{ ... },` block, paste it below, and change the quote, name and role. Use the client's exact words, with permission.

### Add or change a service
Each service is one file in `src/content/services/`. Change the wording, the list of `capabilities` (these also feed the Services dropdown menu), `whoFor`, `outcomes`, `process` and `faqs`. To add a fourth service, copy an existing file, rename it and change `order`. Then ask Claude to add it to the footer.

### Add a headline stat
Only add numbers you can evidence. In `src/config/site.ts`:
```ts
export const stats = [
  { value: '25+', label: 'AI projects delivered' },
];
```

### Add analytics (cookie-free)
Sign up to a privacy-friendly service such as Plausible, Fathom or Simple Analytics, copy the `<script ...></script>` they give you, and paste it between the backticks of `analyticsSnippet` in `src/config/site.ts`. No cookie banner is needed for these.

### Replace the logo
Send Claude your logo (SVG preferred, or a large transparent PNG) and ask it to update the header, footer, favicon and social-share image.

---

## Example prompts to give Claude later

Copy, adapt and paste these into a Claude Code session with this repository:

- "Add my Calendly link https://calendly.com/advica/30min to the website."
- "Write a new Insights article (about 600 words, plain English, UK spelling) on how small accountancy firms can use AI for client onboarding. Add it to the blog."
- "Turn these notes into a case study and publish it: [paste notes]. The client is happy to be named."
- "Set the estimator price ranges to: small £[min]–£[max], medium £[min]–£[max], large £[min]–£[max], extra large £[min]–£[max], and engineers £[min]–£[max] per month. Turn prices on."
- "Change the homepage headline to '...' and show me a screenshot before you publish."
- "Here's our new logo [attach file]. Put it on the site and regenerate the favicon and social-share image."
- "Add a new FAQ to the Pricing page: [question] / [answer]."
- "Add a fourth service called 'AI Training' with these details: ..."
- "We now have ISO 27001 certification — certificate attached. Add it to the About page."
- "Run a Lighthouse check on the live site and fix anything under 95."
- "A client says the contact form isn't working — please investigate."

---

## Honesty rules (please keep to these)

UK advertising rules (the CAP Code) and consumer protection law require claims on a business website to be true and evidenced. This site deliberately avoids:

- statistics, client logos, certifications or awards that aren't Advica's own;
- testimonials that aren't real, unedited and permitted;
- invented case studies;
- tax promises — financing pages say "consult your accountant".

If you're unsure about a claim, ask before publishing.

---

## For developers

- [Astro 5](https://astro.build) static site + Tailwind CSS 4. Content collections in `src/content.config.ts`.
- `npm install`, `npm run dev` (http://localhost:4321), `npm run build` → `dist/`.
- Forms use Netlify Forms (`data-netlify="true"` with honeypot `bot-field`): `contact`, `estimate`, `ai-readiness`.
- JavaScript is limited to: dropdown menus, tabs/slider, the estimator and the quiz. Everything degrades to working HTML without it.
- No cookies. JSON-LD: Organization/ProfessionalService (all pages), FAQPage, Service, BreadcrumbList, BlogPosting.
