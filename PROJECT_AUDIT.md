# Project Audit — Nova Fetch Web

> **Generated:** 2026-07-25
> **Scope:** Full App Router project audit
> **Mode:** Read-only — no modifications made

---

## Severity Legend

| Level | Meaning |
|-------|---------|
| **Critical** | Will cause build/runtime failure or data loss |
| **High** | Significant code quality, duplication, or dead-code issue |
| **Medium** | Moderate cleanup opportunity or minor inconsistency |
| **Low** | Cosmetic or advisory |

---

## CRITICAL

### C1 — Missing `SpotlightCard` component (3 files broken)

- **Files:**
  - `src/components/cta/CTA.tsx:4` — `import SpotlightCard from "@/components/reactbits/SpotlightCard";`
  - `src/components/testimonials/TestimonialCard.tsx:34` — uses `<SpotlightCard>` without import
  - `src/components/screenshots/ScreenshotCard.tsx:16` — uses `<SpotlightCard>` without import
- **Issue:** No file exists at `src/components/reactbits/SpotlightCard.tsx` (or anywhere). Neither `TestimonialCard.tsx` nor `ScreenshotCard.tsx` import it at all. CTA.tsx imports it from a non-existent path.
- **Impact:** Will produce TypeScript/build errors.
- **Action:** Create `SpotlightCard` component or remove usage + import.

### C2 — Missing `@/reactbits/` directory (3 broken imports)

- **Files:**
  - `src/app/layout.tsx:4` — `import Aurora from "@/reactbits/Aurora/Aurora";`
  - `src/components/hero/HeroContent.tsx:5` — `import SplitText from "@/reactbits/SplitText/SplitText";`
  - `src/components/features/Features.tsx:2` — `import MagicBento from "@/reactbits/MagicBento/MagicBento";`
- **Issue:** No `src/reactbits/` directory exists. The `@/` alias maps to `src/`, so these resolve to non-existent paths.
- **Impact:** Will cause build failures. `Aurora` is used directly in the layout's JSX; `SplitText` is used in `HeroContent` JSX; `MagicBento` is used in `Features` JSX.
- **Action:** Create the missing components at the expected paths or fix the imports to point to existing files.

### C3 — `BentoCard.tsx` iconMap does not match `FeatureIcon` type

- **File:** `src/components/features/BentoCard.tsx:14-23`
- **Issue:** The `iconMap` object uses keys `gauge`, `music`, `shield` but `FeatureIcon` type (`src/data/features.ts:1-7`) defines `"speed"`, `"audio"`, `"secure"`. The `satisfies Record<FeatureIcon, ...>` constraint would cause a TypeScript error.
- **Impact:** Will not compile. The `features` data uses `icon: "speed"`, which is undefined in `iconMap[icon]`.
- **Action:** Change keys to match the type: `speed: Gauge`, `audio: Music4`, `secure: ShieldCheck`.

---

## HIGH

### H1 — Empty page files (8 files)

These page.tsx files exist but are completely empty (0 bytes / 0 lines):

| File | Associated route |
|------|-----------------|
| `src/app/features/page.tsx` | `/features` |
| `src/app/faq/page.tsx` | `/faq` |
| `src/app/changelog/page.tsx` | `/changelog` |
| `src/app/contact/page.tsx` | `/contact` |
| `src/app/terms/page.tsx` | `/terms` |
| `src/app/privacy/page.tsx` | `/privacy` |
| `src/app/blog/page.tsx` | `/blog` |
| `src/app/blog/\[slug\]/page.tsx` | `/blog/:slug` |

- **Issue:** These routes are navigable (linked in nav/footer/sitemap) but render nothing.
- **Impact:** Users navigating to these pages see a blank page.
- **Action:** Either implement the pages or remove the files and update navigation/sitemap/robots.

### H2 — Unused dependencies in `package.json` (7 packages)

The following packages are listed in `dependencies` but are never imported anywhere in `src/`:

| Package | Installed version |
|---------|------------------|
| `react-wrap-balancer` | ^1.1.1 |
| `@base-ui/react` | ^1.6.0 |
| `@react-spring/web` | ^10.1.2 |
| `react-icons` | ^5.7.0 |
| `tw-animate-css` | ^1.4.0 |
| `shadcn` | ^4.14.1 |
| `class-variance-authority` | ^0.7.1 |

- **Impact:** Increases install time, bundle size (where applicable), and maintenance burden.
- **Action:** Remove unused packages with `npm uninstall <pkg>`.

### H3 — Duplicate `cn()` utility

- **Files:**
  - `src/lib/utils.ts` — used by `ui/*`, `NavLink.tsx` (6 imports total)
  - `src/utils/cn.ts` — used by `layout/Container.tsx`, `common/GlassCard.tsx` (2 imports)
- **Issue:** Both files export an identical `cn()` function using `clsx` + `tailwind-merge`.
- **Impact:** Code duplication; inconsistent import paths.
- **Action:** Choose one (recommend `src/lib/utils.ts` since it has more consumers) and update the 2 files that import from `@/utils/cn`.

### H4 — Duplicate data files (4 pairs)

| Duplicate pair | Used? | Notes |
|---------------|-------|-------|
| `src/data/releaseNotes.ts` | ❌ Unused | Different structure from the used one |
| `src/data/release-notes.ts` | ✅ Used by `download/ReleaseNotes.tsx` | |
| `src/data/systemRequirements.ts` | ❌ Unused | Different from `requirements.ts` |
| `src/data/requirements.ts` | ✅ Used by `download/SystemRequirements.tsx` | |
| `src/data/footer.ts` | ✅ Used by `footer/Footer.tsx` + `SocialLinks.tsx` | |
| `src/data/footerLinks.ts` | ✅ Used by `layout/Footer.tsx` | Two different footer components exist |
| `src/data/navigation.ts` | ✅ Used by `layout/Navbar.tsx` | |
| `src/constants/navigation.ts` | ❌ Empty file | Nothing exported |

- **Impact:** Confusion about which data source is canonical, dead code serving no purpose.
- **Action:** Delete the unused files; consolidate where both are in use but different consumers exist.

### H5 — Duplicate UI components

| Component | Duplicate location | Notes |
|-----------|-------------------|-------|
| `GlassCard` | `src/components/ui/GlassCard.tsx` + `src/components/common/GlassCard.tsx` | Slightly different styling; common version imports `@/utils/cn` |
| `Badge` | `src/components/ui/Badge.tsx` + `src/components/common/Badge.tsx` | Different props (`children` vs `title`) |
| `Container` | `src/components/ui/Container.tsx` + `src/components/layout/Container.tsx` | Differs by padding values |
| `Spotlight` | `src/components/effects/Spotlight.tsx` + `src/components/reactbits/Spotlight.tsx` | Different implementations |
| `AnimatedGrid` | `src/components/effects/AnimatedGrid.tsx` + `src/components/common/AnimatedGrid.tsx` | Common version is empty |
| `Aurora` / `AuroraBackground` | `src/components/effects/Aurora.tsx` + `src/components/reactbits/AuroraBackground.tsx` | Similar but not identical |

- **Impact:** Maintenance burden, inconsistent usage, bundle bloat.
- **Action:** Consolidate to a single canonical version per component.

### H6 — Duplicate feature card components

- **Files:**
  - `src/components/features/FeatureCard.tsx` — Dead code (not imported anywhere)
  - `src/components/features/BentoCard.tsx` — Dead code (only imported by dead `BentoGrid.tsx`)
  - `src/components/features/BentoGrid.tsx` — Dead code (not imported anywhere — `Features.tsx` uses `MagicBento` instead)
- **Issue:** Three components that all exist to render feature cards, but none are actually live. `Features.tsx` delegates to a non-existent `MagicBento` component.
- **Action:** Delete dead files and implement one working feature card component.

### H7 — Two different `Footer` components

- **Files:**
  - `src/components/layout/Footer.tsx` — Used in no page (home page imports from `@/components/footer/Footer`)
  - `src/components/footer/Footer.tsx` — Used in `src/app/page.tsx`
- **Issue:** Both are named `Footer` and both compile. The layout one uses `footerLinks.ts` data; the footer/folder one uses `footer.ts` data. They render different content.
- **Impact:** Confusion about which footer is canonical.
- **Action:** Delete the unused `layout/Footer.tsx` and keep `footer/Footer.tsx`.

---

## MEDIUM

### M1 — Unused components (not imported anywhere)

| File | Notes |
|------|-------|
| `src/components/common/SectionTitle.tsx` | Superseded by `ui/Heading.tsx` |
| `src/components/common/LogoCloud.tsx` | Uses `logos.ts` data |
| `src/components/common/GradientButton.tsx` | Superseded by `ui/Button.tsx` |
| `src/components/common/Particles.tsx` | Empty file |
| `src/components/common/GlowBorder.tsx` | Empty file |
| `src/components/common/AnimatedGrid.tsx` | Empty file |
| `src/components/common/GlassCard.tsx` | Duplicate of `ui/GlassCard.tsx` |
| `src/components/common/Badge.tsx` | Duplicate of `ui/Badge.tsx` |
| `src/components/layout/Container.tsx` | Duplicate of `ui/Container.tsx` |
| `src/components/layout/ThemeToggle.tsx` | Empty file |
| `src/components/layout/MobileMenu.tsx` | Returns `null` |
| `src/components/stats/Stats.tsx` | Not used — hero has inline stats |
| `src/components/stats/StatCard.tsx` | Only imported by dead `Stats.tsx` |
| `src/components/stats/Counter.tsx` | Dead code |
| `src/components/download/DownloadOptions.tsx` | Uses `item.filename` / `item.architecture` / `item.recommended` not in `downloads.ts` |
| `src/components/download/DownloadHero.tsx` | Dead code |
| `src/components/download/DownloadCTA.tsx` | Dead code |
| `src/components/download/InstallationGuide.tsx` | Dead code |
| `src/components/download/VersionCard.tsx` | Empty file |
| `src/components/hero/HeroRight.tsx` | Dead — `Hero.tsx` uses `HeroPreview` |
| `src/components/hero/HeroBackground.tsx` | Dead — background is inline in `Hero.tsx` |
| `src/components/hero/HeroBadge.tsx` | Dead — `HeroBadges.tsx` used instead |
| `src/components/hero/FloatingBadge.tsx` | Dead — floating cards are inline in `HeroPreview.tsx` |
| `src/components/testimonials/TrustedPlatforms.tsx` | Empty file |
| `src/components/screenshots/ScreenshotCarousel.tsx` | Dead — `Screenshots.tsx` uses tab approach |
| `src/components/screenshots/Carousel.tsx` | Empty file |
| `src/components/features/FeatureGrid.tsx` | Empty file |
| `src/components/effects/Noise.tsx` | Empty file |
| `src/components/effects/Grid.tsx` | Empty file |

- **Action:** Delete unused components or implement them if they're WIP.

### M2 — Unused barrel exports

| File | Exports | Consumers |
|------|---------|-----------|
| `src/components/ui/index.ts` | `Badge`, `Button`, `Container`, `GlassCard`, `Heading`, `Section` | Only `Badge`, `Button` consumed via the barrel |
| `src/components/faq/index.ts` | `FAQ` | Zero consumers — `FAQ` is imported directly as default |
| `src/components/footer/index.ts` | `Footer` | Zero consumers — `Footer` is imported directly as default |
| `src/components/reactbits/index.ts` | `AuroraBackground`, `Spotlight` | Only `Spotlight` consumed via barrel (in layout.tsx) |

- **Action:** Either use barrel imports consistently or remove unused barrel files.

### M3 — Unused hook

- **File:** `src/hooks/useLatestRelease.ts`
- **Issue:** ✅ This IS used by `DownloadButton.tsx` and `LatestRelease.tsx`. **No action needed** — listed here only to confirm it is live.

### M4 — Unused/unreachable data

| File | Imported by | Notes |
|------|-------------|-------|
| `src/data/stats.ts` | Dead `Stats.tsx` only | Live inline in `HeroStats.tsx` |
| `src/data/logos.ts` | Dead `LogoCloud.tsx` only | No live consumer |
| `src/data/releaseNotes.ts` | Nothing | Unused (release-notes.ts used instead) |
| `src/data/systemRequirements.ts` | Nothing | Unused (requirements.ts used instead) |
| `src/constants/navigation.ts` | Nothing | Empty file |

- **Action:** Remove unused data files. The used ones should be canonical.

### M5 — Unused imports in component files

| File | Unused import | Details |
|------|--------------|---------|
| `src/app/layout.tsx:6` | `AuroraBackground` | Destructured from `@/components/reactbits` but only `Spotlight` is used in JSX |
| `src/components/hero/Hero.tsx:4` | `AuroraBackground` | Imported but never rendered |
| `src/components/hero/Hero.tsx:5` | `SplitText` | Imported but never rendered |
| `src/components/footer/Footer.tsx:9` | `AuroraBackground` | Imported but never rendered |
| `src/components/effects/Spotlight.tsx:4` | `motion` from `framer-motion` | `motion.div` is used, so this is **used** ✅ |

---

## LOW

### L1 — Unused assets in `public/`

| File | Notes |
|------|-------|
| `public/next.svg` | Default Next.js starter asset — not referenced |
| `public/vercel.svg` | Default Next.js starter asset — not referenced |
| `public/file.svg` | Default Next.js starter asset — not referenced |
| `public/globe.svg` | Default Next.js starter asset — not referenced |
| `public/window.svg` | Default Next.js starter asset — not referenced |

- **Action:** Remove if not used elsewhere.

### L2 — Mixed animation library imports

- **Files using `framer-motion`:** 17 components
- **Files using `"motion/react"`:** `src/components/effects/Aurora.tsx`
- **Issue:** Both `motion` and `framer-motion` are in `package.json`. One component uses `"motion/react"` while all others use `"framer-motion"`.
- **Action:** Standardise on one import path. The `motion` package may be a re-export; if so it's safe to unify.

### L3 — Prop mismatch in `DownloadCard.tsx:30`

- **File:** `src/components/download/DownloadCard.tsx:30`
- **Code:** `variant={props.primary ? "default" : "secondary"}`
- **Issue:** `Button` component defines `variant` as `"primary" | "secondary"`. `"default"` is not a valid value.
- **Action:** Change to `variant={props.primary ? "primary" : "secondary"}`.

### L4 — Missing `size` prop on `Button` in `CTAButtons.tsx`

- **File:** `src/components/cta/CTAButtons.tsx:10,15`
- **Code:** `<Button size="lg">`
- **Issue:** `Button` component does not define a `size` prop in its interface. Prop will be passed as `HTML` attribute.
- **Action:** Add `size` prop to `Button` or remove the prop.

### L5 — `SectionTitle.tsx` superseded by `Heading.tsx`

- **File:** `src/components/common/SectionTitle.tsx`
- **Issue:** Implements the same pattern as `src/components/ui/Heading.tsx` but is unused.
- **Action:** Delete after confirming no planned use.

### L6 — `MobileMenu.tsx` returns `null`

- **File:** `src/components/layout/MobileMenu.tsx`
- **Issue:** Always renders nothing. Not imported anywhere.
- **Action:** Either implement or delete.

### L7 — Inconsistent `useGSAP` import casing

- **File:** `src/components/SplitText.tsx:5`
- **Issue:** Imports `useGSAP` from `@gsap/react` (lowercase) but GSAP convention is usually `useGsap` or `useGSAP`.

### L8 — Duplicate `motion` + `framer-motion` in `package.json`

- **Both:** `"framer-motion": "^12.42.2"` and `"motion": "^12.42.2"`
- **Issue:** `motion` is typically a re-export of `framer-motion`. Having both is redundant.
- **Action:** Remove one.

### L9 — `Footer.tsx` has commented-out `<AuroraBackground>`

- **File:** `src/components/footer/Footer.tsx:9`
- **Issue:** Import exists but component is not rendered. Possible leftover from copy-paste.

---

## Summary

| Severity | Count |
|----------|-------|
| Critical | 3 |
| High | 7 |
| Medium | 5 |
| Low | 9 |
| **Total** | **24** |

### Quick Wins (all Low)
1. Delete 5 unused SVG assets in `public/`
2. Fix prop typo `"default"` → `"primary"` in `DownloadCard.tsx`
3. Add `size` prop to `Button` interface or remove from `CTAButtons.tsx`
4. Unify `framer-motion` / `motion` imports
5. Remove unused barrel exports
6. Clean unused imports `AuroraBackground`/`SplitText` from `Hero.tsx`, `layout.tsx`, `footer/Footer.tsx`
7. Delete empty files (10+)
