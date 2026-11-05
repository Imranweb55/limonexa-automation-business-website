// Content for the Solutions page sub-solutions (chosen from the navbar dropdown).
// `blocks` lists the components shown, in order:
//   overview | showcase (workflow diagram) | steps | outcomes | cta
// Image slot per solution: sol-<key>-main (see src/assets/images/solutions/README.txt)
// All text is sample copy — replace with your own.

export const SOLUTION_TABS = [
  {
    key: "workflow",
    label: "Workflow Automation",
    title: "Every repetitive task, handled automatically.",
    text: "We map your day-to-day processes and turn them into reliable automated workflows that run around the clock without errors or delays.",
    points: ["Trigger-based task automation", "Approvals and notifications", "Seamless hand-offs between teams"],
    steps: [
      { title: "Map", text: "We document how work really moves through your team." },
      { title: "Automate", text: "Repetitive steps are replaced by tested workflows." },
      { title: "Connect", text: "Your tools exchange data without manual input." },
      { title: "Monitor", text: "Dashboards and alerts keep every run visible." },
    ],
    outcomes: [],
    blocks: ["overview", "showcase", "steps"],
  },
  {
    key: "data",
    label: "Data & Analytics",
    title: "Decisions backed by live, trustworthy data.",
    text: "We unify data from every system into clear dashboards and reports, so you see what is happening in your business today — not last month.",
    points: ["Unified data from all your tools", "Live KPI dashboards", "Automated weekly and monthly reports"],
    steps: [],
    outcomes: [
      { value: 80, suffix: "%", label: "Less time building reports" },
      { value: 100, suffix: "%", label: "Single source of truth" },
      { value: 24, suffix: "/7", label: "Live visibility" },
    ],
    blocks: ["overview", "outcomes", "cta"],
  },
  {
    key: "assistants",
    label: "AI Assistants",
    title: "A tireless assistant for your team and customers.",
    text: "Custom AI assistants answer questions, book appointments and support your staff — in your tone of voice, on the channels your customers already use.",
    points: ["Customer-facing chat and WhatsApp bots", "Internal knowledge assistants", "Human hand-off when it matters"],
    steps: [
      { title: "Learn", text: "The assistant is trained on your own content and policies." },
      { title: "Launch", text: "Deployed on your website, WhatsApp or internal tools." },
      { title: "Improve", text: "Conversations are reviewed to keep getting better." },
    ],
    outcomes: [],
    blocks: ["overview", "steps"],
  },
  {
    key: "process",
    label: "Business Process Automation",
    title: "Whole processes, end to end, without the paperwork.",
    text: "From onboarding to invoicing, we automate complete business processes so they run faster, cost less and follow the same standard every time.",
    points: ["Onboarding and approvals", "Invoicing and payment follow-up", "Compliance-ready audit trails"],
    steps: [
      { title: "Assess", text: "We find the processes costing you the most time." },
      { title: "Redesign", text: "A simpler, automated version is agreed with your team." },
      { title: "Deploy", text: "Rolled out in stages with training and support." },
    ],
    outcomes: [
      { value: 70, suffix: "%", label: "Faster turnaround" },
      { value: 60, suffix: "%", label: "Lower process cost" },
      { value: 90, suffix: "%", label: "Fewer errors" },
    ],
    blocks: ["overview", "steps", "outcomes"],
  },
  {
    key: "growth",
    label: "Growth & Optimization",
    title: "Automation that keeps improving as you grow.",
    text: "We continuously measure, refine and extend your automation so every month delivers more output from the same team.",
    points: ["Performance reviews and tuning", "New automation opportunities", "Scaling as your volume grows"],
    steps: [],
    outcomes: [],
    blocks: ["overview", "cta"],
  },
];
