// src/features/home/components/about-affiliations/AffiliationSlider.tsx
import React, { useId } from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Affiliation } from "./data";

type Props = {
  items: Affiliation[];
};

const AffiliationSlider: React.FC<Props> = ({ items }) => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const sectionId = useId();

  // لو مفيش داتا نرجّع null
  if (!items.length) return null;

  // نكرر اللوجوهات علشان نقدر نعمل ماركيه لا نهائية
  const track = [...items, ...items];

  return (
    <section
      aria-labelledby={`${sectionId}-label`}
      className="
        w-full
        rounded-3xl
        bg-[var(--card-bg-layer,var(--surface-elevated,#FFFFFF))]
        border border-[var(--border-subtle,#E5E7EB)]
        shadow-sm
        px-4 py-4 md:px-6 md:py-5
      "
    >
      {/* العنوان الصغير فوق السلايدر */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div>
          <p
            id={`${sectionId}-label`}
            className="text-xs md:text-sm font-semibold text-[var(--text-main,#111827)]"
          >
            {t(
              "AboutPreview.affiliationsHeading",
              "Professional affiliations & partnerships"
            )}
          </p>
          <p className="text-[11px] md:text-xs text-[var(--text-muted,#6B7280)]">
            {t(
              "AboutPreview.affiliationsSubheading",
              "Recognised memberships and organisations we work with."
            )}
          </p>
        </div>
      </div>

      {/* شريط اللوجوهات – ماركيه لا نهائي */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex items-center gap-10 py-3 min-w-max"
          // في حالة الـ reduced motion بنوقف الأنيميشن
          animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity,
                }
          }
          aria-hidden={!shouldReduceMotion}
        >
          {track.map((item, index) =>
            item.href ? (
              <Link
                key={`${item.id}-${index}`}
                to={item.href}
                className="
                  inline-flex items-center justify-center
                  px-4 md:px-6
                  py-2
                  rounded-2xl
                  bg-[var(--logo-bg,white)]
                  border border-[var(--border-subtle,#E5E7EB)]
                  shadow-sm
                  focus:outline-none focus-visible:ring-2
                  focus-visible:ring-[var(--focus-ring,#0f766e)]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[var(--section-about-bg,#F9FAFB)]
                "
              >
                <img
                  src={item.logo}
                  alt={item.alt}
                  loading="lazy"
                  className="h-8 md:h-10 w-auto max-w-[140px] object-contain"
                />
              </Link>
            ) : (
              <div
                key={`${item.id}-${index}`}
                className="
                  inline-flex items-center justify-center
                  px-4 md:px-6
                  py-2
                  rounded-2xl
                  bg-[var(--logo-bg,white)]
                  border border-[var(--border-subtle,#E5E7EB)]
                  shadow-sm
                "
              >
                <img
                  src={item.logo}
                  alt={item.alt}
                  loading="lazy"
                  className="h-8 md:h-10 w-auto max-w-[140px] object-contain"
                />
              </div>
            )
          )}
        </motion.div>
      </div>

      {/* قائمة مخفية لقرّاء الشاشة علشان الـ accessibility */}
      <ul className="sr-only">
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default React.memo(AffiliationSlider);
