export type TechnologyPoint = {
  key: string;
  defaultText: string;
};

export type TechnologyItem = {
  id: number;
  labelKey: string;
  defaultLabel: string;
  titleKey: string;
  defaultTitle: string;
  points: TechnologyPoint[];
  badgeKey?: string;
  defaultBadge?: string;
};

export const technologyItems: TechnologyItem[] = [
  {
    id: 1,
    labelKey: "Technology.labelDiagnostics",
    defaultLabel: "Imaging",
    titleKey: "Technology.octTitle",
    defaultTitle: "High-resolution OCT retinal imaging",
    points: [
      {
        key: "Technology.octPoint1",
        defaultText:
          "Cross-section scans of the macula, retina and optic nerve to detect subtle changes early.",
      },
      {
        key: "Technology.octPoint2",
        defaultText:
          "Helps monitor macular degeneration, diabetic eye disease and glaucoma over time.",
      },
    ],
    badgeKey: "Technology.badgeNonContact",
    defaultBadge: "Painless, non-contact test",
  },
  {
    id: 2,
    labelKey: "Technology.labelBiometry",
    defaultLabel: "Biometry",
    titleKey: "Technology.biometryTitle",
    defaultTitle: "Modern biometry for lens power planning",
    points: [
      {
        key: "Technology.biometryPoint1",
        defaultText:
          "Measures the length and curvature of your eye to calculate the most suitable lens.",
      },
      {
        key: "Technology.biometryPoint2",
        defaultText:
          "Supports monofocal, multifocal and toric lenses tailored to your lifestyle.",
      },
    ],
    badgeKey: "Technology.badgePlanning",
    defaultBadge: "Personalised lens calculations",
  },
  {
    id: 3,
    labelKey: "Technology.labelTopography",
    defaultLabel: "Cornea",
    titleKey: "Technology.topographyTitle",
    defaultTitle: "Corneal topography & tomography",
    points: [
      {
        key: "Technology.topographyPoint1",
        defaultText:
          "Creates a detailed ‘map’ of your cornea to assess curvature, thickness and regularity.",
      },
      {
        key: "Technology.topographyPoint2",
        defaultText:
          "Essential for planning laser vision correction and toric lens implants.",
      },
    ],
  },
  {
    id: 4,
    labelKey: "Technology.labelSurgery",
    defaultLabel: "Surgery",
    titleKey: "Technology.microIncisionTitle",
    defaultTitle: "Micro-incision cataract & lens systems",
    points: [
      {
        key: "Technology.microIncisionPoint1",
        defaultText:
          "Small, self-sealing incisions designed to support faster recovery and visual stability.",
      },
      {
        key: "Technology.microIncisionPoint2",
        defaultText:
          "Advanced fluid control and lens delivery systems for safe, predictable procedures.",
      },
    ],
  },
];
