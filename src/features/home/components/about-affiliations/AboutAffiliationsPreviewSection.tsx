import { FC, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionIntro from "@/common/components/sections/SectionIntro";
import SectionTitle from "@/common/components/sections/SectionTitle";
import SectionDescription from "@/common/components/sections/SectionDescription";
import SectionEnding from "@/common/components/sections/SectionEnding";
import AffiliationSlider from "./AffiliationSlider";
import { affiliations } from "./data";
import MainBtn from "@/common/components/buttons/MainBtn";

const AboutAffiliationsPreviewSection: FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const inView = useInView(ref, {
    margin: "-120px 0px -120px 0px",
    once: true,
  });

  const initial = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 20 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section
      aria-labelledby="about-affiliations-heading"
      className="
        bg-[var(--section-about-bg,var(--page-bg,#F9FAFB))]
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
        {/* نص عن الدكتور / الكلينك + CTA */}
        <div className="max-w-3xl space-y-3 md:space-y-4">
          <SectionIntro title="About us" />
          <SectionTitle
            as="h2"
            id="about-affiliations-heading"
            text="AboutPreview.title , Advanced eye care with trusted affiliations"
          />

          <SectionDescription description="AboutPreview.subtitle , Our team combines specialist training with strong hospital and academic partnerships to deliver safe, evidence-based cataract and vision correction care." />

          <SectionEnding text="AboutPreview.note , Full professional biography, training history and affiliations are available on the dedicated About page." />

          <div className="pt-2">
            <Link to="/about">
              <MainBtn
                text="Learn more about us & our affiliations"
                theme="secondary"
                variant="solid"
              />
            </Link>
          </div>
        </div>

        {/* السلايدر – واخد row كامل */}
        <AffiliationSlider items={affiliations} />
      </motion.div>
    </section>
  );
};

export default AboutAffiliationsPreviewSection;
