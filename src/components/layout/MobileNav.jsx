import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="p-2 text-navy"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <nav
          className="absolute inset-x-0 top-full z-50 flex flex-col gap-1 border-t border-slate/20 bg-surface px-6 py-6"
          aria-label="Mobile"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "py-3 font-sans text-base font-semibold tracking-wide",
                  isActive ? "text-navy" : "text-slate"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="mailto:mdwebdesignllc@gmail.com"
            className="mt-3 border border-navy px-5 py-3 text-center font-sans text-sm font-semibold text-navy"
          >
            Book a consult
          </a>
        </nav>
      )}
    </div>
  );
}
