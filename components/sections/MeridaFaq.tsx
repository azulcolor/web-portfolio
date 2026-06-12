"use client";

import { useState } from "react";

const meridaFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Por qué los restaurantes en Mérida necesitan una página web profesional en 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mérida vive uno de los booms gastronómicos más importantes de México. Colonias como Altabrisa, Santa Ana, Temozón Norte y el corredor de Paseo de Montejo reciben a un perfil de comensal exigente que busca opciones en Google antes de salir de casa. Si tu restaurante no aparece con una web bonita, rápida y bien posicionada, tu competencia — que sí la tiene — se queda con esa reservación. En 2026, una web premium no es un lujo, es la diferencia entre estar lleno o no."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué zonas y colonias de Mérida atiende Eduardo Leal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Se trabaja con negocios de toda la ciudad de Mérida y área metropolitana: Altabrisa, Norte, Santa Gertrudis Copó, Temozón, Cholul, Dzitya, Centro Histórico, Itzimná, García Ginerés, Francisco de Montejo y municipios cercanos como Progreso, Valladolid, Izamal y Tizimín. Al ser un desarrollador freelance local con base en Yucatán, se pueden hacer reuniones presenciales para revisar avances y hacer el lanzamiento juntos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tarda en aparecer mi restaurante en Google Maps y búsquedas locales de Mérida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Con la web lista y bien configurada, Google puede indexar tu negocio en 48 a 72 horas. Sin embargo, para aparecer en las primeras posiciones de búsquedas como 'restaurantes en Mérida' o 'cena romántica Altabrisa Mérida', se necesita también optimizar tu perfil de Google Business Profile, tener reseñas positivas y construir autoridad local de forma gradual. La combinación de una web veloz en Next.js + Google Business Profile optimizado es la fórmula que mejor funciona en el mercado yucateco actualmente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puede mi web de restaurante integrarse con plataformas de reservaciones o pedidos a domicilio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Se pueden integrar sistemas de reservaciones como OpenTable, Resy o formularios propios de reserva con confirmación por WhatsApp. Para pedidos a domicilio, la web puede conectarse con tu catálogo propio o redirigir de forma inteligente a tu tienda en Rappi o UberEats según la disponibilidad horaria. El objetivo es que la web de tu restaurante sea el centro de tu ecosistema digital, no solo una tarjeta de presentación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Vale la pena invertir en una web de restaurante si ya tengo muchos seguidores en Instagram?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Instagram y una web son complementarios, no competencia. Instagram es excelente para inspirar y crear comunidad, pero Google es donde los clientes van cuando ya quieren comer. Si alguien busca 'sushi en Mérida' o 'brunch Paseo de Montejo', Instagram no aparece en esos resultados — tu web sí. Además, una web propia no depende del algoritmo de ninguna red social: es tuya, siempre visible, y funciona las 24 horas capturando clientes que de otra forma se irían con tu competencia."
      }
    }
  ]
};

const MERIDA_FAQS = [
  {
    question: "¿Por qué los restaurantes en Mérida necesitan una página web profesional en 2026?",
    answer: "Mérida vive uno de los booms gastronómicos más importantes de México. Colonias como Altabrisa, Santa Ana, Temozón Norte y Paseo de Montejo reciben a un comensal que busca opciones en Google antes de salir de casa. Si tu restaurante no aparece con una web bonita, rápida y bien posicionada, tu competencia — que sí la tiene — se queda con esa reservación. En 2026, una web premium es la diferencia entre estar lleno o no.",
  },
  {
    question: "¿Qué zonas de Mérida atiende Eduardo Leal?",
    answer: "Trabajo con negocios de toda la ciudad: Altabrisa, Norte, Santa Gertrudis Copó, Temozón, Cholul, Centro Histórico, Itzimná, García Ginerés y municipios como Progreso, Valladolid e Izamal. Al ser local en Yucatán, podemos hacer reuniones presenciales para revisar avances y hacer el lanzamiento juntos.",
  },
  {
    question: "¿Cuánto tarda en aparecer mi restaurante en búsquedas locales de Mérida?",
    answer: "Con la web lista y bien configurada, Google puede indexar tu negocio en 48 a 72 horas. Para aparecer en primeras posiciones de búsquedas como 'restaurantes en Mérida' o 'cena romántica Altabrisa', también se necesita optimizar tu Google Business Profile y construir autoridad local. La combinación Next.js + GBP optimizado es la fórmula que mejor funciona en Yucatán actualmente.",
  },
  {
    question: "¿Puede mi web integrar reservaciones y pedidos a domicilio?",
    answer: "Sí. Puedo integrar sistemas como OpenTable, Resy o formularios propios con confirmación por WhatsApp. Para pedidos a domicilio, la web puede conectarse con tu catálogo propio o redirigir inteligentemente a Rappi o UberEats según horario. El objetivo es que tu web sea el centro de tu ecosistema digital, no solo una tarjeta de presentación.",
  },
  {
    question: "¿Vale la pena invertir en una web si ya tengo muchos seguidores en Instagram?",
    answer: "Instagram y tu web son complementarios. Instagram inspira y crea comunidad, pero Google es donde los clientes van cuando ya quieren comer. Si alguien busca 'sushi en Mérida' o 'brunch Paseo de Montejo', Instagram no aparece — tu web sí. Además, tu web no depende del algoritmo de nadie: es tuya, siempre visible, captando clientes las 24 horas.",
  },
];

export default function MeridaFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="py-24 bg-cream relative overflow-hidden" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(meridaFaqSchema) }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-[10%] w-[300px] h-[300px] rounded-full bg-caramel/5 blur-[100px]" />
      </div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-accent text-2xl text-forest inline-block mb-3">Tus dudas sobre Mérida</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal-light leading-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-text-secondary text-sm md:text-base mt-4">
            Todo lo que necesitas saber sobre diseño web para el mercado gastronómico de Mérida, Yucatán.
          </p>
        </div>
        <div className="space-y-4">
          {MERIDA_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-sand overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)]"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left py-6 px-8 flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="font-display text-base md:text-lg font-bold text-charcoal-light hover:text-forest transition-colors">
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full bg-sand flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-forest text-white" : "text-charcoal"}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px] border-t border-sand" : "max-h-0"} overflow-hidden`}>
                  <p className="py-6 px-8 text-text-secondary text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
