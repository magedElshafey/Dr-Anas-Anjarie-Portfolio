import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import IconBadge from "./components/common/IconBadge";
import { IoHomeOutline } from "react-icons/io5";
import { TbCategoryPlus } from "react-icons/tb";
const MobileWidget = () => {
  const navigate = useNavigate();
  const [showCategoriesSidebar, setShowCategoriesSidebar] = useState(false);

  // ✅ memoize handlers
  const openCategoriesSidebar = useCallback(
    () => setShowCategoriesSidebar(true),
    []
  );
  const closeCategoriesSidebar = useCallback(
    () => setShowCategoriesSidebar(false),
    []
  );

  const homeAction = useCallback(() => navigate("/"), [navigate]);

  // ✅ define icons config to avoid repetition
  const actions = useMemo(
    () => [
      { Icon: IoHomeOutline, title: "home", onClick: homeAction },
      {
        Icon: TbCategoryPlus,
        title: "categories",
        onClick: openCategoriesSidebar,
      },
    ],
    [homeAction, openCategoriesSidebar]
  );

  return (
    <>
      <nav
        className="fixed bottom-0 z-50 left-0 right-0 w-full bg-white shadow-2xl px-2 py-4"
        role="navigation"
        aria-label="Mobile bottom navigation"
      >
        <div className="containerr">
          <ul className="flex justify-between flex-nowrap text-nowrap items-center gap-3 overflow-x-auto">
            {actions.map(({ Icon, title, onClick }) => (
              <li key={title} className="relative">
                <IconBadge Icon={Icon} title={title} onClick={onClick} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MobileWidget;
