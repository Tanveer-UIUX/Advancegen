"use client";

import { useState } from "react";
import { Mail, Phone, Link2, Camera, MessageSquare, Send, Paperclip } from "lucide-react";

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

const contactChannels = [
  {
    icon: MessageSquare,
    label: "WhatsApp",
    description: "Message us directly",
    href: "#",
  },
  {
    icon: Mail,
    label: "Email",
    description: "info@advancegen.ai",
    href: "mailto:info@advancegen.ai",
  },
  { icon: Phone, label: "Phone", description: "Call us directly", href: "#" },
  { icon: Link2, label: "LinkedIn", description: "Advancegen AI", href: "#" },
  { icon: Camera, label: "Instagram", description: "Advancegen AI", href: "#" },
];

export default function LetsTalkSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [files, setFiles] = useState<FileList | null>(null);

  const inputCls =
    "w-full bg-[#08131F] border border-[rgba(0,194,255,0.15)] rounded-[10px] px-4 py-3 text-[14px] text-white-soft placeholder-[#5A7A94] outline-none focus:border-cyan transition-colors duration-150";

  return (
    <section id="contact" className="border-t border-white/[0.07]">
      <div className="mx-auto max-w-[1000px] px-7 py-20">
        {/* header */}
        <div className="mb-12 text-center">
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
        </div>

        {/* two-column: calendly + form */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left — Calendly embed */}
          <div
            className="overflow-hidden rounded-[20px]"
            style={{
              background: "#102235",
              border: "1px solid rgba(0,194,255,0.15)",
              boxShadow: "0 0 40px rgba(0,194,255,0.06)",
            }}
          >
            {/* card header */}
            <div
              className="flex items-center gap-3 border-b px-6 py-4"
              style={{ borderColor: "rgba(0,194,255,0.10)" }}
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ background: "rgba(0,194,255,0.10)" }}
              >
                <svg
                  className="text-cyan h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>
              <span className="text-white-soft text-[13px] font-semibold">
                Schedule Your Free Consultation
              </span>
            </div>

            <iframe
              src="https://calendly.com/adeelbutt20/30min?embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1&background_color=08131F&text_color=f3f4f6&primary_color=00c2ff"
              className="w-full"
              style={{ height: 560, border: "none" }}
              title="Schedule a consultation"
            />
          </div>

          {/* Right — contact form */}
          <div
            className="flex flex-col rounded-[20px]"
            style={{
              background: "#102235",
              border: "1px solid rgba(0,194,255,0.15)",
              boxShadow: "0 0 40px rgba(0,194,255,0.06)",
            }}
          >
            {/* card header */}
            <div
              className="flex items-center gap-3 border-b px-6 py-4"
              style={{ borderColor: "rgba(0,194,255,0.10)" }}
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ background: "rgba(0,229,168,0.10)" }}
              >
                <Send className="text-emerald h-4 w-4" />
              </div>
              <span className="text-white-soft text-[13px] font-semibold">
                Get in Touch
              </span>
            </div>

            <form
              className="flex flex-1 flex-col gap-3 p-6"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* name + email */}
              <div className="grid grid-cols-2 gap-3">
                <input
                  className={inputCls}
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="email"
                  className={inputCls}
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              {/* phone + service */}
              <div className="grid grid-cols-2 gap-3">
                <div className="focus-within:border-cyan flex overflow-hidden rounded-[10px] border border-[rgba(0,194,255,0.15)] bg-[#08131F] transition-colors">
                  <span className="flex items-center border-r border-[rgba(0,194,255,0.10)] px-3 text-[13px] text-[#5A7A94]">
                    🇬🇧 +44
                  </span>
                  <input
                    className="text-white-soft flex-1 bg-transparent px-3 py-3 text-[14px] placeholder-[#5A7A94] outline-none"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                <select
                  className={`${inputCls} cursor-pointer`}
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  style={{ appearance: "none" }}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-[#102235]">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* message */}
              <textarea
                className={`${inputCls} resize-none`}
                rows={5}
                placeholder="Tell us about your business or the challenges you're facing..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              {/* file attach */}
              <label
                className="flex cursor-pointer items-center gap-2 text-[12px] transition-colors"
                style={{ color: "#5A7A94" }}
              >
                <Paperclip className="h-4 w-4" />
                <span>Attach files ({files ? files.length : 0}/5)</span>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.png,.jpg"
                  className="hidden"
                  onChange={(e) => setFiles(e.target.files)}
                />
              </label>

              {/* submit */}
              <button
                type="submit"
                className="mt-auto flex items-center justify-center gap-2 rounded-[10px] py-3.5 text-[14px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,194,255,0.3)]"
                style={{
                  background: "linear-gradient(135deg,#00C2FF,#00E5A8)",
                  color: "#08131F",
                }}
              >
                <Send className="h-4 w-4" />
                Send Us a Message
              </button>

              {/* social icons */}
              <div
                className="border-t pt-1"
                style={{ borderColor: "rgba(0,194,255,0.08)" }}
              >
                <p className="mb-3 text-[11px]" style={{ color: "#5A7A94" }}>
                  Or reach us on
                </p>
                <div className="flex items-center gap-3">
                  {contactChannels.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      title={label}
                      className="hover:bg-cyan/15 flex h-9 w-9 items-center justify-center rounded-[8px] transition-all duration-150 hover:-translate-y-0.5"
                      style={{
                        background: "rgba(0,194,255,0.08)",
                        border: "1px solid rgba(0,194,255,0.12)",
                      }}
                    >
                      <Icon className="text-cyan h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* footer */}
        <div className="mt-12 border-t border-white/[0.07] pt-8 text-center">
          <p className="text-muted text-xs">
            No commitment. No obligation. Just one conversation that could change how your
            business runs — forever.
          </p>
          <p className="mt-3 text-[11px]" style={{ color: "#5A7A94" }}>
            © 2025 Advancegen AI. All rights reserved. &nbsp;|&nbsp; advancegen.ai
            &nbsp;|&nbsp; info@advancegen.ai &nbsp;|&nbsp; make it easy
          </p>
        </div>
      </div>
    </section>
  );
}
