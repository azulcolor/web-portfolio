"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { SERVICES } from "@/lib/constants";

function ServiceCard({
  service,
  isActive,
  onClick,
}: {
  service: (typeof SERVICES)[0];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`relative rounded-3xl p-8 cursor-pointer transition-all duration-500 border ${
        isActive
          ? "bg-forest text-cream border-forest shadow-2xl shadow-forest/20"
          : "bg-cream border-caramel/10 hover:border-forest/20 hover:shadow-lg"
      }`}
    >
      {/* Icon */}
      <div
        className={`text-4xl mb-5 transition-transform duration-300 ${
          isActive ? "scale-110" : ""
        }`}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3
        className={`font-display text-2xl font-bold mb-3 ${
          isActive ? "text-cream" : "text-charcoal-light"
        }`}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className={`leading-relaxed mb-5 ${
          isActive ? "text-cream/80" : "text-text-secondary"
        }`}
      >
        {service.description}
      </p>

      {/* Features */}
      <AnimatePresence>
        {isActive && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-2.5 overflow-hidden"
          >
            {service.features.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 text-sm text-cream/90"
              >
                <span className="w-1.5 h-1.5 bg-mint rounded-full flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Expand indicator */}
      <div className="absolute top-8 right-8">
        <motion.div
          animate={{ rotate: isActive ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isActive ? "bg-cream/10" : "bg-forest/5"
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isActive ? "#FAF6F1" : "#4A5D3C"}
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section id="servicios" className="py-24 md:py-32 section-sand relative overflow-hidden">
      {/* Organic top */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-cream" style={{ clipPath: "ellipse(55% 100% at 50% 0%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="font-accent text-xl text-forest">¿Qué puedo hacer por ti?</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-light mt-2">
              Mis servicios
            </h2>
            <p className="max-w-2xl mx-auto text-text-secondary mt-4 text-lg">
              Desde el diseño hasta el mantenimiento, me encargo de todo para que tú te enfoques en hacer crecer tu negocio.
            </p>
          </div>
        </FadeIn>

        {/* Services grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {SERVICES.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard
                service={service}
                isActive={activeService === service.id}
                onClick={() =>
                  setActiveService(
                    activeService === service.id ? null : service.id
                  )
                }
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Organic bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-cream" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
    </section>
  );
}
