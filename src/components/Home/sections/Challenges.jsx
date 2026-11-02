import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";

const CHALLENGES = [
  { title: "Manual data entry", text: "Hours lost re-typing the same information across spreadsheets and systems." },
  { title: "Disconnected tools", text: "Sales, support and finance each live in their own silo with no shared view." },
  { title: "Slow follow-ups", text: "Leads go cold while your team is busy with administrative tasks." },
  { title: "No real-time insight", text: "Decisions are made on last month's numbers instead of today's." },
  { title: "Error-prone processes", text: "Copy-paste mistakes quietly cost money and damage client trust." },
];

function Challenges() {
  return (
    <section className="theme-light py-20 sm:py-28 px-5 sm:px-8 bg-bg-secondary border-t border-white/5">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
          <SectionHeading

            eyebrow="The challenge"
            title="Where growing businesses lose time and money."
            subtitle="These problems rarely look urgent on their own. Together, they are the ceiling on your growth."
          />
        </div>
        <ol className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10">
          {CHALLENGES.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <li className="group flex gap-6 sm:gap-10 py-7 transition-colors hover:bg-white/[0.02] px-2">
                <span className="font-serif text-[34px] leading-none text-gold/70 w-12 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-[24px] sm:text-[28px] text-text-primary">{c.title}</h3>
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

export default Challenges;
