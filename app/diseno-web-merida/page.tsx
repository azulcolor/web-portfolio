import { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import { HeroAnimations } from "@/components/animations/HeroAnimations";
import CtaButtons from "@/components/hero/CtaButtons";

const Projects = dynamic(() => import("@/components/sections/Projects"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Process  = dynamic(() => import("@/components/sections/Process"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Contact  = dynamic(() => import("@/components/sections/Contact"));
const Footer   = dynamic(() => import("@/components/sections/Footer"));

export const metadata: Metadata = {
  title: "Diseño Web para Restaurantes en Mérida | Eduardo Leal",
  description: "Especialista en diseño de páginas web para restaurantes, cafeterías y marcas gastronómicas en Mérida, Yucatán. Aumenta tus reservaciones con una web premium que cargue al instante.",
  keywords: ["diseño web Mérida", "páginas web para restaurantes en Mérida", "agencia de diseño web en Mérida", "desarrollador web Mérida", "creación de páginas web Mérida Yucatán"],
  alternates: {
    canonical: "https://lealpastelin.com/diseno-web-merida",
  },
  openGraph: {
    title: "Diseño Web para Restaurantes en Mérida | Eduardo Leal",
    description: "Especialista en diseño de páginas web para restaurantes en Mérida. Aumenta tus reservaciones con una web premium.",
    url: "https://lealpastelin.com/diseno-web-merida",
  }
};

export default function DisenoWebMerida() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO ESPECÍFICO PARA MÉRIDA */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-mint/20 blur-[120px]" />
            <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-caramel/15 blur-[100px]" />
            <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-sage/10 blur-[80px]" />
            <HeroAnimations />
          </div>

          <div className="max-w-7xl mx-auto px-6 text-center relative z-10 animate-fade-in opacity-100">
            <span className="font-accent text-2xl md:text-3xl text-forest inline-block mb-4">
              Especialista web en Mérida, Yuc. 🌿
            </span>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight text-charcoal-light mb-6">
              Diseño Web Premium para <br className="hidden sm:block" />
              <span className="text-forest">Restaurantes en Mérida</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-text-secondary leading-relaxed mb-10">
              ¿Tu local está increíble en Paseo de Montejo, Altabrisa o Temozón, pero tu menú web tarda en cargar? En medio del boom gastronómico yucateco, un PDF ya no es suficiente. Creo experiencias digitales nativas y ultra rápidas que transforman visitas en reservaciones.
            </p>

            <CtaButtons />
            
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16 pt-8 border-t border-caramel/20">
              <div className="text-center">
                <span className="font-display text-3xl md:text-4xl font-bold text-forest">
                  100%
                </span>
                <p className="text-sm text-text-muted mt-1">
                  Enfocado a conversión
                </p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-caramel/30" />
              <div className="text-center">
                <span className="font-display text-3xl md:text-4xl font-bold text-forest">
                  {'< 2s'}
                </span>
                <p className="text-sm text-text-muted mt-1">
                  Velocidad de carga
                </p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-caramel/30" />
              <div className="text-center">
                <span className="font-display text-3xl md:text-4xl font-bold text-forest">
                  Local
                </span>
                <p className="text-sm text-text-muted mt-1">
                  Soporte presencial
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mantenemos el resto de las secciones que ya venden tu trabajo perfectamente */}
        <Projects />
        <Services />
        <Process />
        <Testimonials />
        
        {/* Testimonio Local Mérida */}
        <section className="py-24 bg-forest/5 border-y border-forest/10">
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
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
