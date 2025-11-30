import { FC } from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import SectionIntro from "@/common/components/sections/SectionIntro";
import SectionTitle from "@/common/components/sections/SectionTitle";
import SectionDescription from "@/common/components/sections/SectionDescription";
import SectionEnding from "@/common/components/sections/SectionEnding";

const ProceduresHero: FC = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 16 };
  const animate = { opacity: 1, y: 0 };

  return (
    <motion.section
      aria-labelledby="procedures-hero-heading"
      className=" bg-[var(--mm-bg)] border-b border-softGray/50"
      initial={initial}
      animate={animate}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="containerr py-8 md:py-10 lg:py-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-center">
          {/* Text */}
          <div className="space-y-3 md:space-y-4">
            <SectionIntro title="Our main procedures" />
            <SectionTitle text="Explore our specialist eye procedures in one place" />
            <SectionDescription description="Browse laser vision correction, cataract surgery, premium lens options and eyelid procedures. Your surgeon will help you choose what fits your eyes and lifestyle." />
            <SectionEnding text="Information on this page is for general guidance and does not replace a full consultation." />
          </div>

          {/* Simple visual / stats */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 16 }
            }
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            className="relative max-w-md w-full mx-auto"
            aria-hidden="true"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-softYellow/40 via-softYellow/0 to-primaryGreen/20 pointer-events-none" />
            <div className="relative rounded-3xl bg-white border border-softGray/60 shadow-xl px-5 py-4 flex flex-col gap-3">
              <p className="text-xs font-semibold text-primaryDarkGreen">
                {t(
                  "ProceduresPage.heroHighlight",
                  "Consultant-led, tailored plans"
                )}
              </p>
              <p className="text-[11px] text-slate-600">
                {t(
                  "ProceduresPage.heroText",
                  "Many patients are suitable for more than one procedure. We use detailed measurements and discussion to recommend what suits you best."
                )}
              </p>

              <div className="mt-2 grid grid-cols-3 gap-3 text-center text-[11px]">
                <div className="rounded-2xl bg-primaryGreen/5 px-3 py-2">
                  <p className="text-sm font-bold text-primaryDarkGreen">
                    Laser
                  </p>
                  <p className="text-[10px] text-slate-600">
                    Vision correction
                  </p>
                </div>
                <div className="rounded-2xl bg-primaryGreen/5 px-3 py-2">
                  <p className="text-sm font-bold text-primaryDarkGreen">
                    Cataract
                  </p>
                  <p className="text-[10px] text-slate-600">Lens surgery</p>
                </div>
                <div className="rounded-2xl bg-primaryGreen/5 px-3 py-2">
                  <p className="text-sm font-bold text-primaryDarkGreen">
                    Eyelids
                  </p>
                  <p className="text-[10px] text-slate-600">Cosmetic care</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProceduresHero;
