"use client"

import { SITE_CONFIG } from "@/lib/constants";

export default function CtaButtons() {
    return (
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
    )
}