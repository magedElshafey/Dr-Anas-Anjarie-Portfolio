import { FC, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SectionIntro from "@/common/components/sections/SectionIntro";
import SectionTitle from "@/common/components/sections/SectionTitle";
import SectionDescription from "@/common/components/sections/SectionDescription";
import SectionEnding from "@/common/components/sections/SectionEnding";
import MainBtn from "@/common/components/buttons/MainBtn";
import ProcedureMainCard from "@/features/producers/components/card/ProcedureMainCard";
import { ProcedureItem } from "@/features/producers/data/data";

const procedures: ProcedureItem[] = [
  {
    id: "laser",
    nameKey: "Procedures.laserVision",
    defaultName: "Laser vision correction",
    summaryKey: "Procedures.laserVisionDesc",
    defaultSummary:
      "Advanced laser techniques to reduce dependence on glasses and contact lenses.",
    slug: "laser-vision-correction",
    tags: ["lens"],
  },
  {
    id: "cataract",
    nameKey: "Procedures.cataracts",
    defaultName: "Cataract surgery",
    summaryKey: "Procedures.cataractsDesc",
    defaultSummary:
      "Modern cataract surgery with a wide range of lens options for distance and near vision.",
    slug: "cataracts",
    tags: ["cataract", "lens"],
  },
  {
    id: "lens-replacement",

    nameKey: "Procedures.lensReplacement",
    defaultName: "Lens replacement surgery",
    summaryKey: "Procedures.lensReplacementDesc",
    defaultSummary:
      "Refractive lens exchange to address presbyopia and high prescriptions.",
    slug: "lens-replacement-surgery",
    tags: ["cataract", "lens"],
  },
  {
    id: "cosmetic",

    nameKey: "Procedures.cosmeticOculo",
    defaultName: "Cosmetic & oculoplastic",
    summaryKey: "Procedures.cosmeticOculoDesc",
    defaultSummary:
      "Functional and cosmetic eyelid, tear duct and peri-ocular procedures.",
    slug: "cosmetic-oculoplastic",
    tags: ["lens"],
  },
];

const OurMainProceduresSection: FC = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const inView = useInView(sectionRef, {
    margin: "-120px 0px -120px 0px",
    once: true,
  });

  const initial = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 18 };

  const animate = { opacity: 1, y: 0 };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="our-main-procedures-heading"
      className="
        bg-[var(--mm-bg)]
        border-b border-softGray/70
          py-10 md:py-14 lg:py-16
      "
    >
      <motion.div
        className="containerr space-y-6 md:space-y-8"
        initial={initial}
        animate={inView ? animate : initial}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Header row */}
        <div className="max-w-3xl space-y-3">
          <SectionIntro title="Our main procedures" />
          <SectionTitle
            as="h2"
            text="HomeProcedures.title , Advanced eye procedures tailored to your vision"
          />
          <SectionDescription description="HomeProcedures.subtitle , Explore the core treatments we offer, from laser vision correction to premium lens surgery, all designed around your lifestyle and visual goals." />
        </div>

        {/* Cards grid */}
        <div
          className="
            grid gap-4 md:gap-5
            sm:grid-cols-2
            xl:grid-cols-4
          "
          role="list"
          aria-label={t(
            "HomeProcedures.listAria",
            "Main eye procedures offered at this clinic"
          )}
        >
          {procedures.map((item, index) => (
            <ProcedureMainCard
              key={item.id}
              item={item}
              index={index}
              trigger={inView}
            />
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <SectionEnding text="These are some of our key procedures. Your surgeon will recommend the most appropriate treatment after a full assessment." />

          <Link to="/procedures">
            <MainBtn text="View all procedures" theme="secondary" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default OurMainProceduresSection;
