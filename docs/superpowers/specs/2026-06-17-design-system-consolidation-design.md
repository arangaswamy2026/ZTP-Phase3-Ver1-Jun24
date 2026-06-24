# Design-System Consolidation — ZTP MSP Pages

**Date:** 2026-06-17
**Scope:** First batch — the 5 MSP / All-Tenants pages. Subsequent batches (5 pages at a time) reuse the same foundation.

## Problem

The pages hand-roll raw Tailwind utilities and arbitrary hex instead of consuming the design system. Audits of the 5 MSP pages found the same recurring deviations:

- **Brand violations (high):** orange `#ff5d00` / `orange-*` used as CTAs, active controls, and status (reserved for active-nav only); action color rendered as `#1447e6` / `blue-600` instead of `#0066cc`.
- **Token drift (medium):** raw `red/green/yellow-*` instead of semantic colors; cards at `rounded-xl` (12px) missing `shadow-sm`; badges not pill/uppercase/11px; tables with `bg-gray-50` headers, 10px headers, 14px rows; 32–36px icon tiles vs 40px.

**Root cause:** the token layer is incomplete. `--destructive` (#d4183d) exists, but there are **no `--success`, `--warning`, or `--action` tokens**, and `--primary` is `#030213` (near-black), not the brand action blue. So every page reinvents these as raw hex. The shadcn `ui/` primitives exist but the pages bypass them.

## Requirement

The user must be able to restyle a component or recolor a semantic role **in one place** and have it propagate to every page.

## Approach — Centralized layer, then refactor

### Layer 1 — Tokens (single source for *values*)

Edit `src/styles/globals.css` and `src/styles/default_theme.css` (KEEP_IN_SYNC — both files), and expose new vars through the `@theme inline` block so Tailwind classes (`bg-success`, `text-warning`, `bg-action`, etc.) are generated:

- `--success: #16a34a` (+ `--success-foreground`, `--success-subtle` tint for badge bg)
- `--warning: #d97706` (+ foreground + subtle)
- `--info` / `--action: #0066cc` (+ `--action-hover: #0052a6`, foreground, subtle)
- Reuse existing `--destructive: #d4183d` (+ add `--destructive-subtle`).

**`--primary` is left untouched this pass.** Repointing it ripples through the shell and all 30 pages. CTAs adopt the new `action` token. A separate future pass may unify `--primary` globally.

### Layer 2 — Shared DS components (single source for *markup*)

New directory `src/app/components/ds/`:

- `StatusBadge` — semantic variants (`success` / `warning` / `error` / `info` / `neutral`); pill (`rounded-full`), uppercase, 11px micro; consumes Layer-1 tokens.
- `SeverityChip` — `crit` / `high` / `med` variants matching the design-system severity chips.
- `StatCard` — 40px icon tile (radius-lg), metric label + value, optional trend pill.
- `DataTable` style wrapper (or a documented Table usage) — header background `--muted` (#ececf0), 11px uppercase headers, 13px rows, optional footer pager.

Reuse existing `ui/button` (CTAs → action token) and `ui/card` (card shells → radius-lg + shadow-sm + border).

### Layer 3 — Refactor the 5 MSP pages

Replace hand-rolled hex/utilities with Layer 1 tokens and Layer 2 components, in order:
1. `MspDashboardPage`
2. `TenantManagementPage`
3. `InventoryPage`
4. `BlockedThreatsPage`
5. `AllTenantsSystemStatusPage`

## Decorative exception

Multi-series **chart** colors (e.g. `#10b981`, `#0ea5e9` line/bar series) stay as raw hex — they are data-encoding palettes, shown as raw hex in `design-system.html` too. Only **semantic** chart elements (severity bars → warning/error tokens; trend up/down → success/error) get retinted.

## Scope

- **In:** High + Medium severity findings on the 5 MSP pages; the token + component foundation.
- **Out (this pass):** Low-severity items (half-step spacing, dead imports, emoji→icon swaps, blanket raw-gray cleanup); touching `--primary`; the other 25 pages (later batches).

## Verification

Per page: dev server runs, console clean, screenshot before/after compared in the visual companion. Brand check: no orange outside active nav; all CTAs/links action blue.

## Net effect

Recoloring "warning" or restyling every badge becomes a one-file edit (a token or a `ds/` component).
