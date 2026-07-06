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
    <section className="border-t border-slate/15 bg-white/40">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-center font-display text-2xl font-medium text-navy md:text-3xl">
          Process.
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title}>
              <span className="font-display text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-lg font-medium text-navy">
                {step.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-slate">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
