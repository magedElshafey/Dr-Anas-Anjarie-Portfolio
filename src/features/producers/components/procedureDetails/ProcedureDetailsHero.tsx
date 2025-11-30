import { FC } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BookConsultationButton from "@/common/components/buttons/book-consultation-button/BookConsultationButton";
import type { ProcedureDetails } from "../../types/procedure.types";
type Props = {
  procedure: ProcedureDetails;
};

const ProcedureDetailsHero: FC<Props> = ({ procedure }) => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      aria-label={t("Procedures.heroAria", "Procedure overview hero")}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={
        shouldReduceMotion ? undefined : { duration: 0.4, ease: "easeOut" }
      }
      className="bg-[var(--proc-hero-bg,#0b1620)] text-[var(--proc-hero-text,#f9fafb)] border-b border-slate-800/40"
    >
      <div className="containerr py-8 md:py-10 lg:py-12 grid gap-8 lg:grid-cols-[minmax(0,1.9fr)_minmax(0,1.2fr)] items-center">
        {/* Text */}
        <div className="space-y-4 md:space-y-5">
          {/* Breadcrumb-ish chip */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-softYellow" />
            <span>{t(procedure.categoryKey)}</span>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.4rem] font-extrabold leading-tight">
            {t(procedure.titleKey)}
          </h1>

          <p className="text-sm md:text-base text-slate-200 max-w-2xl">
            {t(procedure.heroSubtitleKey)}
          </p>

          <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
            {t(procedure.heroIntroKey)}
          </p>

          {procedure.tags && procedure.tags.length > 0 && (
            <ul className="flex flex-wrap gap-2 text-[11px]">
              {procedure.tags.map((tag) => (
                <li
                  key={tag.id}
                  className="inline-flex items-center rounded-full border border-white/20 px-2.5 py-1 bg-black/10"
                >
                  {tag.label}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <BookConsultationButton className="bg-softYellow text-primaryDarkGreen border-softYellow hover:bg-white" />
            <Link
              to="/vision-simulator"
              className="inline-flex items-center gap-2 rounded-full bg-black/20 border border-white/20 px-4 py-2 text-xs md:text-sm font-semibold text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-softYellow focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1620]"
            >
              <span>
                {t(
                  "Procedures.hero.simulatorCta",
                  "View lens options in the vision simulator"
                )}
              </span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Image / doctor visual */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 0.45, ease: "easeOut", delay: 0.05 }
          }
          className="relative max-w-lg mx-auto w-full"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-softYellow/40 via-softYellow/0 to-primaryGreen/30"
          />
          <div className="relative rounded-[2rem] bg-[var(--proc-hero-card-bg,#020617)] border border-white/15 shadow-2xl overflow-hidden">
            <img
              src={procedure.heroImage}
              alt={t(procedure.heroImageAltKey)}
              loading="lazy"
              className="w-full h-full max-h-[360px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProcedureDetailsHero;
