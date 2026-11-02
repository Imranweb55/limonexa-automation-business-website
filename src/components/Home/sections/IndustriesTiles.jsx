import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import ImagePlaceholder from "./shared/ImagePlaceholder";

const INDUSTRIES = [
  { image: "industry-realestate", title: "Real Estate" },
  { image: "industry-ecommerce", title: "E-commerce" },
  { image: "industry-healthcare", title: "Healthcare" },
  { image: "industry-finance", title: "Finance" },
  { image: "industry-logistics", title: "Logistics" },
  { image: "industry-education", title: "Education" },
];

function IndustriesTiles() {
  return (
    <section className="theme-light py-20 sm:py-28 px-5 sm:px-8 bg-bg-primary border-t border-white/5 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading

          eyebrow="Industries"
          title="Experience across the sectors that move fastest."
        />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 80}>
              <div className="group relative">
                <ImagePlaceholder name={ind.image} className="aspect-[3/4]" />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent pointer-events-none">
                  <span className="block h-px w-8 bg-gold mb-2 transition-all duration-500 group-hover:w-14" />
                  <h3 className="font-serif text-[22px] text-text-primary">{ind.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesTiles;
