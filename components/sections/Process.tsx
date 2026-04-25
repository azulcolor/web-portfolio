import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section id="proceso" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-20">
            <span className="font-accent text-xl text-forest">Así trabajo</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-light mt-2">
              Mi proceso
            </h2>
            <p className="max-w-2xl mx-auto text-text-secondary mt-4 text-lg">
              Un proceso claro y transparente que te mantiene involucrado en cada paso,
              desde la primera idea hasta el sitio en línea.
            </p>
          </div>
        </FadeIn>

        {/* Process timeline */}
        <StaggerContainer className="relative" staggerDelay={0.15}>
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-caramel/30 to-transparent" />

          <div className="space-y-12 lg:space-y-0">
            {PROCESS_STEPS.map((step, index) => (
              <StaggerItem key={step.number}>
                <div
                  className={`lg:flex items-center gap-12 lg:mb-20 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"
                    }`}
                  >
                    <div
                      className={`relative bg-cream rounded-3xl p-8 border border-caramel/10 hover:border-forest/20 hover:shadow-xl transition-all duration-500 group ${
                        index % 2 === 0 ? "lg:mr-0" : "lg:ml-0"
                      }`}
                    >
                      {/* Step number */}
                      <span className="font-display text-6xl font-bold text-mint/40 absolute top-4 right-6 select-none group-hover:text-forest/15 transition-colors duration-500">
                        {step.number}
                      </span>

                      <h3 className="font-display text-2xl font-bold text-charcoal-light mb-3 relative">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed relative">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden lg:flex items-center justify-center relative z-10">
                    <div className="w-4 h-4 bg-forest rounded-full ring-4 ring-cream shadow-lg" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
