# 05 - Estimate Calculator Spec

## Purpose

Instant ballpark ranges on /pricing. It exists to capture high-intent "cost" searches and convert them into estimate requests. It is a marketing widget, not a quoting tool.

## Guardrails (absolute)

- The ranges below are wide public-market bands for the Chicago area. They are NOT derived from any internal pricing engine and must never be. No formulas beyond band lookup and one condition multiplier.
- All numbers live in `src/config/calculator.json` and nowhere else. Status: PLACEHOLDER until Mohmed explicitly approves or edits each band. Ship the page, but the calculator renders a "coming soon" card if `approved: false`.
- Ranges stay deliberately wide and conservative so the tool never undercuts a real estimate.
- Pure client-side React island. Zero network calls to compute. The only request it ever makes is the optional lead submission to /api/lead.

## UX flow

1. Project type: Interior, Exterior, Cabinets (three big cards).
2. Size: Interior → rooms count (1, 2 to 3, 4 to 5, whole home) or approximate sq ft band. Exterior → stories + size band. Cabinets → approximate door and drawer front count band.
3. Condition: Good shape, Some prep needed, Heavy prep (short plain-English descriptions under each).
4. Result: range shown immediately, no gate. Copy: "Estimated range: $X,XXX to $X,XXX. Every home is different. Your exact number comes from a free on-site estimate." Below it, the capture: name, phone, email, town, red button "Book my free estimate", posting to /api/lead with `source: 'calculator'` and the selections attached.
5. Result view fires GTM event `calculator_result` with type and band, no dollar values in the event.

Keyboard and screen-reader operable steps, back navigation preserved, state in memory only.

## calculator.json structure

```json
{
  "approved": false,
  "conditionMultipliers": { "good": 1.0, "some_prep": 1.15, "heavy_prep": 1.35 },
  "interior": {
    "unit": "rooms",
    "bands": [
      { "id": "1_room", "label": "1 room", "low": 400, "high": 1200 },
      { "id": "2_3_rooms", "label": "2 to 3 rooms", "low": 900, "high": 3200 },
      { "id": "4_5_rooms", "label": "4 to 5 rooms", "low": 2200, "high": 6500 },
      { "id": "whole_home", "label": "Whole home", "low": 4500, "high": 15000 }
    ]
  },
  "exterior": {
    "unit": "size",
    "bands": [
      { "id": "one_story", "label": "1 story, up to ~2,000 sq ft", "low": 4000, "high": 8500 },
      { "id": "two_story", "label": "2 stories, ~2,000 to 3,500 sq ft", "low": 7000, "high": 15000 },
      { "id": "large", "label": "Large or 3 stories, 3,500+ sq ft", "low": 12000, "high": 28000 }
    ]
  },
  "cabinets": {
    "unit": "fronts",
    "bands": [
      { "id": "small", "label": "Up to 20 doors and drawers", "low": 1800, "high": 3800 },
      { "id": "medium", "label": "20 to 35 doors and drawers", "low": 2800, "high": 6000 },
      { "id": "large", "label": "35+ doors and drawers", "low": 4500, "high": 9000 }
    ]
  }
}
```

Computation: `low = band.low x multiplier`, `high = band.high x multiplier`, round to the nearest $100, always display as a range.

## Page context around the widget

/pricing carries 1,200+ words of genuine cost-guide prose around the calculator: what drives painting costs (size, prep, surfaces, paint grade, access), why ranges vary, what a free estimate covers, FAQ block with schema (targets "how much does it cost to paint..." queries), links to the cost blog posts as they publish. The page targets calculator and cost keywords for the whole metro even though service focuses on the North Shore.
