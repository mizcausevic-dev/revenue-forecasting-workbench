import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { dealRisks, forecastSignals, forecastTrend, narratives, scenarios, segmentPerformance } from "./data";

const toneClass = {
  positive: "signal-card positive",
  watch: "signal-card watch",
  neutral: "signal-card neutral"
} as const;

const segmentColors = ["#34d399", "#60a5fa", "#f59e0b", "#a78bfa"];

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Revenue Forecasting Workbench</p>
          <h1>Forecast quality, commit risk, and upside planning in one executive workspace.</h1>
          <p className="hero-text">
            A recruiter-ready frontend flagship for revenue leaders who need forecast discipline, scenario visibility,
            and commercial risk signals that turn pipeline into credible planning.
          </p>
          <div className="hero-chips">
            <span>Commit integrity</span>
            <span>Scenario planning</span>
            <span>Executive visibility</span>
          </div>
        </div>
        <div className="hero-framework" aria-label="Forecast operating model">
          <div className="framework-card">
            <strong>Commit</strong>
            <p>Board-ready number with accountable ownership.</p>
          </div>
          <div className="framework-card">
            <strong>Coverage</strong>
            <p>Pipeline depth weighted by quality and timing.</p>
          </div>
          <div className="framework-card">
            <strong>Risk</strong>
            <p>Deal friction, stage integrity, and blocker visibility.</p>
          </div>
          <div className="framework-card">
            <strong>Upside</strong>
            <p>Controlled scenario moves with clear execution dependencies.</p>
          </div>
        </div>
      </header>

      <section className="signal-grid" aria-label="Forecast signal cards">
        {forecastSignals.map((signal) => (
          <article key={signal.label} className={toneClass[signal.tone]}>
            <p>{signal.label}</p>
            <strong>{signal.value}</strong>
            <span>{signal.delta}</span>
          </article>
        ))}
      </section>

      <section className="content-grid primary-grid">
        <article className="panel chart-panel">
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">Forecast curve</p>
              <h2>Pipeline, commit, and best-case view without narrative drift</h2>
            </div>
            <span className="panel-note">USD millions</span>
          </div>
          <div className="chart-frame">
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={forecastTrend}>
                <defs>
                  <linearGradient id="pipelineGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="bestCaseGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34d399" stopOpacity={0.45} />
                    <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(148, 163, 184, 0.16)" vertical={false} />
                <XAxis dataKey="month" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "#10151f",
                    border: "1px solid rgba(148,163,184,0.16)",
                    borderRadius: "18px"
                  }}
                />
                <Legend />
                <Area type="monotone" dataKey="pipeline" stroke="#60a5fa" fill="url(#pipelineGradient)" strokeWidth={3} />
                <Line type="monotone" dataKey="commit" stroke="#f8fafc" strokeWidth={4} />
                <Area type="monotone" dataKey="bestCase" stroke="#34d399" fill="url(#bestCaseGradient)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="panel list-panel">
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">Deal risk</p>
              <h2>Commercial exposures shaping the commit number</h2>
            </div>
          </div>
          <div className="risk-list">
            {dealRisks.map((risk) => (
              <article key={risk.account} className="risk-card">
                <div className="risk-topline">
                  <strong>{risk.account}</strong>
                  <span>{risk.amount}</span>
                </div>
                <div className="risk-meta">
                  <span>{risk.stage}</span>
                  <span>{risk.closeConfidence}% confidence</span>
                </div>
                <p>{risk.issue}</p>
                <small>{risk.nextAction}</small>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid secondary-grid">
        <article className="panel chart-panel">
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">Segment discipline</p>
              <h2>Forecast quality by revenue motion</h2>
            </div>
          </div>
          <div className="chart-frame compact">
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={segmentPerformance}>
                <CartesianGrid stroke="rgba(148, 163, 184, 0.16)" vertical={false} />
                <XAxis dataKey="segment" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis yAxisId="left" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "#10151f",
                    border: "1px solid rgba(148,163,184,0.16)",
                    borderRadius: "18px"
                  }}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="commitAccuracy" radius={[8, 8, 0, 0]}>
                  {segmentPerformance.map((entry, index) => (
                    <Cell key={entry.segment} fill={segmentColors[index % segmentColors.length]} />
                  ))}
                </Bar>
                <Line yAxisId="right" type="monotone" dataKey="coverageRatio" stroke="#f8fafc" strokeWidth={3} />
                <Line yAxisId="right" type="monotone" dataKey="riskIndex" stroke="#fb7185" strokeWidth={3} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="panel scenario-panel">
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">Scenario planning</p>
              <h2>Upside paths that stay grounded in execution reality</h2>
            </div>
          </div>
          <div className="scenario-list">
            {scenarios.map((scenario) => (
              <article key={scenario.name} className="scenario-card">
                <div className="scenario-header">
                  <strong>{scenario.name}</strong>
                  <span>{scenario.uplift}</span>
                </div>
                <p>{scenario.impact}</p>
                <small>{scenario.note}</small>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="narrative-grid" aria-label="Narrative explanation">
        {narratives.map((item) => (
          <article key={item.heading} className="narrative-card">
            <h3>{item.heading}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default App;
