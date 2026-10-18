import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { GitHubIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { ProjectVisual } from "@/components/visuals/project-visual";
import { getProject, projects } from "@/data/projects";

// Only the slugs from generateStaticParams exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-rule py-10 first:border-t-0 first:pt-0 md:py-12">
      <h2 className="label mb-5">{title}</h2>
      {children}
    </section>
  );
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const i = projects.indexOf(project);
  const next = projects[(i + 1) % projects.length];
  const [leadVisual, ...moreVisuals] = project.pageVisuals;
  const links = [
    project.links.github && { label: "Source code", href: project.links.github, github: true },
    project.links.demo && { label: "Live demo", href: project.links.demo, github: false },
  ].filter(Boolean) as { label: string; href: string; github: boolean }[];

  return (
    <article className="container-page pt-10 pb-20 md:pt-14 md:pb-28">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-[15px] text-ink-2 transition-colors hover:text-ink"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        All projects
      </Link>

      <header className="mt-12 max-w-4xl md:mt-16">
        <p className="label">
          <span className="text-ink">{project.index}</span>
          <span aria-hidden="true"> / </span>
          {project.categories.join(" · ")}
        </p>
        <h1 className="mt-5 font-serif text-[40px] leading-[1.05] tracking-[-0.02em] text-balance md:text-6xl lg:text-7xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2 md:text-xl">
          {project.summary}
        </p>
      </header>

      <Reveal>
        <figure className="mt-12 md:mt-16">
          <div className="border border-rule bg-paper-2 p-4 sm:p-8 md:p-12">
            <div className="mx-auto max-w-3xl">
              <ProjectVisual id={leadVisual.id} />
            </div>
          </div>
          <figcaption className="mt-3 text-[13px] leading-snug text-ink-3">{leadVisual.caption}</figcaption>
        </figure>
      </Reveal>

      <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
        <aside className="md:col-span-4 lg:col-span-3">
          <dl className="space-y-6 border-t border-ink pt-5 md:sticky md:top-24">
            <div>
              <dt className="label">Category</dt>
              <dd className="mt-2 text-[15px] leading-relaxed">{project.categories.join(", ")}</dd>
            </div>
            <div>
              <dt className="label">Software</dt>
              <dd className="mt-2">
                <ul className="text-[15px] leading-relaxed">
                  {project.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </dd>
            </div>
            {project.hardware?.length ? (
              <div>
                <dt className="label">Hardware</dt>
                <dd className="mt-2">
                  <ul className="text-[15px] leading-relaxed">
                    {project.hardware.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ) : null}
            {links.length ? (
              <div>
                <dt className="label">Links</dt>
                <dd className="mt-2 space-y-1.5">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[15px] underline decoration-rule underline-offset-4 hover:decoration-accent"
                    >
                      {l.github ? <GitHubIcon className="size-4" /> : null}
                      {l.label}
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ))}
                </dd>
              </div>
            ) : null}
          </dl>
        </aside>

        <div className="max-w-2xl md:col-span-8 lg:col-span-8 lg:col-start-5">
          <Block title="Overview">
            <p className="font-serif text-xl leading-[1.55] md:text-[22px]">{project.overview}</p>
          </Block>

          <Block title="Problem">
            <p className="text-lg leading-relaxed text-ink-2">{project.problem}</p>
          </Block>

          <Block title="Objective">
            <p className="text-lg leading-relaxed text-ink-2">{project.objective}</p>
          </Block>

          <Block title="My contribution">
            <ul className="space-y-3 text-lg leading-relaxed text-ink-2">
              {project.contribution.map((c) => (
                <li key={c} className="relative pl-6">
                  <span aria-hidden="true" className="absolute top-[0.8em] left-0 h-px w-3 bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Technical approach">
            <ol className="border-t border-rule">
              {project.approach.map((step, n) => (
                <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-x-2 border-b border-rule py-5">
                  <span className="pt-0.5 font-mono text-[13px] text-ink-3">0{n + 1}</span>
                  <div>
                    <h3 className="font-medium">{step.title}</h3>
                    <p className="mt-1 leading-relaxed text-ink-2">{step.body}</p>
                    {step.tools ? (
                      <p className="mt-2 font-mono text-[12px] tracking-wide text-ink-3">{step.tools}</p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </Block>

          {moreVisuals.map((v) => (
            <figure key={v.id} className="pb-10 md:pb-12">
              <div className="border border-rule bg-paper-2 p-4 sm:p-8">
                <div className="mx-auto max-w-md">
                  <ProjectVisual id={v.id} />
                </div>
              </div>
              <figcaption className="mt-3 text-[13px] leading-snug text-ink-3">{v.caption}</figcaption>
            </figure>
          ))}

          {project.results.length ? (
            <Block title="Results">
              <dl className="grid gap-6 sm:grid-cols-2">
                {project.results.map((r) => (
                  <div key={r.label} className="border-t border-ink pt-3">
                    <dt className="label">{r.label}</dt>
                    <dd className="mt-1 font-serif text-3xl">{r.value}</dd>
                  </div>
                ))}
              </dl>
            </Block>
          ) : null}

          <Block title="Outcome & learnings">
            <p className="text-lg leading-relaxed">{project.outcome}</p>
            <ul className="mt-6 space-y-3 text-lg leading-relaxed text-ink-2">
              {project.learnings.map((l) => (
                <li key={l} className="relative pl-6">
                  <span aria-hidden="true" className="absolute top-[0.8em] left-0 h-px w-3 bg-ink-3" />
                  {l}
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </div>

      <nav
        aria-label="More projects"
        className="mt-16 flex flex-col gap-6 border-t border-ink pt-8 sm:flex-row sm:items-start sm:justify-between md:mt-24"
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[15px] text-ink-2 transition-colors hover:text-ink"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to all projects
        </Link>
        <Link href={`/projects/${next.slug}`} className="group text-left sm:text-right">
          <span className="label block">Next project · {next.index}</span>
          <span className="mt-2 inline-flex items-center gap-2 font-serif text-2xl tracking-tight md:text-3xl">
            {next.title}
            <ArrowRight
              className="size-5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </span>
        </Link>
      </nav>
    </article>
  );
}
