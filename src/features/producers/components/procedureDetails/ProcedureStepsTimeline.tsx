// src/features/procedures/components/ProcedureStepsTimeline.tsx
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import SectionTitle from "@/common/components/sections/SectionTitle";
import type { ProcedureStep } from "../../types/procedure.types";

type Props = {
  steps: ProcedureStep[];
};

const ProcedureStepsTimeline: FC<Props> = ({ steps }) => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-label={t("Procedures.steps.aria", "What to expect timeline")}>
      <SectionTitle as="h2" text="Procedures.steps.heading" />

      <ol className="mt-4 space-y-4">
        {steps.map((step, index) => (
          <motion.li
            key={step.id}
            initial={shouldReduceMotion ? false : { opacity: 0, x: 8 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px 0px -80px 0px" }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 0.25, ease: "easeOut", delay: index * 0.04 }
            }
            className="relative pl-6"
          >
            <div
              aria-hidden="true"
              className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-primaryGreen"
            />
            <div
              aria-hidden="true"
              className="absolute left-[3px] top-4 bottom-0 w-px bg-softGray/80"
            />

            <h3 className="text-sm font-semibold text-primaryDarkGreen">
              {t(step.title)}
            </h3>
            <p className="text-xs md:text-sm text-slate-700">{t(step.body)}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
};

export default ProcedureStepsTimeline;
