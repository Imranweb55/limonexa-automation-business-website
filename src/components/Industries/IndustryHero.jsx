import Reveal from "../Home/sections/shared/Reveal";
import ImagePlaceholder from "../Home/sections/shared/ImagePlaceholder";

function IndustryHero({ tab }) {
  return (
    <section className="relative overflow-hidden min-h-[420px] sm:min-h-[480px] flex items-center">
      <ImagePlaceholder name={`ind-${tab.key}-hero`} overlay className="absolute inset-0 border-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/60 to-transparent" />
      <div className="relative w-full max-w-[1400px] mx-auto px-5 sm:px-8 py-16">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-4 mb-5">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-[12px] font-semibold tracking-[0.22em] uppercase text-brand-blue-pale">
              Industries · {tab.label}
            </span>
          </div>
          <h1 className="font-serif font-semibold text-[40px] sm:text-[58px] leading-[1.05] text-text-primary">
            {tab.title}
          </h1>
          <p className="mt-6 text-[16.5px] leading-relaxed text-text-secondary">{tab.text}</p>
          <a
            href="#contact"
            className="mt-9 inline-block bg-brand-blue hover:bg-brand-blue-hover text-white text-[13px] font-semibold tracking-[0.2em] uppercase px-8 py-4 transition-colors"
          >
            Free consultation
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default IndustryHero;
