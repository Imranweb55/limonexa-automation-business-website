import { ImageIcon } from "lucide-react";
import { getImage, IMAGE_SPECS } from "./homeImages";

// Renders the real image if src/assets/images/home/<name>.* exists,
// otherwise a labelled placeholder. Parent controls size via className.
function ImagePlaceholder({ name, className = "", overlay = false, alt }) {
  const src = getImage(name);
  const spec = IMAGE_SPECS[name] || { label: name, size: "", hint: "" };

  return (
    <div
      className={`group relative overflow-hidden bg-bg-elevated border border-white/10 ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt || spec.label}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.02)_0_12px,transparent_12px_24px)]">
          <ImageIcon className="w-6 h-6 text-gold/70" strokeWidth={1.25} />
          <p className="text-[12px] font-medium tracking-wide text-text-secondary">{spec.label}</p>
          <p className="text-[11px] text-text-muted">
            {name}.webp · {spec.size}
          </p>
        </div>
      )}
      {overlay && <div className="absolute inset-0 bg-bg-primary/70" />}
    </div>
  );
}

export default ImagePlaceholder;
