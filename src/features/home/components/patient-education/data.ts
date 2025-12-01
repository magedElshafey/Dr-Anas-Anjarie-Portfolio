// src/features/home/data/patientEducation.data.ts
export type SuccessStory = {
  id: string;
  name: string;
  age?: string;
  condition: string;
  procedure: string;
  quote: string;
  image: string;
  rating?: number; // 0 – 5
};

export type GuideArticle = {
  id: string;
  title: string;
  summary: string;
  category: string;
  readingTime?: string;
  href: string;
  image?: string; // 👈 اختياري – لو مش موجود هنعرض الكارت بدون صورة
};

export type EducationVideo = {
  id: string;
  title: string;
  duration?: string;
  thumb: string;
  href: string; // YouTube / internal route
  tag?: string; // e.g. “Animation”
};

export const successStories: SuccessStory[] = [
  {
    id: "teacher-multifocal",
    name: "Sarah, 52",
    condition: "Presbyopia & cataract",
    procedure: "Multifocal lens replacement",
    quote:
      "I can read, drive and work on my laptop all day without reaching for glasses.",
    image: "/images/teacher.webp",
    rating: 5,
  },
  {
    id: "driver-night-vision",
    name: "Ahmed, 61",
    condition: "Dense cataract",
    procedure: "Cataract surgery with toric lens",
    quote:
      "Night driving finally feels safe again. The glare and halos have almost disappeared.",
    image: "/images/teacher.webp",
    rating: 5,
  },
  {
    id: "designer-emv",
    name: "Mona, 45",
    condition: "Astigmatism & presbyopia",
    procedure: "EMV toric lens",
    quote:
      "As a designer, clarity and colour are everything. The result has been life-changing.",
    image: "/images/teacher.webp",
    rating: 4.5,
  },
];

export const guideArticles: GuideArticle[] = [
  {
    id: "choosing-lens",
    title: "Choosing the Right Lens Implant for Your Vision",
    summary:
      "Understand the difference between monofocal, toric and multifocal lenses, and which might suit your lifestyle.",
    category: "Lens options",
    readingTime: "5 min read",
    href: "/education/articles/choosing-lens-implant",
    image: "/images/cataract.webp", // 👈 لو شلتها الكارت هيشتغل عادي
  },
  {
    id: "cataract-journey",
    title: "Your Cataract Surgery Journey, Step by Step",
    summary:
      "From first assessment to follow-up, here’s what to expect at each stage of cataract surgery.",
    category: "Cataract surgery",
    readingTime: "6 min read",
    href: "/education/articles/cataract-journey",
  },
  {
    id: "eye-care-after",
    title: "Looking After Your Eyes After Surgery",
    summary:
      "Simple daily habits that support healing, comfort and long-term eye health after your procedure.",
    category: "Aftercare",
    readingTime: "4 min read",
    href: "/education/articles/post-op-care",
    image: "/images/cataract.webp", // 👈 لو شلتها الكارت هيشتغل عادي
  },
  {
    id: "choosing-lens",
    title: "Choosing the Right Lens Implant for Your Vision",
    summary:
      "Understand the difference between monofocal, toric and multifocal lenses, and which might suit your lifestyle.",
    category: "Lens options",
    readingTime: "5 min read",
    href: "/education/articles/choosing-lens-implant",
    image: "/images/cataract.webp", // 👈 لو شلتها الكارت هيشتغل عادي
  },
  {
    id: "cataract-journey",
    title: "Your Cataract Surgery Journey, Step by Step",
    summary:
      "From first assessment to follow-up, here’s what to expect at each stage of cataract surgery.",
    category: "Cataract surgery",
    readingTime: "6 min read",
    href: "/education/articles/cataract-journey",
  },
  {
    id: "eye-care-after",
    title: "Looking After Your Eyes After Surgery",
    summary:
      "Simple daily habits that support healing, comfort and long-term eye health after your procedure.",
    category: "Aftercare",
    readingTime: "4 min read",
    href: "/education/articles/post-op-care",
    image: "/images/cataract.webp", // 👈 لو شلتها الكارت هيشتغل عادي
  },
  {
    id: "choosing-lens",
    title: "Choosing the Right Lens Implant for Your Vision",
    summary:
      "Understand the difference between monofocal, toric and multifocal lenses, and which might suit your lifestyle.",
    category: "Lens options",
    readingTime: "5 min read",
    href: "/education/articles/choosing-lens-implant",
    image: "/images/cataract.webp", // 👈 لو شلتها الكارت هيشتغل عادي
  },
  {
    id: "cataract-journey",
    title: "Your Cataract Surgery Journey, Step by Step",
    summary:
      "From first assessment to follow-up, here’s what to expect at each stage of cataract surgery.",
    category: "Cataract surgery",
    readingTime: "6 min read",
    href: "/education/articles/cataract-journey",
  },
  {
    id: "eye-care-after",
    title: "Looking After Your Eyes After Surgery",
    summary:
      "Simple daily habits that support healing, comfort and long-term eye health after your procedure.",
    category: "Aftercare",
    readingTime: "4 min read",
    href: "/education/articles/post-op-care",
    image: "/images/cataract.webp", // 👈 لو شلتها الكارت هيشتغل عادي
  },
  {
    id: "choosing-lens",
    title: "Choosing the Right Lens Implant for Your Vision",
    summary:
      "Understand the difference between monofocal, toric and multifocal lenses, and which might suit your lifestyle.",
    category: "Lens options",
    readingTime: "5 min read",
    href: "/education/articles/choosing-lens-implant",
    image: "/images/cataract.webp", // 👈 لو شلتها الكارت هيشتغل عادي
  },
  {
    id: "cataract-journey",
    title: "Your Cataract Surgery Journey, Step by Step",
    summary:
      "From first assessment to follow-up, here’s what to expect at each stage of cataract surgery.",
    category: "Cataract surgery",
    readingTime: "6 min read",
    href: "/education/articles/cataract-journey",
  },
  {
    id: "eye-care-after",
    title: "Looking After Your Eyes After Surgery",
    summary:
      "Simple daily habits that support healing, comfort and long-term eye health after your procedure.",
    category: "Aftercare",
    readingTime: "4 min read",
    href: "/education/articles/post-op-care",
    image: "/images/cataract.webp", // 👈 لو شلتها الكارت هيشتغل عادي
  },
];

export const educationVideos: EducationVideo[] = [
  {
    id: "what-is-cataract",
    title: "What Is Cataract & How Is It Treated?",
    duration: "2:35",
    thumb: "/images/doctor.webp",
    href: "https://www.youtube.com/watch?v=xxxx",
    tag: "Animation",
  },
  {
    id: "day-of-surgery",
    title: "What Happens on the Day of Cataract Surgery?",
    duration: "3:10",
    thumb: "/images/doctor.webp",
    href: "https://www.youtube.com/watch?v=yyyy",
    tag: "Patient journey",
  },
  {
    id: "post-op-care",
    title: "Post-Op Eye Care Tips",
    duration: "1:50",
    thumb: "/images/doctor.webp",
    href: "https://www.youtube.com/watch?v=zzzz",
    tag: "Tips",
  },
  {
    id: "post-op-care",
    title: "Post-Op Eye Care Tips",
    duration: "1:50",
    thumb: "/images/doctor.webp",
    href: "https://www.youtube.com/watch?v=zzzz",
    tag: "Tips",
  },
];
