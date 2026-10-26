/**
 * Turns a long form into one-question-at-a-time steps.
 * Markup: <form data-stepper> with <fieldset data-step [data-path="x"]> blocks,
 * a [data-nav] block (with [data-back], [data-next], [data-count], [data-bar]),
 * and [data-after] blocks that are revealed once all questions are answered.
 * data-default-path on the form sets which branch is counted before one is chosen.
 * Choosing an option with data-choose-path="x" limits later steps to those with data-path="x".
 * When finished the form fires a "stepper:done" event.
 * Without JavaScript, everything simply shows as one ordinary form.
 */
export function initStepper(form: HTMLFormElement) {
  const all = [...form.querySelectorAll<HTMLFieldSetElement>('fieldset[data-step]')];
  const nav = form.querySelector<HTMLElement>('[data-nav]')!;
  const back = nav.querySelector<HTMLButtonElement>('[data-back]')!;
  const next = nav.querySelector<HTMLButtonElement>('[data-next]')!;
  const count = nav.querySelector<HTMLElement>('[data-count]')!;
  const bar = nav.querySelector<HTMLElement>('[data-bar]')!;
  const after = [...form.querySelectorAll<HTMLElement>('[data-after]')];
  let path: string | null = null;
  let index = 0;

  // Until a path is chosen, count the form's default path (data-default-path) so the total is right
  const active = () => {
    const p = path ?? form.dataset.defaultPath ?? null;
    return all.filter((f) => !f.dataset.path || !p || f.dataset.path === p);
  };
  const answered = (f: HTMLFieldSetElement) => !!f.querySelector('input:checked');

  function show(i: number, focus = true) {
    const steps = active();
    index = Math.max(0, Math.min(i, steps.length - 1));
    all.forEach((f) => {
      const inPath = steps.includes(f);
      f.hidden = f !== steps[index];
      f.disabled = !inPath; // unused branches aren't submitted
    });
    after.forEach((a) => (a.hidden = true));
    nav.hidden = false;
    back.disabled = index === 0;
    next.disabled = !answered(steps[index]);
    next.textContent = index === steps.length - 1 ? 'See my result' : 'Next';
    count.textContent = `Question ${index + 1} of ${steps.length}`;
    bar.style.width = `${(index / steps.length) * 100}%`;
    if (focus) steps[index].querySelector<HTMLElement>('legend')?.focus();
  }

  function finish() {
    all.forEach((f) => (f.hidden = true));
    nav.hidden = true;
    after.forEach((a) => (a.hidden = false));
    form.dispatchEvent(new CustomEvent('stepper:done'));
    after[0]?.querySelector<HTMLElement>('[data-focus]')?.focus();
  }

  form.addEventListener('change', (e) => {
    const input = e.target as HTMLInputElement;
    if (input.type !== 'radio') return;
    if (input.dataset.choosePath) path = input.dataset.choosePath;
    next.disabled = false;
  });
  next.addEventListener('click', () => {
    const steps = active();
    if (index === steps.length - 1) finish();
    else show(index + 1);
  });
  back.addEventListener('click', () => show(index - 1));
  form.querySelector('[data-restart]')?.addEventListener('click', () => {
    form.reset();
    path = null;
    show(0);
  });

  all.forEach((f) => f.querySelector('legend')?.setAttribute('tabindex', '-1'));
  show(0, false);
}
