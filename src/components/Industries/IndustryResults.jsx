import { useInView } from "../Home/sections/shared/useInView";
import { useCountUp } from "../Home/sections/shared/useCountUp";

function Result({ value, suffix, label, start }) {
  const n = useCountUp(value, start);
  return (
    <div className="px-6 py-10 text-center">
      <div className="font-serif text-[60px] sm:text-[72px] leading-none text-gold-soft">
        {n}
        <span className="text-brand-blue-pale">{suffix}</span>
      </div>
      <p className="mt-4 text-[13px] tracking-[0.14em] uppercase text-text-secondary">{label}</p>
    </div>
  );
}

// Sample figures — replace with your verified results.
function IndustryResults({ tab }) {
  const [ref, inView] = useInView(0.3);
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 bg-bg-secondary border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div
          ref={ref}
          className="grid sm:grid-cols-3 border-y border-white/10 divide-y sm:divide-y-0 sm:divide-x divide-white/10"
        >
          {tab.outcomes.map((o) => (
            <Result key={o.label} {...o} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustryResults;
