import { Reveal } from "@/components/motion/Reveal";

export function ProblemPromise() {
  return (
    <section className="border-t border-slate/15">
      <div className="site-container py-12 md:py-20">
        <Reveal className="mx-auto max-w-[65ch] text-center">
          <h2 className="text-[26px] font-medium text-navy md:text-[32px]">
            You could build it yourself. Here is why practices call us instead.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-slate">
            A Squarespace build gets you online. It does not get you a partner.
            We build a site specifically for your practice, and we manage it
            after launch, the way you would keep a trusted contractor on call.
            When something needs to change, you have one local person who
            already knows your site.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
