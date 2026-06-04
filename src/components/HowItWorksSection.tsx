const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    tagline: "We start by listening — deeply.",
    weDo: "Conduct in-depth discovery sessions, audit your current processes, map your workflows, and identify every friction point and missed opportunity.",
    youDo:
      "Share your current setup, walk us through your daily operations, and tell us what's working and what isn't. Your input here shapes everything.",
  },
  {
    number: "02",
    title: "Strategy & Proposal",
    tagline: "A roadmap built specifically for your business.",
    weDo: "Design your tailored AI roadmap, select the right solutions, map out integrations with your existing tools, and present a clear proposal with timelines and outcomes.",
    youDo:
      "Review the proposal, ask every question you have, request changes, and give the final go-ahead. You stay in control of every decision.",
  },
  {
    number: "03",
    title: "Build & Integrate",
    tagline: "We build it into your world — not on top of it.",
    weDo: "Build, configure, and test every automation, integration, voice agent, chatbot, and dashboard — all connected to your existing stack.",
    youDo:
      "Stay informed through regular progress updates, provide feedback on demos, and approve each component before it goes live.",
  },
  {
    number: "04",
    title: "Launch",
    tagline: "Go live with confidence — not fingers crossed.",
    weDo: "Manage the live deployment, monitor all systems in real time, resolve any issues instantly, and confirm everything is performing to spec.",
    youDo:
      "Watch your business transform. Your team gets briefed, your customers start experiencing the difference, and you see your dashboard come to life.",
  },
  {
    number: "05",
    title: "Support & Optimise",
    tagline: "We don't disappear after launch. We grow with you.",
    weDo: "Monitor system performance, analyse your reporting data, identify optimisation opportunities, implement improvements, and adapt your AI setup as your business evolves.",
    youDo:
      "Focus on your business, share feedback on what you're experiencing, and tell us where you want to grow next. We handle the rest.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-t border-white/[0.07] px-7 py-20">
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-16 text-center">
          <span className="section-label">How It Works</span>
          <h2 className="font-display text-white-soft mt-3 text-[clamp(28px,3.6vw,46px)] leading-[1.15] font-semibold tracking-[-0.02em]">
            Five steps. Complete clarity.
          </h2>
          <p className="text-muted mx-auto mt-4 max-w-[560px] text-[17px] leading-[1.75] font-light">
            You&apos;re with us every step of the way. From the first conversation to
            ongoing optimisation, you&apos;re never in the dark.
          </p>
        </div>

        <div className="relative">
          <div className="bg-cyan/10 absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-px lg:block" />
          <div className="bg-cyan/10 absolute top-0 bottom-0 left-[18px] w-px lg:hidden" />

          <div className="flex flex-col gap-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  className="relative flex flex-col pl-12 lg:grid lg:grid-cols-2 lg:gap-10 lg:pl-0"
                >
                  <div className="border-cyan/30 absolute top-6 left-1/2 z-10 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border bg-[#08131F] lg:flex">
                    <span className="bg-cyan block h-2 w-2 rounded-full" />
                  </div>

                  <div className="border-cyan/30 absolute top-6 left-0 z-10 flex h-9 w-9 items-center justify-center rounded-full border bg-[#08131F] lg:hidden">
                    <span className="bg-cyan block h-2 w-2 rounded-full" />
                  </div>

                  {isEven ? (
                    <>
                      <div
                        className={`lg:flex lg:flex-col lg:items-end lg:justify-start lg:pt-1 lg:text-right`}
                      >
                        <span className="font-display text-cyan text-[clamp(36px,4vw,52px)] leading-none font-semibold">
                          {step.number}
                        </span>
                        <h3 className="font-display text-white-soft mt-1 text-[20px] font-semibold">
                          {step.title}
                        </h3>
                        <p className="text-muted mt-1 text-[14px] italic">
                          {step.tagline}
                        </p>
                      </div>
                      <StepCard weDo={step.weDo} youDo={step.youDo} />
                    </>
                  ) : (
                    <>
                      <div className="lg:order-2 lg:flex lg:flex-col lg:items-start lg:justify-start lg:pt-1 lg:text-left">
                        <span className="font-display text-cyan text-[clamp(36px,4vw,52px)] leading-none font-semibold">
                          {step.number}
                        </span>
                        <h3 className="font-display text-white-soft mt-1 text-[20px] font-semibold">
                          {step.title}
                        </h3>
                        <p className="text-muted mt-1 text-[14px] italic">
                          {step.tagline}
                        </p>
                      </div>
                      <div className="lg:order-1">
                        <StepCard weDo={step.weDo} youDo={step.youDo} />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 rounded-[18px] border border-white/[0.07] bg-[#102235] p-8 text-center">
          <p className="text-white-soft mx-auto max-w-[620px] text-[18px] leading-[1.7] font-light">
            &ldquo;You&apos;re not just a client. You&apos;re a partner. At every step,
            you&apos;re informed, involved, and in control.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

function StepCard({ weDo, youDo }: { weDo: string; youDo: string }) {
  return (
    <div className="mt-4 flex flex-col gap-4 rounded-[18px] border border-white/[0.07] bg-[#102235] p-6 lg:mt-0">
      <div>
        <span className="text-cyan mb-1.5 block text-[11px] font-semibold tracking-widest uppercase">
          What we do
        </span>
        <p className="text-muted text-[14px] leading-[1.7]">{weDo}</p>
      </div>
      <div className="border-t border-white/[0.06] pt-4">
        <span className="text-emerald mb-1.5 block text-[11px] font-semibold tracking-widest uppercase">
          What you do
        </span>
        <p className="text-muted text-[14px] leading-[1.7]">{youDo}</p>
      </div>
    </div>
  );
}
