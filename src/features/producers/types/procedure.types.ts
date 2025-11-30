export type ProcedureSlug = string;

export type ProcedureTag = {
  id: string;
  label: string;
};

export type ProcedureQuickFact = {
  id: string;
  label: string;
  value: string;
};

export type ProcedureSection = {
  id: string;
  title: string;
  body: string;
};

export type ProcedureStep = {
  id: string;
  title: string;
  body: string;
};

export type ProcedureFaq = {
  id: string;
  question: string;
  answer: string;
};

export type ProcedureDoctor = {
  id: string;
  nameKey: string; // translation key
  titleKey: string;
  image: string;
};

export type ProcedureDetails = {
  slug: ProcedureSlug;
  categoryKey: string; // e.g. "Laser Vision Correction"
  titleKey: string;
  heroSubtitleKey: string;
  heroIntroKey: string;
  heroImage: string;
  heroImageAltKey: string;

  tags?: ProcedureTag[];

  quickFacts: ProcedureQuickFact[];
  eligibilitySections: ProcedureSection[];
  benefitsSections: ProcedureSection[];
  risksSections: ProcedureSection[];
  steps: ProcedureStep[];
  faqs: ProcedureFaq[];

  doctor?: ProcedureDoctor;
};
