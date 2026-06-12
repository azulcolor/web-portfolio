import { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/sections/Footer"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export const metadata: Metadata = {
  title: "Precios de Diseño Web para Restaurantes | Eduardo Leal",
  description: "¿Cuánto cuesta una página web en México? Paquetes desde $8,500 MXN para restaurantes y marcas premium. Diseño rápido, hermoso y con SEO incluido. Cotiza gratis.",
  keywords: ["cuanto cuesta una pagina web en mexico", "precio diseño web", "paquetes paginas web", "cotizacion pagina web restaurante", "desarrollo web precios"],
  alternates: {
    canonical: "https://lealpastelin.com/precios",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una página web para restaurante en México en 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El precio de una página web profesional para restaurante en México va desde $8,500 MXN para una landing page de alto impacto, hasta $25,000 MXN o más para un e-commerce gastronómico con pedidos en línea. El precio depende del número de páginas, integraciones (sistema de reservas, pasarela de pagos) y nivel de personalidad de la marca. En todos los casos el precio incluye diseño exclusivo, programación en Next.js y configuración SEO inicial, sin cargos escondidos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se puede pagar en parcialidades o cuotas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. El esquema estándar es 50% al inicio del proyecto para apartar fecha y comenzar el diseño, y el 50% restante al momento de la entrega y publicación del sitio. Para proyectos más grandes (e-commerce o sitios multi-página), se pueden acordar tres pagos: inicio, aprobación del diseño y entrega final. Se acepta transferencia bancaria, tarjeta de crédito o OXXO Pay."
      }
    },
    {
      "@type": "Question",
      "name": "¿El precio incluye hosting, dominio y correos corporativos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El desarrollo del sitio y el diseño se cotizan por separado del hosting. Sin embargo, los planes de Cuidado Web incluyen hosting en servidores ultrarrápidos de Vercel, dominio .com y hasta 5 correos corporativos con Google Workspace. El hosting solo es aproximadamente $1,500 MXN al mes e incluye soporte técnico prioritario, actualizaciones de contenido y monitoreo de velocidad y disponibilidad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si el proyecto necesita cambios o ajustes después de la entrega?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada proyecto incluye un periodo de garantía de 15 días después de la entrega para corregir cualquier detalle sin costo adicional. Pasado ese periodo, los cambios menores (texto, fotos, precios) se cobran a una tarifa de $400 MXN por hora, o están incluidos ilimitadamente en el plan de Cuidado Web mensual. Los cambios estructurales grandes (nueva sección, integración nueva) se cotizan por separado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hay garantía si no me gusta el resultado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. El proceso está diseñado para eliminar sorpresas: antes de programar una sola línea de código se presenta el diseño visual completo (wireframes y maqueta en Figma) para aprobación. Solo se avanza con luz verde del cliente. Si tras las rondas de retroalimentación incluidas aún no estás satisfecho, se reembolsa el 50% del anticipo. En más de 4 años de trabajo, nunca ha habido un cliente insatisfecho."
      }
    }
  ]
};

export default function PreciosPage() {
  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado SEO */}
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
            <span className="font-accent text-2xl text-caramel mb-4 inline-block">
              Transparencia total
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal-light leading-tight mb-6">
              Inversión en tu <br />
              <span className="text-forest">Presencia Digital</span>
            </h1>
            <p className="text-lg text-text-secondary">
              No escondo mis precios porque confío en el valor que entrego. Una web premium no es un gasto, es tu mejor vendedor trabajando 24/7. Descubre cuánto cuesta una página web profesional diseñada para convertir visitantes en reservaciones.
            </p>
          </div>

          {/* Tarjetas de Precios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 relative z-10">
            {/* Paquete 1 */}
            <div className="bg-white rounded-3xl p-8 border border-sand shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col h-full animate-fade-in [animation-delay:200ms] opacity-0" style={{ animationFillMode: 'forwards' }}>
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-charcoal-light mb-2">Presencia Esencial</h3>
                <p className="text-sm text-text-secondary mb-6">Ideal para restaurantes nuevos o conceptos minimalistas.</p>
                <div className="flex items-end gap-2">
                  <span className="text-sm text-text-muted mb-2">Desde</span>
                  <span className="font-display text-5xl font-bold text-forest">$8,500</span>
                  <span className="text-sm text-text-muted mb-2">MXN</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm text-charcoal">
                  <svg className="w-5 h-5 text-caramel flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Landing Page de alto impacto (1 página)
                </li>
                <li className="flex items-start gap-3 text-sm text-charcoal">
                  <svg className="w-5 h-5 text-caramel flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Sección de Menú Digital
                </li>
                <li className="flex items-start gap-3 text-sm text-charcoal">
                  <svg className="w-5 h-5 text-caramel flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Botón flotante de WhatsApp/Reservas
                </li>
                <li className="flex items-start gap-3 text-sm text-charcoal">
                  <svg className="w-5 h-5 text-caramel flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Optimización SEO Local Básica
                </li>
                <li className="flex items-start gap-3 text-sm text-charcoal">
                  <svg className="w-5 h-5 text-caramel flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Diseño Responsivo (Móvil y Desktop)
                </li>
              </ul>
              <a href="#contacto" className="w-full py-4 text-center rounded-full border-2 border-forest text-forest font-medium hover:bg-forest hover:text-white transition-colors">
                Solicitar Cotización
              </a>
            </div>

            {/* Paquete 2 - Recomendado */}
            <div className="bg-forest rounded-3xl p-8 shadow-[0_20px_40px_rgb(74,93,60,0.2)] transform md:-translate-y-4 flex flex-col h-full animate-fade-in [animation-delay:400ms] opacity-0 relative" style={{ animationFillMode: 'forwards' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-caramel text-charcoal text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                El más elegido
              </div>
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-cream mb-2">Experiencia Premium</h3>
                <p className="text-sm text-mint-light/80 mb-6">Para marcas gastronómicas que quieren dominar su nicho local.</p>
                <div className="flex items-end gap-2">
                  <span className="text-sm text-mint-light/60 mb-2">Desde</span>
                  <span className="font-display text-5xl font-bold text-cream">$15,000</span>
                  <span className="text-sm text-mint-light/60 mb-2">MXN</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm text-cream">
                  <svg className="w-5 h-5 text-mint flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Sitio Multi-página (Inicio, Menú, Nosotros, Contacto)
                </li>
                <li className="flex items-start gap-3 text-sm text-cream">
                  <svg className="w-5 h-5 text-mint flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Integración con sistema de reservas (OpenTable, etc.)
                </li>
                <li className="flex items-start gap-3 text-sm text-cream">
                  <svg className="w-5 h-5 text-mint flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Animaciones personalizadas fluidas
                </li>
                <li className="flex items-start gap-3 text-sm text-cream">
                  <svg className="w-5 h-5 text-mint flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Optimización de Velocidad Extrema (Next.js)
                </li>
                <li className="flex items-start gap-3 text-sm text-cream">
                  <svg className="w-5 h-5 text-mint flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  SEO Avanzado (Schema Markup, Sitemaps)
                </li>
              </ul>
              <a href="#contacto" className="w-full py-4 text-center rounded-full bg-cream text-forest font-bold hover:bg-white transition-colors shadow-lg shadow-black/10">
                Elegir Experiencia
              </a>
            </div>

            {/* Paquete 3 */}
            <div className="bg-white rounded-3xl p-8 border border-sand shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col h-full animate-fade-in [animation-delay:600ms] opacity-0" style={{ animationFillMode: 'forwards' }}>
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-charcoal-light mb-2">E-commerce Gastronómico</h3>
                <p className="text-sm text-text-secondary mb-6">Pedidos en línea propios sin pagar el 30% a apps de delivery.</p>
                <div className="flex items-end gap-2">
                  <span className="text-sm text-text-muted mb-2">Desde</span>
                  <span className="font-display text-5xl font-bold text-forest">$25,000</span>
                  <span className="text-sm text-text-muted mb-2">MXN</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-sm text-charcoal">
                  <svg className="w-5 h-5 text-caramel flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Todo lo del paquete Experiencia Premium
                </li>
                <li className="flex items-start gap-3 text-sm text-charcoal">
                  <svg className="w-5 h-5 text-caramel flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Catálogo de productos/platillos autogestionable
                </li>
                <li className="flex items-start gap-3 text-sm text-charcoal">
                  <svg className="w-5 h-5 text-caramel flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Carrito de compras y Checkout seguro
                </li>
                <li className="flex items-start gap-3 text-sm text-charcoal">
                  <svg className="w-5 h-5 text-caramel flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Pasarela de pagos (Stripe, PayPal, MercadoPago)
                </li>
                <li className="flex items-start gap-3 text-sm text-charcoal">
                  <svg className="w-5 h-5 text-caramel flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Capacitación para gestionar pedidos
                </li>
              </ul>
              <a href="#contacto" className="w-full py-4 text-center rounded-full border-2 border-forest text-forest font-medium hover:bg-forest hover:text-white transition-colors">
                Hablemos del Proyecto
              </a>
            </div>
          </div>

          {/* Cuidado Web (Mantenimiento) Section */}
          <div className="max-w-4xl mx-auto mt-24 mb-20 bg-forest/5 border border-forest/20 rounded-3xl p-8 md:p-12 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <span className="bg-forest text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Tranquilidad Total</span>
                <h2 className="font-display text-3xl font-bold text-charcoal-light mb-4">Planes de Cuidado Web</h2>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Tu restaurante no se detiene, tu web tampoco debería. Ofrezco pólizas de mantenimiento para que tú te enfoques en tu cocina mientras yo me encargo de que tu menú, correos corporativos y servidor funcionen perfecto 24/7.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-charcoal">
                    <svg className="w-5 h-5 text-forest flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Hosting y Dominio:</strong> Alojamiento en servidores ultrarrápidos y renovación anual de tu .com.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-charcoal">
                    <svg className="w-5 h-5 text-forest flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Google Workspace:</strong> Correos profesionales corporativos.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-charcoal">
                    <svg className="w-5 h-5 text-forest flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Actualizaciones de Menú:</strong> Cambios de precios y platillos.</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-sand w-full text-center md:text-left">
                <h3 className="font-display text-2xl font-bold text-charcoal-light mb-2">Soporte Continuo VIP</h3>
                <div className="flex items-end justify-center md:justify-start gap-1 mb-6">
                  <span className="text-sm text-text-muted mb-2">Desde</span>
                  <span className="font-display text-4xl font-bold text-forest">$1,500</span>
                  <span className="text-sm text-text-muted mb-1">MXN / mes</span>
                </div>
                <a href="#contacto" className="block w-full py-3 text-center rounded-full bg-forest text-white font-medium hover:bg-charcoal transition-colors shadow-md">
                  Añadir al Paquete
                </a>
              </div>
            </div>
          </div>

          {/* FAQ SEO Section */}
          <div className="max-w-3xl mx-auto mt-32 mb-20">
            <h2 className="font-display text-4xl font-bold text-center text-charcoal-light mb-12">
              Preguntas Frecuentes
            </h2>
            
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-sand/30 p-6 rounded-2xl">
                <h3 className="font-bold text-lg text-forest mb-2">¿Cuánto cuesta una página web para restaurante en México en 2026?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  El precio va desde <strong>$8,500 MXN</strong> para una landing page de alto impacto, hasta <strong>$25,000 MXN</strong> o más para un e-commerce gastronómico completo. El precio siempre incluye diseño exclusivo, programación en Next.js y configuración SEO inicial. Sin cargos escondidos.
                </p>
              </div>
              
              {/* FAQ 2 */}
              <div className="bg-sand/30 p-6 rounded-2xl">
                <h3 className="font-bold text-lg text-forest mb-2">¿Se puede pagar en parcialidades o cuotas?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Sí. El esquema estándar es <strong>50% al inicio</strong> para apartar fecha y comenzar el diseño, y el <strong>50% restante a la entrega</strong>. Para proyectos grandes se puede dividir en tres pagos. Se acepta transferencia, tarjeta de crédito y OXXO Pay.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-sand/30 p-6 rounded-2xl">
                <h3 className="font-bold text-lg text-forest mb-2">¿El precio incluye hosting, dominio y correos corporativos?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  El desarrollo se cotiza por separado del hosting. Los planes de <strong>Cuidado Web</strong> desde $1,500 MXN/mes incluyen hosting ultrarrápido en Vercel, dominio .com y correos corporativos con Google Workspace. Todo en una sola cuota mensual sin sorpresas.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-sand/30 p-6 rounded-2xl">
                <h3 className="font-bold text-lg text-forest mb-2">¿Qué pasa si necesito cambios después de la entrega?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Tienes <strong>15 días de garantía</strong> para cualquier ajuste sin costo. Pasado ese periodo, los cambios menores se cobran a $400 MXN/hora, o están incluidos ilimitadamente en el plan de Cuidado Web mensual.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-sand/30 p-6 rounded-2xl">
                <h3 className="font-bold text-lg text-forest mb-2">¿Hay garantía si no me gusta el resultado?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Sí. Antes de programar una sola línea de código presento el <strong>diseño visual completo en Figma</strong> para tu aprobación. Solo se avanza con tu visto bueno. Si tras las rondas de retroalimentación aún no estás satisfecho, se reembolsa el 50% del anticipo. En más de 4 años, nunca ha habido un cliente insatisfecho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div id="contacto">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
