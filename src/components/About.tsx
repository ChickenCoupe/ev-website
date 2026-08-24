import Image from 'next/image'
import Link from 'next/link'
import { subteamSummaries } from '@/data/site'

export default function About() {
  return (
    <section className="rl-band">
      <div className="rl-container">
        <div className="rl-split rl-split--top">
          <div>
            <h2 className="rl-title">Six subteams build one vehicle.</h2>
            <p className="rl-copy">
              Students work across mechanical, electrical, autonomy, data,
              operations, and leadership. Their parts, boards, software, and
              test plans meet on the same car.
            </p>
            <div className="rl-media rl-media--wide" style={{ marginTop: '1.75rem' }}>
              <Image
                src="/hero-vehicle.jpg"
                alt="Cornell Electric Vehicles team with the vehicle"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="rl-lane">
            {subteamSummaries.map((subteam) => (
              <Link
                key={subteam.id}
                href={subteam.href}
                className="rl-lane__row"
              >
                <div>
                  <h3 className="rl-lane__title">{subteam.name}</h3>
                  <p className="rl-lane__meta">{subteam.role}</p>
                </div>
                <span className="rl-lane__cta">Open</span>
              </Link>
            ))}
          </div>
        </div>

        <div
          className="rl-split"
          style={{ marginTop: '3.5rem', alignItems: 'center' }}
        >
          <div>
            <span className="rl-marker" aria-hidden="true">
              2014
            </span>
            <h3 className="rl-title" style={{ maxWidth: '10ch' }}>
              Building since 2014.
            </h3>
          </div>
          <p className="rl-copy">
            Over a decade of fabrication, telemetry, and competition weeks.
            End-to-end development means members own work from CAD and boards
            through test days and race inspections.
          </p>
        </div>
      </div>
    </section>
  )
}
