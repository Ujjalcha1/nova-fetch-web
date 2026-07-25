# Performance Audit Report

**Generated:** 2026-07-25
**Project:** Nova Fetch Web (Next.js 16.2.11, React 19.2.4)

---

## 1. Dynamic Imports (`next/dynamic`, `React.lazy`)

**Status: 🔴 Not Used**

Zero instances of `dynamic()` or `React.lazy()` exist. Every one of the **25 client components** is eagerly loaded in the initial bundle. The home page (`page.tsx`) imports 10 section components directly, all of which resolve eagerly.

### Impact
- All animation libraries (framer-motion, GSAP, framer-motion's `motion`) and their client components are loaded on initial page visit
- Sections below the fold (FAQ, Footer, Screenshots, CTA) contribute JS that isn't needed until the user scrolls

### Recommendation
At minimum, defer below-fold sections with `dynamic(import, { ssr: false })` or wrap in `Suspense`:

```tsx
const FAQ = dynamic(() => import("@/components/faq/FAQ"), { ssr: false });
const Screenshots = dynamic(() => import("@/components/screenshots/Screenshots"));
```

**Potential saving:** ~40-60KB of client JS deferred from initial load.

---

## 2. `next/image` Optimization

**Status: 🟡 4 files, all missing key optimization props**

| File | Priority | Sizes | Loading | Placeholder | blurDataURL |
|------|----------|-------|---------|-------------|-------------|
| `hero/HeroPreview.tsx` | ✅ Yes | ❌ | ❌ | ❌ | ❌ |
| `demo/VideoPreview.tsx` | ❌ | ❌ | ❌ | ❌ | ❌ |
| `screenshots/ScreenshotCard.tsx` | ❌ | ❌ | ❌ | ❌ | ❌ |
| `testimonials/TestimonialCard.tsx` | ❌ | ❌ | ❌ | ❌ | ❌ |

### Issues

**Missing `sizes` (4/4 files):** Without `sizes`, Next.js defaults to `100vw`, generating overly large srcset candidates. For responsive images:

| File | Optimal `sizes` |
|------|----------------|
| `HeroPreview.tsx` (2-col grid) | `sizes="(max-width: 1024px) 100vw, 50vw"` |
| `VideoPreview.tsx` (full-width) | `sizes="(max-width: 768px) 100vw, 50vw"` |
| `ScreenshotCard.tsx` (grid) | `sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"` |
| `TestimonialCard.tsx` (avatar) | `sizes="56px"` (fixed size) |

**Missing `priority` (3/4 files):** Only `HeroPreview.tsx` uses `priority` (correct, it's above the fold). `ScreenshotCard` and `TestimonialCard` images are lazy-loaded by default (correct). `VideoPreview` (demo section, below fold) is also correctly lazy.

**Missing `placeholder="blur"` (4/4 files):** All images load with an instantaneous hard edge. Adding `placeholder="blur"` with a `blurDataURL` (inline base64 or static import) eliminates layout shift and provides a smooth load transition.

**Mixed image formats:** Screenshots use both `.jpg` (`home.jpg`, `completed.jpg`, `settings.jpg`) and `.webp` (`queue.webp`). All should ideally be `.webp` or `.avif` for production.

---

## 3. Font Optimization

**Status: 🔴 Not Used**

No `next/font` import exists anywhere in `src/`. The project relies entirely on Tailwind's default system font stack (which is fine for performance — zero network requests) but misses the opportunity for custom brand fonts.

| Font mechanism | Bundle size | Network requests | Notes |
|---------------|-------------|------------------|-------|
| Tailwind system-font stack | 0 KB | 0 | Current — fast but generic |
| `next/font/google` | ~5-15 KB | 0 (self-hosted) | Would add brand typography |

### Recommendation
If a custom font is desired (e.g. Inter, Geist), use `next/font` to self-host. If the current system-font look is intentional, document that this is a deliberate performance trade-off.

---

## 4. Lazy Loading

**Status: 🔴 Not Used**

| Technique | Used? | Count |
|-----------|-------|-------|
| `next/dynamic` | ❌ | 0 |
| `React.lazy()` | ❌ | 0 |
| `Suspense` boundaries | ❌ | 0 |
| `loading.tsx` (Next.js route Suspense) | ❌ | 0 |
| Intersection Observer for below-fold content | ❌ | 0 |

Every component loads eagerly. No code splitting exists beyond the default Next.js route-level chunking.

---

## 5. Bundle Size — Dependencies

**Status: 🟡 Multiple redundant/unused libraries**

### Dependencies Currently Used

| Package | Used? | Estimated Size (gzip) | Notes |
|---------|-------|----------------------|-------|
| `next` | ✅ (core) | ~150 KB | Framework |
| `react` | ✅ (core) | ~45 KB | |
| `react-dom` | ✅ (core) | ~130 KB | |
| `framer-motion` | ✅ (8 files) | ~35 KB | Used in hero, why, cta, screenshots, testimonials, faq |
| `gsap` | ✅ (2 files) | ~50 KB | SplitText + MagicBento (future) |
| `@gsap/react` | ✅ (1 file) | ~2 KB | SplitText hook |
| `lucide-react` | ✅ (10 import sites) | tree-shakable | Only used icons will be in bundle |
| `swr` | ✅ (1 file) | ~15 KB | `useLatestRelease` hook |
| `ogl` | ✅ (1 file) | ~10 KB | Aurora WebGL shader |
| `@radix-ui/react-slot` | ✅ (1 file) | ~3 KB | Button's `asChild` |
| `clsx` | ✅ (1 file) | ~0.5 KB | `cn()` utility |
| `tailwind-merge` | ✅ (1 file) | ~7 KB | `cn()` utility |
| `tailwindcss` | ✅ (dev) | — | |
| `typescript` | ✅ (dev) | — | |

### Potentially Unused Dependencies

| Package | Used? | Size (gzip) | Action |
|---------|-------|-------------|--------|
| `motion` | ❌ No `from "motion"` imports found | ~35 KB | **Duplicate** — `motion` is a re-export of `framer-motion`. Remove from deps. |
| `@react-spring/web` | ❌ No imports found | ~25 KB | **Unused** — Remove. |
| `react-icons` | ❌ No imports found | tree-shakable but large index | **Unused** — Remove. |
| `react-wrap-balancer` | ❌ No imports found | ~3 KB | **Unused** — Remove. |
| `shadcn` | ❌ No imports found | ~5 MB+ (CLI tool) | **In wrong deps** — should be devDependency if needed at all. |
| `class-variance-authority` | ❌ No imports found | ~1 KB | **Unused** — Remove. |
| `tw-animate-css` | ❌ No imports found | ~10 KB | **Unused** — Remove. |
| `@base-ui/react` | ❌ No imports found | ~50 KB | **Unused** — Remove. |

### Animation Library Duplication

The project bundles **two animation ecosystems**:

| Library | Files using it | Approx size |
|---------|---------------|-------------|
| `framer-motion` | 8 files (HeroPreview, HeroStats, WhyCard, FAQItem, TestimonialCard, CTA, BackgroundGlow, ScreenshotCard-dead) | ~35 KB |
| `gsap` + `@gsap/react` | 2 files (SplitText, possibly MagicBento) | ~50 KB |

GSAP is used only for `SplitText`'s heading animation. This single animation adds ~50 KB to the bundle.

### Recommendation

```bash
npm uninstall motion @react-spring/web react-icons react-wrap-balancer shadcn class-variance-authority tw-animate-css @base-ui/react
npm install --save-dev shadcn  # if needed as dev tool
```

**Potential saving:** ~125 KB+ of unused dependencies removed.

---

## 6. Tree Shaking

**Status: 🟡 Adequate for lucide-react, but package.json is bloated**

- All 10 `lucide-react` import sites use named imports (tree-shakable) ✅
- `framer-motion` imports use named imports (`motion`, `AnimatePresence`) — tree-shakable ✅
- `@radix-ui/react-slot` only has one export (`Slot`) — always fully imported ✅
- The 8+ unused packages (see §5) defeat tree shaking at the package level

---

## 7. React Re-Renders & Memoization

**Status: 🔴 No memoization strategy**

| Technique | Used? | Count |
|-----------|-------|-------|
| `useMemo` | ✅ | 1 (`Screenshots.tsx` — screenshots filter) |
| `useCallback` | ❌ | 0 |
| `React.memo` | ❌ | 0 |
| `useTransition` | ❌ | 0 |

### Hot Spots for Unnecessary Re-Renders

1. **`DownloadDemo.tsx`** — Contains `useState` for url, loading, loaded, quality. State changes trigger re-render of `UrlInput`, `FakeLoader`, `VideoPreview`, `QualitySelector`, `DownloadButtons`. No memoization prevents child re-renders.

2. **`Screenshots.tsx`** — `active` state changes re-render `ScreenshotTabs` and `ScreenshotCard`. Only `useMemo` protects the `current` object.

3. **`FAQItem.tsx`** — Each accordion item has its own `useState`. Toggling one re-renders only that item (good), but `AnimatePresence` adds overhead.

4. **`NavLink.tsx`** — `usePathname()` in each link. Pathname changes on navigation re-render every `NavLink` simultaneously.

### Recommendation
- Add `React.memo` to `NavLink` (prevents re-render of all links when one changes path)
- Add `useCallback` to `onChange`/`onFetch` handlers in `DownloadDemo.tsx` that are passed as props
- Add `React.memo` to `UrlInput`, `QualitySelector`, `DownloadButtons` (pure presentational)

---

## 8. Suspense Boundaries

**Status: 🔴 Not Used**

| Location | Needs Suspense |
|----------|---------------|
| `app/loading.tsx` | Route-level loading state for ALL pages |
| `blog/` | Dynamic route with data fetching |
| `download/page.tsx` | DownloadCard renders DownloadButton which uses SWR — shows loading state |
| Each `dynamic()` import | Wrapping dynamic imports |

Zero Suspense boundaries exist anywhere — not even a root `loading.tsx`. Users see nothing during page transitions or data fetches (as identified in APP_ROUTER_REPORT.md).

---

## 9. Server/Client Boundaries

**Status: 🔴 2 critical violations + 6 unnecessary client components**

### 🔴 Critical: Missing `"use client"` Directives

These files use browser event handlers (`onChange`, `onClick`) but lack the `"use client"` directive, which would cause build/runtime errors:

| File | Line | Violation |
|------|------|-----------|
| `src/components/demo/UrlInput.tsx:13` | `onChange={(e) => onChange(e.target.value)}` on `<input>` |
| `src/components/demo/UrlInput.tsx:18` | `onClick={onFetch}` on `<Button>` |
| `src/components/demo/QualitySelector.tsx:17` | `onClick={() => onChange(q)}` on `<button>` |

### 🟡 Unnecessary `"use client"` Directives

These 6 components carry `"use client"` but use zero client-side features — they only compose other components (which handle their own interactivity):

| File | Reason to remove |
|------|-----------------|
| `CTAButtons.tsx` | Pure composition of Button + icons |
| `HeroButtons.tsx` | Pure composition of Button + DownloadButton |
| `SocialLinks.tsx` | Pure rendering of Link + dynamic icon components |
| `Navbar.tsx` | Renders Logo + NavLink + Button — no hooks/events |
| `FakeLoader.tsx` | Pure CSS skeleton (`animate-pulse` is CSS) |
| `ScreenshotCard.tsx` | Imports `motion` but never uses it (dead import) |

### Impact of Removing Unnecessary `"use client"`

Each `"use client"` directive marks the component and its entire import subtree as client-side code. Moving these 6 to server components would:
- Remove their JS from the client bundle
- Allow their children to be server-rendered when possible
- Estimated saving: ~2-5 KB of entry-point JS + recursive subtree savings

---

## Summary

| Area | Status | Critical Issues | Total Issues |
|------|--------|----------------|--------------|
| Dynamic imports | 🔴 None used | 1 | 1 |
| `next/image` | 🟡 Missing sizes, placeholder, priority | 1 | 4 |
| Font optimization | 🔴 Not configured | 1 | 1 |
| Lazy loading | 🔴 None used | 1 | 1 |
| Bundle size | 🟡 8 unused deps, animation duplication | 3 | 8 |
| Tree shaking | 🟢 lucide OK, deps bloated | 0 | 1 |
| Memoization | 🔴 No strategy | 2 | 3 |
| Suspense | 🔴 Zero boundaries | 1 | 1 |
| Server/client boundaries | 🔴 2 violations, 6 unnecessary directives | 2 | 8 |

**Priority Action List:**

1. **Fix 7 unused/misplaced dependencies** — `npm uninstall motion @react-spring/web react-icons react-wrap-balancer shadcn class-variance-authority tw-animate-css @base-ui/react`
2. **Add `"use client"` to `UrlInput.tsx` and `QualitySelector.tsx`** — critical build blockers
3. **Remove `"use client"` from 6 unnecessary components** — shrink client bundle
4. **Add `sizes` and `placeholder="blur"`** to all 4 `next/image` usages
5. **Add `loading.tsx`** at root and under `blog/` — see APP_ROUTER_REPORT.md
6. **Add `dynamic()` imports** for below-fold sections (FAQ, Screenshots)
7. **Add `React.memo` + `useCallback`** to reduce re-renders in interactive sections
