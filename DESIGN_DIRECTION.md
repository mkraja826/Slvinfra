# SLV Infra — Creative Direction & Quality Bar

## Brand
- Legal entity: Sri Laxmi Venkateshwara Enterprises
- Public brand: SLV Infra
- Domain: slvinfra.com
- Heritage: 1987 (per supplied historical brochure)
- Positioning: Civil engineering, infrastructure, land development and considered construction.

## Concept: The Architectural Monograph
An editorial digital experience inspired by architecture publications and established engineering firms. Never a generic AI-generated template.

## Visual principles
1. Build compositions around real SLV projects, not unrelated stock villas.
2. Use a distinctive 12-column editorial grid, asymmetric negative space, and varied section rhythms.
3. Maintain disciplined slate/teal/copper/ivory palette; copper is a sparse accent, not a blanket fill.
4. Use Manrope for readable UI and Plus Jakarta Sans for precise headlines; avoid decorative italics and repetitive oversized slogans.
5. Emphasize authentic engineering: aerial site plans, road works, civil infrastructure, materials and construction details.
6. Make every page intentionally art-directed, with consistent margins and meaningful hierarchy.
7. Use verified historical project records; do not imply project photographs, testimonials, awards, certifications or metrics exist unless supplied.

## Motion language
- Restrained hero reveal with editorial timing.
- Scroll-based image masks and staggered captions.
- Subtle project-image depth and horizontal timeline where appropriate.
- Hover transitions that preserve legibility and touch usability.
- Prefer transform/opacity; avoid layout thrashing and excessive JS.
- Respect prefers-reduced-motion; no mandatory scroll hijacking.

## Pages
- Home: immersive art-directed hero, heritage, capabilities, flagship projects, approach, enquiry.
- Projects: curated featured projects + accessible complete archive of 26 brochure records.
- About: timeline beginning in 1987, team/capabilities with verified facts.
- Services: civil construction, land development, road works, drainage, water systems, landscape and related infrastructure.
- Contact: functional enquiry delivery only when destination and backend are configured.

## Non-negotiable QA
- Mobile first: 360px, 390px, 768px, 1024px, 1440px.
- Keyboard navigation, contrast, semantic landmarks, focus visibility.
- Avoid unlicensed photos, fake client testimonials, fabricated project images or unsupported claims.
- Optimize images, avoid heavy animation bundles, verify Lighthouse/Core Web Vitals.
- Build and lint before deployment.
- Do not declare production-ready until forms, navigation, content and responsive views are verified.

## Current implementation caveat
Existing homepage is a preliminary scaffold. It needs a full visual redesign and integration of brochure-backed project data. This document is a design brief, not proof that redesign is completed.

## Mobile-first implementation contract
- Start layout and interaction design at 360px, then 390/430px; tablet and desktop are progressive enhancements.
- Base CSS is single-column with generous readable margins; introduce multi-column layouts only when content benefits.
- Navigation: accessible menu button with aria-expanded, meaningful focus management and 44x44px minimum tap targets.
- Hero: visible primary message and CTA above the fold where practical, without fixed-height clipping.
- Media: responsive aspect ratios and sizes; lazy-load non-critical imagery and avoid autoplay mobile video.
- Forms: correct input types, clear labels, visible error states and keyboard-safe layouts.
- Motion: no scroll hijacking, avoid large animations on small devices and honor reduced motion.
- QA: test 320, 360, 390, 430, 768, 1024, 1440px, portrait and landscape; check overflow, menus, cards, forms, CLS and loading.
- Never call the website production-ready without real-device and build verification.
