// src/features/home/components/faq/FaqItem.tsx
import React, { useState, useId } from "react";
import { useTranslation } from "react-i18next";
import { useReducedMotion } from "framer-motion";

export type FaqItemType = {
  id: number;
  questionKey: string;
  defaultQuestion: string;
  answerKey: string;
  defaultAnswer: string;
};

type Props = {
  item: FaqItemType;
};

const FaqItem: React.FC<Props> = ({ item }) => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
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
      <dt>
        <button
          id={buttonId}
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="
            w-full
            flex items-center justify-between gap-3
            px-4 md:px-5 py-3.5 md:py-4
            text-left
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-[var(--focus-ring,#0f766e)]
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[var(--section-faq-bg,#FFFDF6)]
          "
        >
          <span className="text-sm md:text-base font-semibold text-[var(--text-main,#111827)]">
            {t(item.questionKey, item.defaultQuestion)}
          </span>
          <span
            aria-hidden="true"
            className="
              inline-flex items-center justify-center
              h-7 w-7 rounded-full
              border border-[var(--border-subtle,#E5E7EB)]
              bg-[var(--btn-secondary-bg,white)]
              text-xs font-semibold text-[var(--text-main,#111827)]
            "
          >
            {open ? "−" : "+"}
          </span>
        </button>
      </dt>

      <dd
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
            transition-[max-height,opacity]
            duration-200 ease-out
            ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
            overflow-hidden
          `}
          style={shouldReduceMotion ? { transition: "none" } : undefined}
        >
          <p className="pt-1.5">{t(item.answerKey, item.defaultAnswer)}</p>
        </div>
      </dd>
    </div>
  );
};

export default React.memo(FaqItem);
