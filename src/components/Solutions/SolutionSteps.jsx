import Reveal from "../Home/sections/shared/Reveal";

function SolutionSteps({ tab }) {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 bg-bg-secondary border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px w-10 bg-gold/60" />
          <span className="text-[12px] font-semibold tracking-[0.22em] uppercase text-brand-blue-pale">
            How it works
          </span>
        </div>
        <ol className={`grid gap-px bg-white/10 border border-white/10 ${tab.steps.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"}`}>
          {tab.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} className="bg-bg-secondary">
              <li className="p-8 h-full">
                <span className="font-serif text-[44px] leading-none text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-serif text-[26px] text-text-primary">{s.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-text-secondary">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default SolutionSteps;
