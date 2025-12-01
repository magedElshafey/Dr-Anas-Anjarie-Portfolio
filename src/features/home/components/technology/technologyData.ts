// src/features/home/components/technology/technologyData.ts
export type TechnologyPoint = {
  key: string;
  defaultText: string;
};

export type TechnologyItem = {
  id: number;
  categoryKey: string;
  defaultCategory: string;
  titleKey: string;
  defaultTitle: string;
  points: TechnologyPoint[];
  noteKey?: string;
  defaultNote?: string;
};

export const technologyItems: TechnologyItem[] = [
  {
    id: 1,
    categoryKey: "Technology.category.diagnostics",
    defaultCategory: "Diagnostics",
    titleKey: "Technology.item1.title",
    defaultTitle: "High-resolution ocular imaging (OCT)",
    points: [
      {
        key: "Technology.item1.point1",
        defaultText:
          "Detailed scans of the retina, macula and optic nerve to detect subtle changes early.",
      },
      {
        key: "Technology.item1.point2",
        defaultText:
          "Helps monitor conditions such as macular degeneration, diabetic eye disease and glaucoma.",
      },
    ],
    noteKey: "Technology.item1.note",
    defaultNote: "Non-contact, painless imaging usually completed in minutes.",
  },
  {
    id: 2,
    categoryKey: "Technology.category.biometry",
    defaultCategory: "Biometry & lens planning",
    titleKey: "Technology.item2.title",
    defaultTitle: "Modern biometry for cataract & lens surgery",
    points: [
      {
        key: "Technology.item2.point1",
        defaultText:
          "Measures the length and shape of your eye to calculate the most suitable lens power.",
      },
      {
        key: "Technology.item2.point2",
        defaultText:
          "Supports monofocal, multifocal and toric lens choices tailored to your lifestyle.",
      },
    ],
    noteKey: "Technology.item2.note",
    defaultNote:
      "Accurate measurements are essential for sharp distance and near vision after surgery.",
  },
  {
    id: 3,
    categoryKey: "Technology.category.surgery",
    defaultCategory: "Surgical platforms",
    titleKey: "Technology.item3.title",
    defaultTitle: "Micro-incision cataract & lens surgery systems",
    points: [
      {
        key: "Technology.item3.point1",
        defaultText:
          "Small, self-sealing incisions designed to support quicker recovery and visual stability.",
      },
      {
        key: "Technology.item3.point2",
        defaultText:
          "Advanced fluid control and lens delivery systems to support safe, predictable procedures.",
      },
    ],
    noteKey: "Technology.item3.note",
    defaultNote:
      "Your surgeon will choose the platform best suited to your eyes and overall health.",
  },
  {
    id: 4,
    categoryKey: "Technology.category.cornea",
    defaultCategory: "Corneal assessment",
    titleKey: "Technology.item4.title",
    defaultTitle: "Corneal topography & tomography",
    points: [
      {
        key: "Technology.item4.point1",
        defaultText:
          "Creates a detailed map of the front of your eye, including curvature and thickness.",
      },
      {
        key: "Technology.item4.point2",
        defaultText:
          "Essential for planning laser vision correction and toric lens implants.",
      },
    ],
    noteKey: "Technology.item4.note",
    defaultNote:
      "Helps detect irregular astigmatism, keratoconus and other corneal conditions.",
  },
  {
    id: 5,
    categoryKey: "Technology.category.tearFilm",
    defaultCategory: "Tear film & surface",
    titleKey: "Technology.item5.title",
    defaultTitle: "Dry eye & ocular surface analysis",
    points: [
      {
        key: "Technology.item5.point1",
        defaultText:
          "Assesses tear quality and eyelid function, which can affect comfort and vision quality.",
      },
      {
        key: "Technology.item5.point2",
        defaultText:
          "Guides treatment for dry eye before and after eye surgery.",
      },
    ],
  },
  {
    id: 6,
    categoryKey: "Technology.category.safety",
    defaultCategory: "Safety & monitoring",
    titleKey: "Technology.item6.title",
    defaultTitle: "In-clinic imaging & monitoring",
    points: [
      {
        key: "Technology.item6.point1",
        defaultText:
          "On-site imaging allows your surgeon to review changes over time, not just on one visit.",
      },
      {
        key: "Technology.item6.point2",
        defaultText:
          "Supports personalised discussions about the right time for surgery or treatment.",
      },
    ],
  },
];
