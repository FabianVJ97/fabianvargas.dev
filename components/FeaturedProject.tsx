import Link from "next/link";
import Badge from "@/components/ui/Badge";
import ButtonLink from "@/components/ui/ButtonLink";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import NetworkVisual from "@/components/NetworkVisual";

const technologies = [
  "MATLAB",
  "Python",
  "Redes neuronales",
  "Machine Learning",
  "Validación de modelos",
];

export default function FeaturedProject() {
  return (
    <section className="border-t border-slate-800 py-24">
      <Container>
        <Card className="overflow-hidden">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="outline">Proyecto destacado</Badge>

                <span className="text-sm font-medium text-cyan-400">
                  Proyecto de título
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Exportación y validación de redes neuronales entre MATLAB y
                Python
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Desarrollo de un mecanismo para transferir redes neuronales
                feedforward entrenadas en MATLAB hacia Python, preservando su
                arquitectura, pesos, sesgos, normalización y comportamiento
                predictivo.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="font-mono text-2xl font-semibold text-cyan-300">
                    4-10-20-5-3
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Arquitectura final
                  </p>
                </div>

                <div>
                  <p className="font-mono text-2xl font-semibold text-cyan-300">
                    6.8
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Nota final
                  </p>
                </div>

                <div>
                  <p className="font-mono text-2xl font-semibold text-cyan-300">
                    Iris
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Conjunto de datos
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/proyectos/redes-neuronales">
                  Ver proyecto completo
                </ButtonLink>

                <Link
                  href="/#proyectos"
                  className="inline-flex items-center justify-center px-2 py-3 font-semibold text-slate-300 transition hover:text-cyan-300"
                >
                  Ver otros proyectos →
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <NetworkVisual />
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}