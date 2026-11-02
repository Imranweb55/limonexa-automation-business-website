import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";

const STEPS = [
  { title: "Discover", text: "We study your operations, tools and bottlenecks to find where automation pays back fastest." },
  { title: "Design", text: "A clear blueprint of workflows, integrations and success metrics — agreed before we build." },
  { title: "Build", text: "We implement, connect and rigorously test every automation in your real environment." },
  { title: "Optimize", text: "We monitor performance, refine, and extend automation as your business grows." },
];

function ApproachTimeline() {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 bg-bg-secondary border-t border-white/5 scroll-mt-24">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading
          align="center"

          eyebrow="Our approach"
          title="A proven method, from first call to lasting results."
        />
        <div className="relative mt-16">
          <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent" />
          <ul className="space-y-12">
            {STEPS.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <Reveal key={s.title}>
                  <li className="relative grid sm:grid-cols-2 gap-6 items-start">
                    <span className="absolute left-[10px] sm:left-1/2 sm:-translate-x-1/2 top-1.5 w-5 h-5 rounded-full bg-bg-secondary border border-gold" />
                    <div className={`pl-14 sm:pl-0 ${right ? "sm:col-start-2 sm:pl-12" : "sm:pr-12 sm:text-right"}`}>
                      <span className="font-serif text-gold text-lg">Step {String(i + 1).padStart(2, "0")}</span>
                      <h3 className="font-serif text-[30px] text-text-primary mt-1">{s.title}</h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">{s.text}</p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ApproachTimeline;
