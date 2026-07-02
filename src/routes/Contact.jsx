import { Seo } from "@/components/seo/Seo";
import { routeMeta } from "@/lib/routeMeta";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <>
      <Seo {...routeMeta["/contact"]} />
      <section className="mx-auto max-w-2xl px-6 py-20 text-center md:py-28">
        <h1 className="font-display text-3xl font-medium text-navy md:text-4xl">
          Let us build something for your practice.
        </h1>
        <p className="mt-6 font-sans text-base leading-relaxed text-slate md:text-lg">
          Tell us about your practice and we will set up a time to talk.
        </p>
        <div className="mt-10">
          <Button asChild>
            <a href="mailto:mdwebdesignllc@gmail.com">Book a consult</a>
          </Button>
        </div>
      </section>
    </>
  );
}
