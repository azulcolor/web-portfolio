"use client";

import { useState, useEffect, useRef } from "react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const navLinksRef = useRef<Map<string, HTMLAnchorElement>>(new Map());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeEl = navLinksRef.current.get(activeSection);
    const indicator = indicatorRef.current;
    if (!activeEl || !indicator) return;
    indicator.style.transform = `translateX(${activeEl.offsetLeft}px)`;
    indicator.style.width = `${activeEl.offsetWidth}px`;
  }, [activeSection]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`animate-nav-slide fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-cream/80 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.06)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleLinkClick("#inicio"); }}
            className="group flex items-center gap-2"
            id="nav-logo"
          >
            <span className="font-display text-2xl font-bold tracking-tight text-charcoal-light group-hover:text-forest transition-colors duration-300">
              Leal Pastelin
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 relative">
            <span
              ref={indicatorRef}
              className="absolute -bottom-1 h-0.5 bg-forest rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,0.4,0.25,1)]"
              style={{ width: 0 }}
            />
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                ref={(el) => {
                  if (el) navLinksRef.current.set(link.href.slice(1), el);
                }}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                id={`nav-${link.href.slice(1)}`}
                className={`relative text-sm font-medium transition-colors duration-300 pb-1 ${
                  activeSection === link.href.slice(1)
                    ? "text-forest"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); handleLinkClick("#contacto"); }}
            id="nav-cta"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-forest text-cream text-sm font-medium rounded-full hover:bg-forest-dark transition-all duration-300 hover:shadow-lg hover:shadow-forest/20 hover:-translate-y-0.5"
          >
            <span>Hablemos</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span className={`block w-6 h-0.5 bg-charcoal-light rounded-full origin-center transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-charcoal-light rounded-full transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`block w-6 h-0.5 bg-charcoal-light rounded-full origin-center transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream/95 backdrop-blur-xl lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
              className="font-display text-3xl text-charcoal-light hover:text-forest transition-all duration-300"
              style={{
                transitionDelay: isMobileMenuOpen ? `${i * 80}ms` : "0ms",
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); handleLinkClick("#contacto"); }}
            className="mt-4 px-8 py-3 bg-forest text-cream font-medium rounded-full text-lg transition-all duration-300"
            style={{
              transitionDelay: isMobileMenuOpen ? `${navLinks.length * 80}ms` : "0ms",
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
          >
            Hablemos
          </a>
        </div>
      </div>
    </>
  );
}