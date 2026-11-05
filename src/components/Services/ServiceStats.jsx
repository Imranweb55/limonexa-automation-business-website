import { useInView } from "../Home/sections/shared/useInView";
import { useCountUp } from "../Home/sections/shared/useCountUp";

function Stat({ value, prefix = "", suffix, label, start }) {
  const n = useCountUp(value, start);
  return (
    <div className="px-6 py-10 text-center">
      <div className="font-serif text-[52px] sm:text-[64px] leading-none text-gold-soft">
        {prefix}
        {n}
        <span className="text-[0.5em] text-brand-blue-pale">{suffix}</span>
      </div>
      <p className="mt-4 text-[12.5px] tracking-[0.16em] uppercase text-text-secondary">{label}</p>
    </div>
  );
}

function ServiceStats({ tab }) {
  const [ref, inView] = useInView(0.3);
  return (
    <section className="theme-light bg-bg-primary px-5 sm:px-8 py-14 sm:py-20 border-t border-white/5">
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 border-y border-white/10 divide-x divide-white/10"
      >
        {tab.stats.map((s) => (
          <Stat key={s.label} {...s} start={inView} />
        ))}
      </div>
      <p className="mt-4 text-center text-[11.5px] text-text-muted">Sample figures — replace with your verified results.</p>
    </section>
  );
}

export default ServiceStats;
