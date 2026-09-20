import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Bot,
  Globe,
  Settings,
  Cloud,
  Workflow,
  LineChart,
  Cpu,
  TrendingUp,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  FileText,
  PlayCircle,
  BookOpen,
  HelpCircle,
} from "lucide-react";
import logo from "../../assets/logo/logo.png";

/* Placeholder path only — real AI logo assets to be added later. */
const AI_LOGOS = [
  "/src/assets/AI-logos/chatgpt.png",
  "/src/assets/AI-logos/gemini.png",
  "/src/assets/AI-logos/zapier.png",
  "/src/assets/AI-logos/claude.png",
  "/src/assets/AI-logos/perplexity.png",
  "/src/assets/AI-logos/grok.png",
  "/src/assets/AI-logos/n8n.png",
  "/src/assets/AI-logos/bling.png",
  "/src/assets/AI-logos/bardeen.png",
  "/src/assets/AI-logos/make.png",
  "/src/assets/AI-logos/kissflow.png",
  "/src/assets/AI-logos/vellum.png",
  "/src/assets/AI-logos/pabby.png",
  "/src/assets/AI-logos/devin.png",
  "/src/assets/AI-logos/aisdr.png",
];

/* Build vertical-carousel keyframes for N logos. Each logo gets a pause
   followed by a transition to the next. Works for any number of logos. */
const LOGO_SIZE = 24;
function buildCarouselKeyframes(count) {
  const stops = [];
  for (let i = 0; i < count; i++) {
    const holdStart = (i / count) * 100;
    const holdEnd = holdStart + 80 / count;
    const moveEnd = ((i + 1) / count) * 100;
    stops.push(
      `${holdStart.toFixed(2)}%, ${holdEnd.toFixed(2)}% { transform: translateY(${(-i * LOGO_SIZE).toFixed(2)}px); }`,
    );
    if (i < count - 1) {
      stops.push(
        `${moveEnd.toFixed(2)}% { transform: translateY(${(-(i + 1) * LOGO_SIZE).toFixed(2)}px); }`,
      );
    }
  }
  return stops.join("\n          ");
}
const carouselKeyframes = buildCarouselKeyframes(AI_LOGOS.length);

/* Top-level nav links. Items with a `menu` key render a hover dropdown
   using the same content shown in the reference design. */
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  {
    label: "Services",
    href: "#services",
    menu: [
      { label: "AI Automation", icon: Bot },
      { label: "Web & App Development", icon: Globe },
      { label: "Custom Solutions", icon: Settings },
      { label: "Cloud & Integration", icon: Cloud },
      { label: "Consulting & Strategy", icon: LineChart },
    ],
  },
  {
    label: "Solutions",
    href: "#solutions",
    menu: [
      { label: "Workflow Automation", icon: Workflow },
      { label: "Data & Analytics", icon: LineChart },
      { label: "AI Assistants", icon: Bot },
      { label: "Business Process Automation", icon: Cpu },
      { label: "Growth & Optimization", icon: TrendingUp },
    ],
  },
  {
    label: "Industries",
    href: "#industries",
    menu: [
      { label: "Manufacturing", icon: Factory },
      { label: "Healthcare", icon: HeartPulse },
      { label: "Finance & Banking", icon: Landmark },
      { label: "Retail & E-commerce", icon: ShoppingCart },
      { label: "Education", icon: GraduationCap },
    ],
  },
  { label: "About", href: "#about" },
  {
    label: "Resources",
    href: "#resources",
    menu: [
      { label: "Blog", icon: FileText },
      { label: "Case Studies", icon: PlayCircle },
      { label: "Guides & Ebooks", icon: BookOpen },
      { label: "FAQs", icon: HelpCircle },
    ],
  },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnter = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 flex items-center transition-[background-color,border-color,height,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "h-[72px] bg-bg-primary/85 backdrop-blur-md border-b border-brand-blue-pale/10 shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
          : "h-[84px] bg-transparent border-b border-transparent shadow-none"
      }`}
    >
      {/* Local styles for the AI-logo vertical carousel (kept scoped to Navbar only).
          Keyframes are generated from the logo count so any number of logos works. */}
      <style>{`
        @keyframes navbarAiLogoCarousel {
${carouselKeyframes}
        }
        .navbar-ai-logo-track {
          animation: navbarAiLogoCarousel ${AI_LOGOS.length * 1.6}s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>

      {/* Logo fixed-width on the left, nav + CTA grouped and pushed to the right */}
      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        <a href="#home" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Limonexa Business Automation"
            className="h-[56px] sm:h-[60px] lg:h-[140px] w-auto rounded-lg mix-blend-screen"
          />
        </a>

        {/* Right-aligned cluster: nav links start from the right, ending at the CTA button */}
        <div className="flex items-center gap-6 lg:gap-8">
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.menu && handleEnter(link.label)}
                onMouseLeave={() => link.menu && handleLeave()}
              >
                <a
                  href={link.href}
                  className={`relative flex items-center gap-1 py-1.5 text-[15px] font-medium whitespace-nowrap transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-gradient-to-r after:from-brand-blue after:to-brand-blue-pale after:rounded-full after:transition-[width] after:duration-300 ${
                    link.label === "Home"
                      ? "text-white after:w-full"
                      : "text-white/90 hover:text-white after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                  {link.menu && (
                    <ChevronDown
                      size={15}
                      strokeWidth={2.25}
                      className={`transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {link.menu && (
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      openDropdown === link.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1.5 pointer-events-none"
                    }`}
                  >
                    <div className="w-[260px] rounded-xl border border-brand-blue-pale/10 bg-bg-elevated shadow-[0_16px_40px_rgba(0,0,0,0.4)] p-2.5">
                      <div className="flex items-center gap-1 px-2 pt-1 pb-2 text-[13px] font-semibold text-text-primary">
                        {link.label}
                        <ChevronDown size={13} strokeWidth={2.25} />
                      </div>
                      <ul className="flex flex-col gap-0.5">
                        {link.menu.map((item) => {
                          const Icon = item.icon;
                          return (
                            <li key={item.label}>
                              <a
                                href="#"
                                className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-[13.5px] text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
                              >
                                <Icon
                                  size={15}
                                  strokeWidth={2}
                                  className="text-brand-blue-light shrink-0"
                                />
                                {item.label}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {/* AI Powered pill — vertical carousel of AI logos, no background circle */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-brand-blue-pale/25 bg-white/5 text-brand-blue-light text-[13px] font-medium whitespace-nowrap">
              <span className="relative w-[24px] h-[24px] overflow-hidden shrink-0">
                <span className="navbar-ai-logo-track flex flex-col">
                  {AI_LOGOS.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="w-[24px] h-[24px] object-contain shrink-0"
                    />
                  ))}
                </span>
              </span>
              AI Powered
            </div>
          </div>

          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer p-0"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-full bg-text-primary rounded-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-text-primary rounded-full transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-text-primary rounded-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-[84px] left-0 right-0 bg-bg-primary/97 backdrop-blur-md border-b border-brand-blue-pale/10 flex-col px-6 gap-1 overflow-y-auto opacity-0 transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen
            ? "flex max-h-[70vh] opacity-100 pt-4 pb-5"
            : "max-h-0 hidden"
        }`}
      >
        {NAV_LINKS.map((link) =>
          link.menu ? (
            <div
              key={link.label}
              className="border-b border-brand-blue-pale/10"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between text-white/90 text-[15px] font-medium py-3 px-1 bg-transparent border-none cursor-pointer"
                onClick={() =>
                  setOpenMobileGroup((v) =>
                    v === link.label ? null : link.label,
                  )
                }
                aria-expanded={openMobileGroup === link.label}
              >
                {link.label}
                <ChevronDown
                  size={16}
                  strokeWidth={2.25}
                  className={`transition-transform duration-200 ${
                    openMobileGroup === link.label ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  openMobileGroup === link.label ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <div className="flex flex-col gap-0.5 pb-2.5 pl-2">
                  {link.menu.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href="#"
                        className="flex items-center gap-2.5 text-text-secondary hover:text-white text-[14px] py-2"
                        onClick={() => {
                          setMenuOpen(false);
                          setOpenMobileGroup(null);
                        }}
                      >
                        <Icon
                          size={15}
                          strokeWidth={2}
                          className="text-brand-blue-light shrink-0"
                        />
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <a
              key={link.label}
              href={link.href}
              className="text-white/90 no-underline text-[15px] font-medium py-3 px-1 border-b border-brand-blue-pale/10"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ),
        )}
      </div>
    </header>
  );
}

export default Navbar;
