// src/common/components/sections/SectionDetails.tsx
import { useTranslation } from "react-i18next";

interface SectionDetailsProps {
  childrenClassName?: string;
  bullets?: string;
  item: {
    text: string;
  };
}

const SectionDetails: React.FC<SectionDetailsProps> = ({
  childrenClassName = "",
  bullets = "•",
  item,
}) => {
  const { t } = useTranslation();

  return (
    <li
      className={`
        flex items-start gap-2
        text-xs md:text-sm
        text-[color:var(--section-body-color)]
        ${childrenClassName}
      `}
    >
      <span
        className="
          mt-[3px] text-[color:var(--section-bullet-color)]
        "
        aria-hidden="true"
      >
        {bullets}
      </span>
      <span>{t(item.text)}</span>
    </li>
  );
};

export default SectionDetails;
