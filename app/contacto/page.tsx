import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import ButtonLink from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Contacto | Fabián Vargas",
  description:
    "Contacto profesional de Fabián Vargas para proyectos de estadística, ciencia de datos, investigación, docencia y aprendizaje automático.",
};

const email = "tu-correo@ejemplo.com";

const contactLinks = [
  {
    label: "Correo electrónico",
    value: email,
    description: "Medio principal para propuestas y consultas profesionales.",
    href: `mailto:${email}`,
    external: false,
    icon: "email",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tu-usuario",
    description: "Trayectoria profesional, formación y experiencia.",
    href: "https://www.linkedin.com/in/tu-usuario",
    external: true,
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/FabianVJ97",
    description: "Repositorios, código fuente y proyectos técnicos.",
    href: "https://github.com/FabianVJ97",
    external: true,
    icon: "github",
  },
];

const collaborationAreas = [
  "Análisis estadístico",
  "Ciencia de datos",
  "Machine Learning",
  "Simulación estadística",
  "Automatización",
  "Investigación aplicada",
  "Docencia universitaria",
];

type ContactIconProps = {
  type: string;
};

function ContactIcon({ type }: ContactIconProps) {
  if (type === "email") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-6 w-6"
      >
        <path
          d="M4 6h16v12H4V6Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="m5 7 7 6 7-6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-6 w-6"
      >
        <path
          d="M6.5 9.5V18M6.5 6.5v.01M10.5 18v-4.75c0-1.8 1.1-3.25 3-3.25s3 1.45 3 3.25V18M10.5 10.5V18"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path
        d="M9 19c-4.5 1.4-4.5-2.5-6-3m12 6v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6A4.7 4.7 0 0 0 18.8 7 4.4 4.4 0 0 0 18.7 3S17.7 2.7 15 4.5a13.4 13.4 0 0 0-6 0C6.3 2.7 5.3 3 5.3 3A4.4 4.4 0 0 0 5.2 7 4.7 4.7 0 0 0 4 10.5c0 4.6 2.7 5.7 5.5 6-.5.5-.6 1-.5 2V22"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactoPage() {
  return (
    <main className="site-background min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="pb-24 pt-36">
        <Container>
          <SectionHeading
            eyebrow="Contacto"
            title="Conversemos sobre datos, estadística e inteligencia artificial"
            description="Estoy disponible para colaborar en proyectos profesionales, investigación aplicada, docencia y desarrollo de soluciones basadas en datos."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Bloque principal */}
            <Card className="relative overflow-hidden p-8 sm:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"
              />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Disponible para nuevas oportunidades
                </div>

                <h2 className="mt-7 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                  ¿Tienes un proyecto, una propuesta o una idea?
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                  Podemos conversar sobre análisis estadístico, ciencia de
                  datos, simulación, aprendizaje automático, automatización de
                  procesos, investigación o colaboración académica.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <ButtonLink href={`mailto:${email}`}>
                    Enviar correo
                  </ButtonLink>

                  <ButtonLink
                    href="/cv-fabian-vargas.pdf"
                    variant="outline"
                    download
                  >
                    Descargar CV
                  </ButtonLink>
                </div>

                <div className="mt-10 grid gap-5 border-t border-slate-800 pt-8 sm:grid-cols-3">
                  <div>
                    <p className="text-sm text-slate-500">Ubicación</p>
                    <p className="mt-2 font-medium text-slate-200">
                      Chile
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Tiempo de respuesta
                    </p>
                    <p className="mt-2 font-medium text-slate-200">
                      24–48 horas
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Modalidad
                    </p>
                    <p className="mt-2 font-medium text-slate-200">
                      Remota o presencial
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Enlaces */}
            <div className="flex flex-col gap-4">
              {contactLinks.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={
                    contact.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={`Contactar mediante ${contact.label}`}
                  className="group flex flex-1 items-start gap-5 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900/80"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-cyan-400 transition group-hover:border-cyan-500/40 group-hover:text-cyan-300">
                    <ContactIcon type={contact.icon} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-semibold text-white">
                        {contact.label}
                      </p>

                      <span
                        aria-hidden="true"
                        className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-300"
                      >
                        →
                      </span>
                    </div>

                    <p className="mt-2 break-all text-sm text-cyan-400">
                      {contact.value}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {contact.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Áreas de colaboración */}
          <Card className="mt-8 p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Colaboración
                </p>

                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Áreas en las que puedo aportar
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  Estas son algunas de las áreas en las que puedo participar,
                  tanto en proyectos académicos como profesionales.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {collaborationAreas.map((area) => (
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