// src/features/home/components/faq/FaqSection.tsx
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
import FaqItem from "./FaqItem";
import { faqItems } from "./faqData.ts";

const sectionTransition: Transition = {
  duration: 0.5,
  ease: "easeOut",
};

const FaqSection: FC = () => {
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
      aria-labelledby="home-faq-heading"
      className="
        bg-[var(--section-faq-bg,var(--mm-bg,#FFFDF6))]
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
          <SectionIntro title="FAQ.intro , Common questions" />
          <SectionTitle
            as="h2"
            id="home-faq-heading"
            text="FAQ.title , Questions patients often ask before eye procedures"
          />
          <SectionDescription description="FAQ.subtitle , Short answers to help you feel more prepared. Your own situation may be different, so your surgeon will always give personalised advice." />
        </div>

        {/* FAQ list */}
        <dl
          className="
            space-y-3 md:space-y-4
            max-w-3xl
          "
          aria-label={t(
            "FAQ.listAria",
            "Frequently asked questions about eye care and procedures"
          )}
        >
          {faqItems.map((item) => (
            <FaqItem key={item.id} item={item} />
          ))}
        </dl>
      </motion.div>
    </section>
  );
};

export default FaqSection;
