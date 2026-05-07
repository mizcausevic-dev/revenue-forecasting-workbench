export type ForecastSignal = {
  label: string;
  value: string;
  delta: string;
  tone: "positive" | "watch" | "neutral";
};

export type ForecastPoint = {
  month: string;
  pipeline: number;
  commit: number;
  bestCase: number;
};

export type SegmentPerformance = {
  segment: string;
  commitAccuracy: number;
  coverageRatio: number;
  riskIndex: number;
};

export type DealRisk = {
  account: string;
  stage: string;
  amount: string;
  closeConfidence: number;
  issue: string;
  nextAction: string;
};

export type Scenario = {
  name: string;
  uplift: string;
  impact: string;
  note: string;
};

export type Narrative = {
  heading: string;
  body: string;
};
