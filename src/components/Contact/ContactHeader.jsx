import { Check } from "lucide-react";
import Reveal from "../Home/sections/shared/Reveal";
import ImagePlaceholder from "../Home/sections/shared/ImagePlaceholder";
import { QUICK_FACTS } from "./contactData";

function ContactHeader() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 px-5 sm:px-8 border-b border-white/5">
      <ImagePlaceholder name="contact-header-bg" overlay className="absolute inset-0 border-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/70 to-transparent" />
      <Reveal className="relative max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-5">
          <span className="h-px w-10 bg-gold/60" />
          <span className="text-[12px] font-semibold tracking-[0.22em] uppercase text-brand-blue-pale">
            Contact us
          </span>
        </div>
        <h1 className="font-serif font-semibold text-[40px] sm:text-[60px] leading-[1.05] text-text-primary max-w-3xl">
          Let’s start a <em className="text-gold-soft">conversation.</em>
        </h1>
        <p className="mt-6 text-[16.5px] leading-relaxed text-text-secondary max-w-2xl">
          Tell us about your business and what you would like to automate. A member of our team will
          get back to you within one working day.
        </p>
        <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
          {QUICK_FACTS.map((f) => (
            <li key={f} className="flex items-center gap-2 text-[14px] text-text-primary">
              <Check className="w-4 h-4 text-gold" strokeWidth={2} />
              {f}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export default ContactHeader;
