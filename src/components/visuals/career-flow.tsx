import { ArrowDefs, Bar, Label, Node, Wire } from "./diagram-parts";

/** Wireframe-style sketch of the Career Guidance System flow. Bars stand in for text. */
export function CareerFlow() {
  const m = "arrow-career";
  return (
    <svg
      viewBox="0 0 640 420"
      role="img"
      aria-label="Illustrative wireframe: an assessment quiz screen sends answers to a Django backend, which returns a ranked list of recommended career paths."
      className="block h-auto w-full"
    >
      <ArrowDefs id={m} />

      {/* assessment screen */}
      <g>
        <rect x={24} y={36} width={224} height={320} className="fill-paper stroke-ink" strokeWidth="1.25" />
        <line x1={24} y1={62} x2={248} y2={62} className="stroke-ink" strokeWidth="1.25" />
        {[38, 50, 62].map((cx) => (
          <circle key={cx} cx={cx} cy={49} r={3.5} className="fill-rule" />
        ))}
        <Bar x={40} y={80} w={192} h={4} />
        <Bar x={40} y={80} w={84} h={4} tone="accent" />
        <Bar x={40} y={104} w={172} h={9} tone="dark" />
        <Bar x={40} y={120} w={120} h={9} tone="dark" />
        {[0, 1, 2, 3].map((i) => {
          const y = 148 + i * 40;
          const selected = i === 1;
          return (
            <g key={i}>
              <rect
                x={40}
                y={y}
                width={192}
                height={30}
                className={selected ? "fill-paper-2 stroke-accent" : "fill-paper stroke-rule"}
                strokeWidth={selected ? 1.5 : 1.25}
              />
              <circle cx={56} cy={y + 15} r={6} className={selected ? "fill-accent" : "fill-paper stroke-ink-3"} />
              <Bar x={72} y={y + 11} w={[96, 120, 80, 108][i]} />
            </g>
          );
        })}
        <rect x={160} y={318} width={72} height={24} className="fill-ink" />
        <Bar x={176} y={327} w={40} h={6} />
      </g>
      <Label x={24} y={384}>ASSESSMENT</Label>

      <Wire d="M248 196 L276 196" marker={m} />
      <Node x={278} y={156} w={110} h={80} title="Django" sub={["process", "answers"]} emphasis />
      <Wire d="M388 196 L416 196" marker={m} />
      <Label x={333} y={384} anchor="middle">BACKEND</Label>

      {/* recommendations screen */}
      <g>
        <rect x={418} y={36} width={198} height={320} className="fill-paper stroke-ink" strokeWidth="1.25" />
        <line x1={418} y1={62} x2={616} y2={62} className="stroke-ink" strokeWidth="1.25" />
        {[432, 444, 456].map((cx) => (
          <circle key={cx} cx={cx} cy={49} r={3.5} className="fill-rule" />
        ))}
        <Bar x={434} y={84} w={140} h={9} tone="dark" />
        {[0, 1, 2].map((i) => {
          const y = 116 + i * 74;
          return (
            <g key={i}>
              {i === 0 ? <rect x={418} y={y - 6} width={3} height={58} className="fill-accent" /> : null}
              <text x={434} y={y + 12} className="fill-ink-3 font-mono" fontSize="12">
                {`0${i + 1}`}
              </text>
              <Bar x={460} y={y + 4} w={[112, 96, 104][i]} h={9} tone="dark" />
              <Bar x={460} y={y + 24} w={136} />
              <Bar x={460} y={y + 36} w={100} />
            </g>
          );
        })}
      </g>
      <Label x={616} y={384} anchor="end">RECOMMENDED PATHS</Label>
    </svg>
  );
}
