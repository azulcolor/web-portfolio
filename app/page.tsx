import dynamic from "next/dynamic";

const About    = dynamic(() => import("@/components/sections/About"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Process  = dynamic(() => import("@/components/sections/Process"));
const Contact  = dynamic(() => import("@/components/sections/Contact"));
const Footer   = dynamic(() => import("@/components/sections/Footer"));

// Solo estos se cargan de inmediato:
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Process />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
