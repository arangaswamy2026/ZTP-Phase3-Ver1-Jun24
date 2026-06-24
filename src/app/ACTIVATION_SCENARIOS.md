# Activation Flow & Lifecycle Management

## Overview
This document describes the comprehensive activation flow and lifecycle management system for SonicWall Zero Trust Connector (ZTC).

## Activation Scenarios

### 1. Three Primary Scenarios
The activation flow now supports three distinct scenarios:

#### a) **Customer has Unified Management (UM) Access** *(Most Common)*
- Customer already has SonicPlatform access
- Adding ZTC to existing tenant
- Uses existing authentication
- Quick activation process

#### b) **New to SonicPlatform**
- First-time SonicPlatform setup
- Create new organization
- Register admin account
- Full setup wizard

#### c) **UM + Zero Touch Provisioning (ZTP)**
- Adding new ZTC subscription
- Existing setup with automated device provisioning
- Existing tenant integration

## Activation Workflow

### Step 1: Scenario Selection
- New landing screen (`ActivationScenarioSelection.tsx`)
- Three clearly differentiated options
- Visual cards with feature lists
- "Most Common" badge on UM Access option

### Step 2: Tenant Setup (MANDATORY)
Enhanced `ActivationTenantSetup.tsx`:
- **First step in activation** - cannot proceed without tenant association
- Pre-populates from scope selector if already on a tenant
- User can still change the selection
- **Grayed-out tenants** that already have ZTC service
  - Displayed with reduced opacity
  - Disabled radio button
  - "ZTC Active" badge
  - Tooltip explaining they can't be selected
  - Tooltip suggests using UM+ZTP option for additional subscriptions
- Shows activation date for already-activated tenants
- Option to create new tenant if needed
- Special handling when no available tenants exist

### Step 3: Activation Key Entry
Enhanced `ActivationKeyEntry.tsx` with multi-key support:

#### Auto-Detection Features:
- Backend auto-associates keys with buyer's email
- Displays all available keys for the user's email
- Shows key details:
  - License type (Enterprise, Professional, etc.)
  - User count
  - Purchase date
  - Auto-detected badge
- First key auto-selected by default

#### Manual Entry:
- Expandable "Have a different key?" section
- Switch to manual entry mode
- Auto-formatting (XXXX-XXXX-XXXX-XXXX)
- Validation and error handling

#### Multi-Purchase Scenario:
- Lists all purchased keys
- Clear mapping to tenants
- Visual selection with radio buttons
- Key metadata display

### Step 4: License Details Confirmation
- Review license type, user count, expiry
- Auto-populated from activation key

### Step 5: IDP/Authentication Configuration
Enhanced `ActivationIDPSelection.tsx`:
- **Full configuration during activation** (not post-activation)
- Two modes:
  - MySonicWall Login (recommended)
  - External Identity Providers

#### External IDP Configuration:
- Configure SAML 2.0, OIDC, or OAuth 2.0
- Protocol-specific fields:
  - **SAML**: Entity ID, SSO URL, X.509 Certificate
  - **OIDC/OAuth**: Issuer URL, Client ID/Secret, Endpoints
- Templates for popular providers:
  - Microsoft Entra ID
  - Okta
  - Google Workspace
  - OneLogin
  - PingIdentity
  - Custom SAML
- Edit/delete configured IDPs
- Visual confirmation of configured providers

### Step 6: Review & Confirm
- Summary of all selections
- Final confirmation before activation

### Step 7: Success & Post-Activation Choice
New `ActivationPostSuccess.tsx` component:

#### Two Paths After Activation:

**Option 1: Continue to Day 0 Setup** *(Recommended)*
- Configure policies immediately
- Deploy connectors
- Set up monitoring
- Switches scope selector to new tenant
- Complete onboarding in one session

**Option 2: Return to Dashboard**
- Save activation state
- Exit and return later
- Tenant shown with "Pending Onboarding" status
- Can resume setup anytime
- Scope selector remains as-is

## Lifecycle Stages

The system tracks six distinct lifecycle stages:

### 1. No Activation
- Initial state
- Shows activation flow immediately

### 2. Key Purchased
- Activation key purchased but not registered
- **Orange banner** on dashboard
- Shows count of pending keys
- "Activate Now" CTA

### 3. Activated
- Key registered to tenant
- No Day 0 setup yet
- (Internal state, transitions quickly)

### 4. Pending Onboarding
- Activation complete but Day 0 setup not done
- **Blue banner** on dashboard
- "Continue Setup" CTA
- Tenant badge shows "Pending Onboarding"

### 5. Awaiting Device
- Day 0 configuration complete
- Waiting for ZTC device to come online
- **Purple banner** on dashboard
- "Waiting for Device" badge
- Policies configured, ready for monitoring

### 6. Operational
- ZTC live and operational
- Day 1 monitoring & operations
- Full dashboard functionality
- No lifecycle banners

## Dashboard Considerations

### Partner Admin Dashboard (MVP Priority)

#### Key Visibility Features:
1. **Pending Activation Keys**
   - Count of unpurchased/unregistered keys
   - Quick activation access
   - Email-based key association

2. **Tenant Onboarding Status**
   - Visual lifecycle stage indicators
   - Status badges
   - Progress tracking
   - Resume onboarding CTAs

3. **Active Tenants**
   - Service health monitoring
   - Connector status
   - Policy compliance
   - Activity metrics

4. **Lifecycle Banners**
   - Context-aware alerts
   - Stage-specific CTAs
   - Clear next steps
   - Visual hierarchy (orange > blue > purple > green)

### End-Customer View (Future)
- Limited MVP implementation
- Partner-first focus
- Future: Separate dashboards for partner vs. tenant admins

## Scope Selector Behavior

### During Activation:
1. If scope selector is on a tenant:
   - Pre-populate that tenant in tenant selection
   - Show blue info banner indicating pre-fill
   - Allow user to change selection
   
2. After activation (continue to Day 0):
   - Automatically switch scope to newly activated tenant
   - Enable immediate policy/connector configuration
   
3. After activation (exit to dashboard):
   - Leave scope selector as-is
   - Show pending onboarding status in dashboard
   - Tenant appears in list with appropriate badge

## Technical Implementation

### New Components:
- `ActivationScenarioSelection.tsx` - Scenario picker
- `ActivationPostSuccess.tsx` - Post-activation choice screen

### Enhanced Components:
- `ActivationTenantSetup.tsx` - Grayed-out tenants, pre-population
- `ActivationKeyEntry.tsx` - Auto-detection, multi-key support
- `ActivationIDPSelection.tsx` - Full IDP configuration
- `ActivationFlow.tsx` - Scenario routing, lifecycle integration
- `App.tsx` - Lifecycle stage management, banners

### State Management:
- `lifecycleStage` enum tracking current stage
- `activationData` object preserving flow state
- `preselectedTenantId` from scope selector
- Post-activation routing logic

### User Experience Improvements:
- Clear visual hierarchy
- Progressive disclosure
- Context-aware help text
- Auto-detection reduces manual entry
- Flexible flow (can exit and resume)
- Clear status indicators
- Actionable CTAs

## Demo Controls

For demonstration purposes, the dashboard includes:
- "Demo: Key Purchased" button - simulates purchased key state
- "Start Activation" button - opens activation flow
- Lifecycle stage can be toggled for testing

## Future Enhancements

1. **Multi-tenant bulk activation**
   - Activate multiple keys at once
   - Map keys to different tenants in single flow

2. **Activation history**
   - Track all activations
   - Audit trail
   - Re-activation support

3. **Device auto-discovery**
   - ZTP integration
   - Auto-configure from device serial
   - Streamlined provisioning

4. **Email notifications**
   - Activation confirmations
   - Setup reminders
   - Device online alerts

5. **Progress persistence**
   - Save partial progress
   - Resume from any step
   - Draft configurations
