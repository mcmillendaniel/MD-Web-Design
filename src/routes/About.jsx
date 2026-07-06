import { Seo } from "@/components/seo/Seo";
import { routeMeta } from "@/lib/routeMeta";
import { CtaBand } from "@/components/sections/CtaBand";

export function About() {
  return (
    <>
      <Seo {...routeMeta["/about"]} />
      <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <h1 className="font-display text-3xl font-medium text-navy md:text-4xl">
          About
        </h1>
        <p className="mt-6 font-sans text-base leading-relaxed text-slate md:text-lg">
          MD Web Design is a solo studio based in Garner, North Carolina,
          serving med spas and aesthetic clinics across the Raleigh and
          Durham area. You get one person who builds your site and stays
          responsible for it, like a contractor you keep on call rather than
          a template you rented and have to maintain yourself.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
