import { cn } from "@/lib/utils";

// Wordmark composition per CLAUDE.md §3: "MD Web Design" in Playfair navy,
// a 4px accent-blue rule roughly the width of the wordmark beneath it,
// tagline centered under the rule in Montserrat gray.
export function Wordmark({ withTagline = true, className }) {
  return (
    <div className={cn("inline-flex flex-col items-center", className)}>
      <span className="font-display text-2xl md:text-3xl font-medium text-navy tracking-tight">
        MD Web Design
      </span>
      <span className="mt-1.5 h-1 w-24 bg-accent" />
      {withTagline && (
        <span className="mt-1.5 font-sans text-xs md:text-sm text-slate tracking-wide">
          Web Design for Aesthetic Clinics
        </span>
      )}
    </div>
  );
}
