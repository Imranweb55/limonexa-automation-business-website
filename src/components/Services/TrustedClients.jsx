import Reveal from "../Home/sections/shared/Reveal";
import ImagePlaceholder from "../Home/sections/shared/ImagePlaceholder";

// Six client-logo slots: client-1 ... client-6 (see images README).
const SLOTS = [1, 2, 3, 4, 5, 6];

function TrustedClients() {
  return (
    <section className="theme-light py-14 sm:py-20 px-5 sm:px-8 bg-bg-primary border-t border-white/5">
      <div className="max-w-[1400px] mx-auto text-center">
        <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-text-muted">
          Trusted by growing businesses
        </p>
        <Reveal delay={100}>
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {SLOTS.map((n) => (
              <li key={n}>
                <ImagePlaceholder name={`client-${n}`} className="h-20 rounded-sm" />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default TrustedClients;
