/**
 * Small progressive enhancements: tabs and sliders.
 * Without JavaScript, every tab panel is shown in full and sliders can still be swiped/scrolled.
 */

// ---------- Tabs ----------
document.querySelectorAll<HTMLElement>('[data-tabs]').forEach((root) => {
  const list = root.querySelector<HTMLElement>('[role="tablist"]');
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const panels = tabs.map((t) => document.getElementById(t.getAttribute('aria-controls')!)!);
  if (!list || !tabs.length) return;
  list.hidden = false;

  const select = (i: number, focus = false) => {
    tabs.forEach((t, j) => {
      const on = i === j;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      panels[j].hidden = !on;
    });
    if (focus) tabs[i].focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(i));
    t.addEventListener('keydown', (e) => {
      const last = tabs.length - 1;
      const next = { ArrowRight: i + 1, ArrowDown: i + 1, ArrowLeft: i - 1, ArrowUp: i - 1, Home: 0, End: last }[e.key];
      if (next === undefined) return;
      e.preventDefault();
      select((next + tabs.length) % tabs.length, true);
    });
  });
  select(0);
});

// ---------- Sliders ----------
document.querySelectorAll<HTMLElement>('[data-slider]').forEach((root) => {
  const track = root.querySelector<HTMLElement>('[data-track]')!;
  const prev = root.querySelector<HTMLButtonElement>('[data-prev]');
  const next = root.querySelector<HTMLButtonElement>('[data-next]');
  const controls = root.querySelector<HTMLElement>('[data-controls]');
  if (!track || !prev || !next) return;
  if (controls) controls.hidden = false;

  const step = () => (track.firstElementChild as HTMLElement)?.offsetWidth + 24 || track.clientWidth;
  const update = () => {
    prev.disabled = track.scrollLeft <= 4;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  };
  prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
});
