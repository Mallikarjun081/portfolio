import type { ReactNode } from "react";
import { Reveal } from "./reveal";

/**
 * A page section that starts on a hairline rule. The heading sits in the
 * left column on desktop and above the content on mobile; `wide` lets the
 * body use the full width under the heading instead.
 */
export function Section({
  id,
  heading,
  wide = false,
  children,
}: {
  id: string;
  heading: string;
  wide?: boolean;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;
  const h2 = (
    <h2 id={headingId} className="font-serif text-[28px] leading-tight tracking-tight md:text-[32px]">
      {heading}
    </h2>
  );

  return (
    <section id={id} aria-labelledby={headingId} className="container-page">
      {wide ? (
        <div className="border-t border-rule py-20 md:py-28">
          {h2}
          <div className="mt-10 md:mt-14">{children}</div>
        </div>
      ) : (
        <div className="grid gap-x-10 gap-y-8 border-t border-rule py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-3">
            <div className="md:sticky md:top-24">{h2}</div>
          </div>
          <Reveal className="md:col-span-9">{children}</Reveal>
        </div>
      )}
    </section>
  );
}
