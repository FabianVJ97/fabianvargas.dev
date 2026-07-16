import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const stats = [
  {
    value: "10+",
    label: "Proyectos desarrollados",
  },
  {
    value: "R · Python · MATLAB",
    label: "Lenguajes principales",
  },
  {
    value: "6.8",
    label: "Nota proyecto de título",
  },
  {
    value: "2026",
    label: "Inicio de docencia universitaria",
  },
];

export default function Stats() {
  return (
    <section className="pb-24">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="p-6"
            >
              <p className="font-mono text-2xl font-semibold text-cyan-300">
                {stat.value}
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}