import { Outlet, useLocation } from "react-router-dom";
import useLocalizeDocumentAttributes from "../../hooks/useLocalizeDocumentAttributes";
import useGetWebsiteSettings from "@/features/settings/api/useGetWebsiteSettings";
import { useEffect } from "react";
import MaintenancePage from "@/features/app-status/pages/maintenance/MaintenancePage";
const RootLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useLocalizeDocumentAttributes();
  const { data } = useGetWebsiteSettings();
  if (data?.site_maintenance) return <MaintenancePage />;
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;
