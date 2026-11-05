import SectionHeading from "./shared/SectionHeading";
import Reveal from "./shared/Reveal";
import { useInView } from "./shared/useInView";
import { useCountUp } from "./shared/useCountUp";

// Sample figures — replace with your real, verified results.
const STATS = [
  { value: 70, suffix: "%", label: "Less time on repetitive work", text: "Hours returned to your team every week." },
  { value: 60, suffix: "%", label: "Lower operating costs", text: "Fewer errors, less rework, leaner processes." },
  { value: 90, suffix: "%", label: "Process accuracy", text: "Data entered once and kept consistent." },
  { value: 3, suffix: "x", label: "Team productivity", text: "The same people, handling far more work." },
];

function Stat({ value, suffix, label, text, start }) {
  const n = useCountUp(value, start);
  return (
    <div className="group relative p-8 border border-white/10 bg-bg-primary/50 hover:border-gold/50 transition-colors duration-500">
      <span className="absolute top-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-700" />
      <div className="font-serif text-[68px] sm:text-[80px] leading-none text-gold-soft">
        {n}
        <span className="text-[0.55em] text-brand-blue-pale">{suffix}</span>
      </div>
      <p className="mt-5 text-[13px] tracking-[0.14em] uppercase text-text-primary">{label}</p>
      <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">{text}</p>
    </div>
  );
}

function ResultsNumbers() {
  const [ref, inView] = useInView(0.25);
  return (
    <section className="relative overflow-hidden px-5 sm:px-8 py-20 sm:py-28 bg-bg-secondary border-t border-white/5">
      <div aria-hidden="true" className="absolute -right-40 top-10 w-[500px] h-[500px] bg-gold/[0.06] blur-3xl rounded-full" />
      <div className="relative max-w-[1400px] mx-auto">
        <SectionHeading align="center" eyebrow="Results" title="Outcomes you can measure." />
        <div ref={ref} className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <Stat {...s} start={inView} />
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-[12px] text-text-muted">Sample figures — replace with your verified client results.</p>
      </div>
    </section>
  );
}

export default ResultsNumbers;
