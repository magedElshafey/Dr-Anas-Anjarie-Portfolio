// src/features/vision-simulator/components/VideoPanel.tsx
import React from "react";
import type {
  SceneConfig,
  VisionConditionId,
  LensId,
  VisionVideoPair,
  ConditionSceneVideos,
} from "../data/data";

type Props = {
  scene: SceneConfig;
  conditionId: VisionConditionId;
  primaryLens: LensId | null;
  showCompare: boolean; // من الـ state بتاعك (enableCompare)
  compareLens?: LensId | null; // للمستقبل لو عايز lens vs lens
};

const VideoPanel: React.FC<Props> = ({
  scene,
  conditionId,
  primaryLens,
  showCompare,
}) => {
  const conditionVideos: ConditionSceneVideos | undefined =
    scene.videos[conditionId];

  if (!conditionVideos) {
    return (
      <section className="bg-[var(--vision-panel-bg)] border border-[var(--vision-panel-border)] rounded-2xl p-4 md:p-5">
        <h2 className="text-sm font-semibold mb-2">Preview unavailable</h2>
        <p className="text-xs md:text-sm text-[var(--vision-text-muted)]">
          This condition does not have any simulation defined yet.
        </p>
      </section>
    );
  }

  const conditionBefore = conditionVideos.before;
  const lensPair: VisionVideoPair | undefined =
    primaryLens && conditionVideos[primaryLens]
      ? (conditionVideos[primaryLens] as VisionVideoPair)
      : undefined;

  const lensBefore = lensPair?.before;
  const lensAfter = lensPair?.after;

  // before اللي هنستخدمها: عدسة لو موجودة، وإلا before العام للحالة
  const beforeVideo = lensBefore || conditionBefore;
  const afterVideo = lensAfter;

  const hasBefore = !!beforeVideo?.src;
  const hasAfter = !!afterVideo?.src;
  const hasBoth = hasBefore && hasAfter;

  // =========================
  // 1) حالة المقارنة: showCompare = true → قبل + بعد جنب بعض
  // =========================
  if (showCompare && hasBoth) {
    return (
      <section
        className="
          bg-[var(--vision-panel-bg)]
          border border-[var(--vision-panel-border)]
          rounded-2xl p-3 md:p-4
          space-y-3
        "
        aria-label="Vision simulation preview"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold">{scene.label}</h2>
            <p className="text-xs text-[var(--vision-text-muted)]">
              {scene.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Before */}
          <figure className="rounded-xl overflow-hidden bg-black relative">
            <img
              src={beforeVideo!.src}
              alt={
                beforeVideo?.label || "Before surgery vision simulation image"
              }
              className="w-full h-full max-h-[320px] object-cover"
            />
            <figcaption className="absolute bottom-2 left-2 text-[11px] px-2 py-1 rounded-full bg-black/60 text-white">
              {beforeVideo?.label || "Before surgery"}
            </figcaption>
          </figure>

          {/* After */}
          <figure className="rounded-xl overflow-hidden bg-black relative">
            <img
              src={afterVideo!.src}
              alt={afterVideo?.label || "After surgery vision simulation image"}
              className="w-full h-full max-h-[320px] object-cover"
            />
            <figcaption className="absolute bottom-2 left-2 text-[11px] px-2 py-1 rounded-full bg-black/60 text-white">
              {afterVideo?.label || "After lens / surgery"}
            </figcaption>
          </figure>
        </div>
      </section>
    );
  }

  // =========================
  // 2) حالة عرض صورة واحدة
  //    - لو عدسة متختارة → نفضّل after، ولو مش موجودة نعرض before
  //    - لو مفيش عدسة → نعرض before بس
  // =========================

  let single = null;

  if (primaryLens) {
    single = afterVideo || beforeVideo;
  } else {
    single = beforeVideo || afterVideo;
  }

  if (!single?.src) {
    return (
      <section className="bg-[var(--vision-panel-bg)] border border-[var(--vision-panel-border)] rounded-2xl p-4 md:p-5">
        <h2 className="text-sm font-semibold mb-2">Preview unavailable</h2>
        <p className="text-xs md:text-sm text-[var(--vision-text-muted)]">
          No suitable image found for this combination.
        </p>
      </section>
    );
  }

  const isAfter =
    single === afterVideo && !!afterVideo?.src && (!!primaryLens || !hasBefore);

  return (
    <section
      className="
        bg-[var(--vision-panel-bg)]
        border border-[var(--vision-panel-border)]
        rounded-2xl p-3 md:p-4
        space-y-3
      "
      aria-label="Vision simulation preview"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold">{scene.label}</h2>
          <p className="text-xs text-[var(--vision-text-muted)]">
            {scene.description}
          </p>
        </div>
      </div>

      <figure className="rounded-xl overflow-hidden bg-black relative">
        <img
          src={single.src}
          alt={
            single.label ||
            (isAfter
              ? "After surgery vision simulation"
              : "Before surgery vision simulation")
          }
          className="w-full h-full max-h-[380px] object-cover"
        />
        <figcaption className="absolute bottom-2 left-2 text-[11px] px-2 py-1 rounded-full bg-black/60 text-white">
          {single.label ||
            (isAfter ? "After lens / surgery" : "Before surgery")}
        </figcaption>
      </figure>
    </section>
  );
};

export default VideoPanel;
