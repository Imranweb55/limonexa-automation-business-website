const ITEMS = [
  "Lead automation",
  "WhatsApp assistants",
  "CRM synchronisation",
  "Invoice & finance",
  "Customer support",
  "Live reporting",
  "Web & app development",
  "Cloud integration",
];

// A slow, continuous strip of what we do. Two copies side by side loop seamlessly.
function TrustMarquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <section
      aria-label="What we automate"
      className="marquee relative overflow-hidden bg-bg-primary border-y border-gold/30 py-5"
    >
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />
      <ul className="animate-marquee flex w-max items-center">
        {loop.map((t, i) => (
          <li key={i} className="flex items-center" aria-hidden={i >= ITEMS.length}>
            <span className="font-serif italic text-[22px] sm:text-[26px] text-text-secondary px-8 whitespace-nowrap">
              {t}
            </span>
            <span className="w-1.5 h-1.5 rotate-45 bg-gold" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TrustMarquee;
