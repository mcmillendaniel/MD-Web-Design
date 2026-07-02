import { siteConfig } from "@/config/site";

export function Proof() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
      <h2 className="font-display text-2xl font-medium text-navy md:text-3xl">
        See the kind of site we build.
      </h2>
      <p className="mt-6 font-sans text-base leading-relaxed text-slate md:text-lg">
        Luxe Aesthetic is a sample build we created to show what is possible
        for an aesthetic practice. It is a demonstration site, not a client
        project, and it shows the quality and structure we bring to every
        build.
      </p>
      <a
        href={siteConfig.sampleBuildUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block font-sans text-sm font-semibold text-accent underline underline-offset-4"
      >
        View the sample build
      </a>
    </section>
  );
}
