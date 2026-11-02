import Reveal from "./Reveal";

function SectionHeading({ number, eyebrow, title, subtitle, align = "left" }) {
  const center = align === "center";
  return (
    <Reveal className={center ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      <div className={`flex items-center gap-4 mb-5 ${center ? "justify-center" : ""}`}>
        {number && <span className="font-serif text-gold text-xl">{number}</span>}
        <span className="h-px w-10 bg-gold/60" />
        <span className="text-[12px] font-semibold tracking-[0.22em] uppercase text-brand-blue-pale">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-serif font-semibold text-text-primary text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.08]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-text-secondary">{subtitle}</p>
      )}
    </Reveal>
  );
}

export default SectionHeading;
