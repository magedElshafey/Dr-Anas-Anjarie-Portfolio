// src/features/procedures/components/ProcedureSectionBlock.tsx
import { FC } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/common/components/sections/SectionTitle";
import SectionDescription from "@/common/components/sections/SectionDescription";
import type { ProcedureSection } from "../../types/procedure.types";

type Props = {
  titleKey: string;
  bodyKey: string;
  customBodySections?: ProcedureSection[]; // استخدمها في risks لو عندك أكتر من بلوك
};

const ProcedureSectionBlock: FC<Props> = ({
  titleKey,
  bodyKey,
  customBodySections,
}) => {
  const { t } = useTranslation();

  const hasCustom = customBodySections && customBodySections.length > 0;

  return (
    <section className="space-y-3">
      <SectionTitle as="h2" text={titleKey} />
      {!hasCustom && bodyKey && <SectionDescription description={bodyKey} />}

      {hasCustom && (
        <div className="space-y-3">
          {customBodySections!.map((sec) => (
            <div key={sec.id} className="space-y-1">
              <h3 className="text-sm md:text-base font-semibold text-primaryDarkGreen">
                {t(sec.title)}
              </h3>
              <p className="text-xs md:text-sm text-slate-700">{t(sec.body)}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProcedureSectionBlock;
