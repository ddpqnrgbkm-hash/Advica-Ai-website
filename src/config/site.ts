/**
 * ============================================================
 *  SITE SETTINGS - the one file for company-wide details.
 * ============================================================
 *  Edit the text between the quote marks. Keep the commas.
 *  Anything left as '' (empty) is simply hidden on the site.
 */

export const site = {
  // ---------- Company ----------
  name: 'Advica AI Solutions',
  legalName: 'Advica AI Solutions Ltd',
  tagline: 'AI, data, cloud and software engineering',
  url: 'https://advicaaisolutions.co.uk',
  companyNumber: '17076839', // shown in the footer
  registeredIn: 'England and Wales',
  vatNumber: '',
  icoNumber: '', // your ICO registration number, e.g. 'ZB123456', shown in the privacy policy

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
  sprintZeroPrice: 4250,   // £, starting price of Sprint 0 (shown as "from £4,250")
  sprintZeroCredit: 'half', // how much of the Sprint 0 fee comes off the build invoice if the client goes ahead
  vatNote: '', // e.g. 'All prices exclude VAT.', shown under prices when filled in
  financeYears: '3 to 5',
};

// ---------- Project cost estimator ----------
// The estimator works out a project SIZE from the visitor's answers.
// To also show an indicative £ range, fill in min/max for each size and set showPrices: true.
// Prices are for the build only (Sprint 0 is shown separately above).
export const estimator = {
  showPrices: false,
  sizes: {
    small:  { label: 'Small',       min: 0, max: 0, example: 'A focused tool that does one main job well' },
    medium: { label: 'Medium',      min: 0, max: 0, example: 'Several features or user types, connected to one or two systems' },
    large:  { label: 'Large',       min: 0, max: 0, example: 'A substantial platform with many features and integrations' },
    xl:     { label: 'Extra large', min: 0, max: 0, example: 'A complex, business-critical system or multi-phase programme' },
  },
  // Extra engineers: indicative cost per engineer per month (used when showPrices is true)
  engineerMonthly: { min: 0, max: 0 },
};

/** Where "Book a Call" buttons point. */
export const bookingHref = site.bookingUrl || '/contact';
export const bookingIsExternal = Boolean(site.bookingUrl);

// ---------- Main navigation (max 5 items) ----------
// "Services" builds its dropdown automatically from the service files in src/content/services.
// The other dropdowns are listed here: { label, href, text } - text is the small grey line under each link.
type NavLink = { label: string; href: string; text?: string };
export const nav: (NavLink & { dropdown?: 'services'; children?: NavLink[] })[] = [
  { label: 'Services', href: '/services', dropdown: 'services' },
  { label: 'Approach', href: '/how-it-works' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// ---------- Footer links ----------
export const footerLinks = {
  services: [
    { label: 'AI Engineering', href: '/services/ai-engineering' },
    { label: 'Data & Analytics', href: '/services/data-and-analytics' },
    { label: 'Cloud & Infrastructure', href: '/services/cloud-and-infrastructure' },
    { label: 'Digital Products', href: '/services/digital-products' },
    { label: 'Blockchain & Digital Assets', href: '/services/blockchain' },
    { label: 'Engineering Teams', href: '/services/engineering-teams' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Approach', href: '/how-it-works' },
    { label: 'Partnerships', href: '/about#partnerships' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
  tools: [
    { label: 'AI readiness assessment', href: '/ai-readiness' },
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
