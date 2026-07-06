import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

// Full-screen overlay below 768px (spec §4.2). Locks body scroll, traps
// focus, closes on Esc, and returns focus to the toggle on close.
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const overlayRef = useRef(null);

  const close = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const getFocusable = () =>
      Array.from(
        overlayRef.current?.querySelectorAll(
          'a[href], button:not([disabled])'
        ) ?? []
      );

    // Move focus into the overlay when it opens.
    getFocusable()[0]?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key === "Tab") {
        const items = getFocusable();
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 flex-col items-center justify-center gap-1.5"
      >
        <span className="block h-0.5 w-6 bg-navy" />
        <span className="block h-0.5 w-6 bg-navy" />
        <span className="block h-0.5 w-6 bg-navy" />
      </button>

      {open && (
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col bg-surface"
        >
          <div className="site-container flex h-16 items-center justify-end">
            <button
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="relative flex h-11 w-11 items-center justify-center"
            >
              <span className="absolute h-0.5 w-6 rotate-45 bg-navy" />
              <span className="absolute h-0.5 w-6 -rotate-45 bg-navy" />
            </button>
          </div>

          <nav
            className="flex flex-1 flex-col items-center justify-center gap-8"
            aria-label="Mobile"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={close}
                className={({ isActive }) =>
                  cn(
                    "font-sans text-xl font-semibold tracking-wide underline-offset-[6px]",
                    isActive
                      ? "text-navy underline decoration-accent decoration-2"
                      : "text-slate"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild className="mt-2">
              <a href="mailto:mdwebdesignllc@gmail.com" onClick={close}>
                Book a consult
              </a>
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}
