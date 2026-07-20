import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ButtonLink from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Sobre mí | Fabián Vargas",
  description:
    "Perfil profesional de Fabián Vargas, ingeniero estadístico orientado a ciencia de datos, investigación, docencia y desarrollo computacional.",
};

const skills = [
  "Estadística aplicada",
  "Ciencia de datos",
  "Machine Learning",
  "Simulación",
  "Diseño de experimentos",
  "Series de tiempo",
  "R",
  "Python",
  "MATLAB",
  "Investigación aplicada",
];

const values = [
  {
    title: "Rigor estadístico",
    description:
      "Trabajo con metodologías reproducibles, supuestos explícitos y resultados correctamente interpretados.",
  },
  {
    title: "Desarrollo computacional",
    description:
      "Implemento soluciones mediante programación, automatización y herramientas orientadas al análisis de datos.",
  },
  {
    title: "Comunicación clara",
    description:
      "Busco transformar resultados técnicos en información comprensible y útil para la toma de decisiones.",
  },
];

export default function SobreMiPage() {
  return (
    <main className="site-background min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="pb-24 pt-36">
        <Container>
          <SectionHeading
            eyebrow="Sobre mí"
            title="Estadística, programación e investigación aplicada"
            description="Soy ingeniero estadístico con interés en ciencia de datos, modelamiento, inteligencia artificial, docencia y desarrollo de soluciones computacionales."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Card className="relative overflow-hidden p-8 sm:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"
              />

              <div className="relative">
                <Badge variant="outline">
                  Perfil profesional
                </Badge>

                <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  Fabián Vargas
                </h2>

                <p className="mt-3 text-lg font-medium text-cyan-400">
                  Ingeniero Estadístico
                </p>

                <div className="mt-7 space-y-5 leading-8 text-slate-400">
                  <p>
                    Mi formación combina fundamentos estadísticos,
                    programación y modelamiento computacional. Me interesa
                    desarrollar soluciones reproducibles para problemas de
                    análisis de datos, simulación, predicción y automatización.
                  </p>

                  <p>
                    Mi experiencia incluye docencia universitaria,
                    investigación aplicada, ayudantías, análisis estadístico y
                    desarrollo de proyectos con R, Python y MATLAB.
                  </p>

                  <p>
                    Actualmente continúo fortaleciendo mi formación en
                    estadística avanzada, con especial interés en aprendizaje
                    automático, redes neuronales, series de tiempo y métodos
                    computacionales.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <ButtonLink href="/proyectos">
                    Ver proyectos
                  </ButtonLink>

                  <ButtonLink
                    href="/cv-fabian-vargas.pdf"
                    variant="outline"
                    download
                  >
                    Descargar CV
                  </ButtonLink>
                </div>
              </div>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <Card className="p-6">
                <p className="text-sm text-slate-500">
                  Formación principal
                </p>

                <p className="mt-3 text-2xl font-bold">
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

                <p className="mt-3 text-2xl font-bold">
                  Magíster en Estadística
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  En curso
                </p>
              </Card>

              <Card className="p-6">
                <p className="text-sm text-slate-500">
                  Áreas de interés
                </p>

                <p className="mt-3 text-2xl font-bold">
                  Datos e inteligencia artificial
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Estadística, simulación y machine learning
                </p>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Competencias
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Herramientas y áreas de trabajo
            </h2>

            <Card className="mt-8 p-8">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-950/50 px-4 py-2.5 text-sm text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          <div className="mt-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Enfoque profesional
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Cómo abordo los proyectos
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <Card
                  key={value.title}
                  interactive
                  className="p-7"
                >
                  <h3 className="text-xl font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="mt-16 p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Colaboración
                </p>

                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  ¿Tienes una propuesta o un proyecto?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                  Puedes contactarme para conversar sobre estadística,
                  investigación, análisis de datos, docencia o desarrollo
                  computacional.
                </p>
              </div>

              <ButtonLink href="/contacto">
                Ir a contacto
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </section>

      <Footer />
    </main>
  );
}