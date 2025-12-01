import React from "react";
import { useTranslation } from "react-i18next";
import { educationVideos } from "./data";
import EducationVideoCard from "./EducationVideoCard";

const EducationVideosRow: React.FC = () => {
  const { t } = useTranslation();

  if (!educationVideos.length) return null;

  return (
    <section
      aria-labelledby="education-videos-heading"
      className="space-y-3 md:space-y-4"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3
            id="education-videos-heading"
            className="text-sm md:text-base font-semibold text-[var(--text-main,#111827)]"
          >
            {t("Education.videosTitle", "Educational videos & animations")}
          </h3>
          <p className="text-[11px] md:text-xs text-[var(--text-muted,#6B7280)]">
            {t(
              "Education.videosSubtitle",
              "Short explainer videos to help you understand cataract and lens surgery."
            )}
          </p>
        </div>
      </div>

      <div
        className="
          grid gap-3 md:gap-4
         grid-cols-1
          lg:grid-cols-2
        "
      >
        {educationVideos.map((video, idx) => (
          <EducationVideoCard key={video.id} video={video} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(EducationVideosRow);
