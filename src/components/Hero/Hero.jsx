import { useEffect, useRef } from 'react';
import AutomationGraphic from './AutomationGraphic';

const BADGES = ['Smart Automation', 'Integrated Systems', 'Real Results'];
const TRUSTED_BY = ['TechGrow', 'Finova', 'Greenmark', 'CloudNest', 'Urban Works'];

function Hero() {
  const sectionRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const section = sectionRef.current;
    if (!section || prefersReducedMotion) return;

    const handleScroll = () => {
      if (rafRef.current) return; // throttle to one update per frame
      rafRef.current = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height || 1;
        // 0 when section top is at viewport top, 1 when fully scrolled past
        const progress = Math.min(
          Math.max(-rect.top / sectionHeight, 0),
          1
        );

        section.style.setProperty('--scroll-progress', progress.toFixed(4));
        section.style.setProperty('--graphic-scale', (1 + progress * 0.18).toFixed(4));
        section.style.setProperty('--graphic-rotate', `${(progress * 14).toFixed(2)}deg`);
        section.style.setProperty('--content-shift', `${(progress * -40).toFixed(2)}px`);
        section.style.setProperty('--content-fade', (1 - progress * 1.4).toFixed(4));

        rafRef.current = null;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-svh flex flex-col justify-center pt-[84px] overflow-hidden bg-[radial-gradient(120%_120%_at_80%_10%,rgba(7,100,192,0.22)_0%,rgba(5,11,22,0)_55%),linear-gradient(180deg,#050b16_0%,#030c19_100%)]"
      style={{ '--scroll-progress': 0, '--graphic-scale': 1, '--graphic-rotate': '0deg', '--content-shift': '0px', '--content-fade': 1 }}
    >
      {/*
        VIDEO_SLOT:
        When the hero video is available, drop it at
        src/assets/videos/hero.mp4 (+ optional hero-poster.jpg) and swap
        <AutomationGraphic /> below for something like:

        <video
          className="absolute inset-0 w-full h-full object-cover scale-[var(--graphic-scale)]"
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
        />

        The same --scroll-progress / --graphic-scale / --graphic-rotate
        CSS variables set above already drive the scroll animation, so the
        video can reuse them directly instead of the node graphic.
      */}

      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(60%_50%_at_85%_30%,rgba(7,100,192,0.25)_0%,transparent_70%)]" />

      <div className="relative z-1 w-full max-w-7xl mx-auto px-8 py-16 pb-12 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-10 max-[1080px]:text-center max-[640px]:px-5 max-[640px]:py-9 max-[640px]:pb-8">
        <div
          className="hero-content transition-[transform,opacity] duration-150 ease-linear translate-y-[var(--content-shift)] opacity-[var(--content-fade)]"
        >
          <span className="inline-flex items-center px-4 py-[7px] rounded-full border border-brand-blue-pale/28 bg-brand-blue/12 text-brand-blue-pale text-[12.5px] font-semibold tracking-wide uppercase mb-[22px]">
            AI-Powered Business Automation
          </span>

          <h1 className="text-[clamp(36px,4.4vw,58px)] leading-[1.1] font-bold text-text-primary tracking-tight mb-[22px]">
            Automate Your Business.
            <br />
            <span className="bg-gradient-to-r from-brand-blue to-brand-blue-pale bg-clip-text text-transparent">
              Accelerate Your Growth.
            </span>
          </h1>

          <p className="text-[17px] leading-relaxed text-text-secondary max-w-[540px] mb-[34px] max-[1080px]:mx-auto">
            Limonexa helps businesses eliminate repetitive tasks, streamline
            operations, and scale faster with intelligent automation —
            connecting your tools, your data, and your teams into one
            effortless system.
          </p>

          <div className="flex items-center gap-4 flex-wrap mb-9 max-[1080px]:justify-center max-[640px]:flex-col">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center px-7 py-[14px] rounded-[9px] text-[15px] font-semibold tracking-wide bg-brand-blue hover:bg-brand-blue-hover text-white shadow-[0_8px_26px_rgba(7,100,192,0.4)] hover:shadow-[0_10px_32px_rgba(7,100,192,0.5)] hover:-translate-y-0.5 transition-all duration-200 max-[640px]:w-full"
            >
              Get Free Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-[14px] rounded-[9px] text-[15px] font-semibold tracking-wide bg-transparent text-text-primary border border-white/35 hover:border-brand-blue-pale hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-200 max-[640px]:w-full"
            >
              Explore Automation
            </a>
          </div>

          <div className="flex flex-wrap gap-[22px] max-[1080px]:justify-center">
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-text-secondary"
              >
                <span className="w-[7px] h-[7px] rounded-full bg-brand-blue-light shadow-[0_0_8px_rgba(59,147,239,0.35)]" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center relative max-[1080px]:order-first max-[1080px]:mb-2">
          <AutomationGraphic />
        </div>
      </div>

      <div className="relative z-1 border-t border-brand-blue-pale/10 px-8 py-[22px] flex items-center justify-center gap-7 flex-wrap max-[640px]:px-5 max-[640px]:py-[18px] max-[640px]:gap-3.5">
        <span className="text-[13px] text-text-muted whitespace-nowrap">
          Trusted by forward-thinking businesses
        </span>
        <div className="flex items-center gap-8 flex-wrap justify-center max-[640px]:gap-[18px]">
          {TRUSTED_BY.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold text-text-muted tracking-wide opacity-75 hover:opacity-100 hover:text-text-secondary transition-colors duration-200"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
