// src/features/home/components/StatsCard.tsx
import React, { useEffect, useRef, useId } from "react";
import { useTranslation } from "react-i18next";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

type StatCardProps = {
  labelKey: string;
  defaultLabel: string;
  descriptionKey: string;
  defaultDescription: string;
  suffix?: string;
  target: number;
  trigger: boolean;
};

const StatCard: React.FC<StatCardProps> = ({
  labelKey,
  defaultLabel,
  descriptionKey,
  defaultDescription,
  suffix = "",
  target,
  trigger,
}) => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const hasAnimatedRef = useRef(false);
  const descriptionId = useId();

  useEffect(() => {
    if (!trigger || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;

    if (shouldReduceMotion) {
      count.set(target);
      return;
    }

    const controls = animate(count, target, {
      duration: 1.2,
      ease: "easeOut",
    });

    return () => {
      controls.stop();
    };
  }, [trigger, shouldReduceMotion, count, target]);

  const label = t(labelKey, defaultLabel);
  const description = t(descriptionKey, defaultDescription);

  const enableHover = !shouldReduceMotion;

  return (
    <motion.div
      className="
        rounded-2xl
        bg-[var(--why-card-bg)]
        border border-[var(--why-card-border)]
        shadow-sm
        px-4 py-4 md:px-5 md:py-5
        flex flex-col gap-2
      "
      role="group"
      aria-label={label}
      aria-describedby={descriptionId}
      whileHover={enableHover ? { y: -2 } : undefined}
      transition={
        enableHover
          ? { type: "spring", stiffness: 260, damping: 24 }
          : undefined
      }
    >
      <div className="text-[var(--why-accent)] text-xs font-semibold tracking-[0.16em] uppercase">
        {label}
      </div>

      <div className="flex items-baseline gap-1">
        <span
          className="
            text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl
            font-bold
            text-[var(--why-title)]
          "
          aria-live="polite"
        >
          {shouldReduceMotion ? target : <motion.span>{rounded}</motion.span>}
        </span>
        {suffix && (
          <span className="text-sm md:text-base font-semibold text-[var(--why-title)]">
            {suffix}
          </span>
        )}
      </div>

      <p
        id={descriptionId}
        className="text-xs md:text-sm text-[var(--why-text-muted)]"
      >
        {description}
      </p>
    </motion.div>
  );
};

export default StatCard;
