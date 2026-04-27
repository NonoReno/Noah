# UI Component Libraries Research

> Researched on 2026-04-27 from official GitHub repositories.

---

## 1. HeroUI (formerly NextUI)
**Repository:** https://github.com/nextui-org/nextui  
**Stars:** ~29,100 | **Forks:** ~2,100  
**License:** Apache-2.0  

**Description:**  
Beautiful, fast and modern React UI library. Rebranded from NextUI to HeroUI as of v3.

**Key Features:**
- Pre-built, accessible React components
- Modern design system with Figma UI Kit
- Storybook integration for component documentation
- Monorepo with Turbo task orchestration

**Tech Stack:** TypeScript (57.5%), MDX (35.8%), CSS (4.5%)  
**Current Version:** v3.0.3 (April 2026)  
**Website:** heroui.com

---

## 2. daisyUI
**Repository:** https://github.com/saadeghi/daisyui  
**Stars:** ~40,800 | **Forks:** ~1,600  
**License:** MIT  

**Description:**  
The most popular free and open-source Tailwind CSS component library, providing 50+ semantic CSS class-based components.

**Key Features:**
- 50+ customizable components via Tailwind CSS utility classes
- Pure CSS — no JavaScript required
- Works with any framework (Svelte, React, Vue, Astro, etc.)
- Theming system with multiple built-in themes
- No JavaScript dependencies or framework lock-in

**Tech Stack:** Svelte (42.4%), JavaScript (29.4%), Astro (15.7%), CSS (12%)  
**Current Version:** v5.5.19 (February 2026)  
**Install:** `npm install daisyui`

---

## 3. Flowbite
**Repository:** https://github.com/themesberg/flowbite  
**Stars:** ~9,200 | **Forks:** ~862  
**License:** MIT  

**Description:**  
Open-source UI component library and front-end framework built on Tailwind CSS with 70+ components and multi-framework support.

**Key Features:**
- 70+ UI components (alerts, modals, tables, navbars, etc.)
- 5 built-in themes: Default, Minimal, Enterprise, Playful, Mono
- 400+ pre-coded Flowbite Blocks (page sections)
- 450+ SVG icons with React support
- Framework adapters: React, Vue, Svelte, Angular, Qwik
- RTL support and full TypeScript definitions
- FlowbiteGPT for AI-generated sections

**Tech Stack:** HTML (41.7%), TypeScript (23.9%), JavaScript (17.4%), CSS (17%)  
**Current Version:** v4.0.1  
**Tailwind CSS:** v4 compatible

---

## 4. Ant Design
**Repository:** https://github.com/ant-design/ant-design  
**Stars:** ~97,900 | **Forks:** ~31,000+**  
**License:** MIT  

**Description:**  
An enterprise-class UI design language and React component library — one of the most widely used design systems in the world.

**Key Features:**
- 60+ high-quality enterprise-grade React components
- Full TypeScript support with static types
- i18n: internationalization for dozens of languages
- CSS-in-JS theming system with deep customization
- Complete Figma design resources and developer tools
- SSR (Server-Side Rendering) and Electron support

**Tech Stack:** TypeScript (99.6%)  
**Build Tools:** Mako, Webpack, Father  
**Browser Support:** All modern browsers, SSR, Electron  
**Install:** `npm install antd`

---

## 5. Evergreen
**Repository:** https://github.com/segmentio/evergreen  
**Stars:** ~12,400 | **Forks:** ~813  
**License:** MIT  

**Description:**  
A React UI Framework for building ambitious products on the web, maintained by Segment. Enterprise-grade polished components with smart defaults.

**Key Features:**
- Polished, composable React components with smart defaults
- Built on React UI Primitives for flexible composition
- Robust SSR-compatible theming layer
- CSS-in-JS via `ui-box` library
- Storybook documentation

**Tech Stack:** JavaScript (88%), TypeScript (12%)  
**Build Tool:** Rollup  
**Current Version:** v7.1.9 (June 2023 — maintenance mode)  
**Website:** evergreen.segment.com

---

## 6. cmdk
**Repository:** https://github.com/pacocoursey/cmdk  
**Stars:** ~12,500  
**License:** MIT  

**Description:**  
A composable, accessible command menu React component (⌘K palette) that auto-filters and sorts items. Usable as a standalone palette or embedded combobox.

**Key Features:**
- Fully composable API (static JSX + dynamic wrapped items)
- Automatic item filtering and sorting
- Keyboard navigation with full customizability
- Accessible dialog and inline modes
- Nested items, groups, separators
- Custom filter functions
- Async item rendering
- Unstyled — CSS data-attributes for custom styling

**Tech Stack:** TypeScript (78.6%), SCSS (21.2%)  
**Dependencies:** React 18+, Radix UI Dialog  
**Performance:** Handles 2,000–3,000 items without virtualization  
**Current Version:** v1.1.1

---

## 7. Vaul
**Repository:** https://github.com/emilkowalski/vaul  
**Stars:** ~8,300 | **Forks:** ~349  
**License:** MIT  

**Description:**  
An unstyled, accessible drawer component for React — a mobile-friendly alternative to Dialog.

**Key Features:**
- Smooth drag-to-close gesture interaction
- Accessible dialog implementation
- Snap points support
- Fully unstyled — bring your own CSS
- Works with shadcn/ui and Tailwind CSS

**Tech Stack:** TypeScript (96.5%), CSS (3.2%)  
**Testing:** Playwright  
**Current Version:** v1.1.2 (December 2024)  
**Note:** Repository is currently unmaintained

---

## 8. shadcn/taxonomy
**Repository:** https://github.com/shadcn-ui/taxonomy  
**Stars:** ~19,200  
**License:** MIT  

**Description:**  
An experimental open-source Next.js 13 application showcasing the app directory, server components, auth, subscriptions, and content management.

**Key Features:**
- Next.js 13 app directory with layouts and routing
- Server + client components with data fetching/caching
- Authentication via NextAuth.js
- Database with Prisma + PlanetScale
- MDX blog/docs with Contentlayer
- Stripe subscription billing
- Built with Radix UI + Tailwind CSS + Zod

**Tech Stack:** TypeScript (72.2%), MDX (23.5%), JavaScript (2.9%), CSS (1.3%)  
**Status:** Archived — does not reflect current best practices. See Vercel Templates for updated examples.

---

## 9. Tremor
**Repository:** https://github.com/tremorlabs/tremor  
**Stars:** ~3,400 | **Forks:** ~150  
**License:** Apache-2.0  

**Description:**  
Copy-and-paste React components for building charts and dashboards. Built on Tailwind CSS and Radix UI.

**Key Features:**
- 35+ accessible, customizable React components
- Specialized for dashboards and data visualization
- Built on Tailwind CSS + Radix UI
- Full TypeScript support
- Storybook for component preview

**Tech Stack:** TypeScript (99.1%)  
**Build Tool:** Vite | **Testing:** Playwright  
**Install:** `npm install @tremor/react`  
**Community:** tremor.so, Slack

---

## 10. CVA (Class Variance Authority)
**Repository:** https://github.com/joe-bell/cva  
**Stars:** ~6,800 | **Forks:** ~132  
**License:** Apache-2.0  

**Description:**  
A TypeScript utility for building type-safe component styling variants using CSS class names. The standard pattern for variant-driven component APIs with Tailwind CSS.

**Key Features:**
- Variant-based class management (`cva()` helper)
- Compile-time type safety for all variants and compound variants
- Lightweight with zero runtime overhead
- Framework-agnostic — works with any CSS approach
- First-class Tailwind CSS support (pairs with `tailwind-merge`)

**Tech Stack:** TypeScript (99.6%)  
**NPM Package:** `class-variance-authority`  
**Current Version:** v0.7.1 (November 2024)  
**Website:** cva.style

---

## Comparison Summary

| Library | Category | Stars | Styling | Framework | Best For |
|---------|----------|-------|---------|-----------|----------|
| HeroUI | Component library | 29k | CSS/Tailwind | React | Modern React UIs |
| daisyUI | Component library | 41k | Tailwind CSS | Any | Quick Tailwind UIs |
| Flowbite | Component library | 9k | Tailwind CSS | Multi-framework | Multi-framework sites |
| Ant Design | Design system | 98k | CSS-in-JS | React | Enterprise apps |
| Evergreen | Design system | 12k | CSS-in-JS | React | Segment-style UIs |
| cmdk | Single component | 12k | Unstyled | React | Command palettes |
| Vaul | Single component | 8k | Unstyled | React | Mobile drawers |
| shadcn/taxonomy | App template | 19k | Tailwind CSS | Next.js 13 | Reference app (archived) |
| Tremor | Component library | 3k | Tailwind CSS | React | Dashboards & charts |
| CVA | Utility | 7k | Any CSS | Any | Variant class APIs |
