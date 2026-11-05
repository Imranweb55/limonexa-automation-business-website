import Reveal from "../Home/sections/shared/Reveal";
import SectionHeading from "../Home/sections/shared/SectionHeading";
import { useInView } from "../Home/sections/shared/useInView";

function ServiceProcess({ tab }) {
  const [ref, inView] = useInView(0.3);
  return (
    <section className="bg-bg-secondary px-5 sm:px-8 py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading eyebrow="How it works" title="From first call to live system." />
        <div ref={ref} className="relative mt-16">
          <div className="hidden lg:block absolute top-7 left-[6%] right-[6%] h-px bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-gold/80 to-brand-blue-light/80 origin-left transition-transform duration-[2200ms] ease-out motion-reduce:transition-none"
              style={{ transform: inView ? "scaleX(1)" : "scaleX(0)" }}
            />
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {tab.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 200}>
                <li className="relative">
                  <div className="relative z-10 w-14 h-14 rounded-full bg-bg-primary border border-gold/50 flex items-center justify-center font-serif text-[22px] text-gold-soft">
                    {i + 1}
                  </div>
                  <h3 className="mt-6 font-serif text-[26px] text-text-primary">{step.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-text-secondary">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default ServiceProcess;
