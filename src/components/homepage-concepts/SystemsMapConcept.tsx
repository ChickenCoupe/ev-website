'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { subteams, type SubteamId } from './conceptData'

export default function SystemsMapConcept() {
  const [activeSubteam, setActiveSubteam] = useState<SubteamId>('autonomy')
  const active = subteams.find((subteam) => subteam.id === activeSubteam) ?? subteams[0]
  const ActiveIcon = active.icon

  return (
    <section
      id="concept-panel-systems-map"
      role="tabpanel"
      aria-labelledby="concept-tab-systems-map"
      className="concept-panel systems-map"
    >
      <div className="systems-map__intro">
        <p className="concept-kicker">Applicant clarity</p>
        <h1>Pick a system. Find your work.</h1>
        <p>Every subteam is an entry point into the same vehicle.</p>
      </div>

      <div className="systems-map__stage">
        <div className="systems-map__vehicle">
          <Image src="/vehicles/uc25_2.avif" alt="Chicken Coupe vehicle side profile" fill sizes="(min-width: 1024px) 58vw, 92vw" className="object-contain" />
        </div>

        {subteams.map((subteam) => {
          const Icon = subteam.icon
          const isActive = subteam.id === activeSubteam

          return (
            <button
              key={subteam.id}
              type="button"
              className="systems-map__node"
              style={{ left: subteam.coordinates.x, top: subteam.coordinates.y }}
              aria-pressed={isActive}
              onClick={() => setActiveSubteam(subteam.id)}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span>{subteam.name}</span>
            </button>
          )
        })}

        <aside className="systems-map__readout" aria-live="polite">
          <div className="systems-map__readout-icon">
            <ActiveIcon className="h-6 w-6" aria-hidden="true" />
          </div>
          <span>{active.discipline}</span>
          <h2>{active.role}</h2>
          <p>{active.build}</p>
          <div className="systems-map__preview">
            <Image src={active.vehicleDetail} alt={`${active.name} related CEV image`} fill sizes="24vw" className="object-cover" />
          </div>
          <Link href="/apply">Apply</Link>
        </aside>
      </div>
    </section>
  )
}
