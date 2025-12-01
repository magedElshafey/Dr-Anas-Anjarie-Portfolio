// src/features/home/components/faq/faqData.ts
import type { FaqItemType } from "./FaqItem";

export const faqItems: FaqItemType[] = [
  {
    id: 1,
    questionKey: "FAQ.q1",
    defaultQuestion: "Do I need a referral to see the eye clinic?",
    answerKey: "FAQ.a1",
    defaultAnswer:
      "In many cases you can book directly, but some insurers may require a referral letter. Our team can guide you when you contact us, based on your situation and insurance provider.",
  },
  {
    id: 2,
    questionKey: "FAQ.q2",
    defaultQuestion: "Is cataract or lens surgery painful?",
    answerKey: "FAQ.a2",
    defaultAnswer:
      "Most patients feel little to no pain. Anaesthetic eye drops are used to numb the surface of the eye and your surgeon will talk you through each step. Some mild pressure or light sensitivity afterwards is normal and usually settles quickly.",
  },
  {
    id: 3,
    questionKey: "FAQ.q3",
    defaultQuestion: "How long does it take to recover after surgery?",
    answerKey: "FAQ.a3",
    defaultAnswer:
      "Many people notice clearer vision within a few days, but your eye continues healing for several weeks. We will give you clear instructions about drops, driving, work and sport based on your eye health and the type of procedure.",
  },
  {
    id: 4,
    questionKey: "FAQ.q4",
    defaultQuestion:
      "Am I suitable for laser vision correction or lens surgery?",
    answerKey: "FAQ.a4",
    defaultAnswer:
      "Suitability depends on your age, prescription, corneal shape, eye health and lifestyle. A full assessment with scans and measurements is needed before recommending laser vision correction, lens replacement or another option.",
  },
  {
    id: 5,
    questionKey: "FAQ.q5",
    defaultQuestion: "What should I bring to my first appointment?",
    answerKey: "FAQ.a5",
    defaultAnswer:
      "Please bring your latest glasses, a list of medications, any previous eye reports and your insurance details if applicable. Using our pre-visit form can also help us review your medical history before you arrive.",
  },
];
