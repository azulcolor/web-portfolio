import os

filepath = r'c:\Users\Pastelin\.gemini\antigravity\scratch\portfolio\app\precios\page.tsx'
content = open(filepath, 'r', encoding='utf-8').read()

# Define the new FAQ block with all 5 targeted questions, standard classes and beautiful layout
new_faq_block = """          {/* FAQ SEO Section */}
          <div className="max-w-3xl mx-auto mt-32 mb-20">
            <h2 className="font-display text-4xl font-bold text-center text-charcoal-light mb-12">
              Preguntas Frecuentes
            </h2>
            
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-sand/30 p-6 rounded-2xl">
                <h3 className="font-bold text-lg text-forest mb-2">¿Por qué debería contratar una agencia de diseño web a medida en lugar de usar un creador de páginas web genérico como WordPress o Wix?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Los sistemas genéricos como WordPress, Wix o Squarespace añaden código basura innecesario, haciendo que tu sitio web sea lento y frustrante para tus clientes. Como <strong>agencia de diseño web</strong> a medida, desarrollamos soluciones exclusivas utilizando <strong>Next.js</strong> y <strong>Tailwind CSS</strong>. Esto nos permite construir código ultra-limpio de alto rendimiento. Para ti, esto se traduce en una velocidad de carga instantánea que retiene visitas y destruye las tasas de rebote en móviles, algo imposible de conseguir con un <strong>creador de páginas web</strong> tradicional.
                </p>
              </div>
              
              {/* FAQ 2 */}
              <div className="bg-sand/30 p-6 rounded-2xl">
                <h3 className="font-bold text-lg text-forest mb-2">¿Por qué es crucial contar con páginas web en Mérida diseñadas específicamente para el mercado local?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  El panorama empresarial en Yucatán está experimentando un crecimiento sin precedentes. Hoy en día, buscar <em>"paginas web merida"</em> arroja miles de competidores genéricos, pero muy pocos ofrecen una experiencia premium a medida. Contar con un sitio web diseñado localmente pero con estándares de calidad internacionales te posiciona instantáneamente por encima del 90% de la competencia local en Mérida. Google premia la relevancia geográfica y la excelente experiencia móvil, asegurando que tus clientes en zonas de alta plusvalía te encuentren en el primer segundo de búsqueda.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-sand/30 p-6 rounded-2xl">
                <h3 className="font-bold text-lg text-forest mb-2">¿Cuáles son las ventajas de sus páginas web de restaurantes y negocios de comida rápida en comparación con menús en PDF?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Obligar a un comensal con hambre a descargar un pesado archivo PDF en su celular es una de las mayores causas de pérdida de clientes en el sector gastronómico. Nuestras <strong>paginas web de restaurantes</strong> y negocios de comida rápida ofrecen menús interactivos, nativos y ultra-rápidos que se adaptan a cualquier pantalla de teléfono móvil. El cliente puede explorar los platillos, ver precios actualizados y reservar mesa en un solo clic, sin descargas. Además, un menú digital en HTML es rastreable por los motores de búsqueda, permitiendo que tu platillo estrella posicione en tu zona de reparto.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-sand/30 p-6 rounded-2xl">
                <h3 className="font-bold text-lg text-forest mb-2">¿Cuánto tiempo toma el desarrollo a medida y qué incluye su servicio de diseño web?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Un desarrollo a medida de alta calidad suele tomar entre 2 y 4 semanas, dependiendo de la complejidad y el alcance de las funcionalidades requeridas. A diferencia de un <strong>creador de páginas web</strong> automático, nuestro servicio incluye un proceso meticuloso: análisis inicial de marca, diseño de interfaz UX/UI exclusivo, programación nativa de alto rendimiento con <strong>Next.js</strong>, optimización de velocidad de carga móvil extrema, integración de analíticas avanzadas y configuración SEO técnica lista para indexar en Google.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-sand/30 p-6 rounded-2xl">
                <h3 className="font-bold text-lg text-forest mb-2">¿Sus páginas web están optimizadas para posicionamiento SEO desde el primer día?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Absolutamente. La mayoría de los desarrolladores entregan la web y después intentan "arreglar" el SEO. Nosotros construimos con SEO en el núcleo. Gracias a la tecnología de Server-Side Rendering (SSR) y generación estática de <strong>Next.js</strong>, Google no tiene que esperar a que el navegador de tus clientes cargue scripts pesados; lee la información de tu negocio inmediatamente. Entregamos sitios web con sitemaps automatizados, metadata optimizada e infraestructura de carga ultra veloz para que alcances las primeras posiciones en Google desde el lanzamiento.
                </p>
              </div>
            </div>
          </div>"""

# Insert the JSON-LD schema declaration before the default export or inside the JSX
json_ld_schema = """const faqSchema = {
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
        "text": "El panorama empresarial en Yucatán está experimentando un crecimiento sin precedentes. Hoy en día, buscar 'paginas web merida' arroja miles de competidores genéricos, pero muy pocos ofrecen una experiencia premium a medida. Contar con un sitio web diseñado localmente pero con estándares de calidad internacionales te posiciona instantáneamente por encima del 90% de la competencia local en Mérida. Google premia la relevancia geográfica y la excelente experiencia móvil, asegurando que tus clientes en zonas de alta plusvalía te encuentren en el primer segundo de búsqueda."
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
"""

# Let's replace the FAQ block first
old_faq_block = """          {/* FAQ SEO Section */}
          <div className="max-w-3xl mx-auto mt-32 mb-20">
            <h2 className="font-display text-4xl font-bold text-center text-charcoal-light mb-12">
              Preguntas Frecuentes
            </h2>
            
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-sand/30 p-6 rounded-2xl">
                <h3 className="font-bold text-lg text-forest mb-2">¿Cuánto tarda el desarrollo de una página web?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Depende del paquete elegido. Una "Presencia Esencial" suele tomar entre 1 a 2 semanas, mientras que una "Experiencia Premium" toma de 3 a 4 semanas. Me enfoco en entregar código limpio y optimizado, no uso plantillas genéricas.
                </p>
              </div>
              
              {/* FAQ 2 */}
              <div className="bg-sand/30 p-6 rounded-2xl">
                <h3 className="font-bold text-lg text-forest mb-2">¿Por qué tus precios son diferentes a los de agencias de 3 mil pesos?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Porque yo no uso plantillas lentas de WordPress. Escribo código desde cero usando tecnologías modernas (Next.js, React). Esto garantiza que tu sitio cargue en menos de 2 segundos, lo que retiene a tus visitantes y le dice a Google que tu página es de calidad. Además, el diseño visual es 100% hecho a la medida de tu marca.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-sand/30 p-6 rounded-2xl">
                <h3 className="font-bold text-lg text-forest mb-2">¿Tengo que pagar mensualidades?</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  El diseño y desarrollo es un pago único. Solamente existen costos operativos de terceros: el hosting (alojamiento) y tu dominio (.com), que juntos suelen costar entre $1,000 y $2,000 MXN al año. Ofrezco pólizas de mantenimiento opcionales si requieres cambios constantes en tu menú.
                </p>
              </div>
            </div>
          </div>"""

content = content.replace(old_faq_block, new_faq_block)

# Insert the JSON-LD script tag in the page component. We can put it right under `<Navbar />`.
json_ld_script_tag = """      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />"""

content = content.replace("      <Navbar />", json_ld_script_tag)

# Let's insert the `faqSchema` variable definition right above `export default function PreciosPage()`
content = content.replace("export default function PreciosPage()", json_ld_schema + "\nexport default function PreciosPage()")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("FAQ y Schema JSON-LD insertados correctamente en /precios.")
