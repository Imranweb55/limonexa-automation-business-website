import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";

const logos = import.meta.glob("/src/assets/AI-logos/*.png", { eager: true, import: "default" });

const TOOLS = Object.entries(logos).map(([path, src]) => ({
  name: path.split("/").pop().replace(".png", ""),
  src,
}));

function IntegrationsRow() {
  return (
    <section className="bg-bg-primary px-5 sm:px-8 py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading
          align="center"
          eyebrow="Technology"
          title="Built on the tools you already trust."
          subtitle="We connect leading AI and automation platforms into one dependable system — and keep it running."
        />
        <Reveal delay={150}>
          <div className="relative mt-14 p-3 sm:p-4 border border-gold/30">
            <span className="absolute -top-px -left-px w-5 h-5 border-t-2 border-l-2 border-gold" />
            <span className="absolute -top-px -right-px w-5 h-5 border-t-2 border-r-2 border-gold" />
            <span className="absolute -bottom-px -left-px w-5 h-5 border-b-2 border-l-2 border-gold" />
            <span className="absolute -bottom-px -right-px w-5 h-5 border-b-2 border-r-2 border-gold" />
            <ul className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-px bg-white/10">
              {TOOLS.map((t) => (
                <li key={t.name} className="group bg-bg-secondary aspect-[3/2] flex items-center justify-center p-5">
                  <img
                    src={t.src}
                    alt={t.name}
                    loading="lazy"
                    className="max-h-9 w-auto object-contain opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <p className="mt-6 text-center text-[13px] text-text-muted">
          Plus WhatsApp, Zoho, HubSpot, Google Workspace, Slack, Razorpay and many more.
        </p>
      </div>
    </section>
  );
}

export default IntegrationsRow;
