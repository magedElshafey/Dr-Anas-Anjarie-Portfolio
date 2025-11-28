import useGetWebsiteSettings from "@/features/settings/api/useGetWebsiteSettings";
import ScrollToTopButton from "./common/scroll-to-top/ScrollToTopButton";
import MobileNavbar from "./small-screens/mobile-navbar/MobileNavbar";
import MobileWidget from "./small-screens/mobile-widget/MobileWidget";
import StickyNavbar from "./larg-screens/sticky-navbar/StickyNavbar";
import Breadcrumb from "./common/breadcrumb/components/Breadcrumb";
import { Outlet } from "react-router-dom";
import NavbarSkeleton from "@/common/components/loader/skeltons/NavbarSkeleton";
import Header from "./larg-screens/header/Header";
import AccessibilityWidget from "@/common/accessibility-widget/AccessibilityWidget";

const WebsiteLayout = () => {
  const { data, isLoading } = useGetWebsiteSettings();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <ScrollToTopButton />
      <AccessibilityWidget />
      <div className="md:hidden">
        <MobileNavbar logo={data?.site_logo || "/images/logo.png"} />
      </div>
      <div className="md:hidden">
        <MobileWidget />
      </div>

      {isLoading ? (
        <NavbarSkeleton />
      ) : (
        <>
          <Header />

          <StickyNavbar logo="/images/logo.png" />
        </>
      )}

      <Breadcrumb />

      <main className="grow py-2 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default WebsiteLayout;
{
  /* {isLoading ? (
        <FooterSkeleton />
      ) : (
        <Footer
          site_logo={data?.site_logo || "/images/logo.png"}
          contact_phone={data?.contact_phone || ""}
          contact_email={data?.contact_email || ""}
          contact_address={data?.contact_address || ""}
          social_facebook={data?.social_facebook || null}
          social_twitter={data?.social_twitter || null}
          social_instagram={data?.social_instagram || null}
          site_description={
            (language === "ar"
              ? data?.site_description_ar
              : data?.site_description) || ""
          }
        />
      )} */
}
