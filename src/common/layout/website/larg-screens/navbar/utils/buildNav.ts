// src/config/buildNav.ts
import { createSlug } from "@/utils/createSlug";
import { type NavItem, type NavItemConfig } from "../types/navbar.types";
export const buildNav = (
  config: NavItemConfig[],
  parentPath = ""
): NavItem[] => {
  return config.map((item) => {
    let path: string;

    if (item.isIndex) {
      // نفس مسار الأب
      path = parentPath || "/";
    } else if (item.segment && item.segment.startsWith("/")) {
      // path كامل (override)
      path = item.segment;
    } else {
      const segment = item.segment ?? createSlug(item.name);
      if (!parentPath || parentPath === "/") {
        path = `/${segment}`;
      } else {
        path = `${parentPath}/${segment}`;
      }
    }

    return {
      name: item.name,
      path,
      shortDescription: item.shortDescription,
      children: item.children ? buildNav(item.children, path) : undefined,
    };
  });
};
