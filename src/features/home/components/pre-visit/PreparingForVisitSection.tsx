// src/features/home/components/pre-visit/PreparingForVisitSection.tsx
import { FC, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionIntro from "@/common/components/sections/SectionIntro";
import SectionTitle from "@/common/components/sections/SectionTitle";
import SectionDescription from "@/common/components/sections/SectionDescription";
import SectionEnding from "@/common/components/sections/SectionEnding";
import VisitPrepItem from "./VisitPrepItem";
import PreVisitFormCard from "./PreVisitFormCard";

const PreparingForVisitSection: FC = () => {
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
      aria-labelledby="preparing-visit-heading"
      className="
        bg-[var(--previsit-bg,#F3F4F6)]
        border-t border-softGray/40
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
          <SectionIntro title="Preparing for your visit" />
          <SectionTitle
            as="h2"
            id="preparing-visit-heading"
            text="PreVisit.heading , Preparing for your visit"
          />
          <SectionDescription description="PreVisit.description , A few simple steps you can take before your appointment to make the most of your time with the surgeon." />
          <SectionEnding text="PreVisit.note , These tips are for general guidance only and may be adapted based on your specific procedure and medical history." />
        </div>

        {/* Info band + CTA card */}
        <div
          className="
            grid gap-8 lg:gap-10
            lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]
            items-start
          "
        >
          {/* Info band (list of steps) */}
          <section
            aria-label={t(
              "PreVisit.infoAria",
              "Checklist to prepare for your eye clinic visit"
            )}
            className="
              rounded-3xl
              bg-[var(--info-band-bg,rgba(255,255,255,0.95))]
              border border-[var(--info-band-border,rgba(209,213,219,0.9))]
              shadow-sm
              p-4 md:p-5 lg:p-6
            "
          >
            <p className="text-xs md:text-sm font-semibold text-primaryDarkGreen mb-3">
              {t("PreVisit.infoTitle", "Before you arrive, it can help to:")}
            </p>

            <ul className="space-y-2 md:space-y-3">
              <VisitPrepItem
                titleKey="PreVisit.item1Title"
                defaultTitle="Bring your current glasses & prescription"
                descriptionKey="PreVisit.item1Desc"
                defaultDescription="They help us compare your current correction with our measurements and understand how your vision has changed."
              />
              <VisitPrepItem
                titleKey="PreVisit.item2Title"
                defaultTitle="Prepare a list of medications and eye drops"
                descriptionKey="PreVisit.item2Desc"
                defaultDescription="Include any long-term treatments and over-the-counter drops, as some can affect your eye pressure and pupil response."
              />
              <VisitPrepItem
                titleKey="PreVisit.item3Title"
                defaultTitle="Think about your daily visual priorities"
                descriptionKey="PreVisit.item3Desc"
                defaultDescription="Driving, reading, screens, sports – sharing these priorities helps us recommend the most suitable lens options."
              />
              <VisitPrepItem
                titleKey="PreVisit.item4Title"
                defaultTitle="Allow extra time for dilating drops"
                descriptionKey="PreVisit.item4Desc"
                defaultDescription="Your pupils may be dilated for detailed retina and lens checks, which can blur your near vision for several hours."
              />
            </ul>
          </section>

          {/* CTA Card */}
          <PreVisitFormCard inView={inView} />
        </div>
      </motion.div>
    </section>
  );
};

export default PreparingForVisitSection;
