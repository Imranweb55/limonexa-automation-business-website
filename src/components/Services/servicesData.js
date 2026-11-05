import {
  UserPlus, Brain, Database, Send, FileText, Bot, Globe, Smartphone,
  Gauge, ShieldCheck, Cloud, Plug, Server, Workflow, ClipboardList, LineChart, Layers, Cpu,
  Mail, CreditCard, Search, Code2, Lock, RefreshCw, Users, Target, Map, Rocket, BarChart3,
  Settings, Palette, LayoutDashboard, Compass, Timer, Receipt, Handshake,
} from "lucide-react";

// Content for the Services page sub-tabs (all figures and copy are sample text —
// replace with your real, verified details).
//
// Each tab shows these blocks, in order, as listed in `blocks`:
//   hero      dark intro with a live "workflow running" panel (uses `flow`)
//   stats     count-up numbers                                (uses `stats`)
//   process   4-step "how it works"                            (uses `process`)
//   features  6 capability cards                               (uses `features`)
//   compare   manual vs automated                              (uses `compare`)
//   tools     platforms we connect                             (uses `tools`)
//   faq       questions and answers                            (uses `faqs`)
//   clients   trusted-by logo slots (AI Automation only)
//   cta       consultation band
// Image slot: svc-<key>-main (hero background, see src/assets/images/services/README.txt)

const BLOCKS_FULL = ["hero", "stats", "process", "features", "compare", "tools", "faq", "cta"];

export const SERVICE_TABS = [
  {
    key: "ai",
    label: "AI Automation",
    title: "AI automation that works while you sleep.",
    text: "We replace repetitive manual work with intelligent workflows — qualifying leads, answering customers and keeping your data in sync, around the clock, without anyone lifting a finger.",
    points: ["Lead qualification and routing", "AI chat and WhatsApp assistants", "Document and data extraction"],
    flowTitle: "lead-to-customer.flow",
    flow: [
      { icon: UserPlus, label: "New enquiry arrives", detail: "Website form, ad or WhatsApp" },
      { icon: Brain, label: "AI scores the lead", detail: "Budget, intent and fit checked" },
      { icon: Database, label: "CRM updated", detail: "Contact created, owner assigned" },
      { icon: Send, label: "Instant follow-up", detail: "Personal reply sent in seconds" },
    ],
    stats: [
      { value: 70, suffix: "%", label: "Less manual work" },
      { value: 5, prefix: "<", suffix: "s", label: "Lead response time" },
      { value: 24, suffix: "/7", label: "Always-on assistants" },
      { value: 95, suffix: "%", label: "Data accuracy" },
    ],
    process: [
      { title: "Discover", text: "We map the tasks that eat your team's time and rank them by value." },
      { title: "Design", text: "A clear workflow, tools and AI behaviour agreed with you before we build." },
      { title: "Automate", text: "We build, connect and test it against your real data and edge cases." },
      { title: "Support", text: "Live monitoring, tuning and a named contact once it is running." },
    ],
    features: [
      { icon: Target, title: "Smart lead handling", text: "Every enquiry scored, routed to the right person and followed up within seconds." },
      { icon: Bot, title: "Conversational assistants", text: "On-brand replies across website chat, email and WhatsApp, handing over to a human when it matters." },
      { icon: FileText, title: "Document intelligence", text: "Invoices, forms and emails read, validated and filed automatically." },
      { icon: Mail, title: "Follow-up sequences", text: "Reminders and nurture messages that stop the moment a customer replies." },
      { icon: LineChart, title: "Live reporting", text: "Dashboards that update themselves — no more weekly spreadsheet chasing." },
      { icon: ShieldCheck, title: "Human in the loop", text: "Approvals and review steps where you want control, full automation where you do not." },
    ],
    compare: {
      manual: ["Leads wait hours for a reply", "Data typed into three tools", "Follow-ups forgotten on busy days", "Reports built by hand every week"],
      auto: ["Replies sent in seconds, day or night", "Data entered once and synced everywhere", "Every lead followed up on schedule", "Dashboards refreshed automatically"],
    },
    tools: ["WhatsApp Business", "Zoho CRM", "HubSpot", "Google Workspace", "Slack", "OpenAI", "Gmail", "Zapier"],
    faqs: [
      { q: "How long does an AI automation project take?", a: "Most first workflows go live in 2–4 weeks. We start with the one that saves the most time, then expand." },
      { q: "Will customers know they are talking to an AI?", a: "You decide. We can make the assistant clearly identified, and it hands over to your team for anything sensitive or complex." },
      { q: "Do we need to replace our existing software?", a: "No. We connect to the CRM, spreadsheets and messaging tools you already use." },
      { q: "Is our data safe?", a: "Yes. We use access controls, encrypted connections and only the data each workflow actually needs." },
    ],
    blocks: [...BLOCKS_FULL.slice(0, 7), "clients", "cta"],
  },
  {
    key: "web",
    label: "Web & App Development",
    title: "Websites and apps built to convert.",
    text: "Fast, secure, beautifully designed websites and applications that represent your brand and plug straight into your business systems — so every visit can become an automated lead.",
    points: ["Corporate and e-commerce websites", "Custom web applications", "Mobile-friendly, SEO-ready builds"],
    flowTitle: "visitor-to-order.flow",
    flow: [
      { icon: Globe, label: "Visitor lands on site", detail: "Fast, mobile-first page load" },
      { icon: LayoutDashboard, label: "Form or checkout", detail: "Validated and spam-protected" },
      { icon: Database, label: "Backend records it", detail: "Saved to your database and CRM" },
      { icon: Mail, label: "Confirmation sent", detail: "Email and WhatsApp to the customer" },
    ],
    stats: [
      { value: 90, suffix: "+", label: "Performance score target" },
      { value: 100, suffix: "%", label: "Mobile responsive" },
      { value: 2, suffix: "s", label: "Typical load time" },
      { value: 4, suffix: " wks", label: "Average launch time" },
    ],
    process: [
      { title: "Brief", text: "Goals, audience, pages and integrations agreed in a short workshop." },
      { title: "Design", text: "A distinctive interface in your brand, approved before any code." },
      { title: "Build", text: "Clean, secure code connected to your forms, payments and systems." },
      { title: "Launch", text: "Testing, go-live, training and ongoing maintenance if you want it." },
    ],
    features: [
      { icon: Palette, title: "Brand-led design", text: "A distinctive, professional look that builds trust at first glance." },
      { icon: Gauge, title: "Performance first", text: "Optimised images and code so pages load quickly on any connection." },
      { icon: Smartphone, title: "Mobile and app ready", text: "Responsive sites and installable web apps that feel native on a phone." },
      { icon: Search, title: "SEO foundations", text: "Clean structure, metadata and speed that help you get found." },
      { icon: CreditCard, title: "Payments and bookings", text: "Online payments, quotes and appointment booking built in." },
      { icon: Plug, title: "Connected backends", text: "Forms, dashboards and admin panels wired into your workflow." },
    ],
    compare: {
      manual: ["Brochure site that only shows information", "Enquiries arrive in an inbox and get lost", "Content changes need a developer", "Slow, hard to use on mobile"],
      auto: ["Site that captures, scores and routes leads", "Every enquiry lands in your CRM instantly", "Simple admin to edit content yourself", "Fast, smooth and touch-friendly"],
    },
    tools: ["React", "Node.js", "Shopify", "WordPress", "Razorpay", "Stripe", "Google Analytics", "Cloudflare"],
    faqs: [
      { q: "Do you build e-commerce stores?", a: "Yes — from simple catalogues to full stores with payments, stock sync and automated order emails." },
      { q: "Can we update the content ourselves?", a: "Yes. We give you an easy admin area, and train your team to use it." },
      { q: "Will the site work on phones?", a: "Every build is designed mobile-first and tested on real devices." },
      { q: "Do you provide hosting and maintenance?", a: "We can host, monitor and maintain the site, or hand everything over to your own provider." },
    ],
    blocks: BLOCKS_FULL,
  },
  {
    key: "custom",
    label: "Custom Solutions",
    title: "Software shaped around your process.",
    text: "When off-the-shelf tools do not fit, we design and build bespoke systems that match exactly how your team works — no workarounds, no wasted licences.",
    points: ["Internal tools and portals", "Custom CRM and ERP modules", "Tailored reporting dashboards"],
    flowTitle: "request-to-approval.flow",
    flow: [
      { icon: ClipboardList, label: "Request submitted", detail: "From your own portal or form" },
      { icon: Workflow, label: "Rules applied", detail: "Routed by role, value and urgency" },
      { icon: Users, label: "Approver notified", detail: "One tap to approve or decline" },
      { icon: BarChart3, label: "Dashboard updated", detail: "Status visible to everyone" },
    ],
    stats: [
      { value: 100, suffix: "%", label: "Built around your workflow" },
      { value: 60, suffix: "%", label: "Faster approvals" },
      { value: 1, suffix: " source", label: "Single source of truth" },
      { value: 4, suffix: " wks", label: "To a working first version" },
    ],
    process: [
      { title: "Understand", text: "We shadow your team and document how the work really happens." },
      { title: "Prototype", text: "A clickable prototype you can test before we write production code." },
      { title: "Build", text: "Delivered in short stages so you see working software every week or two." },
      { title: "Evolve", text: "Training, support and new features as your business changes." },
    ],
    features: [
      { icon: Layers, title: "Internal tools and portals", text: "Staff, partner and customer portals with the exact screens each role needs." },
      { icon: Settings, title: "Custom CRM and ERP modules", text: "Add the missing piece to your existing system instead of replacing it." },
      { icon: LayoutDashboard, title: "Tailored dashboards", text: "The numbers that matter to you, live, in one place." },
      { icon: Workflow, title: "Approval workflows", text: "Multi-step approvals with reminders, audit trail and escalation." },
      { icon: Lock, title: "Role-based access", text: "Each person sees only what they should." },
      { icon: Code2, title: "You own the code", text: "Clean, documented code delivered to you — no lock-in." },
    ],
    compare: {
      manual: ["Spreadsheets emailed back and forth", "Several tools that do not talk to each other", "Approvals chased by phone", "No clear audit trail"],
      auto: ["One system everyone works in", "Tools connected through a single backbone", "Approvals routed and reminded automatically", "Every action logged and searchable"],
    },
    tools: ["React", "Node.js", "PostgreSQL", "MongoDB", "REST APIs", "Power BI", "Metabase", "Docker"],
    faqs: [
      { q: "How is custom software priced?", a: "After a short discovery we give a fixed scope and price per stage, so there are no open-ended bills." },
      { q: "Can you extend a system we already have?", a: "Yes. We often add modules or integrations to existing CRM, ERP or accounting tools." },
      { q: "Who owns the finished software?", a: "You do. We hand over the code and documentation." },
      { q: "What happens after launch?", a: "We offer support plans for fixes, hosting and new features, but you are never locked in." },
    ],
    blocks: BLOCKS_FULL,
  },
  {
    key: "cloud",
    label: "Cloud & Integration",
    title: "Every system, finally speaking to each other.",
    text: "We connect your CRM, finance, messaging and cloud platforms through secure integrations so information flows once, everywhere — and moves your workloads to reliable, scalable cloud infrastructure.",
    points: ["API and webhook integrations", "Cloud migration and hosting", "Secure data synchronisation"],
    flowTitle: "order-sync.flow",
    flow: [
      { icon: Receipt, label: "Order placed", detail: "From your store or sales app" },
      { icon: Plug, label: "API event fired", detail: "Webhook sent securely" },
      { icon: RefreshCw, label: "Systems synced", detail: "CRM, stock and accounts updated" },
      { icon: Cloud, label: "Logged in the cloud", detail: "Backed up and monitored" },
    ],
    stats: [
      { value: 99, suffix: "%", label: "Uptime target" },
      { value: 100, suffix: "+", label: "Apps we can connect" },
      { value: 1, suffix: "x", label: "Data entry, not three" },
      { value: 24, suffix: "/7", label: "Monitoring" },
    ],
    process: [
      { title: "Audit", text: "We list every tool, data flow and risk in your current set-up." },
      { title: "Architect", text: "A simple integration and hosting plan with clear costs." },
      { title: "Connect", text: "Integrations built, tested and migrated with minimal downtime." },
      { title: "Monitor", text: "Alerts, backups and regular reviews keep it healthy." },
    ],
    features: [
      { icon: Plug, title: "Seamless connections", text: "Your existing tools joined through APIs and webhooks, without replacing them." },
      { icon: RefreshCw, title: "Two-way data sync", text: "Changes in one system appear in the others automatically." },
      { icon: Cloud, title: "Cloud migration", text: "Move from local servers to the cloud safely and step by step." },
      { icon: ShieldCheck, title: "Secure by design", text: "Encryption, access control and monitoring built in from day one." },
      { icon: Server, title: "Scalable hosting", text: "Infrastructure that grows with your traffic and your team." },
      { icon: Timer, title: "Backups and recovery", text: "Automatic backups and tested recovery plans." },
    ],
    compare: {
      manual: ["Same data typed into several systems", "Local servers and single points of failure", "Integrations that break without notice", "Unclear who has access to what"],
      auto: ["Data entered once and synced everywhere", "Cloud hosting with automatic failover", "Monitored integrations with instant alerts", "Role-based access and full audit logs"],
    },
    tools: ["AWS", "Google Cloud", "Microsoft Azure", "Zoho", "Tally", "Razorpay", "Twilio", "Zapier"],
    faqs: [
      { q: "Can you connect software that has no API?", a: "Often yes — through file exchange, database access or scheduled imports. We will tell you honestly what is possible." },
      { q: "Will moving to the cloud interrupt our work?", a: "We plan migrations in stages and cut over outside working hours to keep downtime minimal." },
      { q: "How do you keep our data secure?", a: "Encrypted connections, least-privilege access, regular backups and continuous monitoring." },
      { q: "What if an integration breaks?", a: "We monitor every connection and alert us first, usually fixing it before you notice." },
    ],
    blocks: BLOCKS_FULL,
  },
  {
    key: "consulting",
    label: "Consulting & Strategy",
    title: "A clear roadmap before a single line of code.",
    text: "We audit your operations, identify the highest-value opportunities and give you a practical, prioritised automation plan — so every rupee you invest goes where it pays back fastest.",
    points: ["Process and workflow audit", "ROI-ranked automation roadmap", "Technology selection advice"],
    flowTitle: "automation-roadmap.flow",
    flow: [
      { icon: Search, label: "Operations audited", detail: "Interviews and process mapping" },
      { icon: Compass, label: "Opportunities found", detail: "Every manual task listed" },
      { icon: Target, label: "ROI ranked", detail: "Effort versus payback scored" },
      { icon: Map, label: "Roadmap delivered", detail: "Clear 90-day action plan" },
    ],
    stats: [
      { value: 2, suffix: " wks", label: "Typical audit time" },
      { value: 10, suffix: "+", label: "Opportunities found on average" },
      { value: 90, suffix: " days", label: "Action plan horizon" },
      { value: 100, suffix: "%", label: "Vendor-neutral advice" },
    ],
    process: [
      { title: "Listen", text: "Workshops with your team to understand goals, pain points and constraints." },
      { title: "Analyse", text: "Process mapping and data review to find time and cost leaks." },
      { title: "Prioritise", text: "Each idea scored by effort, risk and return so the order is obvious." },
      { title: "Plan", text: "A written roadmap with owners, timelines, budgets and expected savings." },
    ],
    features: [
      { icon: Search, title: "Process audit", text: "A clear picture of how work really flows through your business." },
      { icon: Target, title: "ROI-ranked roadmap", text: "Quick wins first, bigger projects sequenced sensibly." },
      { icon: Cpu, title: "Technology selection", text: "Honest, vendor-neutral advice on the right tools for your size and budget." },
      { icon: Users, title: "Team readiness", text: "Training and change plans so your people actually adopt the new way of working." },
      { icon: Rocket, title: "Pilot projects", text: "Prove value on one workflow before committing to a wider rollout." },
      { icon: Handshake, title: "Ongoing advisor", text: "Quarterly reviews to keep your automation aligned with growth." },
    ],
    compare: {
      manual: ["Buying tools without a clear plan", "Automating the wrong things first", "No way to measure the return", "Team unsure about the change"],
      auto: ["A prioritised plan before any spend", "Highest-value workflows tackled first", "Targets and savings tracked from day one", "People briefed, trained and on board"],
    },
    tools: ["Process mapping", "Workflow audits", "ROI modelling", "Tool comparison", "Pilot design", "Training plans", "KPI dashboards", "Quarterly reviews"],
    faqs: [
      { q: "Do we have to hire you to build what you recommend?", a: "No. The roadmap is yours to keep and can be delivered by us, your team or another vendor." },
      { q: "How long does a consulting engagement last?", a: "Most audits take 2–3 weeks, followed by a short presentation of the roadmap." },
      { q: "What do you need from us?", a: "A few hours with the people who run your key processes, and access to the tools they use." },
      { q: "Is it suitable for a small business?", a: "Yes. The plan is sized to your budget and starts with the quick wins." },
    ],
    blocks: BLOCKS_FULL,
  },
];

