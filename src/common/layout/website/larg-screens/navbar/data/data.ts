// src/config/navConfig.ts
import { type NavItemConfig, type NavItem } from "../types/navbar.types";
import { buildNav } from "../utils/buildNav";
export const navConfig: NavItemConfig[] = [
  {
    name: "Home",
    isIndex: true,
  },
  {
    name: "About us",
  },
  {
    name: "Procedures",
    children: [
      {
        name: "Cosmetic & Oculoplastic",
        children: [
          {
            name: "Upper Blepharoplasty & Brow Rejuvenation",
          },
          {
            name: "Eye Bag Removal",
          },
          {
            name: "Lower Eyelid Correction",
          },
          {
            name: "Removal of Eye Cysts",
          },
          {
            name: "Ptosis Surgery",
          },
        ],
      },
      {
        name: "Corneal",
        children: [
          {
            name: "Corneal Collagen Crosslinking",
          },
          {
            name: "CAIRS Keranatural",
          },
          {
            name: "Endoart®",
          },
          {
            name: "Corneal Transplant",
          },
          {
            name: "DMEK Keratoplasty",
          },
          {
            name: "DSAEK Keratoplasty",
          },
          {
            name: "DALK Keratoplasty",
          },
          {
            name: "Pterygium",
          },
          {
            name: "Iris Implant Surgery",
          },
          {
            name: "Phototherapeutic Keratectomy",
          },
        ],
      },
      {
        name: "Glaucoma",
        children: [
          {
            name: "Minimally Invasive Glaucoma Surgery (MIGS)",
          },
          {
            name: "Trabeculectomy",
          },
          {
            name: "Filtration Surgery",
          },
          {
            name: "SLT Laser",
          },
          {
            name: "iStent",
          },
        ],
      },
      {
        name: "Retinal",
        children: [
          {
            name: "Vitrectomy",
          },
          {
            name: "Intravitreal Injections",
          },
        ],
      },
      {
        name: "Cataracts",
      },
      {
        name: "Lens Replacement Surgery",
      },
      {
        name: "Implantable Collamer Lens",
      },
      {
        name: "YAG Capsulotomy",
      },
    ],
  },
  {
    name: "vision simulator",
  },
  {
    name: "our services",
  },
  {
    name: "contact us",
  },
];
export const sidebarConfig: NavItemConfig[] = [
  {
    name: "Home",
    isIndex: true,
  },
  {
    name: "About us",
  },

  {
    name: "vision simulator",
  },

  {
    name: "contact us",
  },
];
export const navLinks: NavItem[] = buildNav(navConfig);
export const sidebarLinks: NavItem[] = buildNav(sidebarConfig);
