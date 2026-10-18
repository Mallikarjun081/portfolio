import type { ReactNode } from "react";
import { Reveal } from "./reveal";

/**
 * A page section that starts on a hairline rule, with a mono label in the
 * left "margin" on desktop and above the content on mobile. `wide` lets the
 * body use the full grid width under the label/title row.
 */
export function Section({
  id,
  label,
  title,
  wide = false,
  children,
}: {
  id: string;
  label: string;
  title?: ReactNode;
  wide?: boolean;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;
  const titleEl = title ? (
    <p className="max-w-3xl font-serif text-3xl leading-[1.15] tracking-tight text-balance md:text-[40px]">
      {title}
    </p>
  ) : null;

  return (
    <section id={id} aria-labelledby={headingId} className="container-page">
      <div className="grid gap-x-10 gap-y-8 border-t border-rule py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-3">
          <h2 id={headingId} className={`label ${wide ? "md:pt-3" : "md:sticky md:top-24"}`}>
            {label}
          </h2>
        </div>
        {wide ? (
          <>
            {titleEl ? <Reveal className="md:col-span-9">{titleEl}</Reveal> : null}
            <div className="mt-6 md:col-span-12 md:mt-12">{children}</div>
          </>
        ) : (
          <Reveal className="md:col-span-9">
            {titleEl ? <div className="mb-12">{titleEl}</div> : null}
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
