Update the existing ZTP Design file and add a new top-level navigation section called Profiles.

1️⃣ Profiles Section (Left Navigation)

Add a new primary nav item:

Profiles

When clicked, it should open a landing page with profile categories displayed as either:

Tabs at the top
OR

Left-side sub-navigation

Add the following profile categories:

Posture Profiles

Content Filtering Profiles

DNS Filtering Profiles

Application Control Profiles

IPS Profiles (optional / future-ready)

Maintain the existing visual style and component system.

2️⃣ Posture Profiles – Table View

Default selected category: Posture Profiles

Create a table layout with:

Columns:

Profile Name

Trust Level Logic (High / Medium / Low summary)

Enabled Checks

Status (Active / Disabled)

Last Modified

Actions (Edit / Delete)

Top right:

Primary CTA button: Create Profile

3️⃣ Create Profile Flow (Posture Profile)

When user clicks “Create Profile”, open a right-side drawer or full-page form (consistent with existing design patterns).

Form structure:

Section 1: Basic Info

Profile Name (input field)

Description (optional text area)

Status Toggle (Active / Disabled)

Section 2: Trust Factors / Device Checks

Add configurable toggles or checkboxes for:

Operating System compliance

Antivirus enabled

Firewall enabled

Disk encryption enabled

Patch level up to date

Each enabled check can optionally expand for configuration (e.g., minimum OS version).

Section 3: Trust Score Logic

Add a simple rule builder:

If all checks pass → High Trust

If some checks fail → Medium Trust

If critical checks fail → Low Trust

Allow admin to:

Define threshold logic

Map result to High / Medium / Low trust

Keep UI clean and structured.

Section 4: Save Actions

Bottom sticky action bar:

Cancel

Save Profile (Primary CTA)

Design Guidelines:

Keep modular and scalable (future profile types should reuse same structure).

Maintain spacing, typography, and component style from existing ZTP file.

Ensure this profile can later be selectable inside Access Policy rule creation.