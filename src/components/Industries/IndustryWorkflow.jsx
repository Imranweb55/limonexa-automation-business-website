import Reveal from "../Home/sections/shared/Reveal";
import SectionHeading from "../Home/sections/shared/SectionHeading";

// A typical automated journey for the industry, as a horizontal sequence.
function IndustryWorkflow({ tab }) {
  return (
    <section className="theme-light py-16 sm:py-24 px-5 sm:px-8 bg-bg-primary border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading eyebrow="Typical workflow" title="How the automation runs, step by step." />
        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0">
          {tab.workflow.map((step, i) => (
            <Reveal key={step} delay={i * 150}>
              <li className="relative lg:pr-6">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 shrink-0 rounded-full border border-gold bg-bg-secondary flex items-center justify-center font-serif text-[18px] text-gold">
                    {i + 1}
                  </span>
                  {i < tab.workflow.length - 1 && (
                    <span className="hidden lg:block h-px flex-1 bg-gradient-to-r from-gold/60 to-gold/10" />
                  )}
                </div>
                <p className="mt-4 font-serif text-[21px] text-text-primary">{step}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default IndustryWorkflow;
