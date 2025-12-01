//

// src/features/home/components/faq/FaqItem.tsx
import React, { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { useReducedMotion } from "framer-motion";
import type { FaqItemType } from "./faqData";

type Props = {
  item: FaqItemType;
  index: number;
};

const FaqItem: React.FC<Props> = ({ item, index }) => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const [open, setOpen] = useState(index === 0); // أول سؤال مفتوح
  const panelId = useId();
  const buttonId = useId();

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div
      className="
        rounded-2xl
        bg-[var(--card-bg,var(--surface-elevated,#FFFFFF))]
        border border-[var(--border-subtle,#E5E7EB)]
        shadow-sm
        overflow-hidden
      "
    >
      <button
        id={buttonId}
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="
          w-full
          flex items-start justify-between gap-3
          px-4 md:px-5 py-3.5 md:py-4
          text-left
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-[var(--focus-ring,#0f766e)]
          focus-visible:ring-offset-2
          focus-visible:ring-offset-[var(--section-faq-bg,#FFFDF6)]
        "
      >
        <div className="flex gap-3">
          <div
            aria-hidden="true"
            className="
              mt-0.5
              flex h-6 w-6 items-center justify-center
              rounded-full
              bg-primaryGreen/10
              text-[11px] font-semibold text-primaryDarkGreen
            "
          >
            {index + 1}
          </div>
          <span className="text-sm md:text-base font-semibold text-[var(--text-main,#111827)]">
            {t(item.questionKey, item.defaultQuestion)}
          </span>
        </div>
        <span
          aria-hidden="true"
          className="
            mt-0.5
            inline-flex h-6 w-6 items-center justify-center
            rounded-full
            border border-[var(--border-subtle,#E5E7EB)]
            bg-[var(--btn-secondary-bg,white)]
            text-xs font-semibold text-[var(--text-main,#111827)]
          "
        >
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`
          px-4 md:px-5
          ${open ? "pb-4 md:pb-5" : "pb-0"}
        `}
      >
        <div
          className={`
            text-xs md:text-sm text-[var(--text-muted,#4B5563)]
            ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
            overflow-hidden
            ${shouldReduceMotion ? "" : "transition-all duration-200 ease-out"}
          `}
        >
          <p className="pt-1.5">{t(item.answerKey, item.defaultAnswer)}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FaqItem);
