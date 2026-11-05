import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "../Home/sections/shared/Reveal";

function FaqCategories({ tab }) {
  const [cat, setCat] = useState(tab.faqCategories[0]);
  const [open, setOpen] = useState(0);
  const list = tab.faqs.filter((f) => f.cat === cat);

  const pick = (c) => {
    setCat(c);
    setOpen(0);
  };

  return (
    <section className="theme-light py-16 sm:py-24 px-5 sm:px-8 bg-bg-primary">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="FAQ categories">
          {tab.faqCategories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={c === cat}
              onClick={() => pick(c)}
              className={`px-5 py-2.5 text-[12.5px] font-semibold tracking-[0.14em] uppercase border transition-colors ${
                c === cat
                  ? "bg-brand-navy text-white border-brand-navy"
                  : "border-white/20 text-text-secondary hover:border-gold hover:text-text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <Reveal key={cat}>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {list.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-serif text-[22px] text-text-primary">{f.q}</span>
                    <Plus className={`w-5 h-5 shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-10 text-[15px] leading-relaxed text-text-secondary">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FaqCategories;
