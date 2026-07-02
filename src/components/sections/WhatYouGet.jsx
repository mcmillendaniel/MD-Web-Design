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
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <h2 className="text-center font-display text-2xl font-medium text-navy md:text-3xl">
        The build, and the relationship.
      </h2>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="border-t-4 border-accent pt-5">
            <h3 className="font-display text-xl font-medium text-navy">
              {item.title}
            </h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-slate">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
