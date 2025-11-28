import type { NavItem } from "../../types/navbar.types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type MegaMenuProps = {
  parent: NavItem;
  onClose: () => void;
};

const MegaMenu: React.FC<MegaMenuProps> = ({ parent, onClose }) => {
  const items = parent.children ?? [];
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <div
      className={`
        absolute
        mt-3 w-screen max-w-2xl 2xl:max-w-4xl mx-auto
        rounded-2xl border border-[var(--mm-border)]
        bg-[var(--mm-surface)]
        shadow-[var(--mm-shadow)]
        z-30
        ${isRTL ? "right-0 text-right" : "left-0 text-left"}
      `}
      role="menu"
      aria-label={t(`Navbar.${parent.name}`)}
    >
      {/* Header row */}
      <div
        className="
          px-4 pt-4 pb-2
          border-b border-[var(--mm-border)]
          flex items-center justify-between gap-4
        "
      >
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[var(--mm-heading)]">
            {t(`Navbar.${parent.name}`)}
          </p>
          <p className="text-xs text-[var(--mm-muted)]">{t("MegaMenu.desc")}</p>
        </div>

        <Link
          to={parent.path}
          onClick={onClose}
          className="
            text-xs md:text-sm font-medium
            text-[var(--mm-link)]
            hover:text-[var(--mm-link-hover)]
            hover:underline
            whitespace-nowrap
            transition-colors
          "
        >
          {t("Global.View")} {t(`Navbar.${parent.name}`).toLowerCase()}
        </Link>
      </div>

      {/* Grid of children */}
      <div
        className="
          grid gap-3 p-4
          sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          max-h-[70vh] overflow-y-auto
        "
      >
        {items.map((child) => (
          <div
            key={child.path}
            className="
              group flex flex-col
              px-2 py-2
            "
          >
            {/* عنوان الـ child */}
            <Link
              to={child.path}
              onClick={onClose}
              role="menuitem"
              className="
                inline-flex w-fit
                text-sm font-semibold
                text-[var(--mm-link)]
                border-b border-transparent pb-1
                transition-colors
                hover:border-softYellow
              "
            >
              {t(`Navbar.${child.name}`)}
            </Link>

            {/* الوصف المختصر لو موجود */}
            {child.shortDescription && (
              <span className="mt-1 text-xs text-[var(--mm-text)] leading-snug">
                {child.shortDescription}
              </span>
            )}

            {/* sub-procedures chips */}
            {child.children && child.children.length > 0 && (
              <div className="mt-2 space-y-1">
                {child.children.map((sub) => (
                  <Link
                    key={sub.path}
                    to={sub.path}
                    onClick={onClose}
                    role="menuitem"
                    className="
                      inline-block
                      rounded-full
                      px-2 py-0.5
                      text-[0.7rem]
                      bg-[var(--mm-chip-bg)]
                      text-[var(--mm-chip-text)]
                      hover:underline
                      transition-colors
                    "
                  >
                    {t(`Navbar.${sub.name}`)}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
