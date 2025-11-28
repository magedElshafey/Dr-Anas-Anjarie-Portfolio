import { useState, useEffect, useCallback } from "react";
// import Logo from "../../../../components/logo/Logo";
// import logo from "../../../../../assets/logo (1).png";
import SidebarIcon from "../sidebar/SidebarIcon";
import Sidebar from "../sidebar/Sidebar";
import type { NavbarType } from "@/types/navbar.types";
import Search from "../../larg-screens/navbar/search/Search";
import BookConsultationButton from "@/common/components/buttons/book-consultation-button/BookConsultationButton";
const MobileNavbar: React.FC<NavbarType> = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  // ✅ Stable callbacks
  const openSidebar = useCallback(() => setShowSidebar(true), []);
  const closeSidebar = useCallback(() => setShowSidebar(false), []);

  // ✅ Close sidebar if screen >= lg
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setShowSidebar(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const logoMemo = useMemo(() => <Logo logo={logo} />, [logo]);

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
