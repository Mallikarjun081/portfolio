/**
 * Illustrative "camera frame" for the Smart Sprayer: a pomegranate branch
 * with detection boxes drawn over it. Not real model output.
 */

const LEAF = "M0 0 C26 -30 36 -80 0 -150 C-36 -80 -26 -30 0 0 Z";
const VEINS =
  "M0 -28 L13 -44 M0 -28 L-13 -44 M0 -58 L17 -76 M0 -58 L-17 -76 M0 -88 L15 -106 M0 -88 L-15 -106 M0 -116 L9 -130 M0 -116 L-9 -130";

type LeafProps = { x: number; y: number; r: number; s?: number; diseased?: boolean };

function Leaf({ x, y, r, s = 1, diseased }: LeafProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <path
        d={LEAF}
        fill={diseased ? "#e4dfc4" : "#d9e0cf"}
        stroke="#3f5b3a"
        strokeWidth={1.3 / s}
        strokeLinejoin="round"
      />
      <path d="M0 -3 Q2 -70 0 -142" fill="none" stroke="#3f5b3a" strokeWidth={1 / s} />
      <path d={VEINS} fill="none" stroke="#3f5b3a" strokeOpacity="0.45" strokeWidth={0.8 / s} />
      {diseased ? (
        <g>
          <circle cx="5" cy="-50" r="5.5" fill="#8a5a36" />
          <circle cx="5" cy="-50" r="8.5" fill="none" stroke="#8a5a36" strokeOpacity="0.35" />
          <circle cx="-7" cy="-80" r="4" fill="#8a5a36" />
          <circle cx="8" cy="-100" r="6" fill="#7a4b2c" />
          <circle cx="8" cy="-100" r="9" fill="none" stroke="#7a4b2c" strokeOpacity="0.3" />
          <circle cx="-4" cy="-92" r="1.8" fill="#8a5a36" />
          <circle cx="11" cy="-64" r="1.6" fill="#8a5a36" />
        </g>
      ) : null}
    </g>
  );
}

type Anim = { animate: boolean };

function Tag({
  x,
  y,
  text,
  tone,
  animate,
}: Anim & { x: number; y: number; text: string; tone: "accent" | "ink" }) {
  const w = text.length * 6.6 + 10;
  return (
    <g className={animate ? "fade-in" : undefined} style={animate ? { animationDelay: "900ms" } : undefined}>
      <rect x={x} y={y} width={w} height={14} className={tone === "accent" ? "fill-accent" : "fill-ink"} />
      <text x={x + 5} y={y + 10.5} className="fill-paper font-mono" fontSize="10" letterSpacing="0.06em">
        {text}
      </text>
    </g>
  );
}

function Box({
  x,
  y,
  w,
  h,
  tone,
  delay,
  animate,
}: Anim & {
  x: number;
  y: number;
  w: number;
  h: number;
  tone: "accent" | "ink";
  delay: number;
}) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      pathLength={1}
      fill="none"
      className={`${animate ? "draw-in" : ""} ${tone === "accent" ? "stroke-accent" : "stroke-ink"}`}
      strokeWidth={tone === "accent" ? 1.6 : 1}
      style={animate ? { animationDelay: `${delay}ms` } : undefined}
    />
  );
}

export function InferenceFrame({ animate = false }: { animate?: boolean }) {
  return (
    <svg
      viewBox="0 0 440 440"
      role="img"
      aria-label="Illustrative sketch: a pomegranate branch seen through a camera frame, with boxes marking a leaf and two discoloured regions."
      className="block h-auto w-full"
    >
      {/* sensor grid */}
      <g className="stroke-rule" strokeWidth="0.75">
        {Array.from({ length: 10 }, (_, i) => (
          <line key={`v${i}`} x1={40 + i * 40} y1={20} x2={40 + i * 40} y2={420} />
        ))}
        {Array.from({ length: 10 }, (_, i) => (
          <line key={`h${i}`} x1={20} y1={40 + i * 40} x2={420} y2={40 + i * 40} />
        ))}
      </g>

      {/* crop marks */}
      <path
        d="M20 40 V20 H40 M400 20 H420 V40 M420 400 V420 H400 M40 420 H20 V400"
        fill="none"
        className="stroke-ink"
        strokeWidth="1.5"
      />
      <text x="32" y="38" className="fill-ink-3 font-mono" fontSize="10" letterSpacing="0.08em">
        INPUT FRAME
      </text>
      <text x="408" y="38" textAnchor="end" className="fill-ink-3 font-mono" fontSize="10" letterSpacing="0.08em">
        SKETCH
      </text>

      {/* branch */}
      <path
        d="M220 432 C222 360 212 290 222 220 S238 130 236 96"
        fill="none"
        stroke="#3f5b3a"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <Leaf x={221} y={372} r={-58} />
      <Leaf x={219} y={322} r={52} />
      <Leaf x={216} y={262} r={-48} s={0.95} />
      <Leaf x={224} y={205} r={40} s={0.95} diseased />
      <Leaf x={231} y={152} r={-34} s={0.8} />
      <Leaf x={236} y={104} r={22} s={0.6} />

      {/* detections */}
      <Box x={98} y={150} w={134} h={120} tone="ink" delay={300} animate={animate} />
      <Tag x={98} y={136} text="LEAF" tone="ink" animate={animate} />
      <Box x={244} y={158} w={28} h={28} tone="accent" delay={550} animate={animate} />
      <Tag x={244} y={188} text="REGION A" tone="accent" animate={animate} />
      <Box x={256} y={123} w={48} h={32} tone="accent" delay={700} animate={animate} />
      <Tag x={256} y={109} text="REGION B" tone="accent" animate={animate} />

      {/* scan line, runs once */}
      {animate ? (
        <rect
          x="20"
          y="24"
          width="400"
          height="1.5"
          className="scan-line fill-accent"
          opacity="0"
          style={{ ["--scan-distance" as string]: "392px" }}
        />
      ) : null}
    </svg>
  );
}
