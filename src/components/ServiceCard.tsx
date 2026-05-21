import { Brain, Settings2, BarChart3, Bot, LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Brain,
  Settings2,
  BarChart3,
  Bot,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = ICON_MAP[icon] ?? Brain;

  return (
    <article className="group border-border-glow from-steel/70 to-navy-900/65 hover:border-cyan/40 flex min-h-[250px] flex-col rounded-[18px] border bg-gradient-to-br p-[30px] shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,194,255,0.10)]">
      <div className="text-cyan mb-7 flex h-[54px] w-[54px] items-center justify-center">
        <Icon className="h-9 w-9" strokeWidth={1.5} />
      </div>

      <h3 className="text-white-soft mb-[14px] text-[21px] font-bold">{title}</h3>

      <p className="text-muted text-[15.5px] leading-[1.65]">{description}</p>

      <a
        href="#"
        aria-label={`Learn more about ${title}`}
        className="text-cyan mt-[26px] inline-flex items-center transition-transform group-hover:translate-x-1"
      >
        <ArrowRight className="h-6 w-6" />
      </a>
    </article>
  );
}
