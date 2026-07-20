import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Formación | Fabián Vargas",
  description:
    "Formación académica de Fabián Vargas en estadística, ciencia de datos, investigación y métodos computacionales.",
};

type EducationItem = {
  type: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  status: "En curso" | "Completado";
  featured?: boolean;
  highlights: string[];
  credentialHref?: string;
};

const educationItems: EducationItem[] = [
{
  type: "Postgrado",
  title: "Magíster en Estadística",
  institution: "Universidad del Bío-Bío",
  period: "2026 – Actualidad",
  description:
    "Programa de postgrado orientado a la formación avanzada en Estadística, con énfasis en inferencia, modelamiento estadístico, métodos computacionales e investigación científica. Su propósito es profundizar el conocimiento disciplinar y desarrollar competencias para resolver problemas complejos mediante metodologías estadísticas, contribuyendo además al trabajo interdisciplinario y a la generación de nuevo conocimiento.",
  status: "En curso",
  featured: true,
  highlights: [
    "Inferencia estadística avanzada",
    "Modelamiento estadístico",
    "Computación estadística",
    "Investigación científica",
    "Trabajo interdisciplinario",
    "Métodos computacionales",
  ],
},
{
  type: "Título profesional",
  title: "Ingeniería Estadística",
  institution: "Universidad del Bío-Bío",
  period: "2020 – 2026",
  description:
    "Formación profesional orientada al análisis y modelamiento estadístico de fenómenos complejos para apoyar la toma de decisiones. Integra estadística aplicada, ciencia de datos, inteligencia artificial, aprendizaje automático y métodos computacionales, junto con el desarrollo de competencias para el trabajo interdisciplinario, la innovación y el ejercicio ético de la profesión.",
  status: "Completado",
  highlights: [
    "Ciencia de datos",
    "Aprendizaje automático",
    "Modelamiento estadístico",
    "Métodos computacionales",
    "Análisis de datos",
    "Toma de decisiones",
  ],
},
{
  type: "Grado académico",
  title: "Licenciado en Estadística",
  institution: "Universidad del Bío-Bío",
  period: "2026",
  description:
    "Grado académico que acredita una sólida formación en fundamentos matemáticos, probabilísticos y estadísticos, proporcionando las bases teóricas y metodológicas para el análisis de datos, la modelación de fenómenos bajo incertidumbre, la simulación y el desarrollo de investigación científica, habilitando además para la continuidad de estudios de postgrado.",
  status: "Completado",
  highlights: [
    "Probabilidad",
    "Inferencia estadística",
    "Modelación estadística",
    "Simulación",
    "Investigación científica",
    "Métodos cuantitativos",
  ],
},

  {
  type: "Diplomado",
  title: "Habilidades Sociales e Inserción Laboral",
  institution: "Universidad del Bío-Bío",
  period: "2025",
  description:
    "Diplomado enfocado en el desarrollo de competencias genéricas para el ejercicio profesional, fortaleciendo habilidades de comunicación efectiva, trabajo colaborativo, inteligencia emocional, ética profesional, responsabilidad social y empleabilidad, junto con herramientas para enfrentar procesos de selección e inserción laboral.",
  status: "Completado",
  highlights: [
    "Comunicación efectiva",
    "Trabajo colaborativo",
    "Inteligencia emocional",
    "Ética profesional",
    "Responsabilidad social",
    "Empleabilidad",
  ],
}
];

const specializationAreas = [
  "Inferencia estadística",
  "Diseño de experimentos",
  "Simulación estadística",
  "Series de tiempo",
  "Machine Learning",
  "Redes neuronales",
  "Programación en R",
  "Python",
  "MATLAB",
  "Investigación aplicada",
];

export default function FormacionPage() {
  const completedItems = educationItems.filter(
    (item) => item.status === "Completado",
  ).length;

  return (
    <main className="site-background min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="pb-24 pt-36">
        <Container>
          <SectionHeading
            eyebrow="Formación académica"
            title="Estadística, investigación y ciencia de datos"
            description="Mi formación integra fundamentos estadísticos, programación, modelamiento computacional y competencias orientadas a la investigación y al ejercicio profesional."
          />

          {/* Resumen */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <Card className="p-6">
              <p className="text-sm text-slate-500">
                Formación principal
              </p>

              <p className="mt-3 text-2xl font-bold text-white">
                Ingeniería Estadística
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Universidad del Bío-Bío
              </p>
            </Card>

            <Card className="p-6">
              <p className="text-sm text-slate-500">
                Estudios actuales
              </p>

              <p className="mt-3 text-2xl font-bold text-white">
                Magíster
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Estadística avanzada
              </p>
            </Card>

            <Card className="p-6">
              <p className="text-sm text-slate-500">
                Programas completados
              </p>

              <p className="mt-3 text-3xl font-bold text-cyan-400">
                {completedItems}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Título, grado y diplomado
              </p>
            </Card>
          </div>

          {/* Trayectoria académica */}
          <div className="mt-16">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Trayectoria
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Formación y desarrollo académico
              </h2>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-[11px] top-0 hidden w-px bg-slate-800 md:block"
              />

              <div className="space-y-6">
                {educationItems.map((item) => (
                  <div
                    key={`${item.title}-${item.period}`}
                    className="relative md:pl-12"
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-8 hidden h-6 w-6 rounded-full border-4 border-slate-950 md:block ${
                        item.status === "En curso"
                          ? "bg-cyan-400"
                          : "bg-slate-500"
                      }`}
                    />

                    <Card
                      interactive
                      className={`relative overflow-hidden p-7 sm:p-8 ${
                        item.featured
                          ? "border-cyan-500/30 bg-cyan-500/[0.04]"
                          : ""
                      }`}
                    >
                      {item.featured && (
                        <div
                          aria-hidden="true"
                          className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl"
                        />
                      )}

                      <div className="relative">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                              {item.type}
                            </p>

                            <p className="mt-2 font-mono text-sm text-slate-500">
                              {item.period}
                            </p>
                          </div>

                        <span
                         className={`rounded-full border px-3 py-1.5 text-sm font-semibold ${
                         item.status === "En curso"
                         ? "border-orange-400/40 bg-orange-400/10 text-orange-300"
                           : "border-green-500/40 bg-green-500/10 text-green-300"
                          }`}
                          >
                            {item.status}
                        </span>
                        </div>

                        <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
                          {item.title}
                        </h2>

                        <p className="mt-2 font-medium text-slate-300">
                          {item.institution}
                        </p>

                        <p className="mt-5 max-w-3xl leading-7 text-slate-400">
                          {item.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {item.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="rounded-full border border-slate-700 bg-slate-950/50 px-3 py-1.5 text-sm text-slate-400"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>

                        {item.credentialHref && (
                          <a
                            href={item.credentialHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-7 inline-flex font-semibold text-cyan-400 transition hover:text-cyan-300"
                          >
                            Ver credencial
                            <span className="ml-2" aria-hidden="true">
                              ↗
                            </span>
                          </a>
                        )}
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Áreas de especialización */}
          <Card className="mt-16 p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Especialización
                </p>

                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Áreas desarrolladas durante mi formación
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  Conocimientos adquiridos mediante asignaturas, proyectos,
                  investigación y trabajo computacional.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {specializationAreas.map((area) => (
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