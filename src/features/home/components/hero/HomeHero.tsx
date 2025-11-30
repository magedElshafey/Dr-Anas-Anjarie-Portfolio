import { FC } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import MainBtn from "@/common/components/buttons/MainBtn";
import BookConsultationButton from "@/common/components/buttons/book-consultation-button/BookConsultationButton";
import SectionIntro from "@/common/components/sections/SectionIntro";
import SectionTitle from "@/common/components/sections/SectionTitle";
import SectionDescription from "@/common/components/sections/SectionDescription";
import HeroImage from "./HeroImage";
import SectionEnding from "@/common/components/sections/SectionEnding";
import SectionDetails from "@/common/components/sections/SectionDetails";

const HomeHero: FC = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const sectionAnimation = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 1, y: 0 };

  const sectionInitial = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 20 };
  const details = [
    {
      text: "Consultant-led assessments",
    },
    {
      text: "Premium cataract & lens surgery",
    },
    {
      text: "Visual simulation tools to help you choose the right lens",
    },
  ];
  return (
    <motion.section
      aria-label="Doctor main hero"
      initial={sectionInitial}
      animate={sectionAnimation}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        bg-[var(--mm-bg)]
        border-b border-softGray/70
      "
    >
      <div className="containerr py-10 md:py-16 lg:py-20">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
          {/* Text side */}
          <div className="space-y-4 md:space-y-6">
            <SectionIntro title="Hero.sectionIntro" />
            <SectionTitle text="Hero.sectionTitle" />

            <SectionDescription description="HomeHero.subtitle , Our fellowship-trained surgeons combine precise diagnostics with advanced lens technology to tailor treatment for your eyes, your lifestyle, and your goals." />
            <ul className="flex flex-col gap-1.5 text-xs md:text-sm text-slate-600">
              {details?.map((item, index) => (
                <SectionDetails key={index} item={item} bullets="•" />
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-2">
              <BookConsultationButton />
              <MainBtn hasIcon={true} theme="secondary">
                <Link to="/vision-simulator">{t("try vision simulator")}</Link>
              </MainBtn>
            </div>
            <SectionEnding text="Results vary from person to person. This website and simulator do not replace a full clinical assessment." />
          </div>

          {/* Doctor image side */}
          <HeroImage
            image="/images/home-hero.webp"
            title="Global.drName"
            description="Global.drDesc"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default HomeHero;
