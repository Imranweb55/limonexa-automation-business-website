import { Phone, Mail, MapPin, ArrowUpRight, ArrowUp } from "lucide-react";
import logo from "../../assets/logo/logo-without-bg.png";

/* lucide-react no longer ships brand/logo icons, so these four
   social glyphs are simple inline SVGs kept in the same 24x24,
   currentColor style as the rest of the icon set. */
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M14 9h2V6h-2c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9.5c0-.28.22-.5.5-.5H14z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="1.6" />
      <path
        d="M8 11v5M8 8.2v.1M12 16v-3.2c0-1.2.8-1.9 1.8-1.9 1 0 1.7.8 1.7 2V16"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.5" strokeWidth="1.6" />
      <circle cx="16.5" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="3.5" y="6.5" width="17" height="11" rx="3" strokeWidth="1.6" />
      <path d="M10.5 10l4 2-4 2v-4z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const COMPANY_LINKS = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  { label: "AI Automation", href: "#services/ai" },
  { label: "Web & App Development", href: "#services/web" },
  { label: "Custom Solutions", href: "#services/custom" },
  { label: "Cloud & Integration", href: "#services/cloud" },
  { label: "Consulting & Strategy", href: "#services/consulting" },
];

const INDUSTRY_LINKS = [
  { label: "Manufacturing", href: "#industries/manufacturing" },
  { label: "Healthcare", href: "#industries/healthcare" },
  { label: "Finance & Banking", href: "#industries/finance" },
  { label: "Retail & E-commerce", href: "#industries/retail" },
  { label: "Education", href: "#industries/education" },
];

const SOCIALS = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
];

function LinkColumn({ index, title, links }) {
  return (
    <div className="group/col relative pl-6 border-l border-white/10 hover:border-gold/60 transition-colors duration-500">
      <span className="font-serif italic text-[15px] text-gold">{index}</span>
      <h4 className="font-serif text-[24px] leading-tight text-white mt-1 mb-6">
        {title}
      </h4>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="group flex items-center justify-between gap-3 py-2 pr-1 text-[14.5px] text-text-muted border-b border-white/[0.06] hover:text-white hover:border-gold/40 transition-colors duration-300"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                {link.label}
              </span>
              <ArrowUpRight
                className="w-3.5 h-3.5 text-gold opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                strokeWidth={2}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-bg-primary border-t border-gold/40">
      {/* soft gold glow along the top edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gold/[0.07] to-transparent"
      />

      {/* Call-to-action band */}
      <div className="relative px-5 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="max-w-2xl">
            <p className="text-[12px] tracking-[0.3em] uppercase text-gold mb-4">
              Let&apos;s work together
            </p>
            <h3 className="font-serif text-[34px] sm:text-[44px] leading-[1.1] text-white">
              Ready to put your business
              <span className="text-gold-soft italic"> on autopilot?</span>
            </h3>
          </div>
          <a
            href="#consultation"
            className="group inline-flex items-center gap-3 self-start lg:self-auto px-7 py-4 border border-gold text-gold hover:bg-gold hover:text-bg-primary text-[14px] font-semibold tracking-wide transition-colors duration-300"
          >
            Book a free consultation
            <ArrowUpRight
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </a>
        </div>
      </div>

      {/* Main columns */}
      <div className="relative px-5 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <a href="#" className="inline-flex items-center mb-6">
              <img
                src={logo}
                alt="Limonexa Business Automation"
                className="h-[56px] w-auto mix-blend-screen"
              />
            </a>
            <p className="text-[14.5px] leading-relaxed text-text-muted mb-7 max-w-[340px]">
              We help businesses automate processes, eliminate repetitive tasks
              and scale faster with intelligent, dependable automation.
            </p>

            <ul className="space-y-3.5 mb-8">
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-[14px] text-text-muted hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-gold shrink-0" strokeWidth={1.8} />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@limonexa.com"
                  className="flex items-center gap-3 text-[14px] text-text-muted hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 text-gold shrink-0" strokeWidth={1.8} />
                  hello@limonexa.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-text-muted">
                <MapPin className="w-4 h-4 text-gold shrink-0" strokeWidth={1.8} />
                Chennai, Tamil Nadu, India
              </li>
            </ul>

            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-text-secondary hover:text-bg-primary hover:bg-gold hover:border-gold transition-colors duration-300"
                >
                  <Icon className="w-[18px] h-[18px]" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 lg:gap-8">
            <LinkColumn index="01" title="Company" links={COMPANY_LINKS} />
            <LinkColumn index="02" title="Services" links={SERVICE_LINKS} />
            <LinkColumn index="03" title="Industries" links={INDUSTRY_LINKS} />
          </div>
        </div>
      </div>

      {/* Large faint wordmark */}
      <div
        aria-hidden="true"
        className="relative select-none pointer-events-none text-center font-serif leading-none whitespace-nowrap text-[18vw] lg:text-[13rem] text-white/[0.03] -mb-4 lg:-mb-8"
      >
        LIMONEXA
      </div>

      {/* Bottom bar */}
      <div className="relative px-5 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-text-muted text-center sm:text-left">
            © {year} Limonexa Business Automation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[13px] text-text-muted hover:text-gold transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[13px] text-text-muted hover:text-gold transition-colors duration-200"
            >
              Terms of Service
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0 })}
              aria-label="Back to top"
              className="inline-flex items-center justify-center w-9 h-9 border border-gold/60 text-gold hover:bg-gold hover:text-bg-primary transition-colors duration-300"
            >
              <ArrowUp className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
