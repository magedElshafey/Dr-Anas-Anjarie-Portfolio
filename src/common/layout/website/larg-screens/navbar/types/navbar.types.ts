// src/config/navTypes.ts

export type NavItemConfig = {
  name: string;
  /** اختياري: لو سبته فاضي هنعمل slug من name */
  segment?: string;
  /** لو true يبقى نفس path الأب (مثلاً: All procedures) */
  isIndex?: boolean;
  /** للـ mega menu cards */
  shortDescription?: string;
  children?: NavItemConfig[];
};

export type NavItem = {
  name: string;
  path: string;
  shortDescription?: string;
  children?: NavItem[];
};
