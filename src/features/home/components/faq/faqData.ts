export type FaqItemType = {
  id: number;
  questionKey: string;
  defaultQuestion: string;
  answerKey: string;
  defaultAnswer: string;
};

export const faqItems: FaqItemType[] = [
  {
    id: 1,
    questionKey: "FAQ.q1",
    defaultQuestion: "Will my vision be blurry after the assessment?",
    answerKey: "FAQ.a1",
    defaultAnswer:
      "Your pupils may be dilated for some appointments. This can blur your near vision and increase light sensitivity for a few hours. We recommend that you do not drive until your vision feels clear again.",
  },
  {
    id: 2,
    questionKey: "FAQ.q2",
    defaultQuestion: "How long does a typical clinic visit take?",
    answerKey: "FAQ.a2",
    defaultAnswer:
      "Please allow 60–90 minutes for most new patient visits. This gives time for scans, drops, measurements and an unhurried discussion with your ophthalmologist.",
  },
  {
    id: 3,
    questionKey: "FAQ.q3",
    defaultQuestion: "Can I choose between different lens options?",
    answerKey: "FAQ.a3",
    defaultAnswer:
      "Yes. Your surgeon will explain the pros and cons of monofocal, multifocal and toric lenses in the context of your eyes, work and lifestyle so that you can decide together.",
  },
  {
    id: 4,
    questionKey: "FAQ.q4",
    defaultQuestion: "What if I have other medical conditions?",
    answerKey: "FAQ.a4",
    defaultAnswer:
      "Many patients have diabetes, high blood pressure or other eye conditions. Your medical history and scans are carefully reviewed so that any procedure is tailored to your overall health.",
  },
  {
    id: 5,
    questionKey: "FAQ.q5",
    defaultQuestion: "What should I do if I have urgent symptoms?",
    answerKey: "FAQ.a5",
    defaultAnswer:
      "If you notice sudden loss of vision, flashes of light, a curtain over your sight or severe pain, seek urgent eye care immediately. Do not wait for a routine appointment.",
  },
];
