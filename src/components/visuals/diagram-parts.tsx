import type { ReactNode } from "react";

/** Shared building blocks for the illustrative SVG diagrams. */

export function ArrowDefs({ id }: { id: string }) {
  return (
    <defs>
      <marker
        id={id}
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M0 1 L9 5 L0 9" fill="none" className="stroke-ink" strokeWidth="1.4" />
      </marker>
    </defs>
  );
}

export function Node({
  x,
  y,
  w,
  h,
  title,
  sub,
  emphasis,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub?: string[];
  emphasis?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        className={emphasis ? "fill-paper stroke-accent" : "fill-paper stroke-ink"}
        strokeWidth={emphasis ? 1.75 : 1.25}
      />
      <text x={x + 14} y={y + 26} className="fill-ink font-sans" fontSize="16" fontWeight="500">
        {title}
      </text>
      {sub?.map((line, i) => (
        <text
          key={line}
          x={x + 14}
          y={y + 48 + i * 18}
          className={`font-mono ${emphasis && i === 0 ? "fill-accent" : "fill-ink-3"}`}
          fontSize="12"
          letterSpacing="0.03em"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

export function Label({
  x,
  y,
  children,
  anchor = "start",
}: {
  x: number;
  y: number;
  children: ReactNode;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      className="fill-ink-3 font-mono"
      fontSize="11"
      letterSpacing="0.08em"
    >
      {children}
    </text>
  );
}

export function Wire({ d, marker, dashed }: { d: string; marker: string; dashed?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      className="stroke-ink"
      strokeWidth="1.25"
      strokeDasharray={dashed ? "4 4" : undefined}
      markerEnd={`url(#${marker})`}
    />
  );
}

/** A grey placeholder bar, used for wireframe "text". */
export function Bar({
  x,
  y,
  w,
  h = 7,
  tone = "light",
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  tone?: "light" | "dark" | "accent";
}) {
  const cls = tone === "dark" ? "fill-ink-2" : tone === "accent" ? "fill-accent" : "fill-rule";
  return <rect x={x} y={y} width={w} height={h} rx={h / 2} className={cls} />;
}
