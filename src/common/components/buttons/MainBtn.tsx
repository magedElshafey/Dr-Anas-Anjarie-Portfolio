import React from "react";
import { useTranslation } from "react-i18next";
import { cv } from "css-variants";
import { twMerge } from "tailwind-merge";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const themes = {
  main: `
    bg-[var(--btn-main-bg)]
    text-[var(--btn-main-text)]
    border-[var(--btn-main-border)]
  `,
  secondary: `
    bg-[var(--btn-secondary-bg)]
    text-[var(--btn-secondary-text)]
    border-[var(--btn-secondary-border)]
  `,
  outline: `
    bg-[var(--btn-outline-bg)]
    text-[var(--btn-outline-text)]
    border-[var(--btn-outline-border)]
  `,
  danger: `
    bg-[var(--btn-danger-bg)]
    text-[var(--btn-danger-text)]
    border-[var(--btn-danger-border)]
  `,
} as const;

type ThemeKey = keyof typeof themes;
type VariantKey = "pill" | "solid" | "chip";

const buttonVariants = cv({
  base: `
    relative inline-flex items-center justify-center
    rounded-full font-semibold
    border transition-all duration-300
    disabled:cursor-not-allowed disabled:opacity-50
    overflow-hidden group select-none
    focus:outline-none focus-visible:ring-2 
    focus-visible:ring-offset-2 focus-visible:ring-primaryGreen
  `,
  variants: {
    theme: { ...themes },
    variant: {
      pill: `
        px-5 md:px-6 py-2.5
        text-xs md:text-sm
      `,
      solid: `
        px-5 md:px-6 py-2.5
        text-xs md:text-sm
      `,
      chip: `
        px-3 py-1.5
        text-[0.7rem] md:text-xs
      `,
    },
  },
  defaultVariants: {
    theme: "main",
    variant: "pill",
  },
});

export interface MainBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  isPending?: boolean;
  theme?: ThemeKey;
  variant?: VariantKey;
  hasIcon?: boolean;
  icon?: React.ReactNode;
  showArrow?: boolean;
}

const MainBtn: React.FC<React.PropsWithChildren<MainBtnProps>> = ({
  text,
  isPending = false,
  className,
  theme = "main",
  variant = "pill",
  hasIcon = false,
  icon,
  children,
  disabled,
  showArrow = true,
  ...rest
}) => {
  const { t, i18n } = useTranslation();
  const arrow = i18n.language === "en" ? "→" : "←";

  const isChip = variant === "chip";
  const isPill = variant === "pill";

  // fill لون الخلفية في حالة الـ pill بس
  const fillColorClass =
    theme === "main"
      ? "bg-primaryGreen"
      : theme === "secondary"
      ? "bg-white"
      : "bg-primaryGreen";
  const fillTextClass =
    theme === "main"
      ? "group-hover:text-white"
      : "group-hover:text-primaryGreen";
  const label = text && !children ? t(text) : children || "";

  return (
    <button
      disabled={isPending || disabled}
      aria-busy={isPending}
      aria-label={
        isPending
          ? t("Submitting, please wait")
          : typeof label === "string"
          ? label
          : undefined
      }
      className={twMerge(buttonVariants({ theme, variant }), className)}
      {...rest}
    >
      {/* ✅ Background hover fill (pill فقط) */}
      {isPill && (
        <span
          className={`
            absolute inset-y-0 left-0
            w-0
            group-hover:w-full
            transition-[width]
            duration-300 ease-out
            ${fillColorClass}
          `}
          aria-hidden="true"
        />
      )}

      {/* ✅ محتوى الزرار */}
      <span
        className={twMerge(
          `
          relative z-10 inline-flex items-center gap-2
          text-[0.7rem] md:text-xs
          transition-colors
        `,
          isPill ? fillTextClass : "",
          isChip
            ? `
              text-[var(--vision-chip-text)]
            `
            : ""
        )}
      >
        {isPending ? (
          <AiOutlineLoading3Quarters
            className="animate-spin"
            size={18}
            aria-hidden="true"
          />
        ) : (
          <>
            {hasIcon && icon && (
              <span className="text-base" aria-hidden="true">
                {icon}
              </span>
            )}

            {label}

            {/* السهم – مش ضروري في الـ chip */}
            {!isChip && showArrow && (
              <span
                className="
                  translate-x-0
                  group-hover:translate-x-0.5
                  transition-transform
                "
                aria-hidden="true"
              >
                {arrow}
              </span>
            )}
          </>
        )}
      </span>
    </button>
  );
};

export default React.memo(MainBtn);
