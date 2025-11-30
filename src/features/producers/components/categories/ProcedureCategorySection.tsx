import { FC, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { ProcedureCategory } from "../../data/data";
import { ProcedureItem } from "../../data/data";
import ProcedureMainCard from "../card/ProcedureMainCard";

type Props = {
  category: ProcedureCategory;
  index: number;
  activeFilter: "all" | string;
};

const ProcedureCategorySection: FC<Props> = ({
  category,
  index,
  activeFilter,
}) => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    margin: "-120px 0px -120px 0px",
    once: true,
  });
  const shouldReduceMotion = useReducedMotion();

  const filteredItems =
    activeFilter === "all"
      ? category.items
      : category.items.filter((item) =>
          item.tags.includes(activeFilter as any)
        );

  if (!filteredItems.length) return null;

  const title = t(category.nameKey, category.defaultName);
  const desc = t(category.descriptionKey, category.defaultDescription);

  const initial = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 20 };
  const animate = inView ? { opacity: 1, y: 0 } : initial;

  return (
    <motion.section
      ref={ref}
      aria-labelledby={`${category.id}-heading`}
      className="border-b border-softGray/40 py-6 md:py-8"
      initial={initial}
      animate={animate}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.04 }}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
        <div className="md:max-w-sm space-y-1.5">
          <h2
            id={`${category.id}-heading`}
            className="text-lg md:text-xl font-semibold text-primaryDarkGreen"
          >
            {title}
          </h2>
          <p className="text-xs md:text-sm text-[var(--proc-list-card-muted)]">
            {desc}
          </p>
        </div>

        <ul
          className="mt-3 md:mt-0 grid gap-3 md:grid-cols-2 lg:grid-cols-3 w-full"
          role="list"
        >
          {filteredItems.map((item: ProcedureItem, i: number) => (
            <ProcedureMainCard
              key={item.id}
              item={item}
              index={i}
              trigger={inView}
            />
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default ProcedureCategorySection;
