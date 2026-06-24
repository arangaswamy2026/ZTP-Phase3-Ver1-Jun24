# ZTP — UI States Matrix (Mocks Needed)

Comprehensive list of screens and the UI states that need mocks. States are grouped by scope. "Standard data states" = Loading (skeleton), Error (load failed), and No-results (search/filter returns nothing); these apply to most data screens and are called out where they matter most.

Date compiled: 17 Jun 2026. Source: `src/app/routes.tsx`.

---

## A. All-Tenants / MSP scope

| Screen | UI State | What the state is for |
|---|---|---|
| MSP Dashboard (`/msp-dashboard`) | Populated | Default view — widgets with full tenant data |
| | Loading | Skeleton widgets while metrics load |
| | Partial fleet | Some tenants pending setup (data gaps shown as "—") |
| | Empty fleet | MSP has zero tenants yet — onboarding prompt |
| | Widget error | A single widget fails (e.g. traffic feed down) without breaking the page |
| Tenant Management (`/tenant-management`) | Populated | Tenants with licensing, support, firmware |
| | Attention filters active | Chips applied: Needs renewal / Expired / Firmware / Pending |
| | Row expanded | Detail panel with activation key, license breakdown |
| | Bulk selection | Multi-select with bulk action bar visible |
| | No search results | Search/filter returns nothing |
| | Empty | No tenants onboarded |
| Inventory (`/inventory`) | Populated | Devices/assets across tenants |
| | Loading / Empty / No-results | Standard data states |
| | Offline / unreachable device | Device with stale or unknown status |
| Reports / Blocked Threats (`/blocked-threats`) | Populated | Threat and traffic reporting |
| | Empty period | No threats in selected range |
| | Loading / Export-in-progress | Data fetch and report generation |
| All Tenants System Status (`/all-tenants-system-status`) | All healthy | Every tenant/service operational |
| | Degraded / Incident | One or more services down or degraded |
| | Loading | Status checks in progress |

---

## B. Tenant (ZTP) scope

| Screen | UI State | What the state is for |
|---|---|---|
| Zero Trust Dashboard (`/dashboard`) | Operational (populated) | Active tenant with traffic, policies, endpoints |
| | Pending onboarding | New tenant not yet set up — Day-0 prompts |
| | Default template active | "Standard security template" banner state |
| | Loading / Empty / Error | Standard data states |
| Users / IDP (`/users`) | Populated | User directory with avatars, roles, devices |
| | No IDP configured | Identity source not connected — connect prompt |
| | Empty directory | IDP connected but zero users synced |
| | No search results | Filtered search empty |
| | Loading | Directory sync in progress |
| Policies (`/policies`, `/access-policies`, `/secure-access-policy`) | Populated list | Existing policies |
| | Empty | No policies created — create-first CTA |
| | No-results / Loading | Standard data states |
| | Disabled / draft policy | Policy toggled off or unpublished |
| Profiles (`/profiles`, `/profiles/default-trust-profile`) | Populated | Trust/posture profiles |
| | Empty | No custom profiles — default only |
| | Default (read-only) | System default profile not editable |
| Objects (`/objects`) | Populated / Empty / No-results | Reusable objects library states |
| Connectors / System Status (`/connectors`) | Connected | Connector online and healthy |
| | Disconnected / error | Connector offline or auth failed |
| | Provisioning | Connector being set up |
| | Empty | No connectors added |
| Network (`/network`) | Populated / Empty / Loading | Network config / interfaces / zones |
| Activity (`/activity`) | Populated | Session and event log |
| | Empty | No activity in range |
| | Filtered no-results / Loading | Standard data states |
| Reports (`/reports`) | Populated / Empty period / Export-in-progress | Tenant-level reporting |
| Downloads (`/downloads`) | List available | Client/agent downloads |
| | Empty | Nothing available for platform |
| Advanced Settings (`/advanced-settings`) | Default | Settings form populated |
| | Editing / unsaved changes | Dirty form with save prompt |
| | Validation error / Saved | Form error and success confirmation |

---

## C. Policy creation & detail flows

| Screen | UI State | What the state is for |
|---|---|---|
| Create/Edit Zone Policy (`/zone-policy/create`, `/:id/edit`) | Empty form | New policy, no input yet |
| | In-progress (wizard step) | Mid-flow with partial data |
| | Validation error | Required fields missing/invalid |
| | Submitting / Success | Save in progress and confirmation |
| Zone Policy Detail (`/zone-policy/:id`) | Populated | Policy summary and rules |
| | Not found / no access | Invalid ID or permission denied |
| Internet Policy — create / detail / edit | Empty form / In-progress / Validation / Detail populated | Same lifecycle as Zone Policy |
| Private Access Policy — create / detail / edit | Empty form / In-progress / Validation / Detail populated | Same lifecycle; plus resource-selection empty state |

---

## D. Onboarding & lifecycle

| Screen | UI State | What the state is for |
|---|---|---|
| Activation (`/activation`) | Awaiting activation | Key entered, pending verification |
| | Success | Activated confirmation |
| | Error / expired key | Invalid or expired activation key |
| Tenants (`/tenants`) | Populated list | All tenants |
| | Empty | No tenants — create-first CTA |
| | Create tenant form | New-tenant form (default, validation, submitting, success) |
| Day-0 Onboarding (component) | Setup not started | Initial readiness checklist |
| | In-progress | Some steps complete |
| | Blocked / failed check | Readiness check failed |
| | Complete | All steps done — operational handoff |

---

## E. Global / cross-cutting

| Screen / Element | UI State | What the state is for |
|---|---|---|
| Not Found (`*`) | 404 | Unknown route |
| Tenant scope switcher | All Tenants selected | Global MSP view |
| | Single tenant selected | Tenant-scoped navigation |
| | Newly created tenant highlight | Post-create scope highlight |
| Client Download modal | Default / Platform-selected / Downloading | Agent download flow |
| Global notifications (toasts) | Success / Error / Info | Action feedback |
| Permissions | Read-only / no-access | Viewer role or insufficient permission across screens |
| Connectivity | Offline / reconnecting | App-level loss of backend connectivity |

---

### Cross-cutting states to mock for most data screens
- **Loading** — skeleton/placeholder while data fetches.
- **Empty / zero-state** — no data yet, with a clear next action.
- **Error** — load or save failed, with retry.
- **No-results** — search or filter returns nothing.
- **Read-only** — viewer role or system-managed records.
