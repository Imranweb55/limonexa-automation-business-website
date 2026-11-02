import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";

const FAQS = [
  { q: "How long does an automation project take?", a: "Most projects go live in 2–6 weeks depending on the number of workflows and integrations involved." },
  { q: "Do I need to replace my existing tools?", a: "No. We connect to the CRM, messaging, finance and other tools you already use." },
  { q: "Is my business data secure?", a: "Yes. We follow strict access controls and only connect the systems required for your workflows." },
  { q: "What happens after launch?", a: "We monitor, support and continuously improve your automations so they keep delivering value." },
  { q: "How do I get started?", a: "Book a free consultation. We review your processes and recommend where automation will have the most impact." },
];

function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 bg-bg-secondary border-t border-white/5">
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="Questions" title="Answers before you ask." />
        </div>
        <Reveal className="lg:col-span-7">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {FAQS.map((f, i) => {
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
                    <Plus
                      className={`w-5 h-5 shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
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

export default FaqAccordion;
