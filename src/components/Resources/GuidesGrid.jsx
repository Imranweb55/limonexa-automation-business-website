import { Download } from "lucide-react";
import Reveal from "../Home/sections/shared/Reveal";
import ImagePlaceholder from "../Home/sections/shared/ImagePlaceholder";

function GuidesGrid({ tab }) {
  return (
    <section className="theme-light py-16 sm:py-24 px-5 sm:px-8 bg-bg-primary">
      <div className="max-w-[1400px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {tab.guides.map((g, i) => (
          <Reveal key={g.title} delay={i * 100}>
            <article className="group h-full flex flex-col">
              <ImagePlaceholder name={`res-guide-${i + 1}`} className="aspect-[4/5] rounded-sm shadow-[0_18px_40px_rgba(11,26,48,0.15)]" />
              <h3 className="mt-6 font-serif text-[23px] leading-snug text-text-primary">{g.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary flex-1">{g.text}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-blue-pale hover:text-gold transition-colors"
              >
                <Download className="w-4 h-4" /> Request this guide
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default GuidesGrid;
