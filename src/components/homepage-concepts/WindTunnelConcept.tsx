'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import type { VehicleStage } from './conceptData'

const VehicleSpecimenCanvas = dynamic(() => import('./VehicleSpecimenCanvas'), {
  ssr: false,
  loading: () => <div className="wind-tunnel__canvas-loading" aria-hidden="true" />,
})

const stages: Array<{
  id: VehicleStage
  title: string
  body: string
  system: string
}> = [
  {
    id: 'shell',
    title: 'Shape the shell.',
    body: 'Open on a car treated like a lab object: quiet surface, hard light, no brochure gloss.',
    system: 'Mechanical',
  },
  {
    id: 'battery',
    title: 'Lift the powertrain.',
    body: 'The body separates to reveal energy storage, wiring logic, and the packaging work under the skin.',
    system: 'Electrical',
  },
  {
    id: 'compute',
    title: 'Expose the brain.',
    body: 'Autonomy and data move from abstract claims into visible compute, sensing, and run analysis.',
    system: 'Autonomy and Data',
  },
  {
    id: 'assembled',
    title: 'Bring it back together.',
    body: 'The final state turns parts into proof: one vehicle, many disciplines, one team.',
    system: 'Full team',
  },
]

export default function WindTunnelConcept() {
  const [activeStage, setActiveStage] = useState<VehicleStage>('shell')
  const stageRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        const nextStage = visible?.target.getAttribute('data-stage') as VehicleStage | null
        if (nextStage) setActiveStage(nextStage)
      },
      { rootMargin: '-32% 0px -32% 0px', threshold: [0.2, 0.45, 0.7] },
    )

    stageRefs.current.forEach((element) => {
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="concept-panel-wind-tunnel"
      role="tabpanel"
      aria-labelledby="concept-tab-wind-tunnel"
      className="concept-panel wind-tunnel"
    >
      <div className="wind-tunnel__hero">
        <div className="wind-tunnel__copy">
          <p className="concept-kicker">Most experimental</p>
          <h1>Vehicle as evidence.</h1>
          <p>
            Parts separate, roles become visible, and the team feels serious before the pitch starts.
          </p>
          <div className="concept-actions">
            <Link href="/apply">Apply</Link>
            <Link href="/team">Meet team</Link>
          </div>
        </div>
        <div className="wind-tunnel__specimen">
          <VehicleSpecimenCanvas stage={activeStage} />
          <div className="wind-tunnel__readout" aria-live="polite">
            <span>{stages.find((stage) => stage.id === activeStage)?.system}</span>
            <strong>{stages.find((stage) => stage.id === activeStage)?.title}</strong>
          </div>
        </div>
      </div>

      <div className="wind-tunnel__sequence">
        {stages.map((stage, index) => (
          <div
            key={stage.id}
            ref={(element) => {
              stageRefs.current[index] = element
            }}
            data-stage={stage.id}
            className="wind-tunnel__stage"
          >
            <span>{stage.system}</span>
            <h2>{stage.title}</h2>
            <p>{stage.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
