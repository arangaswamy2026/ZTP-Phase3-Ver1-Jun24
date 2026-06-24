Redesign the Destination section of the access policy screen to simplify resource selection.

Structure Changes

Remove the "Applications" option from the destination type dropdown.

Remove the dropdown completely and instead introduce a toggle selector at the top with two options:

IP Ranges / IPs

FQDNs

Interaction

When the user selects either IP Ranges/IPs or FQDNs, show the corresponding input fields below the toggle.

The input field should allow users to enter comma-separated values.

Example placeholder:
"Comma separated ex: 192.168.0.0/24, 10.0.4.5"

Additional Fields

Under the input field, display:

Protocols dropdown

Ports input field

"Any" checkbox for ports

Multi-row Functionality

Add a "+ Add Another Row" button below the section.

Clicking this button should add another identical destination row, allowing users to configure multiple destination rules.

Layout

Each row should contain:

Toggle: IP Ranges/IPs | FQDNs

Input field for the selected type

Protocols dropdown

Ports field + Any checkbox

UX Behavior

Rows should stack vertically.

Each row should function independently.

Maintain the existing design system styles, spacing, and form components.