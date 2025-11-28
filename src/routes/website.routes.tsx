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
      path: "faq",
      element: lazyLoad(() => import("../features/static-pages/pages/faq/Faq")),
      handle: {
        breadcrumb: "faq",
      },
    },
    {
      path: "static/:slug",
      element: lazyLoad(
        () => import("../features/static-pages/pages/static-pages/ShowPage")
      ),
      handle: {
        breadcrumb: "static page name",
        queryKey: [apiRoutes.static_page],
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
      path: "blogs",
      element: lazyLoad(
        () => import("../features/static-pages/pages/blogs/Blogs")
      ),
      handle: {
        breadcrumb: "blogs",
      },
    },
    {
      path: "blogs/:slugAndId",
      element: lazyLoad(
        () => import("../features/static-pages/pages/blog/Blog")
      ),
      handle: {
        breadcrumb: "blog name",
        queryKey: [apiRoutes.blogs],
      },
    },
  ],
};
