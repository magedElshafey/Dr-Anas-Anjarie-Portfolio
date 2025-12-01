// src/features/home/components/pre-visit/PreVisitFormCard.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiClipboard } from "react-icons/fi";
import SectionDetails from "@/common/components/sections/SectionDetails";
import MainBtn from "@/common/components/buttons/MainBtn";
import SectionEnding from "@/common/components/sections/SectionEnding";

type Props = {
  inView: boolean;
};

const PreVisitFormCard: React.FC<Props> = ({ inView }) => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 16 };
  const animate =
    inView && !shouldReduceMotion ? { opacity: 1, y: 0 } : initial;
  const details = [
    {
      text: "Takes around 5–10 minutes to complete.",
    },
    {
      text: "Helps your surgeon review important information before you arrive.",
    },
    {
      text: "Data is handled confidentially in line with medical privacy regulations.",
    },
  ];
  return (
    <motion.aside
      initial={initial}
      animate={animate}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
      className="
        relative
        rounded-3xl
        bg-[var(--card-bg,rgba(255,255,255,0.96))]
        border border-[var(--card-border,rgba(209,213,219,0.9))]
        shadow-sm
        px-4 py-4 md:px-6 md:py-6
        overflow-hidden
      "
      aria-label={t(
        "PreVisit.cardAria",
        "Complete your pre-visit medical form"
      )}
    >
      {/* subtle gradient background for aesthetics */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -top-8 -right-12
          h-40 w-40
          rounded-full
          bg-gradient-to-br
          from-softYellow/40 via-softYellow/0 to-primaryGreen/10
        "
      />

      <div className="relative space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-primaryGreen/5 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase text-primaryGreen">
          <FiClipboard aria-hidden="true" />
          {t("PreVisit.badge", "Save time on the day")}
        </div>

        <h3 className="text-sm md:text-base lg:text-lg font-semibold text-primaryDarkGreen">
          {t(
            "PreVisit.title",
            "Fill in your medical details before your appointment"
          )}
        </h3>

        <p className="text-xs md:text-sm text-[var(--text-muted,#4B5563)]">
          {t(
            "PreVisit.subtitle",
            "Our secure pre-visit form lets you share your medical history, current medications and vision goals ahead of time, so your consultation can focus on what matters most."
          )}
        </p>

        <ul className="space-y-.5 text-[11px] md:text-xs text-[var(--text-muted,#6B7280)]">
          {details?.map((item, index) => (
            <SectionDetails key={index} item={item} bullets="•" />
          ))}
        </ul>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <Link to="/pre-visit">
            <MainBtn theme="main" text="Complete pre-visit form" />
          </Link>
          <SectionEnding text="Optional, but recommended for a smoother experience." />
        </div>
      </div>
    </motion.aside>
  );
};

export default React.memo(PreVisitFormCard);
