import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Wordmark } from "@/components/Wordmark";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/MobileNav";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

// Sticky, solid, slim bar with a 1px hairline. No blur, no shadow (spec
// §4.1). Nav collapses to the mobile overlay below 768px.
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate/15 bg-surface">
      <div className="site-container flex h-16 items-center justify-between">
        <NavLink to="/" aria-label="MD Web Design, home">
          <Wordmark variant="compact" />
        </NavLink>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "font-sans text-sm font-semibold tracking-wide underline-offset-[6px] transition-colors hover:text-navy",
                  isActive
                    ? "text-navy underline decoration-accent decoration-2"
                    : "text-slate"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button asChild size="sm">
            <a href="mailto:mdwebdesignllc@gmail.com">Book a consult</a>
          </Button>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
