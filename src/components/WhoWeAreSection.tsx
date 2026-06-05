"use client";

import { Shield, Zap, Star, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const values = [
  {
    icon: Shield,
    label: "TRUST",
    title: "Trusted Partnerships",
    body: "Your success is our success. We measure it by what you achieve, not what we deliver.",
    color: "#f59e0b",
    ring: "rgba(245,158,11,0.20)",
    bg: "rgba(245,158,11,0.08)",
  },
  {
    icon: Zap,
    label: "SPEED",
    title: "Innovation",
    body: "The world of AI moves fast. We move with it — so you always have access to the best.",
    color: "#a78bfa",
    ring: "rgba(167,139,250,0.20)",
    bg: "rgba(167,139,250,0.08)",
  },
  {
    icon: Star,
    label: "DESIGN",
    title: "Simplicity",
    body: "We take the most complex technology and make it feel completely effortless.",
    color: "#00C2FF",
    ring: "rgba(0,194,255,0.20)",
    bg: "rgba(0,194,255,0.08)",
  },
  {
    icon: Users,
    label: "TEAM",
    title: "Partnership",
    body: "We're not just an AI agency — we're the team that makes your business easy.",
    color: "#00E5A8",
    ring: "rgba(0,229,168,0.20)",
    bg: "rgba(0,229,168,0.08)",
  },
];

/* staircase offsets: card 0 is lowest, card 3 is highest */
const STAIR = [56, 36, 18, 0]; // paddingTop per card (px)

export default function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="">
      <div className="mx-auto max-w-[1000px] px-7 py-20">
        {/* Heading */}
        <ScrollReveal className="mb-16 text-center">
          <span className="section-label">Who We Are</span>
          <h2 className="font-display text-white-soft mt-4 text-[clamp(32px,4vw,52px)] leading-[1.15] font-semibold tracking-[-0.02em]">
            We started with <em className="heading-italic">one belief.</em>
          </h2>
          <p className="text-muted mx-auto mt-5 max-w-[560px] text-[18px] leading-[1.75] font-light">
            AI shouldn&rsquo;t be complicated. It should just make things easy.
          </p>
        </ScrollReveal>

        {/* ── Story / Mission bento ───────────────────────── */}
        <ScrollReveal delay={60} className="mb-16">
          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto 1fr" }}
          >
            {/* ── Our Story — spans both rows (left column) ── */}
            <div
              className="flex flex-col rounded-2xl p-8"
              style={{
                gridRow: "span 2",
                background: "#0d1b2a",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex h-full flex-col">
                <span
                  className="mb-1 block text-[11px] font-semibold tracking-[0.14em] uppercase"
                  style={{ color: "#00C2FF" }}
                >
                  Our Story
                </span>
                <h3 className="text-white-soft mb-6 text-[24px] leading-[1.2] font-bold">
                  How we started
                </h3>

                <div
                  className="flex-1 space-y-5 text-[14.5px] leading-[1.9]"
                  style={{ color: "#a8b8c8" }}
                >
                  <p>
                    Advancegen AI was born from a simple but powerful observation:
                    businesses of every size were struggling — not because they lacked
                    ambition, not because they lacked talent, but because the tools and
                    technology that could transform their operations felt out of reach.
                    Too complex. Too expensive. Too disconnected from the reality of
                    running a real business.
                  </p>
                  <p>
                    We built Advancegen AI to change that. To take the most powerful
                    technology of our generation and make it genuinely accessible — not
                    just to enterprise giants, but to the dental clinic on the high
                    street, the plumbing company growing faster than it can manage, the
                    restaurant owner juggling a hundred things at once.
                  </p>
                  <p>
                    In less than a year, we&rsquo;ve already delivered AI solutions across
                    multiple sectors and multiple countries. But this is just the
                    beginning. We&rsquo;re scaling — and our mission is to awaken more
                    businesses to the opportunities they didn&rsquo;t even know were
                    possible.
                  </p>
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-200"
                  style={{
                    color: "#F3F4F6",
                    border: "1px solid transparent",
                    backgroundImage:
                      "linear-gradient(rgba(8,12,28,0.85), rgba(8,12,28,0.85)), linear-gradient(90deg, #0a2b62, #197bf2, #04e0f0)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundImage =
                      "linear-gradient(rgba(25,123,242,0.12), rgba(25,123,242,0.12)), linear-gradient(90deg, #0a2b62, #197bf2, #04e0f0)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundImage =
                      "linear-gradient(rgba(8,12,28,0.85), rgba(8,12,28,0.85)), linear-gradient(90deg, #0a2b62, #197bf2, #04e0f0)";
                  }}
                >
                  Get Started →
                </a>
              </div>
            </div>

            {/* ── Our Mission — top right ── */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "#0d1b2a",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div>
                <span
                  className="mb-1 block text-[11px] font-semibold tracking-[0.14em] uppercase"
                  style={{ color: "#00E5A8" }}
                >
                  Our Mission
                </span>
                <h3 className="text-white-soft mb-5 text-[24px] leading-[1.2] font-bold">
                  Why we exist
                </h3>
                <p className="text-[14.5px] leading-[1.9]" style={{ color: "#a8b8c8" }}>
                  We&rsquo;ve already made it easy for businesses across multiple sectors
                  and multiple countries. Now we&rsquo;re scaling — awakening more
                  businesses to the opportunities they didn&rsquo;t know were possible. We
                  don&rsquo;t just build AI solutions — we build the foundation your
                  business runs on. Any process. Any stack. Any size.
                </p>
              </div>
            </div>

            {/* ── Picture card — bottom right, fills exact remaining height ── */}
            <div
              className="overflow-hidden rounded-2xl"
              style={{
                background: "#0d1b2a",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/*
                ↓ REPLACE the inner div with your <Image> component when ready:
                  <Image src="/your-photo.jpg" alt="Team" fill className="object-cover" />
              */}
              <div className="flex h-full min-h-[140px] flex-col items-center justify-center gap-2 p-6 text-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <p
                  className="text-[11px] tracking-[0.14em] uppercase"
                  style={{ color: "#3a5268" }}
                >
                  Place your photo here
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Staircase value cards ─────────────────────── */}
        <ScrollReveal delay={80}>
          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-4">
            {values.map(({ icon: Icon, label, title, body, color, ring, bg }, i) => (
              <div key={title} style={{ paddingTop: STAIR[i] }} className="flex flex-col">
                {/* Floating label chip above card */}
                <div
                  className="mb-2 self-start rounded-full px-2.5 py-[3px] text-[9px] font-bold tracking-[0.14em]"
                  style={{ background: bg, color, border: `1px solid ${ring}` }}
                >
                  {label}
                </div>

                {/* Card */}
                <div
                  className="flex flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "#0d1b2a",
                    border: `1px solid ${ring}`,
                    boxShadow: `0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px ${ring}`,
                  }}
                >
                  {/* Icon circle */}
                  <div
                    className="mb-4 flex h-9 w-9 items-center justify-center rounded-full"
                    style={{ background: bg, border: `1.5px solid ${ring}` }}
                  >
                    <Icon size={16} strokeWidth={1.8} style={{ color }} />
                  </div>

                  {/* Text */}
                  <h4
                    className="mb-2 text-[15px] leading-[1.3] font-bold"
                    style={{ color: "#e2e8f0" }}
                  >
                    {title}
                  </h4>
                  <p className="text-[12px] leading-[1.7]" style={{ color: "#7a92a8" }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Quote */}
        <ScrollReveal delay={100} className="mt-8">
          <div className="border-cyan rounded-xl border-l-4 bg-[#152B40] px-8 py-7">
            <p className="font-display text-white-soft text-[clamp(17px,2vw,22px)] leading-[1.6] italic">
              &ldquo;We&rsquo;re not just an AI agency. We&rsquo;re the team that makes
              your business easy — and keeps it that way.&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
