/**
 * ============================================================
 *  SITE SETTINGS — the one file for company-wide details.
 * ============================================================
 *  Edit the text between the quote marks. Keep the commas.
 *  Anything left as '' (empty) is simply hidden on the site.
 */

export const site = {
  // ---------- Company ----------
  name: 'Advica AI Solutions',
  legalName: 'Advica AI Solutions Ltd',
  tagline: 'Bespoke AI and software engineering for UK businesses',
  url: 'https://advicaaisolutions.co.uk',
  companyNumber: '17076839', // shown in the footer
  registeredIn: 'England and Wales',
  vatNumber: '',
  icoNumber: '', // your ICO registration number, e.g. 'ZB123456' — shown in the privacy policy

  // ---------- Contact ----------
  email: 'office@advicaaisolutions.co.uk',
  phone: '0203 916 6415',
  phoneLink: '+442039166415', // same number in international format, no spaces
  address: {
    street: 'Towngate House, 116-118 Towngate',
    town: 'Leyland',
    region: 'Lancashire',
    postcode: 'PR25 2LQ',
    country: 'GB',
  },
  linkedin: 'https://www.linkedin.com/company/advica-ai-solutions/',

  // ---------- Booking ----------
  // Paste your Cal.com or Calendly link here, e.g. 'https://cal.com/advica/intro'.
  // While empty, every "Book a Call" button goes to the contact page instead.
  bookingUrl: '',

  // ---------- Analytics ----------
  // Privacy-friendly, cookie-free analytics only (e.g. Plausible, Fathom, Simple Analytics).
  // Paste the <script> tag they give you between the backticks. Leave empty for none.
  analyticsSnippet: ``,
};

// ---------- Pricing ----------
export const pricing = {
  sprintZeroPrice: 4250,   // £, Sprint 0 discovery phase
  sprintZeroCredit: 2125,  // £ credited back against the build if the client continues with us
  vatNote: '', // e.g. 'All prices exclude VAT.' — shown under prices when filled in
  financeYears: '3–5',
};

/** Where "Book a Call" buttons point. */
export const bookingHref = site.bookingUrl || '/contact';
export const bookingIsExternal = Boolean(site.bookingUrl);

// ---------- Main navigation (max 5 items) ----------
// "Services" builds its dropdown automatically from the service files in src/content/services.
// The other dropdowns are listed here: { label, href, text } — text is the small grey line under each link.
type NavLink = { label: string; href: string; text?: string };
export const nav: (NavLink & { dropdown?: 'services'; children?: NavLink[] })[] = [
  { label: 'Services', href: '/services', dropdown: 'services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Insights',
    href: '/insights',
    children: [
      { label: 'Articles', href: '/insights', text: 'Plain-English guides on AI and software' },
      { label: 'Case studies', href: '/case-studies', text: 'Projects we’ve delivered' },
      { label: 'Project cost estimator', href: '/estimate', text: 'An indicative price in 2 minutes' },
      { label: 'AI readiness quiz', href: '/ai-readiness', text: 'Score your business in 3 minutes' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About us', href: '/about', text: 'Our mission and how we work' },
      { label: 'Partnerships', href: '/about#partnerships', text: 'Work with us as a partner' },
      { label: 'Contact', href: '/contact', text: 'Talk to a real person' },
    ],
  },
];

// ---------- Footer links ----------
export const footerLinks = {
  services: [
    { label: 'AI & Data', href: '/services/ai-and-data' },
    { label: 'Software & Cloud', href: '/services/software-and-cloud' },
    { label: 'Extra Engineers', href: '/services/extra-engineers' },
    { label: 'Case Studies', href: '/case-studies' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Partnerships', href: '/about#partnerships' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
  tools: [
    { label: 'Project cost estimator', href: '/estimate' },
    { label: 'AI readiness quiz', href: '/ai-readiness' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
};

// ---------- Headline numbers ----------
// Only add numbers you can evidence. If this list is empty the stats strip is hidden.
// Example: { value: '50+', label: 'AI projects delivered' },
export const stats: { value: string; label: string }[] = [];

// ---------- Testimonials ----------
// Only real, unedited client words, used with permission.
// Set "show: false" to hide one without deleting it.
export const testimonials = [
  {
    quote:
      'Great service, excellent team of professionals to work with, quality product outcome, happy with the results, will advice it to my friends whenever they need an app. Also to mention, guaranteed support in project development.',
    name: '', // e.g. 'Jane Smith'
    role: '', // e.g. 'Founder, Example Ltd'
    show: true,
  },
  {
    quote:
      'Really impressed with Advica Ai Solutions. The team understood exactly what I needed and made the whole process straightforward from start to finish. Great communication and would definitely recommend.',
    name: '',
    role: '',
    show: true,
  },
];
