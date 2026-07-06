import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="bg-navy">
      <div className="site-container py-12 md:py-20">
        <Reveal className="mx-auto flex max-w-[65ch] flex-col items-center gap-6 text-center">
          <h2 className="text-[26px] font-medium text-white md:text-[32px]">
            Ready to talk about your practice?
          </h2>
          <Button asChild variant="inverted">
            <a href="mailto:mdwebdesignllc@gmail.com">Book a consult</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
