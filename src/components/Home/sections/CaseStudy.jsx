import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import ImagePlaceholder from "./shared/ImagePlaceholder";

// Sample copy — replace with a real client story.
function CaseStudy() {
  return (
    <section className="theme-light py-20 sm:py-28 px-5 sm:px-8 bg-bg-primary border-t border-white/5">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <ImagePlaceholder name="case-study" className="aspect-[7/5] rounded-sm" />
        </Reveal>
        <div>
          <SectionHeading

            eyebrow="Featured case study"
            title="From 6 hours of daily admin to fully automated."
          />
          <Reveal delay={150}>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="border-l border-red-400/40 pl-5">
                <p className="text-[11px] tracking-[0.2em] uppercase text-text-muted">Before</p>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                  Leads copied by hand into spreadsheets; follow-ups sent a day late.
                </p>
              </div>
              <div className="border-l border-gold pl-5">
                <p className="text-[11px] tracking-[0.2em] uppercase text-gold">After</p>
                <p className="mt-2 text-[15px] leading-relaxed text-text-primary">
                  Instant routing and follow-up, with a live dashboard for the team.
                </p>
              </div>
            </div>
            <p className="mt-8 font-serif text-[24px] italic leading-snug text-gold-soft">
              “Our team finally has time for the work that actually grows the business.”
            </p>
            <p className="mt-2 text-[13px] text-text-muted">— Client name, Company</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default CaseStudy;
