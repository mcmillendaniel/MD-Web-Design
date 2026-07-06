import { useEffect, useRef } from "react";

// Scroll-reveal wrapper. Adds `is-visible` once the element is ~15% in view
// via IntersectionObserver, then stops observing. The actual transition
// lives in CSS and only runs under the `js-reveal` class (set in index.html
// when motion is allowed), so this is a no-op for reduced-motion / no-JS.
//
// Uses direct classList manipulation rather than React state so it never
// causes a hydration mismatch against the prerendered markup. `delay`
// (ms) drives a stagger via the --reveal-delay custom property.
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!document.documentElement.classList.contains("js-reveal")) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add("is-visible");
            observer.unobserve(node);
          }
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={delay ? { "--reveal-delay": `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
