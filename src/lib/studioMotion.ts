export function initStudioMotion() {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-studio-reveal]"));

  root.classList.add("is-loaded");

  if (reduceMotion) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return () => undefined;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );

  revealNodes.forEach((node) => observer.observe(node));

  const updateScroll = () => {
    root.style.setProperty("--scroll-y", `${window.scrollY}`);
  };

  updateScroll();
  window.addEventListener("scroll", updateScroll, { passive: true });

  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", updateScroll);
  };
}
