import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./visuals/project-visual";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const href = `/projects/${project.slug}`;
  const stack = [...project.stack, ...(project.hardware ?? [])];

  return (
    <article
      className={`group relative grid gap-6 ${featured ? "lg:grid-cols-12 lg:items-end lg:gap-10" : ""}`}
    >
      <div
        className={`overflow-hidden border border-rule bg-paper-2 p-4 sm:p-6 ${featured ? "lg:col-span-7" : ""}`}
      >
        <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
          <ProjectVisual id={project.cardVisual} />
        </div>
      </div>

      <div className={featured ? "lg:col-span-5 lg:pb-2" : ""}>
        <p className="label">
          <span className="text-ink">{project.index}</span>
          <span aria-hidden="true"> / </span>
          {project.categories.join(" · ")}
        </p>
        <h3
          className={`mt-3 font-serif tracking-tight text-balance ${featured ? "text-3xl md:text-[40px] md:leading-[1.1]" : "text-2xl md:text-[28px] md:leading-[1.15]"}`}
        >
          <Link href={href} className="after:absolute after:inset-0 focus-visible:outline-none">
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 max-w-xl leading-relaxed text-ink-2">{project.summary}</p>
        <p className="mt-4 font-mono text-[13px] leading-relaxed text-ink-3">
          {stack.join(" · ")}
        </p>
        <p className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium">
          <span className="underline decoration-rule underline-offset-4 transition-colors group-hover:decoration-accent">
            Read case study
          </span>
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            aria-hidden="true"
          />
        </p>
      </div>

      {/* Focus ring for the whole card, driven by the stretched title link. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 hidden outline-2 outline-offset-0 outline-accent group-has-[a:focus-visible]:block"
      />
    </article>
  );
}
