import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <div className="container-page py-28 md:py-40">
      <p className="label">404</p>
      <h1 className="mt-5 max-w-2xl font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
        This page doesn’t exist.
      </h1>
      <p className="mt-6 max-w-lg text-lg text-ink-2">
        The link may be out of date. The projects are all on the homepage.
      </p>
      <ButtonLink href="/#projects" className="mt-10">
        View projects
      </ButtonLink>
    </div>
  );
}
