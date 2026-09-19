import {
  Database,
  Unplug,
  Clock,
  EyeOff,
  Repeat,
  AlertTriangle,
  X,
} from "lucide-react";

const PROBLEMS = [
  {
    icon: Database,
    title: "Manual Data Entry",
    desc: "Repetitive data entry leads to errors and wasted time.",
  },
  {
    icon: Unplug,
    title: "Disconnected Systems",
    desc: "Tools don't talk to each other causing data silos.",
  },
  {
    icon: Clock,
    title: "Slow Follow-ups",
    desc: "Leads get missed, customers get frustrated.",
  },
  {
    icon: EyeOff,
    title: "No Real-time Insights",
    desc: "Decisions are made late with outdated information.",
  },
  {
    icon: Repeat,
    title: "Repetitive Tasks",
    desc: "Teams spend hours on tasks that could be automated.",
  },
  {
    icon: AlertTriangle,
    title: "Operational Chaos",
    desc: "Unorganized processes create confusion and delays.",
  },
];

function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative py-16 sm:py-20 px-5 sm:px-6 lg:px-8 border-t border-white/5"
    >
      <div className="max-w-[1600px] mx-auto">
        <span className="inline-block text-[13px] font-semibold tracking-[0.1em] text-brand-blue-pale uppercase mb-3">
          The Problem{" "}
          <span className="text-text-secondary">Businesses Face</span>
        </span>
        <h2 className="text-[28px] sm:text-[36px] font-bold text-text-primary max-w-2xl mb-4 leading-tight">
          Too Much Work. Too Many Tools. Too Many Things to Track.
        </h2>
        <p className="text-text-secondary text-[15.5px] sm:text-[16.5px] max-w-2xl mb-10">
          Manual processes slow your team down and cost your business time,
          money and growth.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {PROBLEMS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="relative bg-bg-secondary/60 border border-white/10 rounded-xl p-5 hover:border-brand-blue-pale/30 transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue/15 text-brand-blue-light">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </span>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500/90 text-white">
                  <X className="w-3 h-3" strokeWidth={3} />
                </span>
              </div>
              <h3 className="text-[15px] font-semibold text-text-primary mb-1.5">
                {title}
              </h3>
              <p className="text-[13px] leading-relaxed text-text-muted">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
