# App Router Audit Report

**Generated:** 2026-07-25
**Scope:** `src/app/` — 18 files across 10 directories
**Next.js Version:** 16.x (App Router)

---

## Architecture Overview

```
src/app/
├── api/release/route.ts
├── blog/
│   ├── [slug]/page.tsx          (empty)
│   └── page.tsx                  (empty)
├── changelog/page.tsx            (empty)
├── contact/page.tsx              (empty)
├── download/page.tsx             (populated)
├── faq/page.tsx                  (empty)
├── features/page.tsx             (empty)
├── privacy/page.tsx              (empty)
├── terms/page.tsx                (empty)
├── globals.css
├── layout.tsx                    (root layout)
├── manifest.ts
├── not-found.tsx
├── opengraph-image.tsx
├── page.tsx                      (home page)
├── robots.ts
└── sitemap.ts
```

**No route groups, parallel routes, or intercepting routes** are used. One dynamic segment (`blog/[slug]`).

---

## Findings by Convention

### 1. Root Layout (`layout.tsx`) — 🟡 Minor Issues

- **Status:** Functional, well-structured
- `metadata` is a static export — correct
- `html lang="en"` and `<body>` tags present — correct
- Missing `suppressHydrationWarning` (not needed yet, but useful for future SSR tools)
- Imports `Aurora` and `Spotlight` globally — these render on **every route**, adding CPU/GPU cost on non-home pages
- No `viewport` export (uses default, which is fine for now)
- No nested `layout.tsx` in any subdirectory — pages share a single root layout

### 2. Metadata — 🟢 Good

| File | Type | Status |
|------|------|--------|
| `layout.tsx` | Static `metadata` object | Title template `%s | Nova Fetch`, OG, Twitter, icons all configured |
| `opengraph-image.tsx` | `ImageResponse` | Static "Nova Fetch" text only |
| `manifest.ts` | `MetadataRoute.Manifest` | PWA manifest with icons, theme/background colors |
| `robots.ts` | `MetadataRoute.Robots` | Allows all, references sitemap |
| `sitemap.ts` | `MetadataRoute.Sitemap` | Lists 6 URLs |

**Issues:**
- No individual page exports metadata (`page.tsx`, `download/page.tsx`) — they rely entirely on root-layout defaults
- `opengraph-image.tsx` is static text — should reflect actual page content
- `sitemap.ts` includes `/contact`, `/faq` which are empty placeholder pages
- `blog/[slug]` has no `generateMetadata` — dynamic blog posts will have no custom OG tags

### 3. `loading.tsx` — 🔴 Missing (Critical)

**No `loading.tsx` exists anywhere in the app.** Users see nothing during route transitions or data fetching. Next.js wraps each route segment in `<Suspense>` automatically when a `loading.tsx` is present — without it, the entire page blocks before rendering.

- Should exist at root `app/loading.tsx` at minimum
- Should exist under `blog/` for the dynamic route
- Should exist under `download/`

### 4. `error.tsx` — 🔴 Missing (Critical)

**No `error.tsx` exists anywhere.** Runtime errors in any route segment fall through to Next.js's default error overlay (dev) or a generic white screen (prod).

- Must be a Client Component (`"use client"`)
- Receives `error` and `unstable_retry` props
- Should exist at `app/error.tsx` (catches all routes except root-layout errors)
- `app/global-error.tsx` needed to catch root-layout errors (requires `"use client"`)

### 5. `not-found.tsx` — 🟡 Adequate, Room for Improvement

- Root `app/not-found.tsx` exists and renders correctly
- **Missing `global-not-found.js`** — unmatched URLs (e.g. `/nonexistent`) may not trigger the custom 404 correctly without it
- No route-level `not-found.tsx` under `blog/[slug]/` (future need)
- Since there are no multiple root layouts, `global-not-found.js` is not urgent but recommended

### 6. Route Groups — 🟡 Not Used (Opportunity)

- No route groups `(group)` exist
- **Recommendation:** Add `(marketing)` group wrapping home page routes, `(app)` group for download/app routes. This allows:
  - Different layouts per section (e.g. navbar on marketing pages only)
  - Cleaner organization without URL pollution

### 7. Parallel Routes / Intercepting Routes — 🟢 Not Needed (Appropriate)

- No parallel (`@slot`) or intercepting (`(.)`) routes exist
- Current app scope does not require these patterns
- **Future consideration:** Modals, dashboards, or feed layouts

### 8. Dynamic Routes — 🔴 Stub Only

- `blog/[slug]/page.tsx` exists but is **empty** (0 lines)
- No `generateStaticParams` — no static paths will be generated
- No `generateMetadata` — blog posts will have no SEO metadata
- No `loading.tsx` under `blog/` — no loading state during data fetch
- No `layout.tsx` under `blog/` — cannot add blog-specific nav/UI

### 9. Empty Placeholder Pages — 🟡 6 Empty Files

| File | Status |
|------|--------|
| `blog/page.tsx` | Empty |
| `changelog/page.tsx` | Empty |
| `contact/page.tsx` | Empty |
| `faq/page.tsx` | Empty |
| `features/page.tsx` | Empty |
| `privacy/page.tsx` | Empty |
| `terms/page.tsx` | Empty |

These are valid route definitions but serve `404`-equivalent content at runtime. Either implement them or remove them until ready.

### 10. API Routes — 🟢 Functional

- `api/release/route.ts` — single `GET` handler calling `getLatestRelease()`
- Proper error handling with 500 response
- No request validation, rate limiting, or caching headers

---

## Priority Recommendations

### 🔴 High — Production-Critical (Fix First)

| # | Issue | File | Action |
|---|-------|------|--------|
| 1 | **Missing `loading.tsx`** | `app/loading.tsx` | Add root loading skeleton. Add `blog/loading.tsx` for dynamic route. |
| 2 | **Missing `error.tsx`** | `app/error.tsx` | Add client error boundary with retry. Add `app/global-error.tsx` for root-layout crashes. |
| 3 | **Empty `blog/[slug]/page.tsx`** | `app/blog/[slug]/page.tsx` | Implement page, add `generateStaticParams`, `generateMetadata`. Add `loading.tsx` under `blog/`. |
| 4 | **Global Aurora/Spotlight on every route** | `app/layout.tsx` | Move `Aurora` and `Spotlight` into a route-group layout or conditionally render based on route. |

### 🟡 Medium — SEO & UX Improvements

| # | Issue | File | Action |
|---|-------|------|--------|
| 5 | **No page-level metadata** | `app/page.tsx`, `app/download/page.tsx` | Add `generateMetadata` per page for unique OG/title |
| 6 | **Static OG image** | `app/opengraph-image.tsx` | Generate per-page OG images with actual content |
| 7 | **Missing `global-not-found.js`** | `app/global-not-found.js` | Add for unmatched-route 404 coverage |
| 8 | **No route groups** | — | Organize into `(marketing)` and `(app)` groups with separate layouts |
| 9 | **Sitemap references empty pages** | `app/sitemap.ts` | Remove `/contact`, `/faq` until pages have real content |
| 10 | **Placeholder pages deployed** | 6 empty `page.tsx` files | Either implement or delete until ready |

### 🟢 Low — Nice to Have

| # | Issue | File | Action |
|---|-------|------|--------|
| 11 | **No `viewport` export** | `app/layout.tsx` | Add explicit `viewport` metadata for mobile optimization |
| 12 | **No `template.tsx`** | — | Consider for animated route transitions |
| 13 | **API route lacks caching** | `app/api/release/route.ts` | Add `stale-while-revalidate` headers or `export const dynamic` config |
| 14 | **Layout uses `Readonly<>` wrapper** | `app/layout.tsx` | Unnecessary — props are already readonly by default in React 19 |

---

## Version-Specific Conventions (Next.js 16.x)

This project follows these v16 conventions correctly:
- ✅ `params` as `Promise` in dynamic routes (not yet used, but pattern is correct)
- ✅ Root layout defines `<html>` and `<body>`
- ✅ Static `metadata` object export
- ✅ `readonly` children type in layout (though unnecessary)

Not yet adopted from v16:
- ❌ No `generateMetadata` usage
- ❌ No `loading.tsx` / Suspense boundaries
- ❌ No `global-not-found.js` for unmatched routes

---

## Summary

| Category | Status |
|----------|--------|
| Root Layout | 🟡 Minor |
| Metadata | 🟢 Good |
| `loading.tsx` | 🔴 Missing |
| `error.tsx` | 🔴 Missing |
| `not-found.tsx` | 🟡 Adequate |
| Route Groups | 🟡 Not Used |
| Parallel Routes | 🟢 Not Needed |
| Dynamic Routes | 🔴 Stub Only |
| API Routes | 🟢 Functional |
| Empty Pages | 🟡 6 Stubs |

**4 critical fixes, 6 medium improvements, 4 nice-to-haves.**
