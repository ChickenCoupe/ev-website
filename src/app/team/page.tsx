import Link from 'next/link'
import PageMast from '@/components/site/PageMast'
import Footer from '@/components/Footer'
import { subteamSummaries } from '@/data/site'

export default function TeamPage() {
  return (
    <main>
      <PageMast
        title="Our team"
        body="Students across six subteams design, manufacture, test, and race Cornell's electric vehicles."
        tone="red"
      />

      <section className="rl-band">
        <div className="rl-container">
          <h2 className="rl-title">Subteams</h2>
          <p className="rl-copy" style={{ marginBottom: '1.75rem' }}>
          </p>
          <div className="rl-lane">
            {subteamSummaries.map((subteam) => (
              <Link key={subteam.id} href={subteam.href} className="rl-lane__row">
                <div>
                  <h3 className="rl-lane__title">{subteam.name}</h3>
                  <p className="rl-lane__meta">
                    <strong style={{ color: 'var(--cev-ink)' }}>
                      {subteam.discipline}
                    </strong>
                    {'. '}
                    {subteam.role}
                  </p>
                </div>
                <span className="rl-lane__cta">Open</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
