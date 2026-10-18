import { ArrowUpRight, Mail } from "lucide-react";
import { CopyEmail } from "@/components/copy-email";
import { Hero } from "@/components/hero";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { projects } from "@/data/projects";
import { about, certifications, education, profile, skills } from "@/data/site";

export default function Home() {
  const [flagship, ...rest] = projects;

  const contactRows = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail, external: false },
    profile.links.linkedin && {
      label: "LinkedIn",
      value: profile.links.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
      href: profile.links.linkedin,
      Icon: LinkedInIcon,
      external: true,
    },
    profile.links.github && {
      label: "GitHub",
      value: profile.links.github.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
      href: profile.links.github,
      Icon: GitHubIcon,
      external: true,
    },
  ].filter(Boolean) as {
    label: string;
    value: string;
    href: string;
    Icon: typeof Mail | typeof GitHubIcon;
    external: boolean;
  }[];

  return (
    <>
      <Hero />

      <Section
        id="projects"
        label="Selected projects"
        wide
        title="Three projects across computer vision, machine learning and full-stack development.">
        <div className="space-y-20 md:space-y-24">
          <Reveal>
            <ProjectCard project={flagship} featured />
          </Reveal>
          <div className="grid gap-20 md:grid-cols-2 md:gap-10">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="about" label="About">
        <div className="max-w-3xl space-y-6 font-serif text-xl leading-[1.55] text-ink md:text-[22px]">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </Section>

      <Section id="skills" label="Technical skills">
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <div key={group.title}>
              <h3 className="flex items-baseline gap-3 border-b border-rule pb-3">
                <span className="font-mono text-xs text-ink-3">0{i + 1}</span>
                <span className="font-medium">{group.title}</span>
              </h3>
              <ul className="mt-4 space-y-2 text-ink-2">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" label="Education">
        <ol className="border-t border-ink">
          {education.map((e) => (
            <li
              key={e.institution}
              className="grid gap-1 border-b border-rule py-6 sm:grid-cols-[1fr_auto] sm:gap-x-8"
            >
              <div>
                <h3 className="font-serif text-xl leading-snug tracking-tight md:text-2xl">
                  {e.qualification}
                </h3>
                <p className="mt-1 text-ink-2">{e.institution}</p>
              </div>
              <div className="mt-2 flex gap-4 font-mono text-[13px] text-ink-3 sm:mt-1 sm:flex-col sm:items-end sm:gap-1">
                <span>{e.period}</span>
                <span className="text-ink">{e.score}</span>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="certifications" label="Certifications">
        <ul className="border-t border-ink">
          {certifications.map((c) => (
            <li
              key={c.title}
              className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-rule py-5"
            >
              <span className="text-lg font-medium">{c.title}</span>
              <span className="font-mono text-[13px] text-ink-3">{c.issuer}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="contact"
        label="Contact"
        title="For roles, collaborations or questions about a project, email is the best way to reach me."
      >
        <ul className="border-t border-ink">
          {contactRows.map(({ label, value, href, Icon, external }) => (
            <li key={label} className="border-b border-rule">
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group grid grid-cols-[6rem_1fr_auto] items-center gap-4 py-5 sm:grid-cols-[10rem_1fr_auto]"
              >
                <span className="label inline-flex items-center gap-2">
                  <Icon className="size-3.5" aria-hidden="true" />
                  {label}
                </span>
                <span className="min-w-0 truncate text-lg transition-colors group-hover:text-accent sm:text-xl">
                  {value}
                </span>
                <ArrowUpRight
                  className="size-5 text-ink-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent motion-reduce:transition-none"
                  aria-hidden="true"
                />
                {external ? <span className="sr-only">(opens in a new tab)</span> : null}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <CopyEmail email={profile.email} />
        </div>
      </Section>
    </>
  );
}
