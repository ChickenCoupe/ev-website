'use client'

import type { KeyboardEvent } from 'react'
import type { ConceptId, ConceptMeta } from './conceptData'

type ConceptSwitcherProps = {
  concepts: ConceptMeta[]
  activeConcept: ConceptId
  onSelect: (concept: ConceptId, input: 'pointer' | 'keyboard') => void
}

export default function ConceptSwitcher({ concepts, activeConcept, onSelect }: ConceptSwitcherProps) {
  const activeIndex = concepts.findIndex((concept) => concept.id === activeConcept)

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'Home' && event.key !== 'End') {
      return
    }

    event.preventDefault()
    const lastIndex = concepts.length - 1
    const nextIndex =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? lastIndex
          : event.key === 'ArrowRight'
            ? index === lastIndex
              ? 0
              : index + 1
            : index === 0
              ? lastIndex
              : index - 1

    const nextButton = document.querySelector<HTMLButtonElement>(`[data-concept-tab="${concepts[nextIndex].id}"]`)
    nextButton?.focus()
    onSelect(concepts[nextIndex].id, 'keyboard')
  }

  return (
    <aside className="concept-switcher" aria-label="Homepage concept switcher">
      <div className="concept-switcher__header">
        <span>Concept lab</span>
        <strong>{concepts[activeIndex]?.shortName ?? 'Wind'}</strong>
      </div>
      <div className="concept-switcher__tabs" role="tablist" aria-label="Homepage directions">
        {concepts.map((concept, index) => {
          const isActive = concept.id === activeConcept

          return (
            <button
              key={concept.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`concept-panel-${concept.id}`}
              id={`concept-tab-${concept.id}`}
              data-concept-tab={concept.id}
              tabIndex={isActive ? 0 : -1}
              className="concept-switcher__tab"
              onClick={() => onSelect(concept.id, 'pointer')}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span>{concept.name}</span>
              <small>{concept.frame}</small>
            </button>
          )
        })}
      </div>
    </aside>
  )
}
