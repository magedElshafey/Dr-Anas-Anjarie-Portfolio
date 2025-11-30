import { FC } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import BookConsultationButton from "@/common/components/buttons/book-consultation-button/BookConsultationButton";
import MainBtn from "@/common/components/buttons/MainBtn";
import SectionIntro from "@/common/components/sections/SectionIntro";
import SectionTitle from "@/common/components/sections/SectionTitle";
import SectionDescription from "@/common/components/sections/SectionDescription";
import SectionEnding from "@/common/components/sections/SectionEnding";
import VisionHeroImage from "./VisionHeroImage";
import SectionDetails from "@/common/components/sections/SectionDetails";

const VisionSimulatorHero: FC = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 18 };
  const animate = { opacity: 1, y: 0 };
  const details = [
    {
      text: "Side-by-side before & after simulations",
    },
    {
      text: "Night driving, reading & everyday scenes",
    },
    {
      text: "Compare standard vs premium lenses",
    },
  ];
  return (
    <motion.section
      aria-label={t(
        "VisionHero.ariaLabel",
        "Vision simulator introduction section"
      )}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative bg-[var(--mm-bg)] border-b border-softGray/60 overflow-hidden"
    >
      {/* soft background gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -top-24
          inset-x-0 h-64
          bg-gradient-to-b from-primaryGreen/12 via-softYellow/5 to-transparent
        "
      />

      <div className="containerr py-8 md:py-10 lg:py-12 relative z-10">
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)] items-center">
          {/* Text content */}
          <div className="space-y-3 md:space-y-4">
            <SectionIntro title="Lens choice, made visual" />
            <SectionTitle text="HeroVision.sectionTitle" />
            <SectionDescription description="Choose a real-world scene, select your eye condition and preview how various intraocular lenses may affect clarity, halos and night driving." />
            <ul className="flex flex-wrap gap-2  text-xs">
              {details?.map((item, index) => (
                <SectionDetails
                  key={index}
                  item={item}
                  bullets="◦"
                  childrenClassName="inline-flex items-center gap-1 rounded-full bg-white/80 border border-softGray/70 px-3 py-1 text-slate-700"
                />
              ))}
            </ul>
            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-2">
              <MainBtn
                variant="solid"
                theme="secondary"
                text="start vision simulator"
                showArrow={false}
                onClick={() => {
                  document
                    .querySelector("#vision-simulator")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />

              <BookConsultationButton className="bg-white/85 hover:bg-white border-primaryGreen/80" />
            </div>

            <SectionEnding text="This simulator is illustrative only and does not represent guaranteed outcomes. Always base decisions on a full consultation." />
          </div>

          {/* Right visual: “mini simulator preview” card */}
          <VisionHeroImage
            image="/images/vision-hero.webp"
            title="Split-screen view of night driving before and after cataract surgery"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default VisionSimulatorHero;
