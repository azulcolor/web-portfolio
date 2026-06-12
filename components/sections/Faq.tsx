"use client";

import { useState } from "react";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué hace diferente a Eduardo Leal de una agencia de diseño web grande?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trabajar directamente con Eduardo significa cero intermediarios. No hay un ejecutivo de ventas que te vende y luego le pasa tu proyecto a un diseñador junior que nunca conocerás. Eduardo mismo diseña, programa y optimiza cada pixel de tu sitio. Eso se traduce en más atención al detalle, comunicación directa por WhatsApp y un resultado final que realmente refleja tu marca, no una plantilla genérica."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo es el proceso de trabajo desde el inicio hasta la entrega?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Empezamos con una llamada de 30 minutos para entender tu negocio, tu cliente ideal y tus metas. Después se diseña y programa tu sitio en Next.js con Tailwind CSS — tecnologías de primer mundo que usan Vercel, Airbnb y grandes marcas. En 2 a 4 semanas recibes un sitio ultra-rápido, con SEO configurado y listo para atraer clientes. Sin sorpresas, sin demoras."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué usar Next.js en lugar de WordPress para el sitio de mi restaurante o marca?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WordPress fue diseñado en 2003 para blogs. Next.js fue diseñado para la web de hoy. Con Next.js tu sitio carga en menos de 1.5 segundos, Google lo indexa instantáneamente porque el contenido viene pre-renderizado desde el servidor, y no existe riesgo de que un plugin desactualizado tire tu sitio. Para restaurantes y marcas premium, la primera impresión lo es todo — y WordPress simplemente no puede competir en velocidad ni elegancia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo actualizar el contenido de mi sitio yo solo después de la entrega?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende de lo que necesites. Para cambios sencillos como texto, precios o fotos, se entrega una guía paso a paso o lo hacemos juntos en una llamada. Si necesitas actualizaciones frecuentes como menú de temporada, eventos o nuevos platillos, se puede integrar un panel de administración sencillo. También existen planes de mantenimiento donde Eduardo se encarga de todo por una cuota mensual muy accesible."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si no quedo satisfecho con el resultado del diseño?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Antes de escribir una línea de código, se presenta el diseño completo para tu aprobación. No se avanza hasta que estés convencido. Durante el desarrollo tienes rondas de retroalimentación incluidas. El objetivo es que al recibir tu sitio digas exactamente lo que imaginabas — eso es lo que define la reputación de Eduardo Leal y el 100% de clientes satisfechos que ha mantenido."
      }
    }
  ]
};

const FAQS = [
  {
    question: "¿Qué hace diferente a Eduardo Leal de una agencia de diseño web grande?",
    answer: "Trabajar directamente conmigo significa cero intermediarios. No hay un ejecutivo de ventas que te vende y luego le pasa tu proyecto a un diseñador junior que nunca conocerás. Yo mismo diseño, programo y optimizo cada pixel de tu sitio. Eso se traduce en más atención al detalle, comunicación directa por WhatsApp y un resultado final que realmente refleja tu marca, no una plantilla genérica.",
  },
  {
    question: "¿Cómo es tu proceso de trabajo desde el inicio hasta la entrega?",
    answer: "Empezamos con una llamada de 30 minutos para entender tu negocio, tu cliente ideal y tus metas. Después diseño y programo tu sitio en Next.js con Tailwind CSS — tecnologías de primer mundo que usan Vercel, Airbnb y grandes marcas. En 2 a 4 semanas te entrego un sitio ultra-rápido, con SEO configurado y listo para atraer clientes. Sin sorpresas, sin demoras.",
  },
  {
    question: "¿Por qué usas Next.js en lugar de WordPress?",
    answer: "WordPress fue diseñado en 2003 para blogs. Next.js fue diseñado para la web de hoy. Con Next.js tu sitio carga en menos de 1.5 segundos, Google lo indexa instantáneamente porque el contenido viene pre-renderizado desde el servidor, y no existe riesgo de que un plugin desactualizado tire tu sitio. Para restaurantes y marcas premium, la primera impresión lo es todo — y WordPress simplemente no puede competir en velocidad ni elegancia.",
  },
  {
    question: "¿Puedo actualizar el contenido de mi sitio yo solo después de la entrega?",
    answer: "Depende de lo que necesites. Para cambios sencillos como texto, precios o fotos, te entrego una guía paso a paso o lo hacemos juntos en una llamada. Si necesitas actualizaciones frecuentes (menú de temporada, eventos, nuevos platillos), puedo integrar un panel de administración sencillo o simplemente ofrezco planes de mantenimiento donde me encargo de todo por una cuota mensual muy accesible.",
  },
  {
    question: "¿Qué pasa si no quedo satisfecho con el resultado?",
    answer: "Antes de escribir una línea de código, te presento el diseño completo para tu aprobación. No avanzo hasta que estés convencido. Durante el desarrollo tienes rondas de retroalimentación incluidas. Mi objetivo es que al recibir tu sitio digas '¡esto es exactamente lo que imaginaba!' — eso es lo que define mi reputación y el 100% de clientes satisfechos que he mantenido.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-cream relative overflow-hidden" id="faq">
      {/* Script de Datos Estructurados JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            Derribando mitos y explicando cómo transformamos tecnología de punta en ventas constantes para tu negocio.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
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
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-sand" : "max-h-0"
                  } overflow-hidden`}
                >
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
