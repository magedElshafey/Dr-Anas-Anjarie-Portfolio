import { LuHeartPulse, LuActivity, LuWind } from "react-icons/lu";

const featuredLeaflets = [
  {
    tag: "Condition • Heart & blood pressure",
    title: "Understanding high blood pressure",
    description:
      "What it is, common symptoms, and how lifestyle and treatment can help reduce your risk.",
    href: "/leaflets/high-blood-pressure",
    icon: <LuHeartPulse className="w-5 h-5" />,
    accent: "from-sky-500 via-cyan-500 to-emerald-400",
    chipColor: "bg-sky-50 text-sky-800",
  },
  {
    tag: "Condition • Diabetes",
    title: "Living with type 2 diabetes",
    description:
      "Simple guidance on diet, activity, medication, and when to contact your healthcare team.",
    href: "/leaflets/type-2-diabetes",
    icon: <LuActivity className="w-5 h-5" />,
    accent: "from-amber-500 via-orange-500 to-rose-400",
    chipColor: "bg-amber-50 text-amber-800",
  },
  {
    tag: "Condition • Breathing",
    title: "Managing asthma in adults",
    description:
      "How to use your inhalers correctly, avoid triggers, and recognise when symptoms are worsening.",
    href: "/leaflets/asthma-adults",
    icon: <LuWind className="w-5 h-5" />,
    accent: "from-indigo-500 via-violet-500 to-fuchsia-400",
    chipColor: "bg-indigo-50 text-indigo-800",
  },
];

export default function FeaturedLeafletsSection() {
  return (
    <section className="mt-12 lg:mt-16">
      <div className="max-w-6xl px-4 mx-auto">
        {/* Title + subtitle */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Featured leaflets
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Clear, patient-friendly information for some of the most common
            health conditions seen in everyday practice.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredLeaflets.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white/90
                         shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* gradient strip */}
              <div className={`h-1 w-full bg-gradient-to-r ${item.accent}`} />

              <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
                {/* icon + tag */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="inline-flex items-center justify-center rounded-full bg-slate-900/5 p-2 text-slate-700">
                    {item.icon}
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium ${item.chipColor}`}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-snug flex-1">
                  {item.description}
                </p>

                {/* Meta + CTA */}
                <div className="mt-3 flex items-center justify-between text-[11px] sm:text-xs">
                  <span className="text-slate-500">
                    For patients • 3 min read
                  </span>
                  <span className="inline-flex items-center font-medium text-sky-700 group-hover:text-sky-900">
                    Read leaflet
                    <span className="ml-1 translate-y-[0.5px] group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
