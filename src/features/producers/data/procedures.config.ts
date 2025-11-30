// src/features/procedures/data/procedures.config.ts
import type { ProcedureDetails } from "../types/procedure.types";

export const proceduresConfig: ProcedureDetails[] = [
  {
    slug: "blended-vision",
    categoryKey: "Procedures.LaserVisionCorrection",
    titleKey: "Procedures.BlendedVision.title",
    heroSubtitleKey: "Procedures.BlendedVision.heroSubtitle",
    heroIntroKey: "Procedures.BlendedVision.heroIntro",
    heroImage: "/images/procedures/blended-vision-hero.webp",
    heroImageAltKey: "Procedures.BlendedVision.heroImageAlt",
    tags: [
      { id: "presbyopia", label: "Presbyopia" },
      { id: "laser", label: "Laser vision correction" },
    ],
    quickFacts: [
      {
        id: "suitability",
        label: "Procedures.quickFacts.suitability",
        value: "Procedures.BlendedVision.quickFacts.suitability",
      },
      {
        id: "recovery",
        label: "Procedures.quickFacts.recovery",
        value: "Procedures.BlendedVision.quickFacts.recovery",
      },
      {
        id: "anaesthesia",
        label: "Procedures.quickFacts.anaesthesia",
        value: "Procedures.BlendedVision.quickFacts.anaesthesia",
      },
      {
        id: "duration",
        label: "Procedures.quickFacts.duration",
        value: "Procedures.BlendedVision.quickFacts.duration",
      },
    ],
    eligibilitySections: [
      {
        id: "who-is-it-for",
        title: "Procedures.BlendedVision.eligibility.title",
        body: "Procedures.BlendedVision.eligibility.body",
      },
    ],
    benefitsSections: [
      {
        id: "benefits-1",
        title: "Procedures.BlendedVision.benefits.title",
        body: "Procedures.BlendedVision.benefits.body",
      },
    ],
    risksSections: [
      {
        id: "risks-1",
        title: "Procedures.BlendedVision.risks.title",
        body: "Procedures.BlendedVision.risks.body",
      },
    ],
    steps: [
      {
        id: "step-1",
        title: "Procedures.BlendedVision.steps.step1.title",
        body: "Procedures.BlendedVision.steps.step1.body",
      },
      {
        id: "step-2",
        title: "Procedures.BlendedVision.steps.step2.title",
        body: "Procedures.BlendedVision.steps.step2.body",
      },
      {
        id: "step-3",
        title: "Procedures.BlendedVision.steps.step3.title",
        body: "Procedures.BlendedVision.steps.step3.body",
      },
    ],
    faqs: [
      {
        id: "faq-1",
        question: "Procedures.BlendedVision.faq.q1",
        answer: "Procedures.BlendedVision.faq.a1",
      },
      {
        id: "faq-2",
        question: "Procedures.BlendedVision.faq.q2",
        answer: "Procedures.BlendedVision.faq.a2",
      },
    ],
    doctor: {
      id: "abazer",
      nameKey: "Doctors.Abazer.name",
      titleKey: "Doctors.Abazer.title",
      image: "/images/doctors/abazer.webp",
    },
  },
];

export const getProcedureBySlug = (slug: string) =>
  proceduresConfig.find((p) => p.slug === slug);
