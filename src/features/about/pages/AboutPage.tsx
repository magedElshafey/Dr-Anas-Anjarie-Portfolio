// src/features/about/AboutPage.tsx
import { FC, useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type TargetAndTransition,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import SectionIntro from "@/common/components/sections/SectionIntro";
import SectionTitle from "@/common/components/sections/SectionTitle";
import SectionDescription from "@/common/components/sections/SectionDescription";
import SectionEnding from "@/common/components/sections/SectionEnding";
import AffiliationSlider from "@/features/home/components/about-affiliations/AffiliationSlider";
import { affiliations } from "@/features/home/components/about-affiliations/data";
import BookConsultationButton from "@/common/components/buttons/book-consultation-button/BookConsultationButton";
import StatCard from "@/features/home/components/why-choose-us/StatsCard";
import MainBtn from "@/common/components/buttons/MainBtn";

const AboutPage: FC = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const inView = useInView(sectionRef, {
    margin: "-120px 0px -120px 0px",
    once: true,
  });

  // ✅ ثابتين في الشكل علشان نمنع TS warnings بتاعت union
  const base: TargetAndTransition = { opacity: 1, y: 0 };
  const initial: TargetAndTransition = shouldReduceMotion
    ? base
    : { opacity: 0, y: 24 };
  const animate: TargetAndTransition = base;

  // 🧾 بيانات الطبيب (تقدر بعد كده تخليها جاية من API)
  const specialties: string[] = [
    "About.specialties.cataract", // "Cataract & lens surgery"
    "About.specialties.refractive", // "Laser & refractive surgery"
    "About.specialties.corneal", // "Corneal & anterior segment"
    "About.specialties.premiumLenses", // "Premium & toric IOLs"
  ];

  const qualifications: string[] = [
    "About.qualifications.fellowship1", // e.g. "International fellowship in cataract & refractive surgery"
    "About.qualifications.college", // e.g. "Member of the Royal College of Ophthalmologists"
    "About.qualifications.ms", // e.g. "MSc / MD in Ophthalmology"
  ];

  const stats = [
    {
      labelKey: "About.stats.years",
      defaultLabel: "Years of consultant experience",
      descKey: "About.stats.yearsDesc",
      defaultDesc:
        "Extensive experience managing complex cataract and refractive cases.",
      suffix: "+",
      target: 15,
    },
    {
      labelKey: "About.stats.procedures",
      defaultLabel: "Cataract & lens procedures",
      descKey: "About.stats.proceduresDesc",
      defaultDesc:
        "High-volume surgical practice using modern biometry and lens technology.",
      suffix: "k+",
      target: 8,
    },
    {
      labelKey: "About.stats.training",
      defaultLabel: "International fellowships & advanced training",
      descKey: "About.stats.trainingDesc",
      defaultDesc:
        "Ongoing training in advanced refractive, corneal and cataract techniques.",
      suffix: "",
      target: 3,
    },
    {
      labelKey: "About.stats.satisfaction",
      defaultLabel: "Patient satisfaction",
      descKey: "About.stats.satisfactionDesc",
      defaultDesc:
        "Patients report clearer vision, more confidence and better daily quality of life.",
      suffix: "%",
      target: 97,
    },
  ];

  const headingId = "about-doctor-heading";

  return (
    <main
      aria-labelledby={headingId}
      className="
        bg-[var(--page-bg,var(--mm-bg,#F9FAFB))]
        text-[var(--text-main,#111827)]
      "
    >
      {/* ================= HERO + BIO ================ */}
      <motion.section
        ref={sectionRef}
        initial={initial}
        animate={inView ? animate : initial}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
         
              bg-[var(--section-about-bg,#F9FAFB)]
          border-b border-[var(--border-subtle,#E5E7EB)]
        "
        aria-label={t("About.heroAria", "About the surgeon")}
      >
        <div className="containerr py-10 md:py-14 lg:py-16">
          <div
            className="
              grid gap-10 lg:gap-12
              lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]
              items-center
            "
          >
            {/* Text / bio */}
            <div className="space-y-4 md:space-y-5">
              <SectionIntro title="About.tagline , About the clinic & surgeon" />
              <SectionTitle
                as="h1"
                id={headingId}
                text="About.title , Specialist cataract & vision correction care"
              />
              <SectionDescription description="About.subtitle , Combining surgical experience, advanced technology and personalised decision-making for every patient." />

              <div className="space-y-2 text-xs md:text-sm text-[var(--text-muted,#4B5563)]">
                <p>
                  {t(
                    "About.bioParagraph1",
                    "Dr Ahmed Abazer is a consultant ophthalmologist with a subspecialty focus in cataract, refractive and corneal surgery. He has performed thousands of successful procedures using premium lenses and modern laser platforms."
                  )}
                </p>
                <p>
                  {t(
                    "About.bioParagraph2",
                    "His approach places patient education and shared decision-making at the centre of care, helping you understand your options and feel confident at every step of your journey."
                  )}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-1">
                <BookConsultationButton />
                <Link to="/pre-visit">
                  <MainBtn
                    theme="secondary"
                    variant="solid"
                    text="complete pre visit form"
                  />
                </Link>
              </div>

              <SectionEnding text="About.note , Outcomes vary between individuals. This information does not replace a full consultation and clinical examination." />
            </div>

            {/* Doctor card */}
            <div
              className="
                relative
                max-w-md mx-auto w-full
              "
            >
              <div
                className="
                  absolute -inset-3 rounded-3xl
                  bg-gradient-to-br
                  from-softYellow/40 via-transparent to-primaryGreen/20
                  pointer-events-none
                "
                aria-hidden="true"
              />
              <div
                className="
                  relative rounded-3xl
                  bg-[var(--card-bg,white)]
                  border border-[var(--card-border,#E5E7EB)]
                  shadow-xl overflow-hidden
                "
              >
                <img
                  src="/images/home-hero.webp"
                  alt={t(
                    "About.doctorAlt",
                    "Consultant ophthalmologist portrait"
                  )}
                  loading="lazy"
                  className="w-full h-full max-h-[380px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col gap-1">
                  <p className="text-xs md:text-sm font-semibold text-white">
                    {t("About.doctorName", "Dr Ahmed Abazer")}
                  </p>
                  <p className="text-[11px] text-white/80">
                    {t(
                      "About.doctorTitle",
                      "Consultant cataract & refractive surgeon"
                    )}
                  </p>
                  <p className="text-[10px] text-white/70 max-w-sm">
                    {t(
                      "About.doctorSubTitle",
                      "Special interest in complex cataracts, premium IOLs and visual quality."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= QUALIFICATIONS + STATS ================= */}
      <section
        className="
        border-b border-[var(--border-subtle,#E5E7EB)]
          bg-[var(--hero-bg,#F3F4F6)]
        "
        aria-label={t("About.credentialsAria", "Qualifications and experience")}
      >
        <div className="containerr py-10 md:py-14 lg:py-16 space-y-10">
          {/* Qualifications + specialties */}
          <div
            className="
              grid gap-8 lg:gap-10
              lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]
              items-start
            "
          >
            {/* Qualifications */}
            <div className="space-y-4 md:space-y-5">
              <SectionIntro title="About.qualificationsIntro , Qualifications & training" />
              <SectionTitle
                as="h2"
                text="About.qualificationsTitle , Training focused on vision quality"
              />
              <ul className="space-y-2 text-xs md:text-sm text-[var(--text-muted,#4B5563)]">
                {qualifications.map((qKey) => (
                  <li key={qKey} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primaryGreen" />
                    <span>{t(qKey)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialties */}
            <div className="space-y-4 md:space-y-5">
              <SectionIntro title="About.specialtiesIntro , Areas of expertise" />
              <SectionTitle
                as="h2"
                text="About.specialtiesTitle , Focused on cataract & refractive solutions"
              />
              <p className="text-xs md:text-sm text-[var(--text-muted,#4B5563)]">
                {t(
                  "About.specialtiesDesc",
                  "A tailored approach to visual correction, combining different techniques and lenses to match your needs."
                )}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {specialties.map((sKey) => (
                  <span
                    key={sKey}
                    className="
                      inline-flex items-center gap-1.5
                      rounded-full
                      bg-[var(--pill-bg,#ECFDF3)]
                      text-[var(--pill-text,#047857)]
                      border border-[var(--border-subtle,#BBF7D0)]
                      px-3 py-1
                      text-[11px] font-semibold tracking-[0.12em] uppercase
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primaryGreen" />
                    {t(sKey)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats grid – إعادة استخدام StatCard بتاع الهوم */}
          <section
            aria-label={t("About.statsAria", "Experience statistics")}
            className="
              grid gap-4
              sm:grid-cols-2
              xl:grid-cols-4
              auto-rows-fr
            "
          >
            {stats.map((item) => (
              <StatCard
                key={item.labelKey}
                labelKey={item.labelKey}
                defaultLabel={item.defaultLabel}
                descriptionKey={item.descKey}
                defaultDescription={item.defaultDesc}
                suffix={item.suffix}
                target={item.target}
                trigger={true}
              />
            ))}
          </section>
        </div>
      </section>

      {/* ================= AFFILIATIONS SLIDER (FULL ROW) ================= */}
      <section
        className="
        bg-[var(--mm-bg)]
        border-b border-softGray/70
      "
        aria-label={t("About.affiliationsAria", "Affiliations and memberships")}
      >
        <div className="containerr py-10 md:py-12 lg:py-14 space-y-6">
          <div className="max-w-3xl space-y-2 md:space-y-3">
            <SectionIntro title="About.affiliationsIntro , Affiliations & memberships" />
            <SectionTitle
              as="h2"
              text="About.affiliationsTitle , Recognised memberships & professional partners"
            />
            <SectionDescription description="About.affiliationsSubtitle , These affiliations reflect ongoing commitment to training, audit and high standards of clinical care." />
          </div>

          <AffiliationSlider items={affiliations} />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
