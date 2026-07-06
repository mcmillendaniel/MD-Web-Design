import { Reveal } from "@/components/motion/Reveal";

const steps = [
  {
    title: "Consult.",
    body: "We talk through your practice, your services, and your goals.",
  },
  {
    title: "Build.",
    body: "We design and build your site from scratch, specifically for your practice.",
  },
  {
    title: "Launch.",
    body: "We take it live and make sure it is fast and easy to find.",
  },
  {
    title: "Manage.",
    body: "We stay on to keep it current, secure, and working for you.",
  },
];

export function Process() {
  return (
    <section className="border-t border-slate/15">
      <div className="site-container py-12 md:py-20">
        <Reveal>
          <h2 className="text-center text-[26px] font-medium text-navy md:text-[32px]">
            Process.
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 80}>
              {/* Numbers in Playfair Navy are the only visual device here
                  (no icon set), per spec §7.1. */}
              <span className="font-display text-4xl font-medium leading-none text-navy">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-4 h-px w-10 bg-accent" />
              <h3 className="mt-4 text-[20px] font-medium text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-[17px] leading-relaxed text-slate">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
