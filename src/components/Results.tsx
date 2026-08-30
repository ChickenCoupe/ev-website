'use client'

import { motion } from 'framer-motion'
const results = [
  {
    number: '1st Place',
    title: 'Data & Telemetry',
    description: 'Recognized for our innovative data collection and optimization strategy.',
    submissionUrl: 'https://drive.google.com/file/d/1Zrahx10YGaEdIylWsPn1mKpA16MkqxKm/view?usp=sharing',
  },
  { number: '1.8x', title: 'Efficiency Increase', description: "The urban concept reached 36.98 mi/kWh, almost doubling the previous year's efficiency." },
  { number: '6th Place', title: 'Urban Concept', description: 'Our battery-electric city vehicle passed all inspections and completed three successful runs.' },
]

export default function Results() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24 text-white">
      <div className="absolute inset-0 bg-[]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-4xl font-bold md:text-5xl">2026 Results</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-300">This year, our team achieved impressive results at the Shell Eco-Marathon Americas, securing multiple awards and solidifying our status as one of the competition&apos;s leading teams.</p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {results.map((result, index) => {
            return (
              <motion.article key={result.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.12 }} whileHover={{ y: -6 }} viewport={{ once: true }} className="group relative overflow-hidden border border-red-900/70 bg-gray-950 p-8 text-center shadow-xl transition-colors hover:border-red-500">
                <div className="absolute left-0 top-0 h-1 w-full bg-red-600 transition-all group-hover:h-2" />
                <div className="mb-4 text-4xl font-bold tracking-tight text-red-400 md:text-5xl">{result.number}</div>
                <h3 className="mb-3 text-xl font-bold text-white">{result.title}</h3>
                <p className="leading-relaxed text-gray-400">
                  {result.description}
                  {result.submissionUrl && (
                    <>
                      {' '}
                      <a
                        href={result.submissionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold underline underline-offset-4 transition-colors hover:text-gray-200"
                      >
                        Read our submission here!
                      </a>
                    </>
                  )}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
