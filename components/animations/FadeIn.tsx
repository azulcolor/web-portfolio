"use client";

import { useEffect, useRef, type ReactNode } from "react";

// ─── FadeIn ───────────────────────────────────────────────────────────────────

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const directionStyles: Record<string, string> = {
  up:    "opacity-0 translate-y-10",
  down:  "opacity-0 -translate-y-10",
  left:  "opacity-0 -translate-x-10",
  right: "opacity-0 translate-x-10",
};

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}s`;
          el.style.transitionDuration = `${duration}s`;
          el.classList.remove("opacity-0", "translate-y-10", "-translate-y-10", "translate-x-10", "-translate-x-10");
          if (once) observer.disconnect();
        } else if (!once) {
          el.classList.add(...directionStyles[direction].split(" "));
        }
      },
      { rootMargin: "-50px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay, duration, once]);

  return (
    <div
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.25,0.4,0.25,1)] ${directionStyles[direction]} ${className}`}
    >
      {children}
    </div>
  );
}

// ─── StaggerContainer ─────────────────────────────────────────────────────────

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>("[data-stagger-item]");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, i) => {
            item.style.transitionDelay = `${i * staggerDelay}s`;
            item.classList.remove("opacity-0", "translate-y-8");
          });
          if (once) observer.disconnect();
        } else if (!once) {
          items.forEach((item) => {
            item.classList.add("opacity-0", "translate-y-8");
          });
        }
      },
      { rootMargin: "-50px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [staggerDelay, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// ─── StaggerItem ──────────────────────────────────────────────────────────────

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <div
      data-stagger-item
      className={`opacity-0 translate-y-8 transition-all duration-500 ease-[cubic-bezier(0.25,0.4,0.25,1)] ${className}`}
    >
      {children}
    </div>
  );
}

// ─── ScaleIn ──────────────────────────────────────────────────────────────────

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScaleIn({ children, delay = 0, className = "" }: ScaleInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}s`;
          el.classList.remove("opacity-0", "scale-90");
          observer.disconnect();
        }
      },
      { rootMargin: "-50px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`opacity-0 scale-90 transition-all duration-500 ease-[cubic-bezier(0.25,0.4,0.25,1)] ${className}`}
    >
      {children}
    </div>
  );
}