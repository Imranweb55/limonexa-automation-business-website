import { useEffect, useRef } from "react";
import heroVideo from "../../assets/videos/hero.mp4";
import heroPoster from "../../assets/videos/hero-poster.jpg";

const BADGES = ["Smart Automation", "Integrated Systems", "Real Results"];
const TRUSTED_BY = [
  "TechGrow",
  "Finova",
  "Greenmark",
  "CloudNest",
  "Urban Works",
];

function Hero() {
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const section = sectionRef.current;
    if (!section || prefersReducedMotion) return;

    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height || 1;
        const progress = Math.min(Math.max(-rect.top / sectionHeight, 0), 1);

        section.style.setProperty("--scroll-progress", progress.toFixed(4));
        section.style.setProperty(
          "--graphic-scale",
          (1 + progress * 0.18).toFixed(4),
        );
        section.style.setProperty(
          "--graphic-rotate",
          `${(progress * 14).toFixed(2)}deg`,
        );
        section.style.setProperty(
          "--content-shift",
          `${(progress * -40).toFixed(2)}px`,
        );
        section.style.setProperty(
          "--content-fade",
          (1 - progress * 1.4).toFixed(4),
        );

        rafRef.current = null;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-svh flex flex-col justify-center pt-[84px] overflow-hidden bg-[radial-gradient(120%_120%_at_80%_10%,rgba(7,100,192,0.22)_0%,rgba(5,11,22,0)_55%),linear-gradient(180deg,#050b16_0%,#030c19_100%)]"
      style={{
        "--scroll-progress": 0,
        "--graphic-scale": 1,
        "--graphic-rotate": "0deg",
        "--content-shift": "0px",
        "--content-fade": 1,
      }}
    >
      {/* Soft blue glow */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(55%_55%_at_85%_35%,rgba(7,100,192,0.28)_0%,transparent_70%)]" />

      {/* Main content - wider container + reduced side padding */}
      <div className="relative z-1 w-full max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-8 py-12 pb-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] items-center gap-6 xl:gap-4 max-[1080px]:text-center">
        {/* LEFT CONTENT */}
        <div className="hero-content transition-[transform,opacity] duration-150 ease-linear translate-y-[var(--content-shift)] opacity-[var(--content-fade)]">
          <h1 className="text-[clamp(40px,4.8vw,64px)] leading-[1.08] font-bold text-text-primary tracking-tight mb-5">
            AI-Powered
            <br />
            <span className="bg-gradient-to-r from-brand-blue to-brand-blue-pale bg-clip-text text-transparent">
              Business Automation
            </span>
          </h1>

          <p className="text-[20px] md:text-[22px] font-medium text-text-primary/90 mb-5 max-w-[540px] max-[1080px]:mx-auto">
            Automate Your Business. Grow Without the Busywork.
          </p>

          <p className="text-[16.5px] leading-relaxed text-text-secondary max-w-[520px] mb-9 max-[1080px]:mx-auto">
            We help businesses eliminate repetitive tasks, streamline processes
            and scale faster with intelligent automation.
          </p>

          <div className="flex items-center gap-4 flex-wrap mb-10 max-[1080px]:justify-center max-[640px]:flex-col">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center px-7 py-[15px] rounded-[9px] text-[15px] font-semibold tracking-wide bg-brand-blue hover:bg-brand-blue-hover text-white shadow-[0_8px_28px_rgba(7,100,192,0.45)] hover:shadow-[0_12px_36px_rgba(7,100,192,0.55)] hover:-translate-y-0.5 transition-all duration-200 max-[640px]:w-full"
            >
              FREE CONSULTATION
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-[15px] rounded-[9px] text-[15px] font-semibold tracking-wide bg-transparent text-text-primary border border-white/30 hover:border-brand-blue-pale hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-200 max-[640px]:w-full"
            >
              SEE HOW WE AUTOMATE
            </a>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-3 max-[1080px]:justify-center">
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2.5 text-[13.5px] font-medium text-text-secondary"
              >
                <span className="w-[7px] h-[7px] rounded-full bg-brand-blue-light shadow-[0_0_10px_rgba(59,147,239,0.45)]" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — VIDEO (no hard round mask, larger, natural animation) */}
        <div className="flex items-center justify-center relative max-[1080px]:order-first max-[1080px]:mb-4">
          <div className="relative w-full max-w-[720px] xl:max-w-[800px] 2xl:max-w-[860px] scale-[var(--graphic-scale)] rotate-[var(--graphic-rotate)] transition-transform duration-200 ease-linear will-change-transform">
            {/* Soft glow behind so it blends with background */}
            <div className="absolute inset-[-10%] rounded-full bg-[radial-gradient(circle,rgba(7,100,192,0.32)_0%,transparent_65%)] blur-3xl pointer-events-none" />

            <video
              ref={videoRef}
              className="relative w-full h-auto mix-blend-screen select-none pointer-events-none
                         [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_85%)]
                         [-webkit-mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_85%)]"
              src={heroVideo}
              poster={heroPoster}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Trusted by */}
      <div className="relative z-1 border-t border-brand-blue-pale/10 px-5 sm:px-6 lg:px-8 py-[18px] flex items-center justify-center gap-6 flex-wrap">
        <span className="text-[13px] text-text-muted whitespace-nowrap">
          Trusted by forward-thinking businesses
        </span>
        <div className="flex items-center gap-7 flex-wrap justify-center">
          {TRUSTED_BY.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold text-text-muted tracking-wide opacity-70 hover:opacity-100 hover:text-text-secondary transition-colors duration-200"
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
