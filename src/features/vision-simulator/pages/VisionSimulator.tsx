import React, { useState, useMemo } from "react";
import VisionLayout from "../components/VisionLayout";
import SceneSelector from "../components/SceneSelector";
import ConditionSelector from "../components/ConditionSelector";
import LensSelector from "../components/LensSelector";
import VideoPanel from "../components/VideoPanel";
import InfoPanel from "../components/InfoPanel";
import { visionConfig } from "../data/data";
import type { VisionSceneId, VisionConditionId, LensId } from "../data/data";
import BookConsultationButton from "@/common/components/buttons/book-consultation-button/BookConsultationButton";
import MainBtn from "@/common/components/buttons/MainBtn";
import VisionSimulatorHero from "../components/VisionSimulatorHero";

const VisionSimulatorPage: React.FC = () => {
  const [sceneId, setSceneId] = useState<VisionSceneId>("night-driving");
  const [conditionId, setConditionId] = useState<VisionConditionId>("cataract");
  const [primaryLens, setPrimaryLens] = useState<LensId | null>(null);
  const [enableCompare, setEnableCompare] = useState(false);
  const [compareLens, setCompareLens] = useState<LensId | null>(null);

  const scene = useMemo(
    () => visionConfig.scenes.find((s) => s.id === sceneId)!,
    [sceneId]
  );

  const primaryLensObj = useMemo(
    () => visionConfig.lenses.find((l) => l.id === primaryLens)!,
    [primaryLens]
  );
  const handleReset = () => {
    setSceneId("night-driving");
    setConditionId("cataract");
    setPrimaryLens(null);
    setEnableCompare(false);
    setCompareLens(null);
  };
  return (
    <>
      <VisionSimulatorHero />
      <VisionLayout
        left={
          <>
            <SceneSelector
              scenes={visionConfig.scenes}
              selected={sceneId}
              onChange={setSceneId}
            />
            <ConditionSelector
              conditions={visionConfig.conditions}
              selected={conditionId}
              onChange={setConditionId}
            />
            <LensSelector
              lenses={visionConfig.lenses}
              primary={primaryLens}
              compare={compareLens}
              enableCompare={enableCompare}
              onPrimaryChange={setPrimaryLens}
              onCompareChange={setCompareLens}
              onToggleCompare={setEnableCompare}
            />
            <MainBtn
              theme="secondary"
              text="Global.Reset"
              onClick={handleReset}
              showArrow={false}
            />
          </>
        }
        right={
          <>
            <VideoPanel
              scene={scene}
              conditionId={conditionId}
              primaryLens={primaryLens} // لو حبيت بعدين تخليه null قبل اختيار العدسة
              showCompare={enableCompare} // 👈 دي اللي بتحدد هل نعرض قبل+بعد ولا صورة واحدة
              compareLens={compareLens} // محجوزة للمستقبل لو حبيت تعمل lens vs lens
            />
            <InfoPanel lens={primaryLensObj} conditionId={conditionId} />
          </>
        }
        bottom={
          <div className="grid gap-4 md:grid-cols-2 text-[var(--vision-text-main)]">
            <div className="space-y-2 text-xs md:text-sm text-[var(--vision-text-muted)]">
              <h3 className="text-sm font-semibold text-[var(--vision-text-main)]">
                Important information
              </h3>
              <p>
                This simulator is for illustration only. Every eye is different,
                and your surgeon will recommend the most appropriate lens for
                your vision and lifestyle.
              </p>
            </div>
            <div className="flex flex-col md:items-end gap-2 text-xs md:text-sm">
              <p className="text-[var(--vision-text-muted)]">
                Discuss these options with your ophthalmologist or eye surgeon.
              </p>
              <BookConsultationButton />
            </div>
          </div>
        }
      />
    </>
  );
};

export default VisionSimulatorPage;
