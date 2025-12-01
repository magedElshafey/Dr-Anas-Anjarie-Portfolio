// src/features/home/components/about-affiliations/data.ts
export type Affiliation = {
  id: number;
  name: string;
  logo: string;
  alt: string;
  href?: string;
};

export const affiliations: Affiliation[] = [
  {
    id: 1,
    name: "Royal College of Ophthalmologists",
    logo: "/images/rc.png",
    alt: "Royal College of Ophthalmologists logo",
    href: "#",
  },
  {
    id: 2,
    name: "European Society of Cataract & Refractive Surgeons",
    logo: "/images/rce.png",
    alt: "ESCRS logo",
    href: "#",
  },
  {
    id: 3,
    name: "International Eye Hospital",
    logo: "/images/rcee.png",
    alt: "Partner eye hospital logo",
    href: "#",
  },
  {
    id: 4,
    name: "Medical University Affiliation",
    logo: "/images/rceee.png",
    alt: "University medical affiliation logo",
    href: "#",
  },
  {
    id: 4,
    name: "Medical University Affiliation",
    logo: "/images/rceeee.png",
    alt: "University medical affiliation logo",
    href: "#",
  },
];
