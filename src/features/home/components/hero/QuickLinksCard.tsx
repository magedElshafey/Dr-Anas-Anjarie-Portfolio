import { Link } from "react-router-dom";
import type { QuickLinks } from "./Hero";

interface QuickLinksdataProps {
  data: QuickLinks;
}

const QuickLinksdata: React.FC<QuickLinksdataProps> = ({ data }) => {
  return (
    <Link
      to={data?.path}
      className={`
              group flex flex-col items-start rounded-2xl border border-slate-100
              px-4 py-4 text-left transition-all
              ${data.bg} ${data.ring}
              hover:-translate-y-1 hover:shadow-md hover:border-transparent
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
            `}
    >
      <span
        className={`
                mb-3 inline-flex items-center justify-center rounded-full p-2
                ${data.iconBg}
              `}
      >
        <data.icon />
      </span>

      <h3 className="text-sm font-semibold text-slate-900">{data.title}</h3>
      <p className="mt-1 text-xs text-slate-600 leading-snug">{data.desc}</p>
    </Link>
  );
};

export default QuickLinksdata;
