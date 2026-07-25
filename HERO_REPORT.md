# Hero Section Audit Report

**Generated:** 2026-07-25
**Files:** `Hero.tsx`, `HeroContent.tsx`, `HeroButtons.tsx`, `HeroBadges.tsx`, `HeroPreview.tsx`, `HeroStats.tsx`

---

## 1. SplitText Integration

### Findings

| # | Issue | Severity | File:Line |
|---|-------|----------|-----------|
| 1 | **Renders as `<p>` tag, not `<h1>`** | 🔴 | `HeroContent.tsx:12` |
| 2 | **Font-loading dependency causes flash** | 🔴 | `SplitText.tsx:52-60` |
| 3 | **GSAP adds ~50KB for one heading animation** | 🟡 | `SplitText.tsx` |
| 4 | **ScrollTrigger `once: true` with fonts delay** | 🟡 | `SplitText.tsx:115-121` |
| 5 | **Default `textAlign: 'center'` may not match design** | 🟢 | `SplitText.tsx:39` |

**#1 — Wrong heading tag (critical)**

```tsx
// HeroContent.tsx:12
<SplitText text="Download Videos Faster Than Ever" />
```

`SplitText` defaults `tag` to `'p'` (`SplitText.tsx:38`). The hero headline renders as `<p>` instead of `<h1>`, harming SEO hierarchy and accessibility (screen readers get no heading level 1).

**Fix:** Pass `tag="h1"`:

```tsx
<SplitText text="Download Videos Faster Than Ever" tag="h1" />
```

**#2 — Font-loading flash**

`SplitText.tsx:52-60` waits for `document.fonts.ready` before running the GSAP animation. Until fonts load, the text is rendered at full opacity in the DOM (React default). When GSAP finally runs, it resets text to `opacity: 0` (the `from` value) and animates to `opacity: 1`. This creates a visible flash: text appears → disappears → animates in.

**Fix (in HeroContent):** Pass `from={{ opacity: 0, y: 0 }}` and use CSS `opacity: 0` on the container initially, or remove the font-loading gate for hero.

**#3 — Bundle overhead**

The hero heading uses one animated text string but imports the full GSAP suite: `gsap`, `ScrollTrigger`, `GSAPSplitText`, `useGSAP` hook. This is ~50KB+ gzipped for a single animation that could be done with ~2KB of CSS keyframes.

**Fix:** Replace with lightweight CSS animation or `framer-motion` (already a dependency in HeroPreview).

---

## 2. Aurora Integration

### Findings

| # | Issue | Severity | File:Line |
|---|-------|----------|-----------|
| 6 | **Aurora is in document flow, not fixed** | 🔴 | `layout.tsx:62` |
| 7 | **Global render — GPU cost on every route** | 🟡 | `layout.tsx:62` |
| 8 | **No `z-index` relative to content** | 🟡 | `Aurora.tsx:210` |

**#6 — Aurora not positioned out of flow**

```tsx
// layout.tsx:61-64
<body>
  {" "}
  <Aurora />               {/* <div className="w-full h-full" /> — in flow! */}
  <Spotlight />            {/* fixed inset-0 — correct */}
  {children}               {/* pushed down by Aurora's height */}
</body>
```

`Aurora` renders `<div className="w-full h-full">` without `fixed`, `absolute`, or `relative` positioning. The OGL canvas is appended inside via `useEffect`. `h-full` on a body child with no explicit body height collapses to `auto`. On some viewports this pushes `{children}` down, creating a gap at the top of the page. Compare with `Spotlight.tsx:28` which correctly uses `fixed inset-0 z-0`.

**Fix:** Add `className="fixed inset-0 z-0 pointer-events-none"` to Aurora's container and ensure `h-full` computes to `100vh`. Alternatively, move Aurora into `Hero.tsx` as a local background.

**#7 — Global GPU cost**

Aurora uses WebGL (`ogl` library) with a continuous `requestAnimationFrame` loop (`Aurora.tsx:181-196`). This runs on every page, not just the hero. Background WebGL shaders consume GPU cycles even when not visible.

**Fix:** Move Aurora from `layout.tsx` into `Hero.tsx` only. Use conditional rendering or `next/dynamic` with `ssr: false`.

---

## 3. Button Reuse

### Findings

| # | Issue | Severity | File:Line |
|---|-------|----------|-----------|
| 9 | **Double-wrapping Button in DownloadButton** | 🟡 | `HeroButtons.tsx:11-16` |
| 10 | **Inline shadow bypasses Button component** | 🟢 | `HeroButtons.tsx:13` |

**#9 — Double Button wrapping**

```tsx
// HeroButtons.tsx:11-16
<Button asChild className="h-12 px-8 text-base shadow-[...]">
  <DownloadButton />        {/* DownloadButton returns <Button asChild><a> */}
</Button>                   {/* Net: Button asChild → Slot → Button asChild → Slot → a */}
```

The outer `Button` passes its className to `DownloadButton` via `Slot`. `DownloadButton` internally renders `<Button asChild><a>` which receives the merged props. This creates double-Buffer nesting: `Button > Slot > Button > Slot > a`. It works but is fragile and redundant.

**Fix:** Make `DownloadButton` accept a `className` prop and remove the wrapping `Button` in `HeroButtons`:

```tsx
// HeroButtons.tsx
<DownloadButton className="h-12 px-8 text-base shadow-[...]" />

// DownloadButton.tsx — accept className and pass to inner Button
```

---

## 4. Responsive Layout

### Findings

| # | Issue | Severity | File:Line |
|---|-------|----------|-----------|
| 11 | **Stats grid is `grid-cols-3` on mobile** | 🟡 | `HeroStats.tsx:22` |
| 12 | **HeroBadges doesn't use GlassCard** | 🟢 | `HeroBadges.tsx:41` |
| 13 | **HeroStats doesn't use GlassCard** | 🟢 | `HeroStats.tsx:37` |

**#11 — Cramped mobile layout**

```tsx
// HeroStats.tsx:22
<div className="mt-12 grid grid-cols-3 gap-6">
```

On small screens (< 640px), three stats columns with padding force text truncation. "Supported Sites" text wraps awkwardly.

**Fix:** Use responsive grid:

```tsx
<div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
```

**#12, #13 — Inline glass styles**

`HeroBadges` and `HeroStats` repeat the glass-morphism class string:
```
rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
```

These should use the `GlassCard` component already in the design system.

---

## 5. Image Optimization

### Findings

| # | Issue | Severity | File:Line |
|---|-------|----------|-----------|
| 14 | **No `sizes` attribute on hero image** | 🟡 | `HeroPreview.tsx:38-45` |
| 15 | **No `placeholder="blur"` or `blurDataURL`** | 🟡 | `HeroPreview.tsx:38-45` |
| 16 | **Fixed 1400×900 dimensions** | 🟢 | `HeroPreview.tsx:41-42` |

**#14 — Missing `sizes`**

```tsx
<Image
  src="/screenshots/home.jpg"
  width={1400}
  height={900}
  priority
  className="w-full object-cover"
/>
```

Without `sizes`, Next.js defaults to `100vw`. For a hero image in a 2-column grid (`lg:grid-cols-2`), the image should be `sizes="(max-width: 1024px) 100vw, 50vw"` to let Next.js generate appropriately sized srcset candidates.

**#15 — No blur placeholder**

The image loads with a sharp edge when it arrives. Adding `placeholder="blur"` with a `blurDataURL` (inline base64 blurhash or a low-quality placeholder) eliminates the flash. Requires the image to be static and readable at build time, or a manual `blurDataURL`.

---

## 6. Animation Performance

### Findings

| # | Issue | Severity | File:Line |
|---|-------|----------|-----------|
| 17 | **Two animation libraries: GSAP + framer-motion** | 🟡 | `SplitText.tsx` + `HeroPreview.tsx` |
| 18 | **Floating cards: continuous repaints** | 🟡 | `HeroPreview.tsx:50-68, 73-92` |
| 19 | **Stats use framer-motion per item** | 🟢 | `HeroStats.tsx:24-36` |

**#17 — Animation library duplication**

The hero section uses both **GSAP** (SplitText heading) and **framer-motion** (Preview entrance, Stats stagger, floating cards). GSAP is only used for the heading animation, which could be replicated with framer-motion's `motion` components.

**Fix:** Replace SplitText with framer-motion `motion.h1` and `staggerChildren` layout animations, removing GSAP dependency.

**#18 — Continuous animation repaints**

```tsx
// HeroPreview.tsx:51-68, 73-92
<motion.div
  animate={{ y: [0, -8, 0] }}   // floating Downloads card
  transition={{ duration: 4, repeat: Infinity }}
/>
<motion.div
  animate={{ y: [0, 10, 0] }}   // floating Rating card
  transition={{ duration: 5, repeat: Infinity }}
/>
```

These run infinite `requestAnimationFrame` loops. Each frame updates `translateY`, triggering paint + composite even when the tab is in the background (unless `motion`'s `reducedMotion` query is respected). The values are also different durations (4s vs 5s), so they never synchronize — always repainting at different points.

**Fix:** Add `willChange: "transform"` as a transform style (motion does this by default), and consider stopping animations on `prefers-reduced-motion`:

```tsx
<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
```

---

## Summary

| Area | Status | Critical | Medium | Low |
|------|--------|----------|--------|-----|
| SplitText | 🟡 2 critical, 2 medium, 1 low | 2 | 2 | 1 |
| Aurora | 🔴 1 critical, 2 medium | 1 | 2 | — |
| Buttons | 🟢 0 critical, 1 medium, 1 low | — | 1 | 1 |
| Responsive | 🟡 0 critical, 1 medium, 2 low | — | 1 | 2 |
| Images | 🟡 0 critical, 2 medium, 1 low | — | 2 | 1 |
| Animations | 🟡 0 critical, 2 medium, 1 low | — | 2 | 1 |

**Total: 3 critical, 10 medium, 6 low priority items.**

### Critical Fixes (3)

1. **`SplitText` renders as `<p>`** — pass `tag="h1"` for SEO/accessibility
2. **Font-loading flash** — heading visible, disappears, then animates in
3. **Aurora not positioned** — `<div className="w-full h-full">` in document flow pushes content down; use `fixed inset-0` or move to Hero.tsx

### Recommended Actions

1. Add `tag="h1"` to `<SplitText>` in `HeroContent.tsx`
2. Move `Aurora` from `layout.tsx` to `Hero.tsx` with `fixed` positioning
3. Add `sizes` and `placeholder="blur"` to `HeroPreview.tsx` image
4. Replace `SplitText` with framer-motion to eliminate GSAP dependency
5. Replace inline glass styles in `HeroBadges` and `HeroStats` with `GlassCard`
6. Make stats grid responsive: `grid-cols-2 sm:grid-cols-3`
7. Add `prefers-reduced-motion` media query fallback for floating cards
