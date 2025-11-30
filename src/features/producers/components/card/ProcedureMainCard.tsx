import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  motion,
  useReducedMotion,
  type TargetAndTransition,
} from "framer-motion";
import type { ProcedureItem } from "../../data/data";
type Props = {
  item: ProcedureItem;
  index: number;
  trigger: boolean;
};

const ProcedureMainCard: React.FC<Props> = ({ item, index, trigger }) => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const title = t(item.nameKey, item.defaultName);
  const summary = t(item.summaryKey, item.defaultSummary);

  const initial =
    shouldReduceMotion || !trigger
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 18 };

  const animate: TargetAndTransition = {
    opacity: 1,
    y: 0,
    ...(shouldReduceMotion || !trigger
      ? {}
      : {
          transition: {
            duration: 0.35,
            ease: "easeOut",
            delay: index * 0.03,
          },
        }),
  };

  const enableHover = !shouldReduceMotion;

  return (
    <motion.li
      role="listitem"
      initial={initial}
      animate={animate}
      className="
        group relative
        rounded-2xl
        bg-[var(--proc-list-card-bg)]
        border border-[var(--proc-list-card-border)]
        px-4 py-3 md:px-5 md:py-4
        flex flex-col gap-2
        overflow-hidden
        backdrop-blur-md
        shadow-[0_10px_30px_rgba(15,23,42,0.06)]
      "
      whileHover={
        enableHover
          ? {
              y: -3,
            }
          : undefined
      }
      transition={
        enableHover
          ? {
              duration: 0.2,
              ease: "easeOut",
            }
          : undefined
      }
    >
      {/* subtle glass highlight */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -top-10 -right-10 h-24 w-24
          rounded-full
          bg-white/40
          opacity-0
          blur-2xl
          group-hover:opacity-100
          transition-opacity duration-300
        "
      />

      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="text-sm md:text-base font-semibold text-primaryDarkGreen">
            {title}
          </h3>
          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-[var(--proc-list-tag-bg)] px-2 py-0.5 text-[10px] font-medium text-[var(--proc-list-tag-text)]"
                >
                  {t(`ProceduresPage.tag.${tag}`, tag.toUpperCase())}
                </span>
              ))}
            </div>
          )}
        </div>

        <span
          aria-hidden="true"
          className="
            mt-1 inline-flex h-8 w-8 items-center justify-center
            rounded-full bg-primaryGreen/5 text-primaryGreen
            text-xs font-semibold
          "
        >
          →
        </span>
      </div>

      <p className="text-[11px] md:text-sm text-[var(--proc-list-card-muted)] leading-relaxed">
        {summary}
      </p>

      <div className="mt-1 flex items-center justify-between gap-2 text-[10px] md:text-[11px]">
        <span className="text-[var(--proc-list-card-muted)]">
          {t("ProceduresPage.learnMoreHint", "Learn what happens on the day")}
        </span>
        <Link
          to={`/procedures/${item.slug}`}
          className="inline-flex items-center gap-1 font-semibold text-primaryGreen focus:outline-none focus-visible:ring-2 focus-visible:ring-primaryGreen focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--proc-list-bg)]"
        >
          <span>{t("ProceduresPage.cardCta", "View procedure")}</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </motion.li>
  );
};

export default React.memo(ProcedureMainCard);
