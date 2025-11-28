import { useTranslation } from "react-i18next";
import { IconType } from "react-icons";
import { HiOutlineShieldCheck, HiOutlineCalculator } from "react-icons/hi2";
import { FaSortAlphaDown } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";
import QuickLinksCard from "./QuickLinksCard";
export type QuickLinks = {
  icon: IconType;
  title: string;
  path: string;
  bg: string;
  iconBg: string;
  ring: string;
  desc: string;
};

const Hero = () => {
  const { t } = useTranslation();
  const links: QuickLinks[] = [
    {
      icon: FaSortAlphaDown,
      title: "conditions a-z",
      path: "/a-z-conditions",
      bg: "bg-sky-50",
      ring: "hover:ring-sky-300",
      iconBg: "bg-sky-100 text-sky-700",
      desc: "Browse conditions alphabetically.",
    },
    {
      icon: HiOutlineShieldCheck,
      title: "symptoms checker",
      path: "/symptoms-checker",
      desc: "Find leaflets by symptom.",
      bg: "bg-teal-50",
      ring: "hover:ring-teal-300",
      iconBg: "bg-teal-100 text-teal-700",
    },
    {
      icon: HiOutlineCalculator,
      title: "medical calculators",
      path: "/medical-calculators",
      desc: "Evidence-based clinical tools.",
      bg: "bg-indigo-50",
      ring: "hover:ring-indigo-300",
      iconBg: "bg-indigo-100 text-indigo-700",
    },
    {
      icon: IoMdPaper,
      title: "leaflets library",
      path: "/leaflets",
      desc: "All patient information leaflets.",
      bg: "bg-amber-50",
      ring: "hover:ring-amber-300",
      iconBg: "bg-amber-100 text-amber-700",
    },
  ];
  return (
    <section className="py-4 flex items-center justify-center shadow-md">
      <div>
        <h1 className="font-bold text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center text-[#002A4A] mb-3">
          {t("trusted UK Patient information")}
        </h1>
        <p className="w-full text-[#4d4d4d] text-center mx-auto md:w-1/2 lg:w-[80%] leading-relaxed mb-8">
          {t(
            "clear , reliable leaflets and medical calculators based on NHS & NICE guidelines"
          )}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links?.map((item: QuickLinks, index: number) => (
            <QuickLinksCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
