"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    label: "STEP 1",
    title: "Discovery & Audit",
    description:
      "We conduct in-depth discovery sessions, audit your current processes, and map every workflow to identify friction points and missed opportunities.",
  },
  {
    label: "STEP 2",
    title: "Strategy & Proposal",
    description:
      "We design a tailored AI roadmap, select the right solutions, and present a clear proposal with timelines and outcomes — built specifically for your business.",
  },
  {
    label: "STEP 3",
    title: "Build & Integrate",
    description:
      "We build, configure, and test every automation, integration, and AI agent — all connected seamlessly to your existing stack with minimal disruption.",
  },
  {
    label: "STEP 4",
    title: "Launch",
    description:
      "We manage the live deployment, monitor all systems in real time, and confirm everything performs to spec so you go live with confidence.",
  },
  {
    label: "STEP 5",
    title: "Support & Optimise",
    description:
      "We monitor performance, analyse your data, and continuously improve your AI setup as your business grows. We don't disappear after launch.",
  },
];

export default function HowItWorksSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal className="mb-14 text-center">
          <span className="section-label">How It Works</span>
          <h2 className="font-display text-white-soft mt-3 text-[clamp(28px,3.6vw,46px)] leading-[1.15] font-semibold tracking-[-0.02em]">
            Five steps. <em className="heading-italic">Complete clarity.</em>
          </h2>
          <p className="text-muted mx-auto mt-4 max-w-[520px] text-[17px] leading-[1.75] font-light">
            You&apos;re with us every step of the way — from the first conversation to
            ongoing optimisation.
          </p>
        </ScrollReveal>

        {/* Desktop */}
        <div
          className="hidden overflow-hidden rounded-2xl lg:flex"
          style={{ background: "#0D1F33", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {steps.map((step, i) => {
            const isOpen = hoveredIndex === i;
            const isLast = i === steps.length - 1;
            return (
              <div
                key={step.label}
                style={{
                  flex: 1,
                  display: "grid",
                  gridTemplateRows: "auto 1fr auto",
                  height: "380px",
                  overflow: "hidden",
                  borderRight: isLast ? "none" : "1px solid rgba(255,255,255,0.07)",
                  background: isOpen ? "rgba(0,194,255,0.04)" : "transparent",
                  transition: "background 0.3s ease",
                }}
              >
                <div style={{ padding: "32px 28px 0" }}>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      color: "rgba(148,163,184,0.45)",
                    }}
                  >
                    {step.label}
                  </span>
                </div>
                <div />
                <div style={{ padding: "0 28px 133px" }}>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      lineHeight: 1.35,
                      marginBottom: "18px",
                      color: isOpen ? "#ffffff" : "rgba(226,232,240,0.85)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {step.title}
                  </h3>
                  <div
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "999px",
                        padding: "11px",
                        background: isOpen
                          ? "rgba(0,194,255,0.14)"
                          : "rgba(255,255,255,0.06)",
                        border: `1px solid ${isOpen ? "rgba(0,194,255,0.28)" : "rgba(255,255,255,0.08)"}`,
                        transition: "background 0.35s ease,border-color 0.35s ease",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          width: 24,
                          height: 24,
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          fontSize: 18,
                          fontWeight: 300,
                          lineHeight: 1,
                          background: isOpen ? "#00C2FF" : "rgba(255,255,255,0.11)",
                          color: isOpen ? "#000d14" : "rgba(255,255,255,0.65)",
                          boxShadow: isOpen ? "0 0 12px rgba(0,194,255,0.45)" : "none",
                          transition: "all 0.35s ease",
                        }}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>
                    <div
                      style={{
                        maxHeight: isOpen ? "160px" : "0px",
                        overflow: "hidden",
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? "translateY(0)" : "translateY(6px)",
                        transition:
                          "max-height 0.45s cubic-bezier(0.4,0,0.2,1),opacity 0.3s ease 0.08s,transform 0.3s ease 0.08s",
                      }}
                    >
                      <p
                        style={{
                          paddingTop: "18px",
                          fontSize: "13.5px",
                          lineHeight: 1.8,
                          color: "rgba(148,163,184,0.9)",
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile */}
        <div
          className="flex flex-col overflow-hidden rounded-2xl lg:hidden"
          style={{ background: "#0D1F33", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {steps.map((step, i) => {
            const isOpen = hoveredIndex === i;
            const isLast = i === steps.length - 1;
            return (
              <div
                key={step.label}
                style={{
                  borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.07)",
                  background: isOpen ? "rgba(0,194,255,0.04)" : "transparent",
                  transition: "background 0.3s ease",
                }}
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  onClick={() => setHoveredIndex(isOpen ? null : i)}
                >
                  <div>
                    <span
                      className="mb-1 block text-[10px] font-semibold tracking-[3px] uppercase"
                      style={{ color: "rgba(148,163,184,0.45)" }}
                    >
                      {step.label}
                    </span>
                    <span
                      className="text-[15px] font-bold"
                      style={{ color: isOpen ? "#fff" : "rgba(226,232,240,0.85)" }}
                    >
                      {step.title}
                    </span>
                  </div>
                  <span
                    style={{
                      flexShrink: 0,
                      marginLeft: 16,
                      display: "flex",
                      width: 28,
                      height: 28,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      fontSize: 18,
                      fontWeight: 300,
                      background: isOpen ? "#00C2FF" : "rgba(255,255,255,0.10)",
                      color: isOpen ? "#000d14" : "rgba(255,255,255,0.65)",
                      boxShadow: isOpen ? "0 0 10px rgba(0,194,255,0.35)" : "none",
                      transition: "all 0.35s ease",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? "160px" : "0px",
                    overflow: "hidden",
                    opacity: isOpen ? 1 : 0,
                    transition:
                      "max-height 0.45s cubic-bezier(0.4,0,0.2,1),opacity 0.3s ease 0.08s",
                  }}
                >
                  <p
                    className="px-6 pb-6 text-[13.5px] leading-[1.8]"
                    style={{ color: "rgba(148,163,184,0.9)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <ScrollReveal delay={100}>
          <div
            className="mt-10 rounded-[18px] p-8 text-center"
            style={{ background: "#102235", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p
              className="mx-auto max-w-[620px] text-[17px] leading-[1.7] font-light"
              style={{ color: "rgba(226,232,240,0.8)" }}
            >
              &ldquo;You&apos;re not just a client. You&apos;re a partner. At every step,
              you&apos;re informed, involved, and in control.&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
