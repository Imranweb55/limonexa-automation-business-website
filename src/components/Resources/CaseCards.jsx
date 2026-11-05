import Reveal from "../Home/sections/shared/Reveal";
import SectionHeading from "../Home/sections/shared/SectionHeading";
import ImagePlaceholder from "../Home/sections/shared/ImagePlaceholder";

function CaseCards({ tab }) {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 bg-bg-secondary border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading eyebrow="More stories" title="Different industries, same outcome." />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tab.cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <article className="group h-full bg-bg-primary/60 border border-white/10 hover:border-gold/40 transition-colors duration-500">
                <ImagePlaceholder
                  name={`res-case-${i + 1}`}
                  className="aspect-[3/2] border-0 border-b border-white/10"
                />
                <div className="p-7">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold">{c.industry}</p>
                  <h3 className="mt-3 font-serif text-[23px] leading-snug text-text-primary">{c.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-text-secondary">{c.text}</p>
                  <div className="mt-6 pt-5 border-t border-white/10 flex items-baseline gap-3">
                    <span className="font-serif text-[38px] leading-none text-gold-soft">{c.result}</span>
                    <span className="text-[12.5px] tracking-wide uppercase text-text-secondary">{c.resultLabel}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseCards;
