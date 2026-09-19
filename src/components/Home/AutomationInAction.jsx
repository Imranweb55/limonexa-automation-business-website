import {
  MessageSquare,
  Cpu,
  CheckCircle2,
  Database,
  MessageCircle,
  Users,
  FileText,
  ArrowRight,
} from "lucide-react";

const FLOW = [
  { icon: MessageSquare, label: "New Lead\nReceived" },
  { icon: Cpu, label: "AI Analyzes\nLead" },
  { icon: CheckCircle2, label: "Lead\nQualified" },
  { icon: Database, label: "CRM\nUpdated" },
  { icon: MessageCircle, label: "WhatsApp\nFollow-up Sent" },
  { icon: Users, label: "Sales Team\nNotified" },
  { icon: FileText, label: "Report\nUpdated" },
];

function AutomationInAction() {
  return (
    <section
      id="automation-in-action"
      className="relative py-16 sm:py-20 px-5 sm:px-6 lg:px-8 border-t border-white/5"
    >
      <div className="max-w-[1600px] mx-auto text-center">
        <span className="inline-block text-[13px] font-semibold tracking-[0.1em] text-brand-blue-pale uppercase mb-3">
          Real Automation In Action
        </span>
        <h2 className="text-[28px] sm:text-[34px] font-bold text-text-primary mb-2 leading-tight">
          See Automation In Action
        </h2>
        <p className="text-text-secondary text-[15.5px] sm:text-[16.5px] mb-10">
          One example. Many possibilities.
        </p>

        <div className="flex items-center justify-center flex-wrap gap-y-6">
          {FLOW.map(({ icon: Icon, label }, idx) => (
            <div key={label} className="flex items-center">
              <div className="flex flex-col items-center text-center w-[110px] sm:w-[130px]">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-bg-secondary border border-brand-blue-pale/20 text-brand-blue-light mb-3">
                  <Icon className="w-6 h-6" strokeWidth={1.8} />
                </span>
                <p className="text-[12.5px] sm:text-[13px] font-medium leading-snug text-text-primary/90 whitespace-pre-line">
                  {label}
                </p>
              </div>
              {idx < FLOW.length - 1 && (
                <ArrowRight
                  className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue-pale/40 mx-1 sm:mx-2 shrink-0"
                  strokeWidth={2}
                />
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 text-[14px] text-text-muted">
          All happens automatically. No manual work. No delays.
        </p>
      </div>
    </section>
  );
}

export default AutomationInAction;
