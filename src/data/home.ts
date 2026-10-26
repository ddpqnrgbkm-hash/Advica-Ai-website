/** Homepage FAQs. Also used for Google's FAQ structured data. Edit the wording here. */
import { pricing } from '../config/site';

const gbp = (n: number) => '£' + n.toLocaleString('en-GB');
const startingFrom = pricing.startingFrom ? gbp(pricing.startingFrom) : '£[PLACEHOLDER]';

export const homeFaqs = [
  { q: 'How much does a project cost?', a: `It depends on what you need. Projects typically start from ${startingFrom}. Our cost estimator gives you a rough range in a couple of minutes, and we always send a written quote before any work begins.` },
  { q: 'We are not technical. Is that a problem?', a: 'No. Most of our clients are not technical. You tell us what you want to achieve, and we explain the options in plain English.' },
  { q: 'Can we spread the cost?', a: `Yes. You can pay in stages as the work is delivered, or spread the cost monthly over ${pricing.financeYears} years through a finance provider, subject to their approval.` },
  { q: 'Who will we deal with?', a: 'A named contact at Advica, based in the UK, from the first call to the end of the project. They keep you updated and are the person to call with questions.' },
  { q: 'How long does a project take?', a: 'It depends on the size of the work. Your plan and quote will include a timeline, so you know what to expect before you agree to anything.' },
];
