import { Check } from "lucide-react";
import Reveal from "../Home/sections/shared/Reveal";
import SectionHeading from "../Home/sections/shared/SectionHeading";
import ImagePlaceholder from "../Home/sections/shared/ImagePlaceholder";

// Image on the left, text on the right.
function SolutionOverview({ tab }) {
  return (
    <section className="theme-light py-16 sm:py-24 px-5 sm:px-8 bg-bg-primary">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <ImagePlaceholder name={`sol-${tab.key}-main`} className="aspect-[4/3] rounded-sm" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10 rounded-sm" />
          </div>
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow={tab.label} title={tab.title} subtitle={tab.text} />
          <ul className="mt-8 space-y-3">
            {tab.points.map((p, i) => (
              <Reveal key={p} delay={i * 100}>
                <li className="flex items-start gap-3 text-[15px] text-text-primary">
                  <Check className="w-5 h-5 mt-0.5 shrink-0 text-gold" strokeWidth={1.8} />
                  {p}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SolutionOverview;
