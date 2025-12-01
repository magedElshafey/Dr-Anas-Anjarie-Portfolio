// src/features/home/components/patient-education/SuccessStoryCard.tsx
import React from "react";
import {
  motion,
  useReducedMotion,
  type TargetAndTransition,
} from "framer-motion";
import type { SuccessStory } from "./data";
import BookConsultationButton from "@/common/components/buttons/book-consultation-button/BookConsultationButton";

type Props = {
  story: SuccessStory;
  index: number;
  total: number;
  isActive: boolean;
};

const SuccessStoryCard: React.FC<Props> = ({
  story,
  index,
  total,
  isActive,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // ✅ حل مشكلة TS: ندي whileHover قيمة واحدة محددة النوع أو undefined
  const hoverTransition: TargetAndTransition | undefined = shouldReduceMotion
    ? undefined
    : {
        y: -4,
        scale: 1.01,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 24,
        },
      };

  const stars = story.rating ?? 5;
  const fullStars = Math.floor(stars);
  const halfStar = stars - fullStars >= 0.5;

  const initials =
    story.name
      ?.split(" ")
      .filter(Boolean)
      .map((part) => part[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "?";

  return (
    <motion.article
      className={`
        relative snap-center shrink-0
        w-[260px] sm:w-[300px] md:w-[340px]
        rounded-3xl
        bg-[var(--card-bg,var(--surface-elevated,#FFFFFF))]
        border border-[var(--card-border,rgba(148,163,184,0.5))]
        shadow-sm
        overflow-hidden
        backdrop-blur
        px-4 py-4 md:px-5 md:py-5
        focus-within:ring-2
        focus-within:ring-[var(--focus-ring,#0f766e)]
        focus-within:ring-offset-2
        focus-within:ring-offset-[var(--section-edu-bg,#FDF8EE)]
        transition-colors
        ${isActive ? "ring-1 ring-primaryGreen/60" : ""}
      `}
      aria-label={`${story.name} – ${story.procedure}`}
      aria-roledescription="Patient success story card"
      whileHover={hoverTransition}
    >
      {/* ديكور بسيط في الأعلى يدي إحساس مودرن */}
      <div
        className="
          absolute inset-x-0 top-0 h-1
          bg-gradient-to-r from-primaryGreen via-softYellow to-primaryDarkGreen
        "
        aria-hidden="true"
      />

      {/* Header: avatar + اسم + حالة + ستارز */}
      <header className="flex items-start gap-3 mb-3">
        <div
          className="
            h-10 w-10 md:h-11 md:w-11
            rounded-full
            bg-[var(--avatar-bg,#ECFDF3)]
            border border-[var(--avatar-border,#BBF7D0)]
            flex items-center justify-center
            text-[11px] md:text-xs font-semibold
            text-[var(--avatar-text,#047857)]
            shrink-0
          "
          aria-hidden="true"
        >
          {initials}
        </div>

        <div className="flex-1 space-y-0.5">
          <p className="text-xs md:text-sm font-semibold text-[var(--text-main,#111827)]">
            {story.name}
          </p>
          <p className="text-[11px] text-[var(--text-muted,#6B7280)]">
            {story.condition} · {story.procedure}
          </p>

          <div className="flex items-center gap-1 text-[10px]">
            <div className="flex items-center gap-0.5 text-yellow-400">
              {Array.from({ length: fullStars }).map((_, i) => (
                <span key={i} aria-hidden="true">
                  ★
                </span>
              ))}
              {halfStar && <span aria-hidden="true">☆</span>}
            </div>
            <span className="text-[var(--text-muted,#6B7280)]">
              {stars.toFixed(1)}/5
            </span>
          </div>
        </div>
      </header>

      {/* Quote */}
      <div className="relative mb-4">
        <div
          className="
            absolute -left-1 -top-1
            text-3xl text-primaryGreen/15
            select-none
          "
          aria-hidden="true"
        >
          “
        </div>
        <p className="text-xs md:text-sm text-[var(--text-muted,#4B5563)] pl-3">
          {`“${story.quote}”`}
        </p>
      </div>

      {/* Footer: Story index + CTA */}
      <footer className="flex items-center justify-between text-[11px] text-[var(--text-muted,#6B7280)] pt-1">
        <span>
          Story {index + 1} of {total}
        </span>
        <BookConsultationButton className="!px-3 !py-1.5 text-[11px]" />
      </footer>
    </motion.article>
  );
};

export default React.memo(SuccessStoryCard);
