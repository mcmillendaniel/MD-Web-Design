import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
      <h1 className="font-display text-4xl font-medium leading-tight text-navy md:text-5xl">
        Websites built for aesthetic practices, and managed for the long run.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-slate md:text-lg">
        MD Web Design builds fully custom sites for med spas and aesthetic
        clinics in the Raleigh and Durham area, then stays on to manage them.
        No off the shelf themes. No platform you have to babysit.
      </p>
      <div className="mt-10">
        <Button asChild>
          <a href="mailto:mdwebdesignllc@gmail.com">Book a consult</a>
        </Button>
      </div>
    </section>
  );
}
