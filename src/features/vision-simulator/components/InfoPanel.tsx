// src/features/vision-simulator/components/InfoPanel.tsx
import React from "react";
import type { LensConfig, VisionConditionId } from "../data/data";

type Props = {
  lens: LensConfig;
  conditionId: VisionConditionId;
};

const InfoPanel: React.FC<Props> = ({ lens, conditionId }) => {
  return (
    <section className="space-y-3 text-[var(--vision-text-main)]">
      <h2 className="text-base md:text-lg font-semibold">{lens?.label}</h2>
      <p className="text-xs md:text-sm text-[var(--vision-text-muted)]">
        {lens?.description}
      </p>

      <div className="rounded-2xl bg-[var(--vision-panel-bg)] border border-[var(--vision-panel-border)] p-3 md:p-4 text-xs md:text-sm space-y-2">
        <p className="font-medium">
          What this simulation shows for{" "}
          <span className="underline decoration-softYellow">
            {conditionId === "cataract"
              ? "cataract"
              : "presbyopia & astigmatism"}
          </span>
          :
        </p>
        <ul className="list-disc ms-4 space-y-1 text-[var(--vision-text-muted)]">
          <li>Relative focus for distance, intermediate and near vision.</li>
          <li>How much halo/glare you may experience in low light.</li>
          <li>This is a visual guide only, not a clinical guarantee.</li>
        </ul>
      </div>
    </section>
  );
};

export default InfoPanel;
