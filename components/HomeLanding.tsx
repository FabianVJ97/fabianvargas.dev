"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";

const profileHighlights = [
  {
    title: "Ingeniero Estadístico",
    description:
      "Formación en análisis estadístico, modelamiento y ciencia de datos.",
  },
  {
    title: "Magíster en Estadística",
    description:
      "Actualmente profundizando en inferencia y métodos computacionales.",
  },
  {
    title: "Docencia e investigación",
    description:
      "Experiencia universitaria, investigación aplicada y desarrollo académico.",
  },
];

const areas = [
  {
    title: "Estadística",
    icon: "∑",
  },
  {
    title: "Ciencia de datos",
    icon: "⌁",
  },
  {
    title: "Machine Learning",
    icon: "◇",
  },
  {
    title: "Investigación",
    icon: "⌕",
  },
];

export default function HomeLanding() {
  const featuredProjects = projects.filter(
    (project) => project.featured,
  );

  const visibleProjects =
    featuredProjects.length > 0
      ? featuredProjects
      : projects.slice(0, 3);

  const [activeProject, setActiveProject] = useState(0);

  const currentProject = visibleProjects[activeProject];

  function previousProject() {
    setActiveProject((current) =>
      current === 0
        ? visibleProjects.length - 1
        : current - 1,
    );
  }

  function nextProject() {
    setActiveProject((current) =>
      current === visibleProjects.length - 1
        ? 0
        : current + 1,
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="relative min-h-screen overflow-hidden">
        {/* Fondo */}
         <div
           aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
             backgroundImage: "url('/images/home-background.jpg')",
             }}
/>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-slate-950/65"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-cyan-950/30 to-slate-950"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.12),transparent_32%)]"
        />

        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Hero */}
        <section className="relative z-10 pb-20 pt-32 sm:pt-40">
          <Container>
            <div className="grid min-h-[540px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  Ingeniero Estadístico
                </p>

                <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                  Datos que se transforman en
                  <span className="block text-cyan-300">
                    conocimiento y decisiones
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Soy Fabián Vargas. Desarrollo soluciones en estadística,
                  ciencia de datos, simulación e inteligencia artificial,
                  integrando rigor metodológico y programación.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/proyectos"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Ver mis proyectos
                  </Link>

                  <Link
                    href="/contacto"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:border-cyan-300/50 hover:bg-white/10"
                  >
                    Contactarme
                  </Link>
                </div>
              </div>

              {/* Tarjetas flotantes */}
              <div className="space-y-4 lg:justify-self-end">
                {profileHighlights.map((highlight, index) => (
                  <div
                    key={highlight.title}
                    className={`max-w-md rounded-2xl border border-white/10 bg-slate-950/45 p-6 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300/30 ${
                      index === 1 ? "lg:-translate-x-12" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h2 className="text-lg font-bold text-white">
                          {highlight.title}
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Franja de áreas */}
        <section className="relative z-10">
          <Container>
            <div className="rounded-3xl border border-cyan-300/15 bg-cyan-950/50 p-7 shadow-2xl backdrop-blur-xl sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                    Áreas de trabajo
                  </p>

                  <h2 className="mt-4 text-3xl font-bold tracking-tight">
                    ¿En qué puedo aportar?
                  </h2>

                  <p className="mt-4 max-w-xl leading-7 text-slate-300">
                    Desarrollo análisis, modelos y soluciones computacionales
                    para problemas académicos y profesionales.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {areas.map((area) => (
                    <Link
                      key={area.title}
                      href="/sobre-mi"
                      className="group rounded-2xl border border-white/10 bg-slate-950/35 p-5 text-center transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-950/55"
                    >
                      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-xl text-cyan-300">
                        {area.icon}
                      </span>

                      <span className="mt-4 block text-sm font-semibold text-slate-200 group-hover:text-white">
                        {area.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Proyecto destacado */}
        {currentProject && (
          <section className="relative z-10 pb-28 pt-24">
            <Container>
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Proyecto destacado
                </p>

                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Trabajo seleccionado
                </h2>
              </div>

              <div className="relative mx-auto mt-10 max-w-5xl">
                <button
                  type="button"
                  onClick={previousProject}
                  aria-label="Proyecto anterior"
                  className="absolute left-0 top-1/2 z-20 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/60 text-2xl text-white backdrop-blur transition hover:border-cyan-300/50 hover:text-cyan-300 md:flex"
                >
                  ←
                </button>

                <article className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/55 shadow-2xl backdrop-blur-xl">
                  <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="relative min-h-[280px] overflow-hidden bg-slate-900 sm:min-h-[380px]">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[url('/images/project-placeholder.jpg')] bg-cover bg-center transition duration-700 hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

                      <p className="absolute bottom-6 left-6 rounded-full border border-white/15 bg-slate-950/50 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur">
                        {currentProject.category}
                      </p>
                    </div>

                    <div className="flex flex-col justify-center p-8 sm:p-10">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                        {currentProject.status}
                      </p>

                      <h3 className="mt-4 text-3xl font-bold tracking-tight">
                        {currentProject.title}
                      </h3>

                      <p className="mt-5 leading-8 text-slate-300">
                        {currentProject.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {currentProject.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={currentProject.href}
                        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                      >
                        Explorar proyecto
                      </Link>
                    </div>
                  </div>
                </article>

                <button
                  type="button"
                  onClick={nextProject}
                  aria-label="Proyecto siguiente"
                  className="absolute right-0 top-1/2 z-20 hidden h-14 w-14 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/60 text-2xl text-white backdrop-blur transition hover:border-cyan-300/50 hover:text-cyan-300 md:flex"
                >
                  →
                </button>

                <div className="mt-6 flex justify-center gap-2">
                  {visibleProjects.map((project, index) => (
                    <button
                      key={project.title}
                      type="button"
                      onClick={() => setActiveProject(index)}
                      aria-label={`Mostrar proyecto ${index + 1}`}
                      aria-current={
                        activeProject === index ? "true" : undefined
                      }
                      className={`h-2.5 rounded-full transition-all ${
                        activeProject === index
                          ? "w-8 bg-cyan-300"
                          : "w-2.5 bg-slate-600 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Container>
          </section>
        )}
      </div>

      <Footer />
    </main>
  );
}