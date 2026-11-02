import { useState } from "react";
import Reveal from "./shared/Reveal";
import ImagePlaceholder from "./shared/ImagePlaceholder";

const FIELD =
  "w-full bg-transparent border-b border-white/20 focus:border-gold outline-none py-3 text-[15px] text-text-primary placeholder:text-text-muted transition-colors";

function ContactCTA() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  // Front-end only for now — connect to a backend / email service later.
  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const next = {};
    if (!data.name?.trim()) next.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(data.email || "")) next.email = "Please enter a valid email";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <section className="relative py-20 sm:py-28 px-5 sm:px-8 border-t border-white/5 overflow-hidden scroll-mt-24">
      <ImagePlaceholder name="contact-bg" overlay className="absolute inset-0 border-0" />
      <div className="relative max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="flex items-center gap-4 mb-5">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-[12px] font-semibold tracking-[0.22em] uppercase text-brand-blue-pale">
              Free consultation
            </span>
          </div>
          <h2 className="font-serif font-semibold text-[38px] sm:text-[52px] leading-[1.06] text-text-primary">
            Let’s automate something <em className="text-gold-soft">remarkable.</em>
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-text-secondary max-w-md">
            Tell us about your business. We’ll respond within one working day with ideas tailored to you.
          </p>
        </Reveal>

        <Reveal delay={150}>
          {sent ? (
            <div className="p-10 border border-gold/40 bg-bg-secondary/80 text-center">
              <h3 className="font-serif text-[30px] text-gold-soft">Thank you.</h3>
              <p className="mt-3 text-text-secondary">We’ve received your details and will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="p-8 sm:p-10 bg-bg-secondary/85 border border-white/10 backdrop-blur-sm space-y-6">
              <div>
                <input name="name" placeholder="Your name" className={FIELD} aria-label="Your name" />
                {errors.name && <p className="mt-1 text-[12px] text-red-400">{errors.name}</p>}
              </div>
              <div>
                <input name="email" type="email" placeholder="Email address" className={FIELD} aria-label="Email address" />
                {errors.email && <p className="mt-1 text-[12px] text-red-400">{errors.email}</p>}
              </div>
              <input name="company" placeholder="Company (optional)" className={FIELD} aria-label="Company" />
              <textarea name="message" rows={3} placeholder="What would you like to automate?" className={`${FIELD} resize-none`} aria-label="Message" />
              <button
                type="submit"
                className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white text-[13px] font-semibold tracking-[0.2em] uppercase py-4 transition-colors"
              >
                Request consultation
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export default ContactCTA;
