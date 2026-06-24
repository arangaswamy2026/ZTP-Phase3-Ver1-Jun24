# ZTP Template Style Guide Migration

**Date:** 2026-06-05
**Branch:** `style/ztp-template-v1`
**Source spec:** `ZTP-TEMPLATE 4.md`

---

## Overview

Migrate the ZTP Design 2.98 prototype to exactly match the ZTP-TEMPLATE 4 style guide. The current codebase uses Tailwind utility classes with an oklch-based token system that diverges from the template on colors, spacing, typography, and shell dimensions. This spec covers a full migration — all 20+ pages — delivered in a single branch with three layered commits.

---

## Decisions

| Question | Decision |
|---|---|
| Scope | Full migration — all pages and shell components |
| Token strategy | Add `ztp-tokens.css` alongside existing Tailwind/globals.css; no build system changes |
| Branch / commits | `style/ztp-template-v1`; one commit per layer (tokens → shell → pages) |

---

## Commit 1 — Token Layer

**File created:** `src/styles/ztp-tokens.css`

Contains the full `:root {}` block from ZTP-TEMPLATE 4, section 1:

- Surface tokens: `--surface-page`, `--surface-card`, `--surface-subtle`
- Brand: `--brand-primary: #2563EB`
- Status: `--status-success`, `--status-warning`, `--status-error`, `--status-info`
- Blue, neutral, green, amber, red scales
- Spacing scale (4px base, `--space-0` through `--space-16`)
- Radius tokens: `--radius-none/sm/md/lg/xl/full`
- Button tokens: `--btn-sm/md/lg-*`
- Shadow tokens: `--shadow-sm/md/lg/xl`
- Focus ring: `--focus-ring`
- Nav tokens: `--nav-bg: #001b50`, `--nav-accent: #ff5d00`
- Sidebar token: `--sidebar-active-pill-radius: 10px`
- Google Fonts Inter import

**Import location:** Top of `src/styles/index.css`

```css
@import './ztp-tokens.css';
```

The existing `globals.css` is preserved. ZTP tokens take precedence for any component that explicitly references them.

---

## Commit 2 — Shell Components

### PrimaryNav.tsx

| Property | Before | After |
|---|---|---|
| Item height | Variable (`py-[14px]` + content) | Fixed `52px` per item |
| Inactive icon color | `fill="#C4D1E5"` (hardcoded) | `rgba(255,255,255,0.45)` via CSS |
| Active icon color | Scoped `<style>` tag injecting `fill: #FF5D00` | CSS filter: `brightness(0) saturate(100%) invert(42%) sepia(98%) saturate(1200%) hue-rotate(2deg) brightness(103%) contrast(105%)` |
| Active bar | Correct dimensions, correct color | No change needed |

### SecondaryNav.tsx

| Property | Before | After |
|---|---|---|
| Logo area height | `p-4` (~48px, center-aligned) | `63px` fixed, `flex-end` alignment |
| Logo text style | `uppercase tracking-wide` | `20px weight-500 uppercase letter-spacing 0.5px` |
| Nav item height | `py-2` (~32px) | `36px` fixed |
| Nav item font | `text-sm` (14px), weight inherited | `14px weight-400` explicit |
| Active pill radius | `rounded-lg` (8px) | `var(--sidebar-active-pill-radius)` (10px) |
| Active pill shadow | `shadow-md` (generic) | `0 4px 3px rgba(0,0,0,0.10), 0 2px 2px rgba(0,0,0,0.10)` |

### TopBar.tsx

| Property | Before | After |
|---|---|---|
| Height | `h-16` (64px) | `h-12` (48px) |
| Horizontal padding | `px-6` (24px) | `px-5` (20px) |
| Breadcrumb color | `text-[#0066CC]` blue | `var(--neutral-500)` gray |
| Breadcrumb size | `text-sm` (14px) | `12px weight-500` |
| Notification badge | `w-2 h-2` dot, orange | Count number badge, `var(--status-error)` red, `9px weight-700` |
| Avatar size | `w-8 h-8` (32px) | `28px × 28px` |

### RootLayout.tsx

| Property | Before | After |
|---|---|---|
| Body height | `min-h-screen` | `height: 100vh; overflow: hidden` |
| Main column | `flex-1 flex flex-col min-h-screen` | `flex-1 flex flex-col overflow: hidden` |
| Page padding | `p-8` (32px all sides) | `24px 28px` |
| Content max-width | `max-w-[1440px] mx-auto` | Removed — full width |

---

## Commit 3 — Pages (Full Migration)

### Token substitutions applied to all pages

| Tailwind class | ZTP token replacement |
|---|---|
| `text-gray-900` | `text-[var(--neutral-900)]` |
| `text-gray-700` | `text-[var(--neutral-700)]` |
| `text-gray-500` | `text-[var(--neutral-500)]` |
| `text-gray-400` | `text-[var(--neutral-400)]` |
| `bg-white` | `bg-[var(--surface-card)]` |
| `bg-gray-50` | `bg-[var(--surface-page)]` |
| `bg-gray-100` | `bg-[var(--surface-subtle)]` |
| `border-gray-200` | `border-[var(--neutral-200)]` |
| `rounded-lg` on panels | `rounded-[var(--radius-lg)]` |
| `shadow-sm` on cards | `shadow-[var(--shadow-sm)]` |
| `bg-blue-600` / `bg-blue-500` on CTAs | `bg-[var(--brand-primary)]` |
| `text-blue-600` | `text-[var(--brand-primary)]` |
| `bg-green-*` status | `bg-[var(--green-50)] text-[var(--green-600)]` |
| `bg-amber-*` status | `bg-[var(--amber-50)] text-[var(--amber-700)]` |
| `bg-red-*` status | `bg-[var(--red-50)] text-[var(--status-error)]` |

### Typography corrections applied to all pages

| Element | Before | After |
|---|---|---|
| Page title (`h1`) | `text-[24px] font-bold` | `text-[24px] font-semibold tracking-[-0.36%] leading-[30px]` |
| Tab labels | `text-[13px] font-medium` | `text-[13px] font-medium` (no change) |
| Tab active | weight inherited | `font-semibold` |
| Table column headers | varied | `text-[11px] font-semibold uppercase tracking-[1%]` |
| Badge text | varied | `text-[11px] font-semibold tracking-[1%]` |
| Form labels | varied | `text-[11px] font-semibold uppercase tracking-[1%]` |

### Pages covered

- DashboardPage
- PoliciesPage, Policies, AccessPoliciesPage
- CreateInternetPolicyPage, InternetPolicyDetailPage
- CreatePrivateAccessPolicyPage, PrivateAccessPolicyDetailPage
- CreateZonePolicyPage, ZonePolicyDetailPage, SecureAccessPolicyPage
- ConnectorsPage
- UsersPage
- ReportsPage, Reports
- ActivityPage
- AdvancedSettingsPage
- ProfilesPage, DefaultTrustProfilePage
- ObjectsPage
- NetworkPage
- DownloadsPage
- BlockedThreatsPage
- InventoryPage
- TenantManagementPage, TenantsPage, AllTenantsSystemStatusPage
- ActivationPage

---

## Rules (from template, enforced throughout)

- Use token variables — never hardcode a raw color, spacing, or radius that has a token
- Orange (`var(--nav-accent)`) reserved strictly for nav active states
- All CTA buttons use `var(--brand-primary)` blue
- Destructive actions use `var(--status-error)` red
- `focus-visible` outlines use `var(--brand-primary)` with `2px` offset
- `shadow-xl` only on modals; `shadow-sm` on cards and panels

---

## Out of Scope

- No new features or behavioural changes
- No changes to routing, context, or data logic
- No changes to modal content, form validation, or interactive state logic
- `.superpowers/` added to `.gitignore`
