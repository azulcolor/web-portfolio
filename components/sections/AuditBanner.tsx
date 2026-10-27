import { SITE_CONFIG } from "@/lib/constants";

export default function AuditBanner() {
  const whatsappUrl = `${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    "¡Hola Eduardo! Vi tu sitio web y me interesa solicitar la video-auditoría gratuita de 3 minutos para mi página web."
  )}`;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cream via-sand/40 to-cream relative overflow-hidden border-y border-caramel/20">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-mint/15 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 md:p-14 border border-caramel/30 shadow-xl shadow-caramel/5 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest/10 text-forest text-xs sm:text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
            Oferta sin costo para negocios en Mérida y México
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-light mb-6 tracking-tight leading-[1.15]">
            ¿Ya tienes página web y <br className="hidden sm:inline" />
            <span className="text-forest">no te genera clientes ni llamadas?</span>
          </h2>

          <p className="max-w-2xl mx-auto text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
            Más del 80% de las páginas web en Mérida tardan más de 4 segundos en cargar en celular y tienen errores técnicos de SEO que espantan a Google. Te grabo una <strong className="text-charcoal font-semibold">video-auditoría personalizada de 3 minutos</strong> analizando tu sitio actual.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
            <div className="p-4 rounded-2xl bg-sand/40 border border-caramel/20">
              <span className="text-forest text-xl mb-1 block">⚡</span>
              <p className="font-bold text-sm text-charcoal mb-0.5">Velocidad real móvil</p>
              <p className="text-xs text-text-secondary">Prueba con Core Web Vitals en conexiones celulares locales.</p>
            </div>
            <div className="p-4 rounded-2xl bg-sand/40 border border-caramel/20">
              <span className="text-forest text-xl mb-1 block">🔍</span>
              <p className="font-bold text-sm text-charcoal mb-0.5">Fugas de conversión</p>
              <p className="text-xs text-text-secondary">Identificamos por qué tus visitas se van sin mandar mensaje.</p>
            </div>
            <div className="p-4 rounded-2xl bg-sand/40 border border-caramel/20">
              <span className="text-forest text-xl mb-1 block">💡</span>
              <p className="font-bold text-sm text-charcoal mb-0.5">3 mejoras inmediatas</p>
              <p className="text-xs text-text-secondary">Puntos de acción claros que puedes implementar de inmediato.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-audit-whatsapp"
              className="group w-full sm:w-auto px-8 py-4 bg-forest text-cream font-medium rounded-full hover:bg-forest-dark transition-all duration-300 hover:shadow-xl hover:shadow-forest/20 hover:-translate-y-0.5 flex items-center justify-center gap-3 text-base"
            >
              <span>Solicitar mi video-auditoría gratis</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <p className="text-xs text-text-muted mt-4">
            Te respondo en video personalmente por WhatsApp en menos de 24 horas. Cero spam, cero presión de venta.
          </p>

        </div>
      </div>
    </section>
  );
}
