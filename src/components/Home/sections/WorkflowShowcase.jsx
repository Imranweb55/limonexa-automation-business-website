import { UserPlus, Brain, Database, MessageCircle, BarChart3 } from "lucide-react";
import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import ImagePlaceholder from "./shared/ImagePlaceholder";
import { useInView } from "./shared/useInView";

const NODES = [
  { icon: UserPlus, title: "New lead arrives", text: "Form, ad or message" },
  { icon: Brain, title: "AI qualifies", text: "Scored in seconds" },
  { icon: Database, title: "CRM updated", text: "No manual entry" },
  { icon: MessageCircle, title: "Instant follow-up", text: "WhatsApp or email" },
  { icon: BarChart3, title: "Report refreshed", text: "Live for your team" },
];

function WorkflowShowcase() {
  const [ref, inView] = useInView(0.3);

  return (
    <section className="relative scroll-mt-24 py-20 sm:py-28 px-5 sm:px-8 border-t border-white/5 overflow-hidden">
      <ImagePlaceholder name="workflow-bg" overlay className="absolute inset-0 border-0" />
      <div className="relative max-w-[1400px] mx-auto">
        <SectionHeading

          eyebrow="Automation in action"
          title="One enquiry. Five steps. Zero manual work."
          subtitle="This is what a single automated lead journey looks like inside a Limonexa-built system."
        />
        <div ref={ref} className="relative mt-16">
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-gold/80 to-brand-blue-light/80 origin-left transition-transform duration-[2200ms] ease-out motion-reduce:transition-none"
              style={{ transform: inView ? "scaleX(1)" : "scaleX(0)" }}
            />
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {NODES.map((n, i) => (
              <Reveal key={n.title} delay={i * 220}>
                <li className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-bg-secondary border border-gold/50 flex items-center justify-center">
                    <n.icon className="w-6 h-6 text-gold-soft" strokeWidth={1.4} />
                  </div>
                  <h3 className="mt-5 font-serif text-[21px] text-text-primary">{n.title}</h3>
                  <p className="mt-1 text-[13.5px] text-text-secondary">{n.text}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WorkflowShowcase;
