import { useTranslation } from "react-i18next";
import { navLinks } from "../data/data";
import MegaMenu from "../search/components/MegaMenu";
import { Link, useLocation } from "react-router-dom";
import type { NavItem } from "../types/navbar.types";

interface WebsiteLinksProps {
  handleMainClick: (item: NavItem, e: React.MouseEvent) => void;
  openMega: string | null;
  setOpenMega: React.Dispatch<React.SetStateAction<string | null>>;
}

const WebsiteLinks: React.FC<WebsiteLinksProps> = ({
  handleMainClick,
  openMega,
  setOpenMega,
}) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <ul
      className={`
        hidden md:flex
        flex-wrap items-center justify-center
        gap-x-4 gap-y-1
        lg:gap-x-6
        text-[0.7rem] lg:text-xs
        font-semibold
        text-primaryDarkGreen
        ${!isRTL ? "uppercase" : ""}
      `}
      style={{
        letterSpacing: "calc(0.12em + var(--a11y-letter-spacing) * 0.01em)",
      }}
    >
      {navLinks.map((item) => {
        const active = isActive(item.path);
        const hasChildren = !!item.children?.length;
        const isMegaOpen = openMega === item.path;

        return (
          <li key={item.path} className="relative">
            <Link
              to={item.path}
              onClick={(e) => handleMainClick(item, e)}
              className={`
                inline-flex items-center gap-1 py-1 border-b-2 transition-colors
                ${
                  active
                    ? "border-primaryGreen text-primaryGreen"
                    : "border-transparent hover:border-softYellow hover:text-primaryGreen"
                }
              `}
              aria-haspopup={hasChildren ? "true" : undefined}
              aria-expanded={hasChildren ? isMegaOpen : undefined}
            >
              <span>{t(`Navbar.${item?.name}`)}</span>
              {hasChildren && (
                <span
                  className={`transition-transform ${
                    isMegaOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  {isRTL ? "▴" : "▾"}
                </span>
              )}
            </Link>

            {hasChildren && isMegaOpen && (
              <MegaMenu parent={item} onClose={() => setOpenMega(null)} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default WebsiteLinks;
