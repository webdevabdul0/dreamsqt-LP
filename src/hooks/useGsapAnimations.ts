import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-up on scroll for all [data-animate] elements
      gsap.utils.toArray<HTMLElement>('[data-animate]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });

      // Stagger children inside [data-animate-stagger]
      gsap.utils.toArray<HTMLElement>('[data-animate-stagger]').forEach((container) => {
        const children = gsap.utils.toArray<HTMLElement>(container.children as unknown as HTMLElement[]);
        gsap.fromTo(
          children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });

      // Hero entrance (no scroll trigger — fires on mount)
      const hero = document.querySelector('[data-hero]');
      if (hero) {
        gsap.fromTo(
          gsap.utils.toArray<HTMLElement>('[data-hero] [data-hero-item]'),
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            stagger: 0.14,
            delay: 0.1,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);
}
