'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { proofPoints, subteams, teamImages, type SubteamId } from './conceptData'

export default function PitCrewConcept() {
  const [activeSubteam, setActiveSubteam] = useState<SubteamId>('mechanical')
  const active = subteams.find((subteam) => subteam.id === activeSubteam) ?? subteams[0]

  return (
    <section
      id="concept-panel-pit-crew"
      role="tabpanel"
      aria-labelledby="concept-tab-pit-crew"
      className="concept-panel pit-crew"
    >
      <div className="pit-crew__hero">
        <div className="pit-crew__title">
          <p className="concept-kicker">Recruiting energy</p>
          <h1>Join the room where the car gets made.</h1>
          <p>Fast, close, human. This direction makes the team the first proof point.</p>
          <div className="concept-actions">
            <Link href="/apply">Apply</Link>
            <Link href="/team">Meet team</Link>
          </div>
        </div>

        <div className="pit-crew__wall" aria-label="CEV team photo wall">
          {teamImages.slice(0, 7).map((image, index) => (
            <figure key={image} className={`pit-crew__photo pit-crew__photo--${index + 1}`}>
              <Image src={image} alt="Cornell Electric Vehicles team member or team photo" fill sizes="28vw" className="object-cover" />
            </figure>
          ))}
          <figure className="pit-crew__vehicle">
            <Image src="/vehicles/uc25_2.avif" alt="Chicken Coupe vehicle side profile" fill sizes="44vw" className="object-contain" />
          </figure>
        </div>
      </div>

      <div className="pit-crew__bench">
        <div className="pit-crew__selector" role="tablist" aria-label="Subteam recruiting stories">
          {subteams.map((subteam) => (
            <button
              key={subteam.id}
              type="button"
              role="tab"
              aria-selected={subteam.id === activeSubteam}
              onClick={() => setActiveSubteam(subteam.id)}
            >
              <span>{subteam.name}</span>
              <small>{subteam.discipline}</small>
            </button>
          ))}
        </div>

        <div className="pit-crew__focus" aria-live="polite">
          <div>
            <span>{active.name}</span>
            <h2>{active.role}</h2>
            <p>{active.build}</p>
          </div>
          <figure>
            <Image src={active.portrait} alt={`${active.name} team representative`} fill sizes="32vw" className="object-cover" />
          </figure>
        </div>

        <div className="pit-crew__proof">
          {proofPoints.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
