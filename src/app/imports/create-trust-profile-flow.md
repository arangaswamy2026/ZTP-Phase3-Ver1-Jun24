Create a **new screen flow for “Create Trust Profile”** that opens when the user clicks the **Create Trust Profile button** on the Secure Access Policy screen.

Maintain the same design system, spacing, typography, and component style used in the existing Secure Access Policy UI.

The flow should be a **2-step process** with a step indicator at the top.

---

## Step Indicator

At the top show:

Step 1: Profile Details
Step 2: Trust Factors

Highlight the current step.

---

# STEP 1 — Trust Profile Details

Add the following fields in a clean vertical form layout.

### 1. Trust Profile Name

Text input field
Placeholder: “Enter trust profile name”

---

### 2. Description

Multi-line text field
Placeholder: “Add description for this trust profile”

---

### 3. Enter User Groups

Allow the user to add multiple groups.

UI behavior:

* Input field with **+ button**
* When user clicks **+**, the group is added as a chip/tag
* Multiple groups can be added

Example chips:
Designers
Engineers
Finance

---

### 4. Enter Device Serial Numbers

Input field where users can type serial numbers.

Behavior:

* Press Enter to add serial number
* Each serial number becomes a chip/tag

Example:
SN-2934KJ
SN-8843AD

---

### 5. Select Platforms

Allow selecting one or more platforms.

Display options as **checkbox chips or cards**:

Windows
Linux
MacOS
Android
iOS

Include a **Select All checkbox**.

---

### 6. Include Only MDM Managed Devices

Add a **Yes / No toggle**.

Label:
Include only MDM managed devices

Default: No

---

### 7. Device Ownership

Allow selecting one or more ownership types.

Options:

Corporate Dedicated
Corporate Shared
Employee Owned
Contractor Device

Use **checkbox list or selectable chips**.

Include a **Select All checkbox**.

---

### Continue Button

At the bottom add a primary button:

Continue → Step 2

---

# STEP 2 — Trust Factors

Show a section titled **Trust Factors**.

Add a primary button:

* Add Trust Factor

---

## Add Trust Factor Modal

When the user clicks **Add Trust Factor**, open a modal.

Modal contents:

### Search Bar

Search trust factors

Placeholder:
“Search trust factors”

---

### Trust Factor List

Example options:

Application Check
Auto Update Enabled
Chrome Browser Version
Disk Encryption
Antivirus Running

Display them in a selectable list.

---

### Interaction

When the user clicks a trust factor:

* Modal closes
* Trust factor appears in the Trust Factors list on the page

---

## Added Trust Factor Card

Each added trust factor should appear as a **card row** containing:

Trust Factor Name

Trust Level selector:

Low
Medium
High
Always Deny

Use a **dropdown or segmented control**.

Also include a **remove icon**.

---

## Layout Notes

* Use the same visual style as the Secure Access Policy screen
* Maintain spacing consistency
* Trust factors should appear as stacked cards
* Keep the interface simple since the product supports small teams (~20 users)

---

The entire flow should feel like a **guided setup experience for creating a trust profile and adding trust factors**.
