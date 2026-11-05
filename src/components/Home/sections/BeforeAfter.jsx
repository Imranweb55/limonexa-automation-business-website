import { X, Check } from "lucide-react";
import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";

// Sample copy — adjust the tasks and timings to match your real clients.
const ROWS = [
  { time: "9:00", before: "Copy yesterday's leads into a spreadsheet", after: "Leads already in the CRM, scored and assigned" },
  { time: "10:30", before: "Reply to the same customer questions again", after: "Assistant answers instantly, escalates the rest" },
  { time: "12:00", before: "Type order details into the accounts software", after: "Invoice created and sent automatically" },
  { time: "3:00", before: "Chase unpaid invoices by phone and email", after: "Polite reminders go out on schedule" },
  { time: "5:30", before: "Build the weekly report by hand", after: "Dashboard already up to date" },
];

function BeforeAfter() {
  return (
    <section className="theme-light bg-bg-primary px-5 sm:px-8 py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="The difference"
          title="A working day, before and after Limonexa."
          subtitle="The same team, the same hours — with the repetitive parts handled for them."
        />

        <div className="mt-14 border border-white/10 bg-bg-secondary">
          <div className="hidden sm:grid grid-cols-[88px_1fr_1fr] text-[11.5px] tracking-[0.2em] uppercase border-b border-white/10">
            <span className="p-5" />
            <span className="p-5 text-text-muted">Without automation</span>
            <span className="p-5 text-gold border-l border-gold/40 bg-gold/[0.06]">With Limonexa</span>
          </div>
          {ROWS.map((r, i) => (
            <Reveal key={r.time} delay={i * 90}>
              <div className="grid sm:grid-cols-[88px_1fr_1fr] border-b border-white/10 last:border-b-0">
                <span className="px-5 pt-5 sm:py-6 font-serif text-[26px] text-gold">{r.time}</span>
                <p className="px-5 py-3 sm:py-6 flex items-start gap-3 text-[15px] text-text-secondary">
                  <X className="w-4 h-4 mt-1 shrink-0 text-text-muted" strokeWidth={2} />
                  {r.before}
                </p>
                <p className="px-5 pt-3 pb-6 sm:py-6 flex items-start gap-3 text-[15px] text-text-primary sm:border-l border-gold/40 sm:bg-gold/[0.06]">
                  <Check className="w-4 h-4 mt-1 shrink-0 text-gold" strokeWidth={2.4} />
                  {r.after}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-[12px] text-text-muted">Illustrative day — your results depend on your processes.</p>
      </div>
    </section>
  );
}

export default BeforeAfter;
