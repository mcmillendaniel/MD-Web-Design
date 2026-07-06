import { Seo } from "@/components/seo/Seo";
import { routeMeta } from "@/lib/routeMeta";
import { Button } from "@/components/ui/button";

// Consult request via mailto for now (no live form backend yet, spec §7.3).
// A form is an open decision (§14); we keep the mailto rather than ship a
// non-functional submit.
export function Contact() {
  return (
    <>
      <Seo {...routeMeta["/contact"]} />
      <section className="site-container py-16 text-center md:py-24">
        <h1 className="mx-auto max-w-[20ch] text-[32px] font-medium text-navy md:text-4xl">
          Let us build something for your practice.
        </h1>
        <p className="mx-auto mt-6 max-w-[55ch] text-[17px] leading-relaxed text-slate">
          Tell us about your practice and we will set up a time to talk.
        </p>
        <div className="mt-10">
          <Button asChild>
            <a href="mailto:mdwebdesignllc@gmail.com">Book a consult</a>
          </Button>
        </div>
        <p className="mt-6 text-[15px] text-slate">
          Or email{" "}
          <a
            href="mailto:mdwebdesignllc@gmail.com"
            className="text-accent-dark underline underline-offset-4 hover:text-navy"
          >
            mdwebdesignllc@gmail.com
          </a>
        </p>
      </section>
    </>
  );
}
