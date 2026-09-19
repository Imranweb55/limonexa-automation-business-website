import {
  Clock,
  DollarSign,
  Target,
  TrendingUp,
  LineChart,
  Smile,
} from "lucide-react";

const RESULTS = [
  { icon: Clock, value: "70%+", label: "Time Saved" },
  { icon: DollarSign, value: "60%+", label: "Cost Reduction" },
  { icon: Target, value: "90%+", label: "Process Accuracy" },
  { icon: TrendingUp, value: "3X", label: "Productivity" },
  { icon: LineChart, value: "2X+", label: "Revenue Growth" },
  { icon: Smile, value: "100%", label: "Client Satisfaction" },
];

function ResultsSection() {
  return (
    <section
      id="results"
      className="relative py-16 sm:py-20 px-5 sm:px-6 lg:px-8 border-t border-white/5"
    >
      <div className="max-w-[1600px] mx-auto text-center">
        <span className="inline-block text-[13px] font-semibold tracking-[0.1em] text-brand-blue-pale uppercase mb-3">
          Results That Matter
        </span>
        <h2 className="text-[28px] sm:text-[34px] font-bold text-text-primary mb-10 leading-tight">
          Automation That Drives Real Business Results
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {RESULTS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center bg-bg-secondary/60 border border-white/10 rounded-xl py-7 px-3 hover:border-brand-blue-pale/30 transition-colors duration-200"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-brand-blue/15 text-brand-blue-light mb-4">
                <Icon className="w-5 h-5" strokeWidth={2} />
              </span>
              <p className="text-[24px] font-bold text-text-primary mb-1">
                {value}
              </p>
              <p className="text-[13px] text-text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResultsSection;
