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
import BookConsultationButton from "@/common/components/buttons/book-consultation-button/BookConsultationButton";
import MainBtn from "@/common/components/buttons/MainBtn";
import AffiliationSlider from "@/features/home/components/about-affiliations/AffiliationSlider";
import { affiliations } from "@/features/home/components/about-affiliations/data";
import StatCard from "@/features/home/components/why-choose-us/StatsCard";

// ====== ثابت بسيط للأنيميشن (بدون union يخنق الـ TS) ======
const makeSectionMotion = (
  shouldReduceMotion: boolean
): { initial: TargetAndTransition; animate: TargetAndTransition } => {
  const base: TargetAndTransition = { opacity: 1, y: 0 };
  return {
    initial: shouldReduceMotion ? base : { opacity: 0, y: 24 },
    animate: base,
  };
};

const AboutPage: FC = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const heroRef = useRef<HTMLDivElement | null>(null);
  const heroInView = useInView(heroRef, {
    margin: "-120px 0px -120px 0px",
    once: true,
  });

  const { initial: heroInitial, animate: heroAnimate } = makeSectionMotion(
    shouldReduceMotion || false
  );

  const headingId = "about-doctor-heading";

  // ممكن بعدين تطلع الداتا دي من API:
  const specialties: string[] = [
    "About.specialties.cataract",
    "About.specialties.refractive",
    "About.specialties.corneal",
    "About.specialties.premiumLenses",
  ];

  const qualifications: string[] = [
    "About.qualifications.fellowship1",
    "About.qualifications.college",
    "About.qualifications.ms",
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

  return (
    <main
      aria-labelledby={headingId}
      className="
        bg-[var(--page-bg,var(--mm-bg,#F9FAFB))]
        text-[var(--text-main,#111827)]
      "
    >
      {/* ========== 1) HERO / OVERVIEW (ديزاين مختلف عن الهوم) ========== */}
      <motion.section
        ref={heroRef}
        initial={heroInitial}
        animate={heroInView ? heroAnimate : heroInitial}
        transition={{ duration: 0.5, ease: "easeOut" }}
        aria-label={t("About.heroAria", "About the surgeon")}
        className="
          bg-[var(--section-about-hero-bg,#F3F4F6)]
          border-b border-[var(--border-subtle,#E5E7EB)]
        "
      >
        <div className="containerr py-10 md:py-14 lg:py-16">
          <div
            className="
              grid gap-10 lg:gap-12
              lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]
              items-stretch
            "
          >
            {/* صورة الدكتور – على الشمال وداخل إطار مختلف عن الهوم */}
            <div className="relative flex items-stretch">
              <div
                className="
                  relative w-full max-w-md mx-auto
                  rounded-[2rem]
                  bg-[var(--card-bg,white)]
                  border border-[var(--card-border,#E5E7EB)]
                  shadow-[0_18px_45px_rgba(15,23,42,0.12)]
                  overflow-hidden
                "
              >
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-primaryGreen/5 via-softYellow/20 to-transparent
                    pointer-events-none
                  "
                  aria-hidden="true"
                />
                <img
                  src="/images/home-hero.webp"
                  alt={t(
                    "About.doctorAlt",
                    "Consultant ophthalmologist portrait"
                  )}
                  loading="lazy"
                  className="relative z-[1] w-full h-full max-h-[420px] object-cover"
                />
                {/* Badge فوق الصورة */}
                <div className="absolute top-4 left-4 z-[2]">
                  <span
                    className="
                      inline-flex items-center gap-1.5
                      rounded-full
                      bg-black/70 text-white
                      px-3 py-1
                      text-[11px] font-semibold tracking-[0.16em] uppercase
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-softYellow" />
                    {t("About.heroBadge", "Consultant Ophthalmologist")}
                  </span>
                </div>
                {/* شريط الاسم تحت الصورة */}
                <div className="absolute bottom-0 inset-x-0 z-[2] bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4">
                  <p className="text-sm md:text-base font-semibold text-white">
                    {t("About.doctorName", "Dr Ahmed Abazer")}
                  </p>
                  <p className="text-[11px] text-white/80">
                    {t(
                      "About.doctorTitle",
                      "Consultant cataract & refractive surgeon"
                    )}
                  </p>
                  <p className="mt-1 text-[10px] text-white/70 max-w-sm">
                    {t(
                      "About.doctorSubTitle",
                      "Special interest in complex cataracts, premium IOLs and visual quality."
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* نص & تفاصيل عامة */}
            <div className="flex flex-col gap-5 md:gap-6 lg:gap-7 justify-center">
              <SectionIntro title="About.tagline , About the clinic & surgeon" />
              <SectionTitle
                as="h1"
                id={headingId}
                text="About.title , Specialist cataract & vision correction care"
              />
              <SectionDescription description="About.subtitle , Combining surgical experience, advanced technology and personalised decision-making for every patient." />

              {/* quick facts كبادچات – مختلفة عن الهوم */}
              <dl
                className="
                  grid gap-2 sm:grid-cols-2
                  text-xs md:text-sm
                  text-[var(--text-muted,#4B5563)]
                "
              >
                <div>
                  <dt className="font-semibold text-[var(--text-main,#111827)]">
                    {t("About.quickFact.training", "Subspecialty training")}
                  </dt>
                  <dd>
                    {t(
                      "About.quickFact.trainingDesc",
                      "Fellowship-trained in cataract, refractive and corneal surgery."
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[var(--text-main,#111827)]">
                    {t("About.quickFact.focus", "Clinical focus")}
                  </dt>
                  <dd>
                    {t(
                      "About.quickFact.focusDesc",
                      "Premium lenses, visual quality and complex cataracts."
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[var(--text-main,#111827)]">
                    {t("About.quickFact.language", "Consultations")}
                  </dt>
                  <dd>
                    {t(
                      "About.quickFact.languageDesc",
                      "Patient-friendly explanations with visual tools and simulators."
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[var(--text-main,#111827)]">
                    {t("About.quickFact.care", "Approach to care")}
                  </dt>
                  <dd>
                    {t(
                      "About.quickFact.careDesc",
                      "Shared decision-making and personalised recommendations."
                    )}
                  </dd>
                </div>
              </dl>

              {/* CTA buttons */}
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
          </div>
        </div>
      </motion.section>

      {/* ========== 2) شريط إحصائيات أفقي مميز ========== */}
      <section
        aria-label={t("About.statsAria", "Experience statistics")}
        className="
          bg-[var(--stats-band-bg,#111827)]
          text-white
          border-b border-[var(--border-subtle,#0F172A)]
        "
      >
        <div className="containerr py-7 md:py-8 lg:py-9">
          <div
            className="
              grid gap-4
              sm:grid-cols-2
              xl:grid-cols-4
              auto-rows-fr
            "
          >
            {stats.map((item) => (
              <div key={item.labelKey} className="h-full">
                <StatCard
                  labelKey={item.labelKey}
                  defaultLabel={item.defaultLabel}
                  descriptionKey={item.descKey}
                  defaultDescription={item.defaultDesc}
                  suffix={item.suffix}
                  target={item.target}
                  trigger={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 3) Story & Training (timeline مودرن) ========== */}
      <AboutStoryAndTraining
        qualifications={qualifications}
        specialties={specialties}
      />

      {/* ========== 4) Affiliations & memberships (نفس الكومبوننت، سياق مختلف) ========== */}
      <AboutAffiliations />
    </main>
  );
};

export default AboutPage;

// =============== Sub-section: Story & Training ===============
type StoryTrainingProps = {
  qualifications: string[];
  specialties: string[];
};

const AboutStoryAndTraining: FC<StoryTrainingProps> = ({
  qualifications,
  specialties,
}) => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-80px 0px -80px 0px", once: true });
  const { initial, animate } = makeSectionMotion(shouldReduceMotion || false);

  return (
    <motion.section
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      transition={{ duration: 0.45, ease: "easeOut" }}
      aria-label={t("About.credentialsAria", "Qualifications and experience")}
      className="
        bg-[var(--section-about-bg,#F9FAFB)]
        border-b border-[var(--border-subtle,#E5E7EB)]
      "
    >
      <div className="containerr py-10 md:py-14 lg:py-16 space-y-10">
        {/* صفين: timeline + expertise */}
        <div
          className="
            grid gap-8 lg:gap-10
            lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]
            items-start
          "
        >
          {/* Timeline / Story */}
          <div className="space-y-5 md:space-y-6">
            <SectionIntro title="About.storyIntro , Training & career path" />
            <SectionTitle
              as="h2"
              text="About.storyTitle , A career focused on vision quality & patient trust"
            />

            <ol className="space-y-4 border-l border-primaryGreen/20 pl-4 md:pl-5">
              <li className="relative">
                <span
                  aria-hidden="true"
                  className="
                    absolute -left-2.5 top-1.5
                    h-3 w-3 rounded-full
                    bg-primaryGreen
                    ring-4 ring-primaryGreen/20
                  "
                />
                <p className="text-xs md:text-sm text-[var(--text-muted,#4B5563)]">
                  {t(
                    "About.timeline.step1",
                    "Early ophthalmology training with a strong foundation in cataract and corneal disease."
                  )}
                </p>
              </li>
              <li className="relative">
                <span
                  aria-hidden="true"
                  className="
                    absolute -left-2.5 top-1.5
                    h-3 w-3 rounded-full
                    bg-primaryGreen
                    ring-4 ring-primaryGreen/20
                  "
                />
                <p className="text-xs md:text-sm text-[var(--text-muted,#4B5563)]">
                  {t(
                    "About.timeline.step2",
                    "International fellowship focusing on refractive surgery, premium lenses and complex cataracts."
                  )}
                </p>
              </li>
              <li className="relative">
                <span
                  aria-hidden="true"
                  className="
                    absolute -left-2.5 top-1.5
                    h-3 w-3 rounded-full
                    bg-primaryGreen
                    ring-4 ring-primaryGreen/20
                  "
                />
                <p className="text-xs md:text-sm text-[var(--text-muted,#4B5563)]">
                  {t(
                    "About.timeline.step3",
                    "Ongoing involvement in teaching, audit and continuous professional development."
                  )}
                </p>
              </li>
            </ol>

            <div className="space-y-3">
              <SectionIntro title="About.qualificationsIntro , Key qualifications" />
              <ul className="space-y-2 text-xs md:text-sm text-[var(--text-muted,#4B5563)]">
                {qualifications.map((qKey) => (
                  <li key={qKey} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primaryGreen" />
                    <span>{t(qKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Clinical expertise badges */}
          <div className="space-y-5 md:space-y-6">
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
      </div>
    </motion.section>
  );
};

// =============== Sub-section: Affiliations Strip ===============
const AboutAffiliations: FC = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-80px 0px -80px 0px", once: true });
  const { initial, animate } = makeSectionMotion(shouldReduceMotion || false);

  return (
    <motion.section
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      transition={{ duration: 0.45, ease: "easeOut" }}
      aria-label={t("About.affiliationsAria", "Affiliations and memberships")}
      className="
        bg-[var(--mm-bg)]
        border-b border-softGray/70
      "
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

        {/* نفس الكومبوننت بتاع الهوم – بس واخد الرو كامل */}
        <AffiliationSlider items={affiliations} />
      </div>
    </motion.section>
  );
};
