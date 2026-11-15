import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

let registered = false;
function ensureRegistered() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

/**
 * Staggered on-load hero reveal: the name's words mask-slide into view, then
 * the supporting copy rises in behind them. Runs once on mount. Under
 * prefers-reduced-motion, every element simply fades in (no translation),
 * per the tiered reduced-motion approach (remove large movement, keep
 * opacity as the fact of a transition).
 */
export function useHeroIntro(containerRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    ensureRegistered();
    const root = containerRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          motionOK: '(prefers-reduced-motion: no-preference)',
          motionReduce: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { motionOK } = context.conditions as { motionOK: boolean };
          const words = root.querySelectorAll('.word-inner');
          const rest = root.querySelectorAll('[data-hero-item]');
          const portrait = root.querySelector('.portrait-frame');
          const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

          if (motionOK) {
            tl.set(words, { yPercent: 100 })
              .set(rest, { y: 16, opacity: 0 })
              .set(portrait, { opacity: 0, scale: 0.97 })
              .to(words, { yPercent: 0, duration: 0.8, stagger: 0.07 })
              .to(portrait, { opacity: 1, scale: 1, duration: 0.9 }, '<0.1')
              .to(rest, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 }, '-=0.5');
          } else {
            tl.set(words, { yPercent: 0 })
              .set(rest, { opacity: 0 })
              .set(portrait, { opacity: 0 })
              .to([portrait, rest], { opacity: 1, duration: 0.15, stagger: 0.03 });
          }

          return () => tl.kill();
        }
      );
      return () => mm.revert();
    }, root);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

/**
 * Scroll-triggered stagger for a grid/row of cards: each child rises and
 * fades in as the group enters the viewport, instead of the whole block
 * appearing at once. Reduced motion drops the rise, keeping a quick fade.
 */
export function useStaggerReveal(containerRef: React.RefObject<HTMLElement>, childSelector: string) {
  useEffect(() => {
    ensureRegistered();
    const root = containerRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          motionOK: '(prefers-reduced-motion: no-preference)',
          motionReduce: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { motionOK } = context.conditions as { motionOK: boolean };
          const items = root.querySelectorAll(childSelector);
          if (items.length === 0) return;

          gsap.set(items, { opacity: 0, y: motionOK ? 20 : 0 });
          const trigger = ScrollTrigger.create({
            trigger: root,
            start: 'top 85%',
            once: true,
            onEnter: () =>
              gsap.to(items, {
                opacity: 1,
                y: 0,
                duration: motionOK ? 0.55 : 0.15,
                stagger: motionOK ? 0.08 : 0.02,
                ease: 'power2.out',
              }),
          });

          return () => trigger.kill();
        }
      );
      return () => mm.revert();
    }, root);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [childSelector]);
}
