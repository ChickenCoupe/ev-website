import Image from 'next/image'
import Link from 'next/link'
import { proofPoints, vehicleTimeline } from './conceptData'

export default function RaceLineConcept() {
  return (
    <section
      id="concept-panel-race-line"
      role="tabpanel"
      aria-labelledby="concept-tab-race-line"
      className="concept-panel race-line"
    >
      <div className="race-line__mast">
        <div>
          <p className="concept-kicker">Competition narrative</p>
          <h1>Make the page feel like a run.</h1>
        </div>
        <p>Vehicle lineage, race pressure, and results move as one story.</p>
      </div>

      <div className="race-line__track" aria-label="Vehicle timeline">
        {vehicleTimeline.map((vehicle) => (
          <article key={vehicle.name} className="race-line__scene">
            <div className="race-line__year">{vehicle.year}</div>
            <figure>
              <Image src={vehicle.image} alt={vehicle.alt} fill sizes="(min-width: 1024px) 62vw, 90vw" className="object-contain" />
            </figure>
            <div className="race-line__story">
              <h2>{vehicle.name}</h2>
              <p>{vehicle.story}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="race-line__finish">
        <div>
          <span>Finish line proof</span>
          <h2>Results after the build story.</h2>
        </div>
        <div className="race-line__proof">
          {proofPoints.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>
        <Link href="/vehicles">View vehicles</Link>
      </div>
    </section>
  )
}
