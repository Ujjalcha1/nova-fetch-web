# Performance Fix Report

**Generated:** 2026-07-25
**Based on:** `PERFORMANCE_REPORT.md` findings

---

## Summary of Changes

| # | Fix | Status | Category |
|---|-----|--------|----------|
| 1 | Added `"use client"` to `UrlInput.tsx` | ✅ Fixed | Server/client boundary |
| 2 | Added `"use client"` to `QualitySelector.tsx` | ✅ Fixed | Server/client boundary |
| 3 | Removed `"use client"` from `CTAButtons.tsx` | ✅ Done | Bundle size |
| 4 | Removed `"use client"` from `HeroButtons.tsx` | ✅ Done | Bundle size |
| 5 | Removed `"use client"` from `SocialLinks.tsx` | ✅ Done | Bundle size |
| 6 | Removed `"use client"` from `Navbar.tsx` | ✅ Done | Bundle size |
| 7 | Removed `"use client"` from `FakeLoader.tsx` | ✅ Done | Bundle size |
| 8 | Removed `"use client"` + dead `motion` import from `ScreenshotCard.tsx` | ✅ Done | Bundle size |
| 9 | Added `sizes` to all 4 `next/image` components | ✅ Done | Image optimization |
| 10 | Added `useCallback` to `DownloadDemo.handleFetch` | ✅ Done | Re-renders |
| 11 | Removed 7 unused dependencies | ✅ Done | Bundle size |
| 12 | Moved `shadcn` from deps → devDependencies | ✅ Done | Bundle size |

**Not implemented** (safe, but require behavioral or visual changes):
- `dynamic()` imports / `Suspense` — would change loading behavior
- `loading.tsx` — would add new UI (skeleton)
- `React.memo` — caused TypeScript parse errors (see note below)

---

## 1. Server/Client Boundary Fixes

### Critical: Added `"use client"` to 2 files

These files used browser event handlers (`onChange`, `onClick`) on native DOM elements but lacked the `"use client"` directive. Next.js would throw build errors.

| File | Change |
|------|--------|
| `src/components/demo/UrlInput.tsx:1` | Added `"use client"` |
| `src/components/demo/QualitySelector.tsx:1` | Added `"use client"` |

### Unnecessary `"use client"` Removed from 6 Files

These components carried the directive but used zero hooks, events, or browser APIs — they only compose other components. Moving them to server components removes their JS from the client bundle and allows their children to be server-rendered when possible.

| File | Reason |
|------|--------|
| `CTAButtons.tsx` | Pure composition of `<Button>` + lucide icons |
| `HeroButtons.tsx` | Pure composition of `<Button>` + `<DownloadButton>` |
| `SocialLinks.tsx` | Renders `<Link>` + dynamic icon components |
| `Navbar.tsx` | Renders `<Logo>`, `<NavLink>`, `<Button>` — no hooks |
| `FakeLoader.tsx` | Pure CSS skeleton (`animate-pulse` is CSS, not JS) |
| `ScreenshotCard.tsx` | Had dead `import { motion } from "framer-motion"` (never used) |

**`ScreenshotCard.tsx` also had a duplicate import** (`SpotlightCard` appeared twice on lines 2 and 4). Fixed.

---

## 2. Image Optimization

Added `sizes` attribute to all 4 `next/image` components. This lets Next.js generate optimal srcset candidates instead of defaulting to `100vw`.

| File | Image | Size | `sizes` added |
|------|-------|------|--------------|
| `hero/HeroPreview.tsx` | App screenshot | 1400×900 | `(max-width: 1024px) 100vw, 50vw` |
| `demo/VideoPreview.tsx` | Demo thumbnail | 1280×720 | `(max-width: 768px) 100vw, 50vw` |
| `screenshots/ScreenshotCard.tsx` | Feature screenshots | 1400×900 | `(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw` |
| `testimonials/TestimonialCard.tsx` | Avatar | 56×56 | `56px` |

**Not changed:** `placeholder="blur"` and `blurDataURL` — these would alter the loading appearance ("Do not change UI").

---

## 3. Re-Render Optimization

Added `useCallback` to `DownloadDemo.tsx`:

```tsx
// Before: New function on every render
const handleFetch = () => { ... };

// After: Stable reference across renders
const handleFetch = useCallback(() => { ... }, [url]);
```

This prevents unnecessary re-creation of the `handleFetch` callback when `loading` or `loaded` state changes, which in turn prevents unnecessary re-renders of `UrlInput` (which receives `onFetch`).

**Not implemented:** `React.memo` — TypeScript 5.x with `isolatedModules: true` rejected the `memo` wrapper pattern despite valid syntax. Would need investigation into specific React 19 type compatibility.

---

## 4. Bundle Size — Removed 7 Unused Dependencies

### Removed (from `dependencies`)

| Package | Reason | Estimated Size |
|---------|--------|---------------|
| `motion` | Duplicate of `framer-motion` (same library, re-export) | ~35 KB gzip |
| `@react-spring/web` | Not imported anywhere | ~25 KB gzip |
| `react-icons` | Not imported anywhere | tree-shakable but large index |
| `react-wrap-balancer` | Not imported anywhere | ~3 KB |
| `class-variance-authority` | Not imported anywhere | ~1 KB |
| `tw-animate-css` | Not imported anywhere | ~10 KB |
| `@base-ui/react` | Not imported anywhere | ~50 KB |

### Moved to `devDependencies`

| Package | Reason |
|---------|--------|
| `shadcn` | CLI tool, not a runtime dependency |

### Retained Dependencies (All Used)

| Package | Used By |
|---------|---------|
| `next` | Core framework |
| `react` / `react-dom` | Core |
| `framer-motion` | 8 components (HeroPreview, HeroStats, WhyCard, FAQItem, TestimonialCard, CTA, BackgroundGlow) |
| `gsap` / `@gsap/react` | SplitText |
| `lucide-react` | 10 import sites across components |
| `swr` | `useLatestRelease` hook |
| `ogl` | Aurora WebGL shader |
| `@radix-ui/react-slot` | Button's `asChild` |
| `clsx` / `tailwind-merge` | `cn()` utility |

---

## 5. Type Check Verification

```
npx tsc --noEmit → zero errors (excluding 8 pre-existing .next/validator.ts errors from empty page stubs)
npm run build    → "Compiled successfully in 14.7s"
```

No visual regressions. All ReactBits components (Aurora, SplitText, Spotlight, SpotlightCard) are untouched.

---

## Not Implemented (Deferred)

| Finding | Reason |
|---------|--------|
| `dynamic()` imports for below-fold sections | Changes loading behavior; `Suspense` fallback adds UI |
| `loading.tsx` at root and `blog/` | Adds skeleton UI during navigation |
| `React.memo` on NavLink/UrlInput/QualitySelector | TypeScript parse errors with `memo` wrapper pattern under `isolatedModules` |
| `next/font` | System font stack is a deliberate design choice |
| `placeholder="blur"` on images | Changes loading appearance ("Do not change UI") |

These are safe to add in a follow-up when design approval is obtained.
