# Animation & Scroll Libraries Research

> Researched on 2026-04-27 from official GitHub repositories.

---

## 1. GSAP (GreenSock Animation Platform)
**Repository:** https://github.com/greensock/GSAP  
**Stars:** ~24,500 | **Forks:** ~2,000  
**License:** GreenSock Standard (now fully free, Webflow-sponsored)  

**Description:**  
Framework-agnostic JavaScript animation library. Turns developers into "animation superheroes" — 20x faster than jQuery, works with CSS, SVG, canvas, React, Vue, WebGL.

**Key Features:**
- High-speed property tweening (20× faster than jQuery)
- Advanced timeline sequencing and playback control
- ScrollTrigger plugin for scroll-based animations
- Responsive animations via `gsap.matchMedia()`
- Plugins: MorphSVG, SplitText, MotionPathPlugin, Draggable
- React integration via `@gsap/react` hook
- Zero dependencies

**Tech Stack:** JavaScript (98.6%), TypeScript (1.4%)  
**Distribution:** CDN (jsDelivr), npm, direct download  
**Used on:** 12+ million websites

---

## 2. Lenis (smooth scroll)
**Repository:** https://github.com/darkroomengineering/lenis  
*(formerly studio-freight/lenis — repo migrated)*  
**Stars:** ~13,700 | **Forks:** ~541  
**License:** MIT  

**Description:**  
Lightweight, high-performance smooth scrolling library by darkroom.engineering. Enables buttery smooth scroll with WebGL sync, parallax, and GSAP ScrollTrigger compatibility.

**Key Features:**
- Smooth scrolling with customizable easing and duration
- Nested scroll support (`allowNestedScroll`)
- Anchor link navigation with scroll-to
- Touch and wheel event handling with multiplier controls
- Framework adapters: React, Vue, Framer
- GSAP ScrollTrigger compatibility
- Infinite scrolling and virtual scroll
- ResizeObserver for automatic dimension updates

**Tech Stack:** TypeScript (76.3%), Astro (13.2%), CSS (3.8%), Vue (3.7%)  
**Package Manager:** Bun | **Current Version:** v1.3.23 (April 2026)  
**Defaults:** lerp 0.1, duration 1.2s, capped at 60fps (30fps low-power)

---

## 3. Locomotive Scroll
**Repository:** https://github.com/locomotivemtl/locomotive-scroll  
**Stars:** ~8,800 | **Forks:** ~1,100  
**License:** MIT  

**Description:**  
Lightweight modern scroll library for detection, animation, and smooth scrolling. Built on top of Lenis for improved performance.

**Key Features:**
- 9.4kB gzipped
- TypeScript-first with full typings
- Built on Lenis core
- Dual Intersection Observers for optimized element detection
- Smart touch detection (parallax auto-disabled on mobile)
- Accessible: native scrollbar + keyboard navigation
- Data attribute API (`data-scroll`, `data-scroll-speed`)

**Tech Stack:** JavaScript (38%), SCSS (25.7%), HTML (13.5%), TypeScript (12.3%)  
**Current Version:** v5.0.1 (January 2026)  
**Docs:** scroll.locomotive.ca/docs

---

## 4. react-spring
**Repository:** https://github.com/pmndrs/react-spring  
**Stars:** ~29,100 | **Forks:** ~1,200  
**License:** MIT  

**Description:**  
Spring physics-based React animation library. Provides fluid, natural animations across all React rendering targets.

**Key Features:**
- Spring-physics animations by default
- Duration/easing as alternative modes
- Cross-platform: `react-dom`, `react-native`, `react-three-fiber`, `react-konva`, `react-zdog`
- Declarative and imperative APIs
- Simple hook API (`useSpring`, `useTrail`, `useTransition`, `useChain`)

**Tech Stack:** TypeScript (98.8%)  
**Architecture:** Monorepo (`@react-spring/web`, `@react-spring/native`, etc.)  
**Current Version:** v10.0.3 (September 2025)  
**Notable users:** Next.js, CodeSandbox, Aragon

---

## 5. AOS (Animate On Scroll)
**Repository:** https://github.com/michalsnik/aos  
**Stars:** ~28,100  
**License:** MIT  

**Description:**  
JavaScript library that triggers CSS animations when elements scroll into the viewport. Declarative via data attributes.

**Key Features:**
- 20+ animation types: fade, flip, slide, zoom variants
- Customizable duration, delay, easing per element
- Anchor placement options for precise trigger points
- `aos:in` / `aos:out` event system
- Mobile responsiveness controls
- MutationObserver for automatic DOM change detection
- External CSS library compatible

**Tech Stack:** JavaScript (86.2%), CSS (13.8%)  
**Build:** Rollup + Babel  
**Usage:** `AOS.init()` + `data-aos="fade-up"` attributes  
**Duration range:** 0–3000ms in 50ms increments

---

## 6. AutoAnimate
**Repository:** https://github.com/formkit/auto-animate  
**Stars:** ~13,800 | **Forks:** ~251  
**License:** MIT  

**Description:**  
Zero-config, drop-in animation utility. Adds smooth transitions to any DOM mutations (add, remove, move elements) with a single line of code.

**Key Features:**
- Single-line integration
- Zero configuration required
- Framework-agnostic (React, Vue, Solid, vanilla JS)
- Animates list reorders, item additions/removals, conditional rendering
- Custom animation function support

**Tech Stack:** TypeScript (91.6%), Shell (6.7%), JavaScript (1.4%)  
**Install:** `npm install @formkit/auto-animate`  
**Docs:** auto-animate.formkit.com  
**Maintained by:** FormKit team

---

## 7. ScrollReveal
**Repository:** https://github.com/jlmakes/scrollreveal  
**Stars:** ~22,500 | **Forks:** ~2,200  
**License:** GPLv3 (open source) / Commercial license available  

**Description:**  
Animate elements as they scroll into view. Lightweight (5.7kB min+gz), zero-dependency, singleton-pattern library.

**Key Features:**
- Viewport-triggered element animations
- 5.7kB minified + gzipped
- CommonJS and ES2015 module support
- Singleton pattern for consistent instance management
- `ScrollReveal().reveal()` API for flexible configuration
- CDN and npm installation

**Tech Stack:** JavaScript (100%)  
**Install:** `npm install scrollreveal`  
**Docs:** scrollrevealjs.org  
**Note:** GPLv3 — commercial projects require a paid license

---

## 8. lax.js
**Repository:** https://github.com/alexfoxy/lax.js  
**Stars:** ~10,500 | **Forks:** ~487  
**License:** MIT  

**Description:**  
Simple & lightweight (<4kB gzipped) vanilla JS library for smooth, beautiful scroll-driven animations with multiple input drivers.

**Key Features:**
- Multiple animation drivers: scroll position, mouse, time, custom inputs
- Preset animations via HTML classes
- Inertia scroll effects
- Custom CSS property bindings (opacity, transforms, filters, etc.)
- Custom easing functions
- Framework compatible (React, Vue, Angular)
- <4kB gzipped

**Tech Stack:** JavaScript (100%)  
**Current Version:** v2.0.3  
**Status:** Archived (May 2025) — read-only, no longer maintained  
**CDN:** jsDelivr

---

## 9. Parallax.js
**Repository:** https://github.com/wagerfield/parallax  
**Stars:** ~16,600 | **Forks:** ~2,100  
**License:** MIT  

**Description:**  
Parallax engine that reacts to device orientation (gyroscope). Falls back to cursor position tracking when motion sensors are unavailable.

**Key Features:**
- Gyroscope / accelerometer input for parallax
- Mouse cursor fallback on desktops
- Configurable layer depth and sensitivity
- Friction and easing for smooth motion
- Declarative HTML attribute config
- No jQuery required

**Tech Stack:** JavaScript (100%)  
**Build:** Gulp + Babel + Browserify  
**Current Version:** v3.1 (September 2017 — unmaintained)  
**Install:** CDN, npm, or direct download

---

## 10. darkroomengineering/lenis *(see entry #2)*
**Repository:** https://github.com/darkroomengineering/lenis  

> This is the canonical, actively maintained home of Lenis. The original `studio-freight/lenis` repository has been migrated here. See entry #2 for full details.

---

## Comparison Summary

| Library | Stars | Size | Input | Framework | Status |
|---------|-------|------|-------|-----------|--------|
| GSAP | 24.5k | Full-featured | Any | Agnostic | Active |
| Lenis | 13.7k | Lightweight | Scroll/Touch | Agnostic | Active |
| Locomotive Scroll | 8.8k | 9.4kB gz | Scroll | Agnostic | Active |
| react-spring | 29.1k | Medium | Physics | React only | Active |
| AOS | 28.1k | Lightweight | Scroll | Agnostic | Active |
| AutoAnimate | 13.8k | Micro | DOM mutations | Agnostic | Active |
| ScrollReveal | 22.5k | 5.7kB gz | Scroll | Agnostic | Active |
| lax.js | 10.5k | <4kB gz | Scroll/Mouse/Time | Agnostic | **Archived** |
| Parallax.js | 16.6k | Small | Gyroscope/Mouse | Agnostic | **Unmaintained** |
