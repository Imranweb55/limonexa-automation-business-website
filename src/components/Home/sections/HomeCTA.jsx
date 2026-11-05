import { ArrowUpRight } from "lucide-react";
import Reveal from "./shared/Reveal";

const PROMISES = ["Reply within 1 working day", "Free consultation", "No obligation"];

function HomeCTA() {
  return (
    <section className="relative overflow-hidden bg-bg-primary px-5 sm:px-8 py-24 sm:py-32 border-t border-gold/30">
      <div aria-hidden="true" className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[340px] bg-gold/10 blur-3xl rounded-full" />
      <Reveal className="relative max-w-[1000px] mx-auto text-center">
        <p className="text-[12px] tracking-[0.3em] uppercase text-gold mb-6">Start with a conversation</p>
        <h2 className="font-serif text-[40px] sm:text-[60px] leading-[1.05] text-text-primary">
          Ready to put your business <em className="text-gold-soft">on autopilot?</em>
        </h2>
        <p className="mt-6 text-[16.5px] text-text-secondary max-w-xl mx-auto leading-relaxed">
          Tell us what slows your team down. We will show you what can be automated, what it would save and where to begin.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#consultation"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-bg-primary hover:bg-gold-soft text-[13px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300"
          >
            Book a free consultation
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center px-8 py-4 border border-white/20 hover:border-gold text-text-primary hover:text-gold text-[13px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300"
          >
            Explore services
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[13px] text-text-muted">
          {PROMISES.map((p) => (
            <li key={p} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-gold" />
              {p}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export default HomeCTA;
