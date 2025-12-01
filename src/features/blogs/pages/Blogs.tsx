import { useRef } from "react";
import {
  useReducedMotion,
  motion,
  useInView,
  type TargetAndTransition,
} from "framer-motion";
import { useTranslation } from "react-i18next";

import SectionDescription from "@/common/components/sections/SectionDescription";
import SectionTitle from "@/common/components/sections/SectionTitle";
import { guideArticles } from "@/features/home/components/patient-education/data";
import GuideArticleCard from "@/features/home/components/patient-education/GuideArticleCard";

const Blogs = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const inView = useInView(sectionRef, {
    margin: "-120px 0px -120px 0px",
    once: true,
  });

  // ✅ ثابتين في الشكل علشان ما يحصلش TS union غريب
  const base: TargetAndTransition = { opacity: 1, y: 0 };
  const initial: TargetAndTransition = shouldReduceMotion
    ? base
    : { opacity: 0, y: 24 };
  const animate: TargetAndTransition = base;

  // 🧠 فلترة حسب الـ category

  const headingId = "blogs-heading";

  return (
    <main
      aria-labelledby={headingId}
      className="
        bg-[var(--page-bg,var(--mm-bg,#F9FAFB))]
        border-b border-softGray/70
      "
    >
      <motion.section
        ref={sectionRef}
        aria-label={t("Blogs.ariaLabel", "Eye health guides & articles")}
        initial={initial}
        animate={inView ? animate : initial}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="containerr py-10 md:py-16 lg:py-20"
      >
        <div className="space-y-6 md:space-y-8">
          {/* Header */}
          <header className="space-y-3 max-w-3xl">
            <SectionTitle as="h1" id={headingId} text="Blogs.title" />
            <SectionDescription description="Blogs.subtitle" />
            <p className="text-xs md:text-sm text-[var(--text-muted,#4B5563)]">
              {t("Blogs.countLabel", {
                defaultValue: "{{count}} article(s)",
                count: guideArticles.length,
              })}
            </p>
          </header>

          {/* Articles grid */}
          <section
            aria-label={t("Blogs.listLabel", "Articles list")}
            className="
              grid grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-4 md:gap-5 lg:gap-6
            "
          >
            {guideArticles.map((article, idx) => (
              <GuideArticleCard
                key={article.id}
                article={article}
                index={idx}
              />
            ))}
          </section>
        </div>
      </motion.section>
    </main>
  );
};

export default Blogs;
