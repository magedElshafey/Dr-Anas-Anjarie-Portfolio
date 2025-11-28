import { useState, useEffect } from "react";

import type { NavbarType } from "@/types/navbar.types";
import BookConsultationButton from "@/common/components/buttons/book-consultation-button/BookConsultationButton";
const MobileNavbar: React.FC<NavbarType> = () => {
  const [fadeIn, setFadeIn] = useState(false);
  // ✅ Trigger fade-in once on mount
  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* ✅ Fixed Mobile Navbar */}
      <div
        className={`fixed top-0 left-0 w-full bg-warmCream border-b shadow-sm z-40 
        transition-all duration-700 ease-in-out 
        ${fadeIn ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
      >
        <div className="containerr py-3 flex-between">
          <h1 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-darkBlue uppercase font-extrabold">
            Logo
          </h1>

          <BookConsultationButton />
        </div>
      </div>

      {/* ✅ Spacer to prevent content shift */}
      <div className="h-[65px] md:hidden"></div>
    </>
  );
};

export default MobileNavbar;
