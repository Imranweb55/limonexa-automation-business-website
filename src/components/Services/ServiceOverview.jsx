import { useEffect, useState } from "react";
import { Check, ArrowUpRight } from "lucide-react";
import Reveal from "../Home/sections/shared/Reveal";
import ImagePlaceholder from "../Home/sections/shared/ImagePlaceholder";

// Cycles through the flow steps so the panel looks like a workflow running.
// With reduced motion every step is simply shown as done.
function useActiveStep(count) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((a) => (a >= count + 1 ? 0 : a + 1)), 1500);
    return () => clearInterval(id);
  }, [count]);

  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? count : active;
}

function WorkflowPanel({ tab }) {
  const active = useActiveStep(tab.flow.length);
  const allDone = active >= tab.flow.length;

  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gold/10 blur-3xl rounded-full" aria-hidden="true" />
      <div className="relative bg-bg-secondary/90 backdrop-blur border border-gold/30 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="ml-3 text-[12px] font-mono text-text-muted">{tab.flowTitle}</span>
          <span className="ml-auto flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse motion-reduce:animate-none" />
            {allDone ? "Completed" : "Running"}
          </span>
        </div>

        <ol className="relative p-5 sm:p-6 space-y-3">
          <span className="absolute left-[2.6rem] sm:left-[2.85rem] top-10 bottom-10 w-px bg-white/10" aria-hidden="true" />
          {tab.flow.map((step, i) => {
            const done = i < active;
            const running = i === active;
            const Icon = step.icon;
            return (
              <li
                key={step.label}
                className={`relative flex items-center gap-4 p-3 border transition-all duration-700 ${
                  running
                    ? "border-gold/60 bg-gold/[0.07]"
                    : done
                    ? "border-white/10 bg-white/[0.02]"
                    : "border-transparent opacity-50"
                }`}
              >
                <span
                  className={`relative z-10 flex items-center justify-center w-10 h-10 shrink-0 rounded-full border transition-colors duration-700 ${
                    running || done ? "border-gold bg-bg-primary text-gold" : "border-white/15 bg-bg-primary text-text-muted"
                  }`}
                >
                  {done ? <Check className="w-4 h-4" strokeWidth={2.2} /> : <Icon className="w-4 h-4" strokeWidth={1.6} />}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[14.5px] font-medium text-text-primary">{step.label}</p>
                  <p className="text-[12.5px] text-text-muted truncate">{step.detail}</p>
                </div>
                <span className="text-[10.5px] tracking-[0.16em] uppercase text-text-muted shrink-0">
                  {done ? "Done" : running ? "Running" : "Queued"}
                </span>
              </li>
            );
          })}
        </ol>

        <div className="px-5 sm:px-6 py-3.5 border-t border-white/10 flex items-center justify-between text-[11.5px] text-text-muted">
          <span>Illustrative workflow</span>
          <span>No manual steps</span>
        </div>
      </div>
    </div>
  );
}

function ServiceOverview({ tab }) {
  return (
    <section className="relative overflow-hidden bg-bg-primary px-5 sm:px-8 pb-20 sm:pb-28">
      <ImagePlaceholder name={`svc-${tab.key}-main`} overlay className="absolute inset-0 border-0" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(201,168,106,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,106,0.07)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div className="relative max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-14 lg:gap-12 items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-gold/70" />
              <span className="text-[12px] font-semibold tracking-[0.24em] uppercase text-gold">{tab.label}</span>
            </div>
            <h1 className="font-serif font-semibold text-text-primary text-[40px] sm:text-[54px] lg:text-[62px] leading-[1.05]">
              {tab.title}
            </h1>
            <p className="mt-6 text-[16.5px] leading-relaxed text-text-secondary max-w-xl">{tab.text}</p>
          </Reveal>
          <ul className="mt-8 space-y-3">
            {tab.points.map((p, i) => (
              <Reveal key={p} delay={150 + i * 100}>
                <li className="flex items-start gap-3 text-[15px] text-text-primary">
                  <Check className="w-5 h-5 mt-0.5 shrink-0 text-gold" strokeWidth={1.8} />
                  {p}
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={450}>
            <a
              href="#consultation"
              className="group mt-10 inline-flex items-center gap-3 px-7 py-4 border border-gold text-gold hover:bg-gold hover:text-bg-primary text-[13px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300"
            >
              Book a free consultation
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
            </a>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-6" delay={200}>
          <WorkflowPanel tab={tab} />
        </Reveal>
      </div>
    </section>
  );
}

export default ServiceOverview;
