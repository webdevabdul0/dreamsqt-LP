import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // Hero entrance — fires once on load
      gsap.fromTo(
        '[data-hero] [data-hero-item]',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power2.out',
          stagger: 0.12,
          delay: 0.05,
        }
      );

      // All sections: simple fade-up, fires once
      gsap.utils.toArray<HTMLElement>('[data-animate]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
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
