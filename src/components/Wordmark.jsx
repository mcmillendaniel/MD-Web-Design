import { cn } from "@/lib/utils";

// Wordmark composition per spec §2.3: "MD Web Design" in Playfair navy,
// a 4px accent-blue rule roughly the width of the wordmark beneath it,
// tagline in Montserrat gray centered under the rule. The three elements
// read as one evenly-spaced unit (consistent gaps, no odd spacing).
//
// Variants:
//   full    - wordmark + rule + tagline (hero, footer)
//   compact - wordmark only, smaller, no rule/tagline (sticky header)
export function Wordmark({ variant = "full", className }) {
  if (variant === "compact") {
    return (
      <span
        className={cn(
          "font-display text-xl font-medium tracking-tight text-navy",
          className
        )}
      >
        MD Web Design
      </span>
    );
  }

  return (
    <div className={cn("inline-flex flex-col items-center gap-2", className)}>
      <span className="font-display text-2xl font-medium tracking-tight text-navy md:text-3xl">
        MD Web Design
      </span>
      <span className="h-1 w-28 bg-accent" aria-hidden="true" />
      <span className="font-sans text-xs tracking-wide text-slate md:text-sm">
        Web Design for Aesthetic Clinics
      </span>
    </div>
  );
}
