import { ArrowDefs, Label, Node, Wire } from "./diagram-parts";

/** Illustrative block diagram of the Smart Sprayer hardware. */
export function SprayerSystem() {
  const m = "arrow-sprayer";
  return (
    <svg
      viewBox="0 0 640 420"
      role="img"
      aria-label="Illustrative block diagram: the Raspberry Pi Camera Module sends frames to a Raspberry Pi 4 running OpenCV and TensorFlow Lite, which passes decisions to an Arduino Uno that controls drive motors, obstacle detection and the spray mechanism."
      className="block h-auto w-full"
    >
      <ArrowDefs id={m} />

      {/* crop */}
      <g transform="translate(96 350) rotate(-14)">
        <path d="M0 0 C14 -18 20 -46 0 -86 C-20 -46 -14 -18 0 0 Z" fill="#d9e0cf" stroke="#3f5b3a" strokeWidth="1.25" />
        <path d="M0 -2 Q1 -40 0 -80" fill="none" stroke="#3f5b3a" strokeWidth="1" />
        <circle cx="3" cy="-46" r="4" fill="#8a5a36" />
      </g>
      <Label x={124} y={340}>CROP</Label>
      <Wire d="M102 252 L102 156" marker={m} dashed />

      <Node x={24} y={64} w={156} h={88} title="Camera" sub={["Pi Camera", "Module"]} />
      <Wire d="M180 108 L248 108" marker={m} />
      <Label x={214} y={98} anchor="middle">FRAMES</Label>

      <Node
        x={250}
        y={44}
        w={190}
        h={128}
        title="Raspberry Pi 4"
        sub={["detect disease", "OpenCV", "TensorFlow Lite"]}
        emphasis
      />

      <Wire d="M345 172 L345 246" marker={m} />
      <Label x={357} y={214}>DECISIONS</Label>

      <Node x={250} y={248} w={190} h={92} title="Arduino Uno" sub={["control"]} />

      <Node x={488} y={188} w={128} h={50} title="Drive motors" />
      <Node x={488} y={262} w={128} h={50} title="Obstacles" />
      <Node x={488} y={336} w={128} h={50} title="Sprayer" />

      <Wire d="M440 272 L462 272 L462 213 L486 213" marker={m} />
      <Wire d="M486 287 L442 287" marker={m} />
      <Wire d="M440 318 L462 318 L462 361 L486 361" marker={m} />

    </svg>
  );
}
