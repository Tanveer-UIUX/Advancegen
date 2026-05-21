import { SERVICE_CARDS } from "@/lib/constants";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
      className="from-navy-800/65 to-navy-900 scroll-mt-22 bg-linear-to-b"
    >
      <div className="mx-auto w-full max-w-375 pt-15.5 pr-6 pb-17.5 pl-6 lg:pr-15 lg:pl-15">
        <div className="mb-9 grid grid-cols-1 items-end gap-12 lg:grid-cols-2">
          <div>
            <p className="text-cyan-2 mb-3 text-[13px] font-extrabold tracking-[3px] uppercase">
              What we do
            </p>
            <h2 className="text-white-soft text-[clamp(34px,4vw,48px)] leading-[1.15] font-black tracking-[-1.4px]">
              AI Solutions Built Around Your Business
            </h2>
          </div>

          <p className="text-muted max-w-155 text-[18px] leading-[1.65]">
            We combine the power of AI with deep business understanding to deliver
            solutions that drive efficiency, reduce costs, and unlock new growth
            opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6.5 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICE_CARDS.map((card) => (
            <ServiceCard
              key={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
