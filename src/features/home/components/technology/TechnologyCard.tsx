// // src/features/home/components/technology/TechnologyCard.tsx
// import React from "react";
// import {
//   motion,
//   useReducedMotion,
//   type Transition,
//   type TargetAndTransition,
// } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import type { TechnologyItem } from "./technologyData.ts";
// type Props = {
//   item: TechnologyItem;
//   index: number;
// };

// const TechnologyCard: React.FC<Props> = ({ item, index }) => {
//   const { t } = useTranslation();
//   const shouldReduceMotion = useReducedMotion();

//   const baseInitial: TargetAndTransition = shouldReduceMotion
//     ? { opacity: 1, y: 0 }
//     : { opacity: 0, y: 16 };

//   const baseAnimate: TargetAndTransition = { opacity: 1, y: 0 };

//   const transition: Transition = {
//     duration: 0.35,
//     ease: "easeOut",
//     delay: shouldReduceMotion ? 0 : index * 0.05,
//   };

//   const enableHover = !shouldReduceMotion;

//   return (
//     <motion.article
//       initial={baseInitial}
//       animate={baseAnimate}
//       transition={transition}
//       className="
//         relative
//         rounded-2xl
//         bg-[var(--card-bg,var(--surface-elevated,#FFFFFF))]
//         border border-[var(--border-subtle,#E5E7EB)]
//         shadow-sm
//         overflow-hidden
//         p-4 md:p-5
//         flex flex-col gap-3
//         focus-within:ring-2
//         focus-within:ring-[var(--focus-ring,#0f766e)]
//         focus-within:ring-offset-2
//         focus-within:ring-offset-[var(--section-tech-bg,#F5F5F0)]
//       "
//       role="group"
//       aria-label={t(item.titleKey, item.defaultTitle)}
//       whileHover={enableHover ? { y: -3, scale: 1.01 } : undefined}
//       transition={
//         enableHover
//           ? ({ type: "spring", stiffness: 260, damping: 22 } as Transition)
//           : transition
//       }
//     >
//       {/* Pill */}
//       <div className="inline-flex items-center gap-2 rounded-full bg-primaryGreen/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primaryGreen">
//         <span className="h-1.5 w-1.5 rounded-full bg-primaryGreen" />
//         {t(item.categoryKey, item.defaultCategory)}
//       </div>

//       {/* Title */}
//       <h3 className="text-sm md:text-base font-semibold text-[var(--text-main,#111827)]">
//         {t(item.titleKey, item.defaultTitle)}
//       </h3>

//       {/* Bullet points */}
//       <ul className="space-y-1 text-xs md:text-sm text-[var(--text-muted,#4B5563)]">
//         {item.points.map((point) => (
//           <li key={point.key}>• {t(point.key, point.defaultText)}</li>
//         ))}
//       </ul>

//       {/* Tag / extra info */}
//       {item.noteKey && (
//         <p className="mt-1 text-[11px] text-[var(--text-muted,#6B7280)]">
//           {t(item.noteKey, item.defaultNote || "")}
//         </p>
//       )}
//     </motion.article>
//   );
// };

// export default React.memo(TechnologyCard);

// src/features/home/components/technology/TechnologyCard.tsx
import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { TechnologyItem } from "./technologyData";

type Props = {
  item: TechnologyItem;
};

const TechnologyCard: React.FC<Props> = ({ item }) => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const cardVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, ease: "easeOut" },
        },
      };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="
        relative
        rounded-3xl
        bg-[var(--card-bg,var(--surface-elevated,#FFFFFF))]
        border border-[var(--border-subtle,#E5E7EB)]
        shadow-sm
        overflow-hidden
        p-4 md:p-5
        flex flex-col gap-3
        backdrop-blur
        focus-within:ring-2
        focus-within:ring-[var(--focus-ring,#0f766e)]
        focus-within:ring-offset-2
        focus-within:ring-offset-[var(--section-tech-bg,#F5F5F0)]
        group
      "
      role="group"
      aria-label={t(item.titleKey, item.defaultTitle)}
      whileHover={
        shouldReduceMotion
          ? undefined
          : { y: -4, boxShadow: "0 18px 30px rgba(15,118,110,0.12)" }
      }
      transition={
        shouldReduceMotion
          ? undefined
          : { type: "spring", stiffness: 260, damping: 24 }
      }
    >
      {/* glow strip */}
      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 top-0 h-[3px]
          bg-gradient-to-r from-primaryGreen via-softYellow to-primaryDarkGreen
        "
      />

      {/* Label pill */}
      <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-primaryGreen">
        <span className="h-1.5 w-1.5 rounded-full bg-primaryGreen" />
        {t(item.labelKey, item.defaultLabel)}
      </div>

      {/* Title */}
      <h3 className="text-sm md:text-base font-semibold text-[var(--text-main,#111827)]">
        {t(item.titleKey, item.defaultTitle)}
      </h3>

      {/* Bullet points */}
      <ul className="space-y-1.5 text-xs md:text-sm text-[var(--text-muted,#4B5563)]">
        {item.points.map((point) => (
          <li key={point.key}>• {t(point.key, point.defaultText)}</li>
        ))}
      </ul>

      {/* Badge */}
      {item.badgeKey && (
        <p className="mt-2 inline-flex items-center rounded-full bg-primaryGreen/5 px-3 py-1 text-[10px] font-medium text-primaryDarkGreen">
          {t(item.badgeKey, item.defaultBadge || "")}
        </p>
      )}
    </motion.article>
  );
};

export default React.memo(TechnologyCard);
