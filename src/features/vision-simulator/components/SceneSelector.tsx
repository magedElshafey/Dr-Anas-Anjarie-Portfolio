// src/features/vision-simulator/components/SceneSelector.tsx
import React from "react";
import ChipButton from "./ChipButton";
import type { SceneConfig, VisionSceneId } from "../data/data";
type Props = {
  scenes: SceneConfig[];
  selected: VisionSceneId;
  onChange: (id: VisionSceneId) => void;
};

const SceneSelector: React.FC<Props> = ({ scenes, selected, onChange }) => {
  return (
    <section
      aria-label="Scene selection"
      className="bg-[var(--vision-panel-bg)] border border-[var(--vision-panel-border)] rounded-2xl p-4 md:p-5"
    >
      <h2 className="text-sm font-semibold mb-3">Choose a scene</h2>
      <p className="text-xs md:text-sm text-[var(--vision-text-muted)] mb-4">
        Select a real-world situation to see how each lens performs.
      </p>

      <div className="flex flex-wrap gap-2">
        {scenes.map((scene) => (
          <ChipButton
            key={scene.id}
            active={scene.id === selected}
            label={scene.label}
            onClick={() => onChange(scene.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default SceneSelector;
