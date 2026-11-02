import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";

const logos = import.meta.glob("/src/assets/AI-logos/*.png", { eager: true, import: "default" });

const TOOLS = Object.entries(logos).map(([path, src]) => ({
  name: path.split("/").pop().replace(".png", ""),
  src,
}));

function IntegrationsRow() {
  return (
    <section className="py-20 sm:py-24 px-5 sm:px-8 bg-bg-secondary border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading
          align="center"

          eyebrow="Technology"
          title="Built on the tools you already trust."
          subtitle="We connect leading AI and automation platforms into one dependable system."
        />
        <Reveal delay={150}>
          <ul className="mt-14 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-px bg-white/10 border border-white/10">
            {TOOLS.map((t) => (
              <li key={t.name} className="bg-bg-secondary aspect-[3/2] flex items-center justify-center p-5">
                <img
                  src={t.src}
                  alt={t.name}
                  loading="lazy"
                  className="max-h-9 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-500"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default IntegrationsRow;
