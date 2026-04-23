"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = TESTIMONIALS[current];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 md:py-32 section-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-[10%] w-[400px] h-[400px] rounded-full bg-forest/5 blur-[100px]" />
        <div className="absolute bottom-10 left-[10%] w-[300px] h-[300px] rounded-full bg-caramel/5 blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="font-accent text-xl text-mint">Lo que dicen</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mt-2">
              Mis clientes
            </h2>
          </div>
        </FadeIn>

        {/* Testimonial carousel */}
        <div className="relative">
          {/* Big quote mark */}
          <div className="absolute -top-8 left-0 md:left-8 font-display text-8xl md:text-9xl text-forest/20 select-none leading-none">
            &ldquo;
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-center px-4 md:px-16 py-8"
            >
              {/* Quote */}
              <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-cream/90 leading-relaxed italic mb-10">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-3">
                {/* Avatar placeholder - a circle with initials */}
                <div className="w-14 h-14 rounded-full bg-forest/30 flex items-center justify-center border border-forest/20">
                  <span className="font-display text-lg font-bold text-cream">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-cream text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-text-muted text-sm">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Prev */}
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/40 transition-all duration-300"
              aria-label="Testimonio anterior"
              id="testimonial-prev"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-forest w-8"
                      : "bg-cream/20 hover:bg-cream/40"
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                  id={`testimonial-dot-${i}`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:border-cream/40 transition-all duration-300"
              aria-label="Siguiente testimonio"
              id="testimonial-next"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
