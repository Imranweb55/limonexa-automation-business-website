import { Phone, Mail, MapPin } from "lucide-react";
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

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const OUR_SERVICES = [
  "Process Automation",
  "AI Workflows",
  "System Integration",
  "CRM Automation",
  "Marketing Automation",
  "Data & Reporting",
];

const INDUSTRIES = [
  "Real Estate",
  "E-commerce",
  "Healthcare",
  "Education",
  "Logistics",
  "Manufacturing",
  "Agencies",
];

const SOCIALS = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-bg-secondary/40 px-5 sm:px-6 lg:px-8 pt-14 pb-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-10">
          {/* Brand column */}
          <div className="lg:col-span-1 sm:col-span-2">
            <a href="#home" className="inline-flex items-center mb-4">
              <img
                src={logo}
                alt="Limonexa Business Automation"
                className="h-[52px] w-auto mix-blend-screen"
              />
            </a>
            <p className="text-[13.5px] leading-relaxed text-text-muted mb-5 max-w-[260px]">
              We help businesses automate processes, eliminate repetitive tasks
              and scale faster with intelligent automation.
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:border-brand-blue-pale/40 hover:bg-brand-blue/15 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[14px] font-semibold text-text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13.5px] text-text-muted hover:text-brand-blue-pale transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-[14px] font-semibold text-text-primary mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {OUR_SERVICES.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-[13.5px] text-text-muted hover:text-brand-blue-pale transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-[14px] font-semibold text-text-primary mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5">
              {INDUSTRIES.map((item) => (
                <li key={item}>
                  <a
                    href="#industries"
                    className="text-[13.5px] text-text-muted hover:text-brand-blue-pale transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-[14px] font-semibold text-text-primary mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 mb-5">
              <li className="flex items-center gap-2.5 text-[13.5px] text-text-muted">
                <Phone
                  className="w-4 h-4 text-brand-blue-light shrink-0"
                  strokeWidth={2}
                />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2.5 text-[13.5px] text-text-muted">
                <Mail
                  className="w-4 h-4 text-brand-blue-light shrink-0"
                  strokeWidth={2}
                />
                hello@limonexa.com
              </li>
              <li className="flex items-center gap-2.5 text-[13.5px] text-text-muted">
                <MapPin
                  className="w-4 h-4 text-brand-blue-light shrink-0"
                  strokeWidth={2}
                />
                Chennai, India
              </li>
            </ul>
            <a
              href="#consultation"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-brand-blue hover:bg-brand-blue-hover text-white text-[13px] font-semibold transition-colors duration-200"
            >
              Free Consultation
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12.5px] text-text-muted text-center sm:text-left">
            © {year} Limonexa Business Automation. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[12.5px] text-text-muted hover:text-brand-blue-pale transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[12.5px] text-text-muted hover:text-brand-blue-pale transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
