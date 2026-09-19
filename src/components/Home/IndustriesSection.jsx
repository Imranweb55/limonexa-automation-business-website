import {
  Home,
  ShoppingCart,
  HeartPulse,
  Landmark,
  GraduationCap,
  Truck,
  Factory,
  Briefcase,
} from "lucide-react";

const INDUSTRIES = [
  { icon: Home, label: "Real Estate" },
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Landmark, label: "Finance" },
  { icon: GraduationCap, label: "Education" },
  { icon: Truck, label: "Logistics" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Briefcase, label: "Agencies" },
];

function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative py-16 sm:py-20 px-5 sm:px-6 lg:px-8 border-t border-white/5"
    >
      <div className="max-w-[1600px] mx-auto text-center">
        <span className="inline-block text-[13px] font-semibold tracking-[0.1em] text-brand-blue-pale uppercase mb-3">
          Automation For Every Industry
        </span>
        <h2 className="text-[28px] sm:text-[34px] font-bold text-text-primary mb-10 leading-tight">
          Smart Automation For Every Industry
        </h2>

        <div className="flex flex-wrap items-start justify-center gap-x-10 sm:gap-x-14 gap-y-8">
          {INDUSTRIES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center w-[90px] text-center"
            >
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-bg-secondary border border-brand-blue-pale/20 text-brand-blue-light mb-3">
                <Icon className="w-6 h-6" strokeWidth={1.8} />
              </span>
              <p className="text-[13.5px] font-medium text-text-primary/90">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
