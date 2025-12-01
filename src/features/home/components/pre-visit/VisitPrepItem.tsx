// src/features/home/components/pre-visit/VisitPrepItem.tsx
import React from "react";
import { useTranslation } from "react-i18next";

type VisitPrepItemProps = {
  titleKey: string;
  defaultTitle: string;
  descriptionKey: string;
  defaultDescription: string;
};

const VisitPrepItem: React.FC<VisitPrepItemProps> = ({
  titleKey,
  defaultTitle,
  descriptionKey,
  defaultDescription,
}) => {
  const { t } = useTranslation();

  return (
    <li
      className="
        flex gap-3 items-start
        rounded-2xl
        bg-[var(--info-pill-bg,rgba(255,255,255,0.9))]
        border border-[var(--info-pill-border,rgba(209,213,219,0.8))]
        px-3 py-3 md:px-4 md:py-3.5 duration-300 transition-transform hover:translate-x-1
      "
    >
      <span
        aria-hidden="true"
        className="
          mt-1 h-2 w-2 rounded-full
          bg-[var(--accent-dot,#059669)]
          flex-shrink-0
        "
      />
      <div className="space-y-0.5">
        <p className="text-xs md:text-sm font-semibold text-primaryDarkGreen">
          {t(titleKey, defaultTitle)}
        </p>
        <p className="text-[11px] md:text-xs text-[var(--text-muted,#6B7280)]">
          {t(descriptionKey, defaultDescription)}
        </p>
      </div>
    </li>
  );
};

export default React.memo(VisitPrepItem);
