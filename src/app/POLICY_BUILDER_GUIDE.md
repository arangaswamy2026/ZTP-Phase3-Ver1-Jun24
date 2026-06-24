# Policy Builder - Sentence-Style Creation Flow

## Overview

A streamlined, single-page policy creation interface that uses a sentence-builder approach with live preview. This replaces the traditional multi-step wizard with a more intuitive, visual workflow.

## Components

### PolicyListPage.tsx
**Purpose**: Main policy management interface

**Features**:
- **Page Header**: "Policies" (h1, following typography rules)
- **Primary Actions**: 
  - "Create Policy" (primary blue button)
  - "Run Simulator" (secondary outline button)
- **Filter Row**:
  - Policy Type dropdown (All, Active, Inactive, Testing)
  - Search field with icon
- **Policy Table**:
  - Columns: Policy Name, Summary, Scope, Status, Last Triggered, Actions
  - Row height: 56px (h-14)
  - Hover state: #F8FAFC background
  - Summary text: #6B7280 (gray-600) with truncation
- **Empty State**:
  - Centered icon (FileText)
  - "No policies yet" heading
  - "Create Policy" CTA

**Typography**:
- h1: Default system (text-2xl, medium weight from globals.css)
- Body text: text-gray-900 for primary, text-gray-600 for secondary
- Summary column: text-[#6B7280] with truncation

---

### PolicyBuilder.tsx
**Purpose**: Single-page sentence-builder form

**Layout**:
```
┌─────────────────────────────────────┬──────────────────┐
│ Main Content (flex-1)               │ Sticky Sidebar   │
│                                     │ (w-96)           │
│ ┌─────────────────────────────────┐ │ ┌──────────────┐ │
│ │ ← Back to Policies              │ │ │ Policy       │ │
│ │ Create Policy (h1)              │ │ │ Summary      │ │
│ └─────────────────────────────────┘ │ │              │ │
│                                     │ │ Live preview │ │
│ Policy Name                         │ │ of natural   │ │
│ ───────────────                     │ │ language     │ │
│                                     │ │ policy       │ │
│ Who (Users icon)                    │ │              │ │
│ [Pill-style group selector]         │ │ Stats:       │ │
│                                     │ │ - Groups: 2  │ │
│ Device Requirements (Shield icon)   │ │ - Resources:3│ │
│ ☐ Device must be healthy            │ │ - Conditions │ │
│ ☐ Device must be encrypted          │ │              │ │
│ ☐ No active threats                 │ └──────────────┘ │
│ ☐ Device must be managed            │                  │
│                                     │                  │
│ Resources (Globe icon)              │                  │
│ [Tabs: Applications|Network|Services]│                 │
│ [Checkbox list with search]         │                  │
│                                     │                  │
│ Conditions (optional)               │                  │
│ [Chip-style toggles]                │                  │
│ - Location, Time of Day, Risk Score │                  │
│                                     │                  │
│ Action (Radio group)                │                  │
│ ○ Allow                             │                  │
│ ○ Allow with MFA                    │                  │
│ ○ Deny                              │                  │
│ ○ Quarantine                        │                  │
│ ○ Notify Admin                      │                  │
└─────────────────────────────────────┴──────────────────┘
┌─────────────────────────────────────────────────────────┐
│ Sticky Footer (fixed bottom, left-64)                  │
│                    [Cancel] [Save in Test] [Save]       │
└─────────────────────────────────────────────────────────┘
```

**Sections**:

1. **Header**
   - Back link with arrow icon
   - h1: "Create Policy" or "Edit Policy"

2. **Policy Name**
   - Input field with placeholder

3. **Who** (with Users icon)
   - Searchable group selector
   - Pill-style multi-select buttons
   - Selected groups shown as blue pills with X to remove
   - Confirmation box showing count

4. **Device Requirements** (with Shield icon)
   - Checkbox group for security requirements:
     - Device must be healthy
     - Device must be encrypted
     - No active threats
     - Device must be managed
   - Each checkbox has description text

5. **Resources** (with Globe icon)
   - Tabbed interface:
     - Applications
     - Network Segments
     - Services
   - Search field per tab
   - Checkbox list with hover states
   - Selected items shown as purple badges

6. **Conditions** (optional)
   - Chip-style toggles for:
     - Location (with MapPin icon)
     - Time of Day (with Clock icon)
     - Risk Score (with AlertTriangle icon)
   - Conditional fields appear when toggled:
     - Location: Dropdown for country selection
     - Time: Dropdown for time windows
     - Risk: Info message

7. **Action**
   - Radio button group with 5 options:
     - Allow
     - Allow with MFA
     - Deny
     - Quarantine
     - Notify Admin
   - Each option has description text
   - Hover states on containers

**Sticky Sidebar**:
- Width: 384px (w-96)
- Position: sticky, top-8
- Background: Gradient from blue-50 to purple-50
- Border: 2px blue-200
- Contains:
  - "Policy Summary" heading (h3)
  - White card with natural language summary
  - Stats section showing counts

**Natural Language Summary**:
```
"Users in {groups} on {device state} {action} {resources} when {conditions}."
```

Example:
```
"Users in Engineering, DevOps on a healthy and encrypted device can access 
Dev Portal, Staging API when from United States, during business hours 
(9AM-5PM)."
```

**Sticky Footer**:
- Fixed position at bottom
- Left offset: 256px (left-64) to account for sidebar
- White background with border and shadow
- Right-aligned buttons:
  - Cancel (outline)
  - Save in Test Mode (outline, blue accent)
  - Save (primary blue)

---

## Design System Compliance

### Colors
- Primary Blue: `#0066CC` (SonicPlatform brand)
- Hover Blue: `#0052A3`
- Text Primary: `text-gray-900`
- Text Secondary: `text-gray-600`
- Summary Text: `text-[#6B7280]` (explicit #6B7280)
- Table Hover: `#F8FAFC`

### Spacing
- Section spacing: 8px gaps (space-y-8)
- Subsection spacing: 4px gaps (space-y-4)
- Dividers: 12-24px vertical spacing (border-t with space-y-8)

### Cards & Borders
- Border radius: 8px (rounded-lg throughout)
- Consistent with existing dashboard cards
- Border color: border-gray-200

### Typography
- h1: Uses default from globals.css (text-2xl, medium weight)
- h2: Uses default from globals.css (text-xl, medium weight)
- h3: Uses default from globals.css (text-lg, medium weight)
- Body: Default 16px, normal weight
- Labels: Default 16px, medium weight
- NO manual text-* classes for size/weight (respects globals.css)

### Icons
- Lucide React icons throughout
- 16px (h-4 w-4) for small icons
- 20px (h-5 w-5) for section headers
- Consistent with existing components

### Interactive States
- Buttons: hover:border-[#0066CC] for outlines
- Pills: bg-[#0066CC] when selected, white when not
- Table rows: hover:bg-[#F8FAFC]
- Checkboxes: hover:bg-gray-50 on container
- Transitions: transition-colors, transition-all

---

## User Flow

### Creating a Policy

1. **Navigate to Policies**
   - Click "Policies" in left sidebar
   - Policies icon (FileText) becomes active

2. **View Policy List**
   - See existing policies in table
   - Filter by type or search
   - Or see empty state if no policies

3. **Create New Policy**
   - Click "Create Policy" button
   - Navigate to PolicyBuilder

4. **Build Policy (Sentence Style)**
   - Enter policy name
   - Select WHO: Click groups to add (Engineering, Finance, etc.)
   - Define DEVICE: Check requirements (healthy, encrypted, etc.)
   - Choose WHAT: Tab to Applications/Network/Services, select items
   - Add CONDITIONS: Toggle chips, fill in details (location, time)
   - Select ACTION: Choose radio option (Allow, Deny, etc.)
   - Watch live summary update in sidebar

5. **Review Summary**
   - Read natural language policy in sidebar
   - Verify stats (groups, resources, conditions)
   - Check that policy logic is correct

6. **Save**
   - Click "Save in Test Mode" to deploy without enforcement
   - Or click "Save" to activate immediately
   - Or "Cancel" to discard

7. **Return to List**
   - Policy appears in table
   - Shows active/testing status
   - Can edit by clicking name or edit action

---

## Integration

### File Structure
```
/components/
  PoliciesView.tsx          → Orchestration (list vs builder)
  PolicyListPage.tsx        → Policy table and filters
  PolicyBuilder.tsx         → Sentence-builder form
```

### State Management
```typescript
// PoliciesView.tsx
const [isBuilderOpen, setIsBuilderOpen] = useState(false);
const [editingPolicyId, setEditingPolicyId] = useState<string>();

// When creating
handleCreatePolicy() → setIsBuilderOpen(true)

// When editing
handleEditPolicy(id) → setEditingPolicyId(id), setIsBuilderOpen(true)

// When saving/canceling
handleBack() → setIsBuilderOpen(false)
```

### Navigation
- Sidebar already has "Policies" item
- App.tsx routes to PoliciesView when activePage === 'policies'
- PoliciesView conditionally renders PolicyListPage or PolicyBuilder

---

## Advantages of Sentence-Builder Approach

### vs. Multi-Step Wizard

✅ **Visual Clarity**: See entire policy at once, no hidden steps
✅ **Faster Iteration**: No clicking Next/Back between steps
✅ **Better Context**: All fields visible, understand relationships
✅ **Live Preview**: Immediate natural language feedback
✅ **Flexible Order**: Fill out sections in any order
✅ **Easier Editing**: Jump directly to any section

### vs. Traditional Form

✅ **Guided Experience**: Clear section headers with icons
✅ **Progressive Disclosure**: Conditions appear when toggled
✅ **Visual Hierarchy**: Clear spacing and dividers
✅ **Actionable Summary**: Live preview shows intent clearly

---

## Mock Data

### User Groups
- Engineering
- DevOps
- Finance
- HR
- Marketing
- Contractors
- Executives

### Applications
- Dev Portal
- Staging API
- Production Dashboard
- ERP System
- HR Portal

### Network Segments
- 10.0.1.0/24 (Dev Network)
- 10.0.2.0/24 (Staging)
- 192.168.1.0/24 (Office)

### Services
- SSH (Port 22)
- HTTPS (Port 443)
- RDP (Port 3389)
- Database (Port 5432)

### Locations
- United States
- United Kingdom
- Canada
- Germany

### Time Windows
- Business Hours (9AM-5PM)
- Extended Hours (7AM-7PM)
- Weekdays Only
- 24/7

---

## Future Enhancements

1. **Policy Templates**: Pre-filled common patterns
2. **Drag-to-Reorder**: Change section order
3. **Advanced Conditions**: AND/OR logic builder
4. **Policy Diff**: Compare before/after when editing
5. **Validation**: Real-time error checking
6. **Auto-Save**: Draft saving to prevent data loss
7. **Keyboard Shortcuts**: Power user features
8. **Policy Cloning**: Duplicate and modify existing policies
9. **Bulk Operations**: Multi-select in list view
10. **Export/Import**: JSON/YAML policy definitions

---

## Summary

The new Policy Builder provides a modern, intuitive interface for creating Zero Trust policies using a sentence-builder approach with live natural language preview. It maintains perfect visual consistency with the existing SonicPlatform design system while offering a superior UX compared to traditional wizard-based flows.

**Key Differentiators**:
- Single-page view (no wizard steps)
- Live natural language summary
- Pill-style multi-select for groups
- Tabbed resource picker
- Chip-style condition toggles
- Sticky summary sidebar
- Sticky footer with test mode option

All components follow SonicPlatform typography, spacing, color, and interaction patterns for a cohesive, professional experience.
