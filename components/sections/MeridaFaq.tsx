"use client";

import { useState } from "react";

const meridaFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Por qué las empresas y negocios en Mérida necesitan una página web profesional en 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mérida vive una expansión económica y comercial sin precedentes. Colonias como Altabrisa, Montejo, Temozón Norte, Santa Gertrudis Copó y las zonas industriales reciben clientes e inversionistas exigentes que buscan en Google antes de tomar decisiones. Si tu empresa o negocio no aparece con una web rápida, moderna y bien posicionada, tu competencia se queda con esos clientes. En 2026, una web profesional es la principal herramienta de credibilidad y ventas para cualquier negocio serio en Yucatán."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué zonas y colonias de Mérida atiende Eduardo Leal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trabajo con empresas, clínicas, comercios y marcas de toda la ciudad de Mérida y su zona metropolitana: Altabrisa, Temozón Norte, Cholul, Centro Histórico, García Ginerés, Itzimná, Francisco de Montejo, Parque Industrial Yucatán y municipios cercanos como Progreso, Valladolid e Izamal. Al radicar localmente en Yucatán, podemos tener reuniones presenciales para planificar tu proyecto y revisar avances."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tarda en posicionar mi sitio web en Google y Google Maps en Mérida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La indexación técnica inicial toma entre 48 y 72 horas. Para empezar a ganar posiciones en los primeros resultados locales de Mérida (como 'diseño web Mérida' o servicios específicos de tu sector), los primeros resultados sólidos se observan entre los 30 y 90 días, combinando un sitio ultra veloz en Next.js con una ficha optimizada de Google Business Profile y buenas reseñas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué diferencia hay entre una web hecha a medida con Next.js vs una plantilla de WordPress o Wix?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las plantillas de WordPress y Wix vienen sobrecargadas con código innecesario, plugins lentos y fallas de seguridad constantes que hacen que tu sitio tarde más de 4 segundos en cargar (lo que castiga tu posicionamiento en Google y duplica el rebote de clientes en celulares). Una web programada a medida con Next.js carga en menos de 1.2 segundos, es 100% segura, escala sin romperse y está optimizada a nivel de servidor para que Google la priorice."
      }
    },
    {
      "@type": "Question",
      "name": "¿Vale la pena tener una web si mi negocio ya tiene seguidores en Instagram o Facebook?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las redes sociales y tu sitio web cumplen funciones distintas. Las redes sociales generan atención, pero Google es donde la gente busca cuando ya tiene una necesidad urgente y la intención de contratar o comprar. Si alguien busca en Google tu servicio en Mérida, tus publicaciones de Instagram no van a aparecer; tu página web sí. Además, en tu propia web no dependes de cambios de algoritmo ni de publicidad pagada constante para que te encuentren."
      }
    }
  ]
};

const MERIDA_FAQS = [
  {
    question: "¿Por qué las empresas y negocios en Mérida necesitan una página web profesional en 2026?",
    answer: "Mérida vive una expansión económica y comercial sin precedentes. Colonias como Altabrisa, Montejo, Temozón Norte, Santa Gertrudis Copó y zonas industriales reciben clientes e inversionistas exigentes que buscan en Google antes de tomar decisiones. Si tu negocio no aparece con una web rápida, moderna y bien posicionada, tu competencia se queda con esos clientes.",
  },
  {
    question: "¿Qué zonas y colonias de Mérida atiende Eduardo Leal?",
    answer: "Trabajo con empresas, clínicas, restaurantes y marcas de toda la ciudad de Mérida y zona metropolitana: Altabrisa, Temozón Norte, Cholul, Centro Histórico, García Ginerés, Itzimná, Francisco de Montejo y municipios cercanos como Progreso o Valladolid. Al radicar en Yucatán, podemos reunirnos presencialmente para planificar tu proyecto.",
  },
  {
    question: "¿Cuánto tarda en posicionar mi sitio web en Google y Google Maps en Mérida?",
    answer: "La indexación inicial toma entre 48 y 72 horas. Para escalar a las primeras posiciones en búsquedas locales de Mérida, el trabajo de SEO técnico en Next.js sumado a una ficha optimizada en Google Business Profile comienza a dar resultados sólidos entre los 30 y 90 días.",
  },
  {
    question: "¿Qué diferencia hay entre una web hecha a medida vs una plantilla de WordPress o Wix?",
    answer: "Las plantillas de WordPress y Wix arrastran decenas de plugins pesados que hacen que tu página tarde más de 4 segundos en cargar en celular, perdiendo más de la mitad de tus visitas. Desarrollar a medida con Next.js garantiza tiempos de carga inferiores a 1.2 segundos, máxima seguridad y un rendimiento que Google premia.",
  },
  {
    question: "¿Vale la pena tener una web si mi negocio ya tiene seguidores en redes sociales?",
    answer: "Las redes sociales inspiran, pero Google es el lugar al que van los clientes cuando ya están listos para cotizar y comprar. Una web propia te da autoridad inmediata, funciona 24/7 capturando prospectos y no depende de los caprichos del algoritmo de Instagram ni de pagar anuncios eternamente.",
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
          <span className="font-accent text-2xl text-forest inline-block mb-3">Resolviendo tus dudas</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal-light leading-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-text-secondary text-sm md:text-base mt-4">
            Todo lo que necesitas saber sobre diseño y desarrollo web para empresas y negocios en Mérida, Yucatán.
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
