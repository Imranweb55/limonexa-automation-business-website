import { ArrowUpRight } from "lucide-react";
import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import ImagePlaceholder from "./shared/ImagePlaceholder";

// Image slots: home-ind-<key> (see src/assets/images/home/README.txt).
const INDUSTRIES = [
  { key: "manufacturing", name: "Manufacturing", line: "Fewer interruptions" },
  { key: "healthcare", name: "Healthcare", line: "More time for patients" },
  { key: "finance", name: "Finance & Banking", line: "Faster approvals" },
  { key: "retail", name: "Retail & E-commerce", line: "Smoother orders" },
  { key: "education", name: "Education", line: "Happier families" },
];

function IndustriesStrip() {
  return (
    <section className="theme-light bg-bg-secondary px-5 sm:px-8 py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="Industries we serve"
          title="Automation shaped around your sector."
          subtitle="Every industry has its own rhythm. We learn yours before we build anything."
        />
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.key} delay={i * 100} className={i === 4 ? "col-span-2 lg:col-span-1" : ""}>
              <a
                href={`#industries/${ind.key}`}
                className="group relative block aspect-[3/4] overflow-hidden"
              >
                <ImagePlaceholder
                  name={`home-ind-${ind.key}`}
                  className="absolute inset-0 border-0 !bg-[#0b1a30]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b16] via-[#050b16]/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="block h-px w-8 bg-[#c9a86a] mb-3 transition-all duration-500 group-hover:w-16" />
                  <h3 className="font-serif text-[24px] leading-tight text-white">{ind.name}</h3>
                  <p className="mt-1 flex items-center justify-between text-[13px] text-white/70">
                    {ind.line}
                    <ArrowUpRight className="w-4 h-4 text-[#c9a86a] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" strokeWidth={2} />
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesStrip;
