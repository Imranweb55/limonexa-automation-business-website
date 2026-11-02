// Auto-detects images dropped into src/assets/images/home/.
// Name a file exactly like the keys below (e.g. about-main.webp) and the
// placeholder is replaced automatically — no code change needed.

const found = import.meta.glob(
  [
    "/src/assets/images/home/*.{jpg,jpeg,png,webp,avif}",
    "/src/assets/images/services/*.{jpg,jpeg,png,webp,avif}",
  ],
  { eager: true, import: "default" }
);

const byName = {};
for (const path in found) {
  const file = path.split("/").pop();
  byName[file.replace(/\.[^.]+$/, "")] = found[path];
}

export const IMAGE_SPECS = {
  "about-main": { label: "About — main image", size: "1200 x 1500", hint: "modern office, team collaboration" },
  "service-lead": { label: "Lead & Sales Automation", size: "1200 x 800", hint: "sales dashboard, CRM screen" },
  "service-whatsapp": { label: "WhatsApp Automation", size: "1200 x 800", hint: "smartphone messaging, customer chat" },
  "service-crm": { label: "CRM & Data Sync", size: "1200 x 800", hint: "analytics dashboard, data screen" },
  "service-finance": { label: "Invoice & Finance", size: "1200 x 800", hint: "accounting, invoices, calculator" },
  "service-support": { label: "Customer Support", size: "1200 x 800", hint: "support agent headset" },
  "service-workflow": { label: "Workflow & Reporting", size: "1200 x 800", hint: "business report, charts on laptop" },
  "industry-realestate": { label: "Real Estate", size: "900 x 1200", hint: "modern building, property" },
  "industry-ecommerce": { label: "E-commerce", size: "900 x 1200", hint: "online shopping, parcels" },
  "industry-healthcare": { label: "Healthcare", size: "900 x 1200", hint: "clinic, doctor, hospital" },
  "industry-finance": { label: "Finance", size: "900 x 1200", hint: "banking, finance district" },
  "industry-logistics": { label: "Logistics", size: "900 x 1200", hint: "warehouse, trucks, shipping" },
  "industry-education": { label: "Education", size: "900 x 1200", hint: "classroom, university" },
  "case-study": { label: "Featured case study", size: "1400 x 1000", hint: "business team in a meeting" },
  "testimonial-1": { label: "Client photo 1", size: "400 x 400", hint: "professional portrait" },
  "testimonial-2": { label: "Client photo 2", size: "400 x 400", hint: "professional portrait" },
  "testimonial-3": { label: "Client photo 3", size: "400 x 400", hint: "professional portrait" },
  "contact-bg": { label: "Contact — background", size: "1920 x 1080", hint: "city skyline at dusk, abstract office" },
  "workflow-bg": { label: "Workflow — background", size: "1920 x 1080", hint: "dark abstract network, circuitry" },
};

// Services page slots (images live in src/assets/images/services/).
for (const key of ["ai", "web", "custom", "cloud", "consulting"]) {
  IMAGE_SPECS[`svc-${key}-main`] = { label: `Service image (${key})`, size: "1200 x 900", hint: "" };
  for (const n of [1, 2, 3]) {
    IMAGE_SPECS[`svc-${key}-${n}`] = { label: `Service card ${n} (${key})`, size: "1200 x 800", hint: "" };
  }
}
for (const n of [1, 2, 3, 4, 5, 6]) {
  IMAGE_SPECS[`client-${n}`] = { label: `Client logo ${n}`, size: "400 x 160", hint: "" };
}

export function getImage(name) {
  return byName[name] || null;
}
