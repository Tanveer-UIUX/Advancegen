import { Shield, Zap, Star, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Trusted Partnerships",
    body: "Your success is our success. Everything we do is built on transparency — you know what we're building, why we're building it, and what to expect at every step. We don't measure our success by what we deliver. We measure it by what you achieve.",
  },
  {
    icon: Zap,
    title: "Innovation",
    body: "The world of AI moves fast. We move with it. Our team continuously learns, evolves, and stays ahead of what's possible — so you always have access to the best solutions available, not what was cutting-edge two years ago.",
  },
  {
    icon: Star,
    title: "Simplicity",
    body: "We take the most complex technology in the world and make it feel effortless. Not just in how it works — but in how it's explained, how it's delivered, and how it fits into your business. If it isn't easy, we haven't done our job.",
  },
  {
    icon: Users,
    title: "Partnership",
    body: "We're not just an AI agency. We're the team that makes your business easy — and keeps it that way. We speak your language. We understand your pressures.",
  },
];

export default function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="border-t border-white/[0.07]">
      <div className="mx-auto max-w-[1000px] px-7 py-20">
        <div className="mb-16 text-center">
          <span className="section-label">Who We Are</span>
          <h2 className="font-display text-white-soft mt-4 text-[clamp(32px,4vw,52px)] leading-[1.15] font-semibold tracking-[-0.02em] italic">
            We started with one belief.
          </h2>
          <p className="text-muted mx-auto mt-5 max-w-[560px] text-[18px] leading-[1.75] font-light">
            AI shouldn&rsquo;t be complicated. It should just make things easy.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h3 className="text-white-soft mb-5 text-[13px] font-semibold tracking-[0.12em] uppercase">
              Our Story
            </h3>
            <div className="text-muted space-y-5 text-[16px] leading-[1.8] font-light">
              <p>
                Advancegen AI was born from a simple but powerful observation: businesses
                of every size were struggling — not because they lacked ambition, not
                because they lacked talent, but because the tools and technology that
                could transform their operations felt out of reach. Too complex. Too
                expensive. Too disconnected from the reality of running a real business.
              </p>
              <p>
                We built Advancegen AI to change that. To take the most powerful
                technology of our generation and make it genuinely accessible — not just
                to enterprise giants, but to the dental clinic on the high street, the
                plumbing company growing faster than it can manage, the restaurant owner
                juggling a hundred things at once.
              </p>
              <p>
                In less than a year, we&rsquo;ve already delivered AI solutions across
                multiple sectors and multiple countries. But this is just the beginning.
                We&rsquo;re scaling — and our mission is to awaken more businesses to the
                opportunities they didn&rsquo;t even know were possible.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white-soft mb-5 text-[13px] font-semibold tracking-[0.12em] uppercase">
              Our Mission
            </h3>
            <p className="text-muted text-[16px] leading-[1.8] font-light">
              We&rsquo;ve already made it easy for businesses across multiple sectors and
              multiple countries. Now we&rsquo;re scaling — awakening more businesses to
              the opportunities they didn&rsquo;t know were possible.
            </p>
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {values.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="border-cyan/[0.18] rounded-xl border bg-[#102235] p-6 shadow-[0_0_24px_rgba(0,194,255,0.06)]"
            >
              <div className="bg-cyan/10 mb-4 inline-flex items-center justify-center rounded-lg p-2.5">
                <Icon className="text-cyan h-5 w-5" strokeWidth={1.75} />
              </div>
              <h4 className="text-white-soft mb-2 text-[15px] leading-snug font-semibold">
                {title}
              </h4>
              <p className="text-muted text-[14px] leading-[1.75] font-light">{body}</p>
            </div>
          ))}
        </div>

        <div className="border-cyan rounded-xl border-l-4 bg-[#152B40] px-8 py-7">
          <p className="font-display text-white-soft text-[clamp(17px,2vw,22px)] leading-[1.6] italic">
            &ldquo;We&rsquo;re not just an AI agency. We&rsquo;re the team that makes your
            business easy — and keeps it that way.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
