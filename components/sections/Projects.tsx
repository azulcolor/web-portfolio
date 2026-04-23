"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { PROJECTS, type Project } from "@/lib/constants";

const categories = [
  { id: "todos", label: "Todos" },
  { id: "restaurante", label: "Restaurantes" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "salud", label: "Salud" },
  { id: "creativo", label: "Creativos" },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer bg-cream border border-caramel/20 shadow-md hover:shadow-xl hover:border-forest/30 transition-all duration-500 flex flex-col"
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        id={`project-${project.id}`}
        className="flex flex-col h-full"
      >
        {/* Project Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-sand border-b border-caramel/10">
          <Image
            src={project.image}
            alt={`Proyecto web ${project.name} - ${project.categoryLabel} - Desarrollado por Eduardo Leal`}
            fill
            quality={95}
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 flex flex-col flex-grow">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-mint/20 text-forest text-xs font-medium rounded-full mb-3">
              {project.categoryLabel}
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal-light mb-2">
              {project.name}
            </h3>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>
          
          <div className="mt-auto pt-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-sand text-text-secondary text-xs rounded-full border border-caramel/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.collaboration && (
              <div className="mb-5 flex items-start gap-2 text-xs text-text-muted bg-sand/50 p-2.5 rounded-lg border border-caramel/5">
                <span className="text-sm shrink-0">🤝</span>
                <span className="leading-snug">{project.collaboration}</span>
              </div>
            )}

            <div className="flex items-center gap-2 text-forest font-medium text-sm group-hover:text-forest-dark transition-colors">
              <span>Ver proyecto</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </motion.article>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredProjects =
    activeCategory === "todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="proyectos" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-12">
            <span className="font-accent text-xl text-forest">Mi trabajo</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-light mt-2">
              Proyectos seleccionados
            </h2>
            <p className="max-w-2xl mx-auto text-text-secondary mt-4 text-lg">
              Cada proyecto es una historia de marca transformada en experiencia digital.
              Estos son algunos de los sitios que he creado para clientes en México.
            </p>
          </div>
        </FadeIn>

        {/* Category filters */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                id={`filter-${cat.id}`}
                className={`cursor-pointer px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-forest text-cream shadow-lg shadow-forest/20"
                    : "bg-sand text-text-secondary hover:bg-mint/30 hover:text-forest"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid md:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
