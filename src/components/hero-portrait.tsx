"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

/**
 * The hero photograph, framed like a camera viewfinder.
 *
 * - Fixed crop marks sit outside the photo; on desktop the photo tilts a few
 *   degrees toward the pointer and eases back when it leaves.
 * - A thin "face detection" bracket nods to the computer-vision work.
 * - Pointer effects only run on fine pointers with hover and no reduced-motion
 *   preference; touch devices get the static composition.
 *
 * The bracket coordinates are in the photo's own pixel space (1280 × 1600) and
 * the overlay uses `xMidYMin slice`, which matches `object-cover object-top`,
 * so the bracket stays on the face at both the 4:5 and 4:3 crops.
 */

const FACE = { x: 484, y: 240, w: 312, h: 432 };
const ARM = 56;

export function HeroPortrait({
  src,
  alt,
  tag,
}: {
  src: StaticImageData;
  alt: string;
  tag: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );

    let raf = 0;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const tick = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      const settled =
        Math.abs(target.x - current.x) < 0.002 && Math.abs(target.y - current.y) < 0.002;
      if (settled) Object.assign(current, target);
      el.style.setProperty("--px", current.x.toFixed(4));
      el.style.setProperty("--py", current.y.toFixed(4));
      raf = settled ? 0 : requestAnimationFrame(tick);
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      target.x = (e.clientX - r.left) / r.width - 0.5;
      target.y = (e.clientY - r.top) / r.height - 0.5;
      kick();
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      kick();
    };

    const attach = () => {
      el.addEventListener("pointermove", onMove, { passive: true });
      el.addEventListener("pointerleave", onLeave);
    };
    const detach = () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      onLeave();
    };
    const sync = () => (mq.matches ? attach() : detach());

    sync();
    mq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      detach();
      cancelAnimationFrame(raf);
    };
  }, []);

  const { x, y, w, h } = FACE;
  const brackets = [
    `M${x} ${y + ARM} V${y} H${x + ARM}`,
    `M${x + w - ARM} ${y} H${x + w} V${y + ARM}`,
    `M${x + w} ${y + h - ARM} V${y + h} H${x + w - ARM}`,
    `M${x + ARM} ${y + h} H${x} V${y + h - ARM}`,
  ];

  return (
    <div className="portrait-in group">
      <div ref={ref} className="relative p-3 sm:p-4">
        {/* viewfinder crop marks, fixed while the photo moves */}
        <span aria-hidden="true" className="absolute top-0 left-0 size-5 border-t-[1.5px] border-l-[1.5px] border-ink" />
        <span aria-hidden="true" className="absolute top-0 right-0 size-5 border-t-[1.5px] border-r-[1.5px] border-ink" />
        <span aria-hidden="true" className="absolute right-0 bottom-0 size-5 border-r-[1.5px] border-b-[1.5px] border-ink" />
        <span aria-hidden="true" className="absolute bottom-0 left-0 size-5 border-b-[1.5px] border-l-[1.5px] border-ink" />

        <div className="portrait-tilt relative aspect-[4/3] overflow-hidden rounded-[3px] bg-paper-2 md:aspect-[4/5]">
          <Image
            src={src}
            alt={alt}
            fill
            preload
            placeholder="blur"
            sizes="(min-width: 75rem) 460px, (min-width: 48rem) 40vw, 100vw"
            className="portrait-photo object-cover object-top"
          />
          <svg
            viewBox="0 0 1280 1600"
            preserveAspectRatio="xMidYMin slice"
            aria-hidden="true"
            className="portrait-photo pointer-events-none absolute inset-0 h-full w-full"
          >
            <g className="portrait-detect" fill="none" stroke="#f3f1eb" strokeWidth="4" strokeLinecap="square">
              {brackets.map((d) => (
                <path key={d} d={d} pathLength={1} className="detect-draw" />
              ))}
            </g>
            <g className="portrait-tag">
              <rect x={x} y={y - 72} width={tag.length * 27 + 36} height={56} className="fill-accent" />
              <text
                x={x + 18}
                y={y - 33}
                className="fill-paper font-mono"
                fontSize="34"
                letterSpacing="3"
              >
                {tag}
              </text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
