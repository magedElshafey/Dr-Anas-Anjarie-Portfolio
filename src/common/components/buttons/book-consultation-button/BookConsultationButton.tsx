import React from "react";

type BookConsultationButtonProps = {
  href?: string;
  label?: string;
  /** open link in new tab */
  openInNewTab?: boolean;
  /** extra tailwind classes (margin / width / etc) */
  className?: string;
};

const BookConsultationButton: React.FC<BookConsultationButtonProps> = ({
  href = "https://www.newmedica.co.uk/book/",
  label = "Book a consultation",
  openInNewTab = true,
  className = "",
}) => {
  const target = openInNewTab ? "_blank" : "_self";
  const rel = openInNewTab ? "noopener noreferrer" : undefined;

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`
        relative inline-flex items-center justify-center
        px-5 md:px-6 py-2.5
        rounded-full border border-primaryGreen
        text-xs md:text-sm font-semibold
        text-primaryGreen
        overflow-hidden
        group
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        focus-visible:ring-primaryGreen
        ${className}
      `}
    >
      {/* الخلفية اللي بتتملى من اليسار لليمين */}
      <span
        className="
          absolute inset-y-0 left-0
          w-0
          bg-primaryGreen
          group-hover:w-full
          transition-[width]
          duration-300
          ease-out
        "
        aria-hidden="true"
      />

      {/* محتوى الزرار (نص + سهم صغير) */}
      <span
        className="
          relative z-10 inline-flex items-center gap-2
          text-[11px] md:text-xs
          group-hover:text-white
          transition-colors
        "
      >
        <span>{label}</span>
        <span
          className="
            text-[12px]
            translate-x-0
            group-hover:translate-x-0.5
            transition-transform
          "
          aria-hidden="true"
        >
          →
        </span>
      </span>
    </a>
  );
};

export default BookConsultationButton;
