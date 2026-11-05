import { CONTACT_DETAILS, SOCIAL_LINKS } from "./contactData";

function ContactInfo() {
  return (
    <div className="h-full flex flex-col">
      <h2 className="font-serif text-[30px] text-text-primary">Contact details</h2>
      <p className="mt-2 text-[14.5px] text-text-secondary">Prefer to reach us directly? Use any of these.</p>

      <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
        {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
          <li key={label} className="flex items-start gap-5 py-5">
            <span className="w-11 h-11 shrink-0 border border-gold/50 flex items-center justify-center">
              <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
            </span>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-text-muted">{label}</p>
              {href ? (
                <a href={href} className="mt-1 block text-[16px] text-text-primary hover:text-gold transition-colors">
                  {value}
                </a>
              ) : (
                <p className="mt-1 text-[16px] text-text-primary">{value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-text-muted">Follow us</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {SOCIAL_LINKS.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                className="inline-block px-4 py-2 text-[12.5px] tracking-wide border border-white/20 text-text-secondary hover:border-gold hover:text-text-primary transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContactInfo;
