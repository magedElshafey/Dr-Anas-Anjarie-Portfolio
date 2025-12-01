import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { successStories } from "./data";
import SuccessStoryCard from "./SuccessStoryCard";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const SuccessStoriesSlider: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const inView = useInView(containerRef, { once: true, margin: "-80px 0px" });
  const [activeIndex, setActiveIndex] = useState(0);

  // detect centered card while scrolling
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const listener = () => {
      const cards = Array.from(
        el.querySelectorAll<HTMLElement>("[data-story-card]")
      );
      if (!cards.length) return;
      const { left, width } = el.getBoundingClientRect();
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const dist = Math.abs(center - (left + width / 2));
        if (dist < minDist) {
          minDist = dist;
          closest = idx;
        }
      });
      setActiveIndex(closest);
    };

    el.addEventListener("scroll", listener, { passive: true });
    return () => el.removeEventListener("scroll", listener);
  }, []);

  const scrollToIndex = (nextIndex: number) => {
    const el = containerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-story-card]");
    const card = cards[nextIndex];
    if (card) {
      card.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    scrollToIndex(
      (activeIndex - 1 + successStories.length) % successStories.length
    );
  };

  const handleNext = () => {
    scrollToIndex((activeIndex + 1) % successStories.length);
  };

  const initial = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 16 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section
      aria-labelledby="success-stories-heading"
      aria-roledescription="carousel"
      className="space-y-3 md:space-y-4"
    >
      {/* Header + arrows */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3
            id="success-stories-heading"
            className="text-sm md:text-base font-semibold text-[var(--text-main,var(--primary-dark,#083344))]"
          >
            {t("Education.successStoriesTitle", "Real patient experiences")}
          </h3>
          <p className="text-[11px] md:text-xs text-[var(--text-muted,#6B7280)]">
            {t(
              "Education.successStoriesSubtitle",
              "Short stories from people who chose cataract and lens surgery."
            )}
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="
              inline-flex items-center justify-center
              h-8 w-8 rounded-full
              border border-[var(--border-subtle,#D1D5DB)]
              bg-[var(--card-bg,white)]
              text-[var(--text-main,#0f172a)]
              hover:bg-primaryGreen/5
              focus:outline-none focus-visible:ring-2
              focus-visible:ring-[var(--focus-ring,#0f766e)]
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[var(--section-edu-bg,#FDF8EE)]
            "
            aria-label={t("Education.prevStory", "Previous story")}
          >
            <IoChevronBack aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="
              inline-flex items-center justify-center
              h-8 w-8 rounded-full
              border border-[var(--border-subtle,#D1D5DB)]
              bg-[var(--card-bg,white)]
              text-[var(--text-main,#0f172a)]
              hover:bg-primaryGreen/5
              focus:outline-none focus-visible:ring-2
              focus-visible:ring-[var(--focus-ring,#0f766e)]
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[var(--section-edu-bg,#FDF8EE)]
            "
            aria-label={t("Education.nextStory", "Next story")}
          >
            <IoChevronForward aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <motion.div
        ref={containerRef}
        initial={initial}
        animate={inView ? animate : initial}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="
          flex gap-4 md:gap-5
          overflow-x-auto
          no-scrollbar
          pb-2
          snap-x snap-mandatory
          px-1 sm:px-2 md:-mx-2 md:px-2
        "
        role="list"
        aria-label={t(
          "Education.successStoriesList",
          "Scrollable list of patient success stories"
        )}
      >
        {successStories.map((story, idx) => (
          <div
            key={story.id}
            data-story-card
            role="listitem"
            className="snap-center"
          >
            <SuccessStoryCard
              story={story}
              index={idx}
              total={successStories.length}
              isActive={idx === activeIndex}
            />
          </div>
        ))}
      </motion.div>

      {/* Bullets (قابلة للضغط + بدون سكروول) */}
      <div
        className="flex justify-center mt-1.5 gap-1.5"
        role="tablist"
        aria-label={t("Education.storyBullets", "Select patient story")}
      >
        {successStories.map((_, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={t("Education.gotoStory", {
                defaultValue: "Go to story {{index}}",
                index: idx + 1,
              })}
              onClick={() => scrollToIndex(idx)}
              className={`
                h-2 w-4 rounded-full
                transition-all
                ${isActive ? "bg-primaryGreen" : "bg-slate-300"}
              `}
            />
          );
        })}
      </div>
    </section>
  );
};

export default React.memo(SuccessStoriesSlider);
