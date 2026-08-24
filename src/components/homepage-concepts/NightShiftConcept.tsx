'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, type CSSProperties } from 'react'
import { nightShiftEntries, subteams } from './conceptData'

function useLabClock() {
  const [now, setNow] = useState<string | null>(null)

  useEffect(() => {
    const format = () =>
      new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })

    setNow(format())
    const interval = window.setInterval(() => setNow(format()), 1000)
    return () => window.clearInterval(interval)
  }, [])

  return now
}

export default function NightShiftConcept() {
  const clock = useLabClock()

  return (
    <section
      id="concept-panel-night-shift"
      role="tabpanel"
      aria-labelledby="concept-tab-night-shift"
      className="concept-panel night-shift"
    >
      <header className="night-shift__mast">
        <div className="night-shift__title">
          <p className="concept-kicker">One night in the lab</p>
          <h1>The car is built after dark.</h1>
          <p>
            No brochure copy. This is what a single Tuesday night on Cornell Electric Vehicles
            actually looks like, logged by the people doing the work.
          </p>
        </div>
        <div className="night-shift__status">
          <span className="night-shift__dot" aria-hidden="true" />
          <div>
            <small>Lab time, Ithaca NY</small>
            <strong suppressHydrationWarning>{clock ?? '--:--:--'}</strong>
          </div>
        </div>
      </header>

      <ol className="night-shift__log" aria-label="Build log entries from one night">
        {nightShiftEntries.map((entry, index) => {
          const subteam = subteams.find((team) => team.id === entry.subteam)

          return (
            <li
              key={entry.id}
              className="night-shift__entry"
              style={{ '--entry-index': index } as CSSProperties}
            >
              <div className="night-shift__meta">
                <strong>{entry.time}</strong>
                <span>{subteam?.name}</span>
              </div>
              <div className="night-shift__body">
                <p>{entry.text}</p>
                {entry.metricLabel && entry.metricValue && (
                  <p className="night-shift__metric">
                    <small>{entry.metricLabel}</small>
                    <span>{entry.metricValue}</span>
                  </p>
                )}
              </div>
              {entry.image && entry.alt && (
                <figure className="night-shift__figure">
                  <Image src={entry.image} alt={entry.alt} fill sizes="(max-width: 1023px) 92vw, 26vw" className="object-cover" />
                </figure>
              )}
            </li>
          )
        })}
      </ol>

      <footer className="night-shift__finish">
        <div>
          <span>This was one night. There are about ninety of them a year.</span>
          <h2>Want your name in the log?</h2>
        </div>
        <div className="concept-actions">
          <Link href="/apply">Apply</Link>
          <Link href="/team">Who is in the lab</Link>
        </div>
      </footer>
    </section>
  )
}
