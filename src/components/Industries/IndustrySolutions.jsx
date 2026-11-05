import Reveal from "../Home/sections/shared/Reveal";
import SectionHeading from "../Home/sections/shared/SectionHeading";
import ImagePlaceholder from "../Home/sections/shared/ImagePlaceholder";

function IndustrySolutions({ tab }) {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 bg-bg-secondary border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading eyebrow="Our solutions" title={`Built for ${tab.label.toLowerCase()}.`} />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tab.solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <article className="group h-full bg-bg-primary/60 border border-white/10 hover:border-gold/40 transition-colors duration-500">
                <ImagePlaceholder
                  name={`ind-${tab.key}-${i + 1}`}
                  className="aspect-[3/2] border-0 border-b border-white/10"
                />
                <div className="p-7">
                  <h3 className="font-serif text-[24px] text-text-primary">{s.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-text-secondary">{s.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustrySolutions;
