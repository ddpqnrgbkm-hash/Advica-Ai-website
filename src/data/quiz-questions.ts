/**
 * AI readiness quiz (/ai-readiness). Each answer scores 0 to 3.
 * "tip" is shown as a suggestion when someone scores 0 or 1 on that question.
 */
export const quizQuestions = [
  {
    id: 'goals',
    topic: 'Goals',
    question: 'Do you know which business problems AI could help with?',
    options: ['Not really, no', 'We have a few ideas', 'We have a list of possible uses', 'Yes, prioritised with expected benefits'],
    tip: 'List your most repetitive, time-consuming tasks. They’re usually the best first candidates for AI, and the easiest to measure.',
  },
  {
    id: 'data-location',
    topic: 'Data',
    question: 'Where does your key business information live?',
    options: ['On paper or in people’s heads', 'Spread across spreadsheets and inboxes', 'Mostly in our business software', 'In connected systems we can easily report from'],
    tip: 'AI needs data it can reach. Bringing your key information into one place is often the most valuable first step.',
  },
  {
    id: 'data-quality',
    topic: 'Data quality',
    question: 'How much do you trust that information?',
    options: ['Not much', 'It’s patchy', 'Mostly accurate', 'Accurate and kept up to date'],
    tip: 'Pick one important dataset (customers, jobs or stock) and agree who owns keeping it accurate.',
  },
  {
    id: 'processes',
    topic: 'Processes',
    question: 'Are your main processes written down?',
    options: ['No', 'They’re mostly in people’s heads', 'Some are documented', 'Yes, documented and followed consistently'],
    tip: 'Map one process from start to finish. You can’t automate what isn’t clear, and the exercise often reveals quick wins.',
  },
  {
    id: 'systems',
    topic: 'Systems',
    question: 'How modern are your core software systems?',
    options: ['Mostly paper or very old software', 'Older desktop software', 'A mix of cloud tools', 'Cloud systems that connect to each other'],
    tip: 'Check whether your main systems can share data (often called an “API”). It makes adding AI far quicker and cheaper.',
  },
  {
    id: 'people',
    topic: 'People',
    question: 'How does your team feel about AI?',
    options: ['Worried or resistant', 'Unsure', 'Curious and open', 'Already using it day to day'],
    tip: 'Involve the people who do the work early. A short, practical session showing what AI can (and can’t) do goes a long way.',
  },
  {
    id: 'governance',
    topic: 'Governance',
    question: 'Do you have rules about using AI with company or customer data?',
    options: ['None', 'Informal, unwritten rules', 'Some guidance', 'A clear policy that covers data protection'],
    tip: 'Write a simple one-page AI use policy: which tools are allowed, and what data must never be shared with them.',
  },
  {
    id: 'investment',
    topic: 'Investment',
    question: 'Is there budget and leadership backing for AI?',
    options: ['Not yet', 'Interest, but no budget', 'Budget for a small pilot', 'A committed sponsor and budget'],
    tip: 'Start with a small pilot that has a clear measure of success. Monthly financing can also spread the cost of a larger build.',
  },
];

export const quizBands = [
  {
    min: 0,
    title: 'Early days',
    summary: 'You’re at the start of the journey, which is a great time to get the foundations right. Focus on getting your data and processes in order before building anything big.',
    next: { label: 'Explore AI strategy & discovery', href: '/services/ai-and-data#ai-strategy' },
  },
  {
    min: 40,
    title: 'Building foundations',
    summary: 'You have some of the building blocks in place. A focused pilot on one well-understood problem could deliver real value while you strengthen the rest.',
    next: { label: 'See how Sprint 0 works', href: '/how-it-works' },
  },
  {
    min: 70,
    title: 'Ready to act',
    summary: 'You’re in a strong position to put AI to work. The priority now is choosing the right opportunities and building them properly, so they scale.',
    next: { label: 'Explore AI & Data services', href: '/services/ai-and-data' },
  },
];
