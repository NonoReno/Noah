# JavaScript Frameworks Research

> Researched on 2026-04-27 from official GitHub repositories.

---

## 1. Next.js
**Repository:** https://github.com/vercel/next.js  
**Stars:** ~139,000 | **Forks:** ~31,000  
**License:** MIT  

**Description:**  
The React Framework for building full-stack web applications. Extends React with built-in optimizations and Rust-based tooling for high performance.

**Key Features:**
- Server-Side Rendering (SSR) and Static Site Generation (SSG)
- Hybrid rendering per page
- Rust-based compiler (Turbopack) for fast builds
- Full-stack capabilities (API routes, middleware)
- Image, font, and script optimization

**Tech Stack:** JavaScript (54.6%), TypeScript (30.7%), Rust (13.4%)  
**Maintained by:** Vercel

---

## 2. Gatsby
**Repository:** https://github.com/gatsbyjs/gatsby  
**License:** MIT  

**Description:**  
A React-based framework combining the speed of static-site generation with dynamic application functionality.

**Key Features:**
- Multiple rendering modes: SSG, Deferred Static Generation (DSG), SSR per page
- GraphQL-based data layer with source plugins
- Automatic performance optimizations: code splitting, image optimization, lazy-loading, prefetching
- Pulls data from Markdown, headless CMS, REST, or GraphQL APIs
- Deployable on CDNs and free hosting platforms (Netlify, etc.)

**Tech Stack:** React + GraphQL  
**Architecture:** Monorepo managed with Lerna

---

## 3. SolidJS
**Repository:** https://github.com/solidjs/solid  
**License:** MIT  

**Description:**  
A declarative JavaScript library for creating user interfaces. Compiles templates to real DOM nodes with fine-grained reactivity — no Virtual DOM.

**Key Features:**
- Fine-grained reactivity via primitives like `createSignal`
- Render-once components (regular JS functions, run once)
- Automatic dependency tracking
- JSX, Fragments, Context, Portals, Suspense, Error Boundaries
- Streaming SSR and progressive hydration
- Web Component support
- Fully tree-shakable

**Performance:** Benchmarks near vanilla JavaScript speed  
**Browser Support:** Last 2 years of modern browsers; Node LTS, Deno, Cloudflare Workers

---

## 4. Qwik
**Repository:** https://github.com/qwikdev/qwik  
**License:** MIT  

**Description:**  
A web framework focused on instant-loading web apps regardless of application size or complexity.

**Key Features:**
- **Resumable architecture** — picks up execution where the server left off without replaying
- Precision lazy-loading: only loads components on user interaction
- Near-zero initial JavaScript delivery
- Compatible with React, Vue, and other ecosystems via Mitosis

**Ecosystem:** Partytown (third-party scripts), Mitosis (cross-framework), Builder.io CMS  
**Install:** `npm create qwik@latest`

---

## 5. Alpine.js
**Repository:** https://github.com/alpinejs/alpine  
**License:** MIT  

**Description:**  
A lightweight JavaScript framework for adding reactive and interactive behavior directly in HTML with minimal complexity.

**Key Features:**
- Declarative reactivity in HTML attributes
- Plugin ecosystem: Collapse, Focus, Intersect, Mask, Morph, Persist, History
- CSP-safe build variant
- Multiple build formats: CDN self-initializing, ESM, CJS
- No build step required

**Architecture:** Monorepo (npm workspaces)  
**Build Tool:** ESBuild | **Testing:** Cypress + Vitest

---

## 6. Preact
**Repository:** https://github.com/preactjs/preact  
**License:** MIT  

**Description:**  
A fast 4kB alternative to React with the same modern API and full React compatibility via `preact/compat`.

**Key Features:**
- 4kB minified bundle size
- ES6 Classes, hooks, and functional components
- React compatibility layer (`preact/compat`)
- JSX and HTM (Hyperscript Tagged Markup) support
- Optimized diff algorithm
- Server-Side Rendering with seamless hydration
- DevTools and Hot Module Replacement
- Transparent async rendering with pluggable scheduler

**Browser Support:** All modern browsers

---

## 7. Ember.js
**Repository:** https://github.com/emberjs/ember.js  
**License:** MIT  

**Description:**  
A mature, opinionated JavaScript framework focused on developer productivity through conventions and long-term stability.

**Key Features:**
- Convention-over-configuration approach
- URL-aware built-in router with template rendering and data loading
- Autotracking reactivity system for automatic UI updates
- HTML-first component architecture
- Ember Data for data management (pluggable backends)
- LTS releases with 30 weeks security maintenance
- Modern JS: classes, decorators, generators
- Addon ecosystem rated via Ember Observer

**Notable:** Apps built with early Ember versions remain functional today  
**Available as:** `ember-source` on npm

---

## 8. Meteor
**Repository:** https://github.com/meteor/meteor  
**License:** MIT  

**Description:**  
An ultra-simple full-stack platform for building modern web, mobile, and desktop applications with JavaScript.

**Key Features:**
- Single codebase for web, iOS, Android, and desktop
- Pre-integrated support for React, Vue, Svelte, Blaze, Solid
- Real-time data synchronization out of the box
- Rapid prototyping with minimal configuration
- NPM-based package management + Atmosphere registry
- Galaxy cloud hosting platform

**Current Version:** 3.4.0  
**Install:** `npx meteor`

---

## 9. Marko
**Repository:** https://github.com/marko-js/marko  
**Stars:** ~14,400 | **Forks:** ~668  
**License:** MIT  

**Description:**  
A declarative, HTML-based language that makes building web apps fun. Extends standard HTML with modern programming capabilities.

**Key Features:**
- Components and custom tags
- Conditionals and loops in HTML syntax
- Full reactivity system
- Isomorphic: Server-Side and Client-Side rendering
- Streaming SSR
- Fine-grained partial hydration (via `@marko/runtime-tags`)

**Tech Stack:** JavaScript (66.5%), TypeScript (21.1%), Marko (6.7%), HTML (5.7%)  
**Latest Release:** `@marko/runtime-tags@6.0.167` (April 2026)

---

## 10. Stencil
**Repository:** https://github.com/stenciljs/core  
**Stars:** ~13,100 | **Forks:** ~835  
**License:** MIT  

**Description:**  
A compiler for building scalable, enterprise-ready Web Component systems using TypeScript and JSX, developed by the Ionic team.

**Key Features:**
- TypeScript + JSX for component development
- Generates native Web Components (standards-compliant)
- Framework-agnostic: components work in React, Angular, Vue, and vanilla HTML
- Shadow DOM support
- Decorator-based component architecture (`@Component`, `@Prop`, etc.)
- Static Site Generation (SSG) / SSR support
- Single codebase distributed across all frameworks

**Tech Stack:** TypeScript (97.9%)  
**Current Version:** v4.43.4  
**Maintained by:** Ionic team

---

## Comparison Summary

| Framework | Type | Size | Rendering | Virtual DOM | Best For |
|-----------|------|------|-----------|-------------|----------|
| Next.js | Full-stack framework | Large | SSR/SSG/CSR | Yes (React) | Production React apps |
| Gatsby | Static site framework | Large | SSG/DSG/SSR | Yes (React) | Content-heavy sites |
| SolidJS | UI library | Small | CSR/SSR | No (fine-grained) | High-performance UIs |
| Qwik | Full-stack framework | Medium | Resumable SSR | No | Instant-load apps |
| Alpine.js | Micro-framework | Tiny | CSR | No | Progressive enhancement |
| Preact | UI library | 4kB | CSR/SSR | Yes (minimal) | React replacement |
| Ember.js | Full framework | Large | CSR/SSR | Yes | Convention-based apps |
| Meteor | Full-stack platform | Large | CSR/SSR/Real-time | Yes | Real-time apps |
| Marko | UI language | Small | SSR/CSR/Streaming | No (compiled) | SSR-first apps |
| Stencil | Web Component compiler | Small | CSR/SSR | No (native) | Design systems |
