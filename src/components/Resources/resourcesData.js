// Content for the Resources page (chosen from the navbar Resources dropdown).
// `blocks` lists the components shown, in order:
//   header | blogFeatured | blogGrid | newsletter | caseHighlight | caseCards |
//   caseResults | guidesGrid | guideSteps | faqs | cta
// Image slots: res-blog-featured, res-blog-1..6, res-case-1..3, res-guide-1..4
// (see src/assets/images/resources/README.txt). All text is sample copy.

export const RESOURCE_TABS = [
  {
    key: "blog",
    label: "Blog",
    title: "Ideas on automation, AI and growing smarter.",
    text: "Practical articles from the Limonexa team on automating sales, support, finance and operations.",
    featured: {
      category: "Automation",
      title: "5 business processes every company should automate first",
      text: "Where the quickest wins are hiding — and how to automate them without disrupting your team.",
      date: "12 Oct 2026",
      read: "6 min read",
    },
    posts: [
      { category: "WhatsApp", title: "WhatsApp automation: a beginner's guide", date: "03 Oct 2026", read: "5 min read" },
      { category: "CRM", title: "How to connect your CRM to every tool you use", date: "26 Sep 2026", read: "7 min read" },
      { category: "AI", title: "AI assistants for customer support, explained", date: "18 Sep 2026", read: "6 min read" },
      { category: "Finance", title: "Automating invoices and payment reminders", date: "09 Sep 2026", read: "4 min read" },
      { category: "Strategy", title: "How to calculate the ROI of automation", date: "01 Sep 2026", read: "8 min read" },
      { category: "Operations", title: "Mapping a workflow before you automate it", date: "22 Aug 2026", read: "5 min read" },
    ],
    blocks: ["header", "blogFeatured", "blogGrid", "newsletter"],
  },
  {
    key: "cases",
    label: "Case Studies",
    title: "Real businesses. Measurable results.",
    text: "See how companies like yours replaced manual work with automation that pays for itself.",
    cases: [
      { industry: "Real Estate", title: "Instant lead follow-up for a property agency", result: "3x", resultLabel: "faster response", text: "Enquiries now qualified and answered on WhatsApp within seconds." },
      { industry: "Healthcare", title: "Fewer missed appointments for a clinic group", result: "40%", resultLabel: "fewer no-shows", text: "Automatic reminders and rebooking replaced manual phone calls." },
      { industry: "E-commerce", title: "Orders and stock synced across channels", result: "60%", resultLabel: "faster fulfilment", text: "Orders flow from store to shipping and invoicing automatically." },
    ],
    outcomes: [
      { value: 70, suffix: "%", label: "Average time saved" },
      { value: 60, suffix: "%", label: "Average cost reduction" },
      { value: 3, suffix: "x", label: "Team productivity" },
    ],
    cta: { title: "Want results like these?", text: "Tell us about your business and we will show you where automation fits." },
    blocks: ["header", "caseHighlight", "caseCards", "caseResults", "cta"],
  },
  {
    key: "guides",
    label: "Guides & Ebooks",
    title: "Free guides to help you automate with confidence.",
    text: "Step-by-step playbooks written by our team. Request a guide and we will send it to you.",
    guides: [
      { title: "The Business Automation Starter Guide", text: "Find, rank and plan your first automations." },
      { title: "WhatsApp Automation Playbook", text: "Templates and flows for sales and support." },
      { title: "Choosing the Right CRM Workflow", text: "Map your pipeline before you buy any tool." },
      { title: "AI Assistants for Customer Support", text: "What to automate, and where humans still matter." },
    ],
    steps: [
      { title: "Request", text: "Choose the guide you need and send us a quick note." },
      { title: "Read", text: "Follow the practical steps and checklists at your own pace." },
      { title: "Apply", text: "Book a free call and we will help you put it into action." },
    ],
    cta: { title: "Prefer a guided walk-through?", text: "Our team can review your processes and build your roadmap with you." },
    blocks: ["header", "guidesGrid", "guideSteps", "cta"],
  },
  {
    key: "faqs",
    label: "FAQs",
    title: "Answers to the questions we hear most.",
    text: "Everything about working with Limonexa — from first call to ongoing support.",
    faqCategories: ["General", "Pricing", "Technical", "Support"],
    faqs: [
      { cat: "General", q: "What does Limonexa do?", a: "We design and implement AI-powered business automation — connecting your tools and replacing repetitive manual work with reliable workflows." },
      { cat: "General", q: "Which businesses do you work with?", a: "Growing companies across manufacturing, healthcare, finance, retail, education and more." },
      { cat: "General", q: "How long does a typical project take?", a: "Most projects go live in 2–6 weeks depending on the workflows and integrations involved." },
      { cat: "Pricing", q: "How is pricing decided?", a: "Pricing depends on the scope of workflows and integrations. After a free consultation we give a clear, fixed proposal." },
      { cat: "Pricing", q: "Is the first consultation really free?", a: "Yes. We review your processes and recommend where automation will have the most impact, with no obligation." },
      { cat: "Technical", q: "Do I need to replace my existing tools?", a: "No. We connect the CRM, messaging, finance and other tools you already use." },
      { cat: "Technical", q: "Is my business data secure?", a: "Yes. We use strict access controls and only connect the systems your workflows need." },
      { cat: "Support", q: "What happens after launch?", a: "We monitor, support and continuously improve your automations so they keep delivering value." },
      { cat: "Support", q: "How do I contact support?", a: "Reach our team any time through the Contact page and we will respond within one working day." },
    ],
    cta: { title: "Still have questions?", text: "We are happy to talk it through — no pressure, no jargon." },
    blocks: ["header", "faqs", "cta"],
  },
];
