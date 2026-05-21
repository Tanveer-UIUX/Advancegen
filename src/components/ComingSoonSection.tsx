import { Clock } from "lucide-react";

interface ComingSoonSectionProps {
  id: string;
  label: string;
}

export default function ComingSoonSection({ id, label }: ComingSoonSectionProps) {
  return (
    <section id={id} className="scroll-mt-22 border-t border-white/[0.07]">
      <div className="mx-auto flex min-h-105 w-full max-w-375 flex-col items-center justify-center gap-6 pt-20 pr-6 pb-20 pl-6 text-center lg:pr-15 lg:pl-15">
        <div className="border-border-glow bg-steel/40 text-cyan flex h-16 w-16 items-center justify-center rounded-2xl border">
          <Clock className="h-8 w-8" strokeWidth={1.5} />
        </div>

        <h2 className="text-white-soft text-[clamp(28px,3.5vw,42px)] font-black tracking-tight">
          {label}
        </h2>

        <p className="text-muted max-w-110 text-[17px] leading-relaxed">
          We&apos;re putting the finishing touches on this section. Check back soon or{" "}
          <a href="#contact" className="text-cyan hover:underline">
            get in touch
          </a>{" "}
          to learn more.
        </p>

        <a
          href="#contact"
          className="border-cyan text-white-soft hover:bg-cyan/10 mt-2 inline-flex items-center gap-2 rounded-[10px] border pt-0 pr-7 pb-0 pl-7 text-[15px] font-semibold shadow-[inset_0_0_14px_rgba(0,194,255,0.08)] transition-colors"
          style={{ height: 50 }}
        >
          Let&apos;s Talk
        </a>
      </div>
    </section>
  );
}
