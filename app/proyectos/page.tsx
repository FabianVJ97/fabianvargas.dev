"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ButtonLink from "@/components/ui/ButtonLink";
import { projects } from "@/data/projects";

const categories = [
  "Todos",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

export default function ProyectosPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const featuredProject = projects.find(
    (project) => project.featured,
  ) ?? projects[0];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "Todos") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === selectedCategory,
    );
  }, [selectedCategory]);

  const completedProjects = projects.filter(
    (project) => project.status === "Completado",
  ).length;

  const technologies = new Set(
    projects.flatMap((project) => project.technologies),
  ).size;

  return (
    <main className="site-background min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="pb-24 pt-36">
        <Container>
          <SectionHeading
            eyebrow="Portafolio"
            title="Proyectos de estadística, datos e inteligencia artificial"
            description="Proyectos académicos y aplicados orientados al análisis estadístico, simulación, aprendizaje automático, automatización y desarrollo computacional."
          />

          {/* Resumen */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <Card className="p-6">
              <p className="text-sm text-slate-500">
                Proyectos registrados
              </p>

              <p className="mt-3 text-3xl font-bold text-cyan-400">
                {projects.length}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Proyectos académicos y aplicados
              </p>
            </Card>

            <Card className="p-6">
              <p className="text-sm text-slate-500">
                Proyectos completados
              </p>

              <p className="mt-3 text-3xl font-bold text-white">
                {completedProjects}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Con resultados documentados
              </p>
            </Card>

            <Card className="p-6">
              <p className="text-sm text-slate-500">
                Tecnologías utilizadas
              </p>

              <p className="mt-3 text-3xl font-bold text-white">
                {technologies}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Lenguajes, librerías y herramientas
              </p>
            </Card>
          </div>

          {/* Proyecto destacado */}
          {featuredProject && (
            <Card className="relative mt-12 overflow-hidden border-cyan-500/30 bg-cyan-500/[0.04] p-8 sm:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
              />

              <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="outline">
                      Proyecto destacado
                    </Badge>

                    <span className="text-sm font-medium text-cyan-400">
                      {featuredProject.category}
                    </span>
                  </div>

                  <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                    {featuredProject.title}
                  </h2>

                  <p className="mt-5 max-w-3xl leading-8 text-slate-400">
                    {featuredProject.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {featuredProject.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-slate-700 bg-slate-950/50 px-3 py-1.5 text-sm text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <ButtonLink href={featuredProject.href}>
                      Explorar proyecto
                    </ButtonLink>

                    <ButtonLink
                      href="https://github.com/FabianVJ97"
                      variant="outline"
                    >
                      Ver GitHub
                    </ButtonLink>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                    Resumen técnico
                  </p>

                  <dl className="mt-6 space-y-5">
                    <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
                      <dt className="text-sm text-slate-500">
                        Estado
                      </dt>

                      <dd className="font-medium text-slate-200">
                        {featuredProject.status}
                      </dd>
                    </div>

                    <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
                      <dt className="text-sm text-slate-500">
                        Categoría
                      </dt>

                      <dd className="font-medium text-slate-200">
                        {featuredProject.category}
                      </dd>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-sm text-slate-500">
                        Tecnologías
                      </dt>

                      <dd className="font-medium text-slate-200">
                        {featuredProject.technologies.length}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </Card>
          )}

          {/* Filtros */}
          <div className="mt-16">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Proyectos
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                  Explora mi trabajo
                </h2>

                <p className="mt-3 max-w-2xl text-slate-400">
                  Filtra los proyectos según el área de interés.
                </p>
              </div>

              <div
                className="flex flex-wrap gap-2"
                aria-label="Filtrar proyectos por categoría"
              >
                {categories.map((category) => {
                  const isSelected = selectedCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      aria-pressed={isSelected}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                        isSelected
                          ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
                          : "border-slate-700 bg-slate-950/40 text-slate-400 hover:border-slate-500 hover:text-white"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <p
              className="mt-6 text-sm text-slate-500"
              aria-live="polite"
            >
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1
                ? "proyecto encontrado"
                : "proyectos encontrados"}
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <Card className="mt-8 p-8 text-center">
                <h3 className="text-xl font-bold">
                  No hay proyectos en esta categoría
                </h3>

                <p className="mt-3 text-slate-400">
                  Selecciona otra categoría para continuar explorando.
                </p>
              </Card>
            )}
          </div>

          {/* Cierre */}
          <Card className="mt-16 p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Código y documentación
                </p>

                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Revisa mis repositorios en GitHub
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                  Parte de estos proyectos incluye código, documentación,
                  simulaciones y procedimientos reproducibles.
                </p>
              </div>

              <ButtonLink href="https://github.com/FabianVJ97">
                Visitar GitHub
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </section>

      <Footer />
    </main>
  );
}