import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/types/Project";


export default function ProjectCard({
  title,
  category,
  description,
  technologies,
  status,
  href,
}: Project) {
  return (
    <Card
      interactive
      className="group flex min-h-80 flex-col p-7"
    >
      <div className="flex items-start justify-between gap-5">
        <p className="text-sm font-medium text-cyan-400">
          {category}
        </p>

        <Badge variant="outline">
          {status}
          </Badge>

      </div>

      <h3 className="mt-6 text-2xl font-bold transition group-hover:text-cyan-300">
        {title}
      </h3>

      <p className="mt-4 flex-1 leading-7 text-slate-400">
        {description}
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <Badge key={technology}>
            {technology}
          </Badge>
        ))}
      </div>

      <Link
        href={href}
        className="mt-7 inline-flex font-semibold text-white transition group-hover:text-cyan-300"
      >
        Explorar proyecto →
      </Link>
    </Card>
  );
}