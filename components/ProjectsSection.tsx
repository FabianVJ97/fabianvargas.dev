import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";


export default function ProjectsSection() {

const secondaryProjects = projects.filter(
  (project) => project.href !== "/proyectos/redes-neuronales"
);

  return (
  <section
    id="proyectos"
    className="border-t border-slate-800 py-24"
  >
    <Container>
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Proyectos"
          title="Trabajos destacados"
          description="Selección de proyectos de estadística, simulación, inteligencia artificial y desarrollo computacional."
        />

        <a
          href="#"
          className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          Ver todos los proyectos →
        </a>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {secondaryProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            category={project.category}
            description={project.description}
            technologies={project.technologies}
            status={project.status}
            href={project.href}
          />
        ))}
      </div>
    </Container>
  </section>
);
}