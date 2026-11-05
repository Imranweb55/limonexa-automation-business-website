import { ArrowUpRight } from "lucide-react";
import Reveal from "../Home/sections/shared/Reveal";
import ImagePlaceholder from "../Home/sections/shared/ImagePlaceholder";

function BlogFeatured({ tab }) {
  const f = tab.featured;
  return (
    <section className="theme-light py-16 sm:py-24 px-5 sm:px-8 bg-bg-primary">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal>
          <ImagePlaceholder name="res-blog-featured" className="aspect-[7/4] rounded-sm" />
        </Reveal>
        <Reveal delay={150}>
          <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-gold">
            Featured · {f.category}
          </p>
          <h2 className="mt-4 font-serif text-[34px] sm:text-[44px] leading-[1.1] text-text-primary">{f.title}</h2>
          <p className="mt-5 text-[16px] leading-relaxed text-text-secondary">{f.text}</p>
          <p className="mt-5 text-[13px] text-text-muted">
            {f.date} · {f.read}
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-blue-pale hover:text-gold transition-colors"
          >
            Read article <ArrowUpRight className="w-4 h-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default BlogFeatured;
