// src/features/vision-simulator/components/ConditionSelector.tsx
import React from "react";
import ChipButton from "./ChipButton";
import type { ConditionConfig, VisionConditionId } from "../data/data";
type Props = {
  conditions: ConditionConfig[];
  selected: VisionConditionId;
  onChange: (id: VisionConditionId) => void;
};

const ConditionSelector: React.FC<Props> = ({
  conditions,
  selected,
  onChange,
}) => {
  return (
    <section
      aria-label="Condition selection"
      className="bg-[var(--vision-panel-bg)] border border-[var(--vision-panel-border)] rounded-2xl p-4 md:p-5"
    >
      <h2 className="text-sm font-semibold mb-3">Your condition</h2>
      <p className="text-xs md:text-sm text-[var(--vision-text-muted)] mb-4">
        Choose the eye condition you want to simulate.
      </p>

      <div className="flex flex-wrap gap-2">
        {conditions.map((condition) => (
          <ChipButton
            key={condition.id}
            active={condition.id === selected}
            label={condition.label}
            onClick={() => onChange(condition.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default ConditionSelector;
