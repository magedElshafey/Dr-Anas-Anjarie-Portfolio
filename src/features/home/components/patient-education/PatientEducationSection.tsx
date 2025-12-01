import { FC, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionIntro from "@/common/components/sections/SectionIntro";
import SectionTitle from "@/common/components/sections/SectionTitle";
import SectionDescription from "@/common/components/sections/SectionDescription";
import SectionEnding from "@/common/components/sections/SectionEnding";
import SuccessStoriesSlider from "./SuccessStoriesSlider";
import GuideArticleCard from "./GuideArticleCard";
import EducationVideosRow from "./EducationVideosRow";
import { guideArticles } from "./data";
import { Link } from "react-router-dom";
import MainBtn from "@/common/components/buttons/MainBtn";

const PatientEducationSection: FC = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const inView = useInView(ref, {
    margin: "-120px 0px -120px 0px",
    once: true,
  });

  const initial = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 24 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section
      aria-labelledby="patient-education-heading"
      className="
        bg-[var(--section-edu-bg,var(--page-alt-bg,#FDF8EE))]
        border-t border-[var(--border-subtle,#E5E7EB)]
        border-b 
      "
    >
      <motion.div
        ref={ref}
        initial={initial}
        animate={inView ? animate : initial}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="containerr py-10 md:py-14 lg:py-16 space-y-8 md:space-y-10"
      >
        {/* Header */}
        <div className="max-w-3xl space-y-2 md:space-y-3">
          <SectionIntro title="Patient education" />
          <SectionTitle
            as="h2"
            id="patient-education-heading"
            text="PatientEducation.title , Learn about your eyes before your visit"
          />
          <SectionDescription description="PatientEducation.subtitle , Short videos, guides and real-world stories to help you feel more prepared and confident about your treatment options." />
          <SectionEnding text="PatientEducation.note , Educational content does not replace a personalised consultation with your eye specialist." />
        </div>

        {/* Stories + Guides (stack on mobile / 2-cols on lg) */}
        <div
          className="
            grid gap-8 lg:gap-10
            grid-cols-1
            lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]
            items-start
          "
        >
          <div className="space-y-6">
            <SuccessStoriesSlider />
            <EducationVideosRow />
          </div>

          <section
            aria-labelledby="guides-articles-heading"
            className="
              rounded-3xl
              bg-[var(--card-bg-layer,var(--surface-elevated,#FFFFFF))]
              border border-[var(--border-subtle,#E5E7EB)]
              shadow-sm
              p-4 md:p-5 lg:p-6
            "
          >
            <div className="flex items-center justify-between gap-3 mb-4">
              <div>
                <h3
                  id="guides-articles-heading"
                  className="text-sm md:text-base font-semibold text-[var(--text-main,#111827)]"
                >
                  {t("Education.guidesTitle", "Eye health guides & articles")}
                </h3>
                <p className="text-[11px] md:text-xs text-[var(--text-muted,#6B7280)]">
                  {t(
                    "Education.guidesSubtitle",
                    "Clear explanations written in patient-friendly language."
                  )}
                </p>
              </div>

              <Link to="/blogs">
                <MainBtn theme="secondary" text="View all guides" />
              </Link>
            </div>

            <div className="grid gap-4 md:gap-5">
              {guideArticles.slice(0, 3).map((article, idx) => (
                <GuideArticleCard
                  key={article.id}
                  article={article}
                  index={idx}
                />
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-4 md:hidden">
              <Link to="/blogs">
                <MainBtn theme="secondary" text="View all guides" />
              </Link>
            </div>
          </section>
        </div>
      </motion.div>
    </section>
  );
};

export default PatientEducationSection;
