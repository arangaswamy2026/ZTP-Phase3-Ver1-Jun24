Update the Trust Factor UI (Disk Encryption section) so administrators clearly understand that the displayed trust level represents the result if the check fails, not the current device trust state.

Header Section

Keep the Disk Encryption toggle to enable or disable the check.

Remove the trust level indicator (e.g., “LOW TRUST LEVEL”) from the header to avoid confusion about current device status.

Description

Keep the explanation text but make it clearer:

"Verifies that full disk encryption (e.g., BitLocker, FileVault) is enabled on the device to protect data at rest."

Below this add a clear label:

“If this check fails, set device trust level to:”

Trust Level Selector

Use a horizontal step slider with four options:

Always Deny

Low Trust Level

Medium Trust Level

No Effect

The selected option should clearly indicate the policy outcome, not the device's current trust level.

Outcome Explanation Panel

Next to the slider, show a dynamic explanation box.

Example when Low Trust Level is selected:

Low Trust Level

"If this trust factor check fails, the device trust level will be set to Low."

Visual Clarity Improvements

Add a small label above the slider:
“Failure Outcome”

Use a subtle divider or background section to visually separate:

Trust factor description

Failure outcome configuration

Interaction

Changing the slider updates the explanation text dynamically.

The toggle still enables/disables the entire trust factor rule.

Goal

Ensure admins clearly understand:

This control does not show the current trust level of a device.

It only defines what trust level should be applied if the check fails.