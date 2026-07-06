import { cn } from "@/lib/utils";
import { cloudinaryUrl } from "@/lib/cloudinary";

const WIDTHS = [480, 768, 1200, 1600];

// Renders a responsive Cloudinary <img> when a public id + cloud name are
// available, otherwise a clearly-marked placeholder. Always reserves the
// aspect ratio so there is no layout shift whether or not an image is set
// (spec §9, §12). Below-the-fold slots lazy-load; pass eager for an LCP image.
export function ImageSlot({
  publicId,
  alt = "",
  width,
  height,
  sizes = "100vw",
  eager = false,
  label = "Image",
  className,
}) {
  const ratio = width && height ? `${width} / ${height}` : "16 / 9";
  const src = cloudinaryUrl(publicId, { width: width || 1200 });

  if (src) {
    const srcSet = WIDTHS.map(
      (w) => `${cloudinaryUrl(publicId, { width: w })} ${w}w`
    ).join(", ");
    return (
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding={eager ? "auto" : "async"}
        className={cn("block h-auto w-full", className)}
      />
    );
  }

  // TODO(cloudinary): populate publicId + VITE_CLOUDINARY_CLOUD_NAME.
  return (
    <div
      role="img"
      aria-label={alt || label}
      style={{ aspectRatio: ratio }}
      className={cn(
        "flex w-full items-center justify-center border border-slate/25 bg-white/50",
        className
      )}
    >
      <span className="font-sans text-xs uppercase tracking-[0.2em] text-slate/60">
        {label}
      </span>
    </div>
  );
}
