"use client";

import { useEffect, useRef } from "react";

/* ── types ─────────────────────────────────────────── */
interface Star {
  x: number;
  y: number;
  r: number;
  phase: number;
  speed: number;
  color: string;
  drift: number;
  driftFreq: number;
}

interface Nebula {
  x: number;
  y: number;
  rx: number;
  ry: number;
  color: string;
  opacity: number;
}

interface Shooter {
  x: number;
  y: number;
  vx: number;
  vy: number;
  len: number;
  opacity: number;
  active: boolean;
}

/* ── constants ──────────────────────────────────────── */
const STAR_COLORS = [
  "255,255,255",
  "180,220,255",
  "0,194,255",
  "18,230,255",
  "0,229,168",
];
const COLS = 58;
const ROWS = 22;

/* ── builders ───────────────────────────────────────── */
function mkStars(w: number, h: number): Star[] {
  return Array.from({ length: 180 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h * 0.72,
    r: Math.random() * 1.5 + 0.3,
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.007 + 0.002,
    color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    drift: (Math.random() - 0.5) * 0.05,
    driftFreq: Math.random() * 0.003 + 0.001,
  }));
}

function mkNebulae(w: number, h: number): Nebula[] {
  return [
    { x: w * 0.75, y: h * 0.32, rx: 340, ry: 260, color: "0,194,255", opacity: 0.08 },
    { x: w * 0.15, y: h * 0.18, rx: 270, ry: 200, color: "0,229,168", opacity: 0.055 },
    { x: w * 0.5, y: h * 0.55, rx: 360, ry: 180, color: "0,100,255", opacity: 0.065 },
    { x: w * 0.88, y: h * 0.6, rx: 200, ry: 170, color: "18,230,255", opacity: 0.042 },
  ];
}

function mkShooters(): Shooter[] {
  return Array.from({ length: 5 }, () => ({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    len: 0,
    opacity: 0,
    active: false,
  }));
}

/* ── component ──────────────────────────────────────── */
export default function GalaxyCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;
    let nextShot = 80 + Math.random() * 120;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    let stars = mkStars(canvas.width, canvas.height);
    let nebulae = mkNebulae(canvas.width, canvas.height);
    const shooters = mkShooters();

    /* ── nebula ────────────────────────────────────── */
    const drawNebulae = (w: number, h: number) => {
      nebulae.forEach((n) => {
        ctx.save();
        ctx.scale(1, n.ry / n.rx);
        const g = ctx.createRadialGradient(
          n.x,
          n.y * (n.rx / n.ry),
          0,
          n.x,
          n.y * (n.rx / n.ry),
          n.rx,
        );
        g.addColorStop(0, `rgba(${n.color},${n.opacity})`);
        g.addColorStop(0.5, `rgba(${n.color},${n.opacity * 0.35})`);
        g.addColorStop(1, `rgba(${n.color},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(n.x, n.y * (n.rx / n.ry), n.rx, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      void h; // suppress unused
    };

    /* ── stars ─────────────────────────────────────── */
    const drawStars = () => {
      stars.forEach((s) => {
        s.x += s.drift * Math.sin(t * s.driftFreq);
        const op = 0.3 + 0.7 * Math.abs(Math.sin(t * s.speed + s.phase));

        if (s.r > 1.1) {
          const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 5);
          g.addColorStop(0, `rgba(${s.color},${op * 0.55})`);
          g.addColorStop(1, `rgba(${s.color},0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(${s.color},${op})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    /* ── shooting stars ─────────────────────────────── */
    const spawnShooter = () => {
      const s = shooters.find((sh) => !sh.active);
      if (!s) return;
      const angle = (-(20 + Math.random() * 15) * Math.PI) / 180;
      s.x = Math.random() * canvas.width * 0.55;
      s.y = Math.random() * canvas.height * 0.35;
      s.vx = Math.cos(angle) * (7 + Math.random() * 6);
      s.vy = Math.sin(angle) * (7 + Math.random() * 6);
      s.len = 110 + Math.random() * 80;
      s.opacity = 1;
      s.active = true;
    };

    const drawShooters = () => {
      shooters.forEach((s) => {
        if (!s.active) return;
        s.x += s.vx;
        s.y += s.vy;
        s.opacity -= 0.016;
        if (s.opacity <= 0 || s.x > canvas.width || s.y > canvas.height) {
          s.active = false;
          return;
        }
        const tx = s.x - (s.vx / Math.hypot(s.vx, s.vy)) * s.len;
        const ty = s.y - (s.vy / Math.hypot(s.vx, s.vy)) * s.len;
        const g = ctx.createLinearGradient(tx, ty, s.x, s.y);
        g.addColorStop(0, `rgba(0,229,168,0)`);
        g.addColorStop(0.6, `rgba(0,194,255,${s.opacity * 0.5})`);
        g.addColorStop(1, `rgba(255,255,255,${s.opacity})`);
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();
      });
    };

    /* ── 3-D perspective particle wave ─────────────── */
    const drawWave = (w: number, h: number) => {
      const waveH = h * 0.44; // vertical space the wave occupies
      const baseY = h + 10; // bottom anchor
      const marginX = w * 0.05;

      for (let row = 0; row < ROWS; row++) {
        const depth = row / (ROWS - 1); // 0 = closest, 1 = farthest
        const invD = 1 - depth;
        const scaleX = 0.28 + invD * 0.72; // wider at front
        const scaleY = invD;

        const rowY = baseY - depth * waveH;

        for (let col = 0; col < COLS; col++) {
          const cx = col / (COLS - 1);

          // wave height: layered sines for organic feel
          const wh =
            Math.sin(cx * 6.8 + depth * 3.2 - t * 0.038) * 0.55 +
            Math.sin(cx * 12.0 - depth * 2.1 + t * 0.028) * 0.25 +
            Math.cos(cx * 4.2 + depth * 5.0 - t * 0.022) * 0.2;

          // screen position
          const sx = marginX + (w - marginX * 2) * (0.5 + (cx - 0.5) * scaleX);
          const sy = rowY - wh * waveH * 0.28 * scaleY;

          // size + opacity
          const dotR = 0.35 + invD * 1.65;
          const bright = 0.3 + 0.7 * Math.max(0, wh);
          const op = (0.18 + invD * 0.55) * (0.5 + bright * 0.5);

          // color: cyan → blue based on depth
          const r = Math.round(0 + depth * 0);
          const g = Math.round(130 + bright * 100);
          const b = Math.round(200 + bright * 55);

          // glow at crests
          if (wh > 0.55 && invD > 0.35) {
            const gw = ctx.createRadialGradient(sx, sy, 0, sx, sy, dotR * 5);
            gw.addColorStop(0, `rgba(${r},${g},${b},${op * 0.7})`);
            gw.addColorStop(1, `rgba(${r},${g},${b},0)`);
            ctx.fillStyle = gw;
            ctx.beginPath();
            ctx.arc(sx, sy, dotR * 5, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.fillStyle = `rgba(${r},${g},${b},${op})`;
          ctx.beginPath();
          ctx.arc(sx, sy, dotR, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    /* ── main loop ──────────────────────────────────── */
    const draw = () => {
      const { width: w, height: h } = canvas;
      ctx.clearRect(0, 0, w, h);

      drawNebulae(w, h);
      drawStars();
      drawShooters();
      drawWave(w, h);

      t++;
      if (t >= nextShot) {
        spawnShooter();
        nextShot = t + 90 + Math.random() * 150;
      }

      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      resize();
      stars = mkStars(canvas.width, canvas.height);
      nebulae = mkNebulae(canvas.width, canvas.height);
    };

    window.addEventListener("resize", onResize);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
    />
  );
}
