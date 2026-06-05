"use client";

import { useEffect, useRef, useState } from "react";

const METRICS = [
  {
    target: 98,
    suffix: "%",
    label: "Queries answered",
    note: "↑ Was 42% after hours",
    em: false,
  },
  { target: 11, suffix: "d", label: "Avg payment time", note: "↓ Was 34 days", em: true },
  {
    target: 2.5,
    suffix: "h",
    label: "Time saved daily",
    note: "↑ Per team member",
    em: false,
  },
  { target: 30, suffix: "d", label: "To first results", note: "Guaranteed", em: true },
] as const;

const BARS = [
  { label: "Response efficiency", pct: 94, color: "#00C2FF", end: "#00E5A8" },
  { label: "Cash flow improvement", pct: 78, color: "#00E5A8", end: "#00C2FF" },
] as const;

const ACTIVITY = [
  { dot: "#00E5A8", text: "Invoice reminder sent · Client: Acme Corp", time: "2m ago" },
  { dot: "#00C2FF", text: "Customer query resolved · WhatsApp", time: "4m ago" },
  { dot: "#00E5A8", text: "Appointment confirmed · John D.", time: "7m ago" },
  { dot: "#00C2FF", text: "Daily briefing · 5 actions flagged", time: "1h ago" },
] as const;

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export default function HeroDashboard() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const startedRef = useRef(false);

  const [progress, setProgress] = useState(0);
  const [rowsShown, setRowsShown] = useState<boolean[]>(ACTIVITY.map(() => false));
  const [shimmer, setShimmer] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const kick = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      setShimmer(true);
      const duration = 1600;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        setProgress(easeOut(p));
        if (p < 1) rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
      ACTIVITY.forEach((_, i) =>
        setTimeout(
          () =>
            setRowsShown((prev) => {
              const n = [...prev];
              n[i] = true;
              return n;
            }),
          700 + i * 160,
        ),
      );
    };
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) kick();
      },
      { threshold: 0.35 },
    );
    obs.observe(el);
    if (el.getBoundingClientRect().top < window.innerHeight) kick();
    return () => {
      obs.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const kpiVal = (i: number) => {
    const { target, suffix } = METRICS[i];
    const v = target * progress;
    if (target === 2.5) return `${v.toFixed(1)}${suffix}`;
    return `${Math.round(v)}${suffix}`;
  };

  return (
    <div
      ref={wrapRef}
      className="relative overflow-hidden rounded-[24px] p-[22px]"
      style={{
        background: "#102235",
        border: "1px solid rgba(0,194,255,0.22)",
        boxShadow: "0 0 60px rgba(0,194,255,0.10),0 30px 80px rgba(0,0,0,0.5)",
        animation: "fadeUp 0.8s ease 0.3s both",
      }}
    >
      <div
        className="absolute top-0 right-0 left-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,#00C2FF,transparent)" }}
      />

      {/* Header */}
      <div className="mb-[18px] flex items-center gap-[6px]">
        <span className="block h-2 w-2 rounded-full bg-[#FF6B6B]" />
        <span className="block h-2 w-2 rounded-full bg-[#FFD93D]" />
        <span className="block h-2 w-2 rounded-full bg-[#00E5A8]" />
        <span
          className="ml-2 text-[11px] font-medium tracking-[0.04em]"
          style={
            shimmer
              ? {
                  background:
                    "linear-gradient(90deg,#5A7A94 0%,#00C2FF 40%,#00E5A8 60%,#5A7A94 100%)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "headerShimmer 2.4s ease-in-out forwards",
                }
              : { color: "#5A7A94" }
          }
        >
          Business Intelligence · Live
        </span>
        <span
          className="ml-0.5 inline-block h-[5px] w-[5px] rounded-full"
          style={{
            background: "#00E5A8",
            boxShadow: "0 0 6px #00E5A8",
            animation: "livePulse 1.6s ease-in-out infinite",
          }}
        />
      </div>

      {/* KPI cards */}
      <div className="mb-[14px] grid grid-cols-2 gap-[10px]">
        {METRICS.map(({ label, note, em }, i) => (
          <div
            key={label}
            className="rounded-[12px] p-[13px]"
            style={{
              background: "#152B40",
              border: "1px solid rgba(0,194,255,0.10)",
              animation: `fadeUp 0.5s ease ${0.45 + i * 0.1}s both`,
            }}
          >
            <div
              className="mb-[2px] text-[21px] font-medium tabular-nums"
              style={{
                color: em ? "#00E5A8" : "#00C2FF",
                fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
              }}
            >
              {kpiVal(i)}
            </div>
            <div className="text-[11px]" style={{ color: "#5A7A94" }}>
              {label}
            </div>
            <div className="mt-[2px] text-[10px]" style={{ color: "#00E5A8" }}>
              {note}
            </div>
          </div>
        ))}
      </div>

      {/* Progress bars */}
      {BARS.map(({ label, pct, color, end }) => {
        const w = pct * progress;
        return (
          <div key={label} className="mb-[12px]">
            <div
              className="mb-[5px] flex justify-between text-[11px]"
              style={{ color: "#5A7A94" }}
            >
              <span>{label}</span>
              <span style={{ color }}>{Math.round(w)}%</span>
            </div>
            <div
              className="h-[5px] overflow-hidden rounded-full"
              style={{ background: "#08131F" }}
            >
              <div
                className="h-[5px] rounded-full"
                style={{
                  width: `${w}%`,
                  background: `linear-gradient(90deg,${color},${end})`,
                  boxShadow: w > 5 ? `0 0 8px ${color}66` : "none",
                  transition: "none",
                }}
              />
            </div>
          </div>
        );
      })}

      {/* Activity */}
      <div className="flex flex-col gap-[8px]">
        {ACTIVITY.map(({ dot, text, time }, i) => (
          <div
            key={text}
            className="flex items-center gap-[9px]"
            style={{
              opacity: rowsShown[i] ? 1 : 0,
              transform: rowsShown[i] ? "translateY(0)" : "translateY(7px)",
              transition: "opacity 0.4s ease,transform 0.4s ease",
            }}
          >
            <span
              className="h-[6px] w-[6px] shrink-0 rounded-full"
              style={{
                background: dot,
                boxShadow: `0 0 5px ${dot}`,
                animation: "livePulse 2s ease-in-out infinite",
                animationDelay: `${i * 0.5}s`,
              }}
            />
            <span className="flex-1 text-[11px]" style={{ color: "#A8B8C8" }}>
              {text}
            </span>
            <span className="text-[10px]" style={{ color: "#5A7A94" }}>
              {time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
