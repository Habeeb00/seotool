# Flightpoints SEO Tool – Product Doc

## Tool Name: **Did I Overpay for This Flight?**

*(aka Redemption Checker / Smart Booking Optimizer)*

---

# 1. Product Context

## What is Flightpoints?

Flightpoints is a real-time award flight search platform that:

* Searches across 25+ airline loyalty programs
* Shows real-time award availability
* Helps users find better ways to book flights using points
* Provides alerts and advanced filters

## Problem Flightpoints Solves

Users struggle with:

* Finding award availability
* Comparing multiple airline programs
* Understanding if a redemption is “good” or “bad”
* Spending hours manually searching

---

# 2. Purpose of This Tool

This tool is **NOT the main product**.

It is an **SEO entry point** designed to:

1. Capture high-intent search traffic
2. Provide quick decision insight
3. Create doubt/urgency
4. Redirect users into Flightpoints (Pro)

---

# 3. Core User Problem

User has already found a flight and is thinking:

* “Is this a good deal?”
* “Did I overpay?”
* “Is there a better way to book this?”

This is a **high-conversion moment (decision stage)**.

---

# 4. Core Concept

Input → Compare → Judge → Tease → Redirect

---

# 5. User Flow

## Step 1: Input

User enters:

* From (Airport)
* To (Airport)
* Date (optional for MVP)
* Cabin class (Economy / Business / First)
* Points used

---

## Step 2: System Analysis

System compares:

* User’s points
  VS
* Average points for that route
* Lowest known points (best case)

---

## Step 3: Output (Verdict)

Example:

❌ You’re overpaying

* You paid: 60,000 points
* Average: 45,000 points
* Overpaying by: ~15,000 points

---

## Step 4: Insight Layer

Dynamic messaging:

* “Most travelers book this route for ~45k points”
* “Better deals exist below 40k”
* “You’re paying 30% more than average”

---

## Step 5: Locked Alternatives (Conversion Trigger)

Show blurred/locked options:

* 42k pts (via ???)
* 38k pts (via ???)
* Better timing option
* Nearby airport option

Text:

“🔥 We found 4 better ways to book this flight”

---

## Step 6: CTA (Redirect)

Button:

“See better deals →”

Redirect to Flightpoints search with:

* Pre-filled route
* Sorted by best value

---

# 6. Core Logic

## Benchmark Data Structure (MVP)

Use static or semi-dynamic data:

```json
{
  "NYC-LON-economy": {
    "avg": 45000,
    "low": 38000,
    "high": 70000
  }
}
```

---

## Comparison Logic

```
difference = user_points - avg_points
percentage = difference / avg_points
```

---

## Verdict Rules

```
if user_points <= low:
  Excellent (🔥)
elif user_points <= avg:
  Good (👍)
elif user_points <= avg * 1.2:
  Slightly Expensive (⚖️)
else:
  Overpaying (❌)
```

---

## Insight Generation

Examples:

* “You’re paying 15k more than average”
* “This route is usually booked for 45k–50k points”
* “Better deals are available”

---

# 7. Alternatives Engine

## MVP Version

Return mock/approx alternatives:

```json
[
  { "points": 42000, "label": "Better option" },
  { "points": 38000, "label": "Best value" }
]
```

Displayed but partially hidden.

---

## Advanced Version

Use Flightpoints API:

* Query same route
* Sort by lowest points
* Extract top 3–5 results

---

# 8. Frontend Structure

## Section 1: Input

Simple form

CTA:
“Check if I overpaid →”

---

## Section 2: Verdict Card

* Status (Overpaying / Good / Excellent)
* Points comparison
* Visual emphasis (red / green)

---

## Section 3: Insight

Short, psychological triggers:

* “Most travelers pay less”
* “Better deals exist”

---

## Section 4: Locked Results

Blurred cards with:

* Lower points
* Hidden airline/program

---

## Section 5: CTA

Primary conversion:

“See better deals →”

---

# 9. Integration with Flightpoints

## Redirect URL

```
/search?from=NYC&to=LON&sort=best_value
```

Include:

* Route
* Cabin
* Date (if available)

---

## Goal

Move user from:
Insight → Action → Flightpoints search

---

# 10. SEO Strategy

## Page Types

### Query-based

* /did-i-overpay-miles
* /is-this-a-good-redemption
* /average-miles-for-flight

---

### Route-based

* /nyc-to-london-miles-worth-it
* /dubai-to-india-points-value

---

### Intent-based

* /cheapest-way-to-book-flight-with-points
* /how-to-save-miles

---

## Each Page Includes

* Pre-filled example
* Static explanation
* Embedded tool
* Partial results + locked section

---

# 11. Copy Strategy

## Hooks

* “Don’t waste your miles”
* “Most people overpay by 20–30%”
* “Check before you book”

---

## Conversion Lines

* “We found better options”
* “You can save 15k points”
* “Unlock smarter bookings”

---

# 12. MVP Build Plan

## Day 1–2

* Input form
* Static benchmark data

## Day 3

* Comparison + verdict logic

## Day 4

* Locked UI section

## Day 5

* Redirect to Flightpoints

---

# 13. What NOT to Build (Yet)

* Perfect pricing accuracy
* Complex ML models
* Full airline integrations

Focus on:

* Speed
* Clarity
* Conversion

---

# 14. Success Metrics

Track:

* Click-through rate → Flightpoints
* Conversion to Pro
* Time on page
* % users clicking “See better deals”

---

# 15. Core Insight

This tool is not about accuracy.

It is about:

**Creating doubt → Providing clarity → Driving action**

---

# End of Document
