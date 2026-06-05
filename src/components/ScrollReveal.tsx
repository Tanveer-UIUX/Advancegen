"use client";

import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  /** Extra Tailwind / class names applied to the wrapper */
  className?: string;
  /** Delay before the transition starts (ms) */
  delay?: number;
  /** IntersectionObserver threshold (0–1) */
  threshold?: number;
}

/**
 * Wraps children in an invisible div.
 * When the element scrolls into view the `is-visible` class is added,
 * which triggers the fade-up CSS transition defined in globals.css.
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.12,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // apply delay then reveal
          setTimeout(() => el.classList.add("is-visible"), delay);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
}
