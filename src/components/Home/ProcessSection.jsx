import { Search, PenTool, Cog, BarChart3, ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    desc: "We analyze your business and identify automation opportunities.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    desc: "We build a custom automation workflow tailored to your needs.",
  },
  {
    number: "03",
    icon: Cog,
    title: "Automate",
    desc: "We implement and integrate automation using AI & smart tools.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Optimize",
    desc: "We monitor, optimize and improve for maximum efficiency.",
  },
];

function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-16 sm:py-20 px-5 sm:px-6 lg:px-8 border-t border-white/5"
    >
      <div className="max-w-[1600px] mx-auto">
        <span className="inline-block text-[13px] font-semibold tracking-[0.1em] text-brand-blue-pale uppercase mb-3">
          How It Works
        </span>
        <h2 className="text-[28px] sm:text-[34px] font-bold text-text-primary mb-2 leading-tight">
          Our 4-Step Automation Process
        </h2>
        <p className="text-brand-blue-light text-[16px] sm:text-[18px] font-semibold mb-10">
          Simple. Smart. Effective.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map(({ number, icon: Icon, title, desc }, idx) => (
            <div key={number} className="relative flex items-stretch">
              <div className="flex-1 bg-bg-secondary/60 border border-white/10 rounded-xl p-6 hover:border-brand-blue-pale/30 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-brand-blue/15 text-brand-blue-light shrink-0">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </span>
                  <span className="text-[26px] font-bold text-white/10">
                    {number}
                  </span>
                </div>
                <h3 className="text-[16px] font-semibold text-text-primary mb-1.5">
                  {title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-text-muted">
                  {desc}
                </p>
              </div>
              {idx < STEPS.length - 1 && (
                <ArrowRight
                  className="hidden lg:block absolute top-1/2 -right-3.5 -translate-y-1/2 w-5 h-5 text-brand-blue-pale/50 z-10"
                  strokeWidth={2.5}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
