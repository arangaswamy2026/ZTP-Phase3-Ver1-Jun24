# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

ZTP Design 2.98 is a **Figma Make export**: a React + Vite single-page application that prototypes SonicWall's Zero Trust Provisioning (ZTP) administration console. It is a design prototype, not a production app — all data is mock and in-memory (see `TenantContext`), the page is marked `noindex`, and there is no backend, auth, or persistence. The original design lives in Figma (linked in `README.md`).

## Commands

```bash
npm i          # install dependencies
npm run dev    # start the Vite dev server
npm run build  # production build (vite build)
```

There is **no test runner, linter, or formatter configured** — do not look for `npm test`/`npm run lint`. Verify changes by running the dev server.

## Vite configuration quirks (important)

`vite.config.ts` contains intentional behavior that is easy to misread as a mistake:

- **Base path** is `/ZTP-phase-3-/` (for GitHub Pages). The dev server serves the app under this prefix — e.g. `http://localhost:<port>/ZTP-phase-3-/`, not `/`. Root-relative URLs without this prefix will 404.
- **Versioned import specifiers.** Figma Make exports imports like `@radix-ui/react-dialog@1.1.6`, `lucide-react@0.487.0`, and `class-variance-authority@0.7.1`. The `resolve.alias` map remaps these versioned specifiers to the installed packages. Source files (especially `components/ui/`) import the *versioned* form on purpose — do not "correct" them to unversioned imports.
- **`figma:asset/...` imports** resolve to `src/assets/` via a custom plugin.
- Both the React and Tailwind Vite plugins are required by Make and must not be removed.
- `@` is aliased to `./src/app`.

## Architecture

**Entry → routing.** `src/main.tsx` mounts `App.tsx`, which renders a React Router v7 `RouterProvider`. All routes are defined in `src/app/routes.tsx` as children of a single `RootLayout` route, so every page renders inside the shell via `<Outlet>`.

**The shell.** `components/RootLayout.tsx` composes the persistent chrome and owns shell-level UI state (active app, lifecycle stage, "All Tenants" mode, modals):
- `PrimaryNav` — the left app rail (navy `#001b50`).
- `SecondaryNav` — section navigation for the active app, driven by `appNavItems` in `components/navigationData.ts` (keyed by app id, e.g. `ztp`).
- `TopBar` — tenant switcher, breadcrumbs, and lifecycle stage.

**Tenant state is the data layer.** `contexts/TenantContext.tsx` is the central store: a hardcoded `TENANTS` array, the `currentTenant`, per-tenant mock data via `getTenantData()`, activation state, and policy mutations. `TenantProvider` wraps the app (through `AppProviders`/`RootLayout`). When a page needs data, it reads from this context — there is no fetching.

**"All Tenants" (MSP) mode.** Selecting `all-tenants` in the TopBar tenant switcher flips `RootLayout` into a distinct MSP view and routes to the MSP-scoped pages (`msp-dashboard`, `tenant-management`, `inventory`, `blocked-threats`, `all-tenants-system-status`). Other navigation exits this mode.

## Directory layout

- `src/app/pages/` — one component per route (~30).
- `src/app/components/` — feature components and the shell (`PrimaryNav`, `SecondaryNav`, `TopBar`, `RootLayout`).
- `src/app/components/ui/` — shadcn/ui primitives (Radix-based). These use versioned import specifiers (see above).
- `src/app/imports/` — ~126 **raw Figma Make exports** (`ZtpDesign*.tsx` plus `svg-*.ts` path data). These are verbatim machine-generated artifacts kept as reference, mostly not wired into the live routes. Treat them as read-only source material; do not hand-edit them as if they were normal components.
- `src/styles/` — `index.css` imports `default_theme.css` then `globals.css`.
- `src/assets/` — targets of `figma:asset/` imports.

## Styling

Tailwind **v4**, CSS-first via `@tailwindcss/vite` — there is **no `tailwind.config.js`**. Design tokens are CSS custom properties defined in `src/styles/globals.css` and `src/styles/default_theme.css` (the two are kept in sync — note the `KEEP_IN_SYNC` marker; edit both), exposed to Tailwind through the `@theme inline` block. The token system is shadcn-based (oklch neutrals).

The SonicWall ZTP brand identity is applied in the shell: navy navigation (`#001b50`), orange active-nav accent (`#FF5D00`, reserved for nav active state only), and action blue (`#0066CC`) for CTAs and links.

A separate, human-authored design system lives at the repo root: `design.md` (the token/component source of truth) and `design-system.html` (a self-contained visual reference). Project specs are under `docs/`.

## Working conventions (from `guidelines/Guidelines.md`)

- **Desktop-first.** Design for a fluid desktop experience; tablet/mobile responsiveness is not required.
- **Figma round-tripping.** Code is copied back into Figma, so favor flex/grid (auto-layout-friendly) structures and use absolute positioning only when necessary.
- **Scope discipline.** Only change the pages explicitly requested. If a change would affect other pages, confirm first and list the affected pages.
