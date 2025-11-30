// src/features/vision-simulator/components/LensSelector.tsx
import React from "react";
import ChipButton from "./ChipButton";
import type { LensConfig, LensId } from "../data/data";

type Props = {
  lenses: LensConfig[];
  primary: LensId | null;
  compare?: LensId | null;
  enableCompare: boolean;
  onPrimaryChange: (id: LensId) => void;
  onCompareChange: (id: LensId | null) => void;
  onToggleCompare: (val: boolean) => void;
};

const LensSelector: React.FC<Props> = ({
  lenses,
  primary,

  enableCompare,
  onPrimaryChange,
  onToggleCompare,
}) => {
  return (
    <section
      aria-label="Lens selection"
      className="bg-[var(--vision-panel-bg)] border border-[var(--vision-panel-border)] rounded-2xl p-4 md:p-5 space-y-4"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold mb-1">Lens choice</h2>
          <p className="text-xs text-[var(--vision-text-muted)]">
            Select the lens you want to preview.
          </p>
        </div>

        <label className="inline-flex items-center gap-2 text-[11px] md:text-xs text-[var(--vision-text-muted)]">
          <input
            type="checkbox"
            className="h-3.5 w-3.5"
            checked={enableCompare}
            onChange={(e) => onToggleCompare(e.target.checked)}
          />
          <span>Compare lenses</span>
        </label>
      </div>

      {/* Primary lens */}
      <div className="space-y-2">
        <p className="text-[11px] text-[var(--vision-text-muted)]">
          Primary lens
        </p>
        <div className="flex flex-wrap gap-2">
          {lenses.map((lens) => (
            <ChipButton
              key={lens.id}
              active={lens.id === primary}
              label={lens.shortLabel}
              onClick={() => onPrimaryChange(lens.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LensSelector;
