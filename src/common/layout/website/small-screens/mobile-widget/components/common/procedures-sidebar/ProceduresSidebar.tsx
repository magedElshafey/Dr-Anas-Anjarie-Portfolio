// import { memo, useState, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { IoIosArrowBack } from "react-icons/io";
// import Loader from "@/common/components/loader/spinner/Loader";
// import EmptyData from "@/common/components/empty-data/EmptyData";
// import useGetAllProcedures from "@/features/procedures/api/useGetAllProcedures";
// import type { ProcedureListType } from "@/features/procedures/types/ProcedureList.types";
// import SidebarIntro from "../sidebar-intro/SidebarIntro";
// import Backdrop from "../backdrop/Backdrop";
// interface CategoriesSidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// interface ProcedureItemProps {
//   category: ProcedureListType;
//   level?: number;
//   dir: "ltr" | "rtl";
//   onNavigate: (id: number) => void;
// }

// const ProcedureItem = memo(
//   ({ category, level = 0, dir, onNavigate }: ProcedureItemProps) => {
//     const [open, setOpen] = useState(false);

//     const hasChildren =
//       Array.isArray(category.children) && category.children.length > 0;

//     const toggleOpen = useCallback(() => {
//       setOpen((prev) => !prev);
//     }, []);

//     const handleClick = useCallback(() => {
//       onNavigate(category.id);
//     }, [category.id, onNavigate]);

//     return (
//       <li className="py-2 border-b last:border-b-0 mx-2" role="none">
//         <div className="flex justify-between items-center">
//           <button
//             onClick={handleClick}
//             className="flex gap-2 items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
//             role="menuitem"
//           >
//             <span style={{ paddingLeft: level * 12 }}>{category.name}</span>
//           </button>

//           {hasChildren && (
//             <button
//               onClick={toggleOpen}
//               aria-expanded={open}
//               aria-label={`Toggle ${category.name}`}
//               className="p-1 border bg-white rounded-md shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
//             >
//               <IoIosArrowBack
//                 size={18}
//                 className={`transition-transform duration-300 ${
//                   dir === "rtl" ? "" : "rotate-180"
//                 } ${open ? "rotate-90" : ""}`}
//               />
//             </button>
//           )}
//         </div>

//         {hasChildren && (
//           <ul
//             className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
//               open ? "max-h-96" : "max-h-0"
//             }`}
//             role="menu"
//           >
//             {category.children!.map((child) => (
//               <ProcedureItem
//                 key={child.id}
//                 category={child}
//                 level={level + 1}
//                 dir={dir}
//                 onNavigate={onNavigate}
//               />
//             ))}
//           </ul>
//         )}
//       </li>
//     );
//   }
// );
// ProcedureItem.displayName = "CategoryItem";

// const ProcedureSidebar = memo(({ isOpen, onClose }: CategoriesSidebarProps) => {
//   const { i18n, t } = useTranslation();
//   const dir = i18n.dir();
//   const navigate = useNavigate();
//   const { isLoading, data } = useGetAllProcedures();

//   const handleNavigate = useCallback(
//     (id: number) => {
//       navigate(`/products?filter-category=${id}`);
//       onClose();
//     },
//     [navigate, onClose]
//   );

//   return (
//     <>
//       <Backdrop
//         isOpen={isOpen}
//         onClick={onClose}
//         aria="close procedures navigation"
//       />
//       <aside
//         className={`fixed top-0 right-0 h-screen overflow-y-auto w-[85%] bg-white shadow-md border z-40 transform transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//         aria-hidden={!isOpen}
//         aria-label="procedures navigation"
//       >
//         <SidebarIntro onClose={onClose} height="h-24">
//           <div className="flex-center">
//             <p className="text-white text-xl font-bold">
//               {t("Navbar.Procedures")}
//             </p>
//           </div>
//         </SidebarIntro>

//         <ul role="menu" className="mt-2" aria-label="categories list">
//           {isLoading ? (
//             <div className="flex-center my-4">
//               <Loader />
//             </div>
//           ) : data?.length ? (
//             data.map((cat) => (
//               <ProcedureItem
//                 key={cat.id}
//                 category={cat}
//                 dir={dir}
//                 onNavigate={handleNavigate}
//               />
//             ))
//           ) : (
//             <EmptyData />
//           )}
//         </ul>
//       </aside>
//     </>
//   );
// });
// ProcedureSidebar.displayName = "ProcedureSidebar";

// export default ProcedureSidebar;
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "@/common/components/loader/spinner/Loader";
import EmptyData from "@/common/components/empty-data/EmptyData";
import useGetAllProcedures from "@/features/procedures/api/useGetAllProcedures";
import type { ProcedureListType } from "@/features/procedures/types/ProcedureList.types";
import SidebarIntro from "../sidebar-intro/SidebarIntro";
import Backdrop from "../backdrop/Backdrop";
import ProcedureItem from "./ProducerItem";
interface CategoriesSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProcedureSidebar = memo(({ isOpen, onClose }: CategoriesSidebarProps) => {
  const { i18n, t } = useTranslation();
  const dir = i18n.dir() as "ltr" | "rtl";
  const navigate = useNavigate();
  const { isLoading, data } = useGetAllProcedures();

  const handleNavigate = useCallback(
    (id: number) => {
      navigate(`/products?filter-category=${id}`);
      onClose();
    },
    [navigate, onClose]
  );

  const titleId = "procedures-sidebar-title";

  return (
    <>
      <Backdrop
        isOpen={isOpen}
        onClick={onClose}
        aria="close procedures navigation"
      />

      <aside
        className={`
          fixed top-0
          ${dir === "rtl" ? "left-0" : "right-0"}
          h-screen w-[85%]
          bg-[var(--sidebar-bg)]
          text-[var(--sidebar-text)]
          border border-[var(--sidebar-border)]
          shadow-[var(--sidebar-shadow)]
          z-40
          overflow-y-auto
          transform transition-transform duration-300
          ${
            isOpen
              ? "translate-x-0"
              : dir === "rtl"
              ? "-translate-x-full"
              : "translate-x-full"
          }
        `}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        aria-labelledby={titleId}
      >
        <SidebarIntro onClose={onClose} height="h-24">
          <div className="flex-center">
            <p
              id={titleId}
              className="text-[var(--sidebar-header-text)] text-lg font-bold"
            >
              {t("Navbar.Procedures")}
            </p>
          </div>
        </SidebarIntro>

        <nav aria-label={t("Navbar.Procedures") ?? "Procedures"}>
          <ul role="menu" className="mt-2" aria-label="procedures list">
            {isLoading ? (
              <div className="flex-center my-4">
                <Loader />
              </div>
            ) : data?.length ? (
              data.map((cat: ProcedureListType) => (
                <ProcedureItem
                  key={cat.id}
                  category={cat}
                  dir={dir}
                  onNavigate={handleNavigate}
                />
              ))
            ) : (
              <EmptyData />
            )}
          </ul>
        </nav>
      </aside>
    </>
  );
});

ProcedureSidebar.displayName = "ProcedureSidebar";

export default ProcedureSidebar;
