import Reveal from "../Home/sections/shared/Reveal";
import SectionHeading from "../Home/sections/shared/SectionHeading";

function ServiceFeatures({ tab }) {
  return (
    <section className="theme-light bg-bg-primary px-5 sm:px-8 py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading eyebrow="What you get" title={`Everything inside ${tab.label}.`} />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tab.features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={(i % 3) * 120}>
                <article className="group relative h-full p-8 bg-bg-secondary border border-white/10 hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,26,48,0.12)] transition-all duration-500">
                  <span className="absolute top-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-700" />
                  <span className="flex items-center justify-center w-12 h-12 border border-gold/50 text-gold">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 font-serif text-[25px] leading-tight text-text-primary">{f.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-text-secondary">{f.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceFeatures;
