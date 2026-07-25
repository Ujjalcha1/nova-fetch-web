# ReactBits Integration Audit

> Generated: 2026-07-25
> Covers: all ReactBits components, duplicates, dead code, hydration risks

---

## 1. ReactBits Components — Inventory

```
src/components/reactbits/
├── index.ts            # Barrel — re-exports all 4 components
├── Aurora.tsx          # WebGL aurora (OGL/shaders)
├── Spotlight.tsx       # Page-level mouse-following gradient
├── SplitText.tsx       # GSAP scroll-triggered text split
└── SpotlightCard.tsx   # Per-card hover spotlight overlay
```

| Component | Used In | Install Method |
|-----------|---------|---------------|
| `Aurora` | `app/layout.tsx` | Local file (from `@react-bits` registry via `components.json`) |
| `Spotlight` | `app/layout.tsx` | Local file |
| `SplitText` | `components/hero/HeroContent.tsx` | Local file |
| `SpotlightCard` | `components/testimonials/TestimonialCard.tsx`, `components/screenshots/ScreenshotCard.tsx` | Local file |

All imports are clean — no legacy `@/reactbits/` paths remain. Registry URL is configured in `components.json`:
```json
"@react-bits": "https://reactbits.dev/r/{name}.json"
```

---

## 2. Duplicate Implementations

**No duplicate implementations of any ReactBits component exist.**

| Searched | Result |
|----------|--------|
| Glob `**/*aurora*` | Only `Aurora.tsx` in reactbits/ |
| Glob `**/*spotlight*` | Only `Spotlight.tsx`, `SpotlightCard.tsx` in reactbits/ |
| Glob `**/*split*` | Only `SplitText.tsx` in reactbits/ |
| Glob `**/*bento*` | None found |
| Glob `**/*grid*` | None found |
| Canvas/WebGL/OGL usage | Only `Aurora.tsx` |
| GSAP usage | Only `SplitText.tsx` in reactbits/ |

### Potential Visual Overlap (Not Duplicate)

| Custom Component | ReactBits Analogue | Verdict |
|-----------------|-------------------|---------|
| `BackgroundGlow.tsx` (framer-motion CSS pulse) | `Aurora` (WebGL shader) | **Not a duplicate.** Different technique (CSS vs WebGL), different visual output (soft glow vs aurora). No overlap. |
| `CTA.tsx` scroll-reveals (framer-motion `whileInView`) | `SplitText` (GSAP scroll-trigger) | **Not a duplicate.** Different implementation targets. CTA uses simple fade-up on 3 text elements. SplitText handles per-character splitting. |
| `WhyCard.tsx` hover lift (`whileHover: y: -10`) | `SpotlightCard` hover spotlight | **Not a duplicate.** Different effect (card lift vs spotlight gradient). They could coexist. |
| `FAQItem.tsx` accordion (framer-motion `AnimatePresence`) | ReactBits `Accordion` (not in project) | **Not a duplicate.** ReactBits Accordion is available but not imported here. |

---

## 3. Dead Imports (Legacy Cleanup Status)

| Old Broken Import | Status |
|------------------|--------|
| `import Aurora from "@/reactbits/Aurora/Aurora"` | ✅ **Fixed** — now `@/components/reactbits` |
| `import SplitText from "@/reactbits/SplitText/SplitText"` | ✅ **Fixed** — now `@/components/reactbits/SplitText` |
| `import MagicBento from "@/reactbits/MagicBento/MagicBento"` | ✅ **Removed** — no MagicBento in project |
| `import SpotlightCard from "@/components/reactbits/SpotlightCard"` in CTA.tsx | ✅ **Removed** — CTA no longer imports SpotlightCard |

Grep for `@/reactbits/` across entire `src/` → **0 results**. All legacy paths are clean.

---

## 4. Orphaned Files

**No orphaned files found.** All 47 `.tsx` files under `src/components/` are registered in a barrel file. All 5 files under `src/components/reactbits/` are properly exported via `index.ts` and consumed externally.

---

## 5. Dead Exports

**23 barrel exports are "dead"** (only consumed internally within their own directory, never imported from outside):

| Barrel | Dead Exports |
|--------|-------------|
| `why/index.ts` | `WhyCard` |
| `footer/index.ts` | `FooterColumn`, `SocialLinks` |
| `demo/index.ts` | `DownloadButtons`, `FakeLoader`, `QualitySelector`, `UrlInput`, `VideoPreview` |
| `faq/index.ts` | `FAQItem` |
| `cta/index.ts` | `BackgroundGlow`, `CTAButtons` |
| `testimonials/index.ts` | `Rating`, `TestimonialCard` |
| `layout/index.ts` | `Logo`, `NavLink` |
| `screenshots/index.ts` | `DeviceFrame`, `ScreenshotCard`, `ScreenshotTabs` |
| `hero/index.ts` | `HeroBadges`, `HeroButtons`, `HeroContent`, `HeroPreview`, `HeroStats` |

**ReactBits barrel is clean** — all 4 exports (`Aurora`, `Spotlight`, `SplitText`, `SpotlightCard`) are consumed externally.

These dead exports are a project architecture concern (barrel files as internal organizing tools) but not a ReactBits-specific issue. They follow the pattern of "export everything from barrel, let consumers pick what they need."

---

## 6. Duplicate Animations

Two animation libraries are active:

| Library | Files | Bundle Impact |
|---------|-------|--------------|
| `framer-motion` | 7 files — `WhyCard`, `TestimonialCard`, `HeroStats`, `HeroPreview`, `FAQItem`, `CTA`, `BackgroundGlow` | ~32 KB gzipped |
| `gsap` + plugins (`ScrollTrigger`, `SplitText`, `@gsap/react`) | 1 file — `SplitText.tsx` only | ~27 KB gzipped |

| # | Custom Animation | ReactBits Alternative | Notes |
|---|-----------------|----------------------|-------|
| 1 | `HeroPreview.tsx` floating cards (framer-motion `repeat: Infinity`) | None in project | Custom, no ReactBits overlap |
| 2 | `FAQItem.tsx` accordion (framer-motion `AnimatePresence`) | ReactBits `Accordion` | Available but not imported. Current impl is simpler |
| 3 | `CTA.tsx` scroll-reveal (framer-motion `whileInView`) | `SplitText` (GSAP) | Similar concept, different scope (SplitText splits chars) |
| 4 | `BackgroundGlow.tsx` infinite pulse | `Aurora` (WebGL) | Different visual — glow is CSS, aurora is shader |
| 5 | `WhyCard.tsx` / `TestimonialCard.tsx` hover lift | `SpotlightCard` | Different effect (lift vs spotlight) |

**No animation is truly duplicated.** Each serves a distinct purpose.

---

## 7. Hydration Risks

| Risk | Found? | Details |
|------|--------|---------|
| `useLayoutEffect` | 0 files | ✅ None |
| `window`/`document` in render | 0 files | ✅ All in `useEffect` (Spotlight, SplitText, Aurora) |
| `Math.random()` in render | 0 files | ✅ None |
| `Date.now()` in render | 0 files | ✅ None |
| `new Date().getFullYear()` in SSR | 1 file | ⚠️ `Footer.tsx:40` — evaluates at build time, consistent on client. No mismatch but won't auto-update |
| `"use client"` misplacement | 0 files | ✅ 20 directives all correctly placed at leaf components |
| WebGL canvas outside React | 1 file | ⚠️ `Aurora.tsx` — `appendChild(gl.canvas)` bypasses React reconciliation. Fragile if parent `<div>` re-renders |

**No hydration-breaking issues.** Two medium-risk items:
- **Aurora.tsx** WebGL canvas lifecycle (manual DOM, not React-managed)
- **Footer.tsx** static year (minor, won't break anything)

---

## 8. Files Summary

### KEEP — 5 files

| File | Reason |
|------|--------|
| `src/components/reactbits/Aurora.tsx` | Core background effect, WebGL shader. No duplicates. |
| `src/components/reactbits/Spotlight.tsx` | Core page-level effect. No duplicates. |
| `src/components/reactbits/SplitText.tsx` | Only GSAP-using component, scroll-triggered text. No duplicates. |
| `src/components/reactbits/SpotlightCard.tsx` | Card hover effect, used in 2 places. No duplicates. |
| `src/components/reactbits/index.ts` | Barrel file. Clean. |

### REPLACE — 0 files

No ReactBits component has a duplicate that needs replacing.

### DELETE — 0 files

No orphaned or dead ReactBits components.

### NEEDS REFACTOR — 2 files

| File | Issue | Recommendation |
|------|-------|---------------|
| `src/components/reactbits/Aurora.tsx` | WebGL canvas injected via `appendChild` outside React reconciliation. If React re-renders the parent `<div>`, the canvas could be orphaned. | Use a React ref to manage canvas lifecycle. Ensure cleanup in `useEffect` return destroys the renderer. |
| `src/components/reactbits/SplitText.tsx` | Uses GSAP (27 KB) for a single component. The rest of the project uses framer-motion (32 KB). Total animation bundle: ~59 KB. | Consider porting to framer-motion's `useInView` + `motion.span` (no GSAP dep) to pull ~27 KB out of the bundle. Non-critical — GSAP animations are richer. |

---

## 9. Peripheral Files to Consider

| File | Verdict |
|------|---------|
| `BackgroundGlow.tsx` | **Keep as-is.** CSS-based glow, different from Aurora's WebGL. Not a duplicate. |
| `FAQItem.tsx` | **Keep as-is.** Custom accordion is simpler than ReactBits Accordion. No duplicate. |
| `CTA.tsx` | **Keep as-is.** Simple scroll-reveal with framer-motion. Not a duplicate of SplitText. |
| `WhyCard.tsx` | **Keep as-is.** Hover lift is not a duplicate of SpotlightCard. |
| `TestimonialCard.tsx` | **Keep as-is.** Wraps SpotlightCard with extra hover lift. Complementary, not duplicate. |
| `HeroPreview.tsx` | **Keep as-is.** Floating card animation is custom. No ReactBits equivalent. |

---

## 10. Conclusion

**ReactBits integration is clean.** All 4 components are correctly imported via `@/components/reactbits/`, all legacy paths are purged, and no duplicate implementations exist. The project carries two animation libraries (framer-motion + GSAP) for ~59 KB total gzipped, which is acceptable for a marketing site with rich animations.

| Metric | Value |
|--------|-------|
| ReactBits components in use | 4 |
| Duplicate implementations | 0 |
| Orphaned ReactBits files | 0 |
| Dead ReactBits exports | 0 |
| Legacy import paths remaining | 0 |
| Animation libraries | 2 (framer-motion 7 files + GSAP 1 file) |
| Hydration-critical issues | 0 |
| Medium-risk items | 2 (Aurora canvas lifecycle, SplitText GSAP dependency) |
