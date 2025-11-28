import { useTranslation } from "react-i18next";
import { navLinks } from "../data/data";
import MegaMenu from "../search/components/MegaMenu";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "../types/navbar.types";
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
  const { t } = useTranslation();
  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-xs  text-primaryDarkGreen font-semibold tracking-[0.16em]">
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
                      inline-flex items-center gap-1 py-1
                      border-b-2
                      ${
                        active
                          ? "border-primaryGreen text-primaryGreen"
                          : "border-transparent hover:border-softYellow hover:text-primaryGreen"
                      }
                      transition-colors
                    `}
              aria-haspopup={hasChildren ? "true" : undefined}
              aria-expanded={hasChildren ? isMegaOpen : undefined}
            >
              <span>{t(item.name)}</span>
              {hasChildren && (
                <span
                  className={`transition-transform ${
                    isMegaOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  ▾
                </span>
              )}
            </Link>

            {/* Mega menu */}
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
