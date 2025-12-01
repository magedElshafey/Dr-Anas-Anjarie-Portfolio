import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import type { GuideArticle } from "./data";

type Props = {
  article: GuideArticle;
  index: number;
};

const GuideArticleCard: React.FC<Props> = ({ article, index }) => {
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion ? {} : { opacity: 0, y: 20 };
  const animate = shouldReduceMotion
    ? {}
    : {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: "easeOut", delay: 0.05 * index },
      };

  return (
    <motion.article
      initial={initial}
      animate={animate}
      className="
        relative
        rounded-2xl
        bg-[var(--card-bg,var(--surface-elevated,#FFFFFF))]
        border border-[var(--border-subtle,#E5E7EB)]
        shadow-sm
        overflow-hidden
        group
        hover:border-primaryGreen/60
        focus-within:ring-2
        focus-within:ring-[var(--focus-ring,#0f766e)]
        focus-within:ring-offset-2
        focus-within:ring-offset-[var(--section-edu-bg,#FDF8EE)]
        transition-colors
      "
    >
      {/* gradient strip */}
      <div
        className="
          absolute inset-x-0 top-0 h-1
          bg-gradient-to-r from-primaryGreen via-softYellow to-primaryDarkGreen
        "
        aria-hidden="true"
      />

      <Link
        to={article.href}
        className="flex gap-3 md:gap-4 p-4 md:p-5 focus:outline-none"
        aria-label={article.title}
      >
        {/* optional image */}
        {article.image && (
          <div
            className="
              relative
              w-20 h-20 md:w-24 md:h-24
              flex-shrink-0
              rounded-xl
              overflow-hidden
              bg-[var(--image-placeholder,#E5E7EB)]
            "
          >
            <img
              src={article.image}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <span
              className="
                absolute inset-0 bg-gradient-to-tr
                from-black/10 via-transparent to-white/10
              "
              aria-hidden="true"
            />
          </div>
        )}

        <div className="flex-1 space-y-2">
          <p
            className="
              inline-flex items-center gap-1
              rounded-full
              bg-[var(--pill-bg,#ECFDF3)]
              px-2.5 py-1
              text-[10px] font-semibold tracking-[0.16em] uppercase
              text-primaryGreen
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primaryGreen" />
            {article.category}
          </p>

          <h3 className="text-sm md:text-base font-semibold text-[var(--text-main,#111827)]">
            {article.title}
          </h3>

          <p className="text-xs md:text-sm text-[var(--text-muted,#4B5563)] line-clamp-3">
            {article.summary}
          </p>

          <div className="flex items-center justify-between pt-1 text-[11px] text-[var(--text-muted,#6B7280)]">
            <span>{article.readingTime}</span>
            <span
              aria-hidden="true"
              className="inline-flex items-center gap-1 text-[11px] text-[var(--link-color,#065F46)] group-hover:gap-1.5 transition-all"
            >
              Read guide <span>→</span>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default React.memo(GuideArticleCard);
