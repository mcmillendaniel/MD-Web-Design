import { Seo } from "@/components/seo/Seo";
import { routeMeta } from "@/lib/routeMeta";
import { Reveal } from "@/components/motion/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { CtaBand } from "@/components/sections/CtaBand";

export function About() {
  return (
    <>
      <Seo {...routeMeta["/about"]} />
      <section className="site-container py-16 md:py-24">
        <h1 className="text-center text-[32px] font-medium text-navy md:text-4xl">
          About
        </h1>

        <div className="mx-auto mt-12 grid max-w-4xl items-center gap-10 md:grid-cols-[260px_1fr]">
          <Reveal className="mx-auto w-full max-w-[260px]">
            <ImageSlot
              publicId="IMG_8556_wmcriq"
              label="Headshot"
              alt="McMillen Daniel, founder of MD Web Design"
              width={520}
              height={640}
              sizes="260px"
              eager
            />
          </Reveal>

          <Reveal delay={80}>
            <p className="text-[17px] leading-relaxed text-slate">
              MD Web Design is a solo studio based in Raleigh, North Carolina,
              serving med spas and aesthetic clinics across the Raleigh and
              Durham area. You get one person who builds your site and stays
              responsible for it, like a contractor you keep on call rather
              than a template you rented and have to maintain yourself.
            </p>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
