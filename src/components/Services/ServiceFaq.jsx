import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "../Home/sections/shared/Reveal";
import SectionHeading from "../Home/sections/shared/SectionHeading";

function ServiceFaq({ tab }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-bg-secondary px-5 sm:px-8 py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="Questions" title="Good to know." />
        </div>
        <Reveal className="lg:col-span-8" delay={150}>
          <ul className="border-t border-white/10">
            {tab.faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className={`font-serif text-[22px] sm:text-[24px] transition-colors ${isOpen ? "text-gold-soft" : "text-text-primary"}`}>
                      {f.q}
                    </span>
                    {isOpen ? (
                      <Minus className="w-5 h-5 shrink-0 text-gold" strokeWidth={1.6} />
                    ) : (
                      <Plus className="w-5 h-5 shrink-0 text-text-muted" strokeWidth={1.6} />
                    )}
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <p className="overflow-hidden text-[15px] leading-relaxed text-text-secondary max-w-2xl">
                      <span className="block pb-6">{f.a}</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default ServiceFaq;
