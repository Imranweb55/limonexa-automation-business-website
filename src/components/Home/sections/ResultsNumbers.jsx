import SectionHeading from "./shared/SectionHeading";
import { useInView } from "./shared/useInView";
import { useCountUp } from "./shared/useCountUp";

// Replace with your real, verified figures.
const STATS = [
  { value: 70, suffix: "%", label: "Less time on repetitive work" },
  { value: 60, suffix: "%", label: "Lower operating costs" },
  { value: 90, suffix: "%", label: "Process accuracy" },
  { value: 3, suffix: "x", label: "Team productivity" },
];

function Stat({ value, suffix, label, start }) {
  const n = useCountUp(value, start);
  return (
    <div className="px-6 py-8 text-center">
      <div className="font-serif text-[64px] sm:text-[78px] leading-none text-gold-soft">
        {n}
        <span className="text-brand-blue-pale">{suffix}</span>
      </div>
      <p className="mt-4 text-[13px] tracking-[0.14em] uppercase text-text-secondary">{label}</p>
    </div>
  );
}

function ResultsNumbers() {
  const [ref, inView] = useInView(0.3);
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 bg-bg-secondary border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading align="center" eyebrow="Results" title="Outcomes you can measure." />
        <div
          ref={ref}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 border-y border-white/10 divide-x divide-white/10"
        >
          {STATS.map((s) => (
            <Stat key={s.label} {...s} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResultsNumbers;
