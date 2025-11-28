import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

type TopBarLink = {
  label: string;
  path: string;
};

const links: TopBarLink[] = [
  {
    label: "Laser vision correction",
    path: "/procedures/laser-vision-correction",
  },
  { label: "Cataracts", path: "/procedures/cataracts" },
  {
    label: "Lens replacement surgery",
    path: "/procedures/lens-replacement-surgery",
  },
  {
    label: "Cosmetic & oculoplastic",
    path: "/procedures/cosmetic-oculoplastic",
  },
];

export default function TopBar() {
  const location = useLocation();
  const { t } = useTranslation();

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path);

  return (
    <header
      className="
        hidden lg:block w-full
        bg-[var(--topbar-bg)]
        text-[var(--topbar-text)]
      "
      aria-label="Specialty shortcuts bar"
    >
      {/* الشريط العلوي (accent) */}
      <div className="h-1 w-full bg-[var(--topbar-accent)]" />

      <div className="flex h-9 lg:h-10">
        {/* الجزء الأبيض/الخالي ناحية الشمال للديزاين */}
        <div className="flex-1 bg-white" aria-hidden="true" />

        <nav
          aria-label="Main eye-care shortcuts"
          className="
            flex items-center
            bg-[var(--topbar-bg)]
            text-[0.65rem] lg:text-[0.7rem]
            font-semibold uppercase
            [clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%)]
          "
          /* letter-spacing ديناميك: base + a11y-letter-spacing */
          style={{
            letterSpacing: "calc(0.22em + var(--a11y-letter-spacing) * 0.01em)",
          }}
        >
          <ul className="flex items-center gap-4 lg:gap-6 px-4 lg:px-8">
            {links.map((item) => {
              const active = isActive(item.path);

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`
                      inline-flex items-center gap-1 whitespace-nowrap py-1.5
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-softYellowLight
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-[var(--topbar-bg)]
                      duration-300 transition-colors
                      hover:text-softYellowLight
                      ${active ? "text-softYellowLight" : ""}
                    `}
                    aria-current={active ? "page" : undefined}
                  >
                    <span aria-hidden="true" className="text-xs">
                      ›
                    </span>
                    <span>{t(`Header.${item.label}`)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
