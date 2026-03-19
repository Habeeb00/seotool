✈️ Flightpoints Design Language & UI System
1. 🧠 Core Design Philosophy
🔹 1.1 Speed + Clarity First

Everything communicates “fast, efficient, no friction”

Minimal cognitive load → user can search flights instantly

No clutter, no unnecessary elements

🔹 1.2 Soft SaaS Aesthetic

Not harsh like dev tools

Not playful like consumer apps

Balanced: professional + smooth + slightly friendly

🔹 1.3 “Floating UI” Feel

Cards, inputs, and sections feel like they are:

Elevated

Separated from background

Softly layered

2. 🎨 Color System
🔵 Primary Gradient (Hero Section)

Blue gradient (main identity)

background: linear-gradient(135deg, #3B82F6, #2563EB);

Used for:

Hero background

CTA emphasis

Active states

⚪ Neutral Colors
Type	Color	Usage
Background	#F8FAFC	Page background
Card	#FFFFFF	Containers
Border	#E5E7EB	Inputs, cards
Text Primary	#111827	Headings
Text Secondary	#6B7280	Subtext
🟠 Accent (Urgency / Offers)

Bright orange bar at top

#F97316

Used for:

Limited-time offer banner

Countdown urgency

🔵 Interactive Blue
#2563EB

Used for:

Buttons

Links

Active tabs

3. ✍️ Typography System
Font Style

Clean sans-serif (likely Inter / Poppins / SF Pro style)

Hierarchy
🟢 Hero Title
font-size: 48px–64px;
font-weight: 700–800;
line-height: 1.1;
🟢 Section Titles
font-size: 28px–36px;
font-weight: 600–700;
🟢 Body Text
font-size: 14px–16px;
color: #6B7280;
🟢 Labels
font-size: 12px–14px;
color: #9CA3AF;
4. 🧱 Layout System
🔹 4.1 Spacing Philosophy

Generous whitespace

Consistent padding

padding: 16px / 24px / 32px
gap: 12px / 16px / 24px
🔹 4.2 Grid Behavior

Centered layout

Max width container (~1200px)

🔹 4.3 Section Structure

Each section follows:

[Badge / Label]
[Big Heading]
[Subtext]
[Component / Cards]
5. 🧩 Components
🔘 5.1 Buttons
Primary Button
background: #2563EB;
color: white;
border-radius: 12px;
padding: 12px 20px;
font-weight: 600;
Secondary Button
background: #F3F4F6;
color: #111827;
Pill Buttons (Toggle)

Used for Flights / Programs

border-radius: 999px;
padding: 6px;
background: #E5E7EB;

Active:

background: white;
box-shadow: 0 2px 8px rgba(0,0,0,0.1);
🧾 5.2 Cards

Used in:

Recent searches

Results

background: white;
border-radius: 16px;
padding: 16px;
border: 1px solid #E5E7EB;

Hover:

box-shadow: 0 10px 25px rgba(0,0,0,0.08);
🧠 5.3 Input Fields
background: #F9FAFB;
border-radius: 12px;
padding: 12px;
border: 1px solid #E5E7EB;

Soft, not harsh borders

Slightly filled background (not pure white)

🔁 5.4 Toggle Switch (Live Search)

Rounded pill

Grey (off) → Blue/Red indicator (on)

🏷️ 5.5 Badges

Examples:

“25+ award programs”

“Recent Searches”

background: #E0F2FE;
color: #2563EB;
padding: 6px 12px;
border-radius: 999px;
font-size: 12px;
6. 🌟 Hero Section Pattern
Structure:
[Top Offer Banner]
[Navbar]

[Badge]
[Big Headline]
[Subtext]

[Toggle Tabs]

[Search Card]
Key Characteristics:

Strong visual focus

Everything centered

CTA is embedded in workflow (Search bar)

7. 🧭 Navigation Design
Style:

Minimal

Inline links

No heavy borders

Right Side:

“Get Pro” → high contrast CTA

Profile avatar → circular

8. 🧊 Visual Effects
Shadows

Soft, subtle:

box-shadow: 0 4px 20px rgba(0,0,0,0.05);
Border Radius System
Element	Radius
Buttons	12px
Cards	16px
Pills	999px
9. 🔄 Interaction Patterns
Hover

Slight elevation

Shadow increase

Active

Color becomes more saturated

Transitions
transition: all 0.2s ease;
10. 🧠 UX Patterns (VERY IMPORTANT)
🔥 10.1 Zero Friction Input

Minimal fields

Autofilled values (NYC → DXB)

No overwhelming filters upfront

🔥 10.2 Progressive Disclosure

Advanced filters hidden

Clean default experience

🔥 10.3 Immediate Feedback

“11 flights found”

Real-time feeling

🔥 10.4 Memory of User

“Recent Searches” section

Reinforces usefulness

11. 🧪 What Makes This Design Good
✅ Fast to scan
✅ Clear hierarchy
✅ Strong CTA placement
✅ Soft + modern UI
✅ SaaS credibility
12. 🛠️ If You Want to Rebuild This
Stack Suggestion (based on your style)

TailwindCSS

React / Next.js

shadcn/ui (for base components)

Tailwind Example (Search Card)
<div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
  {/* Inputs */}
</div>
13. 💡 Design Takeaways (Important for YOU)

Since you’re building products:

👉 This UI works because:

It doesn’t try to impress → it tries to convert

It removes friction → not adds features

It focuses on one job: search flights fast