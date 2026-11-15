---
name: portfolio-launch-audit
description: Audit a premium personal portfolio for mobile responsiveness, animation accessibility, performance, content accuracy, SEO, usability, and deployment readiness before merging or publishing.
---

# Portfolio launch audit

## First: inspect the project
Determine framework, build commands, hosting, CI, environment variables, routing, dependencies, current branch, and production deployment. Do not replace the stack without reason. Never merge or deploy without owner approval.

## Visual checks
- Check at approximately 375px, 430px, 768px, 1024px, and 1440px widths.
- Verify headline line breaks, type scale, images, layout alignment, tap targets, sticky navigation, and overflow.
- Capture screenshots for before/after comparison when a browser is available.
- Check touch, mouse, keyboard, screen reader semantics, focus states, and color contrast.

## Motion checks
- Verify prefers-reduced-motion and content accessibility without animation.
- Check no scroll lock, forced preloader, accidental looping, or inaccessible project links.
- Check Safari-specific issues, mobile battery and scroll performance.
- Test navigation transitions and browser back/forward.

## Engineering checks
- Run build, lint, and typecheck commands that actually exist; report outcomes exactly.
- Optimize images, fonts, and asset loading. Avoid shipping huge videos or 3D assets in initial payload.
- Review semantic headings, page titles, descriptions, canonical URLs, Open Graph preview, sitemap/robots if applicable, 404, and external links.
- Remove placeholder names, fake testimonials, broken projects, and stale claims.
- Check forms, email links, social links, analytics consent, privacy expectations, and error states.
- Avoid committing secrets, credentials, or unnecessary binaries.

## Ship gate
Produce a short report with PASS / NEEDS WORK / NOT TESTED for: design, content, accessibility, performance, responsiveness, links, SEO, build. Identify actual blockers. Open a PR and wait for approval; do not merge to main or deploy without explicit approval.
