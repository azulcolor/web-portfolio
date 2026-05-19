"use client";

import { useState } from "react";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Por qué debería contratar una agencia de diseño web a medida en lugar de usar un creador de páginas web genérico como WordPress o Wix?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los sistemas genéricos como WordPress, Wix o Squarespace añaden código basura innecesario, haciendo que tu sitio web sea lento y frustrante para tus clientes. Como agencia de diseño web a medida, desarrollamos soluciones exclusivas utilizando Next.js y Tailwind CSS. Esto nos permite construir código ultra-limpio de alto rendimiento. Para ti, esto se traduce en una velocidad de carga instantánea que retiene visitas y destruye las tasas de rebote en móviles, algo imposible de conseguir con un creador de páginas web tradicional."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué es crucial contar con páginas web en Mérida diseñadas específicamente para el mercado local?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El panorama empresarial en Yucatán está expermientando un crecimiento sin precedentes. Hoy en día, buscar 'paginas web merida' arroja miles de competidores genéricos, pero muy pocos ofrecen una experiencia premium a medida. Contar con un sitio web diseñado localmente pero con estándares de calidad internacionales te posiciona instantáneamente por encima del 90% de la competencia local en Mérida. Google premia la relevancia geográfica y la excelente experiencia móvil, asegurando que tus clientes en zonas de alta plusvalía te encuentren en el primer segundo de búsqueda."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuáles son las ventajas de sus páginas web de restaurantes y negocios de comida rápida en comparación con menús en PDF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Obligar a un comensal con hambre a descargar un pesado archivo PDF en su celular es una de las mayores causas de pérdida de clientes en el sector gastronómico. Nuestras paginas web de restaurantes y negocios de comida rápida ofrecen menús interactivos, nativos y ultra-rápidos que se adaptan a cualquier pantalla de teléfono móvil. El cliente puede explorar los platillos, ver precios actualizados y reservar mesa en un solo clic, sin descargas. Además, un menú digital en HTML es rastreable por los motores de búsqueda, permitiendo que tu platillo estrella posicione en tu zona de reparto."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo toma el desarrollo a medida y qué incluye su servicio de diseño web?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un desarrollo a medida de alta calidad suele tomar entre 2 y 4 semanas, dependiendo de la complejidad y el alcance de las funcionalidades requeridas. A diferencia de un creador de páginas web automático, nuestro servicio incluye un proceso meticuloso: análisis inicial de marca, diseño de interfaz UX/UI exclusivo, programación nativa de alto rendimiento con Next.js, optimización de velocidad de carga móvil extrema, integración de analíticas avanzadas y configuración SEO técnica lista para indexar en Google."
      }
    },
    {
      "@type": "Question",
      "name": "¿Sus páginas web están optimizadas para posicionamiento SEO desde el primer día?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutamente. La mayoría de los desarrolladores entregan la web y después intentan 'arreglar' el SEO. Nosotros construimos con SEO en el núcleo. Gracias a la tecnología de Server-Side Rendering (SSR) y generación estática de Next.js, Google no tiene que esperar a que el navegador de tus clientes cargue scripts pesados; lee la información de tu negocio inmediatamente. Entregamos sitios web con sitemaps automatizados, metadata optimizada e infraestructura de carga ultra veloz para que alcances las primeras posiciones en Google desde el lanzamiento."
      }
    }
  ]
};

const FAQS = [
  {
    question: "¿Por qué contratar una agencia de diseño web a medida en lugar de usar un creador de páginas web genérico?",
    answer: "Los sistemas genéricos como WordPress o Wix añaden código basura innecesario, ralentizando la experiencia. Al desarrollar a medida con Next.js y Tailwind CSS, eliminamos la lentitud por completo. El resultado es un sitio web ultra-veloz, seguro y optimizado para retener visitas en dispositivos móviles.",
  },
  {
    question: "¿Por qué mi negocio necesita páginas web en Mérida diseñadas localmente?",
    answer: "Mérida vive un boom comercial inmenso. Destacar requiere más que una plantilla genérica. Un desarrollo local con estándares internacionales te posiciona instantáneamente por encima de tus competidores. Google premia la relevancia geográfica, facilitando que te encuentren en zonas clave de la ciudad.",
  },
  {
    question: "¿Qué ventajas ofrecen sus páginas web de restaurantes frente a los menús en PDF?",
    answer: "Los menús en PDF son lentos de cargar, incómodos y no se posicionan en Google. Nuestras páginas web para restaurantes ofrecen menús interactivos integrados. Tus comensales navegan al instante, reservan con un clic y Google indexa tus platillos favoritos para búsquedas locales.",
  },
  {
    question: "¿Cuánto tiempo toma el desarrollo y qué incluye su servicio de diseño web?",
    answer: "Un proyecto premium toma entre 2 y 4 semanas. Incluye consultoría UX/UI exclusiva, diseño visual a medida, optimización técnica extrema de velocidad de carga (Core Web Vitals), analíticas de comportamiento del usuario y configuración SEO completa inicial.",
  },
  {
    question: "¿Las páginas web están optimizadas para SEO desde el primer día?",
    answer: "Sí. No dejamos el SEO para el final. A través del Server-Side Rendering (SSR) de Next.js, Google lee el contenido de tu sitio al instante desde el servidor. Esto acelera drásticamente tu indexación y te ayuda a escalar posiciones de manera orgánica mucho más rápido.",
  }
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
