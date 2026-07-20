import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const gallery = [
  {
    image: "/images/gallery/docencia-2026.jpg",
    title: "Primer curso como docente",
    description:
      "Curso de Estadística para Ingeniería en Ejecución Eléctrica e Ingeniería en Ejecución Mecánica.",
    year: "2026",
  },
{
  image: "/images/gallery/titulacion.jpg",
  title: "Titulación",
  description:
    "Ceremonia de titulación de Ingeniería Estadística, Universidad del Bío-Bío.",
  year: "2026",
},
  {
    image: "/images/gallery/practica.jpg",
    title: "Práctica profesional",
    description:
      "GeoResource.",
    year: "2025",
  },
];


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
    | "Docencia universitaria"
    | "Investigación"
    | "Gestión de investigación"
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
      "Docencia universitaria en cursos de Estadística para estudiantes de Ingeniería en Ejecución Eléctrica e Ingeniería en Ejecución Mecánica.",
    responsibilities: [
      "Planificación y desarrollo de clases teóricas y prácticas.",
      "Preparación de evaluaciones, guías y material de apoyo.",
      "Aplicación de contenidos estadísticos a problemas de ingeniería.",
      "Orientación y retroalimentación académica a estudiantes.",
    ],
    skills: [
      "Estadística descriptiva teorica y aplicada",
      "Calculo de probabilidades teórico y aplicado",
      "Docencia universitaria",
      "Comunicación efectiva",
      "Resolución de problemas",
      "Trabajo colaborativo"
    ],
    current: true,
    featured: true,
  },
{
  period: "2026 – Actualidad",
  title: "Personal de apoyo en proyecto de investigación FONDECYT",
  institution: "Universidad del Bío-Bío",
  category: "Gestión de investigación",
  description:
    "Apoyo en la gestión administrativa y documental de un proyecto FONDECYT, con responsabilidad en la organización, actualización y respaldo de antecedentes necesarios para el seguimiento del proyecto y la rendición de fondos.",
  responsibilities: [
    "Organización y actualización permanente de la documentación del proyecto.",
    "Carga y respaldo de documentos administrativos y financieros.",
    "Mantención de registros y antecedentes requeridos para la rendición de fondos.",
    "Revisión del estado de la documentación y seguimiento de antecedentes pendientes.",
    "Apoyo en la preparación y ordenamiento de respaldos para procesos de rendición.",
  ],
  skills: [
    "Gestión documental",
    "Rendición de fondos",
    "Organización administrativa",
    "Control de antecedentes",
    "Seguimiento de documentación",
  ],
  current: true,
},
{
  period: "2025 – 2026",
  title: "Proyecto de título",
  institution: "Universidad del Bío-Bío",
  category: "Investigación aplicada",
  description:
    "Desarrollo de una metodología para el agrupamiento de registros de aceleración sísmica basada en medidas de similitud temporal, considerando criterios de amplitud y morfología para apoyar el análisis y la clasificación de señales sísmicas.",
  responsibilities: [
    "Diseño de una metodología para el agrupamiento de registros de aceleración sísmica.",
    "Análisis y comparación de señales mediante medidas de similitud temporal.",
    "Evaluación de criterios de amplitud y morfología para la clasificación de registros.",
    "Implementación computacional y validación de la metodología desarrollada.",
    "Análisis e interpretación de los resultados obtenidos.",
  ],
  skills: [
    "Análisis de señales",
    "Series de tiempo",
    "Métodos estadísticos",
    "Programación",
    "Investigación aplicada",
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
  category: "Docencia universitaria",
  description:
    "Apoyo académico en el curso Introducción a la Ingeniería Estadística, colaborando en la elaboración de material docente y en el desarrollo de actividades evaluativas para estudiantes de primer año.",
  responsibilities: [
    "Elaboración y adaptación de material académico en LaTeX.",
    "Apoyo en la preparación de controles y evaluaciones.",
    "Resolución de consultas de estudiantes.",
    "Colaboración en actividades docentes del curso.",
  ],
  skills: [
    "LaTeX",
    "Docencia universitaria",
    "Comunicación",
    "Planificación académica",
  ],
},
{
  period: "2025",
  title: "Ayudante de Estadística y Probabilidades",
  institution: "Universidad del Bío-Bío",
  category: "Docencia universitaria",
  description:
    "Apoyo docente en el curso de Estadística y Probabilidades mediante tutorías, resolución de consultas y colaboración en actividades de evaluación.",
  responsibilities: [
    "Realización de tutorías para estudiantes.",
    "Resolución de dudas sobre contenidos del curso.",
    "Apoyo en controles y evaluaciones.",
    "Orientación en la resolución de ejercicios.",
  ],
  skills: [
    "Probabilidad",
    "Inferencia estadística",
    "Docencia universitaria",
    "Comunicación",
  ],
},
{
  period: "2024",
  title: "Ayudante de Estadística",
  institution: "Universidad del Bío-Bío",
  category: "Docencia universitaria",
  description:
    "Apoyo docente en contenidos de estadística descriptiva e inferencial para estudiantes de pregrado.",
  responsibilities: [
    "Apoyo en estadística descriptiva e inferencial.",
    "Resolución de ejercicios y consultas.",
    "Tutorías para estudiantes.",
    "Colaboración en actividades académicas.",
  ],
  skills: [
    "Estadística descriptiva",
    "Inferencia estadística",
    "Docencia universitaria",
    "Resolución de problemas",
  ],
},
{
  period: "2024",
  title: "Ayudante de Series de Tiempo",
  institution: "Universidad del Bío-Bío",
  category: "Docencia universitaria",
  description:
    "Colaboración docente en la revisión y evaluación de actividades académicas del curso de Series de Tiempo.",
  responsibilities: [
    "Revisión y corrección de tareas.",
    "Corrección de controles y certámenes.",
    "Apoyo a estudiantes en contenidos del curso.",
    "Retroalimentación sobre evaluaciones.",
  ],
  skills: [
    "Series de tiempo",
    "Análisis estadístico",
    "Evaluación académica",
    "Docencia universitaria",
  ],
},
{
  period: "2023",
  title: "Ayudante de Modelos Lineales",
  institution: "Universidad del Bío-Bío",
  category: "Docencia universitaria",
  description:
    "Apoyo docente en el curso de Modelos Lineales mediante revisión de evaluaciones y acompañamiento académico a estudiantes.",
  responsibilities: [
    "Revisión y corrección de tareas.",
    "Corrección de controles y certámenes.",
    "Apoyo en contenidos de modelos lineales.",
    "Resolución de consultas de estudiantes.",
  ],
  skills: [
    "Modelos lineales",
    "Regresión",
    "Docencia universitaria",
    "Evaluación académica",
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


{/* Galería profesional */}

<div className="mt-16">
  <div className="mb-8">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
      Galería
    </p>

    <h2 className="mt-3 text-3xl font-bold tracking-tight">
      Momentos de mi trayectoria
    </h2>

    <p className="mt-4 max-w-3xl text-slate-400">
      Algunas fotografías que representan experiencias relevantes en docencia,
      investigación y desarrollo profesional.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {gallery.map((photo) => (
      <Card
        key={photo.title}
        interactive
        className="overflow-hidden p-0"
      >
        <img
          src={photo.image}
          alt={photo.title}
          className="h-64 w-full object-cover transition duration-500 hover:scale-105"
        />

        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">
              {photo.title}
            </h3>

            <span className="text-sm text-cyan-400">
              {photo.year}
            </span>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            {photo.description}
          </p>
        </div>
      </Card>
    ))}
  </div>
</div>




        </Container>
      </section>

      <Footer />
    </main>
  );
}