'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useMemo, useState, type CSSProperties } from 'react'
import ConceptSwitcher from './ConceptSwitcher'
import FirstLapConcept from './FirstLapConcept'
import NightShiftConcept from './NightShiftConcept'
import OpenSeatConcept from './OpenSeatConcept'
import PitCrewConcept from './PitCrewConcept'
import RaceLineConcept from './RaceLineConcept'
import SystemsMapConcept from './SystemsMapConcept'
import WindTunnelConcept from './WindTunnelConcept'
import { concepts, defaultConcept, getConcept, isConceptId, type ConceptId } from './conceptData'

type ConceptLabShellProps = {
  initialConcept: ConceptId
}

function readConceptFromLocation() {
  if (typeof window === 'undefined') return null
  return new URLSearchParams(window.location.search).get('concept')
}

export default function ConceptLabShell({ initialConcept }: ConceptLabShellProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [activeConcept, setActiveConcept] = useState<ConceptId>(initialConcept)
  const [inputMode, setInputMode] = useState<'pointer' | 'keyboard'>('pointer')
  const activeMeta = useMemo(() => getConcept(activeConcept), [activeConcept])

  useEffect(() => {
    const syncFromUrl = () => {
      const concept = readConceptFromLocation()
      setActiveConcept(isConceptId(concept) ? concept : defaultConcept)
    }

    syncFromUrl()
    window.addEventListener('popstate', syncFromUrl)
    return () => window.removeEventListener('popstate', syncFromUrl)
  }, [])

  const selectConcept = (concept: ConceptId, input: 'pointer' | 'keyboard') => {
    setInputMode(input)
    setActiveConcept(concept)

    const params = new URLSearchParams(window.location.search)
    params.set('concept', concept)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const renderConcept = () => {
    if (activeConcept === 'pit-crew') return <PitCrewConcept />
    if (activeConcept === 'race-line') return <RaceLineConcept />
    if (activeConcept === 'systems-map') return <SystemsMapConcept />
    if (activeConcept === 'first-lap') return <FirstLapConcept />
    if (activeConcept === 'night-shift') return <NightShiftConcept />
    if (activeConcept === 'open-seat') return <OpenSeatConcept />
    return <WindTunnelConcept />
  }

  return (
    <main
      className={`concept-lab concept-lab--${activeConcept}`}
      style={
        {
          '--concept-accent': activeMeta.accent,
          '--concept-ink': activeMeta.ink,
          '--concept-surface': activeMeta.surface,
        } as CSSProperties
      }
    >
      <ConceptSwitcher concepts={concepts} activeConcept={activeConcept} onSelect={selectConcept} />

      <div className="concept-lab__meta" aria-live="polite">
        <span>{activeMeta.name}</span>
        <p>{activeMeta.mood}</p>
      </div>

      <div key={activeConcept} className={`concept-lab__stage ${inputMode === 'keyboard' ? 'concept-lab__stage--instant' : ''}`}>
        {renderConcept()}
      </div>
    </main>
  )
}
