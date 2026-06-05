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
import ScrollReveal from "./ScrollReveal";

/* ── Card shell ─────────────────────────────────────── */
function Card({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[16px] p-6 transition-all duration-300 hover:-translate-y-[2px] ${className}`}
      style={{
        background: "#0d1b2a",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.3)",
        ...style,
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,194,255,0.22)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)")
      }
    >
      {/* top-edge glow on hover */}
      <div
        className="pointer-events-none absolute top-0 right-0 left-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(0,194,255,0.5),transparent)",
        }}
      />
      {children}
    </div>
  );
}

/* ── Icon chip – spins & glows on card hover ─────────── */
function IconChip({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div
      className="mb-4 flex h-9 w-9 items-center justify-center rounded-[8px] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_14px_rgba(0,194,255,0.35)]"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Icon
        size={16}
        strokeWidth={1.8}
        className="text-cyan transition-transform duration-500 group-hover:[animation:iconSpin_0.6s_ease-in-out_forwards]"
      />
    </div>
  );
}
function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-white-soft mb-2 text-[17px] leading-[1.3] font-bold">
      {children}
    </h3>
  );
}
function CardDesc({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] leading-[1.7]" style={{ color: "#7a92a8" }}>
      {children}
    </p>
  );
}

/* ══════════════════════════════════════════════════════
   VISUALS
══════════════════════════════════════════════════════ */

/* 1 · Voice – oscillating waveform bars */
function VoiceVisual() {
  const bars = [4, 8, 14, 20, 28, 20, 14, 8, 4, 8, 14, 20, 14, 8, 4];
  const durations = [
    900, 700, 600, 500, 400, 500, 600, 700, 900, 700, 600, 500, 600, 700, 900,
  ];
  return (
    <div className="mt-4 flex flex-col gap-3">
      <div className="flex items-center gap-[3px]" style={{ height: 36 }}>
        {bars.map((h, i) => (
          <div
            key={i}
            style={{
              width: 3,
              height: h,
              borderRadius: 3,
              background: i < 8 ? "#00C2FF" : "#00E5A8",
              transformOrigin: "center",
              animation: `waveOsc ${durations[i]}ms ease-in-out ${i * 50}ms infinite`,
            }}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span
          className="h-[6px] w-[6px] rounded-full bg-[#00E5A8]"
          style={{
            boxShadow: "0 0 6px #00E5A8",
            animation: "livePulse 1.6s ease-in-out infinite",
          }}
        />
        <span className="text-[11px]" style={{ color: "#7a92a8" }}>
          Live call · answered in 1.2 s
        </span>
      </div>
    </div>
  );
}

/* 2 · Chatbot – platforms route to AI Bot with animated flow dot */
function ChatbotVisual() {
  const platforms = ["WhatsApp", "Website", "Instagram", "Live Chat"];
  return (
    <div className="mt-4 flex flex-col gap-2">
      {platforms.map((p, i) => (
        <div key={p} className="flex items-center gap-2">
          {/* Platform badge */}
          <div
            className="flex h-6 w-[82px] items-center justify-center rounded-[5px] text-[10px] font-medium"
            style={{
              background: "rgba(255,255,255,0.06)",
              color: "#a8b8c8",
              border: "1px solid rgba(255,255,255,0.08)",
              animation: `nodePop 0.45s cubic-bezier(0.34,1.56,0.64,1) ${i * 80}ms both`,
            }}
          >
            {p}
          </div>

          {/* Flow arrow with travelling dot */}
          <div className="relative" style={{ width: 24, height: 2 }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                background: "rgba(0,194,255,0.3)",
                animation: `lineGrow 0.4s ease ${i * 80 + 300}ms both`,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: -2,
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#00C2FF",
                boxShadow: "0 0 5px #00C2FF",
                animation: `flowDot 1.8s linear ${i * 260}ms infinite`,
              }}
            />
          </div>

          {/* AI Bot badge (only row index 1) */}
          {i === 1 && (
            <div
              className="flex h-6 items-center justify-center rounded-[5px] px-2 text-[10px] font-bold"
              style={{
                background: "rgba(0,229,168,0.15)",
                color: "#00E5A8",
                border: "1px solid rgba(0,229,168,0.3)",
                animation: `nodePop 0.5s cubic-bezier(0.34,1.56,0.64,1) 600ms both, livePulse 2.5s ease-in-out 1.2s infinite`,
              }}
            >
              AI Bot ✓
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* 3 · Workflow – pulsing status pill */
function WorkflowVisual() {
  return (
    <div className="mt-5">
      <div
        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
        style={{
          background: "rgba(0,194,255,0.08)",
          border: "1px solid rgba(0,194,255,0.2)",
        }}
      >
        <span
          className="h-[6px] w-[6px] rounded-full bg-[#00C2FF]"
          style={{ animation: "livePulse 1.6s ease-in-out infinite" }}
        />
        <span className="text-[11px]" style={{ color: "#00C2FF" }}>
          Automating invoices…
        </span>
      </div>
    </div>
  );
}

/* 4 · Reporting – bars grow from bottom */
function ReportingVisual() {
  const bars = [
    { h: 32, c: "#00C2FF" },
    { h: 48, c: "#00C2FF" },
    { h: 24, c: "#00C2FF" },
    { h: 56, c: "#00E5A8" },
    { h: 40, c: "#00C2FF" },
    { h: 64, c: "#00E5A8" },
    { h: 50, c: "#00E5A8" },
  ];
  return (
    <div className="mt-4">
      <div className="flex items-end gap-[5px]" style={{ height: 64 }}>
        {bars.map((b, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: b.h,
              borderRadius: "4px 4px 0 0",
              background: b.c,
              opacity: 0.6 + (b.h / 64) * 0.4,
              transformOrigin: "bottom",
              animation: `barRise 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i * 90}ms both`,
            }}
          />
        ))}
      </div>
      <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginTop: 2 }} />
    </div>
  );
}

/* 5 · CRM – badges pop in sequentially */
function CRMVisual() {
  const nodes = ["CRM", "Email", "Calendar", "Billing"];
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {nodes.map((n, i) => (
        <div
          key={n}
          className="flex items-center gap-1.5 rounded-[6px] px-2.5 py-1 text-[11px] font-medium"
          style={{
            background: i === 0 ? "rgba(0,194,255,0.12)" : "rgba(255,255,255,0.05)",
            border: `1px solid ${i === 0 ? "rgba(0,194,255,0.3)" : "rgba(255,255,255,0.08)"}`,
            color: i === 0 ? "#00C2FF" : "#7a92a8",
            animation: `nodePop 0.5s cubic-bezier(0.34,1.56,0.64,1) ${i * 100}ms both`,
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: i === 0 ? "#00C2FF" : "#3a5268",
              display: "inline-block",
            }}
          />
          {n}
        </div>
      ))}
      <div
        className="mt-1 w-full text-[10px]"
        style={{ color: "#3a5268", animation: "contentFade 0.5s ease 450ms both" }}
      >
        ↔ syncing in real time
      </div>
    </div>
  );
}

/* 6 · Digital – browser mockup with animated content */
function DigitalVisual() {
  return (
    <div
      className="mt-4 overflow-hidden rounded-[8px]"
      style={{ border: "1px solid rgba(255,255,255,0.08)", background: "#0a1520" }}
    >
      <div
        className="flex items-center gap-1.5 px-3 py-2"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        {["#FF6B6B", "#FFD93D", "#00E5A8"].map((c, i) => (
          <span
            key={c}
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: c,
              animation: `nodePop 0.4s ease ${i * 80}ms both`,
            }}
          />
        ))}
        <span
          className="ml-2 rounded px-2 py-0.5 text-[9px]"
          style={{
            background: "rgba(255,255,255,0.04)",
            color: "#3a5268",
            animation: "contentFade 0.5s ease 300ms both",
          }}
        >
          advancegen.ai
        </span>
      </div>
      <div className="space-y-1.5 px-3 py-2.5">
        {[
          { w: "60%", c: "rgba(0,194,255,0.3)" },
          { w: "80%", c: "rgba(255,255,255,0.06)" },
          { w: "50%", c: "rgba(255,255,255,0.06)" },
        ].map((row, i) => (
          <div
            key={i}
            style={{
              height: i === 0 ? 6 : 4,
              width: row.w,
              borderRadius: 3,
              background: row.c,
              animation: `slideInR 0.5s ease ${i * 100 + 350}ms both`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* 7 · Social – post rows slide in */
function SocialVisual() {
  const posts = [
    { label: "LinkedIn post", color: "#00C2FF" },
    { label: "Instagram reel", color: "#00E5A8" },
    { label: "X thread", color: "#7a92a8" },
  ];
  return (
    <div className="mt-4 flex flex-col gap-2">
      {posts.map(({ label, color }, i) => (
        <div
          key={label}
          className="flex items-center gap-2 rounded-[6px] px-3 py-2 text-[11px]"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
            animation: `slideInR 0.45s ease ${i * 110}ms both`,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: color,
              flexShrink: 0,
              animation: `livePulse 2s ease-in-out ${i * 400}ms infinite`,
            }}
          />
          <span style={{ color: "#a8b8c8" }}>{label}</span>
          <span className="ml-auto text-[9px]" style={{ color: "#3a5268" }}>
            Scheduled ✓
          </span>
        </div>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   SECTION
══════════════════════════════════════════════════════ */
export default function SolutionsSection() {
  return (
    <section id="solutions" className="px-7 py-20">
      <div className="mx-auto max-w-[1200px]">
        {/* header */}
        <ScrollReveal className="mb-12 text-center">
          <p className="section-label mb-4">Solutions</p>
          <h2 className="font-display heading text-white-soft mx-auto mb-5 max-w-[680px] text-[clamp(30px,4vw,46px)]">
            We make the hard parts easy — and{" "}
            <em className="heading-italic">the returns multiply.</em>
          </h2>
          <p className="text-muted mx-auto mb-6 max-w-[580px] text-[17px] leading-[1.7]">
            Our AI solutions take everything that slows you down and make it run
            automatically, intelligently, and effortlessly.
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
        </ScrollReveal>

        {/* bento grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-6">
          {/* row 1 – large */}
          <Card
            className="flex flex-col sm:col-span-3"
            style={{ animation: "fadeUp 0.5s ease 0.1s both" }}
          >
            <IconChip icon={Phone} />
            <CardTitle>AI Voice Agents</CardTitle>
            <CardDesc>
              Never miss a call. Your AI voice agent answers inbound calls, makes outbound
              ones, follows up with leads, and sends reminders — all in a natural,
              human-sounding conversation.
            </CardDesc>
            <VoiceVisual />
          </Card>

          <Card
            className="flex flex-col sm:col-span-3"
            style={{ animation: "fadeUp 0.5s ease 0.18s both" }}
          >
            <IconChip icon={MessageSquare} />
            <CardTitle>Smart Chatbots</CardTitle>
            <CardDesc>
              WhatsApp, your website, Instagram, live chat — all covered simultaneously.
              Answering questions, qualifying leads, processing bookings instantly, at any
              hour.
            </CardDesc>
            <ChatbotVisual />
          </Card>

          {/* row 2 – medium */}
          <Card
            className="flex flex-col sm:col-span-2"
            style={{ animation: "fadeUp 0.5s ease 0.26s both" }}
          >
            <IconChip icon={Settings2} />
            <CardTitle>Workflow Automation</CardTitle>
            <CardDesc>
              Invoices, payment chases, lead follow-ups, onboarding — every repetitive
              task automated end-to-end without anyone lifting a finger.
            </CardDesc>
            <WorkflowVisual />
          </Card>

          <Card
            className="flex flex-col sm:col-span-2"
            style={{ animation: "fadeUp 0.5s ease 0.34s both" }}
          >
            <IconChip icon={BarChart3} />
            <CardTitle>Intelligent Reporting</CardTitle>
            <CardDesc>
              Real-time view of your entire business — calls, leads, invoices,
              satisfaction scores. Everything live, in one place, from anywhere.
            </CardDesc>
            <ReportingVisual />
          </Card>

          <Card
            className="flex flex-col sm:col-span-2"
            style={{ animation: "fadeUp 0.5s ease 0.42s both" }}
          >
            <IconChip icon={Link2} />
            <CardTitle>CRM & Integrations</CardTitle>
            <CardDesc>
              We plug our AI layer directly into your existing stack. Every system shares
              data, every action triggers the right response, nothing gets lost.
            </CardDesc>
            <CRMVisual />
          </Card>

          {/* row 3 */}
          <Card
            className="flex flex-col sm:col-span-3"
            style={{ animation: "fadeUp 0.5s ease 0.50s both" }}
          >
            <IconChip icon={Globe} />
            <CardTitle>Digital Presence</CardTitle>
            <CardDesc>
              Smart sites that work — integrated with your AI tools, connected to your
              CRM, and built to convert from day one.
            </CardDesc>
            <DigitalVisual />
          </Card>

          <Card
            className="flex flex-col sm:col-span-3"
            style={{ animation: "fadeUp 0.5s ease 0.58s both" }}
          >
            <IconChip icon={Smartphone} />
            <CardTitle>AI Social Media</CardTitle>
            <CardDesc>
              Scheduling, publishing, AI avatars, trend monitoring — your brand always on,
              always engaging, without you stepping in front of a camera.
            </CardDesc>
            <SocialVisual />
          </Card>
        </div>
      </div>
    </section>
  );
}
