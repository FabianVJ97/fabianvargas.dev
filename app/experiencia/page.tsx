import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Experiencia | Fabián Vargas",
  description:
    "Experiencia de Fabián Vargas en docencia universitaria, investigación, análisis de datos, automatización y estadística aplicada.",
};

type Experience = {
  period: string;
  title: string;
  institution: string;
  category:
    | "Docencia"
    | "Investigación"
    | "Investigación aplicada"
    | "Experiencia profesional"
    | "Ayudantía";
  description: string;
  responsibilities: string[];
  skills: string[];
  current?: boolean;
  featured?: boolean;
};

const experiences: Experience[] = [
  {
    period: "2026 – Actualidad",
    title: "Docente de Estadística",
    institution: "Universidad del Bío-Bío",
    category: "Docencia",
    description:
      "Docencia universitaria en cursos de Estadística para estudiantes de Ingeniería en Ejecución Eléctrica y Mecánica.",
    responsibilities: [
      "Planificación y desarrollo de clases teóricas y prácticas.",
      "Preparación de evaluaciones, guías y material de apoyo.",
      "Aplicación de contenidos estadísticos a problemas de ingeniería.",
      "Orientación y retroalimentación académica a estudiantes.",
    ],
    skills: [
      "Estadística aplicada",
      "Docencia universitaria",
      "R",
      "Evaluación",
    ],
    current: true,
    featured: true,
  },
  {
    period: "2026 – Actualidad",
    title: "Apoyo en proyecto de investigación FONDECYT",
    institution: "Universidad del Bío-Bío",
    category: "Investigación",
    description:
      "Colaboración en actividades de procesamiento de datos, análisis estadístico y apoyo computacional asociadas a un proyecto de investigación.",
    responsibilities: [
      "Preparación y depuración de bases de datos.",
      "Implementación de procedimientos estadísticos.",
      "Apoyo en simulaciones y análisis computacional.",
      "Documentación de resultados y procedimientos.",
    ],
    skills: [
      "Investigación",
      "Análisis estadístico",
      "Programación",
      "Procesamiento de datos",
    ],
    current: true,
  },
  {
    period: "2025 – 2026",
    title: "Proyecto de título",
    institution: "Universidad del Bío-Bío",
    category: "Investigación aplicada",
    description:
      "Desarrollo de un mecanismo de exportación y validación de modelos de redes neuronales feedforward entre MATLAB y Python.",
    responsibilities: [
      "Diseño de un formato de exportación de modelos neuronales.",
      "Reconstrucción de arquitecturas y parámetros en Python.",
      "Validación de predicciones entre MATLAB y Python.",
      "Evaluación de métricas y consistencia computacional.",
    ],
    skills: [
      "MATLAB",
      "Python",
      "Redes neuronales",
      "Machine Learning",
    ],
    featured: true,
  },
  {
    period: "2025",
    title: "Práctica profesional",
    institution: "GeoResource",
    category: "Experiencia profesional",
    description:
      "Participación en actividades de análisis de datos, automatización de procedimientos y generación de información para apoyar la toma de decisiones.",
    responsibilities: [
      "Procesamiento y estructuración de datos.",
      "Automatización de tareas repetitivas.",
      "Generación de reportes e indicadores.",
      "Apoyo al análisis de información técnica.",
    ],
    skills: [
      "Análisis de datos",
      "Automatización",
      "Reportería",
      "Programación",
    ],
  },
  {
    period: "2025",
    title: "Ayudante de Introducción a la Ingeniería Estadística",
    institution: "Universidad del Bío-Bío",
    category: "Ayudantía",
    description:
      "Apoyo académico a estudiantes en contenidos introductorios de la carrera y en el desarrollo de actividades formativas.",
    responsibilities: [
      "Resolución y explicación de ejercicios.",
      "Acompañamiento en actividades prácticas.",
      "Orientación metodológica a estudiantes.",
      "Apoyo en la preparación de material académico.",
    ],
    skills: [
      "Comunicación",
      "Docencia",
      "Estadística",
      "Trabajo colaborativo",
    ],
  },
  {
    period: "2025",
    title: "Ayudante de Estadística y Probabilidades",
    institution: "Universidad del Bío-Bío",
    category: "Ayudantía",
    description:
      "Apoyo en contenidos de probabilidad, estadística descriptiva e inferencial para estudiantes universitarios.",
    responsibilities: [
      "Desarrollo de ejercicios de probabilidad y estadística.",
      "Apoyo en clases prácticas.",
      "Revisión de procedimientos y resultados.",
      "Preparación de material complementario.",
    ],
    skills: [
      "Probabilidad",
      "Inferencia",
      "R",
      "Resolución de problemas",
    ],
  },
];

const experienceAreas = [
  "Docencia universitaria",
  "Investigación aplicada",
  "Análisis estadístico",
  "Procesamiento de datos",
  "Automatización",
  "Machine Learning",
  "Programación en R",
  "Python",
  "MATLAB",
];

export default function ExperienciaPage() {
  const currentExperiences = experiences.filter(
    (experience) => experience.current,
  ).length;

  const institutions = new Set(
    experiences.map((experience) => experience.institution),
  ).size;

  return (
    <main className="site-background min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="pb-24 pt-36">
        <Container>
          <SectionHeading
            eyebrow="Experiencia"
            title="Docencia, investigación y desarrollo profesional"
            description="Trayectoria vinculada a la estadística aplicada, la enseñanza universitaria, la investigación y el desarrollo de soluciones computacionales."
          />

          {/* Resumen profesional */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <Card className="p-6">
              <p className="text-sm text-slate-500">
                Experiencias registradas
              </p>

              <p className="mt-3 text-3xl font-bold text-cyan-400">
                {experiences.length}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Docencia, investigación y práctica profesional
              </p>
            </Card>

            <Card className="p-6">
              <p className="text-sm text-slate-500">
                Actividades actuales
              </p>

              <p className="mt-3 text-3xl font-bold text-white">
                {currentExperiences}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Docencia e investigación
              </p>
            </Card>

            <Card className="p-6">
              <p className="text-sm text-slate-500">
                Instituciones
              </p>

              <p className="mt-3 text-3xl font-bold text-white">
                {institutions}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Experiencia académica y profesional
              </p>
            </Card>
          </div>

          {/* Trayectoria */}
          <div className="mt-16">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Trayectoria
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Experiencia profesional y académica
              </h2>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-[11px] top-0 hidden w-px bg-slate-800 md:block"
              />

              <div className="space-y-6">
                {experiences.map((experience) => (
                  <div
                    key={`${experience.title}-${experience.period}`}
                    className="relative md:pl-12"
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-8 hidden h-6 w-6 rounded-full border-4 border-slate-950 md:block ${
                        experience.current
                          ? "bg-cyan-400"
                          : "bg-slate-600"
                      }`}
                    />

                    <Card
                      interactive
                      className={`relative overflow-hidden p-7 sm:p-8 ${
                        experience.featured
                          ? "border-cyan-500/30 bg-cyan-500/[0.04]"
                          : ""
                      }`}
                    >
                      {experience.featured && (
                        <div
                          aria-hidden="true"
                          className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl"
                        />
                      )}

                      <div className="relative">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="outline">
                              {experience.category}
                            </Badge>

                            {experience.current && (
                              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                Actual
                              </span>
                            )}
                          </div>

                          <p className="font-mono text-sm text-cyan-400">
                            {experience.period}
                          </p>
                        </div>

                        <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
                          {experience.title}
                        </h2>

                        <p className="mt-2 font-medium text-slate-300">
                          {experience.institution}
                        </p>

                        <p className="mt-5 max-w-3xl leading-7 text-slate-400">
                          {experience.description}
                        </p>

                        <div className="mt-7 grid gap-7 lg:grid-cols-[1.25fr_0.75fr]">
                          <div>
                            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                              Principales funciones
                            </h3>

                            <ul className="mt-4 space-y-3">
                              {experience.responsibilities.map(
                                (responsibility) => (
                                  <li
                                    key={responsibility}
                                    className="flex gap-3 text-sm leading-6 text-slate-400"
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                                    />
                                    <span>{responsibility}</span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                              Competencias
                            </h3>

                            <div className="mt-4 flex flex-wrap gap-2">
                              {experience.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="rounded-full border border-slate-700 bg-slate-950/50 px-3 py-1.5 text-sm text-slate-400"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Perfil consolidado */}
          <Card className="mt-16 p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Perfil profesional
                </p>

                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Áreas desarrolladas en mi trayectoria
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  Mi experiencia combina fundamentos estadísticos, trabajo
                  computacional, enseñanza y participación en proyectos
                  académicos y profesionales.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {experienceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-slate-700 bg-slate-950/50 px-4 py-2.5 text-sm text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <Footer />
    </main>
  );
}