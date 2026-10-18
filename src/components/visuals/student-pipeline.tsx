import { ArrowDefs, Bar, Label, Node, Wire } from "./diagram-parts";

/** Illustrative train/serve pipeline for the Student Performance Prediction System. */
export function StudentPipeline() {
  const m = "arrow-student";
  const rows = [
    [38, 52, 30],
    [46, 40, 26],
    [30, 56, 34],
    [42, 36, 22],
    [36, 48, 30],
  ];
  return (
    <svg
      viewBox="0 0 640 420"
      role="img"
      aria-label="Illustrative pipeline: historical student records are preprocessed with Pandas, reduced through feature selection and used to train a Scikit-learn model. A Django REST Framework API receives student data, returns a prediction, and stores records and results in SQL."
      className="block h-auto w-full"
    >
      <ArrowDefs id={m} />

      <Label x={24} y={40}>TRAIN</Label>
      {/* records table */}
      <g>
        <rect x={24} y={56} width={150} height={128} className="fill-paper stroke-ink" strokeWidth="1.25" />
        <rect x={24} y={56} width={150} height={26} className="fill-paper-2 stroke-ink" strokeWidth="1.25" />
        <text x={36} y={74} className="fill-ink font-sans" fontSize="13" fontWeight="500">
          Student records
        </text>
        {rows.map((r, i) => (
          <g key={i}>
            <Bar x={36} y={94 + i * 17} w={r[0]} />
            <Bar x={86} y={94 + i * 17} w={r[1] * 0.6} />
            <Bar x={128} y={94 + i * 17} w={r[2]} />
          </g>
        ))}
      </g>
      <Wire d="M174 120 L204 120" marker={m} />
      <Node x={206} y={84} w={124} h={72} title="Preprocess" sub={["Pandas"]} />
      <Wire d="M330 120 L352 120" marker={m} />
      <Node x={354} y={84} w={116} h={72} title="Features" sub={["selection"]} />
      <Wire d="M470 120 L492 120" marker={m} />
      <Node x={494} y={72} w={122} h={96} title="Model" sub={["Scikit-learn", "train · eval"]} emphasis />

      <line x1={24} y1={226} x2={616} y2={226} className="stroke-rule" strokeDasharray="3 5" />

      <Label x={24} y={262}>SERVE</Label>
      <Node x={24} y={286} w={120} h={64} title="Client" />
      <Wire d="M144 306 L210 306" marker={m} />
      <Label x={177} y={296} anchor="middle">DATA</Label>
      <Wire d="M210 334 L146 334" marker={m} />
      <Label x={177} y={356} anchor="middle">RESULT</Label>

      <Node x={212} y={276} w={176} h={84} title="REST API" sub={["Django REST", "Framework"]} />

      <Wire d="M555 168 L555 248 L300 248 L300 274" marker={m} />
      <Label x={566} y={210}>PREDICT</Label>

      <Wire d="M388 318 L438 318" marker={m} />
      {/* database */}
      <g>
        <path
          d="M442 290 v56 a64 12 0 0 0 128 0 v-56"
          className="fill-paper stroke-ink"
          strokeWidth="1.25"
        />
        <ellipse cx={506} cy={290} rx={64} ry={12} className="fill-paper-2 stroke-ink" strokeWidth="1.25" />
        <text x={506} y={326} textAnchor="middle" className="fill-ink font-sans" fontSize="16" fontWeight="500">
          SQL
        </text>
        <text x={506} y={346} textAnchor="middle" className="fill-ink-3 font-mono" fontSize="11">
          records · results
        </text>
      </g>
    </svg>
  );
}
