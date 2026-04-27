# Testing, Accessibility & Component Libraries Research

> Researched on 2026-04-27 from official GitHub repositories.

---

## 1. axe-core
**Repository:** https://github.com/dequelabs/axe-core  
**Stars:** ~7,100 | **Forks:** ~887  
**License:** Mozilla Public License 2.0 (MPL-2.0)  

**Description:**  
Accessibility engine for automated Web UI testing. Integrates into existing test pipelines to audit WCAG compliance with zero false positives.

**Key Features:**
- WCAG 2.0, 2.1, and 2.2 compliance auditing (levels A, AA, AAA)
- Detects ~57% of WCAG issues automatically
- Zero false positives philosophy
- Shadow DOM support and infinite iframe depth traversal
- 15+ locales with runtime locale configuration
- Works with all modern browsers and testing frameworks
- 99+ rules configurable per audit

**Tech Stack:** JavaScript (89.2%), HTML (10.5%)  
**Build:** Grunt + Babel + Jest  
**Current Version:** v4.11.3 (April 2026)  
**Install:** `npm install axe-core`  
**Security support:** 18-month window

---

## 2. Lighthouse
**Repository:** https://github.com/GoogleChrome/lighthouse  
**Stars:** ~30,100  
**License:** Apache-2.0  

**Description:**  
Automated auditing, performance metrics, and best practices for the web. Analyzes pages across performance, accessibility, SEO, and best practices.

**Key Features:**
- Audit categories: Performance, Accessibility, SEO, Best Practices
- Integrated in Chrome DevTools
- Node CLI and programmatic API for custom pipelines
- Network/CPU throttling simulation (4G, mid-tier mobile)
- Custom audit extensions
- Multiple output formats: HTML, JSON, CSV
- Gather/audit mode separation for artifact caching
- Runs entirely locally — no remote server

**Tech Stack:** JavaScript (94.1%), CSS (2.2%), TypeScript (1.8%)  
**Runtime:** Node.js 22 LTS+  
**Current Version:** v13.1.0  
**Install:** `npm install -g lighthouse`

---

## 3. Storybook
**Repository:** https://github.com/storybookjs/storybook  
**Stars:** ~89,800 | **Forks:** ~10,000  
**License:** MIT  

**Description:**  
Industry standard workshop for building, documenting, and testing UI components in isolation. Supports 12+ frameworks.

**Key Features:**
- Component isolation development environment
- Documentation addon (MDX-based)
- Testing addons: accessibility, interactions, visual regression
- Framework support: React, Vue, Angular, Svelte, Next.js, SvelteKit, Qwik, etc.
- Mobile support: React Native, Android, iOS, Flutter
- Rich plugin ecosystem
- Vite and Webpack build support

**Tech Stack:** TypeScript (79.9%), JavaScript (18.1%), MDX (0.7%)  
**Current Version:** v10.3.5  
**Install:** `npx storybook@latest init`

---

## 4. React Testing Library
**Repository:** https://github.com/testing-library/react-testing-library  
**Stars:** ~19,600 | **Forks:** ~1,200  
**License:** MIT  

**Description:**  
Lightweight testing utilities for React components focused on user behavior, not implementation details.

**Key Features:**
- DOM-based testing built on `react-dom/test-utils`
- Encourages testing what users see/interact with
- Query methods: `query*`, `get*`, `find*`
- Works with React Hooks and class components
- Pairs with `@testing-library/jest-dom` for custom matchers
- Custom hooks testing via `@testing-library/react-hooks`

**Guiding principle:** *"The more your tests resemble the way your software is used, the more confidence they can give you."*

**Tech Stack:** JavaScript (89.5%), TypeScript (10.5%)  
**Requires:** React v18 (RTL v13+), or React v16+ (RTL v12)  
**Current Version:** v16.3.2 (January 2026)

---

## 5. Cypress
**Repository:** https://github.com/cypress-io/cypress  
**Stars:** ~49,600 | **Forks:** ~3,400  
**License:** MIT  

**Description:**  
Fast, easy, and reliable end-to-end and component testing for anything that runs in a browser.

**Key Features:**
- End-to-end testing with real browser execution
- Component testing (React, Vue, Angular, Svelte)
- Time-travel debugging with snapshots
- Automatic waiting — no manual sleeps
- Test replay and CI video recording
- Cypress Cloud for test parallelization, analytics, flake detection
- Network request interception and stubbing

**Tech Stack:** TypeScript (55.3%), JavaScript (37.1%), Vue (4%), HTML (3%)  
**Architecture:** Monorepo (Lerna)  
**Current Version:** v15.14.1 (April 2026)  
**Install:** `npm install cypress --save-dev`

---

## 6. Playwright
**Repository:** https://github.com/microsoft/playwright  
**Stars:** ~87,400  
**License:** Apache-2.0  

**Description:**  
Microsoft's framework for reliable web automation and testing. Drives Chromium, Firefox, and WebKit with a single API — also used by AI agents.

**Key Features:**
- Cross-browser: Chromium, Firefox, WebKit in one API
- Auto-waiting and web-first assertions (no artificial timeouts)
- Full test isolation via fresh browser contexts
- Resilient locators mirroring user interactions
- Execution traces, screenshots, and video recording
- Parallel test execution
- VS Code extension for authoring/debugging
- MCP server for AI agent use
- Network mocking, PDF generation, mobile device emulation

**Tech Stack:** TypeScript (90.8%), HTML (4%), CSS (2.5%), C++ (0.8%)  
**Multi-language:** JS/TS, Python, .NET, Java  
**Supported browsers:** Chromium 147, Firefox 149, WebKit 26.4  
**Install:** `npm install @playwright/test`

---

## 7. Ark UI
**Repository:** https://github.com/chakra-ui/ark  
**Stars:** ~5,100 | **Forks:** ~192  
**License:** MIT  

**Description:**  
Unstyled, accessible UI components for design systems. Built on Zag.js finite state machines with perfect API parity across React, Vue, Solid, and Svelte.

**Key Features:**
- 45+ headless, WCAG-compliant components
- Completely unstyled — works with any CSS approach (Tailwind, Panda, Emotion, etc.)
- State machine architecture via Zag.js (predictable, testable)
- Identical API across React, Vue, Solid, Svelte
- Categories: overlays, forms, navigation, data display, utilities
- Full TypeScript support

**Tech Stack:** TypeScript (63.8%), Vue (15.4%), Svelte (15%), MDX (3.7%)  
**Maintained by:** Chakra UI team (Segun Adebayo)  
**Install:** `npm install @ark-ui/react`

---

## 8. React Spectrum (Adobe)
**Repository:** https://github.com/adobe/react-spectrum  
**Stars:** ~15,000 | **Forks:** ~1,400  
**License:** Apache-2.0  

**Description:**  
Adobe's collection of libraries for building adaptive, accessible, and robust user experiences. Four complementary packages.

**Key Features:**
- WAI-ARIA compliant with screen reader and keyboard support
- Adaptive: mouse, touch, and keyboard interactions
- 30+ languages including RTL support
- Dark mode and customizable theming
- Four core packages:
  - **React Spectrum** — Adobe-styled component library
  - **React Aria** — Unstyled accessible primitives (hooks)
  - **React Stately** — State management for components
  - **Internationalized** — Date, number, and locale utilities

**Tech Stack:** TypeScript (47.4%), MDX (25.8%), JavaScript (21.2%), CSS (5.3%)  
**Tested on:** Real screen readers across browsers and devices

---

## 9. Base Web (Uber)
**Repository:** https://github.com/uber/baseweb  
*(formerly baseweb/baseweb)*  
**Stars:** ~9,000 | **Forks:** ~866  
**License:** MIT  

**Description:**  
Uber's React implementation of the Base design system. Modern, responsive components built with Styletron CSS-in-JS.

**Key Features:**
- Full Base design system implementation
- Styletron CSS-in-JS styling engine
- Light/dark theme + full customization via `BaseProvider`
- TypeScript-first components
- Interactive Ladle playground
- Comprehensive component catalog

**Tech Stack:** TypeScript (82.8%), JavaScript (8.9%), MDX (8.3%)  
**Styling engine:** Styletron  
**NPM package:** `baseui`  
**Status:** Limited maintenance  
**Docs:** baseweb.design

---

## 10. Reach UI
**Repository:** https://github.com/reach/reach-ui  
**Stars:** ~6,000 | **Forks:** ~559  
**License:** MIT  

**Description:**  
The accessible foundation for React apps and design systems. Headless, WAI-ARIA compliant primitives for building custom UI.

**Key Features:**
- Pre-built accessible components: Accordion, Alert, Dialog, Menu Button, Tabs, Tooltip, Checkbox, and more
- Follows WAI-ARIA design patterns throughout
- Full TypeScript support
- Storybook integration for component development

**Tech Stack:** TypeScript (68.5%), JavaScript (18.3%), MDX (11.6%)  
**Build:** Turbo + pnpm workspace | **Testing:** Vitest  
**Status:** Currently unmaintained (see issue #972)  
**Docs:** reach.tech

---

## Comparison Summary

| Tool | Category | Stars | Framework | WCAG | Status |
|------|----------|-------|-----------|------|--------|
| Storybook | Dev workshop | 89.8k | Multi (12+) | — | Active |
| Playwright | E2E testing | 87.4k | Agnostic | — | Active |
| Cypress | E2E + Component | 49.6k | Multi | — | Active |
| Lighthouse | Audit tool | 30.1k | Agnostic | Partial | Active |
| React Testing Library | Unit testing | 19.6k | React | — | Active |
| React Spectrum | Component lib | 15k | React | Full | Active |
| Base Web | Design system | 9k | React | Partial | Limited |
| axe-core | A11y engine | 7.1k | Agnostic | Full | Active |
| Reach UI | Headless lib | 6k | React | Full | **Unmaintained** |
| Ark UI | Headless lib | 5.1k | Multi (4) | Full | Active |
