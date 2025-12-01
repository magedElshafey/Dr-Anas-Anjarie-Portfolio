//

// src/features/home/components/faq/FaqSection.tsx
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
import FaqItem from "./FaqItem";
import { faqItems } from "./faqData";
import { Link } from "react-router-dom";

const FaqSection: FC = () => {
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
    <section
      aria-labelledby="home-faq-heading"
      className="
        relative
        bg-[var(--section-faq-bg,#FFFDF6)]
        border-t border-[var(--border-subtle,#E5E7EB)]
      "
    >
      {/* subtle gradient bubble */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute right-[-80px] top-[-40px]
          h-48 w-48 rounded-full
          bg-primaryGreen/5 blur-3xl
        "
      />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative containerr py-10 md:py-14 lg:py-16"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
          {/* left column – summary + CTA */}
          <div className="space-y-4 md:space-y-5">
            <SectionIntro title="FAQ.intro , Common questions" />
            <SectionTitle
              as="h2"
              id="home-faq-heading"
              text="FAQ.title , Answers to questions patients ask most often"
            />
            <SectionDescription description="FAQ.subtitle , These short answers are a starting point only – your own risks, benefits and timing will be discussed in detail at your appointment." />

            <div
              className="
                rounded-3xl
                bg-[var(--card-bg,var(--surface-elevated,#FFFFFF))]
                border border-[var(--border-subtle,#E5E7EB)]
                shadow-sm
                p-4 md:p-5
                space-y-2
              "
            >
              <p className="text-xs md:text-sm font-semibold text-primaryDarkGreen">
                {t(
                  "FAQ.stillQuestionsTitle",
                  "Still have a question about your eyes?"
                )}
              </p>
              <p className="text-[11px] md:text-xs text-[var(--text-muted,#4B5563)]">
                {t(
                  "FAQ.stillQuestionsText",
                  "Our team are happy to clarify anything before you book or before your procedure date."
                )}
              </p>
              <Link
                to="/contact"
                className="
                  inline-flex items-center gap-1.5
                  rounded-full px-3.5 py-1.5
                  text-[11px] font-semibold
                  bg-primaryGreen text-white
                  hover:bg-primaryDarkGreen
                  focus:outline-none focus-visible:ring-2
                  focus-visible:ring-[var(--focus-ring,#0f766e)]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[var(--section-faq-bg,#FFFDF6)]
                "
              >
                <span>
                  {t("FAQ.contactCTA", "Contact us about your question")}
                </span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* right column – accordion list */}
          <dl
            className="space-y-3 md:space-y-4"
            aria-label={t(
              "FAQ.listAria",
              "Frequently asked questions about eye care and surgery"
            )}
          >
            {faqItems.map((item, index) => (
              <FaqItem key={item.id} item={item} index={index} />
            ))}
          </dl>
        </div>
      </motion.div>
    </section>
  );
};

export default FaqSection;
