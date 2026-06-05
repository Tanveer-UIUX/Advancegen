import GalaxyCanvas from "./GalaxyCanvas";
import HeroDashboard from "./HeroDashboard";
import SwiftUpHeading from "./SwiftUpHeading";

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-22 overflow-hidden">
      <GalaxyCanvas />
      <div className="hero-grid-lines" />

      <div className="mx-auto grid min-h-140 w-full max-w-[1000px] grid-cols-1 items-center gap-10 px-7 pt-16 pb-14 lg:grid-cols-2 lg:gap-14">
        <div className="relative z-10">
          <span className="section-label">AI-powered business intelligence</span>
          <SwiftUpHeading />
          <p className="text-muted mt-5 max-w-[500px] text-[17px] leading-[1.75] font-light">
            Stop managing chaos.{" "}
            <strong className="text-white-soft font-medium">
              We plug intelligent AI into your business
            </strong>{" "}
            and make everything — your calls, your invoices, your customers, your
            processes — just work. Automatically.
          </p>
        </div>

        <div
          className="relative z-10 flex items-center justify-center pt-4 pb-4 lg:pt-0 lg:pb-0"
          aria-hidden="true"
        >
          <div className="w-full max-w-[420px]">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
