import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";

import type { ProcedureCategory, ProcedureTag } from "../../data/data";
export type FilterValue = "all" | ProcedureTag;

type Props = {
  activeFilter: FilterValue;
  onChange: (value: FilterValue) => void;
  categories: ProcedureCategory[];
};

const TAG_ORDER: FilterValue[] = [
  "all",
  "laser",
  "cataract",
  "lens",
  "cosmetic",
];

const ProceduresFilterBar: FC<Props> = ({
  activeFilter,
  onChange,
  categories,
}) => {
  const { t } = useTranslation();

  const tagCount = useMemo(() => {
    const counts: Record<FilterValue, number> = {
      all: 0,
      laser: 0,
      cataract: 0,
      lens: 0,
      cosmetic: 0,
      corneal: 0,
      glaucoma: 0,
      retina: 0,
    };

    categories.forEach((cat) =>
      cat.items.forEach((item) => {
        counts.all += 1;
        item.tags.forEach((tag) => {
          if (tag in counts) {
            counts[tag as FilterValue] += 1;
          }
        });
      })
    );

    return counts;
  }, [categories]);

  return (
    <section
      aria-label={t("ProceduresPage.filterAria", "Filter procedures by type")}
      className="bg-[var(--proc-list-bg)] border-b border-softGray/50"
    >
      <div className="containerr py-3 md:py-4">
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          {TAG_ORDER.map((tag) => {
            const isActive = activeFilter === tag;
            const count = tagCount[tag] ?? 0;
            const label =
              tag === "all"
                ? t("ProceduresPage.filterAll", "All procedures")
                : t(`ProceduresPage.filter.${tag}`, tag.toUpperCase());

            return (
              <button
                key={tag}
                type="button"
                onClick={() => onChange(tag)}
                className={`
                  inline-flex items-center gap-2 rounded-full border px-3 md:px-4 py-1.5
                  text-[11px] md:text-xs font-semibold
                  transition-colors
                  ${
                    isActive
                      ? "bg-primaryGreen text-white border-primaryGreen"
                      : "bg-white text-primaryDarkGreen border-softGray hover:bg-primaryGreen/5"
                  }
                `}
              >
                <span>{label}</span>
                <span
                  className={`
                    inline-flex min-w-[1.5rem] justify-center rounded-full
                    text-[10px] px-1.5 py-0.5
                    ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "bg-[var(--proc-list-tag-bg)] text-[var(--proc-list-tag-text)]"
                    }
                  `}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProceduresFilterBar;
