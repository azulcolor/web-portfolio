// Project data, services, and content constants

export const SITE_CONFIG = {
  name: "Eduardo Leal",
  fullName: "Eduardo Agustin Leal Pastelin",
  title: "Desarrollador Web",
  email: "lealpastelin@gmail.com",
  phone: "+52 998 293 3230",
  whatsapp: "https://wa.me/529982933230",
  linkedin: "https://www.linkedin.com/in/eduardo-leal-766154245/?locale=es",
  github: "https://github.com/lealpastelin",
  tiktok: "https://www.tiktok.com/@pastelin_l",
  location: "Mérida, México",
};

export interface Project {
  id: string;
  name: string;
  client: string;
  category: string;
  categoryLabel: string;
  description: string;
  impact: string;
  url: string;
  image: string;
  technologies: string[];
  featured: boolean;
  collaboration?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "la-moresca",
    name: "Grupo La Moresca",
    client: "Grupo La Moresca",
    category: "restaurante",
    categoryLabel: "Grupo Restaurantero",
    description:
      "Portal web para grupo restaurantero en Guadalajara. Plataforma que unifica la presencia digital de múltiples establecimientos con su identidad única.",
    impact:
      "Consolidó la presencia digital del grupo, facilitando que nuevos comensales descubran todos sus restaurantes desde un solo lugar.",
    url: "https://lamoresca.com/",
    image: "/images/projects/la-moresca.webp",
    technologies: ["PHP", "Kirby", "SEO"],
    featured: true,
    collaboration: "Desarrollo frontend en colaboración estratégica con Agencia Invasivo",
  },
    {
    id: "brasa-y-sal",
    name: "Brasa y Sal",
    client: "Restaurante Brasa y Sal",
    category: "restaurante",
    categoryLabel: "Restaurante",
    description:
      "Sitio web completo para restaurante de mariscos y carnes a las brasas en Tequila, Jalisco. Diseño que transmite la esencia del pueblo mágico con sistema de reservaciones integrado.",
    impact:
      "Los clientes ahora pueden ver el menú completo y reservar mesa directamente desde su celular. El restaurante reporta un aumento significativo en reservaciones digitales.",
    url: "https://restaurantebrasaysal.com/",
    image: "/images/projects/brasa-y-sal.webp",
    technologies: ["WordPress", "PHP", "Elementor", "SEO"],
    featured: true,
    collaboration: "Desarrollo frontend en colaboración estratégica con Agencia Invasivo",
  },
  {
    id: "kingkoil",
    name: "King Koil Guadalajara",
    client: "King Koil",
    category: "ecommerce",
    categoryLabel: "E-commerce / Lujo",
    description:
      "Showroom digital para la marca de colchones de lujo King Koil en Guadalajara. Experiencia web que transmite la calidad artesanal y tecnología de la marca desde 1898.",
    impact:
      "El sitio ayuda a los clientes a explorar la línea completa de productos y agendar visitas al showroom, fortaleciendo la presencia de la marca en la región.",
    url: "https://kingkoilguadalajara.com/",
    image: "/images/projects/kingkoil.webp",
    technologies: ["WordPress", "PHP", "Elementor", "WooCommerce"],
    featured: true,
    collaboration: "Desarrollo frontend en colaboración estratégica con Agencia Invasivo",
  },
  {
    id: "conforta",
    name: "Colchones Conforta",
    client: "Colchones Conforta",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    description:
      "Tienda en línea para fábrica de colchones en Guadalajara. E-commerce completo con catálogo de productos, directo de fábrica con envío en la ZMG.",
    impact:
      "Los clientes pueden comparar modelos, ver precios de fábrica y comprar directamente en línea con entrega rápida en toda la zona metropolitana.",
    url: "https://colchonesconforta.com/",
    image: "/images/projects/conforta.webp",
    technologies: ["WordPress", "PHP", "WooCommerce", "Elementor"],
    featured: true,
    collaboration: "Desarrollo frontend en colaboración estratégica con Agencia Invasivo",
  },
    {
    id: "invasivo", 
    name: "Agencia Invasivo",
    client: "Agencia Invasivo",
    category: "creativo",
    categoryLabel: "Agencia Creativa",
    description:
      "Portafolio corporativo para agencia de Marketing y SEO. Funciona como su carta de presentación principal, destacando sus casos de éxito y metodología orientada a resultados.",
    impact:
      "La agencia fortaleció su autoridad en el ecosistema digital, logrando un escaparate premium para captar clientes B2B de alto perfil y agilizar su prospección.",
    url: "https://agenciainvasivo.com/",
    image: "/images/projects/invasivo.webp",
    technologies: ["WordPress", "PHP", "Elementor", "SEO"],
    featured: true,
  },
  {
    id: "pearlstem",
    name: "PearlStem",
    client: "PearlStem",
    category: "salud",
    categoryLabel: "Salud / Medicina",
    description:
      "Sitio web para clínica de medicina regenerativa y estética avanzada. Diseño que proyecta confianza, profesionalismo y vanguardia médica.",
    impact:
      "La clínica ahora tiene una presencia digital profesional que educa a pacientes sobre tratamientos con células madre y facilita la agenda de valoraciones.",
    url: "https://pearlstem.com/",
    image: "/images/projects/pearlstem.webp",
    technologies: ["WordPress", "PHP", "Elementor", "SEO"],
    featured: true,
    collaboration: "Desarrollo frontend en colaboración estratégica con Agencia Invasivo",
  },
  {
    id: "lea-maquinaria",
    name: "LEA Maquinaria",
    client: "LEA Maquinaria y Partes",
    category: "ecommerce",
    categoryLabel: "Catálogo Industrial",
    description:
      "Catálogo digital corporativo para venta de refacciones y partes de maquinaria pesada. Diseño estructurado para B2B que facilita la búsqueda técnica y cotización ágil.",
    impact:
      "Transformó el proceso de ventas B2B, permitiendo a constructoras y operadores encontrar y cotizar refacciones genéricas de forma digital e inmediata.",
    url: "https://www.leamaquinariaypartes.com/",
    image: "/images/projects/lea-maquinaria.webp",
    technologies: ["PHP", "MySql", "SEO"],
    featured: true,
    collaboration: "Desarrollo frontend en colaboración estratégica con Agencia Invasivo",
  },
  {
    id: "walter-vera",
    name: "Walter Vera",
    client: "Walter Vera Fotografía",
    category: "creativo",
    categoryLabel: "Portfolio Creativo",
    description:
      "Portfolio editorial y cinematográfico para fotógrafo de bodas en Mérida, Yucatán. Diseño que deja que las imágenes hablen por sí solas.",
    impact:
      "Un portfolio que refleja la calidad editorial del fotógrafo y atrae parejas que buscan fotografía de bodas premium en destinos mexicanos.",
    url: "https://www.waltervera.com/",
    image: "/images/projects/walter-vera.webp",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    featured: true,
  }
];

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: "web-design",
    icon: "🌐",
    title: "Diseño y Desarrollo Web",
    description:
      "Sitios a medida que capturan la esencia de tu marca. Cada pixel pensado para convertir visitantes en clientes.",
    features: [
      "Diseño responsivo y moderno",
      "Desarrollo a medida o CMS",
      "Optimizado para velocidad",
      "Integración con reservaciones",
    ],
  },
  {
    id: "ecommerce",
    icon: "🛒",
    title: "E-Commerce",
    description:
      "Tiendas en línea que venden. Catálogos atractivos, checkout simple y todo lo que necesitas para vender digital.",
    features: [
      "WooCommerce y Shopify",
      "Pasarelas de pago",
      "Gestión de inventario",
      "Reportes de ventas",
    ],
  },
  {
    id: "seo",
    icon: "🔍",
    title: "SEO & Performance",
    description:
      "Para que te encuentren en Google y se queden en tu sitio. Velocidad y posicionamiento que generan resultados.",
    features: [
      "Optimización on-page",
      "Core Web Vitals",
      "Keywords estratégicas",
      "Google Search Console",
    ],
  },
  {
    id: "maintenance",
    icon: "🛠️",
    title: "Mantenimiento Web",
    description:
      "Tu sitio siempre actualizado, seguro y funcionando. Tranquilidad digital para que tú te enfoques en tu negocio.",
    features: [
      "Actualizaciones de seguridad",
      "Backups automáticos",
      "Soporte prioritario",
      "Reportes mensuales",
    ],
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Ricardo Carrillo",
    role: "CEO & Fundador",
    company: "Agencia Invasivo",
    quote:
      "En Invasivo hemos trabajado con Eduardo en distintos proyectos web y siempre ha respondido con buen nivel técnico y enfoque en la correcta implementación. Es buen aliado para ejecutar y optimizar desarrollos dentro de nuestras estrategias digitales, asegurando que todo funcione como debe a nivel técnico.",
    avatar: "/images/avatars/ceo-invasivo.webp",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Descubrimiento",
    description:
      "Conversamos sobre tu marca, tus objetivos y tu audiencia. Entiendo qué hace único a tu negocio para crear algo que realmente te represente.",
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Creo propuestas visuales que capturen la esencia de tu marca. Cada detalle pensado para enamorar a tus clientes desde el primer scroll.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Código limpio, rápido y optimizado. Tu sitio no solo se verá increíble — cargará en segundos y se posicionará en Google.",
  },
  {
    number: "04",
    title: "Lanzamiento",
    description:
      "Testing exhaustivo, configuración de SEO y deploy. Tu sitio listo para recibir clientes y generar resultados desde el día uno.",
  },
  {
    number: "05",
    title: "Acompañamiento",
    description:
      "No desaparezco después del lanzamiento. Soporte continuo, actualizaciones y mejoras para que tu sitio siga creciendo contigo.",
  },
];

export const TECH_STACK = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "WordPress", icon: "📝" },
  { name: "Node.js", icon: "🟢" },
  { name: "PHP", icon: "🐘" },
  { name: "MySQL", icon: "🗄️" },
  { name: "Figma", icon: "🎭" },
  { name: "Vercel", icon: "🚀" },
];
