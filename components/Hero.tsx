import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import NetworkVisual from "@/components/NetworkVisual";

const technologies = [
  "R",
  "Python",
  "MATLAB",
  "Machine Learning",
  "Simulación",
  "Next.js",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="flex min-h-screen items-center pb-20 pt-32"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Portafolio profesional
            </p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Estadística, datos y software para resolver problemas reales.
            </h1>

            <p className="mt-7 text-2xl font-medium text-slate-300">
              Soy Fabián Vargas, Ingeniero Estadístico y Científico de Datos.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Desarrollo soluciones basadas en estadística, simulación,
              inteligencia artificial y aprendizaje automático, transformando
              modelos matemáticos en herramientas reproducibles y útiles.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#proyectos">
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

            <div className="mt-12 flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-800 bg-slate-900/40 px-4 py-2 text-sm text-slate-400 backdrop-blur-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <NetworkVisual />
        </div>
      </Container>
    </section>
  );
}