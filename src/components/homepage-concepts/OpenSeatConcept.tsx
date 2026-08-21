'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  openSeatFirstBuilds,
  openSeatMatrix,
  openSeatQuestions,
  subteams,
  type OpenSeatOptionId,
  type OpenSeatStyleId,
} from './conceptData'

export default function OpenSeatConcept() {
  const [make, setMake] = useState<OpenSeatOptionId | null>(null)
  const [style, setStyle] = useState<OpenSeatStyleId | null>(null)

  const matchedId = make && style ? openSeatMatrix[make][style] : null
  const matched = matchedId ? subteams.find((team) => team.id === matchedId) : null

  const reset = () => {
    setMake(null)
    setStyle(null)
  }

  return (
    <section
      id="concept-panel-open-seat"
      role="tabpanel"
      aria-labelledby="concept-tab-open-seat"
      className="concept-panel open-seat"
    >
      <header className="open-seat__intro">
        <p className="concept-kicker">Two questions</p>
        <h1>There is a seat on this team with your name on it.</h1>
        <p>
          You do not need to know what a motor controller is to belong here. Answer two
          questions and we will point you at the bench where you would start.
        </p>
      </header>

      <div className="open-seat__form">
        <fieldset className="open-seat__question">
          <legend>
            <small>01</small>
            {openSeatQuestions.make.prompt}
          </legend>
          <div className="open-seat__options">
            {openSeatQuestions.make.options.map((option) => (
              <button
                key={option.id}
                type="button"
                aria-pressed={make === option.id}
                onClick={() => setMake(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="open-seat__question">
          <legend>
            <small>02</small>
            {openSeatQuestions.style.prompt}
          </legend>
          <div className="open-seat__options">
            {openSeatQuestions.style.options.map((option) => (
              <button
                key={option.id}
                type="button"
                aria-pressed={style === option.id}
                onClick={() => setStyle(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="open-seat__result" aria-live="polite">
        {matched ? (
          <article key={matched.id} className="open-seat__match">
            <figure className="open-seat__portrait">
              <Image
                src={matched.portrait}
                alt={`A member of the ${matched.name} subteam`}
                fill
                sizes="(max-width: 1023px) 60vw, 24vw"
                className="object-cover"
              />
            </figure>
            <div className="open-seat__match-copy">
              <span>Your seat is on</span>
              <h2>{matched.name}</h2>
              <p className="open-seat__discipline">{matched.discipline}</p>
              <p>{matched.role}</p>
              <p className="open-seat__first-build">{openSeatFirstBuilds[matched.id]}</p>
              <div className="concept-actions">
                <Link href="/apply">Apply for this seat</Link>
                <Link href="/team">See the whole subteam</Link>
              </div>
              <button type="button" className="open-seat__reset" onClick={reset}>
                Answer differently
              </button>
            </div>
          </article>
        ) : (
          <p className="open-seat__placeholder">
            {make || style
              ? 'One more answer and we will find your bench.'
              : 'Your match shows up here. No experience required, most of the team started with none.'}
          </p>
        )}
      </div>
    </section>
  )
}
