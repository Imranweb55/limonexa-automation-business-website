import { useEffect, useState } from "react";

// Eases from 0 to `end` once `start` is true.
export function useCountUp(end, start, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = reduced ? 1 : Math.min((now - t0) / duration, 1);
      setValue(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, start, duration]);

  return value;
}
