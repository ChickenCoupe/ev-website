'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import PageMast from '@/components/site/PageMast'
import TrackSection from '@/components/site/TrackSection'
import ActionLink from '@/components/site/ActionLink'
import Footer from '@/components/Footer'
import { proofPoints, vehicleTimeline } from '@/data/site'

const specs = [
  { label: 'Weight', value: '75 kg' },
  { label: 'Chassis', value: 'Carbon Fiber Monocoque' },
  { label: 'Battery', value: '20000 mAH 6S' },
  { label: 'Motor', value: '48V BLDC' },
]

const previousVehicles = vehicleTimeline.filter(
  (vehicle) => vehicle.name !== 'Dodo Drifter'
).sort((a, b) => Number(b.year) - Number(a.year))

export default function Vehicles() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <PageMast
        title="Our Vehicles"
        body="Explore our vehicles, past and present."
        tone="red"
        imageSrc="/small-car-track.JPG"
        imageAlt="Cornell Electric Vehicles car on track"
      />

      <section className="bg-gray-900 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-4xl font-bold tracking-[-0.03em] md:text-5xl">
              Dodo Drifter
            </h2>
            <p className="mt-3 text-lg text-gray-300">2026 Urban Concept</p>
          </motion.div>

          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.figure initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} whileHover={{ scale: 1.015 }} viewport={{ once: true }} className="relative aspect-[16/10] overflow-hidden border border-red-900/70 bg-gray-950 shadow-2xl">
              <Image
                src="/vehicles/uc26_1.png"
                alt="Dodo Drifter, Cornell Electric Vehicles' 2026 Urban Concept vehicle"
                fill
                className="object-contain p-4"
                priority
                sizes="(min-width: 1024px) 48vw, 92vw"
              />
            </motion.figure>

            <motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold">Specifications</h3>
              <dl className="mt-6 grid sm:grid-cols-2">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="border-t border-red-900/70 py-5 sm:pr-6"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-red-400">
                      {spec.label}
                    </dt>
                    <dd className="mt-2 text-lg font-semibold text-white">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <h3 className="mt-10 text-2xl font-bold">2026 achievements</h3>
              <ul className="mt-5 border-b border-red-900/70">
                {proofPoints.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 border-t border-red-900/70 py-4 text-gray-300"
                  >
                    <span
                      className="mt-2 h-2 w-2 shrink-0 bg-red-600"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="mb-12 max-w-2xl">
            <h2 className="text-4xl font-bold tracking-[-0.03em] md:text-5xl">
              Previous Vehicles
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              Each vehicle records a different stage of the team&apos;s work in
              efficiency, manufacturing, and electric propulsion.
            </p>
          </motion.div>
          <TrackSection vehicles={previousVehicles} />
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-950 to-red-950 py-20">
        <div className="mx-auto grid w-full max-w-7xl items-end gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr_auto] lg:px-8">
          <h2 className="max-w-[12ch] text-4xl font-bold leading-[0.95] tracking-[-0.03em] md:text-5xl">
            Build the next vehicle with us.
          </h2>
          <div className="space-y-3 text-gray-300">
            <p>
              Mechanical, electrical, autonomy, data, and operations all ship
              to the car. Applications open each fall semester on the Apply page.</p>
          </div>
          <ActionLink href="/apply" variant="solid">
            Join our team
          </ActionLink>
        </div>
      </section>

      <Footer />
    </main>
  )
}
