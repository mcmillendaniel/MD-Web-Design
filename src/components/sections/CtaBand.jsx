import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="border-t border-slate/15 bg-navy">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-16 text-center md:py-20">
        <h2 className="font-display text-2xl font-medium text-surface md:text-3xl">
          Ready to talk about your practice?
        </h2>
        <Button asChild variant="inverted">
          <a href="mailto:mdwebdesignllc@gmail.com">Book a consult</a>
        </Button>
      </div>
    </section>
  );
}
