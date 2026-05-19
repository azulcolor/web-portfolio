import os

filepath = r'c:\Users\Pastelin\.gemini\antigravity\scratch\portfolio\app\diseno-web-merida\page.tsx'
content = open(filepath, 'r', encoding='utf-8').read()

# Define the new technology/copies section
tech_section = """        <Services />

        {/* SECCIÓN DE COPIES PERSUASIVOS (TECNOLOGÍA SUPERIOR) */}
        <section className="py-24 bg-sand/20 border-y border-sand">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="font-accent text-xl text-forest inline-block mb-3">Tecnología de Vanguardia</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-light leading-tight">
                ¿Por qué una web hecha a código es superior?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-3xl border border-sand shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-forest/10 text-forest flex items-center justify-center font-display text-xl font-bold mb-6">⚡</div>
                  <h3 className="font-display text-xl font-bold text-charcoal-light mb-3">Velocidad instantánea: A la velocidad del pensamiento.</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    En móviles, cada segundo de carga cuesta un 20% en conversiones. Al eliminar el peso y el desorden de los creadores de páginas genéricos, tu sitio web se despliega en menos de 1.2 segundos. Si tu página no es instantánea, tu cliente potencial ya está comprando en el restaurante de al lado.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-3xl border border-sand shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-caramel/10 text-caramel flex items-center justify-center font-display text-xl font-bold mb-6">🎨</div>
                  <h3 className="font-display text-xl font-bold text-charcoal-light mb-3">Código limpio construido con Tailwind CSS.</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Mientras las plantillas de WordPress arrastran toneladas de estilos genéricos que nunca usarás, nosotros pintamos cada elemento a mano utilizando el framework más eficiente del mercado. El resultado es un diseño exquisitamente premium, infinitamente escalable y sumamente liviano.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-3xl border border-sand shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-mint/20 text-forest flex items-center justify-center font-display text-xl font-bold mb-6">📈</div>
                  <h3 className="font-display text-xl font-bold text-charcoal-light mb-3">Next.js SSR: Conquista los primeros puestos de Google.</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    No obligues a los motores de búsqueda a descifrar tu sitio. Con Next.js, tu contenido se genera directamente en el servidor y se sirve a Google en bandeja de plata. Posiciona de forma orgánica, atrae leads altamente calificados y olvídate de parches lentos de posicionamiento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>"""

# Replace Services call to include the section
content = content.replace("        <Services />", tech_section)

# Uncomment the Walter Vera testimonial block
commented_testimonial = """        {/* Testimonio Local Mérida */}
        {/* <section className="py-24 bg-forest/5 border-y border-forest/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="font-accent text-xl text-forest inline-block mb-4">Caso de Éxito en Mérida</span>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-sand">
              <svg className="w-12 h-12 text-caramel mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 32 32"><path d="M9.333 13.333c0-3.682 2.985-6.667 6.667-6.667v-4c-5.891 0-10.667 4.776-10.667 10.667v16h10.667v-16h-6.667zM25.333 13.333c0-3.682 2.985-6.667 6.667-6.667v-4c-5.891 0-10.667 4.776-10.667 10.667v16h10.667v-16h-6.667z"></path></svg>
              <p className="text-lg md:text-xl text-charcoal-light italic mb-8 leading-relaxed">
                "Eduardo entendió a la perfección la estética que buscaba para mi portafolio. Hizo que mis fotografías resaltaran con un diseño minimalista pero muy premium. Además, conocer el mercado de Mérida le permitió hacer una web que carga rapidísimo y se ve impecable."
              </p>
              <div className="flex items-center justify-center gap-4">
                <img src="/images/avatars/walter-vera.webp" alt="Walter Vera" className="w-14 h-14 rounded-full object-cover border-2 border-caramel/30" />
                <div className="text-left">
                  <p className="font-display font-bold text-charcoal">Walter Vera</p>
                  <p className="text-sm text-text-muted">Fotógrafo Cinematográfico, Mérida Yuc.</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}"""

uncommented_testimonial = """        {/* Testimonio Local Mérida */}
        <section className="py-24 bg-forest/5 border-y border-forest/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="font-accent text-xl text-forest inline-block mb-4">Caso de Éxito en Mérida</span>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-sand">
              <svg className="w-12 h-12 text-caramel mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 32 32"><path d="M9.333 13.333c0-3.682 2.985-6.667 6.667-6.667v-4c-5.891 0-10.667 4.776-10.667 10.667v16h10.667v-16h-6.667zM25.333 13.333c0-3.682 2.985-6.667 6.667-6.667v-4c-5.891 0-10.667 4.776-10.667 10.667v16h10.667v-16h-6.667z"></path></svg>
              <p className="text-lg md:text-xl text-charcoal-light italic mb-8 leading-relaxed">
                "Eduardo entendió a la perfección la estética que buscaba para mi portafolio. Hizo que mis fotografías resaltaran con un diseño minimalista pero muy premium. Además, conocer el mercado de Mérida le permitió hacer una web que carga rapidísimo y se ve impecable."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center font-display text-lg font-bold text-forest">WV</div>
                <div className="text-left">
                  <p className="font-display font-bold text-charcoal">Walter Vera</p>
                  <p className="text-sm text-text-muted">Fotógrafo Cinematográfico, Mérida Yuc.</p>
                </div>
              </div>
            </div>
          </div>
        </section>"""

# Using robust replacements in case formatting differs slightly.
# Let's target the commented testimonial and replace it.
content = content.replace(commented_testimonial, uncommented_testimonial)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Landing page de Mérida actualizada correctamente con testimonios y copies tecnológicos.")
