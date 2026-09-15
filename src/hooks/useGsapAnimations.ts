import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Hero entrance ────────────────────────────────────────────
      gsap.fromTo(
        '[data-hero] [data-hero-item]',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.85, ease: 'power2.out', stagger: 0.12, delay: 0.05 }
      );

      // ── Section wrappers: fade-up in, stay visible ───────────────
      gsap.utils.toArray<HTMLElement>('[data-animate]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true } }
        );
      });

      // ── Headings: fade-up in, stay visible ───────────────────────
      gsap.utils.toArray<HTMLElement>('[data-animate-heading]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true } }
        );
      });

      // ── Images: fade in only, stay visible ───────────────────────
      gsap.utils.toArray<HTMLElement>('[data-animate-img]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 90%', once: true } }
        );
      });

      // ── Stagger children: cards side-by-side or heading→text ─────
      gsap.utils.toArray<HTMLElement>('[data-animate-stagger]').forEach((container) => {
        const children = Array.from(container.children) as HTMLElement[];
        gsap.fromTo(
          children,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.65, ease: 'power2.out', stagger: 0.12,
            scrollTrigger: { trigger: container, start: 'top 86%', once: true }
          }
        );
      });

    });

    return () => ctx.revert();
  }, []);
}
