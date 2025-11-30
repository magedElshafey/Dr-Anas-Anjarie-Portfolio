import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
interface HeroImageProps {
  image: string;
  title: string;
  description: string;
}
const HeroImage: React.FC<HeroImageProps> = ({ image, title, description }) => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const imageInitial = shouldReduceMotion
    ? { opacity: 1, scale: 1 }
    : { opacity: 0, scale: 0.96 };

  const imageAnimate = shouldReduceMotion
    ? { opacity: 1, scale: 1 }
    : { opacity: 1, scale: 1 };
  return (
    <motion.div
      initial={imageInitial}
      animate={imageAnimate}
      transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
      className="
              relative
              max-w-md mx-auto w-full
            "
    >
      <div
        className="
                absolute -inset-4 rounded-3xl bg-gradient-to-br
                from-softYellow/40 via-softYellow/0 to-primaryGreen/10
                pointer-events-none
              "
        aria-hidden="true"
      />

      <div className="relative rounded-3xl bg-white shadow-xl overflow-hidden border border-softGray/60">
        <img
          src={image}
          alt={t(title)}
          loading="lazy"
          className="w-full h-full max-h-[360px] object-cover"
        />

        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
          <p className="text-xs font-semibold text-white">{t(title)}</p>
          <p className="text-[11px] text-white/80">{t(description)}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(HeroImage);
