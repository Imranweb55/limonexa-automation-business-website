import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import ImagePlaceholder from "./shared/ImagePlaceholder";

// Sample copy — replace with real client testimonials.
const QUOTES = [
  { image: "testimonial-1", name: "Client Name", role: "Founder, Company", text: "Placeholder testimonial. Describe the result the automation delivered for your business." },
  { image: "testimonial-2", name: "Client Name", role: "Operations Head, Company", text: "Placeholder testimonial. Describe the result the automation delivered for your business." },
  { image: "testimonial-3", name: "Client Name", role: "Managing Director, Company", text: "Placeholder testimonial. Describe the result the automation delivered for your business." },
];

function Testimonials() {
  return (
    <section className="theme-light py-20 sm:py-28 px-5 sm:px-8 bg-bg-primary border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading eyebrow="Client voices" title="Trusted by teams who value their time." />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {QUOTES.map((q, i) => (
            <Reveal key={q.image} delay={i * 120}>
              <figure className="h-full p-8 bg-bg-secondary/60 border border-white/10 flex flex-col">
                <span className="font-serif text-6xl leading-none text-gold/60">“</span>
                <blockquote className="mt-2 text-[15.5px] leading-relaxed text-text-secondary flex-1">
                  {q.text}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 pt-6 border-t border-white/10">
                  <ImagePlaceholder name={q.image} className="w-14 h-14 rounded-full shrink-0" />
                  <div>
                    <p className="font-serif text-[19px] text-text-primary">{q.name}</p>
                    <p className="text-[12.5px] text-text-muted">{q.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
