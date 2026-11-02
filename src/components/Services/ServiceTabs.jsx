// Sub-tab bar for the Services page.
function ServiceTabs({ tabs, active, onChange }) {
  return (
    <div className="border-y border-white/10 bg-bg-secondary">
      <div
        role="tablist"
        aria-label="Services"
        className="max-w-[1400px] mx-auto px-5 sm:px-8 flex gap-1 overflow-x-auto"
      >
        {tabs.map((t) => {
          const on = t.key === active;
          return (
            <button
              key={t.key}
              role="tab"
              type="button"
              aria-selected={on}
              onClick={() => onChange(t.key)}
              className={`relative whitespace-nowrap px-5 py-5 text-[13px] font-semibold tracking-[0.14em] uppercase transition-colors ${
                on ? "text-gold-soft" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {t.label}
              <span
                className={`absolute left-5 right-5 bottom-0 h-[2px] bg-gold transition-transform duration-500 origin-left ${
                  on ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceTabs;
