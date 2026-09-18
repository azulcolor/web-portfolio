"use client";

import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling down 200px
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
        isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-16 opacity-0 scale-90 pointer-events-none"
      }`}
    >
      <a
        href={SITE_CONFIG.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute right-full mr-4 bg-white text-charcoal text-sm font-medium py-1 px-3 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          ¡Hola! ¿En qué te ayudo?
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M12.031 21.122A9.972 9.972 0 0 1 7.214 19.8l-4.5.153.27-4.1a9.98 9.98 0 1 1 9.047 5.269ZM12.03 2.054a7.99 7.99 0 0 0-7.234 11.4l-.178 2.69 2.94-.1A7.99 7.99 0 1 0 12.03 2.055Zm3.945 10.944c-.218-.11-1.288-.635-1.488-.707-.2-.072-.345-.11-.49.11-.144.22-.562.707-.69.852-.125.145-.252.164-.47.054-.218-.11-.918-.34-1.748-1.082-.646-.576-1.082-1.29-1.208-1.508-.127-.22-.014-.338.095-.447.1-.1.218-.255.328-.383.11-.127.145-.219.218-.364.072-.146.036-.273-.018-.382-.054-.11-.49-1.183-.672-1.62-.178-.426-.358-.368-.49-.374h-.417c-.145 0-.382.055-.582.274-.2.22-1.036 1.011-1.036 2.464s1.063 2.855 1.21 3.055c.144.2 2.08 3.178 5.04 4.457.705.304 1.255.486 1.684.622.709.225 1.354.193 1.86.117.568-.085 1.747-.714 1.993-1.403.245-.69.245-1.282.172-1.403-.073-.122-.273-.195-.492-.305Z" />
        </svg>
      </a>
    </div>
  );
}
