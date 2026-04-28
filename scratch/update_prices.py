import re

# 1. Update precios/page.tsx
filepath = r'c:\Users\Pastelin\.gemini\antigravity\scratch\portfolio\app\precios\page.tsx'
content = open(filepath, 'r', encoding='utf-8').read()

maintenance_block = """            </div>
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
                <p className="text-sm text-text-muted mb-6">Ingresos pasivos para el negocio, paz mental para el cliente.</p>
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

          {/* FAQ SEO Section */}"""

new_content = content.replace("            </div>\n          </div>\n\n          {/* FAQ SEO Section */}", maintenance_block)
open(filepath, 'w', encoding='utf-8').write(new_content)
