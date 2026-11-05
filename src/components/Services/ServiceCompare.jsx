import { X, Check, ArrowRight } from "lucide-react";
import Reveal from "../Home/sections/shared/Reveal";
import SectionHeading from "../Home/sections/shared/SectionHeading";

function ServiceCompare({ tab }) {
  return (
    <section className="bg-bg-secondary px-5 sm:px-8 py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading align="center" eyebrow="The difference" title="Before and after automation." />
        <div className="mt-14 grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-stretch">
          <Reveal>
            <div className="h-full p-8 border border-white/10 bg-bg-primary/40">
              <p className="text-[12px] tracking-[0.22em] uppercase text-text-muted mb-6">Manual today</p>
              <ul className="space-y-4">
                {tab.compare.manual.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[15px] text-text-secondary">
                    <X className="w-5 h-5 mt-0.5 shrink-0 text-text-muted" strokeWidth={1.8} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="hidden lg:flex items-center justify-center">
            <span className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold">
              <ArrowRight className="w-5 h-5" strokeWidth={1.6} />
            </span>
          </div>

          <Reveal delay={150}>
            <div className="h-full p-8 border border-gold/50 bg-gold/[0.05] shadow-[0_0_60px_rgba(201,168,106,0.08)]">
              <p className="text-[12px] tracking-[0.22em] uppercase text-gold mb-6">Automated with Limonexa</p>
              <ul className="space-y-4">
                {tab.compare.auto.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[15px] text-text-primary">
                    <Check className="w-5 h-5 mt-0.5 shrink-0 text-gold" strokeWidth={2} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ServiceCompare;
