import Reveal from "../Home/sections/shared/Reveal";
import SectionHeading from "../Home/sections/shared/SectionHeading";
import ImagePlaceholder from "../Home/sections/shared/ImagePlaceholder";

function BlogGrid({ tab }) {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 bg-bg-secondary border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading eyebrow="Latest articles" title="Fresh thinking, every month." />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tab.posts.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 100}>
              <article className="group h-full bg-bg-primary/60 border border-white/10 hover:border-gold/40 transition-colors duration-500">
                <ImagePlaceholder
                  name={`res-blog-${i + 1}`}
                  className="aspect-[3/2] border-0 border-b border-white/10"
                />
                <div className="p-7">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold">{p.category}</p>
                  <h3 className="mt-3 font-serif text-[23px] leading-snug text-text-primary">{p.title}</h3>
                  <p className="mt-4 text-[12.5px] text-text-muted">
                    {p.date} · {p.read}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogGrid;
