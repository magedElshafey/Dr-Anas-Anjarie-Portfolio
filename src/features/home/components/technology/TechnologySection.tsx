// src/features/home/components/technology/TechnologySection.tsx
import { FC, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useInView,
  type Transition,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionIntro from "@/common/components/sections/SectionIntro";
import SectionTitle from "@/common/components/sections/SectionTitle";
import SectionDescription from "@/common/components/sections/SectionDescription";
import SectionEnding from "@/common/components/sections/SectionEnding";
import TechnologyCard from "./TechnologyCard.tsx";
import { technologyItems } from "./technologyData.ts";

const sectionTransition: Transition = {
  duration: 0.5,
  ease: "easeOut",
};

const TechnologySection: FC = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

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
      aria-labelledby="clinic-technology-heading"
      className="
        bg-[var(--section-tech-bg,var(--page-alt-bg,#F5F5F0))]
        border-t border-[var(--border-subtle,#E5E7EB)]
      "
    >
      <motion.div
        ref={ref}
        initial={initial}
        animate={inView ? animate : initial}
        transition={sectionTransition}
        className="containerr py-10 md:py-14 lg:py-16 space-y-6 md:space-y-8"
      >
        {/* Header */}
        <div className="max-w-3xl space-y-2 md:space-y-3">
          <SectionIntro title="Technology.intro , Advanced diagnostics & surgery technology" />
          <SectionTitle
            as="h2"
            id="clinic-technology-heading"
            text="Technology.title , The technology we use to plan & perform your treatment"
          />
          <SectionDescription description="Technology.subtitle , Modern diagnostic tools and surgical platforms help us measure, personalise and deliver your eye procedure with precision." />
          <SectionEnding text="Technology.note , Technology supports decision-making but does not replace the judgement of your consultant ophthalmologist." />
        </div>

        {/* Cards grid */}
        <div
          className="
            grid gap-4 md:gap-5
            md:grid-cols-2
            xl:grid-cols-3
          "
          aria-label={t(
            "Technology.gridAria",
            "Diagnostic and surgical technology used in our clinic"
          )}
        >
          {technologyItems.map((item, idx) => (
            <TechnologyCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechnologySection;
