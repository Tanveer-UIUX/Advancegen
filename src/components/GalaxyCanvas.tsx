"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: "cyan" | "em";
}
interface Pulse {
  ax: number;
  ay: number;
  bx: number;
  by: number;
  t: number;
  speed: number;
  color: "cyan" | "em";
}

const CYAN = "rgba(0,194,255,";
const EM = "rgba(0,229,168,";

export default function GalaxyCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let pulseTimer = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const initNodes = () => {
      const W = canvas.width,
        H = canvas.height;
      let count = Math.floor((W * H) / 18000);
      count = Math.max(20, Math.min(50, count));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1.5,
        color: Math.random() > 0.5 ? "cyan" : "em",
      })) as Node[];
    };

    const spawnPulse = () => {
      if (nodes.length < 2) return;
      const a = nodes[Math.floor(Math.random() * nodes.length)];
      const b = nodes[Math.floor(Math.random() * nodes.length)];
      if (a === b) return;
      const dx = b.x - a.x,
        dy = b.y - a.y;
      if (Math.sqrt(dx * dx + dy * dy) > 180) return;
      pulses.push({
        ax: a.x,
        ay: a.y,
        bx: b.x,
        by: b.y,
        t: 0,
        speed: 0.012 + Math.random() * 0.008,
        color: Math.random() > 0.5 ? "cyan" : "em",
      });
    };

    const draw = () => {
      const W = canvas.width,
        H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x,
            dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.18;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = CYAN + alpha + ")";
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        const c = n.color === "cyan" ? CYAN : EM;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = c + "0.05)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = c + "0.8)";
        ctx.fill();
      });
      pulses = pulses.filter((p) => {
        p.t += p.speed;
        if (p.t > 1) return false;
        const x = p.ax + (p.bx - p.ax) * p.t,
          y = p.ay + (p.by - p.ay) * p.t;
        const c = p.color === "cyan" ? CYAN : EM;
        const alpha = p.t < 0.5 ? p.t * 2 : 2 - p.t * 2;
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = c + alpha + ")";
        ctx.fill();
        return true;
      });
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });
      pulseTimer++;
      if (pulseTimer % 80 === 0) spawnPulse();
      if (pulseTimer % 120 === 0) spawnPulse();
      animId = requestAnimationFrame(draw);
    };

    resize();
    initNodes();
    draw();
    const onResize = () => {
      cancelAnimationFrame(animId);
      resize();
      initNodes();
      draw();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
