import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Buttons per spec §4.4. Primary hover fills to Accent Blue Dark so white
// text stays AA-compliant. Secondary is a transparent action (underline on
// hover, no fill/border). Inverted is for use on the navy CTA band.
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[2px] font-sans text-sm font-semibold tracking-wide transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-navy text-white hover:bg-accent-dark",
        secondary:
          "bg-transparent text-navy underline-offset-4 hover:underline hover:decoration-accent",
        inverted: "bg-white text-navy hover:bg-accent-dark hover:text-white",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
