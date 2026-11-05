import Reveal from "../Home/sections/shared/Reveal";
import SectionHeading from "../Home/sections/shared/SectionHeading";

function ServiceTools({ tab }) {
  return (
    <section className="theme-light bg-bg-primary px-5 sm:px-8 py-16 sm:py-24 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading
          align="center"
          eyebrow="Integrations"
          title="Works with the tools you already use."
          subtitle="We connect to your existing platforms instead of making you start over."
        />
        <Reveal delay={150}>
          <ul className="mt-12 flex flex-wrap justify-center gap-3">
            {tab.tools.map((t) => (
              <li
                key={t}
                className="px-6 py-3 bg-bg-secondary border border-white/10 hover:border-gold/60 text-[14px] tracking-wide text-text-primary transition-colors duration-300"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default ServiceTools;
