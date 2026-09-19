import {
  Database,
  Brain,
  Zap,
  Link2,
  PlayCircle,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const STEPS = [
  {
    icon: Database,
    title: "Capture",
    desc: "Collect data from multiple sources",
  },
  {
    icon: Brain,
    title: "Understand",
    desc: "AI understands and processes data",
  },
  {
    icon: Zap,
    title: "Automate",
    desc: "Trigger smart automations",
  },
  {
    icon: Link2,
    title: "Integrate",
    desc: "Connect all your systems",
  },
  {
    icon: PlayCircle,
    title: "Act",
    desc: "Take action across your business",
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    desc: "Continuously learn and improve",
  },
];

function SolutionSection() {
  return (
    <section
      id="solutions"
      className="relative py-16 sm:py-20 px-5 sm:px-6 lg:px-8 border-t border-white/5"
    >
      <div className="max-w-[1600px] mx-auto">
        <span className="inline-block text-[13px] font-semibold tracking-[0.1em] text-brand-blue-pale uppercase mb-3">
          Our AI Automation Solution
        </span>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div className="max-w-[420px]">
            <h2 className="text-[28px] sm:text-[34px] font-bold text-text-primary mb-4 leading-tight">
              AI-Powered Automation That Runs Your Business
            </h2>
            <p className="text-text-secondary text-[15.5px] sm:text-[16.5px] mb-7">
              Limonexa connects your tools, automates your workflows and helps
              your business run smarter, faster and better.
            </p>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center px-7 py-[13px] rounded-[9px] text-[14px] font-semibold tracking-wide bg-brand-blue hover:bg-brand-blue-hover text-white shadow-[0_8px_28px_rgba(7,100,192,0.35)] hover:-translate-y-0.5 transition-all duration-200"
            >
              EXPLORE SOLUTIONS
            </a>
          </div>

          <div className="flex-1 flex items-center flex-wrap justify-center lg:justify-end gap-x-2 gap-y-8">
            {STEPS.map(({ icon: Icon, title, desc }, idx) => (
              <div key={title} className="flex items-center">
                <div className="flex flex-col items-center text-center w-[120px]">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-bg-secondary border border-brand-blue-pale/20 text-brand-blue-light mb-3">
                    <Icon className="w-6 h-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="text-[14px] font-semibold text-text-primary mb-1">
                    {title}
                  </h3>
                  <p className="text-[12px] leading-snug text-text-muted">
                    {desc}
                  </p>
                </div>
                {idx < STEPS.length - 1 && (
                  <ArrowRight
                    className="hidden sm:block w-5 h-5 text-brand-blue-pale/40 mx-1 shrink-0"
                    strokeWidth={2}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;
