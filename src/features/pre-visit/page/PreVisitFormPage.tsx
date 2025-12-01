import { FC, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/common/components/sections/SectionTitle";
import SectionDescription from "@/common/components/sections/SectionDescription";
import PreVisitForm, { PreVisitFormValues } from "../components/PreVisitForm";

type ProcedureOption = { id: number; name: string };

// type Props = {
//   procedures?: ProcedureOption[]; // 👈 خليها اختيارية
//   initialProcedureId?: number | null;
//   onSubmitForm: (data: PreVisitFormValues) => Promise<void> | void;
// };

const PreVisitFormPage: FC = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 16 };
  const animate = { opacity: 1, y: 0 };
  const procedures: ProcedureOption[] = [
    {
      id: 1,
      name: "cataract",
    },
    {
      id: 2,
      name: "cosmatic",
    },
    {
      id: 3,
      name: "leser",
    },
  ];
  // ✅ ضمان إنها Array حتى لو undefined
  const safeProcedures: ProcedureOption[] = Array.isArray(procedures)
    ? procedures
    : [];

  const sortedProcedures = useMemo(
    () => [...safeProcedures].sort((a, b) => a.name.localeCompare(b.name)),
    [safeProcedures]
  );
  const onSubmitForm = (data: PreVisitFormValues) => {
    console.log("data", data);
  };
  return (
    <main className="bg-[var(--page-bg,#f6f4ef)]">
      <motion.section
        initial={initial}
        animate={animate}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="border-b border-softGray/60 bg-[var(--mm-bg)]"
        aria-label={t("PreVisit.heroAria", "Patient pre-visit form")}
      >
        <div className="containerr py-8 md:py-10 lg:py-12">
          <div className="max-w-3xl">
            <SectionTitle
              as="h1"
              text="PreVisit.heroTitle"
              id="previsit-heading"
            />
            <SectionDescription description="PreVisit.heroSubtitle" />
          </div>
        </div>
      </motion.section>

      <section className="containerr py-8 md:py-10 lg:py-12">
        <div className="max-w-5xl mx-auto">
          <PreVisitForm
            procedures={sortedProcedures}
            initialProcedureId={1}
            onSubmitForm={onSubmitForm}
          />
        </div>
      </section>
    </main>
  );
};

export default PreVisitFormPage;
