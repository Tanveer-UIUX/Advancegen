import {
  AlignJustify,
  CheckCheck,
  Hexagon,
  LayoutGrid,
  LucideIcon,
  RefreshCw,
  Sun,
} from "lucide-react";

import { TRUST_COMPANIES } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  RefreshCw,
  LayoutGrid,
  AlignJustify,
  Sun,
  Hexagon,
  CheckCheck,
};

export default function TrustBar() {
  return (
    <section
      aria-label="Trusted companies"
      className="border-t border-b border-white/[0.07] bg-white/[0.025]"
    >
      <div className="mx-auto flex w-full max-w-375 flex-col gap-4 pt-4 pr-6 pb-4 pl-6 min-[1150px]:min-h-16 min-[1150px]:flex-row min-[1150px]:items-center min-[1150px]:justify-between min-[1150px]:gap-20 min-[1150px]:pt-0 min-[1150px]:pb-0 lg:pr-15 lg:pl-15">
        <span className="text-white-soft/40 shrink-0 text-[11px] font-semibold tracking-[1.5px] uppercase">
          Trusted by innovative companies
        </span>

        <ul className="grid grid-cols-3 gap-x-8 gap-y-4 max-[820px]:pb-2 min-[820px]:flex min-[820px]:items-center min-[820px]:gap-8">
          {TRUST_COMPANIES.map(({ name, icon }) => {
            const Icon = ICON_MAP[icon];
            return (
              <li
                key={name}
                className="text-white-soft/60 hover:text-white-soft/90 flex items-center gap-2 text-[15px] font-bold transition-colors duration-200"
              >
                {Icon && <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} />}
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
