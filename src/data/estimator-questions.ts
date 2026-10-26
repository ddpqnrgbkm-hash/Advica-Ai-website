/**
 * Questions for the project cost estimator (/estimate).
 * "points" push the answer towards a bigger project size. Prices live in src/config/site.ts.
 * "path" decides which follow-up questions appear: 'build' (projects) or 'engineers' (extra engineers).
 */
export type Option = { label: string; points?: number; path?: 'build' | 'engineers' };
export type Question = { id: string; question: string; help?: string; path?: 'build' | 'engineers'; options: Option[] };

export const estimatorQuestions: Question[] = [
  {
    id: 'need',
    question: 'What do you need?',
    options: [
      { label: 'An AI tool or automation', points: 2, path: 'build' },
      { label: 'A data platform or dashboards', points: 2, path: 'build' },
      { label: 'A web application or customer portal', points: 2, path: 'build' },
      { label: 'A mobile app', points: 3, path: 'build' },
      { label: 'Cloud setup, migration or DevOps', points: 1, path: 'build' },
      { label: 'Extra engineers for my team', path: 'engineers' },
    ],
  },
  // ----- Project path -----
  {
    id: 'complexity',
    path: 'build',
    question: 'How big is the job?',
    help: 'Your best guess is fine.',
    options: [
      { label: 'Simple: one main job, a handful of screens', points: 0 },
      { label: 'Moderate: several features or types of user', points: 3 },
      { label: 'Complex: lots of features, high security or heavy data', points: 6 },
    ],
  },
  {
    id: 'integrations',
    path: 'build',
    question: 'How many of your existing systems does it need to connect to?',
    help: 'For example: accounting, CRM, stock control, email.',
    options: [
      { label: 'None, it can stand alone', points: 0 },
      { label: '1 to 2 systems', points: 1 },
      { label: '3 or more systems', points: 3 },
      { label: 'Not sure', points: 1 },
    ],
  },
  {
    id: 'readiness',
    path: 'build',
    question: 'How clear is the plan so far?',
    options: [
      { label: 'We have a clear specification or designs', points: 0 },
      { label: 'We have a rough idea of what we want', points: 1 },
      { label: 'We just know the problem we want to solve', points: 2 },
    ],
  },
  {
    id: 'timeline',
    path: 'build',
    question: 'When do you need it?',
    options: [
      { label: 'As soon as possible (within 3 months)', points: 1 },
      { label: 'In the next 3 to 6 months', points: 0 },
      { label: 'We’re flexible', points: 0 },
    ],
  },
  // ----- Extra engineers path -----
  {
    id: 'engineers',
    path: 'engineers',
    question: 'How many engineers do you need?',
    options: [{ label: '1 engineer' }, { label: '2 to 3 engineers' }, { label: '4 or more' }, { label: 'Not sure yet' }],
  },
  {
    id: 'skills',
    path: 'engineers',
    question: 'Which skills are you looking for?',
    options: [
      { label: 'Software developers' },
      { label: 'Data or AI engineers' },
      { label: 'DevOps or cloud engineers' },
      { label: 'An architect or technical lead' },
      { label: 'A mix' },
    ],
  },
  {
    id: 'duration',
    path: 'engineers',
    question: 'For how long?',
    options: [{ label: 'Under 3 months' }, { label: '3 to 6 months' }, { label: '6 months or more' }, { label: 'Not sure yet' }],
  },
  {
    id: 'start',
    path: 'engineers',
    question: 'When would they need to start?',
    options: [{ label: 'As soon as possible' }, { label: 'Within a month' }, { label: 'We’re flexible' }],
  },
];

/** Score thresholds for each size (total points). */
export const sizeFor = (points: number) => (points <= 4 ? 'small' : points <= 8 ? 'medium' : points <= 11 ? 'large' : 'xl');
