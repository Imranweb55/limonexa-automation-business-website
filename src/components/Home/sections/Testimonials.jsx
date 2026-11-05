import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import ImagePlaceholder from "./shared/ImagePlaceholder";

// Sample copy — replace with real client testimonials.
const QUOTES = [
  { image: "testimonial-1", name: "Client Name", role: "Founder, Company", text: "Sample testimonial: we stopped losing leads overnight. Every enquiry now gets a reply within seconds." },
  { image: "testimonial-2", name: "Client Name", role: "Operations Head, Company", text: "Sample testimonial: invoicing and reports that took two days a week now happen on their own." },
  { image: "testimonial-3", name: "Client Name", role: "Managing Director, Company", text: "Sample testimonial: the team understood our business first, then built exactly what we needed." },
];

function Testimonials() {
  return (
    <section className="theme-light py-20 sm:py-28 px-5 sm:px-8 bg-bg-primary border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading eyebrow="Client voices" title="Trusted by teams who value their time." />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {QUOTES.map((q, i) => (
            <Reveal key={q.image} delay={i * 120}>
              <figure className="group relative h-full p-8 bg-bg-secondary border border-white/10 hover:border-gold/50 hover:-translate-y-1 transition-all duration-500 flex flex-col">
                <span className="font-serif text-7xl leading-none text-gold/60">“</span>
                <blockquote className="mt-2 font-serif italic text-[20px] leading-relaxed text-text-primary flex-1">
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
