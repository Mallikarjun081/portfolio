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
    <section className="pt-12 first:pt-0 md:pt-14">
      <h2 className="mb-5 font-serif text-2xl tracking-tight md:text-[28px]">{title}</h2>
      {children}
    </section>
  );
}

function Meta({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div>
      <dt className="text-sm text-ink-3">{term}</dt>
      <dd className="mt-1 text-[15px] leading-relaxed">{children}</dd>
    </div>
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
        <p className="text-[15px] text-ink-3">{project.kind}</p>
        <h1 className="mt-3 font-serif text-[40px] leading-[1.05] tracking-[-0.02em] text-balance md:text-6xl lg:text-7xl">
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
          <dl className="space-y-5 border-t border-rule pt-5 md:sticky md:top-24">
            <Meta term="Built with">{project.stack.join(", ")}</Meta>
            {project.hardware?.length ? <Meta term="Hardware">{project.hardware.join(", ")}</Meta> : null}
            {links.length ? (
              <Meta term="Links">
                <span className="flex flex-col gap-1.5">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 underline decoration-rule underline-offset-4 hover:decoration-accent"
                    >
                      {l.github ? <GitHubIcon className="size-4" /> : null}
                      {l.label}
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ))}
                </span>
              </Meta>
            ) : null}
          </dl>
        </aside>

        <div className="max-w-2xl md:col-span-8 lg:col-start-5">
          <Block title="Overview">
            <div className="space-y-5 text-lg leading-relaxed text-ink-2">
              {project.overview.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </Block>

          <Block title="What I did">
            <ul className="list-disc space-y-2.5 pl-5 text-lg leading-relaxed text-ink-2 marker:text-ink-3">
              {project.built.map((c) => (
                <li key={c} className="pl-1">
                  {c}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="How it works">
            <ol className="list-decimal space-y-4 pl-5 text-lg leading-relaxed text-ink-2 marker:text-ink-3">
              {project.steps.map((step) => (
                <li key={step.title} className="pl-1">
                  <span className="font-medium text-ink">{step.title}.</span> {step.body}
                </li>
              ))}
            </ol>
          </Block>

          {moreVisuals.map((v) => (
            <figure key={v.id} className="pt-12 md:pt-14">
              <div className="border border-rule bg-paper-2 p-4 sm:p-8">
                <div className="mx-auto max-w-md">
                  <ProjectVisual id={v.id} />
                </div>
              </div>
              <figcaption className="mt-3 text-[13px] leading-snug text-ink-3">{v.caption}</figcaption>
            </figure>
          ))}

          <Block title="Result">
            <p className="text-lg leading-relaxed text-ink-2">{project.outcome}</p>
            {project.results.length ? (
              <dl className="mt-6 grid gap-6 sm:grid-cols-2">
                {project.results.map((r) => (
                  <div key={r.label} className="border-t border-rule pt-3">
                    <dt className="text-sm text-ink-3">{r.label}</dt>
                    <dd className="mt-1 font-serif text-3xl">{r.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </Block>
        </div>
      </div>

      <nav
        aria-label="More projects"
        className="mt-20 flex flex-col gap-6 border-t border-rule pt-8 sm:flex-row sm:items-start sm:justify-between md:mt-28"
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[15px] text-ink-2 transition-colors hover:text-ink"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to all projects
        </Link>
        <Link href={`/projects/${next.slug}`} className="group text-left sm:text-right">
          <span className="block text-sm text-ink-3">Next project</span>
          <span className="mt-1 inline-flex items-center gap-2 font-serif text-2xl tracking-tight md:text-3xl">
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
