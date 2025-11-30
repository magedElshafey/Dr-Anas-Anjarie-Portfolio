import { FC } from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import type { ProcedureDetails } from "../../types/procedure.types";
type Props = {
  procedure: ProcedureDetails;
};

const ProcedureInfoSidebar: FC<Props> = ({ procedure }) => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <aside
      aria-label={t("Procedures.sidebar.aria", "At-a-glance and surgeon info")}
      className="lg:sticky lg:top-24 space-y-4"
    >
      {/* Quick facts card */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={
          shouldReduceMotion ? undefined : { duration: 0.35, ease: "easeOut" }
        }
        className="rounded-2xl bg-[var(--proc-card-bg,white)] border border-softGray/70 shadow-sm px-4 py-4 md:px-5 md:py-5"
      >
        <h2 className="text-sm font-semibold text-primaryDarkGreen mb-3">
          {t("Procedures.quickFacts.heading", "At a glance")}
        </h2>
        <dl className="space-y-2 text-xs md:text-sm text-slate-700">
          {procedure.quickFacts.map((fact) => (
            <div key={fact.id} className="flex justify-between gap-3">
              <dt className="text-slate-500">{t(fact.label)}</dt>
              <dd className="font-semibold text-primaryDarkGreen text-right">
                {t(fact.value)}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>

      {/* Doctor card (optional) */}
      {procedure.doctor && (
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 0.35, ease: "easeOut", delay: 0.05 }
          }
          className="rounded-2xl bg-[var(--proc-card-bg,white)] border border-softGray/70 shadow-sm overflow-hidden"
        >
          <div className="flex gap-3 px-4 py-4 md:px-5 md:py-5 items-center">
            <img
              src={procedure.doctor.image}
              alt={t(procedure.doctor.nameKey)}
              loading="lazy"
              className="w-16 h-16 rounded-full object-cover border border-softGray/70"
            />
            <div>
              <p className="text-sm font-semibold text-primaryDarkGreen">
                {t(procedure.doctor.nameKey)}
              </p>
              <p className="text-xs text-slate-600">
                {t(procedure.doctor.titleKey)}
              </p>
            </div>
          </div>
          <div className="bg-slate-50/70 border-t border-softGray/60 px-4 py-3 text-[11px] text-slate-600">
            {t(
              "Procedures.doctorDisclaimer",
              "Your procedure will be planned and overseen by a consultant ophthalmic surgeon."
            )}
          </div>
        </motion.div>
      )}
    </aside>
  );
};

export default ProcedureInfoSidebar;
