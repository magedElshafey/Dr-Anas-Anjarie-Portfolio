import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "@/common/components/loader/spinner/Loader";
import EmptyData from "@/common/components/empty-data/EmptyData";
import type { ProcedureListType } from "@/features/producers/types/ProcedureList.types";
import SidebarIntro from "../sidebar-intro/SidebarIntro";
import Backdrop from "../backdrop/Backdrop";
import ProcedureItem from "./ProducerItem";
import useGetAllProcedures from "@/features/producers/api/useGetAllProcedures";
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
