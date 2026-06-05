"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Link2,
  Camera,
  MessageSquare,
  Paperclip,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const SERVICES = [
  "AI Voice Agents",
  "Smart Chatbots",
  "Workflow Automation",
  "Intelligent Reporting Dashboard",
  "CRM & Systems Integration",
  "Digital Presence",
  "Social Media Management",
  "Not sure — let's talk",
];

const COUNTRIES = [
  { code: "US", dial: "+1" },
  { code: "GB", dial: "+44" },
  { code: "AU", dial: "+61" },
  { code: "CA", dial: "+1" },
  { code: "AE", dial: "+971" },
  { code: "PK", dial: "+92" },
];

const contactChannels = [
  { icon: MessageSquare, label: "WhatsApp", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:info@advancegen.ai" },
  { icon: Phone, label: "Phone", href: "#" },
  { icon: Link2, label: "LinkedIn", href: "#" },
  { icon: Camera, label: "Instagram", href: "#" },
];

/* ── shared input style ─────────────────────────────── */
const fieldCls =
  "w-full rounded-[10px] px-4 py-3 text-[14px] outline-none transition-colors duration-150 placeholder-[#6b7280]";
const fieldStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.10)",
  color: "#f3f4f6",
} as React.CSSProperties;
const focusBorder = "rgba(0,194,255,0.55)";

function Field({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-1.5">{children}</div>;
}
function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[12px] font-medium" style={{ color: "#9ca3af" }}>
      {children}
    </label>
  );
}

export default function LetsTalkSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "US",
    phone: "",
    service: "",
    message: "",
    privacy: false,
  });
  const [files, setFiles] = useState<FileList | null>(null);

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    e.currentTarget.style.borderColor = focusBorder;
  };
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
  };

  return (
    <section id="contact" className="">
      <div className="mx-auto max-w-[1000px] px-7 py-20">
        {/* header */}
        <ScrollReveal className="mb-12 text-center">
          <span className="section-label block text-center">Let&apos;s Talk</span>
          <h2 className="font-display text-white-soft text-[clamp(30px,4vw,48px)] leading-[1.1] font-semibold tracking-[-0.02em]">
            One conversation.
            <br />
            <em className="heading-italic">That&apos;s all it takes.</em>
          </h2>
          <p className="text-muted mx-auto mt-4 max-w-[520px] text-[16px] leading-[1.75]">
            Book a free consultation and walk away with a free audit of your business —
            and a clear picture of exactly where AI can make things easy for you.
          </p>
        </ScrollReveal>

        {/* two-column: calendly + form */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Left — Calendly embed */}
            <div
              className="flex flex-col overflow-hidden rounded-[20px]"
              style={{
                background: "#08131F",
                border: "1px solid rgba(0,194,255,0.15)",
                boxShadow: "0 0 40px rgba(0,194,255,0.06)",
              }}
            >
              <div
                className="border-b px-8 py-6"
                style={{ borderColor: "rgba(0,194,255,0.10)" }}
              >
                <h3 className="text-white-soft mb-2 text-[28px] leading-[1.15] font-bold">
                  Schedule Your Free Consultation
                </h3>
                <p className="text-[14px] leading-[1.6]" style={{ color: "#9ca3af" }}>
                  Pick a time that works for you — no commitment, just a free conversation
                  to explore what&apos;s possible.
                </p>
              </div>
              <div className="relative flex-1" style={{ minHeight: 560 }}>
                <iframe
                  src="https://calendly.com/adeelbutt20/30min?embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1&background_color=08131F&text_color=f3f4f6&primary_color=00c2ff"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: "none" }}
                  scrolling="no"
                  title="Schedule a consultation"
                />
                {/* Covers Calendly's internal grey footer area */}
                <div
                  className="pointer-events-none absolute right-0 bottom-0 left-0"
                  style={{ height: 48, background: "#08131F" }}
                />
              </div>
            </div>

            {/* Right — Contact Us form card */}
            <div
              className="flex flex-col rounded-[20px] p-8"
              style={{
                background: "#0d1b2a",
                border: "1px solid rgba(0,194,255,0.15)",
                boxShadow: "0 0 40px rgba(0,194,255,0.06)",
              }}
            >
              {/* Card heading */}
              <div className="mb-6">
                <h3 className="text-white-soft mb-2 text-[28px] leading-[1.15] font-bold">
                  Contact Us
                </h3>
                <p className="text-[14px] leading-[1.6]" style={{ color: "#9ca3af" }}>
                  Have questions or need assistance? Reach out to us, and our team will
                  get back to you promptly.
                </p>
              </div>

              <form
                className="flex flex-1 flex-col gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* First + Last name */}
                <div className="grid grid-cols-2 gap-3">
                  <Field>
                    <Label>First name</Label>
                    <input
                      className={fieldCls}
                      style={fieldStyle}
                      placeholder="Tony"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </Field>
                  <Field>
                    <Label>Last name</Label>
                    <input
                      className={fieldCls}
                      style={fieldStyle}
                      placeholder="Stark"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </Field>
                </div>

                {/* Email */}
                <Field>
                  <Label>Email</Label>
                  <input
                    type="email"
                    className={fieldCls}
                    style={fieldStyle}
                    placeholder="tony@starkindustries.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </Field>

                {/* Phone */}
                <Field>
                  <Label>Phone number</Label>
                  <div
                    className="flex overflow-hidden rounded-[10px] transition-colors duration-150"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.10)",
                    }}
                  >
                    <select
                      className="border-r bg-transparent px-3 py-3 text-[13px] outline-none"
                      style={{
                        borderColor: "rgba(255,255,255,0.10)",
                        color: "#9ca3af",
                        minWidth: 72,
                      }}
                      value={form.countryCode}
                      onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                    >
                      {COUNTRIES.map((c) => (
                        <option key={c.code} value={c.code} className="bg-[#0d1117]">
                          {c.code} {c.dial}
                        </option>
                      ))}
                    </select>
                    <input
                      className="flex-1 bg-transparent px-3 py-3 text-[14px] placeholder-[#6b7280] outline-none"
                      style={{ color: "#f3f4f6" }}
                      placeholder="+1 (555) 020-3050"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </Field>

                {/* Service */}
                <Field>
                  <Label>Service</Label>
                  <select
                    className={`${fieldCls} cursor-pointer`}
                    style={{ ...fieldStyle, appearance: "none" } as React.CSSProperties}
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="bg-[#0d1117]">
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                {/* Message */}
                <Field>
                  <Label>Message</Label>
                  <textarea
                    className={`${fieldCls} resize-none`}
                    style={fieldStyle}
                    rows={4}
                    placeholder="Tell us about your business or the challenges you're facing..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </Field>

                {/* Attach file */}
                <label
                  className="inline-flex cursor-pointer items-center gap-2 text-[13px] transition-colors hover:text-white"
                  style={{ color: "#6b7280" }}
                >
                  <Paperclip className="h-4 w-4 shrink-0" />
                  <span>Attach files ({files ? files.length : 0}/5)</span>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.png,.jpg"
                    className="hidden"
                    onChange={(e) => setFiles(e.target.files)}
                  />
                </label>

                {/* Privacy checkbox */}
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    className="accent-cyan mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded"
                    checked={form.privacy}
                    onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
                  />
                  <span className="text-[13px]" style={{ color: "#9ca3af" }}>
                    You agree to our friendly{" "}
                    <a href="#" className="underline" style={{ color: "#a8b8c8" }}>
                      privacy policy
                    </a>
                    .
                  </span>
                </label>

                {/* Send button */}
                <button
                  type="submit"
                  className="mt-1 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-[15px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
                  style={{ background: "#ffffff", color: "#111827" }}
                >
                  Send Message <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          {/* ── Contact channel cards ──────────────────────── */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* WhatsApp */}
            <a
              href="#"
              className="group flex flex-col gap-3 rounded-[16px] p-5 transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "#0d1b2a",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-[10px]"
                style={{
                  background: "rgba(0,229,168,0.10)",
                  border: "1px solid rgba(0,229,168,0.18)",
                }}
              >
                <MessageSquare className="h-4 w-4" style={{ color: "#00E5A8" }} />
              </div>
              <div>
                <p className="text-white-soft mb-0.5 text-[14px] font-semibold">
                  WhatsApp
                </p>
                <p className="text-[12px]" style={{ color: "#6b7280" }}>
                  Message us directly.
                </p>
              </div>
              <span
                className="inline-flex items-center gap-1 text-[12px] font-medium transition-colors group-hover:text-white"
                style={{ color: "#9ca3af" }}
              >
                Chat on WhatsApp <ArrowRight className="h-3 w-3" />
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@advancegen.ai"
              className="group flex flex-col gap-3 rounded-[16px] p-5 transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "#0d1b2a",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-[10px]"
                  style={{
                    background: "rgba(0,194,255,0.10)",
                    border: "1px solid rgba(0,194,255,0.18)",
                  }}
                >
                  <Mail className="h-4 w-4" style={{ color: "#00C2FF" }} />
                </div>
                <span className="text-[11px] font-semibold" style={{ color: "#00C2FF" }}>
                  ● Online
                </span>
              </div>
              <div>
                <p className="text-white-soft mb-0.5 text-[14px] font-semibold">
                  Email us
                </p>
                <p className="text-[12px]" style={{ color: "#6b7280" }}>
                  We&apos;re here to help 24/7.
                </p>
              </div>
              <span
                className="inline-flex items-center gap-1 text-[12px] font-medium transition-colors group-hover:text-white"
                style={{ color: "#9ca3af" }}
              >
                Send an email <ArrowRight className="h-3 w-3" />
              </span>
            </a>

            {/* Book a call */}
            <a
              href="#"
              className="group flex flex-col gap-3 rounded-[16px] p-5 transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "#0d1b2a",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-[10px]"
                style={{
                  background: "rgba(167,139,250,0.10)",
                  border: "1px solid rgba(167,139,250,0.18)",
                }}
              >
                <Phone className="h-4 w-4" style={{ color: "#a78bfa" }} />
              </div>
              <div>
                <p className="text-white-soft mb-0.5 text-[14px] font-semibold">
                  Book a call
                </p>
                <p className="text-[12px]" style={{ color: "#6b7280" }}>
                  Speak to our sales team.
                </p>
              </div>
              <span
                className="inline-flex items-center gap-1 text-[12px] font-medium transition-colors group-hover:text-white"
                style={{ color: "#9ca3af" }}
              >
                Schedule a call <ArrowRight className="h-3 w-3" />
              </span>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="group flex flex-col gap-3 rounded-[16px] p-5 transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "#0d1b2a",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-[10px]"
                style={{
                  background: "rgba(244,114,182,0.10)",
                  border: "1px solid rgba(244,114,182,0.18)",
                }}
              >
                <Camera className="h-4 w-4" style={{ color: "#f472b6" }} />
              </div>
              <div>
                <p className="text-white-soft mb-0.5 text-[14px] font-semibold">
                  Instagram
                </p>
                <p className="text-[12px]" style={{ color: "#6b7280" }}>
                  Follow Advancegen AI.
                </p>
              </div>
              <span
                className="inline-flex items-center gap-1 text-[12px] font-medium transition-colors group-hover:text-white"
                style={{ color: "#9ca3af" }}
              >
                Visit Instagram <ArrowRight className="h-3 w-3" />
              </span>
            </a>
          </div>
        </ScrollReveal>

        {/* footer */}
        <div className="mt-12 border-t border-white/[0.07] pt-8 text-center">
          <p className="text-muted text-xs">
            No commitment. No obligation. Just one conversation that could change how your
            business runs — forever.
          </p>
          <p className="mt-3 text-[11px]" style={{ color: "#5A7A94" }}>
            © 2026 Advancegen AI. All rights reserved. &nbsp;|&nbsp; advancegen.ai
            &nbsp;|&nbsp; info@advancegen.ai &nbsp;|&nbsp; make it easy
          </p>
        </div>
      </div>
    </section>
  );
}
