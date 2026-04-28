"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/precios", label: "Precios" },
  { href: "/diseno-web-merida", label: "Mérida" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

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
          <Link
            href="/"
            className="group flex items-center gap-2"
            id="nav-logo"
          >
            <span className="font-display text-2xl font-bold tracking-tight text-charcoal-light group-hover:text-forest transition-colors duration-300">
              Leal Pastelin
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 relative">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname === link.href;
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 pb-1 ${
                    isActive
                      ? "text-forest"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                  {/* Underline for active state */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-forest rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <Link
            href="/#contacto"
            id="nav-cta"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-forest text-cream text-sm font-medium rounded-full hover:bg-forest-dark transition-all duration-300 hover:shadow-lg hover:shadow-forest/20 hover:-translate-y-0.5"
          >
            <span>Hablemos</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>

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
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-display text-3xl text-charcoal-light hover:text-forest transition-all duration-300"
              style={{
                transitionDelay: isMobileMenuOpen ? `${i * 80}ms` : "0ms",
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-forest text-cream font-medium rounded-full text-lg transition-all duration-300"
            style={{
              transitionDelay: isMobileMenuOpen ? `${navLinks.length * 80}ms` : "0ms",
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
          >
            Hablemos
          </Link>
        </div>
      </div>
    </>
  );
}