import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const focusAreas = [
  "Inferencia estadística",
  "Simulación Monte Carlo",
  "Machine Learning",
  "Diseño de experimentos",
  "Modelos Bayesianos",
  "Automatización",
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="border-t border-slate-800 py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Sobre mí"
            title="Estadística, programación e investigación aplicada"
            description="Construyo soluciones analíticas combinando fundamentos estadísticos, programación y desarrollo computacional."
          />

          <div>
            <div className="space-y-5 text-lg leading-8 text-slate-400">
              <p>
                Mi formación se concentra en inferencia, simulación, modelos
                estadísticos, aprendizaje automático y análisis reproducible.
              </p>

              <p>
                Me interesa transformar modelos matemáticos en herramientas
                claras, verificables y útiles para investigación, docencia y
                toma de decisiones.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-slate-800 bg-slate-900/40 px-4 py-2 text-sm text-slate-400"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}