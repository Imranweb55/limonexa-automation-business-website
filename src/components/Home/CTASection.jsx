function CTASection() {
  return (
    <section
      id="consultation"
      className="relative py-16 sm:py-20 px-5 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-10">
        <div className="text-center lg:text-left">
          <span className="inline-block text-[13px] font-semibold tracking-[0.1em] text-brand-blue-pale uppercase mb-3">
            Ready To Automate Your Business?
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-text-primary mb-4 leading-tight max-w-xl mx-auto lg:mx-0">
            Let&apos;s Automate Something Amazing For Your Business
          </h2>
          <p className="text-text-secondary text-[15.5px] sm:text-[16.5px] mb-8 max-w-lg mx-auto lg:mx-0">
            Book your free consultation and let&apos;s build the perfect
            automation for you.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center lg:justify-start">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center px-7 py-[15px] rounded-[9px] text-[15px] font-semibold tracking-wide bg-brand-blue hover:bg-brand-blue-hover text-white shadow-[0_8px_28px_rgba(7,100,192,0.45)] hover:-translate-y-0.5 transition-all duration-200"
            >
              FREE CONSULTATION
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-[15px] rounded-[9px] text-[15px] font-semibold tracking-wide bg-transparent text-text-primary border border-white/30 hover:border-brand-blue-pale hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-200"
            >
              SEE HOW WE AUTOMATE
            </a>
          </div>
        </div>

        {/* Decorative isometric "L" mark graphic */}
        <div className="relative flex items-center justify-center min-h-[260px] sm:min-h-[320px]">
          <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full bg-[radial-gradient(circle,rgba(7,100,192,0.35)_0%,transparent_70%)] blur-[40px]" />
          <div className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rotate-45 rounded-2xl border border-brand-blue-pale/30 bg-gradient-to-br from-brand-blue/20 to-transparent shadow-[0_0_60px_rgba(7,100,192,0.45)] flex items-center justify-center">
            <span className="-rotate-45 text-[64px] sm:text-[80px] font-extrabold bg-gradient-to-br from-brand-blue-pale to-brand-blue bg-clip-text text-transparent">
              L
            </span>
          </div>
          <div className="absolute w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] rotate-45 rounded-xl border border-brand-blue-pale/20 top-4 right-4 sm:top-6 sm:right-10" />
        </div>
      </div>
    </section>
  );
}

export default CTASection;
