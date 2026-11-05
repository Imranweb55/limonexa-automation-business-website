import Reveal from "../Home/sections/shared/Reveal";
import ImagePlaceholder from "../Home/sections/shared/ImagePlaceholder";
import { OFFICE } from "./contactData";

function OfficeMap() {
  return (
    <section className="theme-light py-16 sm:py-24 px-5 sm:px-8 bg-bg-primary border-t border-white/5">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <div className="flex items-center gap-4 mb-5">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-[12px] font-semibold tracking-[0.22em] uppercase text-brand-blue-pale">
              Our office
            </span>
          </div>
          <h2 className="font-serif text-[34px] sm:text-[42px] leading-[1.1] text-text-primary">{OFFICE.heading}</h2>
          <address className="mt-6 not-italic text-[16px] leading-relaxed text-text-secondary">
            {OFFICE.address.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </address>
          <ImagePlaceholder name="contact-office" className="mt-8 aspect-[3/2] rounded-sm" />
        </Reveal>
        <Reveal className="lg:col-span-7" delay={150}>
          <ImagePlaceholder name="contact-map" className="h-full min-h-[320px] aspect-[7/3] lg:aspect-auto rounded-sm" />
        </Reveal>
      </div>
    </section>
  );
}

export default OfficeMap;
