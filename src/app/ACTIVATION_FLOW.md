# ZTC Day 0 Activation Flow Documentation

## Overview

The ZTC Day 0 Activation Flow is a comprehensive, guided onboarding experience designed to help new users activate their Zero Trust Connector service. The flow is intuitive, visually engaging, and follows modern SaaS design principles.

## Flow Steps

### 1. Landing Page (`ActivationLanding.tsx`)
- **Purpose**: Welcome users and introduce the product
- **Features**:
  - Hero section with brand icon
  - Product overview and benefits
  - Feature cards highlighting key capabilities
  - Primary CTA: "Activate Service"
  - Trust indicator (encryption badge)
- **Design**: Gradient background, spacious layout, engaging visuals

### 2. Activation Key Entry (`ActivationKeyEntry.tsx`)
- **Purpose**: Capture and validate activation key
- **Features**:
  - Auto-formatted input (XXXX-XXXX-XXXX-XXXX)
  - Real-time format validation
  - Loading state during verification
  - Success/error messaging
  - Help text for users who need assistance
- **UX**: Single-column centered form, clear validation states

### 3. License Details (`ActivationLicenseDetails.tsx`)
- **Purpose**: Display license information and SKU details
- **Features**:
  - SKU name and description card
  - License count and expiration metrics
  - Feature list with checkmarks
  - Activation key reference
- **Design**: Card-based layout with visual hierarchy

### 4. Tenant Setup (`ActivationTenantSetup.tsx`)
- **Purpose**: Select existing tenant or create new one
- **Features**:
  - Toggle between "Select" and "Create" modes
  - Radio group for selecting available tenants
  - Form for creating new tenant with name and description
  - Preview of new tenant configuration
  - Disabled state for already-activated tenants
- **UX**: Clear distinction between available and activated tenants

### 5. IDP Selection (`ActivationIDPSelection.tsx`)
- **Purpose**: Choose authentication provider(s)
- **Features**:
  - Grid of popular IDPs (Azure AD, Okta, Google Workspace, etc.)
  - Multi-select with checkboxes
  - Tooltips showing compatibility information
  - "Popular" badges for common providers
  - Selection summary
  - Option to skip and configure later
- **Design**: Card-based grid, clear visual feedback for selections

### 6. Confirmation Review (`ActivationConfirmation.tsx`)
- **Purpose**: Review all configuration before activation
- **Features**:
  - Comprehensive summary of all selections
  - License information card
  - Tenant assignment details
  - Selected authentication methods
  - Important notice about permanent activation
  - Loading state during activation
- **UX**: Read-only summary with clear section organization

### 7. Success Screen (`ActivationSuccess.tsx`)
- **Purpose**: Celebrate completion and guide next steps
- **Features**:
  - Animated success icon
  - Congratulations message
  - Recommended next steps cards
  - "Go to Dashboard" primary CTA
  - Help resources section
- **Design**: Gradient background, celebration tone, clear next actions

## Design System

### Colors
- **Primary Blue**: `#0066CC` (SonicWall brand)
- **Primary Blue Hover**: `#0052A3`
- **Success Green**: `#10B981`
- **Warning Amber**: `#F59E0B`
- **Error Red**: Standard destructive colors

### Typography
- Uses default typography from `globals.css`
- No custom font sizes unless specifically needed
- Clear hierarchy with headings and body text

### Components
- **Cards**: 8px border radius, subtle shadows
- **Buttons**: Rounded corners, clear hover states
- **Inputs**: Large touch targets (h-11, h-14)
- **Badges**: Small pills for status indicators

### Spacing
- Consistent 8px grid system
- Generous whitespace for readability
- Centered layouts for focused flows

## Progress Indicator

The `ActivationStepper` component shows:
- Current step number and name
- Completed steps with checkmarks
- Progress line showing completion percentage
- 5 main steps (excludes landing and success)

## Accessibility

- High contrast text and backgrounds
- Focus indicators on all interactive elements
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader friendly messaging
- Clear error states with descriptions

## Integration

### In App.tsx
```tsx
import { ActivationFlow } from './components/activation/ActivationFlow';

// State management
const [showActivationFlow, setShowActivationFlow] = useState(false);

// Show activation flow
if (showActivationFlow) {
  return <ActivationFlow onComplete={handleActivationComplete} />;
}
```

### Triggering Activation
The flow can be triggered:
1. Automatically on first login (check activation status)
2. Manually via "View Activation Flow" button (demo purposes)
3. From settings or admin panel

## Mock Data

The flow currently uses mock data for:
- License information (SKU, count, expiration)
- Existing tenants list
- IDP options
- Validation responses

In production, these would be replaced with actual API calls.

## Key Files

```
/components/activation/
├── ActivationFlow.tsx          # Main container & step orchestration
├── ActivationStepper.tsx       # Progress indicator
├── ActivationLanding.tsx       # Step 1: Welcome
├── ActivationKeyEntry.tsx      # Step 2: Key validation
├── ActivationLicenseDetails.tsx # Step 3: License info
├── ActivationTenantSetup.tsx   # Step 4: Tenant selection
├── ActivationIDPSelection.tsx  # Step 5: Authentication
├── ActivationConfirmation.tsx  # Step 6: Review
└── ActivationSuccess.tsx       # Step 7: Completion
```

## Future Enhancements

1. **Actual API Integration**: Replace mock data with real backend calls
2. **Persistence**: Save progress in case of interruption
3. **Analytics**: Track where users drop off or get stuck
4. **IDP Configuration**: Add detailed IDP setup wizards
5. **Multi-language Support**: Internationalization
6. **Email Verification**: Optional email confirmation step
7. **Admin Approval**: Workflow for enterprise activations
8. **Bulk Activation**: Support for multiple licenses at once

## Testing Checklist

- [ ] All form validations work correctly
- [ ] Navigation between steps is smooth
- [ ] Back buttons preserve state
- [ ] Success states animate properly
- [ ] Error messages are clear and helpful
- [ ] Mobile responsive design
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Loading states show appropriately
- [ ] All CTAs are functional
