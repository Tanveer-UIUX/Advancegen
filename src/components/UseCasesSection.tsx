"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const USE_CASES = [
  {
    title: "Missed Calls & Lost Leads",
    tag: "Lead Capture",
    problem:
      "Every unanswered call is a customer who called your competitor next. A busy dental clinic, a plumbing company during peak hours, a restaurant on a Friday evening — the phone rings and nobody picks up. That lead is gone. That revenue is gone. And you never even knew it happened.",
    solution:
      "Advancegen AI deploys a voice agent that answers every single call — instantly, intelligently, and in a natural human-sounding voice. It qualifies the caller, captures their details, books appointments, and routes urgent calls to the right person. Nothing falls through the cracks.",
    result:
      "Zero missed calls. Every lead captured. Every opportunity acted on — automatically.",
  },
  {
    title: "Unpaid Invoices & Payment Chasing",
    tag: "Cash Flow",
    problem:
      "Chasing payments is one of the most time-consuming and uncomfortable tasks in any business. Invoices go unpaid, follow-up emails get ignored, and your team wastes hours every week on something that should happen automatically.",
    solution:
      "Advancegen AI builds an automated invoicing and payment workflow that sends invoices the moment a job is complete, follows up at the right intervals, escalates politely when payments are overdue, and updates your records automatically when payment is received.",
    result:
      "Faster payments. Less chasing. Healthier cash flow — without lifting a finger.",
  },
  {
    title: "Overwhelmed Staff & Repetitive Admin",
    tag: "Productivity",
    problem:
      "Your team didn't sign up to spend their days copying data between systems, sending the same emails over and over, and doing tasks a machine could handle in seconds. It's costing you their focus, their energy, and their best work.",
    solution:
      "Advancegen AI maps your most repetitive workflows and automates them end-to-end. Data entry, scheduling, onboarding, reporting, follow-ups — all triggered automatically, executed instantly, completed without human intervention. Your team gets their time back.",
    result:
      "Hours saved every week. Staff focused on high-value work. Operations running smoother than ever.",
  },
  {
    title: "Customers Not Getting Instant Responses",
    tag: "Customer Experience",
    problem:
      "Today's customers expect an answer in seconds — not hours. When they message your business on WhatsApp, fill in a contact form, or start a live chat at 11pm, they want a response now. If they don't get one, they move on. It's that simple.",
    solution:
      "Advancegen AI deploys smart chatbots across every channel your customers use — WhatsApp, your website, Instagram, live chat. Every message gets an instant, intelligent response — answering questions, processing bookings, collecting information — around the clock.",
    result:
      "Every customer answered instantly. No wait times. No lost conversations. No competitor wins.",
  },
  {
    title: "No Visibility Into Business Performance",
    tag: "Intelligence",
    problem:
      "Most business owners are flying blind. They don't know how many leads came in this week, how many calls were missed, or whether last month's campaign worked. Decisions get made on gut feel — and that's expensive.",
    solution:
      "Advancegen AI builds a live reporting dashboard that pulls data from every part of your business — calls, chats, invoices, bookings, team performance, customer satisfaction — and presents it in real time, in one place.",
    result:
      "Complete business visibility. Data-driven decisions. No more guessing — just clarity.",
  },
  {
    title: "Inconsistent Social Media Presence",
    tag: "Brand Growth",
    problem:
      "You know you need to be consistent on social media. But between running the business, managing the team, and serving customers, it's always the last thing on the list. Weeks go by without a post. Your brand goes quiet. Your competitors don't.",
    solution:
      "Advancegen AI manages your social media presence end-to-end — scheduling, publishing, trend monitoring. AI avatars represent your brand in video content, reels, and stories — without you ever stepping in front of a camera.",
    result:
      "A brand that never goes quiet. Content that never runs dry. An audience that keeps growing.",
  },
  {
    title: "Disconnected Tools & Systems",
    tag: "Integration",
    problem:
      "Your CRM doesn't talk to your booking system. Your accounting software doesn't connect to your communication tools. Every time something happens in one system, someone has to manually update three others.",
    solution:
      "Advancegen AI integrates your entire technology stack — connecting every tool you already use so they share data automatically. A new booking updates the CRM. A completed job triggers the invoice. A payment received updates the accounts.",
    result:
      "One connected business. Zero duplication. Everything in sync — automatically.",
  },
];

const TAG_COLORS: Record<string, string> = {
  "Lead Capture": "#00C2FF",
  "Cash Flow": "#00E5A8",
  Productivity: "#a78bfa",
  "Customer Experience": "#f59e0b",
  Intelligence: "#00C2FF",
  "Brand Growth": "#00E5A8",
  Integration: "#a78bfa",
};

export default function UseCasesSection() {
  const [active, setActive] = useState(0);
  const uc = USE_CASES[active];
  const tagColor = TAG_COLORS[uc.tag] ?? "#00C2FF";

  return (
    <section id="use-cases" className="">
      <div className="mx-auto max-w-[1000px] px-7 py-20">
        {/* intro */}
        <ScrollReveal className="mb-12 text-center">
          <span className="section-label">Use Cases</span>
          <h2 className="font-display text-white-soft mx-auto max-w-[560px] text-[clamp(28px,3.6vw,44px)] leading-[1.15] font-semibold tracking-[-0.02em]">
            Most businesses don&apos;t have a problem.{" "}
            <em className="heading-italic">They have an undiagnosed one.</em>
          </h2>
          <p className="text-muted mx-auto mt-4 max-w-[500px] text-[15px] leading-[1.75]">
            The missed calls, the unpaid invoices, the overwhelmed team — these
            aren&apos;t just operational headaches. They&apos;re symptoms of processes
            that were never properly examined.
          </p>
        </ScrollReveal>

        {/* main panel */}
        <ScrollReveal delay={120}>
          <div
            className="flex flex-col overflow-hidden rounded-[20px] lg:flex-row"
            style={{ border: "1px solid rgba(0,194,255,0.12)" }}
          >
            {/* left: item list */}
            <div
              className="flex shrink-0 flex-col lg:w-[272px]"
              style={{
                background: "#0d1e2e",
                borderRight: "1px solid rgba(0,194,255,0.08)",
              }}
            >
              {USE_CASES.map((item, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="flex flex-col items-start gap-1.5 px-5 py-4 text-left transition-colors duration-150"
                    style={{
                      background: isActive ? "rgba(0,194,255,0.07)" : "transparent",
                      borderLeft: isActive
                        ? "2px solid #00C2FF"
                        : "2px solid transparent",
                      borderBottom: "1px solid rgba(0,194,255,0.06)",
                    }}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span
                        className="text-[10px] font-bold tabular-nums"
                        style={{ color: isActive ? "#00C2FF" : "#5A7A94" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="rounded-full px-2 py-0.5 text-[9px] font-semibold tracking-wide uppercase"
                        style={{
                          color: TAG_COLORS[item.tag] ?? "#00C2FF",
                          background: `${TAG_COLORS[item.tag] ?? "#00C2FF"}18`,
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <span
                      className="text-[13px] leading-snug font-medium"
                      style={{ color: isActive ? "#F3F4F6" : "#A8B8C8" }}
                    >
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* right: detail */}
            <div
              className="flex flex-1 flex-col p-7 lg:p-8"
              style={{ background: "#102235" }}
            >
              {/* tag + title */}
              <div className="mb-6">
                <span
                  className="mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-semibold tracking-widest uppercase"
                  style={{ color: tagColor, background: `${tagColor}18` }}
                >
                  {uc.tag}
                </span>
                <h3
                  className="font-display text-[clamp(20px,2.4vw,28px)] leading-snug font-semibold"
                  style={{ color: "#F3F4F6" }}
                >
                  {uc.title}
                </h3>
              </div>

              {/* problem */}
              <div className="mb-5">
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "#FF6B6B" }}
                  />
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase"
                    style={{ color: "#FF6B6B" }}
                  >
                    The Problem
                  </span>
                </div>
                <p
                  className="pl-3.5 text-[14px] leading-[1.75]"
                  style={{
                    color: "#A8B8C8",
                    borderLeft: "2px solid rgba(255,107,107,0.25)",
                  }}
                >
                  {uc.problem}
                </p>
              </div>

              {/* solution */}
              <div className="mb-6">
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "#00E5A8" }}
                  />
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase"
                    style={{ color: "#00E5A8" }}
                  >
                    Our Solution
                  </span>
                </div>
                <p
                  className="pl-3.5 text-[14px] leading-[1.75]"
                  style={{
                    color: "#A8B8C8",
                    borderLeft: "2px solid rgba(0,229,168,0.25)",
                  }}
                >
                  {uc.solution}
                </p>
              </div>

              {/* result */}
              <div
                className="mt-auto flex items-start gap-3 rounded-[12px] px-5 py-4"
                style={{
                  background: "rgba(0,229,168,0.06)",
                  border: "1px solid rgba(0,229,168,0.15)",
                }}
              >
                <span
                  className="mt-0.5 text-[16px] leading-none"
                  style={{ color: "#00E5A8" }}
                >
                  ✦
                </span>
                <p
                  className="text-[13px] leading-relaxed font-medium"
                  style={{ color: "#00E5A8" }}
                >
                  {uc.result}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* bottom CTA */}
        <div
          className="mt-5 flex flex-col items-start justify-between gap-4 rounded-[14px] px-6 py-5 sm:flex-row sm:items-center"
          style={{ background: "#102235", border: "1px solid rgba(0,194,255,0.10)" }}
        >
          <div>
            <p className="text-white-soft text-[14px] font-semibold">
              Your situation is unique. So is our solution.
            </p>
            <p className="text-muted mt-0.5 text-[13px]">
              Don&apos;t see your specific challenge? We&apos;ll figure it out together.
            </p>
          </div>
          <a
            href="#contact"
            className="flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all hover:-translate-y-0.5"
            style={{ background: "#00C2FF", color: "#08131F" }}
          >
            Get in Touch <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
