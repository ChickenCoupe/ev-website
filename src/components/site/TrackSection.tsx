import Image from 'next/image'
import type { VehicleTimelineItem } from '@/data/site'

type TrackSectionProps = {
  vehicles: VehicleTimelineItem[]
  label?: string
}

export default function TrackSection({
  vehicles,
  label = 'Vehicle timeline',
}: TrackSectionProps) {
  return (
    <div className="rl-track" aria-label={label} tabIndex={0}>
      {vehicles.map((vehicle) => (
        <article key={`${vehicle.year}-${vehicle.name}`} className="rl-scene">
          <div className="rl-scene__year" aria-hidden="true">
            {vehicle.year}
          </div>
          <figure className="rl-scene__figure">
            <Image
              src={vehicle.image}
              alt={vehicle.alt}
              fill
              sizes="(min-width: 1024px) 62vw, 90vw"
              className="object-contain"
            />
          </figure>
          <div className="rl-scene__story">
            <div>
              <h2>{vehicle.name}</h2>
            </div>
            <p>{vehicle.story}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
