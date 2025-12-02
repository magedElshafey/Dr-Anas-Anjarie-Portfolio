import { FC, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useInView,
  type Variants,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionIntro from "@/common/components/sections/SectionIntro";
import SectionTitle from "@/common/components/sections/SectionTitle";
import SectionDescription from "@/common/components/sections/SectionDescription";
import SectionEnding from "@/common/components/sections/SectionEnding";
import TechnologyCard from "./TechnologyCard";
import { technologyItems } from "./technologyData";

const TechnologySection: FC = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  const inView = useInView(ref, {
    margin: "-120px 0px -120px 0px",
    once: true,
  });

  const containerVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      };

  return (
    <section aria-labelledby="clinic-technology-heading">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative containerr py-10 md:py-14 lg:py-16 space-y-8"
      >
        {/* header row: text + small highlight card */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
          <div className="space-y-2 md:space-y-3">
            <SectionIntro title="Technology.intro , Technology we use" />
            <SectionTitle
              as="h2"
              id="clinic-technology-heading"
              text="Technology.title , Modern diagnostics & surgical platforms supporting your care"
            />
            <SectionDescription description="Technology.subtitle , From your first scan to your final follow-up, we use up-to-date imaging and surgical systems to help plan, personalise and monitor your treatment." />
            <SectionEnding text="Technology.note , Not every device will be used for every patient – your consultant will choose what is appropriate for your eyes." />
          </div>

          {/* highlight card on the right */}
          <div
            className="
              rounded-3xl
              bg-[var(--card-bg,var(--surface-elevated,#FFFFFF))]
              border border-[var(--border-subtle,#E5E7EB)]
              shadow-sm
              p-4 md:p-5
              flex flex-col gap-3
            "
            aria-label={t(
              "Technology.highlightAria",
              "Overview of how technology supports your treatment"
            )}
          >
            <p className="text-xs md:text-sm font-semibold text-primaryDarkGreen">
              {t(
                "Technology.highlightTitle",
                "How technology fits into your visit"
              )}
            </p>
            <ol className="space-y-1.5 text-[11px] md:text-xs text-[var(--text-muted,#4B5563)]">
              <li>
                1. {t("Technology.step1", "Initial measurements and scans")}
              </li>
              <li>
                2.{" "}
                {t(
                  "Technology.step2",
                  "Consultation and lens / treatment planning"
                )}
              </li>
              <li>
                3. {t("Technology.step3", "Surgery or in-clinic treatment")}
              </li>
              <li>
                4.{" "}
                {t("Technology.step4", "Follow-up imaging to track recovery")}
              </li>
            </ol>
          </div>
        </div>

        {/* cards grid */}
        <div
          className="
            grid gap-4 md:gap-5
            md:grid-cols-2
            xl:grid-cols-4
          "
          aria-label={t(
            "Technology.gridAria",
            "Types of technology used in the clinic"
          )}
        >
          {technologyItems.map((item) => (
            <TechnologyCard key={item.id} item={item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechnologySection;
