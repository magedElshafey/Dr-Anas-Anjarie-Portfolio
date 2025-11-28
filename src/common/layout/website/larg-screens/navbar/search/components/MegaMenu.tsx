import type { NavItem } from "../../types/navbar.types";
import { Link } from "react-router-dom";
type MegaMenuProps = {
  parent: NavItem;
  onClose: () => void;
};

const MegaMenu: React.FC<MegaMenuProps> = ({ parent, onClose }) => {
  const items = parent.children ?? [];

  return (
    <div
      className="
        absolute left-1/2 -translate-x-1/2
        mt-3 w-screen max-w-6xl
        rounded-2xl border border-softGray bg-white shadow-xl
        text-start
        z-30
      "
    >
      {/* Header row */}
      <div className="px-4 pt-4 pb-2 border-b border-softGray flex items-center justify-between">
        <div>
          <p className=" font-semibold text-primaryDarkGreen">{parent.name}</p>
          <p className="text-sm text-slate-500">
            Choose a procedure to learn more.
          </p>
        </div>
        <Link
          to={parent.path}
          onClick={onClose}
          className="text-sm font-medium text-primaryGreen hover:underline"
        >
          View {parent.name.toLowerCase()}
        </Link>
      </div>

      {/* Grid of children */}
      <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((child) => (
          <div
            key={child.path}
            onClick={onClose}
            className="
              group flex flex-col 
             px-3 py-3
              transition-colors
            "
          >
            <Link
              to={child.path}
              className="text-md pb-2 font-bold! border-b border-b-transparent text-primaryGreen w-fit duration-300 transition-all hover:border-b hover:border-b-softYellow"
            >
              {child.name}
            </Link>
            {child.shortDescription && (
              <span className="text-sm  font-normal! leading-snug">
                {child.shortDescription}
              </span>
            )}

            {/* sub-procedures chips */}
            {child.children && child.children.length > 0 && (
              <div className="mt-2 ">
                {child.children.map((sub) => (
                  <Link
                    to={sub?.path}
                    key={sub.path}
                    className="
                       rounded-full block mb-2
                      w-fit duration-300 hover:underline
                      text-xs !font-normal text-primaryGreen
                    "
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default MegaMenu;
