import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";

export function useSectionReveals() {
  const scopeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = scope.querySelectorAll<HTMLElement>(
      "section > .site-container, article.site-container, [data-motion-reveal]",
    );
    targets.forEach((target) => target.classList.add("motion-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("motion-reveal-in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5%" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return scopeRef;
}

export function CursorSpotlight({ children }: { children: ReactNode }) {
  const frame = useRef<number | null>(null);

  const trackPointer = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;
    const section = event.currentTarget;
    const bounds = section.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      section.style.setProperty("--cursor-x", `${x}px`);
      section.style.setProperty("--cursor-y", `${y}px`);
    });
  };

  useEffect(() => () => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
  }, []);

  return (
    <section className="soft-section cursor-spotlight py-20 md:py-28" onPointerMove={trackPointer}>
      <span className="cursor-marker" aria-hidden="true" />
      {children}
    </section>
  );
}