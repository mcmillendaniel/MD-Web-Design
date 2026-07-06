import { Reveal } from "@/components/motion/Reveal";

const items = [
  {
    title: "A custom site.",
    body: "Fully custom, built specifically for your practice. You own real software, not a rented theme.",
  },
  {
    title: "Ongoing management.",
    body: "A local operator who maintains, updates, and improves your site over time through the Site Care Plan.",
  },
];

export function WhatYouGet() {
  return (
    <section className="border-t border-slate/15">
      <div className="site-container py-12 md:py-20">
        <Reveal>
          <h2 className="text-center text-[26px] font-medium text-navy md:text-[32px]">
            The build, and the relationship.
          </h2>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-4xl gap-10 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="border-t-4 border-accent pt-5">
                <h3 className="text-[22px] font-medium text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-[17px] leading-relaxed text-slate">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
