import { ArrowUpRight } from "lucide-react";
import Reveal from "../Home/sections/shared/Reveal";

function ServiceCTA({ tab }) {
  return (
    <section className="relative overflow-hidden bg-bg-primary px-5 sm:px-8 py-20 sm:py-28 border-t border-gold/30">
      <div aria-hidden="true" className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[300px] bg-gold/10 blur-3xl rounded-full" />
      <Reveal className="relative max-w-[1100px] mx-auto text-center">
        <p className="text-[12px] tracking-[0.3em] uppercase text-gold mb-5">Start with a conversation</p>
        <h2 className="font-serif text-[36px] sm:text-[52px] leading-[1.08] text-text-primary">
          Ready to automate with <em className="text-gold-soft">{tab.label}</em>?
        </h2>
        <p className="mt-5 text-[16px] text-text-secondary max-w-xl mx-auto">
          Tell us what slows your team down. We will reply within one working day with practical ideas — no obligation.
        </p>
        <a
          href="#consultation"
          className="group mt-10 inline-flex items-center gap-3 px-8 py-4 bg-gold text-bg-primary hover:bg-gold-soft text-[13px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300"
        >
          Book a free consultation
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
        </a>
      </Reveal>
    </section>
  );
}

export default ServiceCTA;
