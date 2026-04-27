"use client";

import { SITE_CONFIG } from "@/lib/constants";

const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream/60 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#inicio" className="inline-block">
              <span className="font-display text-2xl font-bold text-cream">
                Leal Pastelin
              </span>
            </a>
            <p className="text-sm text-cream/40 leading-relaxed max-w-xs">
              Desarrollador web especializado en crear experiencias digitales que enamoran
              a tus clientes y hacen crecer tu negocio.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-medium text-cream/80 uppercase tracking-wider mb-4">
              Navegación
            </p>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/40 hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-medium text-cream/80 uppercase tracking-wider mb-4">
              Contacto
            </p>
            <ul className="space-y-2.5 text-sm text-cream/40">
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-cream transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>{SITE_CONFIG.location}</li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[
                { name: "LinkedIn", url: SITE_CONFIG.linkedin },
                { name: "GitHub", url: SITE_CONFIG.github },
                { name: "TikTok", url: SITE_CONFIG.tiktok },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-cream/5 flex items-center justify-center hover:bg-forest/30 hover:text-cream transition-all duration-300 text-xs font-medium text-cream/40"
                  aria-label={social.name}
                >
                  {social.name.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-cream/30">
            © {currentYear} Leal Pastelin. Todos los derechos reservados.
          </p>
          <p className="text-sm text-cream/30 flex items-center gap-1.5">
            Diseñado y desarrollado con <span className="text-lg">☕</span> por Leal Pastelin 
          </p>
        </div>
      </div>
    </footer>
  );
}
