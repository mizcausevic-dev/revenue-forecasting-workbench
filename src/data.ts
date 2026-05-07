import {
  DealRisk,
  ForecastPoint,
  ForecastSignal,
  Narrative,
  Scenario,
  SegmentPerformance
} from "./types";

export const forecastSignals: ForecastSignal[] = [
  { label: "Quarter Commit", value: "$14.2M", delta: "+11% vs prior quarter", tone: "positive" },
  { label: "Forecast Coverage", value: "3.4x", delta: "Healthy across enterprise", tone: "neutral" },
  { label: "Commit Risk", value: "18%", delta: "EMEA expansion deals exposed", tone: "watch" },
  { label: "Upside Scenario", value: "$16.1M", delta: "If guided pricing closes", tone: "positive" }
];

export const forecastTrend: ForecastPoint[] = [
  { month: "Apr", pipeline: 19.5, commit: 11.8, bestCase: 13.2 },
  { month: "May", pipeline: 21.4, commit: 12.5, bestCase: 14.1 },
  { month: "Jun", pipeline: 22.8, commit: 14.2, bestCase: 16.1 },
  { month: "Jul", pipeline: 24.3, commit: 14.8, bestCase: 17.2 },
  { month: "Aug", pipeline: 25.6, commit: 15.4, bestCase: 18.3 }
];

export const segmentPerformance: SegmentPerformance[] = [
  { segment: "Enterprise", commitAccuracy: 91, coverageRatio: 3.9, riskIndex: 22 },
  { segment: "Mid-Market", commitAccuracy: 84, coverageRatio: 3.1, riskIndex: 28 },
  { segment: "Partner", commitAccuracy: 79, coverageRatio: 2.6, riskIndex: 35 },
  { segment: "Expansion", commitAccuracy: 88, coverageRatio: 4.2, riskIndex: 19 }
];

export const dealRisks: DealRisk[] = [
  {
    account: "Northstar Cloud",
    stage: "Commercial review",
    amount: "$1.8M",
    closeConfidence: 62,
    issue: "Security review slipped beyond forecast checkpoint.",
    nextAction: "Escalate legal and security blocker within 48 hours."
  },
  {
    account: "Apex Data Systems",
    stage: "Proposal",
    amount: "$980K",
    closeConfidence: 71,
    issue: "Champion engaged, but procurement path is still undefined.",
    nextAction: "Route to deal desk for commercial packaging support."
  },
  {
    account: "Helio Commerce",
    stage: "Negotiation",
    amount: "$1.2M",
    closeConfidence: 67,
    issue: "Pricing pressure is rising faster than margin guardrails allow.",
    nextAction: "Rework commercial options before executive forecast review."
  }
];

export const scenarios: Scenario[] = [
  {
    name: "Commit defense",
    uplift: "+$0.6M",
    impact: "Stabilizes current quarter without raising risk appetite.",
    note: "Focus on existing commercial blockers and forecast hygiene."
  },
  {
    name: "Guided upside",
    uplift: "+$1.9M",
    impact: "Unlocks board-visible acceleration with moderate execution risk.",
    note: "Requires enterprise CTA experiment rollout and deal desk support."
  },
  {
    name: "Partner recovery",
    uplift: "+$1.1M",
    impact: "Reclaims underperforming channel contribution in EMEA and APAC.",
    note: "Needs routing correction and tighter channel manager ownership."
  }
];

export const narratives: Narrative[] = [
  {
    heading: "Forecasting for executive action, not spreadsheet theater",
    body: "The workbench treats commit quality, upside, and exposure as operating decisions that need narrative clarity and confidence signals."
  },
  {
    heading: "Coverage without false comfort",
    body: "High pipeline coverage means little if stage quality, commercial blockers, and deal velocity are not visible in the same workspace."
  },
  {
    heading: "Scenario planning that respects reality",
    body: "The interface keeps best-case thinking grounded in execution risk, owner accountability, and commercial timing."
  }
];
