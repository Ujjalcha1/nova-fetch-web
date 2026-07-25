# Component Architecture Report

Audit of `src/components/` — 52 files across 13 directories + 1 root file.

---

## 1. Folder Structure

```
src/components/
├── SplitText.tsx              ← root level (outlier)
├── cta/                       ← lowercase acronym
│   ├── BackgroundGlow.tsx
│   ├── CTA.tsx
│   └── CTAButtons.tsx
├── demo/
│   ├── DownloadButtons.tsx
│   ├── DownloadDemo.tsx
│   ├── FakeLoader.tsx
│   ├── QualitySelector.tsx
│   ├── UrlInput.tsx
│   └── VideoPreview.tsx
├── download/
│   ├── ChecksumCard.tsx
│   ├── DownloadButton.tsx
│   ├── DownloadCard.tsx
│   ├── ReleaseNotes.tsx
│   └── SystemRequirements.tsx
├── faq/                       ← lowercase acronym
│   ├── FAQ.tsx
│   ├── FAQItem.tsx
│   └── index.ts
├── features/
│   └── Features.tsx
├── footer/
│   ├── Footer.tsx
│   ├── FooterColumn.tsx
│   ├── SocialLinks.tsx
│   └── index.ts
├── hero/
│   ├── Hero.tsx
│   ├── HeroBadges.tsx
│   ├── HeroButtons.tsx
│   ├── HeroContent.tsx
│   ├── HeroPreview.tsx
│   └── HeroStats.tsx
├── layout/
│   ├── Logo.tsx
│   ├── NavLink.tsx
│   └── Navbar.tsx
├── reactbits/
│   ├── Aurora.tsx
│   ├── Spotlight.tsx
│   ├── SpotlightCard.tsx
│   └── index.ts
├── screenshots/
│   ├── DeviceFrame.tsx
│   ├── ScreenshotCard.tsx
│   ├── ScreenshotTabs.tsx
│   └── Screenshots.tsx
├── testimonials/
│   ├── Rating.tsx
│   ├── TestimonialCard.tsx
│   └── Testimonials.tsx
├── ui/                        ← design system (shared)
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Container.tsx
│   ├── GlassCard.tsx
│   ├── Heading.tsx
│   ├── Section.tsx
│   └── index.ts
└── why/
    ├── WhyCard.tsx
    └── WhyNovaFetch.tsx
```

---

## 2. Findings

### 🔴 High Priority

#### H1. `SplitText.tsx` is missing `"use client"` directive

- **File**: `src/components/SplitText.tsx`
- **Issue**: Uses `useRef`, `useEffect`, `useState`, `useGSAP` (all client-only hooks) but lacks `"use client"` directive
- **Impact**: Will throw "Only plain functions can be exported from a Server Component" or cause runtime errors in Next.js 16
- **Fix**: Add `"use client"` at the top

#### H2. Inline glass card styles duplicated across 6 components

`GlassCard` (`src/components/ui/GlassCard.tsx`) exists as a reusable component but these files hardcode the same classes instead:

| File | Classes |
|------|---------|
| `features/Features.tsx:13` | `rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl` |
| `download/DownloadCard.tsx:16` | `rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl` |
| `download/ChecksumCard.tsx:5` | `rounded-3xl border border-white/10 bg-white/5 p-8` (no blur) |
| `download/ReleaseNotes.tsx:7` | `rounded-3xl border border-white/10 bg-white/5 p-8` (no blur) |
| `download/SystemRequirements.tsx:8` | `rounded-3xl border border-white/10 bg-white/5 p-8` (no blur) |
| `demo/VideoPreview.tsx:17` | `rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl` |
| `demo/DownloadDemo.tsx:39` | `rounded-3xl border border-dashed border-white/10 bg-white/5 p-16` |

**Fix**: Use `<GlassCard>` with appropriate `className` overrides.

#### H3. Inline button styles duplicated in `demo/`

`Button` (`src/components/ui/Button.tsx`) exists but these components hardcode button styles:

- **`demo/DownloadButtons.tsx:4-8`**: Hardcoded gradient + ghost buttons → should use `<Button>`
- **`demo/UrlInput.tsx:14-18`**: Hardcoded Fetch button → should use `<Button>`
- **`demo/QualitySelector.tsx:15-24`**: Tab buttons (acceptable as a different pattern)

#### H4. `TestimonialCard.tsx` has an unused import

- **File**: `src/components/testimonials/TestimonialCard.tsx:6`
- **Issue**: Imports `GlassCard` from `"@/components/ui/GlassCard"` but uses `<SpotlightCard>` instead — `GlassCard` is dead code

#### H5. `SplitText.tsx` lives at root level, no barrel

- **File**: `src/components/SplitText.tsx` (directly in `components/`)
- **Issue**: All other non-UI components live in named subdirectories. `SplitText` is the only file directly in `components/`. It's a ReactBits component conceptually similar to `src/components/reactbits/`.
- **Fix**: Move to `src/components/reactbits/SplitText.tsx` and update exports

---

### 🟡 Medium Priority

#### M1. Missing barrel exports for 9 section directories

Only `ui/`, `footer/`, `faq/`, and `reactbits/` have `index.ts`. The following have none:

- `features/` — no index.ts
- `hero/` — no index.ts
- `demo/` — no index.ts
- `download/` — no index.ts
- `screenshots/` — no index.ts
- `testimonials/` — no index.ts
- `why/` — no index.ts
- `cta/` — no index.ts
- `layout/` — no index.ts

#### M2. Partial barrel exports

- **`footer/index.ts`**: Only exports `Footer`, missing `FooterColumn`, `SocialLinks`
- **`faq/index.ts`**: Only exports `FAQ`, missing `FAQItem`

#### M3. Inconsistent import paths for shared UI

Some files use the barrel (`@/components/ui`), others use direct file paths:

| File | Import Style |
|------|-------------|
| `features/Features.tsx:2` | `"../ui"` (relative) |
| `hero/HeroContent.tsx:1` | `"@/components/ui/Badge"` (direct) |
| `hero/Hero.tsx:1` | `"@/components/ui/Section"` (direct) |
| `layout/Navbar.tsx:5` | `"@/components/ui"` (barrel) ✅ |
| `hero/HeroButtons.tsx:5` | `"@/components/ui"` (barrel) ✅ |

#### M4. `BackgroundGlow.tsx` has a generic name

- **File**: `src/components/cta/BackgroundGlow.tsx`
- **Issue**: Named generically despite being tightly coupled to `CTA.tsx` (only used there). Suggests it could be a global utility but isn't.

---

### 🟢 Low Priority

#### L1. Empty page files

- `src/app/features/page.tsx` is completely empty (0 lines)

#### L2. `ScreenshotCard.tsx` has `"use client"` for `motion` but `motion` is only used in the parent `Screenshots.tsx`

- `ScreenshotCard.tsx:1` has `"use client"` but the `motion` import in `Screenshots.tsx` wraps `ScreenshotCard` — the card itself doesn't use hooks. However, `ScreenshotCard` imports `SpotlightCard` which is a client component, so marking it `"use client"` is technically unnecessary.

#### L3. `features/` folder name is lowercase plural, unlike most others

- All folders are lowercase (consistent)
- The folder name `features` is the same as the Next.js App Router reserved folder which could cause confusion. Currently not conflicting because there's no `src/app/features` route with the same component.

#### L4. `NavLink.tsx` uses `usePathname` but not `"use client"`

- **File**: `src/components/layout/NavLink.tsx:1`
- Wait, it does have `"use client"`. My mistake. ✅ Never mind.

#### L5. `DownloadButtons.tsx` in `demo/` duplicates the filename in `cta/`

- `cta/CTAButtons.tsx` and `demo/DownloadButtons.tsx` both contain button groups. Different visual output, but the name collision could cause confusion.

---

## 3. Server/Client Boundary Map

| Component | Has `"use client"`? | Uses hooks? | Status |
|-----------|---------------------|-------------|--------|
| `SplitText.tsx` | ❌ No | useRef, useEffect, useState, useGSAP | 🔴 BUG |
| `Aurora.tsx` | ✅ Yes | useEffect, useRef | ✅ |
| `Spotlight.tsx` | ✅ Yes | useEffect, useState | ✅ |
| `SpotlightCard.tsx` | ✅ Yes | useRef, useState | ✅ |
| `Button.tsx` | ✅ Yes | Slot, useRef | ✅ |
| `FAQItem.tsx` | ✅ Yes | useState, motion | ✅ |
| `BackgroundGlow.tsx` | ✅ Yes | motion | ✅ |
| `NavLink.tsx` | ✅ Yes | usePathname | ✅ |
| `Navbar.tsx` | ✅ Yes | (none directly) | ✅ |
| `HeroPreview.tsx` | ✅ Yes | motion | ✅ |
| `HeroStats.tsx` | ✅ Yes | motion | ✅ |
| `CTA.tsx` | ✅ Yes | motion | ✅ |
| `CTAButtons.tsx` | ✅ Yes | (none directly) | ✅ |
| `HeroButtons.tsx` | ✅ Yes | (none directly) | ✅ |
| `ScreenshotCard.tsx` | ✅ Yes | motion | ✅ |
| `Screenshots.tsx` | ✅ Yes | useState, useMemo | ✅ |
| `ScreenshotTabs.tsx` | ✅ Yes | (none directly) | ✅ |
| `DownloadDemo.tsx` | ✅ Yes | useState | ✅ |
| `TestimonialCard.tsx` | ✅ Yes | motion | ✅ |
| `Hero.tsx` | ❌ No | None | ✅ Server component |
| `HeroContent.tsx` | ❌ No | None, imports `SplitText` (client) | ✅ |
| `Features.tsx` | ❌ No | None | ✅ Server component |
| `FAQ.tsx` | ❌ No | None | ✅ Server component |
| `Testimonials.tsx` | ❌ No | None | ✅ Server component |
| `WhyNovaFetch.tsx` | ❌ No | None | ✅ Server component |
| `WhyCard.tsx` | ✅ Yes | motion | ✅ |
| `Rating.tsx` | ❌ No | None | ✅ Server-compatible |
| `QualitySelector.tsx` | ❌ No | None | ✅ Server-compatible |
| `UrlInput.tsx` | ❌ No | None | ✅ Server-compatible |
| `DownloadButtons.tsx` (demo) | ❌ No | None | ✅ Server-compatible |
| `DeviceFrame.tsx` | ❌ No | None | ✅ Server-compatible |
| `FakeLoader.tsx` | ✅ Yes | (none directly) | ✅ |
| `DownloadCard.tsx` | ❌ No | None | ✅ Server-compatible |
| `DownloadButton.tsx` | ✅ Yes | useLatestRelease | ✅ |
| `ChecksumCard.tsx` | ❌ No | None | ✅ Server-compatible |
| `ReleaseNotes.tsx` | ❌ No | None | ✅ Server-compatible |
| `SystemRequirements.tsx` | ❌ No | None | ✅ Server-compatible |
| `Logo.tsx` | ❌ No | None | ✅ Server-compatible |
| `Footer.tsx` | ❌ No | None | ✅ Server-compatible |
| `FooterColumn.tsx` | ❌ No | None | ✅ Server-compatible |
| `SocialLinks.tsx` | ✅ Yes | (none directly) | ✅ |
| `Badge.tsx` | ❌ No | None | ✅ Server-compatible |
| `Container.tsx` | ❌ No | None | ✅ Server-compatible |
| `GlassCard.tsx` | ❌ No | None | ✅ Server-compatible |
| `Heading.tsx` | ❌ No | None | ✅ Server-compatible |
| `Section.tsx` | ❌ No | None | ✅ Server-compatible |

**1 critical boundary issue**: `SplitText.tsx` is missing `"use client"` — **must fix**.

---

## 4. Duplication Analysis

### Duplicated Card Patterns

The glass card pattern (`rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl`) appears in 7+ locations. A `GlassCard` component exists but is underutilized.

| Uses `GlassCard` | Does NOT use `GlassCard` |
|---|---|
| `WhyCard.tsx` | `Features.tsx`, `DownloadCard.tsx`, `ChecksumCard.tsx`, `ReleaseNotes.tsx`, `SystemRequirements.tsx`, `VideoPreview.tsx`, `DownloadDemo.tsx` |

### Duplicated Button Patterns

| Uses `Button` | Does NOT use `Button` |
|---|---|
| `CTAButtons.tsx` | `demo/DownloadButtons.tsx`, `demo/UrlInput.tsx` (Fetch button) |
| `HeroButtons.tsx` | |
| `DownloadCard.tsx` | |
| `DownloadButton.tsx` | |
| `Navbar.tsx` | |

### Duplicated Data Flow

- `demo/QualitySelector.tsx` and `screenshots/ScreenshotTabs.tsx` are both tab-style selection components with nearly identical patterns. Could be unified into a `Tabs` component.

---

## 5. Proposed Architecture

### Recommended structure after refactor

```
src/components/
├── ui/                           ← Design system (barrel export)
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Container.tsx
│   ├── GlassCard.tsx
│   ├── Heading.tsx
│   ├── Section.tsx
│   └── index.ts                  ✅ exists
│
├── reactbits/                    ← ReactBits components (barrel export)
│   ├── Aurora.tsx
│   ├── SplitText.tsx             ← moved from root
│   ├── Spotlight.tsx
│   ├── SpotlightCard.tsx
│   └── index.ts                  ✅ exists, add SplitText
│
├── layout/                       ← Layout primitives
│   ├── Logo.tsx
│   ├── NavLink.tsx
│   ├── Navbar.tsx
│   └── index.ts                  ← ADD
│
├── hero/                         ← Hero section
│   ├── Hero.tsx
│   ├── HeroBadges.tsx
│   ├── HeroButtons.tsx
│   ├── HeroContent.tsx
│   ├── HeroPreview.tsx
│   ├── HeroStats.tsx
│   └── index.ts                  ← ADD
│
├── features/                     ← Features section
│   ├── Features.tsx
│   ├── FeatureCard.tsx           ← extract from inline div
│   └── index.ts                  ← ADD
│
├── why/                          ← Why section
│   ├── WhyCard.tsx
│   ├── WhyNovaFetch.tsx
│   └── index.ts                  ← ADD
│
├── demo/                         ← Demo section
│   ├── DownloadButtons.tsx
│   ├── DownloadDemo.tsx
│   ├── FakeLoader.tsx
│   ├── QualitySelector.tsx
│   ├── UrlInput.tsx
│   ├── VideoPreview.tsx
│   └── index.ts                  ← ADD
│
├── download/                     ← Download section
│   ├── ChecksumCard.tsx
│   ├── DownloadButton.tsx
│   ├── DownloadCard.tsx
│   ├── ReleaseNotes.tsx
│   ├── SystemRequirements.tsx
│   └── index.ts                  ← ADD
│
├── screenshots/                  ← Screenshots section
│   ├── DeviceFrame.tsx
│   ├── ScreenshotCard.tsx
│   ├── ScreenshotTabs.tsx
│   ├── Screenshots.tsx
│   └── index.ts                  ← ADD
│
├── testimonials/                 ← Testimonials section
│   ├── Rating.tsx
│   ├── TestimonialCard.tsx
│   ├── Testimonials.tsx
│   └── index.ts                  ← ADD
│
├── faq/                          ← FAQ section
│   ├── FAQ.tsx
│   ├── FAQItem.tsx
│   └── index.ts                  ✅ exists, add FAQItem
│
├── cta/                          ← CTA section
│   ├── BackgroundGlow.tsx
│   ├── CTA.tsx
│   ├── CTAButtons.tsx
│   └── index.ts                  ← ADD
│
└── footer/                       ← Footer section
    ├── Footer.tsx
    ├── FooterColumn.tsx
    ├── SocialLinks.tsx
    └── index.ts                  ✅ exists, add missing exports
```

---

## 6. Action Items Summary

| # | Priority | File | Issue | Fix |
|---|----------|------|-------|-----|
| 1 | 🔴 | `SplitText.tsx` | Missing `"use client"` | Add directive |
| 2 | 🔴 | `SplitText.tsx` | Root level, no barrel | Move to `reactbits/`, update exports |
| 3 | 🔴 | `Features.tsx`, `DownloadCard.tsx`, `ChecksumCard.tsx`, `ReleaseNotes.tsx`, `SystemRequirements.tsx`, `VideoPreview.tsx` | Inline glass card classes | Use `<GlassCard>` component |
| 4 | 🔴 | `demo/DownloadButtons.tsx`, `demo/UrlInput.tsx` | Inline button styles | Use `<Button>` component |
| 5 | 🔴 | `TestimonialCard.tsx` | Unused `GlassCard` import | Remove import |
| 6 | 🟡 | 9 directories | Missing barrel exports | Add `index.ts` to each |
| 7 | 🟡 | `footer/index.ts`, `faq/index.ts` | Partial barrel exports | Add missing exports |
| 8 | 🟡 | `features/Features.tsx` | Relative import path | Use `@/components/ui` |
| 9 | 🟡 | `hero/HeroContent.tsx`, `hero/Hero.tsx`, etc. | Direct file imports for UI | Use barrel imports |
| 10 | 🟢 | `src/app/features/page.tsx` | Empty file | Remove or implement |
