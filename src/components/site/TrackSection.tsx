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
    <div
      className="flex flex-col gap-6 sm:flex-row sm:overflow-x-auto sm:pb-4 sm:snap-x sm:snap-mandatory"
      aria-label={label}
      tabIndex={0}
    >
      {vehicles.map((vehicle) => (
        <article
          key={`${vehicle.year}-${vehicle.name}`}
          className="relative grid min-h-[30rem] w-full shrink-0 grid-rows-[1fr_auto] overflow-hidden border border-red-900/70 bg-gray-950 shadow-[0_18px_40px_rgba(0,0,0,0.22)] sm:w-[min(60rem,88vw)] sm:snap-start"
        >
          <div
            className="pointer-events-none absolute left-4 top-2 z-10 text-7xl font-bold leading-none tracking-[-0.05em] text-white/10 md:text-9xl"
            aria-hidden="true"
          >
            {vehicle.year}
          </div>
          <figure className="relative min-h-72">
            <Image
              src={vehicle.image}
              alt={vehicle.alt}
              fill
              sizes="(min-width: 640px) 70vw, 100vw"
              className="object-contain p-6"
            />
          </figure>
          <div className="grid gap-3 border-t border-red-900/70 p-6 md:grid-cols-[0.7fr_1fr] md:items-end">
            <div>
              <h3 className="text-3xl font-bold leading-none tracking-[-0.025em] text-white md:text-4xl">
                {vehicle.name}
              </h3>
              {vehicle.category ? (
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-red-400">
                  {vehicle.category}
                </p>
              ) : null}
            </div>
            {vehicle.story ? (
              <p className="text-base leading-relaxed text-gray-300">{vehicle.story}</p>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  )
}
