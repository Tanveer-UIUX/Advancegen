"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import LogoMark from "./LogoMark";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", "")) as string[];
const NAV_ITEMS = NAV_LINKS.filter((l) => l.label !== "Let's Talk");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const activeId = useActiveSection(SECTION_IDS as readonly string[]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop || document.body.scrollTop;
      const total = doc.scrollHeight - doc.clientHeight;
      setScrollPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="bg-navy-900/90 sticky top-0 z-50 w-full backdrop-blur-[20px]"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="mx-auto flex h-[68px] w-full max-w-[1200px] items-center px-8">
        {/* Brand */}
        <a
          href="#home"
          aria-label="Advancegen home"
          className="mr-10 flex shrink-0 items-center gap-3"
        >
          <LogoMark size="sm" />
          <div className="leading-none">
            <span className="text-white-soft block text-[20px] font-extrabold tracking-tight">
              Advance<span className="text-cyan">gen</span>
            </span>
            <span className="text-emerald mt-0.5 block text-[8px] tracking-[4px] uppercase">
              make it easy
            </span>
          </div>
        </a>

        {/* Desktop nav — pushed to right */}
        <nav
          aria-label="Main navigation"
          className="ml-auto hidden items-center gap-0.5 lg:flex"
        >
          {NAV_ITEMS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white-soft relative px-4 py-2.5 text-[15px] font-semibold tracking-wide transition-colors duration-150"
                style={{ color: isActive ? "#00C2FF" : "#cbd5e1" }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute right-4 bottom-0 left-4 h-[2.5px] rounded-full"
                    style={{ background: "linear-gradient(90deg,#00C2FF,#00E5A8)" }}
                  />
                )}
              </a>
            );
          })}

          {/* Let's Talk — cyan outlined button */}
          <a
            href="#contact"
            className="hover:bg-cyan/10 ml-5 inline-flex items-center rounded-[14px] px-7 py-2.5 text-[15px] font-bold tracking-wide transition-all duration-200"
            style={{
              color: "#F3F4F6",
              border: "2px solid #00C2FF",
            }}
          >
            Let&apos;s Talk
          </a>
        </nav>

        {/* Mobile: spacer + toggle */}
        <div className="flex-1 lg:hidden" />
        <button
          className="flex items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="text-white-soft h-5 w-5" />
          ) : (
            <Menu className="text-white-soft h-5 w-5" />
          )}
        </button>
      </div>

      {/* Scroll progress */}
      <div className="h-[2px]" style={{ background: "rgba(255,255,255,0.04)" }}>
        <div
          className="h-[2px] transition-[width] duration-100"
          style={{
            width: `${scrollPct}%`,
            background: "linear-gradient(90deg,#00C2FF,#00E5A8)",
          }}
        />
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="bg-navy-800 border-t px-7 pt-4 pb-5 lg:hidden"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-[14px] font-medium transition-colors"
                    style={{ color: isActive ? "#00C2FF" : "#A8B8C8" }}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
