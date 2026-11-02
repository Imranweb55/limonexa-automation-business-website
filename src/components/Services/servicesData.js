// Content for the Services page sub-tabs.
// `blocks` decides which components appear (and so how much the tab scrolls):
//   overview -> intro + image            features -> 3 capability cards
//   clients  -> trusted-by logo strip    cta      -> short consultation band
// Image slots: svc-<key>-main and svc-<key>-1..3 (see src/assets/images/services/README.txt)

export const SERVICE_TABS = [
  {
    key: "ai",
    label: "AI Automation",
    title: "AI automation that works while you sleep.",
    text: "We replace repetitive manual work with intelligent workflows — qualifying leads, answering customers and keeping your data in sync without anyone lifting a finger.",
    points: ["Lead qualification and routing", "AI chat and WhatsApp assistants", "Document and data extraction"],
    features: [
      { title: "Smart lead handling", text: "Every enquiry scored, routed and followed up within seconds." },
      { title: "Conversational assistants", text: "Natural, on-brand replies across chat, email and WhatsApp." },
      { title: "Document intelligence", text: "Invoices, forms and emails read and filed automatically." },
    ],
    blocks: ["overview", "features", "clients"],
  },
  {
    key: "web",
    label: "Web & App Development",
    title: "Websites and apps built to convert.",
    text: "Fast, secure, beautifully designed websites and applications that represent your brand and connect directly to your business systems.",
    points: ["Corporate and e-commerce websites", "Custom web applications", "Mobile-friendly, SEO-ready builds"],
    features: [
      { title: "Brand-led design", text: "A distinctive, professional look that builds trust at first glance." },
      { title: "Performance first", text: "Fast loading and reliable on every device." },
      { title: "Connected backends", text: "Forms, payments and dashboards wired into your workflow." },
    ],
    blocks: ["overview", "features"],
  },
  {
    key: "custom",
    label: "Custom Solutions",
    title: "Software shaped around your process.",
    text: "When off-the-shelf tools do not fit, we design and build bespoke systems that match exactly how your team works.",
    points: ["Internal tools and portals", "Custom CRM and ERP modules", "Tailored reporting dashboards"],
    features: [],
    blocks: ["overview", "cta"],
  },
  {
    key: "cloud",
    label: "Cloud & Integration",
    title: "Every system, finally speaking to each other.",
    text: "We connect your CRM, finance, messaging and cloud platforms through secure integrations so information flows once, everywhere.",
    points: ["API and webhook integrations", "Cloud migration and hosting", "Secure data synchronisation"],
    features: [
      { title: "Seamless connections", text: "Your existing tools joined without replacing them." },
      { title: "Secure by design", text: "Access controls and monitoring built in from day one." },
      { title: "Scalable hosting", text: "Infrastructure that grows with your business." },
    ],
    blocks: ["overview", "features", "cta"],
  },
  {
    key: "consulting",
    label: "Consulting & Strategy",
    title: "A clear roadmap before a single line of code.",
    text: "We audit your operations, identify the highest-value opportunities and give you a practical, prioritised automation plan.",
    points: ["Process and workflow audit", "ROI-ranked automation roadmap", "Technology selection advice"],
    features: [],
    blocks: ["overview"],
  },
];
