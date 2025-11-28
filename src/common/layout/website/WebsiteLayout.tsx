import { Outlet } from "react-router-dom";
import useGetWebsiteSettings from "@/features/settings/api/useGetWebsiteSettings";
import ScrollToTopButton from "./common/scroll-to-top/ScrollToTopButton";
import MobileNavbar from "./small-screens/mobile-navbar/MobileNavbar";
import MobileWidget from "./small-screens/mobile-widget/MobileWidget";
import StickyNavbar from "./larg-screens/sticky-navbar/StickyNavbar";
import Breadcrumb from "./common/breadcrumb/components/Breadcrumb";
import NavbarSkeleton from "@/common/components/loader/skeltons/NavbarSkeleton";
import Header from "./larg-screens/header/Header";
import AccessibilityWidget from "@/common/accessibility-widget/AccessibilityWidget";
import Footer from "./common/footer/Footer";

const WebsiteLayout = () => {
  const { data, isLoading } = useGetWebsiteSettings();

  const logo = data?.site_logo || "/images/logo.png";

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden ">
      {/* common tools*/}
      <ScrollToTopButton />
      <AccessibilityWidget />

      {/* mobile layout */}
      <div className="lg:hidden">
        <MobileNavbar logo={logo} />
        <MobileWidget />
      </div>

      {/* website layout */}
      <header className="hidden md:block">
        {isLoading ? (
          <NavbarSkeleton />
        ) : (
          <>
            <Header />
            <StickyNavbar logo={logo} />
          </>
        )}
      </header>

      {/* breadcrumb + outlet */}
      <main className="grow flex flex-col">
        <Breadcrumb />
        <div className="py-5">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
