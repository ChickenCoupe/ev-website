import TrackSection from '@/components/site/TrackSection'
import ActionLink from '@/components/site/ActionLink'
import { vehicleTimeline } from '@/data/site'

export default function VehicleLineage() {
  const list = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
  ]

  return (
    <section className="rl-band rl-band--raised">
      <div className="rl-container">
        <div className="rl-split" style={{ marginBottom: '1.5rem' }}>
          <div>
            <h2 className="rl-title">{list[vehicleTimeline.length - 1]} generations of CEV vehicles.</h2>
          </div>
          <div>
            <p className="rl-copy">
              From early prototypes to {vehicleTimeline[vehicleTimeline.length - 1]?.name}, each platform taught the
              team how packaging, power, and data change race-day behavior.
            </p>
            <div className="rl-actions" style={{ marginTop: '0.75rem' }}>
              <ActionLink href="/vehicles" variant="ghost">
                Full vehicle archive
              </ActionLink>
            </div>
          </div>
        </div>
      </div>
      <div className="rl-container">
        <TrackSection vehicles={vehicleTimeline} />
      </div>
    </section>
  )
}
