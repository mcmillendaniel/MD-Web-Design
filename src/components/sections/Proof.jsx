import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { ImageSlot } from "@/components/ui/ImageSlot";

export function Proof() {
  return (
    <section className="border-t border-slate/15">
      <div className="site-container py-12 md:py-20">
        <Reveal className="mx-auto max-w-[65ch] text-center">
          <h2 className="text-[26px] font-medium text-navy md:text-[32px]">
            See the kind of site we build.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-slate">
            Luxe Aesthetic is a sample build we created to show what is
            possible for an aesthetic practice. It is a demonstration site,
            not a client project, and it shows the quality and structure we
            bring to every build.
          </p>
          <div className="mt-8">
            <Button asChild variant="secondary">
              <a href={siteConfig.sampleBuildUrl} target="_blank" rel="noreferrer">
                View the sample build
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-4xl" delay={80}>
          <ImageSlot
            publicId="Screen_Shot_2026-07-13_at_2.46.54_PM_axcnwf"
            label="Sample build preview"
            alt="Screenshot of the Luxe Aesthetic sample build"
            width={1200}
            height={750}
            sizes="(min-width: 1024px) 896px, 100vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
