// src/features/procedures/components/ProcedureFaqAccordion.tsx
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import type { ProcedureFaq } from "../../types/procedure.types";
import SectionTitle from "@/common/components/sections/SectionTitle";

type Props = {
  items: ProcedureFaq[];
  headingKey: string;
};

const ProcedureFaqAccordion: FC<Props> = ({ items, headingKey }) => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      aria-label={t("Procedures.faq.aria", "Frequently asked questions")}
    >
      <SectionTitle as="h2" text={headingKey} />

      <div className="mt-4 divide-y divide-softGray/70 rounded-2xl border border-softGray/70 bg-[var(--proc-faq-bg,#f9fafb)]">
        {items.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className="px-4 py-3 md:px-5 md:py-4">
              <button
                type="button"
                onClick={() => toggle(faq.id)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-3 text-left"
              >
                <span className="text-xs md:text-sm font-semibold text-primaryDarkGreen">
                  {t(faq.question)}
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white border border-softGray/80 text-xs"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: -4 }}
                    animate={
                      shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                    }
                    exit={
                      shouldReduceMotion ? undefined : { opacity: 0, y: -4 }
                    }
                    transition={
                      shouldReduceMotion
                        ? undefined
                        : { duration: 0.18, ease: "easeOut" }
                    }
                  >
                    <p className="mt-2 text-[11px] md:text-sm text-slate-700">
                      {t(faq.answer)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProcedureFaqAccordion;
