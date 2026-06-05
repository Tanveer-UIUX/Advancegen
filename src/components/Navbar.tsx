"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useActiveSection";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", "")) as string[];
const NAV_ITEMS = NAV_LINKS.filter((l) => l.label !== "Let's Talk");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(SECTION_IDS as readonly string[]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,12,28,0.92)" : "rgba(8,12,28,0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex h-[68px] w-full max-w-[1200px] items-center px-6">
        {/* Logo */}
        <a href="#home" aria-label="Advancegen home" className="shrink-0">
          <Image
            src="/Advancegen logo.svg"
            alt="Advancegen"
            width={150}
            height={38}
            priority
          />
        </a>

        {/* Centered pill nav */}
        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex"
        >
          <div
            className="flex items-center gap-1 rounded-full px-2 py-1.5"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            {NAV_ITEMS.map((link, i) => {
              const id = link.href.replace("#", "");
              const isActive = activeId === id;
              const isLast = i === NAV_ITEMS.length - 1;
              return (
                <div key={link.href} className="flex items-center">
                  <a
                    href={link.href}
                    className="flex items-center gap-1 rounded-full px-4 py-1.5 text-[14px] font-medium transition-all duration-150"
                    style={{
                      color: isActive ? "#ffffff" : "rgba(180,195,215,0.85)",
                      background: isActive ? "rgba(255,255,255,0.10)" : "transparent",
                    }}
                  >
                    {link.label}
                    {link.label === "Use Cases" && (
                      <ChevronDown size={13} className="opacity-60" strokeWidth={2.5} />
                    )}
                  </a>
                  {!isLast && (
                    <span
                      className="mx-0.5 h-1 w-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.18)" }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        <div className="flex-1" />

        {/* CTA — gradient stroke border */}
        <a
          href="#contact"
          className="hidden items-center rounded-full px-5 py-2 text-[14px] font-semibold transition-all duration-200 lg:inline-flex"
          style={{
            color: "#F3F4F6",
            border: "1px solid transparent",
            backgroundImage:
              "linear-gradient(rgba(8,12,28,0.85), rgba(8,12,28,0.85)), linear-gradient(90deg, #0a2b62, #197bf2, #04e0f0)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundImage =
              "linear-gradient(rgba(25,123,242,0.12), rgba(25,123,242,0.12)), linear-gradient(90deg, #0a2b62, #197bf2, #04e0f0)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundImage =
              "linear-gradient(rgba(8,12,28,0.85), rgba(8,12,28,0.85)), linear-gradient(90deg, #0a2b62, #197bf2, #04e0f0)";
          }}
        >
          Get Started
        </a>

        {/* Mobile toggle */}
        <button
          className="flex items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-5 w-5 text-white/80" />
          ) : (
            <Menu className="h-5 w-5 text-white/80" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="border-t px-6 pt-4 pb-5 lg:hidden"
          style={{
            background: "rgba(8,12,28,0.97)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-xl px-4 py-2.5 text-[14px] font-medium transition-colors"
                    style={{
                      color: isActive ? "#ffffff" : "rgba(180,195,215,0.8)",
                      background: isActive ? "rgba(255,255,255,0.07)" : "transparent",
                    }}
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
