Update the **Secure Access Policy flow** in this file to follow the new interaction logic below. Keep the current design language, spacing, typography, and component styles consistent with the existing UI.

---

## 1. Policy Creation Flow Structure

The policy creation screen should follow this order:

1. Rule Name
2. Access Type (Allow / Block)
3. From (Source)
4. Destination
5. Device Trust
6. Custom Trust Factors
7. Security Profiles

Use a **vertical step-based layout** where each section is clearly separated with headings.

---

## 2. Rule Name

At the top add a field:

Rule Name

* Single line input field
* Placeholder: “Enter rule name”

Example:
“Engineers Access Internal Dashboard”

---

## 3. Access Type

Below Rule Name add a **segmented control** with two options:

ALLOW | BLOCK

Allow should be selected by default.

Include a small helper text:

“Choose whether the selected source can access the destination.”

---

## 4. FROM (Source Selection)

Create a **tab-style selector** with three options:

Users | Groups | Roles

### Users

If Users is selected:

* Show an email input field
* Users can add **multiple emails**
* Emails should convert into **chips/tags**
* Include “Add another user” interaction

### Groups

If Groups is selected:

* Show a selectable list of groups
* Example groups:

  * Designers
  * Engineers
  * Marketing
  * Finance

Use **checkbox list UI**.

### Roles

If Roles is selected:

* Show list of existing roles
* Example roles:

  * Admin
  * Developer
  * Viewer
  * Security Analyst

Add an option at the bottom:

* Create New Role

---

## 5. Role Creation Flow

When the user clicks **Create New Role**, open a **modal popup**.

Modal fields:

* Role Name
* Description
* Permissions / Scope

Keep the modal simple and aligned with the design system.

Modal buttons:
Cancel | Create Role

---

## 6. Destination Section

Rename this section **Destination**.

This represents the **resources being accessed**.

Add a selector with options such as:

* Applications
* Private Resources
* Private IP

When selected, show a list of example resources.

Example resources:

* Internal Dashboard
* CRM Tool
* Database Server
* Analytics Platform

Use **searchable dropdown or selectable list**.

---

## 7. Device Trust UI

Redesign the device trust section as **toggleable cards instead of a list**.

Each card should include:

* Trust Factor Name
* Short description
* Trust Level indicator
* Toggle ON/OFF

Example cards:

Application Check
Ensures required apps are installed

Disk Encryption
Verifies device disk encryption is enabled

Browser Version Check
Ensures browser version is up to date

Cards should be visually grouped and easy to scan.

---

## 8. Custom Trust Factors Flow

Add a section called **Trust Profiles**.

User flow:

Create Trust Profile → Add Trust Factors → Apply

Fields for Trust Profile:

* Profile Name
* Description
* Apply to (Users / Groups / Devices)

After clicking Continue, allow adding trust factors such as:

* Chrome browser version check
* Disk encryption enabled
* Application update available

Add logic text:

“If trust factors are not satisfied, the trust level will be set to LOW.”

---

## 9. Security Profiles

At the bottom add a section called **Security Profiles**.

This should contain **toggle switches** for additional security checks.

Example toggles:

Malware Protection
Data Loss Prevention
Threat Detection
Network Inspection

Each toggle should include a short description.

---

## 10. UI Constraints

Keep in mind the product supports **small organizations (~20 users)**.

So:

* Avoid long lists
* Keep UI compact
* Show limited sample data (10–15 max items)

---

Maintain the **existing design style from the file** but update the layout and interactions to reflect this new policy creation workflow.
