Make the following structural changes:

1️⃣ Create a separate top-level section in the left navigation called Profiles (independent from Policies).

Under Profiles, add:

Posture Profiles (Trust / Trust Score)

Content Filtering Profiles

DNS Filtering Profiles

Application Control Profiles

IPS Profiles (keep optional for now)

Each profile category should:

Open into a table view

Have columns like: Profile Name, Category, Enabled Controls, Status, Actions

Support Create / Edit flow

Create/Edit screen should allow naming the profile and enabling relevant security controls

2️⃣ Update the Policies section:

Rename or restructure into Access Policies.

Inside Access Policies:

Allow creation of 3 rule types:

Zone-Based Policy

Internet Access Policy

Private Access Policy

When user clicks “Add Rule”:

First step should ask to select policy type

Then dynamically show relevant fields

Rule creation flow should include:

Rule Name

Rule Order (reorderable / numeric position)

Action (Allow / Deny)

Source (User, User Group, Zone, IP/Subnet)

Destination (Zone, App, Private Resource, IP)

Apply Profiles section (multi-select from previously created profiles)

Profiles shown in rule creation should dynamically filter based on policy type.

3️⃣ Add a separate section called Objects in navigation.

Under Objects:

Zones

User Groups

Network Objects (IP/Subnet)

Applications

These should be reusable and selectable inside rule creation.

4️⃣ Do NOT nest profiles inside policies anymore.
Profiles must be reusable and created independently.

Design goal:

Keep architecture modular

Make Profiles reusable

Make Policies act as rule engine

Keep UI clean and scalable

Maintain existing visual style and layout system