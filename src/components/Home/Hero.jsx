import { useEffect, useRef } from "react";
import {
  Cpu,
  Layers,
  Share2,
  Zap,
  TrendingUp,
  Leaf,
  Cloud,
  Building2,
} from "lucide-react";
import heroVideo from "../../assets/videos/hero.mp4";
import heroPoster from "../../assets/videos/hero-poster.jpg";

const BADGES = [
  { label: "Smart Automation", icon: Cpu },
  { label: "Integrated Systems", icon: Layers },
  { label: "Real Results", icon: Share2 },
];

const TRUSTED_BY = [
  { label: "TechGrow", icon: Zap },
  { label: "Finova", icon: TrendingUp },
  { label: "Greenmark", icon: Leaf },
  { label: "Greenmark", icon: Cpu },
  { label: "CloudNest", icon: Cloud },
  { label: "Urban Works", icon: Building2 },
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
          (1 + progress * 0.15).toFixed(4),
        );
        section.style.setProperty(
          "--graphic-rotate",
          `${(progress * 12).toFixed(2)}deg`,
        );
        section.style.setProperty(
          "--content-shift",
          `${(progress * -36).toFixed(2)}px`,
        );
        section.style.setProperty(
          "--content-fade",
          (1 - progress * 1.35).toFixed(4),
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
      className="relative min-h-svh flex flex-col justify-center pt-[84px] overflow-hidden bg-black"
      style={{
        "--scroll-progress": 0,
        "--graphic-scale": 1,
        "--graphic-rotate": "0deg",
        "--content-shift": "0px",
        "--content-fade": 1,
      }}
    >
      {/* Main content */}
      <div className="relative z-1 w-full max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-8 py-8 pb-6 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] items-center gap-4 xl:gap-2 max-[1080px]:text-center">
        {/* LEFT CONTENT */}
        <div className="hero-content transition-[transform,opacity] duration-150 ease-linear translate-y-[var(--content-shift)] opacity-[var(--content-fade)]">
          <h1 className="text-[clamp(42px,5vw,68px)] leading-[1.08] font-bold text-text-primary tracking-tight mb-5">
            AI-Powered
            <br />
            Business{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-blue-pale bg-clip-text text-transparent">
              Automation
            </span>
          </h1>

          <p className="text-[20px] md:text-[22px] font-medium text-text-primary/90 mb-5 max-w-[540px] max-[1080px]:mx-auto">
            Automate Your Business. Grow Without the Busywork.
          </p>

          <p className="text-[17.5px] md:text-[18.5px] leading-relaxed text-text-secondary max-w-[540px] mb-9 max-[1080px]:mx-auto">
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

          {/* Badges with icons instead of dots */}
          <div className="flex flex-wrap gap-x-8 gap-y-3.5 max-[1080px]:justify-center">
            {BADGES.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2.5 text-[15px] sm:text-[16px] font-medium text-text-secondary"
              >
                <Icon
                  className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-brand-blue-light shrink-0"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — PURE ANIMATION (no card, no borders), fully absolute + scaled so its visual size never affects layout or other containers */}
        <div className="relative flex items-center justify-center min-h-[360px] sm:min-h-[440px] lg:min-h-[560px] xl:min-h-[620px] max-[1080px]:order-first max-[1080px]:mb-4">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="scale-[1.35] sm:scale-[1.4] lg:scale-[1.55] xl:scale-[1.65] 2xl:scale-[1.75] transition-transform duration-300">
              <div className="relative w-full max-w-[700px] scale-[var(--graphic-scale)] rotate-[var(--graphic-rotate)] transition-transform duration-200 ease-linear will-change-transform">
                {/* Animated blue glow surrounding the video — the only source of color here */}
                {/* <div className="absolute inset-[-22%] rounded-full bg-[radial-gradient(circle,rgba(7,100,192,0.45)_0%,rgba(7,100,192,0.18)_45%,transparent_72%)] blur-[80px] pointer-events-none animate-pulse [animation-duration:4s]" />
                <div className="absolute inset-[-8%] rounded-full bg-[radial-gradient(circle,rgba(7,100,192,0.3)_0%,transparent_65%)] blur-[40px] pointer-events-none" /> */}

                {/* Video with a wider, softer mask so the inner AI-graphic animation fills the frame and reads large — no rectangular edge or border ever visible */}
                <video
                  ref={videoRef}
                  className="relative w-full h-auto select-none pointer-events-none border-0 outline-none
                             mix-blend-screen
                             [mask-image:radial-gradient(ellipse_66%_66%_at_center,black_38%,rgba(0,0,0,0.55)_58%,transparent_82%)]
                             [-webkit-mask-image:radial-gradient(ellipse_66%_66%_at_center,black_38%,rgba(0,0,0,0.55)_58%,transparent_82%)]"
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
        </div>
      </div>

      {/* Trusted by — line 1: heading, line 2: icon + logo row (no divider line above) */}
      <div className="relative z-1 px-5 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-col items-center justify-center gap-3.5 sm:gap-4">
        <span className="text-[15px] sm:text-[16px] md:text-[17px] font-medium text-brand-blue-pale/85 text-center tracking-wide">
          Trusted by forward-thinking businesses
        </span>
        <div className="flex items-center gap-x-9 sm:gap-x-12 lg:gap-x-16 gap-y-5 flex-wrap justify-center w-full max-w-[1200px]">
          {TRUSTED_BY.map(({ label, icon: Icon }, idx) => (
            <span
              key={`${label}-${idx}`}
              className="inline-flex items-center gap-2.5 text-[16px] sm:text-[18px] md:text-[19px] font-semibold text-white tracking-wide opacity-90 hover:opacity-100 transition-opacity duration-200"
            >
              <Icon
                className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue-light shrink-0"
                strokeWidth={2}
                aria-hidden="true"
              />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
