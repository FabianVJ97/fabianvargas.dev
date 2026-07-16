const experiences = [
  {
    period: "2026 - Actualidad",
    title: "Magíster en Estadística",
    institution: "Universidad del Bío-Bío",
    description:
      "Formación de postgrado orientada a métodos estadísticos avanzados, modelamiento, inferencia y análisis computacional.",
  },
  {
    period: "2026",
    title: "Docente de Estadística",
    institution: "Universidad del Bío-Bío",
    description:
      "Docencia en cursos de Estadística para estudiantes de Ingeniería en Ejecución Eléctrica y Mecánica.",
  },
  {
    period: "2025 - 2026",
    title: "Proyecto de título",
    institution: "Universidad del Bío-Bío",
    description:
      "Desarrollo de un mecanismo de exportación y validación de redes neuronales feedforward entre MATLAB y Python.",
  },
  {
    period: "2025",
    title: "Práctica profesional",
    institution: "GeoResource",
    description:
      "Participación en actividades de análisis de datos, automatización de procedimientos y generación de información para la toma de decisiones.",
  },
  {
    period: "2020 - 2026",
    title: "Ingeniería Estadística",
    institution: "Universidad del Bío-Bío",
    description:
      "Formación en inferencia estadística, simulación, modelos lineales, series de tiempo, diseño de experimentos y ciencia de datos.",
  },
];

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="mx-auto max-w-6xl border-t border-slate-800 px-6 py-24"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
        Experiencia
      </p>

      <div className="mt-4 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Formación y trayectoria
          </h2>

          <p className="mt-5 max-w-md leading-7 text-slate-400">
            Mi trayectoria combina formación estadística, docencia,
            investigación aplicada y desarrollo de soluciones computacionales.
          </p>
        </div>

        <div className="relative border-l border-slate-800 pl-8">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.title}-${experience.period}`}
              className={index === experiences.length - 1 ? "" : "pb-12"}
            >
              <span className="absolute -left-[7px] mt-2 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-slate-950" />

              <p className="text-sm font-semibold text-cyan-400">
                {experience.period}
              </p>

              <h3 className="mt-2 text-xl font-bold">
                {experience.title}
              </h3>

              <p className="mt-1 text-sm font-medium text-slate-300">
                {experience.institution}
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                {experience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}