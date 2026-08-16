import { useEffect, useState } from 'react';
import logo from '../../assets/logo/limonexa-logo.png';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 flex items-center transition-[background-color,border-color,height] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? 'h-[72px] bg-bg-primary/85 backdrop-blur-md border-b border-brand-blue-pale/10'
          : 'h-[84px] bg-transparent border-b border-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-8 flex items-center justify-between gap-6">
        <a href="#home" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Limonexa Business Automation"
            className="h-[34px] w-auto mix-blend-screen"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-7 flex-1 justify-center" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1.5 text-[14.5px] font-medium text-text-secondary hover:text-text-primary whitespace-nowrap transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-brand-blue after:to-brand-blue-pale after:rounded-full after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <a
            href="#consultation"
            className="hidden lg:inline-flex items-center justify-center px-[22px] py-2.5 rounded-lg bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-semibold whitespace-nowrap shadow-[0_4px_18px_rgba(7,100,192,0.35)] hover:shadow-[0_6px_22px_rgba(7,100,192,0.45)] hover:-translate-y-px transition-all duration-200"
          >
            Free Consultation
          </a>

          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer p-0"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-full bg-text-primary rounded-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-text-primary rounded-full transition-opacity duration-200 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-text-primary rounded-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed top-[84px] left-0 right-0 bg-bg-primary/97 backdrop-blur-md border-b border-brand-blue-pale/10 flex-col px-6 gap-1 overflow-hidden opacity-0 transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? 'flex max-h-[70vh] opacity-100 pt-4 pb-5' : 'max-h-0 hidden'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-text-secondary no-underline text-[15px] font-medium py-3 px-1 border-b border-brand-blue-pale/10"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#consultation"
          className="inline-flex items-center justify-center mt-3.5 px-[22px] py-2.5 rounded-lg bg-brand-blue text-white text-sm font-semibold text-center"
          onClick={() => setMenuOpen(false)}
        >
          Free Consultation
        </a>
      </div>
    </header>
  );
}

export default Navbar;
