/**
 * ============================================================
 *  SITE SETTINGS: the one file for company-wide details.
 * ============================================================
 *  Edit the text between the quote marks. Keep the commas.
 *  Anything left as '' (empty) is hidden on the site.
 */

export const site = {
  // ---------- Company ----------
  name: 'Advica AI Solutions',
  legalName: 'Advica AI Solutions Ltd',
  url: 'https://advicaaisolutions.co.uk',
  companyNumber: '17076839', // shown in the footer
  registeredIn: 'England and Wales',
  registeredOffice: 'Towngate House, 116-118 Towngate, Leyland, PR25 2LQ',
  vatNumber: '',
  icoNumber: '', // your ICO registration number, shown in the privacy policy

  // ---------- Contact ----------
  email: 'office@advicaaisolutions.co.uk',
  phone: '0203 916 6415',
  phoneLink: '+442039166415', // same number in international format, no spaces
  linkedin: 'https://www.linkedin.com/company/advica-ai-solutions/',
  googleReviewsUrl: '', // paste your Google reviews link here to show a "Read our Google reviews" link

  // ---------- Booking ----------
  // Paste your Cal.com or Calendly link here, e.g. 'https://cal.com/advica/intro'.
  // While empty, every "Book a call" button goes to the contact page instead.
  bookingUrl: '',

  // ---------- Analytics ----------
  // Privacy-friendly, cookie-free analytics only (for example Plausible or Fathom).
  // Paste the <script> tag they give you between the backticks. Leave empty for none.
  analyticsSnippet: ``,
};

/** Where "Book a call" buttons point. */
export const bookingHref = site.bookingUrl || '/contact';
export const bookingIsExternal = Boolean(site.bookingUrl);

// ---------- Engineering partner statement ----------
// Off by default. Set show to true to display the line below on the home and About pages.
export const partner = {
  show: false,
  statement: 'UK-led projects, delivered with our established engineering partner',
  name: '', // optional: the partner's name, shown after the statement
};

// ---------- Main menu (5 items plus the "Book a call" button) ----------
type NavLink = { label: string; href: string; text?: string };
export const nav: (NavLink & { dropdown?: 'services' })[] = [
  { label: 'Services', href: '/services', dropdown: 'services' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
];

// ---------- Footer links ----------
export const footerLinks: Record<string, NavLink[]> = {
  Services: [
    { label: 'AI and automation', href: '/services/ai-and-automation' },
    { label: 'Websites, apps and software', href: '/services/websites-apps-and-software' },
    { label: 'Hosting, security and support', href: '/services/hosting-security-and-support' },
    { label: 'Extra developers for your team', href: '/services/extra-developers' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Industries', href: '/industries' },
    { label: 'Case studies', href: '/case-studies' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
  Pricing: [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Cost estimator', href: '/estimate' },
  ],
};
export const legalLinks: NavLink[] = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

// ---------- Pricing ----------
export const pricing = {
  startingFrom: 0, // £, "Projects typically start from £..." Hidden while 0.
  financeYears: '3 to 5',
};

// ---------- Project cost estimator ----------
// Rough price ranges in £. Fill these in, then set ready to true to show the estimator's price ranges.
export const estimator = {
  ready: false,
  ranges: {
    small: { min: 0, max: 0 },
    medium: { min: 0, max: 0 },
    large: { min: 0, max: 0 },
  },
  developersPerMonth: { min: 0, max: 0 }, // for "Extra developers": cost per developer per month
};

// ---------- Headline numbers ----------
// Only add numbers you can prove. While empty, nothing is shown.
export const stats: { value: string; label: string }[] = [];

// ---------- Testimonials ----------
// Real words from real clients, used with their permission.
// Fill in name, role and company. Until you do, a [PLACEHOLDER] note shows instead.
export const testimonials = [
  {
    quote: 'Really impressed with Advica Ai Solutions. The team understood exactly what I needed and made the whole process straightforward from start to finish. Great communication and would definitely recommend.',
    name: '',
    role: '',
    company: '',
  },
  {
    quote: 'Great service, excellent team of professionals to work with, quality product outcome, happy with the results, will advice it to my friends whenever they need an app. Also to mention, guaranteed support in project development.',
    name: '',
    role: '',
    company: '',
  },
];
