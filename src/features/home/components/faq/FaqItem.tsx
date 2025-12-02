// src/features/home/components/faq/FaqItem.tsx
import React, { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { useReducedMotion, AnimatePresence, motion } from "framer-motion";
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
              bg-primaryGreen
              text-[11px] font-semibold text-white
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
            text-xs font-semibold text-white
          "
        >
          {open ? "−" : "+"}
        </span>
      </button>

      {/* المحتوى – animated height بدون scroll داخلي */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={
              shouldReduceMotion
                ? { opacity: 1, height: "auto" }
                : { opacity: 0, height: 0 }
            }
            animate={{ opacity: 1, height: "auto" }}
            exit={
              shouldReduceMotion
                ? { opacity: 0, height: "auto" }
                : { opacity: 0, height: 0 }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 0.22, ease: "easeOut" }
            }
            className="px-4 md:px-5 pb-4 md:pb-5"
          >
            <p className="pt-1.5 text-xs md:text-sm text-[var(--text-muted,#4B5563)]">
              {t(item.answerKey, item.defaultAnswer)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(FaqItem);
