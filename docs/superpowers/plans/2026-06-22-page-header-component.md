# Page Header Component Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a `PageHeader` React component matching the 4 design system variants and update all ~25 prototype pages to use it, lifting headers out of sub-components where needed.

**Architecture:** Single `PageHeader` component whose variant is auto-detected from props — `back` prop → detail; `actions` → with-actions; `subtitle` only → standard; neither → simple. Pages that delegate to sub-components have their PageHeader lifted to the page-level wrapper; the sub-component's title block is removed. No padding is added inside PageHeader — `<main className="flex-1 p-8">` in RootLayout already provides 32px gutters.

**Tech Stack:** React, Tailwind v4, `lucide-react@0.487.0` (versioned specifier required by vite alias), react-router v7.

---

## File Map

| Action | File |
|---|---|
| Create | `src/app/components/PageHeader.tsx` |
| Modify | `src/app/pages/AllTenantsSystemStatusPage.tsx` |
| Modify | `src/app/pages/BlockedThreatsPage.tsx` |
| Modify | `src/app/pages/MspDashboardPage.tsx` |
| Modify | `src/app/pages/ActivityPage.tsx` |
| Modify | `src/app/pages/DashboardPage.tsx` |
| Modify | `src/app/pages/TenantManagementPage.tsx` |
| Modify | `src/app/pages/NetworkPage.tsx` |
| Modify | `src/app/pages/InventoryPage.tsx` |
| Modify | `src/app/pages/ReportsPage.tsx` |
| Modify | `src/app/pages/Policies.tsx` |
| Modify | `src/app/pages/ZonePolicyDetailPage.tsx` |
| Modify | `src/app/pages/InternetPolicyDetailPage.tsx` |
| Modify | `src/app/pages/PrivateAccessPolicyDetailPage.tsx` |
| Modify | `src/app/pages/CreateZonePolicyPage.tsx` |
| Modify | `src/app/pages/CreateInternetPolicyPage.tsx` |
| Modify | `src/app/pages/CreatePrivateAccessPolicyPage.tsx` |
| Modify | `src/app/pages/ConnectorsPage.tsx` + `src/app/components/ConnectorsView.tsx` |
| Modify | `src/app/pages/UsersPage.tsx` + `src/app/components/IDPManagement.tsx` |
| Modify | `src/app/pages/ProfilesPage.tsx` + `src/app/components/ProfilesView.tsx` |
| Modify | `src/app/pages/ObjectsPage.tsx` + `src/app/components/ObjectsView.tsx` |
| Modify | `src/app/pages/DownloadsPage.tsx` + `src/app/components/DownloadsView.tsx` |
| Modify | `src/app/pages/AccessPoliciesPage.tsx` + `src/app/components/AccessPoliciesView.tsx` |
| Modify | `src/app/pages/DefaultTrustProfilePage.tsx` + `src/app/components/DeviceTrustProfile.tsx` |
| Modify | `src/app/pages/AdvancedSettingsPage.tsx` + `src/app/components/AdvancedSettings.tsx` |

---

### Task 1: Create `PageHeader` component

**Files:**
- Create: `src/app/components/PageHeader.tsx`

- [ ] **Step 1: Create the component**

```tsx
import React from 'react';
import { ChevronLeft } from 'lucide-react@0.487.0';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  back?: { label: string; onClick: () => void };
}

export function PageHeader({ title, subtitle, actions, back }: PageHeaderProps) {
  const isDetail = !!back;

  return (
    <div className="flex items-start justify-between gap-6">
      <div>
        {back && (
          <button
            onClick={back.onClick}
            className="inline-flex items-center gap-1.5 text-[#0066cc] text-[0.8125rem] font-medium mb-2 bg-transparent border-none p-0 cursor-pointer leading-none"
          >
            <ChevronLeft className="w-4 h-4" />
            {back.label}
          </button>
        )}
        <h1
          className={
            isDetail
              ? 'text-[1.375rem] font-bold leading-[1.27] tracking-[-0.031em] text-[#1a1a1a] m-0'
              : 'text-2xl font-semibold leading-tight tracking-[-0.0036em] text-[#1a1a1a] m-0'
          }
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-[0.8125rem] text-[#717182] mt-1 leading-normal max-w-[56ch] m-0">
            {subtitle}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-2 flex-shrink-0">
          {actions}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/components/PageHeader.tsx
git commit -m "feat: add PageHeader component (4 variants from design system)"
```

---

### Task 2: Simple variant pages (no subtitle, no actions)

**Files:**
- Modify: `src/app/pages/AllTenantsSystemStatusPage.tsx`
- Modify: `src/app/pages/BlockedThreatsPage.tsx`
- Modify: `src/app/pages/MspDashboardPage.tsx`
- Modify: `src/app/pages/ActivityPage.tsx`

- [ ] **Step 1: `AllTenantsSystemStatusPage.tsx` — replace the page title block**

Find (around line 310–315):
```tsx
      {/* Page title */}
        <h1 className="text-2xl font-semibold text-foreground">System Status</h1>
```
Replace with:
```tsx
      <PageHeader title="System Status" />
```
Add import at top of file:
```tsx
import { PageHeader } from '../components/PageHeader';
```

- [ ] **Step 2: `BlockedThreatsPage.tsx` — replace the page title block**

Find (around line 227–232) the `h1` element:
```tsx
          <h1 className="text-2xl font-semibold text-foreground">Blocked Threats</h1>
```
Replace with:
```tsx
          <PageHeader title="Blocked Threats" />
```
Add import at top of file:
```tsx
import { PageHeader } from '../components/PageHeader';
```

- [ ] **Step 3: `MspDashboardPage.tsx` — replace the page title block**

Find (around line 264):
```tsx
          <h1 className="text-2xl font-semibold text-foreground">MSP Dashboard</h1>
```
Replace with:
```tsx
          <PageHeader title="MSP Dashboard" />
```
Add import at top of file:
```tsx
import { PageHeader } from '../components/PageHeader';
```

- [ ] **Step 4: `ActivityPage.tsx` — add a PageHeader**

Current file:
```tsx
import { ActivityTable } from '../components/ActivityTable';

export function ActivityPage() {
  return (
    <div className="flex flex-col gap-[24px] w-full p-[24px]">
      <ActivityTable />
    </div>
  );
}
```
Replace with:
```tsx
import { ActivityTable } from '../components/ActivityTable';
import { PageHeader } from '../components/PageHeader';

export function ActivityPage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <PageHeader title="Activity" />
      <ActivityTable />
    </div>
  );
}
```

- [ ] **Step 5: Commit**

```bash
git add src/app/pages/AllTenantsSystemStatusPage.tsx src/app/pages/BlockedThreatsPage.tsx src/app/pages/MspDashboardPage.tsx src/app/pages/ActivityPage.tsx
git commit -m "feat: apply Simple PageHeader variant to status/activity pages"
```

---

### Task 3: Standard variant — self-owned headers

**Files:**
- Modify: `src/app/pages/DashboardPage.tsx`
- Modify: `src/app/pages/TenantManagementPage.tsx`
- Modify: `src/app/pages/NetworkPage.tsx`
- Modify: `src/app/pages/InventoryPage.tsx`

- [ ] **Step 1: `DashboardPage.tsx` — replace header block**

Find:
```tsx
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-gray-900 text-[24px] font-bold">Zero Trust Dashboard</h1>
          </div>
          <p className="text-gray-600">
            Monitor and manage your zero trust security posture
          </p>
        </div>
      </div>
```
Replace with:
```tsx
      <PageHeader
        title="Zero Trust Dashboard"
        subtitle="Monitor and manage your zero trust security posture"
      />
```
Add import:
```tsx
import { PageHeader } from '../components/PageHeader';
```

- [ ] **Step 2: `TenantManagementPage.tsx` — find and replace its h1 block**

Find (around line 400–406):
```tsx
        <h1 className="text-2xl font-semibold leading-tight text-foreground">Tenant Management</h1>
```
This sits inside a surrounding div. Replace that enclosing header div with:
```tsx
        <PageHeader
          title="Tenant Management"
          subtitle="Monitor activation, licensing, support, and firmware across all your managed tenants."
        />
```
Read the file first to confirm the exact surrounding structure, then make the edit. Add import at top:
```tsx
import { PageHeader } from '../components/PageHeader';
```

- [ ] **Step 3: `NetworkPage.tsx` — replace the "Advanced Settings" title block**

The `NetworkPage` export function (line 524) has:
```tsx
      {/* Page header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#101828] tracking-[0.07px]">Advanced Settings</h1>
        <button className="px-4 py-2 h-9 text-sm font-medium text-[#0a0a0a] bg-white border border-black/10 rounded-lg hover:bg-gray-50 transition-colors">
          Back to Dashboard
        </button>
      </div>
```
Replace with:
```tsx
      <PageHeader
        title="Network"
        subtitle="Configure zones, interfaces, routes, and NAT policies"
      />
```
Add import:
```tsx
import { PageHeader } from '../components/PageHeader';
```

- [ ] **Step 4: `InventoryPage.tsx` — replace main list header and detail header**

4a. Main list view header (around line 344–352):
```tsx
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-foreground">ZTP Solution Inventory</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Subscription &amp; licensing details for all managed tenants — manage audits, renewals, and tier upgrades in one place.
        </p>
      </div>
```
Replace with:
```tsx
      <PageHeader
        title="ZTP Solution Inventory"
        subtitle="Subscription & licensing details for all managed tenants — manage audits, renewals, and tier upgrades in one place."
      />
```

4b. `SolutionDetail` inner component (around line 154–168): replace the back button + title block:
```tsx
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Inventory
      </button>

      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <h1 className="text-2xl font-semibold text-foreground tracking-tight">{tenant.friendly}</h1>
          <p className="text-sm text-muted-foreground mt-1">Complete ZTP subscription &amp; licensing record for this tenant</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => copyToClipboard(tenant.key!, setCopiedKey)}
            className="h-8 px-3 text-sm border border-border rounded-lg bg-card hover:bg-muted font-medium text-foreground transition-colors"
          >
            {copiedKey ? 'Copied!' : 'Copy Activation Key'}
```
Replace the back button + h1 + p block (lines 156–168, stopping before the action button div) with:
```tsx
      <PageHeader
        title={tenant.friendly}
        subtitle="Complete ZTP subscription & licensing record for this tenant"
        back={{ label: 'Back to Inventory', onClick: onBack }}
        actions={
          <button
            onClick={() => copyToClipboard(tenant.key!, setCopiedKey)}
            className="h-8 px-3 text-sm border border-border rounded-lg bg-card hover:bg-muted font-medium text-foreground transition-colors"
          >
            {copiedKey ? 'Copied!' : 'Copy Activation Key'}
          </button>
        }
      />
```
Remove the old wrapping div (`<div className="flex items-start justify-between gap-4 mb-5">`) and its closing tag, since PageHeader handles that layout.

Add import at top of file:
```tsx
import { PageHeader } from '../components/PageHeader';
```
Remove `ArrowLeft` from the lucide import if it is no longer used elsewhere in the file.

- [ ] **Step 5: Commit**

```bash
git add src/app/pages/DashboardPage.tsx src/app/pages/TenantManagementPage.tsx src/app/pages/NetworkPage.tsx src/app/pages/InventoryPage.tsx
git commit -m "feat: apply Standard PageHeader variant to dashboard/tenant/network/inventory"
```

---

### Task 4: With-actions pages — self-owned headers

**Files:**
- Modify: `src/app/pages/ReportsPage.tsx`
- Modify: `src/app/pages/Policies.tsx`

- [ ] **Step 1: `ReportsPage.tsx` — replace header bar**

Current header block (around lines 127–145):
```tsx
      {/* ── Page header bar ─────────────────────────────────── */}
      <div className="bg-white border-b border-[#e5e7eb] px-6 py-4 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-xl font-bold text-[#111827]">Reports</h1>
          <p className="text-sm text-[#6b7280] mt-0.5">
            Blocked Threats — <strong className="text-[#111827]">Riverside Dental Office</strong>
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          {/* Time range dropdown */}
          <select ...>...</select>
          {/* Export button */}
          ...
        </div>
      </div>
```
This entire block uses `-mx-8 -mt-8` negative margins on the outer container to bleed full-width. Keep that container but replace the inner header div with PageHeader. Replace just the inner content with:
```tsx
      <PageHeader
        title="Reports"
        subtitle="Blocked threats, activity, and security posture for this tenant"
        actions={
          <div className="flex items-center gap-3 flex-wrap">
            <select
              value={range}
              onChange={e => { setRange(e.target.value as Range); setPage(1); }}
              className="text-xs font-medium px-3 py-1.5 border border-[#e5e7eb] rounded-md text-[#6b7280] bg-white focus:outline-none focus:border-[#f05a23]"
            >
              {(['24h','7d','30d','custom'] as Range[]).map(r => (
                <option key={r} value={r}>{rangeLabel[r]}</option>
              ))}
            </select>
            <button
              onClick={() => exportCSV(
                headers,
                filtered.map(e => [e.ts, e.type, e.user, e.ip, e.app, e.policy, e.severity, e.action]),
                'blocked-threats.csv'
              )}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-[#e5e7eb] rounded-md bg-white hover:bg-[#f9fafb] text-[#374151]"
            >
              <Download className="w-3.5 h-3.5" />
              Export CSV
            </button>
          </div>
        }
      />
```
Read the actual export button and select markup from the file before making this edit to copy the exact JSX. Add import:
```tsx
import { PageHeader } from '../components/PageHeader';
```
Remove the outer `<div className="bg-white border-b border-[#e5e7eb] px-6 py-4 flex items-center justify-between flex-wrap gap-3">` wrapper and its closing `</div>` — PageHeader handles the flex layout.

- [ ] **Step 2: `Policies.tsx` — replace title**

Find (around line 88–92):
```tsx
          <h1 className="text-xl font-bold text-[#101828] leading-7">Policies</h1>
```
This sits inside a header-like wrapper. Look at the surrounding structure, then replace just the h1 with PageHeader. The search input to the right should move to a separate row below the header. Replace the header div with:
```tsx
        <PageHeader
          title="Policies"
          subtitle="Manage your security policies across Internet, Private, and Zone-based traffic."
        />
```
Read the full header block in Policies.tsx first to identify the exact div to replace. Add import:
```tsx
import { PageHeader } from '../components/PageHeader';
```

- [ ] **Step 3: Commit**

```bash
git add src/app/pages/ReportsPage.tsx src/app/pages/Policies.tsx
git commit -m "feat: apply With-actions/Standard PageHeader to Reports and Policies"
```

---

### Task 5: Standard variant — lifted headers (ConnectorsPage, ProfilesPage, DownloadsPage)

- [ ] **Step 1: `ConnectorsView.tsx` — remove header block**

Find:
```tsx
      <div>
        <h1 className="text-2xl font-bold text-gray-900">System Status</h1>
        <p className="text-gray-600 mt-1">
          Monitor the health and connectivity of your ZTP infrastructure
        </p>
      </div>
```
Delete this entire block. The component now starts at the first content element.

- [ ] **Step 2: `ConnectorsPage.tsx` — add PageHeader**

Replace:
```tsx
import { ConnectorsView } from '../components/ConnectorsView';

export function ConnectorsPage() {
  return <ConnectorsView />;
}
```
With:
```tsx
import { ConnectorsView } from '../components/ConnectorsView';
import { PageHeader } from '../components/PageHeader';

export function ConnectorsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Connectors"
        subtitle="Monitor the health and connectivity of your ZTP infrastructure"
      />
      <ConnectorsView />
    </div>
  );
}
```

- [ ] **Step 3: `ProfilesView.tsx` — remove header block**

Find (around line 339–348):
```tsx
      {/* Page header */}
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-[4px]">
          <span className="font-['Inter',sans-serif] font-bold text-[20px] leading-[28px] tracking-[-0.45px] text-[#101828]">
            Security Profiles
          </span>
          <span className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-[#6a7282]">
            Create and manage reusable security profiles to apply to access policies.
          </span>
        </div>

        {/* Search */}
        <div className="relative w-[256px]">
```
Delete just the title/subtitle div (the `flex flex-col gap-[4px]` block); leave the search div in place. The outer `flex items-center justify-between` wrapper can remain as a search-only row.

- [ ] **Step 4: `ProfilesPage.tsx` — add PageHeader**

Replace:
```tsx
import { ProfilesView } from '../components/ProfilesView';

export function ProfilesPage() {
  return <ProfilesView />;
}
```
With:
```tsx
import { ProfilesView } from '../components/ProfilesView';
import { PageHeader } from '../components/PageHeader';

export function ProfilesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Security Profiles"
        subtitle="Create and manage reusable security profiles to apply to access policies."
      />
      <ProfilesView />
    </div>
  );
}
```

- [ ] **Step 5: `DownloadsView.tsx` — remove header block**

Find:
```tsx
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-gray-900 text-[24px] font-bold">Downloads</h1>
            <p className="text-gray-600 mt-1">
              Download clients, agents, and tools
            </p>
          </div>
        </div>
```
Delete this entire block.

- [ ] **Step 6: `DownloadsPage.tsx` — add PageHeader**

Replace:
```tsx
import { DownloadsView } from '../components/DownloadsView';

export function DownloadsPage() {
  return <DownloadsView />;
}
```
With:
```tsx
import { DownloadsView } from '../components/DownloadsView';
import { PageHeader } from '../components/PageHeader';

export function DownloadsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Downloads"
        subtitle="Download clients, agents, and tools for your ZTP deployment"
      />
      <DownloadsView />
    </div>
  );
}
```

- [ ] **Step 7: Commit**

```bash
git add src/app/pages/ConnectorsPage.tsx src/app/components/ConnectorsView.tsx \
        src/app/pages/ProfilesPage.tsx src/app/components/ProfilesView.tsx \
        src/app/pages/DownloadsPage.tsx src/app/components/DownloadsView.tsx
git commit -m "feat: lift headers to page wrappers for Connectors, Profiles, Downloads"
```

---

### Task 6: With-actions — lifted headers (UsersPage, ObjectsPage, AccessPoliciesPage)

- [ ] **Step 1: `IDPManagement.tsx` — remove header block**

Find (lines 140–154):
```tsx
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 text-[24px] font-bold">Users</h1>
          <p className="text-gray-600 mt-1">
            View your configured identity source and user directory
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => setIsReconfiguring(true)}>
            <Settings className="w-4 h-4 mr-2" />
            Reconfigure IDP
          </Button>
        </div>
      </div>
```
Delete this entire block.

- [ ] **Step 2: `UsersPage.tsx` — add PageHeader with action, manage reconfigure state**

`isReconfiguring` is currently local to `IDPManagement`. Since it was only set to `true` by the header button (and the component uses it internally to show a reconfigure UI), lift it to `UsersPage`:

Replace the current `UsersPage.tsx`:
```tsx
import { IDPManagement } from '../components/IDPManagement';

export function UsersPage() {
  return <IDPManagement />;
}
```
With:
```tsx
import React from 'react';
import { IDPManagement } from '../components/IDPManagement';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/ui/button';
import { Settings } from 'lucide-react@0.487.0';

export function UsersPage() {
  const [isReconfiguring, setIsReconfiguring] = React.useState(false);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Users"
        subtitle="View your configured identity source and user directory"
        actions={
          <Button variant="outline" onClick={() => setIsReconfiguring(true)}>
            <Settings className="w-4 h-4 mr-2" />
            Reconfigure IDP
          </Button>
        }
      />
      <IDPManagement isReconfiguring={isReconfiguring} onReconfigureClose={() => setIsReconfiguring(false)} />
    </div>
  );
}
```
Then update `IDPManagement.tsx` props interface to accept and use these props:
- Add to the component's props: `isReconfiguring?: boolean; onReconfigureClose?: () => void;`
- Replace the local `const [isReconfiguring, setIsReconfiguring] = React.useState(false);` with the prop (falling back to local state if not provided — or simply remove local state and rely on the prop)

Read `IDPManagement.tsx` to find how `isReconfiguring` is used inside the component (e.g., showing reconfigure flow, cancel handling), then wire `onReconfigureClose` to wherever `setIsReconfiguring(false)` would have been called.

- [ ] **Step 3: `ObjectsView.tsx` — remove header block**

Find (lines 148–164):
```tsx
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-1">Objects</h1>
          <p className="text-sm text-gray-600">
            Define reusable objects for use in access policies and security rules
          </p>
        </div>
        <Button 
          onClick={() => onCreateObject?.(activeTab)}
          className="bg-[#FF5D00] hover:bg-[#FF5D00]/90"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Object
        </Button>
      </div>
```
Delete this entire block.

- [ ] **Step 4: `ObjectsPage.tsx` — add PageHeader with action**

Replace:
```tsx
import { ObjectsView } from '../components/ObjectsView';

export function ObjectsPage() {
  return <ObjectsView />;
}
```
With:
```tsx
import { ObjectsView } from '../components/ObjectsView';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/ui/button';
import { Plus } from 'lucide-react@0.487.0';

export function ObjectsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Objects"
        subtitle="Define reusable objects for use in access policies and security rules"
        actions={
          <Button className="bg-[#FF5D00] hover:bg-[#FF5D00]/90">
            <Plus className="w-4 h-4 mr-2" />
            Create Object
          </Button>
        }
      />
      <ObjectsView />
    </div>
  );
}
```
Note: The `onCreateObject` handler is wired in the original ObjectsView but was already optional (no-op). The button in the page wrapper does nothing in this prototype; functionality can be wired later.

- [ ] **Step 5: `AccessPoliciesView.tsx` — remove header block**

Find (around lines 922–933):
```tsx
      {/* Page header */}
      <div className="flex flex-col gap-[16px] w-full">
        <div className="flex flex-col gap-[4px]">
          <span className="font-['Inter',sans-serif] font-bold text-[20px] ...">
            Policies
          </span>
          <span className="font-['Inter',sans-serif] font-normal text-[16px] ...">
            Manage and review all your access policies across Internet, Private, and Zone-based traffic.
          </span>
        </div>

        {/* Search and Filter */}
```
Delete just the title/subtitle `flex flex-col gap-[4px]` block; leave the search/filter row and the outer `flex flex-col gap-[16px]` wrapper intact.

- [ ] **Step 6: `AccessPoliciesPage.tsx` — add PageHeader**

Replace:
```tsx
import { AccessPoliciesView } from '../components/AccessPoliciesView';

export function AccessPoliciesPage() {
  return <AccessPoliciesView />;
}
```
With:
```tsx
import { AccessPoliciesView } from '../components/AccessPoliciesView';
import { PageHeader } from '../components/PageHeader';

export function AccessPoliciesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Access Policies"
        subtitle="Manage and review all your access policies across Internet, Private, and Zone-based traffic."
      />
      <AccessPoliciesView />
    </div>
  );
}
```

- [ ] **Step 7: Commit**

```bash
git add src/app/pages/UsersPage.tsx src/app/components/IDPManagement.tsx \
        src/app/pages/ObjectsPage.tsx src/app/components/ObjectsView.tsx \
        src/app/pages/AccessPoliciesPage.tsx src/app/components/AccessPoliciesView.tsx
git commit -m "feat: lift headers to page wrappers for Users, Objects, AccessPolicies"
```

---

### Task 7: Detail variant — policy detail pages

**Files:**
- Modify: `src/app/pages/ZonePolicyDetailPage.tsx`
- Modify: `src/app/pages/InternetPolicyDetailPage.tsx`
- Modify: `src/app/pages/PrivateAccessPolicyDetailPage.tsx`

- [ ] **Step 1: `ZonePolicyDetailPage.tsx` — replace back button + header card**

The page currently has a back button at around line 50–57 and a main header card around line 58+. Read the file, then replace the back button + h1 block with PageHeader.

Find the back button block:
```tsx
        <button 
          onClick={() => navigate('/access-policies')}
          className="flex items-center gap-1.5 text-[#6a7282] hover:text-[#101828] transition-colors w-fit"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="font-medium text-sm">Back to Access Policies</span>
        </button>
```
And the h1 block (inside the main header card, around line 88):
```tsx
            <h1 className="text-[22px] font-bold text-[#101828] leading-7 tracking-[-0.5px]">
              {policy.name}
            </h1>
```

The policy name as page title and actions (Duplicate/Delete) should move to a top-level PageHeader before the card. Replace both with:
```tsx
      <PageHeader
        title={policy.name}
        subtitle={policy.description}
        back={{ label: 'Back to Access Policies', onClick: () => navigate('/access-policies') }}
        actions={
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm"><Copy className="w-4 h-4 mr-1" />Duplicate</Button>
            <Button variant="destructive" size="sm"><Trash2 className="w-4 h-4 mr-1" />Delete</Button>
          </div>
        }
      />
```
Read the file carefully to see what action buttons already exist and replicate them. Add import:
```tsx
import { PageHeader } from '../components/PageHeader';
```
Remove `ChevronLeft` from lucide imports if no longer used.

- [ ] **Step 2: `InternetPolicyDetailPage.tsx` — replace back button + title**

Find the back button (around line 217–229) and the policy title. Replace with PageHeader similar to Step 1, wiring back to `/access-policies`. Read the file to find the exact blocks. Add import:
```tsx
import { PageHeader } from '../components/PageHeader';
```

- [ ] **Step 3: `PrivateAccessPolicyDetailPage.tsx` — replace back button + title**

Read the file to find back button and title. The policy `title` and `subtitle` come from the mock data. Replace with PageHeader:
```tsx
      <PageHeader
        title={policy.title}
        subtitle={policy.subtitle}
        back={{ label: 'Back to Access Policies', onClick: () => navigate('/access-policies') }}
        actions={
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm"><Copy className="w-4 h-4 mr-1" />Duplicate</Button>
            <Button variant="destructive" size="sm"><Trash2 className="w-4 h-4 mr-1" />Delete</Button>
          </div>
        }
      />
```
Add import:
```tsx
import { PageHeader } from '../components/PageHeader';
```

- [ ] **Step 4: Commit**

```bash
git add src/app/pages/ZonePolicyDetailPage.tsx src/app/pages/InternetPolicyDetailPage.tsx src/app/pages/PrivateAccessPolicyDetailPage.tsx
git commit -m "feat: apply Detail PageHeader variant to policy detail pages"
```

---

### Task 8: Detail variant — policy create/edit pages

**Files:**
- Modify: `src/app/pages/CreateZonePolicyPage.tsx`
- Modify: `src/app/pages/CreateInternetPolicyPage.tsx`
- Modify: `src/app/pages/CreatePrivateAccessPolicyPage.tsx`

- [ ] **Step 1: `CreateZonePolicyPage.tsx` — replace back button + title**

Find (around lines 223–242) the back button and h1:
```tsx
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        ...
      >
        {isEdit ? 'Back to Policy' : 'Back to Access Policies'}
      </button>
      ...
      <h1 className="font-['Inter',sans-serif] font-bold text-[22px] leading-[28px] tracking-[-0.5px] text-[#101828]">
        {isEdit ? 'Edit Zone Policy' : 'Create Zone Policy'}
      </h1>
```
Replace with:
```tsx
      <PageHeader
        title={isEdit ? 'Edit Zone Policy' : 'Create Zone Policy'}
        subtitle="Define rules for traffic between network zones"
        back={{ label: isEdit ? 'Back to Policy' : 'Back to Access Policies', onClick: () => navigate(-1) }}
      />
```
Add import:
```tsx
import { PageHeader } from '../components/PageHeader';
```

- [ ] **Step 2: `CreateInternetPolicyPage.tsx` — replace back button + title**

Find (around lines 284–305) the back button and h1 (around line 300):
```tsx
          Back to Access Policies
...
              <h1 className="font-['Inter',sans-serif] font-bold text-[22px] leading-[28px] tracking-[-0.5px] text-[#101828]">
                {policyName || 'Create Internet Access Policy'}
              </h1>
```
Replace back button + h1 block with:
```tsx
      <PageHeader
        title={policyName || 'Create Internet Access Policy'}
        subtitle="Control outbound internet traffic for users and devices"
        back={{ label: 'Back to Access Policies', onClick: () => navigate('/access-policies') }}
      />
```
Add import:
```tsx
import { PageHeader } from '../components/PageHeader';
```

- [ ] **Step 3: `CreatePrivateAccessPolicyPage.tsx` — replace back button + title**

Find (around lines 172–190) the back button and h1 (around line 186):
```tsx
          Back to Access Policies
...
          <h1 className="font-['Inter',sans-serif] font-bold text-[22px] leading-[28px] tracking-[-0.5px] text-[#101828]">
            {policyName || 'Create Private Access Policy'}
          </h1>
```
Replace with:
```tsx
      <PageHeader
        title={policyName || 'Create Private Access Policy'}
        subtitle="Grant secure access to private applications and resources"
        back={{ label: 'Back to Access Policies', onClick: () => navigate('/access-policies') }}
      />
```
Add import:
```tsx
import { PageHeader } from '../components/PageHeader';
```

- [ ] **Step 4: Commit**

```bash
git add src/app/pages/CreateZonePolicyPage.tsx src/app/pages/CreateInternetPolicyPage.tsx src/app/pages/CreatePrivateAccessPolicyPage.tsx
git commit -m "feat: apply Detail PageHeader variant to policy create/edit pages"
```

---

### Task 9: Detail variant — lifted headers (DefaultTrustProfilePage, AdvancedSettingsPage)

**Files:**
- Modify: `src/app/pages/DefaultTrustProfilePage.tsx` + `src/app/components/DeviceTrustProfile.tsx`
- Modify: `src/app/pages/AdvancedSettingsPage.tsx` + `src/app/components/AdvancedSettings.tsx`

- [ ] **Step 1: `DeviceTrustProfile.tsx` — remove back button + header block**

Find (around lines 537–558):
```tsx
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-[8px] w-fit group"
      >
        <ArrowLeft className="w-[16px] h-[16px] text-[#364153]" />
        <span className="font-['Inter',sans-serif] font-normal text-[14px] ...">
          Back to Profiles
        </span>
      </button>

      {/* Header */}
      <div className="flex flex-col gap-[8px]">
        <h1 className="font-['Inter',sans-serif] font-bold text-[28px] leading-[36px] tracking-[-0.5px] text-[#101828]">
          Device Trust Profile
        </h1>
        <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#6a7282]">
          Define the security checks every user's device must pass...
        </p>
      </div>
```
Delete both the back button block and the header div block.

- [ ] **Step 2: `DefaultTrustProfilePage.tsx` — add PageHeader**

Replace:
```tsx
import { useNavigate } from 'react-router';
import { DeviceTrustProfile } from '../components/DeviceTrustProfile';

export function DefaultTrustProfilePage() {
  const navigate = useNavigate();

  return (
    <DeviceTrustProfile 
      onBack={() => navigate('/profiles')}
    />
  );
}
```
With:
```tsx
import { useNavigate } from 'react-router';
import { DeviceTrustProfile } from '../components/DeviceTrustProfile';
import { PageHeader } from '../components/PageHeader';

export function DefaultTrustProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Device Trust Profile"
        subtitle="Define the security checks every user's device must pass. Devices that fail will have their access automatically restricted."
        back={{ label: 'Back to Profiles', onClick: () => navigate('/profiles') }}
      />
      <DeviceTrustProfile onBack={() => navigate('/profiles')} />
    </div>
  );
}
```

- [ ] **Step 3: `AdvancedSettings.tsx` — remove header block**

Find (around lines 18–26):
```tsx
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Advanced Settings</h1>
        <Button variant="outline" onClick={onBackToDashboard}>
          Back to Dashboard
        </Button>
      </div>
```
Delete this block. The component no longer renders a header.

- [ ] **Step 4: `AdvancedSettingsPage.tsx` — add PageHeader**

Replace:
```tsx
import { useNavigate } from 'react-router';
import { AdvancedSettings } from '../components/AdvancedSettings';

export function AdvancedSettingsPage() {
  const navigate = useNavigate();

  return (
    <AdvancedSettings 
      onBackToDashboard={() => navigate('/dashboard')} 
    />
  );
}
```
With:
```tsx
import { useNavigate } from 'react-router';
import { AdvancedSettings } from '../components/AdvancedSettings';
import { PageHeader } from '../components/PageHeader';

export function AdvancedSettingsPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Advanced Settings"
        subtitle="Configure device settings, zones, routing, and NAT policies"
        back={{ label: 'Back to Dashboard', onClick: () => navigate('/dashboard') }}
      />
      <AdvancedSettings onBackToDashboard={() => navigate('/dashboard')} />
    </div>
  );
}
```

- [ ] **Step 5: Commit**

```bash
git add src/app/pages/DefaultTrustProfilePage.tsx src/app/components/DeviceTrustProfile.tsx \
        src/app/pages/AdvancedSettingsPage.tsx src/app/components/AdvancedSettings.tsx
git commit -m "feat: lift Detail PageHeader to DeviceTrustProfile and AdvancedSettings pages"
```

---

### Task 10: Verify in browser

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

Open `http://localhost:<port>/ZTP-phase-3-/` in a browser.

- [ ] **Step 2: Spot-check each variant**

Navigate to these pages and confirm the header renders correctly:

| Page | URL | Expected variant |
|---|---|---|
| MSP Dashboard | `/msp-dashboard` | Simple — "MSP Dashboard" title only |
| Tenant Management | `/tenant-management` | Standard — title + subtitle |
| Reports | `/reports` | With actions — Export button right-aligned |
| Policies | `/policies` | Standard — title + subtitle |
| Zone Policy detail | `/zone-policy/[any id]` | Detail — back link above larger title |
| Device Trust Profile | `/profiles/default` (or however routed) | Detail — back to Profiles |
| Connectors | `/connectors` | Standard — title + subtitle (lifted from sub-component) |
| Users | `/users` | With actions — Reconfigure IDP button |

- [ ] **Step 3: Confirm no duplicate headers**

Verify that pages with lifted headers do not show the title twice (once in PageHeader and once in the sub-component).

- [ ] **Step 4: Final commit if any tweaks needed**

```bash
git add -p   # stage only the tweak files
git commit -m "fix: page header polish after visual review"
```
