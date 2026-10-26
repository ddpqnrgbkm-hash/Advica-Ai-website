/**
 * Hero visual: a rotating 3D network sphere with travelling light pulses.
 * Plain <canvas> 2D - no libraries. Pauses when off-screen; static for reduced-motion users.
 */
type P = { x: number; y: number; z: number };

export function initSphere(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const small = window.matchMedia('(max-width: 640px)').matches;
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const N = small ? 420 : 820;

  // Points evenly spread over a sphere (Fibonacci lattice)
  const pts: P[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const t = golden * i;
    pts.push({ x: Math.cos(t) * r, y, z: Math.sin(t) * r });
  }
  // Connect each point to its 2 nearest neighbours (single pass, no sorting)
  const links: [number, number][] = [];
  for (let i = 0; i < N; i++) {
    let d1 = Infinity, d2 = Infinity, j1 = -1, j2 = -1;
    const a = pts[i];
    for (let j = 0; j < N; j++) {
      if (i === j) continue;
      const b = pts[j];
      const d = (a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2;
      if (d < d1) { d2 = d1; j2 = j1; d1 = d; j1 = j; } else if (d < d2) { d2 = d; j2 = j; }
    }
    if (i < j1) links.push([i, j1]);
    if (i < j2) links.push([i, j2]);
  }
  // Orbiting ring of dots
  const ring: P[] = Array.from({ length: 140 }, (_, i) => {
    const a = (i / 140) * Math.PI * 2;
    return { x: Math.cos(a) * 1.45, y: 0, z: Math.sin(a) * 1.45 };
  });
  // Light pulses travelling along random links
  const pulses = Array.from({ length: small ? 10 : 22 }, () => ({ l: (Math.random() * links.length) | 0, t: Math.random(), s: 0.006 + Math.random() * 0.01 }));

  let w = 0, h = 0, dpr = 1, rotY = 0, tiltX = -0.35, mx = 0, my = 0, running = false, raf = 0;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }

  function project(p: P, rx: number, ry: number, tilt = 0) {
    // rotate around Y then X
    let x = p.x * Math.cos(ry) - p.z * Math.sin(ry);
    let z = p.x * Math.sin(ry) + p.z * Math.cos(ry);
    let y = p.y;
    const ax = rx + tilt;
    const y2 = y * Math.cos(ax) - z * Math.sin(ax);
    z = y * Math.sin(ax) + z * Math.cos(ax);
    y = y2;
    const R = Math.min(w, h) * 0.4;
    const persp = 3 / (3 + z);
    return { x: w / 2 + x * R * persp, y: h / 2 + y * R * persp, z, s: persp };
  }

  const BUCKETS = 5;
  const lineAlpha = Array.from({ length: BUCKETS }, (_, b) => 0.05 + (b / (BUCKETS - 1)) * 0.24);
  const px = new Float32Array(N), py = new Float32Array(N), pz = new Float32Array(N);

  function draw() {
    const c = ctx!;
    c.clearRect(0, 0, w, h);
    const rx = tiltX + my * 0.25;
    const ry = rotY + mx * 0.4;
    for (let i = 0; i < N; i++) {
      const p = project(pts[i], rx, ry);
      px[i] = p.x; py[i] = p.y; pz[i] = p.z;
    }
    // links, batched into depth buckets (one stroke per bucket)
    c.lineWidth = 0.7;
    for (let b = 0; b < BUCKETS; b++) {
      c.beginPath();
      for (const [i, j] of links) {
        const front = (2 - (pz[i] + pz[j])) / 4; // 0 back .. 1 front
        if (Math.min(BUCKETS - 1, (front * BUCKETS) | 0) !== b) continue;
        c.moveTo(px[i], py[i]); c.lineTo(px[j], py[j]);
      }
      c.strokeStyle = `rgba(60,200,255,${lineAlpha[b]})`;
      c.stroke();
    }
    // points, batched the same way
    for (let b = 0; b < BUCKETS; b++) {
      const f = (b + 0.5) / BUCKETS;
      const r = 0.7 + f * 1.4;
      c.fillStyle = f > 0.55 ? `rgba(190,236,255,${0.35 + f * 0.6})` : `rgba(47,123,255,${0.3 + f * 0.6})`;
      c.beginPath();
      for (let i = 0; i < N; i++) {
        const front = (1 - pz[i]) / 2;
        if (Math.min(BUCKETS - 1, (front * BUCKETS) | 0) !== b) continue;
        c.moveTo(px[i] + r, py[i]); c.arc(px[i], py[i], r, 0, Math.PI * 2);
      }
      c.fill();
    }
    // pulses
    for (const pu of pulses) {
      const [a, b] = links[pu.l];
      const x = px[a] + (px[b] - px[a]) * pu.t, y = py[a] + (py[b] - py[a]) * pu.t;
      const front = (2 - (pz[a] + pz[b])) / 4;
      const g = c.createRadialGradient(x, y, 0, x, y, 10);
      g.addColorStop(0, `rgba(160,230,255,${0.45 + front * 0.55})`);
      g.addColorStop(1, 'rgba(60,200,255,0)');
      c.fillStyle = g; c.beginPath(); c.arc(x, y, 10, 0, Math.PI * 2); c.fill();
    }
    // orbit ring (tilted)
    c.fillStyle = 'rgba(60,200,255,0.4)';
    c.beginPath();
    for (const r of ring) {
      const p = project(r, rx, ry * 0.6, 0.5);
      if (p.z > 0.6) continue; // hide the part behind the sphere
      const rad = 0.6 + ((1 - p.z / 1.45) / 2) * 1.1;
      c.moveTo(p.x + rad, p.y); c.arc(p.x, p.y, rad, 0, Math.PI * 2);
    }
    c.fill();
  }

  let last = 0;
  function tick(now = 0) {
    raf = requestAnimationFrame(tick);
    if (small && now - last < 32) return;
    const step = small ? 2 : 1;
    last = now;
    rotY += 0.0018 * step;
    for (const pu of pulses) {
      pu.t += pu.s * step;
      if (pu.t >= 1) { pu.t = 0; pu.l = (Math.random() * links.length) | 0; }
    }
    draw();
  }
  const start = () => { if (!running && !still) { running = true; raf = requestAnimationFrame(tick); } };
  const stop = () => { running = false; cancelAnimationFrame(raf); };

  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop())).observe(canvas);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  if (!still) {
    window.addEventListener('pointermove', (e) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    }, { passive: true });
  }
  resize();
}
