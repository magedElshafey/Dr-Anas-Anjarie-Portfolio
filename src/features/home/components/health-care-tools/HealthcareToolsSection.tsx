import {
  LuActivity,
  LuHeartPulse,
  LuDroplets,
  LuCalendarClock,
} from "react-icons/lu";
import { HiOutlineArrowRight } from "react-icons/hi";

type Tool = {
  name: string;
  slug: string;
  summary: string;
  tag: string;
  kind: "calculator" | "tracker" | "tool";
  icon: React.ReactNode;
  iconBg: string;
};

const tools: Tool[] = [
  {
    name: "BMI calculator",
    slug: "/medical-calculators/bmi",
    summary: "Check adult BMI from height and weight in seconds.",
    tag: "General • Adults",
    kind: "calculator",
    icon: <LuActivity className="w-5 h-5" />,
    iconBg: "bg-sky-100 text-sky-700",
  },
  {
    name: "Blood pressure tracker",
    slug: "/tools/blood-pressure-tracker",
    summary: "Record and review home blood pressure readings.",
    tag: "Heart & circulation",
    kind: "tracker",
    icon: <LuHeartPulse className="w-5 h-5" />,
    iconBg: "bg-rose-100 text-rose-700",
  },
  {
    name: "Kidney function (eGFR)",
    slug: "/medical-calculators/egfr",
    summary: "Estimate kidney function from creatinine and age.",
    tag: "Kidneys & blood tests",
    kind: "calculator",
    icon: <LuDroplets className="w-5 h-5" />,
    iconBg: "bg-indigo-100 text-indigo-700",
  },
  {
    name: "Pregnancy due date",
    slug: "/tools/pregnancy-due-date",
    summary: "Estimate due date and current stage of pregnancy.",
    tag: "Pregnancy",
    kind: "tool",
    icon: <LuCalendarClock className="w-5 h-5" />,
    iconBg: "bg-emerald-100 text-emerald-700",
  },
];

export default function HealthcareToolsSection() {
  return (
    <section className="mt-12 lg:mt-16 bg-slate-50/80">
      <div className="max-w-6xl px-4 py-8 mx-auto lg:py-10">
        {/* Header row */}
        <div className="mb-6 lg:mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Healthcare tools, trackers & calculators
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600 max-w-xl">
              Practical tools to support everyday clinical work and patient
              self-management, from quick calculators to simple trackers.
            </p>
          </div>

          <a
            href="/medical-calculators"
            className="inline-flex items-center justify-center gap-1 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-800 shadow-sm hover:border-sky-300 hover:text-sky-900 hover:shadow-md transition-all"
          >
            View all tools
            <HiOutlineArrowRight className="w-4 h-4 translate-y-[0.5px]" />
          </a>
        </div>

        {/* Tools list-style grid */}
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
          {tools.map((tool) => (
            <a
              key={tool.slug}
              href={tool.slug}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white/90 px-4 py-4 sm:px-5 sm:py-5
                         shadow-sm transition-all duration-200 hover:-translate-y-[3px] hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                {/* Icon block */}
                <span
                  className={`inline-flex items-center justify-center rounded-xl p-2.5 ${tool.iconBg}`}
                >
                  {tool.icon}
                </span>

                {/* Text block */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700">
                      {tool.tag}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-500">
                      {tool.kind === "calculator"
                        ? "Calculator"
                        : tool.kind === "tracker"
                        ? "Tracker"
                        : "Tool"}
                    </span>
                  </div>

                  <h3 className="mt-2 text-sm sm:text-base font-semibold text-slate-900">
                    {tool.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-snug">
                    {tool.summary}
                  </p>
                </div>
              </div>

              {/* Bottom row */}
              <div className="mt-3 flex items-center justify-between text-[11px] sm:text-xs">
                <span className="text-slate-500">
                  Opens in a dedicated tools page
                </span>
                <span className="inline-flex items-center gap-1 font-medium text-sky-700 group-hover:text-sky-900">
                  Open tool
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-50 group-hover:bg-sky-100 transition-colors">
                    <HiOutlineArrowRight className="w-3.5 h-3.5 translate-y-[0.5px]" />
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
