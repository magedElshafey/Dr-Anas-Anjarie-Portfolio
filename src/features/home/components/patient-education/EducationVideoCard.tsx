import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import type { EducationVideo } from "./data";
import { FiPlay } from "react-icons/fi";

type Props = {
  video: EducationVideo;
  index: number;
};

const EducationVideoCard: React.FC<Props> = ({ video, index }) => {
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion ? {} : { opacity: 0, y: 16 };
  const animate = shouldReduceMotion
    ? {}
    : {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: "easeOut", delay: 0.04 * index },
      };

  return (
    <motion.article
      initial={initial}
      animate={animate}
      className="
        rounded-2xl
        bg-[var(--card-bg,var(--surface-elevated,#FFFFFF))]
        border border-[var(--border-subtle,#E5E7EB)]
        shadow-sm
        overflow-hidden
        flex
        focus-within:ring-2
        focus-within:ring-[var(--focus-ring,#0f766e)]
        focus-within:ring-offset-2
        focus-within:ring-offset-[var(--section-edu-bg,#FDF8EE)]
      "
    >
      <Link
        to={video.href}
        className="flex items-stretch w-full focus:outline-none"
        aria-label={video.title}
      >
        <div className="relative w-24 h-20 md:w-28 md:h-24 flex-shrink-0 bg-black/10 overflow-hidden">
          <img
            src={video.thumb}
            alt={video?.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="
                inline-flex items-center justify-center
                h-9 w-9 rounded-full
                bg-white/90 text-primaryDarkGreen
                shadow-md
              "
            >
              <FiPlay aria-hidden="true" />
            </span>
          </div>
        </div>

        <div className="flex-1 p-3 md:p-4 space-y-1.5">
          <p className="text-[11px] font-semibold text-primaryGreen uppercase tracking-[0.16em]">
            {video.tag || "Video"}
          </p>
          <h3 className="text-xs md:text-sm font-semibold text-[var(--text-main,#111827)] line-clamp-2">
            {video.title}
          </h3>
          <p className="text-[11px] text-[var(--text-muted,#6B7280)]">
            {video.duration}
          </p>
        </div>
      </Link>
    </motion.article>
  );
};

export default React.memo(EducationVideoCard);
