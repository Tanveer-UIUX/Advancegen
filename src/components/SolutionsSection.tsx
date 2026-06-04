"use client";

import {
  Phone,
  MessageSquare,
  Settings2,
  BarChart3,
  Link2,
  Globe,
  Smartphone,
} from "lucide-react";

const solutions = [
  {
    icon: Phone,
    title: "AI Voice Agents",
    subtitle: "Every call handled. Every opportunity captured.",
    description:
      "Your AI voice agent never sleeps, never gets tired, and never misses a call. It answers inbound calls, makes outbound ones, follows up with leads, collects customer feedback, sends appointment reminders, and runs satisfaction surveys — all in a natural, human-sounding conversation. It knows when to resolve and when to escalate, so your team only steps in when it truly matters.",
    benefit: "More calls. More conversions. More feedback. Zero extra headcount.",
  },
  {
    icon: MessageSquare,
    title: "Smart Chatbots",
    subtitle: "Every message answered. Every channel covered.",
    description:
      "Your customers are on WhatsApp, your website, Instagram, and live chat — all at once. Our smart chatbots cover every channel simultaneously, answering questions, qualifying leads, processing bookings, handling complaints, and collecting information — instantly, at any hour.",
    benefit: "Every customer gets an instant response. Every channel runs itself.",
  },
  {
    icon: Settings2,
    title: "Workflow Automation",
    subtitle: "The work that drains your team — done automatically.",
    description:
      "Every business runs on repetitive tasks — sending invoices, chasing payments, following up on leads, processing claims, onboarding clients, scheduling jobs. We automate every single one, building intelligent workflows that trigger, execute, and complete without anyone lifting a finger.",
    benefit:
      "Less admin. Less chasing. More time for work that actually grows your business.",
  },
  {
    icon: BarChart3,
    title: "Intelligent Reporting Dashboard",
    subtitle: "See everything. Know everything. In real time.",
    description:
      "Our live reporting dashboard gives you a complete, real-time view of your entire business — calls answered, leads converted, invoices paid, jobs completed, customer satisfaction scores, and team performance. Everything in one place, updated live, accessible from anywhere.",
    benefit: "Complete visibility. Smarter decisions. Faster growth.",
  },
  {
    icon: Link2,
    title: "CRM & Systems Integration",
    subtitle: "Everything connected. Nothing duplicated.",
    description:
      "We connect everything — plugging our AI layer directly into your existing stack so every system shares data, every action triggers the right response, and nothing ever gets lost or duplicated again.",
    benefit: "One connected ecosystem. Zero manual data entry. Everything in sync.",
  },
  {
    icon: Globe,
    title: "Digital Presence",
    subtitle: "Your brand, built for the world you're operating in now.",
    description:
      "We design and build smart digital presences that don't just look sharp — they work. Integrated with your AI tools, connected to your CRM, and built to convert.",
    benefit:
      "A digital presence that doesn't just represent your business — it grows it.",
  },
  {
    icon: Smartphone,
    title: "AI-Powered Social Media Management",
    subtitle: "Your brand, always on. Always engaging. Always growing.",
    description:
      "From scheduling and publishing across every platform to AI avatars that represent your brand in videos, reels, and stories — without you ever stepping in front of a camera. Trend monitoring keeps your content timely, sentiment analysis tracks how your audience feels.",
    benefit: "A presence that never sleeps. A brand that never stands still.",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="border-t border-white/[0.07] px-7 py-20">
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-12">
          <p className="section-label mb-4">Solutions</p>

          <h2 className="font-display heading-italic text-white-soft mb-5 max-w-[680px] text-[clamp(30px,4vw,46px)] leading-[1.2]">
            We make the hard parts easy — and the returns multiply.
          </h2>

          <p className="text-muted mb-6 max-w-[640px] text-[17px] leading-[1.7]">
            Every business hits a ceiling — where growth stops feeling exciting and starts
            feeling exhausting. More customers means more calls, more invoices, more
            follow-ups, more pressure. We remove that ceiling. Our AI solutions take
            everything that slows you down and make it run automatically, intelligently,
            and effortlessly. So you stop managing the business and start growing it.
          </p>

          <div
            className="text-cyan inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
            style={{
              background: "rgba(0,194,255,0.07)",
              border: "1px solid rgba(0,194,255,0.18)",
            }}
          >
            Don&apos;t take our word for it. See it working first.
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className="group rounded-[18px] p-6 transition-all duration-300"
                style={{
                  background: "#102235",
                  border: "1px solid rgba(0,194,255,0.12)",
                  transform: "translateY(0)",
                  transition: "border-color 0.25s ease, transform 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(0,194,255,0.28)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(0,194,255,0.12)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-[12px]"
                  style={{
                    background: "rgba(0,194,255,0.08)",
                    border: "1px solid rgba(0,194,255,0.18)",
                  }}
                >
                  <Icon size={22} className="text-cyan" />
                </div>

                <h3 className="text-white-soft mb-1 text-[17px] font-semibold">
                  {solution.title}
                </h3>

                <p className="text-muted mb-3 text-[13px] leading-[1.5] italic">
                  {solution.subtitle}
                </p>

                <p className="text-muted mb-4 text-[14px] leading-[1.7]">
                  {solution.description}
                </p>

                <div className="flex items-start gap-2">
                  <span className="text-cyan mt-[2px] flex-shrink-0 text-[13px]">✦</span>
                  <span
                    className="text-[13px] leading-[1.5] font-medium"
                    style={{ color: "#00C2FF" }}
                  >
                    {solution.benefit}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
