import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import type { NavItem } from "./types/navbar.types";
import BookConsultationButton from "@/common/components/buttons/book-consultation-button/BookConsultationButton";
import Search from "./search/Search";
import LanguageDropdown from "../../common/lang-menu/LangMenu";
import Logo from "@/common/components/logo/Logo";
import WebsiteLinks from "./links/WebsiteLinks";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [openMega, setOpenMega] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleMainClick = (item: NavItem, e: React.MouseEvent) => {
    const hasChildren = !!item.children?.length;

    if (hasChildren) {
      e.preventDefault();
      setOpenMega((prev) => (prev === item.path ? null : item.path));
    } else {
      setOpenMega(null);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!navRef.current) return;
      const target = event.target as Node;
      if (!navRef.current.contains(target)) {
        setOpenMega(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // إغلاق الميجا مينيو عند تغيير الـ route (أي navigation)
  useEffect(() => {
    setOpenMega(null);
  }, [location.pathname]);

  return (
    <nav
      aria-label="Main navigation"
      className="w-full bg-warmCream border-b border-softGray"
    >
      <div ref={navRef} className="containerr">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo placeholder */}
          <Logo />
          {/* Desktop nav */}
          <WebsiteLinks
            handleMainClick={handleMainClick}
            openMega={openMega}
            setOpenMega={setOpenMega}
          />
          <div className="flex items-center gap-4">
            <BookConsultationButton />
            <Search />
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
