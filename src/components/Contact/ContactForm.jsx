import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SERVICE_OPTIONS } from "./contactData";

const FIELD =
  "w-full bg-white border border-white/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none px-4 py-3 text-[15px] text-text-primary placeholder:text-text-muted transition-colors";
const LABEL = "block mb-2 text-[12px] font-semibold tracking-[0.14em] uppercase text-text-secondary";

// Front-end only for now — connect to a backend / email service later.
function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    const next = {};
    if (!d.name?.trim()) next.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(d.email || "")) next.email = "Please enter a valid email";
    if (!d.message?.trim()) next.message = "Please tell us a little about your needs";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-10 border border-gold/40 bg-bg-secondary">
        <CheckCircle2 className="w-12 h-12 text-gold" strokeWidth={1.4} />
        <h3 className="mt-5 font-serif text-[30px] text-text-primary">Thank you.</h3>
        <p className="mt-3 text-text-secondary max-w-sm">
          We have received your enquiry and will be in touch within one working day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="p-8 sm:p-10 bg-bg-secondary border border-white/10 shadow-[0_20px_50px_rgba(11,26,48,0.08)]">
      <h2 className="font-serif text-[30px] text-text-primary">Send us a message</h2>
      <p className="mt-2 mb-8 text-[14.5px] text-text-secondary">Fields marked * are required.</p>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="c-name" className={LABEL}>Full name *</label>
          <input id="c-name" name="name" placeholder="Your name" className={FIELD} />
          {errors.name && <p className="mt-1 text-[12px] text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="c-email" className={LABEL}>Work email *</label>
          <input id="c-email" name="email" type="email" placeholder="you@company.com" className={FIELD} />
          {errors.email && <p className="mt-1 text-[12px] text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="c-phone" className={LABEL}>Phone</label>
          <input id="c-phone" name="phone" type="tel" placeholder="+91 …" className={FIELD} />
        </div>
        <div>
          <label htmlFor="c-company" className={LABEL}>Company</label>
          <input id="c-company" name="company" placeholder="Company name" className={FIELD} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-service" className={LABEL}>I am interested in</label>
          <select id="c-service" name="service" defaultValue="" className={FIELD}>
            <option value="" disabled>Select a service</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-message" className={LABEL}>How can we help? *</label>
          <textarea id="c-message" name="message" rows={5} placeholder="Tell us what you would like to automate…" className={`${FIELD} resize-none`} />
          {errors.message && <p className="mt-1 text-[12px] text-red-500">{errors.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 w-full bg-brand-blue hover:bg-brand-blue-hover text-white text-[13px] font-semibold tracking-[0.2em] uppercase py-4 transition-colors"
      >
        Send message
      </button>
      <p className="mt-4 text-[12px] text-text-muted text-center">
        Your details are used only to respond to your enquiry.
      </p>
    </form>
  );
}

export default ContactForm;
