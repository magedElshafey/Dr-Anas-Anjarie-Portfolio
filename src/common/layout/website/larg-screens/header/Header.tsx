import { Link } from "react-router-dom";

type TopBarLink = {
  label: string;
  href: string;
};

const links: TopBarLink[] = [
  { label: "Laser vision correction", href: "/laser-vision-correction" },
  { label: "Cataracts", href: "/cataracts" },
  { label: "Lens replacement surgery", href: "/lens-replacement-surgery" },
  { label: "Cosmetic & oculoplastic", href: "/cosmetic-oculoplastic" },
  { label: "Take a self test", href: "/self-tests" },
];

export default function TopBar() {
  return (
    <header
      className="hidden md:block w-full bg-primaryDarkGreen text-white"
      aria-label="Specialty shortcuts bar"
    >
      {/* الشريط الرفيع فوق – Accent بالـ yellow من الباليت */}
      <div className="h-1 w-full bg-softYellow" />

      {/* row الرئيسي */}
      <div className="flex h-9 lg:h-10">
        {/* الجزء الأبيض على الشمال (بيكمّل الديزاين) */}
        <div className="flex-1 bg-white" aria-hidden="true" />

        {/* شريط اللينكات بالقصّة المائلة */}
        <nav
          aria-label="Main eye-care shortcuts"
          className="
            flex items-center
            bg-primaryDarkGreen
            text-[10px] lg:text-[11px] font-semibold uppercase
            tracking-[0.22em]
            [clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%)]
          "
        >
          <ul className="flex items-center gap-4 lg:gap-6 px-4 lg:px-8">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  to={`/procedures/${item.href}`}
                  className="
                    inline-flex items-center gap-1 whitespace-nowrap
                    py-1.5
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-softYellowLight
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-primaryDarkGreen
                    duration-300 transition-colors
                   hover:text-softYellowLight
                  "
                >
                  {/* السهم للديكور فقط */}
                  <span aria-hidden="true" className="text-xs">
                    ›
                  </span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
