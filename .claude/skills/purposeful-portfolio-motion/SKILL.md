---
name: purposeful-portfolio-motion
description: Design and implement premium, purposeful motion for a personal portfolio. Use for GSAP, CSS, Motion for React, scroll reveals, project transitions, hover interactions, reduced-motion fallbacks, and animation performance reviews.
---

# Purposeful portfolio motion

## Principle
Motion must communicate hierarchy, continuity, interaction, or personality. A premium site feels alive without making visitors wait. Avoid animation for its own sake.

## Choreography
Create a motion map BEFORE implementation. For each element, record trigger, movement, duration, easing, mobile behavior, reduced-motion behavior, and purpose.

Suggested language, adjustable to the art direction:
- First load: hero headline lines reveal sequentially, 450–750 ms, no blocking preloader.
- Section entrance: subtle opacity + transform 12–32 px, 350–650 ms; never hide important content indefinitely.
- Project hover: image scale 1.02–1.05 and concise metadata reveal, 180–320 ms; no motion required to discover links.
- Project navigation: shared image/clip transition only if it improves continuity and does not break routing or browser back.
- Navigation: responsive and accessible, 150–300 ms; never block scrolling.
- A single signature interaction can be more valuable than ten unrelated effects.

## Engineering choices
- Start with CSS transitions/keyframes and native browser behavior.
- For React projects, Motion for React is suitable for component entrances and shared layout transitions; use GSAP + ScrollTrigger for genuinely complex timelines. Choose based on the existing stack, not trend.
- Add Three.js/WebGL only when a specific concept earns it. Provide fallback, loading budget, and battery/mobile constraints.
- Avoid scroll-jacking and aggressive smooth-scroll overrides. If smooth scrolling is proposed, justify and test keyboard, touch, anchors, and reduced motion.
- Animate transform and opacity where possible; minimize forced layout and long main-thread work.
- Use IntersectionObserver or appropriate library visibility triggers; clean up animations on unmount.
- Support prefers-reduced-motion, keyboard interaction, touch devices, and browser history.
- No flashing effects, looping text that obscures information, or motion-dependent navigation.

## Quality gates
- Test iPhone Safari, Android Chrome, desktop Chrome/Firefox/Safari where available.
- Audit layout shift, font loading, interaction latency, scroll smoothness, memory, and GPU-heavy effects.
- All links and buttons remain functional with JavaScript animation disabled where feasible.
- Explain motion with a short recorded demo or screenshots plus a motion-spec table. Never claim tested if not tested.

## Deliverable
A coherent motion system, implementation notes, responsive behavior, reduced-motion fallback, and a before/after performance report.
