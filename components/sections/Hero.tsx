"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { HeroAnimations } from "../animations/HeroAnimations";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft gradient circles */}
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-mint/20 blur-[120px]" />
        <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-caramel/15 blur-[100px]" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-sage/10 blur-[80px]" />

        {/* Floating leaf decorations */}

        <HeroAnimations />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 animate-fade-in [animation-delay:1000ms] opacity-0">
        {/* Handwriting accent */}
        <span className="font-accent text-2xl md:text-3xl text-forest inline-block mb-4">
          ¡Hola, soy Eduardo!
        </span>

  {/* H1 estático — mejor para LCP y SEO */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-charcoal-light mb-6 animate-fade-in [animation-delay:1000ms] opacity-0">
          Creo experiencias web
          <br />
          <span className="text-forest">que enamoran</span>
          <br />
          a tus clientes
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-text-secondary leading-relaxed mb-10">
          Desarrollador web especializado en{" "}
          <span className="text-mocha font-medium">restaurantes</span> y{" "}
          <span className="text-mocha font-medium">marcas premium</span> en
          México. Sitios rápidos, hermosos y que convierten.
        </p>

        {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:1000ms] opacity-0">
            <a
              href="#proyectos"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#proyectos")?.scrollIntoView({ behavior: "smooth" });
              }}
              id="hero-cta-projects"
              className="group px-8 py-4 bg-forest text-cream font-medium rounded-full hover:bg-forest-dark transition-all duration-300 hover:shadow-xl hover:shadow-forest/20 hover:-translate-y-0.5 flex items-center gap-3"
            >
              <span>Ver mis proyectos</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-y-0.5 transition-transform"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-contact"
              className="group px-8 py-4 border-2 border-caramel text-mocha font-medium rounded-full hover:bg-caramel/10 transition-all duration-300 flex items-center gap-3"
            >
              <span>Agendar llamada</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>

        {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16 pt-8 border-t border-caramel/20 animate-fade-in [animation-delay:1000ms] opacity-0">
            <div className="text-center">
              <span className="font-display text-3xl md:text-4xl font-bold text-forest">
                +10
              </span>
              <p className="text-sm text-text-muted mt-1">
                Proyectos entregados
              </p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-caramel/30" />
            <div className="text-center">
              <span className="font-display text-3xl md:text-4xl font-bold text-forest">
                +4
              </span>
              <p className="text-sm text-text-muted mt-1">
                Años de experiencia
              </p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-caramel/30" />
            <div className="text-center">
              <span className="font-display text-3xl md:text-4xl font-bold text-forest">
                100%
              </span>
              <p className="text-sm text-text-muted mt-1">
                Clientes satisfechos
              </p>
            </div>
          </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
  <div className="w-6 h-10 border-2 border-caramel/40 rounded-full flex justify-center pt-2">
    <div className="w-1.5 h-1.5 bg-caramel rounded-full animate-scroll-dot" />
  </div>
</div>
    </section>
  );
}
