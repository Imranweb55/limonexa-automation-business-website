// Content for the Industries page (chosen from the navbar Industries dropdown).
// `blocks` lists the components shown, in order:
//   hero | challenges | solutions | workflow | results | cta
// Image slots per industry: ind-<key>-hero and ind-<key>-1..3
// (see src/assets/images/industries/README.txt). All text is sample copy.

export const INDUSTRY_TABS = [
  {
    key: "manufacturing",
    label: "Manufacturing",
    title: "Smarter factories, fewer interruptions.",
    text: "Automation that keeps production, inventory and quality reporting moving without constant manual follow-up.",
    challenges: [
      { title: "Unplanned downtime", text: "Breakdowns discovered late, with schedules thrown off." },
      { title: "Inventory blind spots", text: "Stock levels checked by hand and reordered too late." },
      { title: "Paper-based quality checks", text: "Inspection data re-typed and rarely analysed." },
    ],
    solutions: [
      { title: "Production tracking", text: "Live status of every line and order in one dashboard." },
      { title: "Inventory & supplier alerts", text: "Automatic reorder triggers and supplier notifications." },
      { title: "Maintenance scheduling", text: "Preventive service planned before machines fail." },
    ],
    workflow: ["Sensor / entry", "Rule check", "Alert team", "Schedule fix", "Report logged"],
    outcomes: [
      { value: 35, suffix: "%", label: "Less downtime" },
      { value: 50, suffix: "%", label: "Faster reporting" },
      { value: 25, suffix: "%", label: "Lower stock costs" },
    ],
    blocks: ["hero", "challenges", "solutions", "workflow", "results"],
  },
  {
    key: "healthcare",
    label: "Healthcare",
    title: "More time for patients, less for paperwork.",
    text: "Secure, reliable automation for appointments, follow-ups and records so clinics can focus on care.",
    challenges: [
      { title: "Missed appointments", text: "No-shows leave gaps in the schedule and lost revenue." },
      { title: "Admin overload", text: "Staff spend hours on forms, billing and records." },
      { title: "Fragmented patient data", text: "Information scattered across tools and files." },
    ],
    solutions: [
      { title: "Booking & reminders", text: "Online booking with automatic WhatsApp and SMS reminders." },
      { title: "Patient follow-up", text: "Post-visit check-ins and recall messages sent automatically." },
      { title: "Records & billing", text: "Documents filed and invoices generated without re-typing." },
    ],
    workflow: ["Patient books", "Confirmation sent", "Reminder", "Visit logged", "Follow-up sent"],
    outcomes: [],
    blocks: ["hero", "challenges", "solutions", "workflow", "cta"],
  },
  {
    key: "finance",
    label: "Finance & Banking",
    title: "Faster approvals with a clear audit trail.",
    text: "Compliant automation for onboarding, document checks and reporting that speeds up every client journey.",
    challenges: [
      { title: "Slow onboarding", text: "Manual document checks delay new clients for days." },
      { title: "Compliance pressure", text: "Reports and audit trails take hours to assemble." },
      { title: "Lead leakage", text: "Enquiries wait too long for a first response." },
    ],
    solutions: [
      { title: "KYC & document checks", text: "Documents read, verified and flagged automatically." },
      { title: "Loan & lead processing", text: "Applications scored and routed to the right advisor." },
      { title: "Compliance reporting", text: "Audit-ready reports generated on schedule." },
    ],
    workflow: null,
    outcomes: [
      { value: 70, suffix: "%", label: "Faster onboarding" },
      { value: 90, suffix: "%", label: "Report accuracy" },
      { value: 3, suffix: "x", label: "Advisor capacity" },
    ],
    blocks: ["hero", "challenges", "solutions", "results"],
  },
  {
    key: "retail",
    label: "Retail & E-commerce",
    title: "Turn every order into a smooth experience.",
    text: "Automation for orders, stock and customer conversations that keeps your store running day and night.",
    challenges: [
      { title: "Order processing delays", text: "Orders copied between platforms by hand." },
      { title: "Stock mismatches", text: "Overselling and out-of-stock surprises." },
      { title: "Abandoned carts", text: "Interested buyers leave and are never followed up." },
    ],
    solutions: [
      { title: "Order automation", text: "Orders flow from store to fulfilment and invoicing." },
      { title: "Live stock sync", text: "Inventory updated across every sales channel." },
      { title: "Customer chat bots", text: "Instant answers and order status on WhatsApp and web." },
    ],
    workflow: ["Order placed", "Payment verified", "Stock updated", "Shipped", "Customer notified"],
    outcomes: [
      { value: 60, suffix: "%", label: "Faster fulfilment" },
      { value: 20, suffix: "%", label: "Recovered carts" },
      { value: 24, suffix: "/7", label: "Customer replies" },
    ],
    blocks: ["hero", "solutions", "workflow", "results", "cta"],
  },
  {
    key: "education",
    label: "Education",
    title: "Smoother campuses, happier families.",
    text: "Automation for admissions, fees and communication so your team can focus on teaching and student success.",
    challenges: [
      { title: "Admission enquiry overload", text: "Hundreds of questions answered one by one." },
      { title: "Fee follow-ups", text: "Payment reminders sent manually and inconsistently." },
      { title: "Parent communication", text: "Updates scattered across calls, notes and chat groups." },
    ],
    solutions: [
      { title: "Admissions assistant", text: "Enquiries answered and applicants tracked automatically." },
      { title: "Fee reminders", text: "Scheduled reminders and receipts without staff effort." },
      { title: "Attendance & results", text: "Reports shared with parents the moment they are ready." },
    ],
    workflow: ["Enquiry received", "Auto reply", "Application tracked", "Fee reminder", "Welcome sent"],
    outcomes: [],
    blocks: ["hero", "challenges", "solutions", "workflow"],
  },
];
