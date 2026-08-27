import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { VehicleTimelineItem } from '@/data/site'

type TrackSectionProps = {
  vehicles: VehicleTimelineItem[]
  label?: string
}

export default function TrackSection({
  vehicles,
  label = 'Vehicle timeline',
}: TrackSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const moveTrack = (direction: 1 | -1) => {
    const track = trackRef.current
    const card = track?.querySelector<HTMLElement>('article')
    if (track) track.scrollBy({ left: direction * (card ? card.offsetWidth + 24 : track.clientWidth), behavior: 'smooth' })
  }
  useEffect(() => {
    if (isPaused) return
    const timer = window.setInterval(() => moveTrack(1), 5000)
    return () => window.clearInterval(timer)
  }, [isPaused])

  return (
    <div onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocus={() => setIsPaused(true)} onBlur={() => setIsPaused(false)}>
      <div className="mb-5 flex justify-end gap-2">
        <button type="button" onClick={() => moveTrack(-1)} aria-label="Previous vehicle" className="border border-gray-700 p-3 text-white transition-colors hover:border-red-500 hover:text-red-400"><ArrowLeft className="h-5 w-5" /></button>
        <button type="button" onClick={() => moveTrack(1)} aria-label="Next vehicle" className="border border-gray-700 p-3 text-white transition-colors hover:border-red-500 hover:text-red-400"><ArrowRight className="h-5 w-5" /></button>
      </div>
      <div ref={trackRef}
      className="flex flex-col gap-6 sm:flex-row sm:overflow-x-auto sm:pb-4 sm:snap-x sm:snap-mandatory"
      aria-label={label}
      tabIndex={0}
    >
      {vehicles.map((vehicle, index) => (
        <motion.article
          key={`${vehicle.year}-${vehicle.name}`}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -8 }}
          viewport={{ once: true }}
          className="group relative grid min-h-[30rem] w-full shrink-0 grid-rows-[1fr_auto] overflow-hidden border border-red-900/70 bg-gray-950 shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition-shadow duration-300 hover:shadow-2xl sm:w-[min(60rem,88vw)] sm:snap-start"
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
          <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-red-500 transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
        </motion.article>
      ))}
      </div>
    </div>
  )
}
