import { teamStats } from '@/data/site'

export default function Stats() {
  return (
    <section className="rl-band" aria-label="Team telemetry">
      <div className="rl-container">
        <h2 className="rl-title" style={{ marginBottom: '1.75rem' }}>
          An interdisciplinary project team.
        </h2>
        <div className="rl-telemetry">
          {teamStats.map((stat) => (
            <div key={stat.label} className="rl-telemetry__item">
              <span className="rl-telemetry__value">{stat.value}</span>
              <span className="rl-telemetry__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
