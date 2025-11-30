import React from "react";

type ChipButtonProps = {
  active: boolean;
  label: React.ReactNode;
  onClick: () => void;
};

const ChipButton: React.FC<ChipButtonProps> = ({ active, label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`
      inline-flex items-center justify-center
      rounded-full px-3 py-1.5
      text-xs md:text-sm
      border
      transition-colors
      ${
        active
          ? "bg-[var(--vision-chip-active-bg)] text-[var(--vision-chip-active-text)] border-[var(--vision-chip-active-bg)]"
          : "bg-[var(--vision-chip-bg)] text-[var(--vision-text-main)] border-[var(--vision-panel-border)] hover:border-primaryGreen"
      }
    `}
  >
    {label}
  </button>
);

export default ChipButton;
