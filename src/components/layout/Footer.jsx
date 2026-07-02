import { Wordmark } from "@/components/Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-slate/15 bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-14 text-center">
        <Wordmark />
        <a
          href="mailto:mdwebdesignllc@gmail.com"
          className="font-sans text-sm text-slate hover:text-navy"
        >
          mdwebdesignllc@gmail.com
        </a>
        <p className="font-sans text-xs text-slate">
          MD Web Design LLC. Garner, North Carolina.
        </p>
      </div>
    </footer>
  );
}
