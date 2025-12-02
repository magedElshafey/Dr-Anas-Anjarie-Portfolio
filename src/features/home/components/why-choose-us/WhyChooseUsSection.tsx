// src/features/home/components/WhyChooseUsSection.tsx
import { FC, useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionIntro from "@/common/components/sections/SectionIntro";
import SectionTitle from "@/common/components/sections/SectionTitle";
import SectionEnding from "@/common/components/sections/SectionEnding";
import SectionDescription from "@/common/components/sections/SectionDescription";
import StatCard from "./StatsCard";
import SectionDetails from "@/common/components/sections/SectionDetails";

const WhyChooseUsSection: FC = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const inView = useInView(sectionRef, {
    margin: "-120px 0px -120px 0px",
    once: true,
  });

  const initial = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 16 };
  const animate = { opacity: 1, y: 0 };

  const details = [
    {
      text: "Consultations led by experienced cataract and refractive surgeons.",
    },
    {
      text: "Access to premium lenses tailored to your lifestyle and visual needs.",
    },
    {
      text: "Transparent explanations, visual tools and time for your questions.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      aria-labelledby="why-choose-us-heading"
      className="
        bg-[var(--why-bg)]
        border-y border-[var(--why-border)]
      "
    >
      <motion.div
        className="containerr py-10 md:py-14 lg:py-16"
        initial={initial}
        animate={inView ? animate : initial}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
          {/* Stats column */}
          <div
            className="
              grid gap-4
              sm:grid-cols-2
              auto-rows-fr
            "
            aria-label={t(
              "WhyChoose.statsAria",
              "Clinic experience statistics"
            )}
          >
            <StatCard
              labelKey="WhyChoose.yearsLabel"
              defaultLabel="Years of consultant experience"
              descriptionKey="WhyChoose.yearsDesc"
              defaultDescription="Our lead surgeons bring many years of cataract and refractive surgery experience to every case."
              suffix="+"
              target={50}
              trigger={inView}
            />

            <StatCard
              labelKey="WhyChoose.trainingLabel"
              defaultLabel="Fellowship & subspecialty training"
              descriptionKey="WhyChoose.trainingDesc"
              defaultDescription="International fellowship training and advanced courses in cornea, cataract and refractive techniques."
              target={30}
              trigger={inView}
            />

            <StatCard
              labelKey="WhyChoose.proceduresLabel"
              defaultLabel="Cataract & lens procedures"
              descriptionKey="WhyChoose.proceduresDesc"
              defaultDescription="A high volume of successful procedures performed with modern biometry and lens technology."
              suffix="k+"
              target={100}
              trigger={inView}
            />

            <StatCard
              labelKey="WhyChoose.satisfactionLabel"
              defaultLabel="Patient satisfaction"
              descriptionKey="WhyChoose.satisfactionDesc"
              defaultDescription="Patients consistently report clearer vision, greater confidence and improved daily quality of life."
              suffix="%"
              target={98}
              trigger={inView}
            />
          </div>
          {/* Text column */}
          <div className="space-y-4 md:space-y-5">
            <SectionIntro title="Why patients choose us" />

            <SectionTitle
              as="h2"
              id="why-choose-us-heading" // ✅ مربوط بـ aria-labelledby
              text="Specialist-led care with advanced lens options"
            />

            <SectionDescription description="From your first consultation to your final follow-up, our team focuses on safety, clarity of vision and personal support at every step." />

            <ul className="space-y-1.5 text-xs md:text-sm text-[var(--why-text-main)]">
              {details.map((item, index) => (
                <SectionDetails key={index} item={item} />
              ))}
            </ul>

            <SectionEnding text="Numbers are illustrative and may vary between clinics. Always discuss your individual situation with your surgeon." />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUsSection;
