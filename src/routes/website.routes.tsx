import { lazyLoad } from "../utils/LazyLoad";
import type { RouteObject } from "react-router-dom";
import { apiRoutes } from "@/services/api-routes/apiRoutes";

export const websiteRoutes: RouteObject = {
  element: lazyLoad(() => import("../common/layout/website/WebsiteLayout")),
  children: [
    {
      index: true,
      element: lazyLoad(() => import("../features/home/pages/Home")),
    },

    {
      path: "about-us",
      element: lazyLoad(
        () => import("../features/static-pages/pages/about/About")
      ),
      handle: {
        breadcrumb: "About",
      },
    },

    {
      path: "procedures",
      element: lazyLoad(
        () => import("../features/producers/pages/ProceduersPage")
      ),
      handle: {
        breadcrumb: "procedures",
      },
    },
    {
      path: "contact-us",
      element: lazyLoad(
        () => import("../features/static-pages/pages/contact/Contact")
      ),

      handle: {
        breadcrumb: "contact",
      },
    },
    {
      path: "vision-simulator",
      element: lazyLoad(
        () => import("../features/vision-simulator/pages/VisionSimulator")
      ),

      handle: {
        breadcrumb: "vision simulator",
      },
    },

    {
      path: "procedures/:slug/:slug?",
      element: lazyLoad(
        () => import("../features/producers/pages/ProcedureDetailsPage")
      ),
      handle: {
        breadcrumb: "procedures name",
        queryKey: [apiRoutes.blogs],
      },
    },
  ],
};
