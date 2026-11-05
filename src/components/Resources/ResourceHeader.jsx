import Reveal from "../Home/sections/shared/Reveal";

function ResourceHeader({ tab }) {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 bg-bg-secondary">
      <Reveal className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-5">
          <span className="h-px w-10 bg-gold/60" />
          <span className="text-[12px] font-semibold tracking-[0.22em] uppercase text-brand-blue-pale">
            Resources · {tab.label}
          </span>
        </div>
        <h1 className="font-serif font-semibold text-[38px] sm:text-[56px] leading-[1.06] text-text-primary max-w-4xl">
          {tab.title}
        </h1>
        <p className="mt-6 text-[16.5px] leading-relaxed text-text-secondary max-w-2xl">{tab.text}</p>
      </Reveal>
    </section>
  );
}

export default ResourceHeader;
