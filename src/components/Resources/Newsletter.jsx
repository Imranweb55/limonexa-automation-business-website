import { useState } from "react";
import Reveal from "../Home/sections/shared/Reveal";

// Front-end only for now — connect to an email service later.
function Newsletter() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email") || "";
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    setError("");
    setSent(true);
  };

  return (
    <section className="theme-light py-14 sm:py-20 px-5 sm:px-8 bg-bg-primary border-t border-white/5">
      <Reveal className="max-w-[900px] mx-auto text-center">
        <h2 className="font-serif text-[30px] sm:text-[40px] leading-tight text-text-primary">
          Get new articles in your inbox.
        </h2>
        <p className="mt-3 text-[15.5px] text-text-secondary">One useful email a month. No spam.</p>
        {sent ? (
          <p className="mt-8 font-serif text-[24px] text-gold-soft">Thank you — you are subscribed.</p>
        ) : (
          <form onSubmit={onSubmit} noValidate className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <input
              name="email"
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              className="w-full sm:w-80 bg-transparent border-b border-white/20 focus:border-gold outline-none py-3 text-[15px] text-text-primary placeholder:text-text-muted"
            />
            <button
              type="submit"
              className="bg-brand-blue hover:bg-brand-blue-hover text-white text-[13px] font-semibold tracking-[0.2em] uppercase px-8 py-3.5 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
        {error && <p className="mt-2 text-[12px] text-red-500">{error}</p>}
      </Reveal>
    </section>
  );
}

export default Newsletter;
