import { UserPlus, Brain, Database, MessageCircle, BarChart3 } from "lucide-react";
import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import ImagePlaceholder from "./shared/ImagePlaceholder";
import { useInView } from "./shared/useInView";
import { useCountUp } from "./shared/useCountUp";

// Sample copy and timings — replace with your own verified figures.
const STAGES = [
  { icon: UserPlus, title: "Enquiry arrives", text: "Form, ad or WhatsApp", time: "0.0s" },
  { icon: Brain, title: "AI qualifies", text: "Budget and intent scored", time: "0.8s" },
  { icon: Database, title: "CRM updated", text: "Contact created and assigned", time: "1.4s" },
  { icon: MessageCircle, title: "Instant follow-up", text: "Personal reply sent", time: "2.1s" },
  { icon: BarChart3, title: "Report refreshed", text: "Live for your team", time: "2.6s" },
];

const COUNTERS = [
  { value: 3, prefix: "<", suffix: "s", label: "Enquiry to first reply" },
  { value: 0, suffix: "", label: "Manual steps in the journey" },
  { value: 24, suffix: "/7", label: "Running without supervision" },
];

function Counter({ value, prefix = "", suffix, label, start }) {
  const n = useCountUp(value, start);
  return (
    <div className="px-6 py-8 text-center">
      <div className="font-serif text-[48px] sm:text-[58px] leading-none text-gold-soft">
        {prefix}
        {n}
        <span className="text-[0.5em] text-brand-blue-pale">{suffix}</span>
      </div>
      <p className="mt-3 text-[12px] tracking-[0.16em] uppercase text-text-secondary">{label}</p>
    </div>
  );
}

function LivePipeline() {
  const [ref, inView] = useInView(0.25);

  return (
    <section className="relative overflow-hidden px-5 sm:px-8 py-20 sm:py-28 border-t border-gold/20">
      <ImagePlaceholder name="workflow-bg" overlay className="absolute inset-0 border-0" />
      <div className="relative max-w-[1400px] mx-auto">
        <SectionHeading
          align="center"
          eyebrow="Automation in action"
          title="One enquiry. Five steps. Under three seconds."
          subtitle="Watch a single lead travel through a Limonexa-built system — no one typing, copying or chasing."
        />

        <div ref={ref} className="relative mt-20">
          <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-px bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-gold to-brand-blue-light origin-left transition-transform duration-[3000ms] ease-out motion-reduce:transition-none shadow-[0_0_14px_rgba(201,168,106,0.6)]"
              style={{ transform: inView ? "scaleX(1)" : "scaleX(0)" }}
            />
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
            {STAGES.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.title} className="text-center">
                  <div
                    className={`relative mx-auto w-[72px] h-[72px] rounded-full bg-bg-secondary border flex items-center justify-center transition-all duration-700 motion-reduce:transition-none ${
                      inView ? "border-gold shadow-[0_0_30px_rgba(201,168,106,0.3)]" : "border-white/15"
                    }`}
                    style={{ transitionDelay: `${i * 550}ms` }}
                  >
                    <Icon className="w-6 h-6 text-gold-soft" strokeWidth={1.4} />
                  </div>
                  <p className="mt-4 font-mono text-[12px] text-gold">{s.time}</p>
                  <h3 className="mt-1 font-serif text-[22px] text-text-primary">{s.title}</h3>
                  <p className="mt-1 text-[13.5px] text-text-secondary">{s.text}</p>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal delay={200}>
          <div className="mt-16 grid sm:grid-cols-3 border-y border-white/10 divide-y sm:divide-y-0 sm:divide-x divide-white/10 bg-bg-primary/40 backdrop-blur-sm">
            {COUNTERS.map((c) => (
              <Counter key={c.label} {...c} start={inView} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default LivePipeline;
