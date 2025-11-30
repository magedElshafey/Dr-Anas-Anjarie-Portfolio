// src/features/procedures/pages/AllProceduresPage.tsx
import { FC, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import ProceduresHero from "../components/hero/ProceduresHero";
import ProceduresFilterBar, {
  type FilterValue,
} from "../components/filter/ProceduresFilterBar";
import ProcedureCategorySection from "../components/categories/ProcedureCategorySection";
import { procedureCategories } from "../data/data";

const AllProceduresPage: FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<FilterValue>("all");

  const categories = useMemo(() => procedureCategories, []);

  return (
    <main
      aria-label={t("ProceduresPage.mainAria", "All procedures")}
      className="bg-[var(--proc-list-bg)] text-[var(--vision-text-main,#111827)]"
    >
      <ProceduresHero />
      <ProceduresFilterBar
        activeFilter={filter}
        onChange={setFilter}
        categories={categories}
      />

      <section
        aria-label={t("ProceduresPage.categoriesAria", "Procedure categories")}
      >
        <div className="containerr py-6 md:py-8 lg:py-10">
          {categories.map((cat, index) => (
            <ProcedureCategorySection
              key={cat.id}
              category={cat}
              index={index}
              activeFilter={filter}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default AllProceduresPage;
