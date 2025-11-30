// src/features/home/components/ProcedureCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  motion,
  useReducedMotion,
  type TargetAndTransition, // 👈 المهم
} from "framer-motion";

type ProcedureCardProps = {
  icon: React.ReactNode;
  titleKey: string;
  defaultTitle: string;
  descriptionKey: string;
  defaultDescription: string;
  href: string;
  index: number;
  trigger: boolean;
};

const ProcedureCard: React.FC<ProcedureCardProps> = ({
  icon,
  titleKey,
  defaultTitle,
  descriptionKey,
  defaultDescription,
  href,
  index,
  trigger,
}) => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const title = t(titleKey, defaultTitle);
  const description = t(descriptionKey, defaultDescription);

  // ✅ عرّف animate بنوع صريح TargetAndTransition
  const animate: TargetAndTransition = {
    opacity: 1,
    y: 0,
    ...(shouldReduceMotion || !trigger
      ? {}
      : {
          transition: {
            duration: 0.45,
            ease: "easeOut", // as const مش ضروري هنا في معظم الإصدارات
            delay: index * 0.07,
          },
        }),
  };

  const enableHover = !shouldReduceMotion;

  return (
    <motion.article
      role="listitem"
      aria-label={title}
      initial={
        shouldReduceMotion || !trigger
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 22 }
      }
      animate={animate} // ✅ دلوقتي النوع مظبوط
      className="
        h-full
        rounded-[1.7rem]
        bg-gradient-to-br
        from-[var(--proc-card-accent)]/16
        via-[var(--proc-card-bg)]
        to-[var(--proc-card-accent)]/8
        p-[1px]
      "
      whileHover={enableHover ? { y: -4, scale: 1.01 } : undefined}
      transition={enableHover ? { duration: 0.22, ease: "easeOut" } : undefined}
    >
      <div
        className="
          relative h-full
          rounded-[1.6rem]
          bg-[var(--proc-card-bg)]/90
          border border-[var(--proc-card-border)]
          shadow-[0_18px_40px_rgba(15,23,42,0.08)]
          px-4 py-4 md:px-5 md:py-5
          flex flex-col gap-4
          backdrop-blur-md
          overflow-hidden
          group/card
        "
      >
        {/* ... باقي الكارت زي ما هو ... */}
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <h3 className="text-sm md:text-base font-semibold text-[var(--proc-card-title)]">
              {title}
            </h3>
          </div>

          <div
            aria-hidden="true"
            className="
              flex h-10 w-10 items-center justify-center
              rounded-2xl
              bg-[var(--proc-card-accent)]/10
              text-[var(--proc-card-accent)]
              shadow-inner
            "
          >
            {icon}
          </div>
        </div>

        <p className="text-xs md:text-sm text-[var(--proc-card-muted)] leading-relaxed">
          {description}
        </p>

        <div className="mt-auto pt-2 border-t border-[var(--proc-card-border)]/70 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[10px] md:text-[11px] text-[var(--proc-card-muted)]">
            <span className="inline-flex h-1 w-8 rounded-full bg-[var(--proc-card-accent)]/40" />
          </div>

          <Link
            to={href}
            className="
              relative inline-flex items-center gap-1
              text-[11px] md:text-xs font-semibold
              text-[var(--proc-card-accent)]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--proc-card-accent)]
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[var(--proc-bg)]
            "
          >
            <span>{t("Procedures.learnMore", "View details")}</span>
            <span
              aria-hidden="true"
              className="
                text-sm
                translate-x-0
                group-hover/card:translate-x-0.5
                transition-transform
              "
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default React.memo(ProcedureCard);
