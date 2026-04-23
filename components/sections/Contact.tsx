"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE_CONFIG } from "@/lib/constants";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    projectType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", message: "", projectType: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section id="contacto" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="font-accent text-2xl md:text-3xl text-forest block mb-2">
              ¿Tienes un proyecto en mente?
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-charcoal-light mt-2">
              Hagámoslo{" "}
              <span className="text-forest">realidad</span>
            </h2>
            <p className="max-w-xl mx-auto text-text-secondary mt-4 text-lg">
              Cuéntame sobre tu proyecto y te responderé en menos de 24 horas.
              Sin compromiso, sin costo inicial.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="space-y-8">
              {/* Quick contact cards */}
              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={SITE_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp"
                  className="group flex items-center gap-4 p-5 bg-sand rounded-2xl border border-caramel/10 hover:border-forest/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center group-hover:bg-forest/20 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A5D3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">WhatsApp</p>
                    <p className="font-medium text-charcoal-light">{SITE_CONFIG.phone}</p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9C9590"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="ml-auto group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  id="contact-email"
                  className="group flex items-center gap-4 p-5 bg-sand rounded-2xl border border-caramel/10 hover:border-forest/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center group-hover:bg-forest/20 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A5D3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Email</p>
                    <p className="font-medium text-charcoal-light">{SITE_CONFIG.email}</p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9C9590"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="ml-auto group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>

              {/* Social links */}
              <div>
                <p className="text-sm font-medium text-text-muted uppercase tracking-wider mb-4">
                  Sígueme
                </p>
                <div className="flex gap-3">
                  {[
                    { name: "LinkedIn", url: SITE_CONFIG.linkedin, icon: "in" },
                    { name: "GitHub", url: SITE_CONFIG.github, icon: "gh" },
                    { name: "TikTok", url: SITE_CONFIG.tiktok, icon: "tt" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`contact-social-${social.name.toLowerCase()}`}
                      className="w-11 h-11 bg-sand rounded-xl flex items-center justify-center border border-caramel/10 hover:bg-forest hover:text-cream hover:border-forest text-text-secondary transition-all duration-300 text-sm font-bold"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-3 p-4 bg-mint/10 rounded-2xl border border-mint/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-forest" />
                </span>
                <p className="text-sm text-forest font-medium">
                  Disponible para nuevos proyectos
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Contact form */}
          <FadeIn direction="right" delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-sand rounded-3xl p-8 md:p-10 border border-caramel/10 space-y-6"
              id="contact-form"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Tu nombre
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-5 py-3.5 bg-cream rounded-xl border border-caramel/15 focus:border-forest focus:ring-2 focus:ring-forest/10 outline-none transition-all duration-300 text-charcoal-light placeholder:text-text-muted"
                  placeholder="¿Cómo te llamas?"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email-input"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Tu email
                </label>
                <input
                  id="contact-email-input"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full px-5 py-3.5 bg-cream rounded-xl border border-caramel/15 focus:border-forest focus:ring-2 focus:ring-forest/10 outline-none transition-all duration-300 text-charcoal-light placeholder:text-text-muted"
                  placeholder="email@ejemplo.com"
                />
              </div>

              {/* Project type */}
              <div>
                <label
                  htmlFor="contact-project-type"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Tipo de proyecto
                </label>
                <select
                  id="contact-project-type"
                  value={formState.projectType}
                  onChange={(e) =>
                    setFormState({ ...formState, projectType: e.target.value })
                  }
                  className="w-full px-5 py-3.5 bg-cream rounded-xl border border-caramel/15 focus:border-forest focus:ring-2 focus:ring-forest/10 outline-none transition-all duration-300 text-charcoal-light appearance-none cursor-pointer"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="restaurante">Sitio web para restaurante</option>
                  <option value="ecommerce">Tienda en línea</option>
                  <option value="landing">Landing page</option>
                  <option value="corporativo">Sitio corporativo</option>
                  <option value="portfolio">Portfolio / Personal</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Cuéntame sobre tu proyecto
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-5 py-3.5 bg-cream rounded-xl border border-caramel/15 focus:border-forest focus:ring-2 focus:ring-forest/10 outline-none transition-all duration-300 text-charcoal-light placeholder:text-text-muted resize-none"
                  placeholder="¿Qué tienes en mente? Cuéntame sobre tu negocio, tus objetivos y tu presupuesto aproximado..."
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="contact-submit"
                className="w-full py-4 bg-forest text-cream font-medium rounded-xl hover:bg-forest-dark transition-all duration-300 hover:shadow-xl hover:shadow-forest/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="inline-block w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full"
                    />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar mensaje</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
                    </svg>
                  </>
                )}
              </motion.button>

              {/* Status messages */}
              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-forest font-medium flex items-center justify-center gap-2"
                >
                  <span>✓</span> ¡Mensaje enviado! Te responderé pronto.
                </motion.p>
              )}
              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-600 font-medium"
                >
                  Hubo un error. Intenta de nuevo o escríbeme por WhatsApp.
                </motion.p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
