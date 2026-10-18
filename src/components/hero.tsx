import { ArrowDown, Download, Mail } from "lucide-react";
import { hero, profile } from "@/data/site";
import { ButtonAnchor, ButtonLink } from "./button-link";
import { HeroPortrait } from "./hero-portrait";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function Hero() {
  const socials = [
    profile.links.github && { label: "GitHub", href: profile.links.github, Icon: GitHubIcon },
    profile.links.linkedin && { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedInIcon },
  ].filter(Boolean) as { label: string; href: string; Icon: typeof GitHubIcon }[];

  return (
    <section aria-labelledby="hero-heading" className="container-page">
      <div className="grid gap-12 pt-12 pb-20 md:grid-cols-12 md:items-center md:gap-8 md:pt-16 lg:gap-12 lg:pt-20 lg:pb-28">
        <div className="hero-in md:col-span-7">
          <p className="text-lg text-ink-2">Hi, I’m {profile.name}.</p>
          <h1
            id="hero-heading"
            className="mt-4 font-serif text-[42px] leading-[1.03] tracking-[-0.02em] text-balance sm:text-[54px] md:text-[46px] lg:text-[62px] xl:text-[72px]"
          >
            {hero.headline}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-2 md:text-[17px] lg:text-lg">
            {hero.supporting}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <ButtonLink href="/#projects" variant="primary">
              Explore Projects
              <ArrowDown className="size-4" aria-hidden="true" strokeWidth={1.75} />
            </ButtonLink>
            <ButtonAnchor
              href={profile.resume.href}
              download={profile.resume.fileName}
              variant="secondary"
            >
              <Download className="size-4" aria-hidden="true" strokeWidth={1.75} />
              Download Resume
            </ButtonAnchor>
          </div>

          <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px] text-ink-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-ink"
                >
                  <Icon className="size-4" />
                  {label}
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-ink"
              >
                <Mail className="size-4" aria-hidden="true" strokeWidth={1.75} />
                Email
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-5">
          <HeroPortrait
            src={profile.photo.src}
            alt={profile.photo.alt}
            tag="MALLIKARJUN"
          />
        </div>
      </div>
    </section>
  );
}
