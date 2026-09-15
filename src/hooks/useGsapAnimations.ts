import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Hero entrance (fires on mount, staggered) ──────────────────
      gsap.fromTo(
        '[data-hero] [data-hero-item]',
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.15,
          delay: 0.1,
        }
      );

      // ── Section wrapper: fade-up in, fade-out as it leaves ─────────
      gsap.utils.toArray<HTMLElement>('[data-animate]').forEach((el) => {
        // Fade in
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              end: 'top 30%',
              scrub: false,
              once: true,
            },
          }
        );

        // Subtle fade-out when leaving viewport upward
        gsap.to(el, {
          opacity: 0.15,
          y: -30,
          ease: 'power2.in',
          scrollTrigger: {
            trigger: el,
            start: 'bottom 5%',
            end: 'bottom -20%',
            scrub: true,
          },
        });
      });

      // ── Headings: slide up with slight scale ───────────────────────
      gsap.utils.toArray<HTMLElement>('[data-animate-heading]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 32, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });

      // ── Stagger children inside [data-animate-stagger] ────────────
      gsap.utils.toArray<HTMLElement>('[data-animate-stagger]').forEach((container) => {
        const children = Array.from(container.children) as HTMLElement[];
        gsap.fromTo(
          children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            stagger: 0.13,
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });

      // ── Cards: scale + fade ────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('[data-animate-card]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });

    });

    return () => ctx.revert();
  }, []);
}
