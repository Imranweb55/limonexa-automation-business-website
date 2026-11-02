import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import ImagePlaceholder from "./shared/ImagePlaceholder";

const PILLARS = [
  { title: "Strategy first", text: "We map your operations before we build anything." },
  { title: "Built to integrate", text: "Your CRM, WhatsApp, email and finance tools — connected." },
  { title: "Measured outcomes", text: "Every workflow is tracked against time and cost saved." },
];

function AboutIntro() {
  return (
    <section className="theme-light relative py-20 sm:py-28 px-5 sm:px-8 bg-bg-primary">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <SectionHeading

            eyebrow="Who we are"
            title={<>We build the systems that quietly <em className="text-gold-soft">run your business.</em></>}
            subtitle="Limonexa designs and implements intelligent automation for growing companies — replacing repetitive manual work with reliable, connected workflows so your team can focus on what matters."
          />
          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className="border-t border-gold/40 pt-5">
                  <h3 className="font-serif text-[22px] text-text-primary">{p.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="lg:col-span-5" delay={150}>
          <div className="relative">
            <ImagePlaceholder name="about-main" className="aspect-[4/5] rounded-sm" />
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-gold/30 -z-10 rounded-sm" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutIntro;
