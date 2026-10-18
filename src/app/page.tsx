import { ArrowUpRight, Download } from "lucide-react";
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

  const socials = [
    profile.links.linkedin && { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedInIcon },
    profile.links.github && { label: "GitHub", href: profile.links.github, Icon: GitHubIcon },
  ].filter(Boolean) as { label: string; href: string; Icon: typeof GitHubIcon }[];

  return (
    <>
      <Hero />

      <Section id="projects" heading="Projects" wide>
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

      <Section id="about" heading="About">
        <div className="max-w-3xl space-y-6 font-serif text-xl leading-[1.55] text-ink md:text-[22px]">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </Section>

      <Section id="skills" heading="Skills">
        <dl className="border-t border-rule">
          {skills.map((group) => (
            <div
              key={group.title}
              className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[13rem_1fr] sm:gap-6"
            >
              <dt className="font-medium">{group.title}</dt>
              <dd className="leading-relaxed text-ink-2">{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="education" heading="Education">
        <ol className="border-t border-rule">
          {education.map((e) => (
            <li
              key={e.institution}
              className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[1fr_auto] sm:gap-x-8"
            >
              <div>
                <h3 className="text-lg font-medium leading-snug">{e.qualification}</h3>
                <p className="mt-0.5 text-ink-2">{e.institution}</p>
              </div>
              <p className="text-ink-3 tabular-nums sm:text-right">
                {e.period}
                <span className="block text-ink-2">{e.score}</span>
              </p>
            </li>
          ))}
        </ol>

        <h3 className="mt-14 font-medium">Certifications</h3>
        <ul className="mt-3 border-t border-rule">
          {certifications.map((c) => (
            <li
              key={c.title}
              className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-0.5 border-b border-rule py-4"
            >
              <span>{c.title}</span>
              <span className="text-ink-3">{c.issuer}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" heading="Contact">
        <p className="text-lg text-ink-2">The best way to reach me is by email.</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-3 inline-block font-serif text-[26px] leading-tight tracking-tight break-all underline decoration-rule decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent sm:text-4xl sm:break-normal"
        >
          {profile.email}
        </a>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 text-[15px] text-ink-2">
          <CopyEmail email={profile.email} />
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-ink"
            >
              <Icon className="size-4" />
              {label}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ))}
          <a
            href={profile.resume.href}
            download={profile.resume.fileName}
            className="inline-flex items-center gap-2 transition-colors hover:text-ink"
          >
            <Download className="size-4" aria-hidden="true" strokeWidth={1.75} />
            Resume (PDF)
          </a>
        </div>
      </Section>
    </>
  );
}
