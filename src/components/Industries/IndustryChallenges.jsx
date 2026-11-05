import Reveal from "../Home/sections/shared/Reveal";
import SectionHeading from "../Home/sections/shared/SectionHeading";

function IndustryChallenges({ tab }) {
  return (
    <section className="theme-light py-16 sm:py-24 px-5 sm:px-8 bg-bg-primary">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="The challenge"
            title={`What ${tab.label.toLowerCase()} businesses struggle with.`}
          />
        </div>
        <ol className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10">
          {tab.challenges.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <li className="flex gap-6 sm:gap-10 py-7 px-2">
                <span className="font-serif text-[34px] leading-none text-gold w-12 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-[24px] sm:text-[27px] text-text-primary">{c.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-text-secondary max-w-xl">{c.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default IndustryChallenges;
