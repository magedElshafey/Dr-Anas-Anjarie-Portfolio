// import { useEffect, useRef, useState } from "react";
// import Navbar from "../navbar/Navbar";
// import type { NavbarType } from "@/types/navbar.types";
// const StickyNavbar: React.FC<NavbarType> = ({ logo, hotline }) => {
//   const navRef = useRef<HTMLDivElement | null>(null);
//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsSticky(!entry.isIntersecting);
//       },
//       { threshold: 0 }
//     );

//     if (navRef.current) {
//       observer.observe(navRef.current);
//     }

//     return () => {
//       if (navRef.current) {
//         observer.unobserve(navRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="hidden md:block">
//       <div className="z-50" ref={navRef}>
//         <Navbar logo={logo} hotline={hotline} />
//       </div>

//       <div
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
//           ${
//             isSticky
//               ? "translate-y-0 opacity-100 shadow-md"
//               : "-translate-y-full opacity-0"
//           }
//         `}
//       >
//         <Navbar logo={logo} hotline={hotline} />
//       </div>
//     </div>
//   );
// };

// export default StickyNavbar;
// src/layout/larg-screens/sticky-navbar/StickyNavbar.tsx
import { useEffect, useRef, useState } from "react";
import Navbar from "../navbar/Navbar";
import type { NavbarType } from "@/types/navbar.types";

const StickyNavbar: React.FC<NavbarType> = ({ logo = "", hotline = "" }) => {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px 0px 0px 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden lg:block">
      {/* الـ sentinel اللي فوق الناف بار الأصلي */}
      <div ref={sentinelRef} className="h-px w-full" aria-hidden="true" />

      {/* الناف بار في مكانه الطبيعي */}
      <Navbar logo={logo} hotline={hotline} />

      {/* الناف بار المثبت */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
          ${
            isSticky
              ? "translate-y-0 opacity-100 shadow-md"
              : "-translate-y-full opacity-0"
          }
        `}
        aria-hidden={!isSticky}
      >
        <Navbar logo={logo} hotline={hotline} />
      </div>
    </div>
  );
};

export default StickyNavbar;
