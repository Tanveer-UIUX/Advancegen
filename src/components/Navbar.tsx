"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import LogoMark from "./LogoMark";
import Button from "./ui/Button";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", "")) as string[];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS as readonly string[]);

  return (
    <header className="bg-navy-900/80 sticky top-0 z-50 w-full border-b border-white/8 backdrop-blur-[18px]">
      <div className="mx-auto flex min-h-22 w-full max-w-375 items-center justify-between pt-0 pr-6 pb-0 pl-6 lg:pr-15 lg:pl-15">
        {/* Brand */}
        <a
          href="#home"
          aria-label="Advancegen home"
          className="flex shrink-0 items-center gap-3"
        >
          <LogoMark size="sm" />
          <div className="leading-none">
            <span className="text-white-soft block text-[22px] font-extrabold tracking-tight">
              Advance<span className="text-cyan">gen</span>
            </span>
            <span className="text-emerald mt-1 block text-[9px] tracking-[4px] uppercase">
              make it easy
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={[
                  "relative pb-1.5 text-[15px] font-semibold transition-colors duration-200",
                  "after:bg-cyan after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:transition-all after:duration-200 after:content-['']",
                  isActive
                    ? "nav-link nav-link-active after:opacity-100"
                    : "nav-link text-white-soft after:opacity-0 hover:after:opacity-100",
                ].join(" ")}
              >
                {link.label}
              </a>
            );
          })}

          <Button
            as="a"
            href="#contact"
            variant="outline-glow"
            className="ml-2 pt-0 pr-6 pb-0 pl-6"
          >
            Let&apos;s Talk
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="text-white-soft h-6 w-6" />
          ) : (
            <Menu className="text-white-soft h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="bg-navy-800 border-t border-white/8 px-8 pt-4 pb-6 lg:hidden"
        >
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block text-base font-semibold transition-colors ${isActive ? "text-cyan" : "text-white-soft hover:text-cyan"}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li>
              <Button
                as="a"
                href="#contact"
                variant="outline-glow"
                className="block w-full text-center"
                onClick={() => setOpen(false)}
              >
                Let&apos;s Talk
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
