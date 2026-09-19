import {
  Target,
  MessageCircle,
  Database,
  FileText,
  Headset,
  BarChart3,
  Workflow,
  ClipboardCheck,
  Megaphone,
  Package,
} from "lucide-react";

const SOLUTIONS = [
  {
    icon: Target,
    title: "Lead & Sales Automation",
    desc: "Capture, qualify and nurture leads automatically.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    desc: "Send, respond and engage automatically.",
  },
  {
    icon: Database,
    title: "CRM Automation",
    desc: "Update, track and manage automatically.",
  },
  {
    icon: FileText,
    title: "Invoice Automation",
    desc: "Generate, send and track invoices.",
  },
  {
    icon: Headset,
    title: "Customer Support Automation",
    desc: "Smart responses and ticket automation.",
  },
  {
    icon: BarChart3,
    title: "Reporting Automation",
    desc: "Real-time reports and business insights.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Automate tasks and team workflows.",
  },
  {
    icon: ClipboardCheck,
    title: "Employee Task Automation",
    desc: "Assign, track and manage tasks.",
  },
  {
    icon: Megaphone,
    title: "Marketing Automation",
    desc: "Campaigns, emails and engagement.",
  },
  {
    icon: Package,
    title: "Order Processing Automation",
    desc: "Process orders and update automatically.",
  },
];

function WhatWeAutomate() {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 px-5 sm:px-6 lg:px-8 border-t border-white/5"
    >
      <div className="max-w-[1600px] mx-auto text-center">
        <span className="inline-block text-[13px] font-semibold tracking-[0.1em] text-brand-blue-pale uppercase mb-3">
          What We Automate
        </span>
        <h2 className="text-[28px] sm:text-[34px] font-bold text-text-primary mb-10 leading-tight max-w-2xl mx-auto">
          End-to-end Automation Solutions for Your Entire Business
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-left">
          {SOLUTIONS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-bg-secondary/60 border border-white/10 rounded-xl p-5 hover:border-brand-blue-pale/30 transition-colors duration-200"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue/15 text-brand-blue-light mb-4">
                <Icon className="w-5 h-5" strokeWidth={2} />
              </span>
              <h3 className="text-[14.5px] font-semibold text-text-primary mb-1.5 leading-snug">
                {title}
              </h3>
              <p className="text-[12.5px] leading-relaxed text-text-muted">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeAutomate;
