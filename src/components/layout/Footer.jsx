import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Wordmark } from "@/components/Wordmark";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

// Flat, quiet footer with a single consistent vertical gap between every
// stacked element (spec §4.3). One 1px top hairline separates it.
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate/15 bg-surface">
      <div className="site-container flex flex-col items-center gap-6 py-16 text-center">
        <Wordmark />

        <nav className="flex items-center gap-8" aria-label="Footer">
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
        </nav>

        <a
          href="mailto:mdwebdesignllc@gmail.com"
          className="font-sans text-sm text-accent-dark underline underline-offset-4 hover:text-navy"
        >
          mdwebdesignllc@gmail.com
        </a>

        <p className="font-sans text-sm text-slate">Raleigh, NC</p>

        <p className="font-sans text-xs text-slate">
          © {year} MD Web Design LLC
        </p>
      </div>
    </footer>
  );
}
