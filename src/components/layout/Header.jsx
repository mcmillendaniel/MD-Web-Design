import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/layout/MobileNav";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="relative border-b border-slate/15 bg-surface">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="font-display text-lg font-medium text-navy">
          MD Web Design
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "font-sans text-sm font-semibold tracking-wide transition-colors hover:text-navy",
                  isActive ? "text-navy" : "text-slate"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="mailto:mdwebdesignllc@gmail.com"
            className="border border-navy px-4 py-2 font-sans text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-surface"
          >
            Book a consult
          </a>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
