# Design System: SonicWall ZTP

> This file is the source of truth for the visual direction of this project. When building, read this file and apply these tokens. Do not introduce colors, fonts, spacing, or radii that are not defined here.

**Direction:** Modern, clean enterprise security console — a deep navy command shell wrapping a neutral, content-first workspace.
**Feeling:** Serious, trustworthy, in control.
**Generated for:** SonicWall ZTP (Zero Trust Provisioning) administrators and MSP partners managing tenants, policies, and connectors.

> Extracted from the existing codebase: the live shell (`PrimaryNav`, `SecondaryNav`, `TopBar`), the shadcn token foundation in `src/styles/globals.css`, and the documented `ZTP-TEMPLATE 4` migration spec. This is the system already in use — not a new direction.

---

## 1. Color

The identity is a **navy + orange** chrome around a **neutral grayscale** content area, with **blue** as the interactive action color. State the role of every color. Do not add colors outside this list.

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#f8f9fa` | App/page background behind cards |
| Surface | `#ffffff` | Cards, panels, tables, modals |
| Surface subtle | `#ececf0` | Muted fills, hover rows, chips |
| Text primary | `#1a1a1a` | Headings and body text |
| Text muted | `#717182` | Secondary text, captions, breadcrumbs |
| Accent (action) | `#0066cc` | Primary buttons, links, focus, emphasis |
| Accent hover | `#0052a6` | Hover/active state of action blue |
| Border | `rgba(0,0,0,0.1)` | Dividers, card and input borders |
| Nav surface | `#001b50` | Primary navigation rail (dark navy chrome) |
| Nav accent | `#ff5d00` | **Nav active state only** — reserved; never a CTA |
| Nav icon idle | `#c4d1e5` | Inactive nav icons / labels on navy |
| Nav hover | `#d4e3f9` | Hover state on navy rail |
| Success | `#16a34a` | Positive states, active/healthy status |
| Warning | `#d97706` | Caution states |
| Error | `#d4183d` | Errors, destructive actions |
| Info | `#0066cc` | Informational states (shares action blue) |

**Reserved-color rule:** Orange (`--color-nav-accent`) marks the active navigation item and nothing else. All call-to-action buttons use the action blue. Destructive actions use error red.

**Contrast check (WCAG AA):**
- Text primary `#1a1a1a` on Background `#f8f9fa`: ~16.8:1 — passes AAA
- Text muted `#717182` on Surface `#ffffff`: ~4.6:1 — passes AA (body)
- White on Accent `#0066cc`: ~5.0:1 — passes AA
- White on Nav surface `#001b50`: ~15.5:1 — passes AAA
- White on Nav accent `#ff5d00`: ~3.0:1 — large text / icons only

---

## 2. Typography

**Display / headings:** Inter — Google Fonts
**Body:** Inter — Google Fonts (single-family system; system-ui fallback)

Type scale (base 16px, ~1.2 step). Weights: normal 400, medium 500, semibold 600.

| Token | Size | Line height | Weight | Usage |
|-------|------|-------------|--------|-------|
| Display | 30px | 1.5 | 600 | Largest page hero (rare) |
| H1 | 24px | 30px | 600 | Page title (tracking -0.36%) |
| H2 | 20px | 1.5 | 500 | Section title |
| H3 | 18px | 1.5 | 500 | Card / subsection title |
| Body | 16px | 1.5 | 400 | Paragraphs, inputs |
| Small | 13px | 1.5 | 500 | Tab labels, secondary controls |
| Micro | 11px | 1.5 | 600 | Table headers & form labels — UPPERCASE, tracking 1% |

---

## 3. Spacing, radius, elevation

**Spacing scale** (base 4px): `xs 4px · sm 8px · md 16px · lg 24px · xl 32px · 2xl 48px`
Standard page padding: `24px 28px`. Primary nav item height `52px`; secondary nav item `36px`; top bar `48px`.

**Radius:** `sm 4px · md 8px · lg 16px` — three sizes, all multiples of 4. `full` (9999px) is reserved for pills and avatars and is not a scale step. Active nav pill: fixed `10px` (legacy shell value).

**Shadow:**
- `sm`: `0 1px 2px rgba(0,0,0,0.06)` — cards and panels
- `md`: `0 4px 12px rgba(0,0,0,0.08)` — popovers, dropdowns, raised nav pill
- `lg`: `0 12px 32px rgba(0,0,0,0.12)` — modals and dialogs

---

## 4. Components

Describe each in terms of the tokens above. Variants below are the ones actually used in this project (shadcn primitives in `src/app/components/ui/` plus the app-level composition patterns).

### 4.1 Buttons

| Variant | Spec |
|---|---|
| Primary | background Accent `#0066cc`, white text, radius `md` (8px), height 36px (`sm` = 32px, `lg` = 40px), padding `sm lg`; hover Accent hover |
| Secondary | background Surface subtle `#ececf0`, text primary, 1px Border; hover slightly darker subtle |
| Outline | transparent background, 1px Border, text primary; hover Surface subtle |
| Ghost | transparent; hover Surface subtle — used for low-emphasis and toolbar actions |
| Link | text Accent, no background, underline on hover |
| Destructive | background Error `#d4183d`, white text; reserved for delete/remove |
| Disabled | 50% opacity, `pointer-events: none` (applies to every variant) |

**Icon button:** the `ghost` (or `outline`) variant at `size="icon"` — square, single 16px Lucide icon, muted color, radius `md`. Common sizes: 36px (`size-9`) for toolbars and 24px (`h-6 w-6`) for compact pagination/table rows; hover Surface subtle. Always carry an `aria-label`.

### 4.2 Input controls

All field controls share: height 36px (`sm` = 32px), radius `md` (8px), 1px Border, background Surface `#ffffff`, body/small text. **Focus** shows a 3px Accent ring (`ring-accent/50`) plus Accent border. **Invalid** (`aria-invalid`) shows an Error ring and border. **Disabled** is 50% opacity with `not-allowed` cursor.

| Control | Spec |
|---|---|
| Textbox (`Input`) | Single-line field per the shared spec above; `placeholder` uses Text muted |
| Textarea | Same styling, multi-line, `min-height` ~64px, vertical resize |
| Dropdown (`Select`) | Trigger matches the textbox; trailing `ChevronDown` (16px, muted). Menu is a `popover` surface — Surface bg, radius `md`, 1px Border, shadow `md`; items radius `sm`, hover Surface subtle, selected item shows a leading check |
| Search control | A `relative` wrapper with a 16px `Search` icon absolutely placed at `left-3` (Text muted) and an `Input` with `pl-9`. Used for table and list filters (e.g. "Search objects…", "Search by user…") |
| Autocomplete (`Command` / cmdk) | A `CommandInput` over a filtered `CommandList` with `CommandEmpty` fallback, rendered inside a `Popover`. Used for the tenant switcher ("Search tenants…"). Surface bg, shadow `md`, items match dropdown item styling |
| Label | Micro type — 11px / 600 / uppercase / tracking 1%, Text muted, sits above the control |

### 4.3 Cards

Cards build on a common recipe — Surface background, 1px Border, shadow `sm` — and vary by radius, padding, fill, and interaction. These archetypes are all present in the project:

| Card type | Spec & usage |
|---|---|
| Base panel | `bg-surface` · 1px Border · radius `lg` (16px) · shadow `sm` · `overflow-hidden`. The standard container; frequently wraps tables and page sections |
| Content card | Base recipe at radius `lg` (16px) with internal padding `md`–`xl` (16–32px). General-purpose grouped content |
| Stat / summary card | Padded card (`p-6`, radius `lg`). Layout: tinted icon tile (`p-2.5` radius `lg`, status-tinted background) top-left, a trend/status indicator top-right, then title (Small, muted), value (24px), and subtitle (Micro, muted). May embed a sparkline. (`SummaryCards.tsx`) |
| Subtle / nested card | `bg-bg` / gray fill · 1px Border · radius `lg` · padding `sm`–`md`, no shadow. For grouped sub-sections inside a larger panel |
| Selectable card | `bg-surface` · radius `lg` · **2px** Border · `cursor-pointer`; idle border neutral, hover/selected border Accent `#0066cc` (or blue tint fill). Option pickers and template selection |
| Clickable list card | Content card with `hover:shadow-sm` + `transition-shadow` + `cursor-pointer`. Navigable rows/tiles |
| Info callout | Tinted `bg-blue-50` · radius `lg` · 1px blue Border · padding `md`. Informational notes |
| Attention banner | `bg-gradient` orange→amber · **2px** orange Border · radius `lg`. Call-to-action / warnings; the only place orange tints appear in content |
| Modal surface | `bg-surface` · radius `lg` (16px) · 1px Border · shadow `lg`. Dialogs and drawers only |

**Card header (standard)** — every titled card uses one header so they read consistently: a tinted icon tile beside a text block. Two variants only:

- **Name only** — icon tile + name. e.g. Service Health.
- **With eyebrow** — icon tile + a Micro uppercase muted eyebrow *above* the name. e.g. ZTP Connector ("SECURE REMOTE ACCESS").

| Part | Spec |
|---|---|
| Icon tile | 40px square, radius `lg`, status-tinted fill (e.g. `green-50`/`blue-50`/`red-50`), ~20px icon in the matching status color |
| Eyebrow (optional) | Micro — 11px / 600 / uppercase / tracking, Text muted; `2px` below it sits the name |
| Name | 16px / 600, Text primary |
| Suffix (optional) | Inline after the name, Text muted, Small / 400 (e.g. "Last 30 days") |
| Trailing action (optional) | A status pill or link aligned to the header's right edge |

The card body (status list, metric stack, metadata grid, etc.) sits below the header.

**Composed cards** — the recurring dashboard and detail layouts, all using the standard header above:

| Card type | Spec & usage |
|---|---|
| Status-list card | Standard header (name only); body is rows of label (left, Small / 500) and status value (right, Small / 500 in the status color). e.g. Service Health |
| Metric-stack card | Standard header (name + suffix); body stacks metric blocks — each a Small muted label, a 24–28px value, and an inline trend pill. e.g. Web traffic |
| Compact stat card | Standard header (name only) over a large value (28px; Error red when `accent`), then a `↑/↓` trend line (Error up / Success down) or muted sub-line. `bg-surface` · 1px Border · radius `lg` · `p-5`. e.g. Total Blocked (`StatCard`) |
| Resource detail card | Standard header **with eyebrow** plus a trailing status pill; then a hairline divider, a 2-column metadata grid (Micro uppercase label + value), and a tag-chip group. `bg-surface` · radius `lg` · `p-5` · shadow `sm`. e.g. ZTP Connector (`ConnectorsView.tsx`) |
| Feature / highlight panel | Standard header (name only) with a trailing "View Configuration" link, then feature rows (status dot/icon + bold title + muted description). `bg-gradient` from `green-50`→white, 1px Border. e.g. Enabled by Default |
| Branded hero card | `bg-gradient` from Nav `#001b50`→`#004080`, white text, `p-6`. Promotional / onboarding emphasis |

**Card sub-elements:**
- **Trend pill:** inline `bg-bg` chip, radius `sm`, Micro/Small weight 500, with a `TrendingUp` glyph; tints Success (up-good) or Error (up-bad) per context.
- **Tag chip:** `bg-surface-subtle` · 1px Border · radius `sm` · `px-2 py-0.5`, Small text. Used for domains, objects, and multi-value fields.

### 4.4 Data tables

The standard table sits inside a Base panel (1px Border, radius `lg`, `overflow-hidden`) with an optional pagination footer.

| Part | Spec |
|---|---|
| Header row | `bg-surface-subtle`, bottom Border. Cells are Micro type — 11px / 600 / uppercase / tracking, Text muted, left-aligned, `px-4 py-2.5` |
| Body row | Bottom hairline Border (last row none), `hover:bg-surface-subtle` with `transition-colors`; selected row uses the muted fill |
| Cell | `px-4 py-3`; primary text Small / Text primary, secondary text Small / Text muted. Use a **monospace** stack for IDs, IPs, and timestamps |
| Cell content | May host status badges, tag chips, or an action in Error red; align numeric columns right |
| Pagination footer | Top Border, `px-5 py-3`, Small Text muted "Showing X–Y of Z", with 28px `outline` icon buttons (`disabled:opacity-40`) for prev/next |

Two implementations coexist: the shadcn `Table` primitive (`components/ui/table.tsx`, token-driven) and hand-rolled `<table>` markup on data-heavy pages (e.g. `BlockedThreatsPage.tsx`). Both follow the styling above.

### 4.5 Charts

Charts are built two ways: **hand-authored SVG** (line charts, sparklines) and **Recharts** (`components/ui/chart.tsx` wrapper, used for bar charts). They share one palette and these conventions:

| Element | Spec |
|---|---|
| Gridlines | 1px `#f1f5f9` (very light), horizontal only |
| Axis labels | 10px, Text muted (`#99a1af`) |
| Line series | 2px stroke, round caps/joins, one categorical color per series |
| Hover guide | Dashed `#cbd5e1` vertical rule plus marker dots (white fill, 2px series-color stroke) |
| Area / sparkline | Series-color line over a vertical gradient fill (color at ~20% → 0% opacity) |
| Legend | Inline chips — a short color swatch + 11px Text muted label |

**Chart palette.** Categorical series use the `--chart-1…5` tokens; the shell charts use green `#10b981` and sky `#0ea5e9`. Severity/threat encodings are fixed: Critical `#ef4444`, High `#f97316`, Medium `#d97706` — these map to the Error/Warning families, not the categorical palette.

### 4.6 Tooltips

Two tooltip styles, both fading/zooming in on appear:

| Variant | Spec |
|---|---|
| Label tooltip | Radix `Tooltip` — dark `bg-primary` (`#030213`) surface, white text, radius `md`, `px-3 py-1.5`, Small/`text-xs`, with a rotated-square arrow. For brief control hints and truncated-text reveals |
| Data tooltip | A floating Surface card — `bg-surface` · 1px Border · radius `lg` · shadow `lg` · `p-2.5`, `pointer-events-none`. A Micro uppercase muted header (e.g. "Day 14") over rows of a color dot + series label (Text muted) + right-aligned value (`font-semibold`, tabular numerals). Used for chart hover |

The chart data tooltip pairs with the dashed hover guide and marker dots described in §4.5.

### 4.7 Other

**Link:** color Accent, underline on hover, underline-offset 2px.
**Status badge:** 11px / 600, tinted background of its status color at low opacity with the status color as text.
**Primary nav:** navy `#001b50` rail; idle icons `#c4d1e5`; active item gets orange `#ff5d00` icon + indicator bar; 52px rows.

---

## 5. Voice

**Person:** Second person ("you"), addressing the administrator directly.
**Rhythm:** Short, direct, scannable. Lead with the object or status; avoid filler.
**Tone:** Clear and operational. This is an enterprise security console — copy should sound precise and confident, never playful. Use plain technical terms (tenant, policy, connector, trust profile) consistently. Labels are concise nouns; buttons are imperative verbs ("Create Profile", "Add Connector"). Reserve color and emphasis for genuine status, not decoration.

---

## 6. Tokens — CSS custom properties

```css
:root {
  /* color */
  --color-bg: #f8f9fa;
  --color-surface: #ffffff;
  --color-surface-subtle: #ececf0;
  --color-text: #1a1a1a;
  --color-text-muted: #717182;
  --color-accent: #0066cc;
  --color-accent-hover: #0052a6;
  --color-border: rgba(0, 0, 0, 0.1);
  --color-nav: #001b50;
  --color-nav-accent: #ff5d00;
  --color-nav-icon-idle: #c4d1e5;
  --color-nav-hover: #d4e3f9;
  --color-success: #16a34a;
  --color-warning: #d97706;
  --color-error: #d4183d;
  --color-info: #0066cc;

  /* typography */
  --font-display: "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --text-display: 1.875rem; /* 30px */
  --text-h1: 1.5rem;        /* 24px */
  --text-h2: 1.25rem;       /* 20px */
  --text-h3: 1.125rem;      /* 18px */
  --text-body: 1rem;        /* 16px */
  --text-small: 0.8125rem;  /* 13px */
  --text-micro: 0.6875rem;  /* 11px */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-semibold: 600;

  /* spacing (4px base) */
  --space-xs: 0.25rem;  /* 4 */
  --space-sm: 0.5rem;   /* 8 */
  --space-md: 1rem;     /* 16 */
  --space-lg: 1.5rem;   /* 24 */
  --space-xl: 2rem;     /* 32 */
  --space-2xl: 3rem;    /* 48 */

  /* radius — three sizes, multiples of 4 */
  --radius-sm: 0.25rem;  /* 4 */
  --radius-md: 0.5rem;   /* 8 */
  --radius-lg: 1rem;     /* 16 */
  --radius-full: 9999px; /* pills, avatars — not a scale step */

  /* shadow */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.12);
}
```

---

## 7. Tokens — Tailwind theme

This project uses **Tailwind v4** with a CSS-first `@theme` block (see `src/styles/globals.css`). Add these under `@theme inline` so utilities resolve to the ZTP tokens:

```css
@theme inline {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-surface-subtle: var(--color-surface-subtle);
  --color-text: var(--color-text);
  --color-text-muted: var(--color-text-muted);
  --color-accent: var(--color-accent);
  --color-accent-hover: var(--color-accent-hover);
  --color-border: var(--color-border);
  --color-nav: var(--color-nav);
  --color-nav-accent: var(--color-nav-accent);
  --color-success: var(--color-success);
  --color-warning: var(--color-warning);
  --color-error: var(--color-error);
  --color-info: var(--color-info);

  --font-display: var(--font-display);
  --font-body: var(--font-body);

  --radius-sm: var(--radius-sm);
  --radius-md: var(--radius-md);
  --radius-lg: var(--radius-lg);
}
```

For projects on classic Tailwind config (`tailwind.config.js`), the equivalent `theme.extend`:

```js
export default {
  theme: {
    extend: {
      colors: {
        bg: "#f8f9fa",
        surface: { DEFAULT: "#ffffff", subtle: "#ececf0" },
        text: { DEFAULT: "#1a1a1a", muted: "#717182" },
        accent: { DEFAULT: "#0066cc", hover: "#0052a6" },
        border: "rgba(0,0,0,0.1)",
        nav: { DEFAULT: "#001b50", accent: "#ff5d00" },
        success: "#16a34a",
        warning: "#d97706",
        error: "#d4183d",
        info: "#0066cc",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["1.875rem", { lineHeight: "1.5" }],
        h1: ["1.5rem", { lineHeight: "1.875rem", letterSpacing: "-0.0036em" }],
        h2: ["1.25rem", { lineHeight: "1.5" }],
        h3: ["1.125rem", { lineHeight: "1.5" }],
        small: ["0.8125rem", { lineHeight: "1.5" }],
        micro: ["0.6875rem", { lineHeight: "1.5", letterSpacing: "0.01em" }],
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "1rem",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.06)",
        md: "0 4px 12px rgba(0,0,0,0.08)",
        lg: "0 12px 32px rgba(0,0,0,0.12)",
      },
    },
  },
};
```
