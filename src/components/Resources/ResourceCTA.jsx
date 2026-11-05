import Reveal from "../Home/sections/shared/Reveal";

function ResourceCTA({ tab }) {
  const c = tab.cta;
  return (
    <section className="py-14 sm:py-20 px-5 sm:px-8 bg-bg-secondary border-t border-white/5">
      <Reveal className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="font-serif text-[30px] sm:text-[38px] leading-tight text-text-primary">{c.title}</h2>
          <p className="mt-3 text-[15.5px] text-text-secondary max-w-xl">{c.text}</p>
        </div>
        <a
          href="#contact"
          className="shrink-0 bg-brand-blue hover:bg-brand-blue-hover text-white text-[13px] font-semibold tracking-[0.2em] uppercase px-8 py-4 transition-colors"
        >
          Talk to us
        </a>
      </Reveal>
    </section>
  );
}

export default ResourceCTA;
