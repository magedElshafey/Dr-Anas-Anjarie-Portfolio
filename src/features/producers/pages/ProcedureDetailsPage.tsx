// src/features/procedures/pages/ProcedureDetailsPage.tsx
import { FC } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import { getProcedureBySlug } from "../data/procedures.config";
import ProcedureInfoSidebar from "../components/procedureDetails/ProcedureInfoSidebar";
import ProcedureSectionBlock from "../components/procedureDetails/ProcedureSectionBlock";
import ProcedureStepsTimeline from "../components/procedureDetails/ProcedureStepsTimeline";
import ProcedureFaqAccordion from "../components/procedureDetails/ProcedureFaqAccordion";
import BookConsultationButton from "@/common/components/buttons/book-consultation-button/BookConsultationButton";
import ProcedureDetailsHero from "../components/procedureDetails/ProcedureDetailsHero";
const ProcedureDetailsPage: FC = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  if (!slug) return <Navigate to="/procedures" replace />;

  const procedure = getProcedureBySlug(slug);
  if (!procedure) return <Navigate to="/procedures" replace />;

  const initial = shouldReduceMotion ? false : { opacity: 0, y: 20 };
  const animate = shouldReduceMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <main
      aria-label={t("Procedures.pageAria", "Procedure details")}
      className="bg-[var(--proc-page-bg,var(--mm-bg,#f6f4ef))] text-[var(--proc-text-main,#0f172a)]"
    >
      <ProcedureDetailsHero procedure={procedure} />

      {/* Main content */}
      <motion.section
        initial={initial}
        animate={animate}
        transition={
          shouldReduceMotion ? undefined : { duration: 0.45, ease: "easeOut" }
        }
        className="border-y border-softGray/60 bg-[var(--proc-section-bg,white)]"
      >
        <div className="containerr py-10 md:py-12 lg:py-14 grid gap-10 lg:grid-cols-[minmax(0,1.9fr)_minmax(0,1fr)] items-start">
          {/* Left: content */}
          <div className="space-y-8">
            {/* Eligibility */}
            {procedure.eligibilitySections.map((sec) => (
              <ProcedureSectionBlock
                key={sec.id}
                titleKey={sec.title}
                bodyKey={sec.body}
              />
            ))}

            {/* Benefits */}
            {procedure.benefitsSections.map((sec) => (
              <ProcedureSectionBlock
                key={sec.id}
                titleKey={sec.title}
                bodyKey={sec.body}
              />
            ))}

            {/* Steps / What to expect */}
            {procedure.steps.length > 0 && (
              <ProcedureStepsTimeline steps={procedure.steps} />
            )}

            {/* Risks */}
            {procedure.risksSections.length > 0 && (
              <ProcedureSectionBlock
                titleKey="Procedures.risks.heading"
                bodyKey=""
                customBodySections={procedure.risksSections}
              />
            )}

            {/* FAQ */}
            {procedure.faqs.length > 0 && (
              <ProcedureFaqAccordion
                items={procedure.faqs}
                headingKey="Procedures.faq.heading"
              />
            )}

            {/* Final CTA */}
            <section
              className="mt-6 rounded-2xl border border-softGray/60 bg-[var(--proc-cta-bg,#0f172a)] text-white px-4 py-5 md:px-6 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
              aria-label={t("Procedures.finalCta.aria", "Book consultation")}
            >
              <div className="space-y-1">
                <h2 className="text-sm md:text-base font-semibold">
                  {t(
                    "Procedures.finalCta.title",
                    "Ready to talk to a surgeon?"
                  )}
                </h2>
                <p className="text-[11px] md:text-xs text-white/80 max-w-xl">
                  {t(
                    "Procedures.finalCta.desc",
                    "Use this information and your personal consultation to decide if this procedure is right for your eyes."
                  )}
                </p>
              </div>
              <BookConsultationButton className="bg-white text-primaryGreen hover:bg-softYellowLight border-none" />
            </section>
          </div>

          {/* Right: sticky sidebar */}
          <ProcedureInfoSidebar procedure={procedure} />
        </div>
      </motion.section>
    </main>
  );
};

export default ProcedureDetailsPage;
