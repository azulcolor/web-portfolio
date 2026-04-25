"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { TECH_STACK, SITE_CONFIG } from "@/lib/constants";

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 section-sand relative overflow-hidden">
      {/* Decorative organic shape */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-cream" style={{ clipPath: "ellipse(55% 100% at 50% 0%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="font-accent text-xl text-forest">Conóceme</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-light mt-2">
              Sobre mí
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <FadeIn direction="left">
            <div className="relative group">
              {/* Main photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-forest/10">
                <Image
                  src="/images/eduardo-portrait.webp"
                  alt="Eduardo Agustin Leal Pastelin - Desarrollador Web en Mérida, México"
                  width={600}
                  height={700}
                  priority
                  quality={75}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 600px"
                  className="object-cover w-full aspect-[4/5] group-hover:scale-105 transition-transform duration-500 ease-out will-change-transform"
                />
                {/* Warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-cream rounded-2xl p-5 shadow-xl border border-caramel/10">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🌊</span>
                  <div>
                    <p className="text-sm font-medium text-charcoal-light">Desde Yucatán</p>
                    <p className="text-xs text-text-muted">para todo México</p>
                  </div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-4 -left-4 w-20 h-20 grid grid-cols-4 gap-1.5 opacity-30">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-forest" />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-6">
              <div className="space-y-4 text-text-secondary leading-relaxed text-lg">
                <p>
                  Soy un <span className="text-charcoal-light font-medium">desarrollador web creativo</span> apasionado
                  por el detalle y el diseño que conecta. Me especializo en crear sitios web para{" "}
                  <span className="text-forest font-medium">restaurantes y marcas premium</span> que no solo se ven
                  increíbles — sino que convierten visitantes en clientes.
                </p>
                <p>
                  Creo firmemente que una página web debe <span className="text-mocha font-medium">transmitir la
                  esencia</span> de cada negocio. Cada proyecto que entrego está pensado para cargar rápido, verse
                  espectacular en cualquier dispositivo y posicionarse en Google.
                </p>
                <p>
                  Fuera del código, me encuentras disfrutando del cine{" "}
                  <span className="text-text-muted">(tengo un TikTok con 20K donde hablo de películas)</span>,
                  escuchando música, en la playa con un café, o acariciando a mis gatos.
                  La paz y la creatividad son lo que mueve mi vida.
                </p>
              </div>

              {/* Personal touches */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { emoji: "🎬", label: "Cinéfilo" },
                  { emoji: "🎵", label: "Música" },
                  { emoji: "🐱", label: "Cat lover" },
                  { emoji: "☕", label: "Café" },
                  { emoji: "🌊", label: "Playa" },
                  { emoji: "🧘", label: "Paz" },
                ].map((tag) => (
                  <span
                    key={tag.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream rounded-full text-sm text-text-secondary border border-caramel/10"
                  >
                    <span>{tag.emoji}</span>
                    <span>{tag.label}</span>
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="pt-6">
                <p className="text-sm font-medium text-text-muted uppercase tracking-wider mb-4">
                  Tecnologías que domino
                </p>
                <StaggerContainer className="flex flex-wrap gap-3" staggerDelay={0.05}>
                  {TECH_STACK.map((tech) => (
                    <StaggerItem key={tech.name}>
                      <div className="flex items-center gap-2 px-4 py-2 bg-cream rounded-xl border border-mint/20 hover:border-forest/30 hover:shadow-md transition-all duration-300 cursor-default">
                        <span className="text-lg">{tech.icon}</span>
                        <span className="text-sm font-medium text-charcoal-light">{tech.name}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom organic shape */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-cream" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
    </section>
  );
}
