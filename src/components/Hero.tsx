import { ArrowRight, Play } from "lucide-react";
import GalaxyCanvas from "./GalaxyCanvas";
import LogoMark from "./LogoMark";

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-22 overflow-hidden">
      <GalaxyCanvas />

      <div className="mx-auto grid min-h-140 w-full max-w-375 grid-cols-1 items-center gap-10 pt-17.5 pr-6 pb-14 pl-6 lg:grid-cols-2 lg:gap-15 lg:pr-15 lg:pl-15">
        {/* Left — copy */}
        <div>
          <p className="text-cyan-2 mb-4.5 text-[13px] font-extrabold tracking-[3px] uppercase">
            AI solutions that drive real impact
          </p>

          <h1 className="text-white-soft max-w-170 text-[clamp(36px,5vw,76px)] leading-[1.04] font-black tracking-[-1px] lg:tracking-[-3px]">
            Intelligent AI Solutions That{" "}
            <span className="gradient-text-cyan">Make It Easy</span>
          </h1>

          <p className="text-muted mt-6.5 max-w-140 text-[19px] leading-[1.7]">
            We build custom AI solutions and intelligent workflows that help businesses
            automate, scale, and grow.
          </p>

          <div className="mt-9.5 flex flex-wrap items-center gap-6">
            <button
              disabled
              aria-disabled="true"
              className="from-cyan to-cyan-2 text-navy-900 inline-flex cursor-default items-center gap-3 rounded-[12px] bg-linear-to-br pt-0 pr-8 pb-0 pl-8 text-[16px] font-extrabold opacity-90 shadow-[0_12px_36px_rgba(0,194,255,0.28)]"
              style={{ height: 50 }}
            >
              Explore Services
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              disabled
              aria-disabled="true"
              className="text-white-soft inline-flex cursor-default items-center gap-4 font-bold opacity-90"
            >
              <span className="text-cyan grid h-13 w-13 place-items-center rounded-full border border-white/50 shadow-[0_0_20px_rgba(0,194,255,0.10)]">
                <Play className="fill-cyan h-5 w-5" />
              </span>
              Watch How It Works
            </button>
          </div>
        </div>

        {/* Right — logo visual */}
        <div
          className="relative flex items-center justify-center pt-6 pb-6 lg:pt-0 lg:pb-0"
          aria-hidden="true"
        >
          <LogoMark size="lg" />
        </div>
      </div>
    </section>
  );
}
