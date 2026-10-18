import type { VisualId } from "@/data/projects";
import { CareerFlow } from "./career-flow";
import { InferenceFrame } from "./inference-frame";
import { SprayerSystem } from "./sprayer-system";
import { StudentPipeline } from "./student-pipeline";

export function ProjectVisual({ id }: { id: VisualId }) {
  switch (id) {
    case "sprayer-system":
      return <SprayerSystem />;
    case "sprayer-detection":
      return <InferenceFrame />;
    case "student-pipeline":
      return <StudentPipeline />;
    case "career-flow":
      return <CareerFlow />;
  }
}
