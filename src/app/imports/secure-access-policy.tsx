Create an enterprise security policy configuration screen similar to Cisco Secure Access.

Layout:
A clean enterprise dashboard interface with a left navigation sidebar and a main configuration panel.

Top Section:
- Page Title: "Secure Access Policy"
- Rule Name input field
- Rule Order dropdown

Section 1: Specify Access
Two selectable cards:
1. Allow – Allow specified traffic if conditions are met
2. Block – Block specified traffic

Section 2: From (Source)
A searchable multi-select input field.
Below it show selectable source types:
- Users
- Groups
- Endpoint Devices
- Security Group Tags
- Network Tunnel Groups
- Network Objects

Each option should show a count badge.

Section 3: Device Trust (NEW SECTION – Highlighted)
Add a card titled "Device Trust Condition".

Include:
- Trust Level dropdown:
   High
   Medium
   Low

Add helper text:
"Access will only be granted if the device meets the required trust level."

Add optional expandable area:
"Customize Trust Factors"

Inside show toggles like:
- Antivirus enabled
- OS up to date
- Firewall active
- Disk encryption enabled

Section 4: To (Destination)
Multi-select field for:
- Applications
- Private resources
- Network objects
- Network tunnels

Display selected items as removable tags.

Bottom Section:
Profiles / Security controls configuration.

Bottom right:
Back button
Next button

Design Style:
- Enterprise SaaS UI
- Clean spacing
- Subtle borders
- Light neutral background
- Blue highlight for selected states
- Modular card sections