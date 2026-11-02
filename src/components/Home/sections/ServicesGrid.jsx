import { ArrowUpRight } from "lucide-react";
import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import ImagePlaceholder from "./shared/ImagePlaceholder";

const SERVICES = [
  { image: "service-lead", title: "Lead & Sales Automation", text: "Capture, score and route every lead to the right person instantly." },
  { image: "service-whatsapp", title: "WhatsApp Automation", text: "Automated, personal conversations that follow up while you sleep." },
  { image: "service-crm", title: "CRM & Data Sync", text: "One source of truth across every tool your team already uses." },
  { image: "service-finance", title: "Invoice & Finance", text: "Invoices, reminders and reconciliation without the spreadsheets." },
  { image: "service-support", title: "Customer Support", text: "Faster responses with intelligent triage and smart replies." },
  { image: "service-workflow", title: "Workflow & Reporting", text: "Internal processes and live dashboards, fully automated." },
];

function ServicesGrid() {
  return (
    <section className="theme-light py-20 sm:py-28 px-5 sm:px-8 bg-bg-primary border-t border-white/5 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading

          eyebrow="What we automate"
          title="Services crafted around how you work."
          subtitle="From first enquiry to final invoice, we automate the journey end to end."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <article className="group bg-bg-secondary/60 border border-white/10 hover:border-gold/40 transition-colors duration-500">
                <ImagePlaceholder name={s.image} className="aspect-[3/2] border-0 border-b border-white/10" />
                <div className="p-7">
                  <h3 className="font-serif text-[25px] text-text-primary">{s.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-text-secondary">{s.text}</p>
                  <a
                    href="#consultation"
                    className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-blue-pale group-hover:text-gold transition-colors"
                  >
                    Discuss this <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
