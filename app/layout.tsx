import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lealpastelin.com"),
  title: {
    default:
      "Eduardo Leal | Desarrollador Web para Restaurantes y Marcas Premium en México",
    template: "%s | Eduardo Leal — Desarrollador Web",
  },
  description:
    "Diseño y desarrollo web profesional especializado en restaurantes y marcas premium en México. Sitios rápidos, hermosos y que convierten visitantes en clientes. +6 proyectos entregados en Guadalajara, Tequila, Mérida y Cancún.",
  keywords: [
    "desarrollador web México",
    "diseño web restaurantes",
    "páginas web para restaurantes",
    "desarrollador web freelance",
    "diseño web Cancún",
    "creación de páginas web profesionales",
    "desarrollador frontend México",
    "diseño web premium",
    "páginas web Guadalajara",
    "desarrollo web Next.js",
    "portafolio desarrollador web",
    "diseñador web restaurantes México",
    "sitios web para negocios",
    "desarrollo web profesional",
    "Eduardo Leal desarrollador",
  ],
  authors: [
    {
      name: "Eduardo Agustin Leal Pastelin",
      url: "https://lealpastelin.com",
    },
  ],
  creator: "Eduardo Agustin Leal Pastelin",
  publisher: "Eduardo Agustin Leal Pastelin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://lealpastelin.com",
    siteName: "Eduardo Leal — Desarrollador Web",
    title:
      "Eduardo Leal | Desarrollador Web para Restaurantes y Marcas Premium",
    description:
      "Creo experiencias web que enamoran a tus clientes. Especializado en restaurantes y marcas premium en México. Sitios rápidos, hermosos y que convierten.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eduardo Leal — Desarrollador Web Especializado en Restaurantes y Marcas Premium en México",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Leal | Desarrollador Web para Restaurantes y Marcas Premium",
    description:
      "Creo experiencias web que enamoran a tus clientes. Especializado en restaurantes y marcas premium en México.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://lealpastelin.com",
  },
  category: "technology",
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://lealpastelin.com/#person",
      name: "Eduardo Agustin Leal Pastelin",
      alternateName: "Eduardo Leal",
      url: "https://lealpastelin.com",
      image: "https://lealpastelin.com/images/eduardo-portrait.png",
      jobTitle: "Desarrollador Web Frontend",
      description:
        "Desarrollador web freelance especializado en crear sitios para restaurantes y marcas premium en México.",
      email: "lealpastelin@gmail.com",
      telephone: "+52-998-293-3230",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cancún",
        addressRegion: "Quintana Roo",
        addressCountry: "MX",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Universidad Politécnica de Quintana Roo",
      },
      knowsAbout: [
        "Diseño Web",
        "Desarrollo Frontend",
        "React",
        "Next.js",
        "WordPress",
        "SEO",
        "E-Commerce",
      ],
      sameAs: [
        "https://linkedin.com/in/lealpastelin",
        "https://github.com/lealpastelin",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://lealpastelin.com/#service",
      name: "Eduardo Leal — Desarrollo Web",
      provider: { "@id": "https://lealpastelin.com/#person" },
      description:
        "Diseño y desarrollo web profesional para restaurantes y marcas premium en México.",
      areaServed: {
        "@type": "Country",
        name: "México",
      },
      serviceType: "Diseño y Desarrollo Web",
      url: "https://lealpastelin.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://lealpastelin.com/#website",
      url: "https://lealpastelin.com",
      name: "Eduardo Leal — Desarrollador Web",
      publisher: { "@id": "https://lealpastelin.com/#person" },
      inLanguage: "es-MX",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${cormorant.variable} ${dmSans.variable} ${caveat.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
