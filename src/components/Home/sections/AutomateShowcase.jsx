import { UserPlus, MessageCircle, RefreshCw, Receipt, Headset, BarChart3, ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";

// Sample copy — adjust to your real offering.
const ITEMS = [
  { icon: UserPlus, title: "Leads & sales", text: "Every enquiry scored, assigned and followed up within seconds.", flow: ["Enquiry", "AI score", "CRM"], href: "#services/ai" },
  { icon: MessageCircle, title: "WhatsApp & chat", text: "On-brand assistants that answer customers around the clock.", flow: ["Message", "AI reply", "Handover"], href: "#solutions/assistants" },
  { icon: RefreshCw, title: "CRM & data sync", text: "Enter information once and see it updated in every tool.", flow: ["Update", "Sync", "Everywhere"], href: "#services/cloud" },
  { icon: Receipt, title: "Invoices & finance", text: "Quotes, invoices and payment reminders sent without chasing.", flow: ["Order", "Invoice", "Reminder"], href: "#solutions/process" },
  { icon: Headset, title: "Customer support", text: "Tickets sorted and answered faster, with people on the hard cases.", flow: ["Ticket", "Triage", "Resolve"], href: "#solutions/assistants" },
  { icon: BarChart3, title: "Live reporting", text: "Dashboards that refresh themselves, so decisions use today's numbers.", flow: ["Collect", "Refresh", "Dashboard"], href: "#solutions/data" },
];

function AutomateShowcase() {
  return (
    <section className="theme-light bg-bg-primary px-5 sm:px-8 py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What we automate"
            title="The work your team should never do twice."
            subtitle="Six areas where Limonexa quietly takes repetitive work off your plate."
          />
          <Reveal delay={150}>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.18em] uppercase text-gold hover:text-text-primary transition-colors"
            >
              All services
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(i % 3) * 120}>
                <a
                  href={item.href}
                  className="group relative block h-full p-8 bg-bg-secondary border border-white/10 hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(11,26,48,0.14)] transition-all duration-500"
                >
                  <span className="absolute top-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-700" />
                  <div className="flex items-start justify-between">
                    <span className="flex items-center justify-center w-12 h-12 border border-gold/50 text-gold">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-text-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-gold transition-all duration-300" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 font-serif text-[26px] leading-tight text-text-primary">{item.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-text-secondary">{item.text}</p>
                  <div className="mt-7 pt-5 border-t border-white/10 flex items-center flex-wrap gap-2 text-[11.5px] tracking-wide">
                    {item.flow.map((step, k) => (
                      <span key={step} className="flex items-center gap-2">
                        <span className="px-2.5 py-1 border border-white/10 text-text-secondary group-hover:border-gold/50 group-hover:text-gold transition-colors duration-500" style={{ transitionDelay: `${k * 90}ms` }}>
                          {step}
                        </span>
                        {k < item.flow.length - 1 && <ArrowRight className="w-3 h-3 text-text-muted" strokeWidth={1.8} />}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AutomateShowcase;
