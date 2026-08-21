'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, type KeyboardEvent } from 'react'
import { firstLapWeeks } from './conceptData'

export default function FirstLapConcept() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = firstLapWeeks[activeIndex]
  const progress = firstLapWeeks.length > 1 ? activeIndex / (firstLapWeeks.length - 1) : 0

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'Home' && event.key !== 'End') {
      return
    }

    event.preventDefault()
    const lastIndex = firstLapWeeks.length - 1
    const nextIndex =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? lastIndex
          : event.key === 'ArrowRight'
            ? Math.min(index + 1, lastIndex)
            : Math.max(index - 1, 0)

    setActiveIndex(nextIndex)
    const nextButton = document.querySelector<HTMLButtonElement>(`[data-first-lap-week="${firstLapWeeks[nextIndex].id}"]`)
    nextButton?.focus()
  }

  return (
    <section
      id="concept-panel-first-lap"
      role="tabpanel"
      aria-labelledby="concept-tab-first-lap"
      className="concept-panel first-lap"
    >
      <header className="first-lap__intro">
        <p className="concept-kicker">Before you apply</p>
        <h1>See your first semester before you commit to it.</h1>
        <p>
          Most teams describe themselves. This one shows you what your own thirteen weeks look
          like, from picking a bay to defending your work at design review.
        </p>
      </header>

      <div className="first-lap__rail" role="tablist" aria-label="Weeks of your first semester">
        <div className="first-lap__progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>
        {firstLapWeeks.map((week, index) => (
          <button
            key={week.id}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls="first-lap-stage"
            data-first-lap-week={week.id}
            tabIndex={index === activeIndex ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            <small>{week.label}</small>
            <span>{week.title}</span>
          </button>
        ))}
      </div>

      <div id="first-lap-stage" className="first-lap__stage" aria-live="polite">
        <article key={active.id} className="first-lap__panel">
          <div className="first-lap__copy">
            <span className="first-lap__week-label">{active.label}</span>
            <h2>{active.title}</h2>
            <p>{active.body}</p>
            <p className="first-lap__artifact">{active.artifact}</p>
          </div>
          <figure className="first-lap__figure">
            <Image src={active.image} alt={active.alt} fill sizes="(max-width: 1023px) 92vw, 46vw" className="object-cover" />
          </figure>
        </article>
      </div>

      <footer className="first-lap__finish">
        <h2>Week zero starts with an application.</h2>
        <div className="concept-actions">
          <Link href="/apply">Apply to CEV</Link>
          <Link href="/team">Meet the people you would join</Link>
        </div>
      </footer>
    </section>
  )
}
