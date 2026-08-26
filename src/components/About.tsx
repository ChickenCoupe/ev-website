'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const features = [
  { title: 'Industry-Aligned Innovation', description: 'Our members gain experience building greener, smarter mobility solutions aligned with modern automotive electrification and autonomy.' },
  { title: 'Cutting-Edge R&D', description: 'R&D projects spanning AR, ML, and heterogeneous compute give members the flexibility to explore emerging technologies.' },
  { title: 'End-to-End Development', description: 'From onboarding and in-house manufacturing to final integration, members practice every step of the modern design cycle.' },
]

export default function About() {
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveFeature((current) => (current + 1) % features.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [])

  const feature = features[activeFeature]

  return (
    <section className="relative overflow-hidden bg-gray-900 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(179,27,27,0.16),transparent_44%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-4xl font-bold md:text-5xl">Why CEV Is Different</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-300">Founded in <span className="text-red-400">2014</span>, Cornell Electric Vehicles is Cornell University&apos;s leading project team for <span className="text-red-400">autonomous, hyper-efficient electric vehicles</span>. Our deeply knowledgeable, interdisciplinary team operates at the pace of a startup to consistently deliver industry-grade vehicles.</p>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:min-h-[420px] lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="relative min-h-[320px] min-w-0 overflow-hidden border border-red-900/70 bg-gray-950 shadow-xl lg:h-full">
            <Image src="/full-team.jpg" alt="Cornell Electric Vehicles full team" fill className="object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="flex min-w-0 flex-col border border-red-900/70 bg-gray-950 p-8 shadow-xl lg:h-full">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-3xl font-bold text-red-400">What Sets Us Apart</h3>
              <div className="flex gap-2">
                <button type="button" aria-label="Previous difference" onClick={() => setActiveFeature((activeFeature + features.length - 1) % features.length)} className="border border-gray-700 px-3 py-2 text-white transition-colors hover:border-red-500 hover:text-red-400">&larr;</button>
                <button type="button" aria-label="Next difference" onClick={() => setActiveFeature((activeFeature + 1) % features.length)} className="border border-gray-700 px-3 py-2 text-white transition-colors hover:border-red-500 hover:text-red-400">&rarr;</button>
              </div>
            </div>
            <div className="mt-8 flex gap-2" role="tablist" aria-label="CEV differences">
              {features.map((item, index) => (
                <button key={item.title} type="button" role="tab" aria-selected={activeFeature === index} onClick={() => setActiveFeature(index)} className={`min-w-10 border px-3 py-2 text-sm font-bold transition-colors ${activeFeature === index ? 'border-red-500 bg-red-600 text-white' : 'border-gray-700 bg-gray-900 text-gray-400 hover:border-red-400 hover:text-white'}`} aria-label={`Show ${item.title}`}>
                  {String(index + 1).padStart(2, '0')}
                </button>
              ))}
            </div>
            <motion.div key={feature.title} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }} className="flex flex-1 flex-col justify-center">
              <h4 className="mb-4 text-2xl font-bold text-white">{feature.title}</h4>
              <p className="text-lg leading-relaxed text-gray-400">{feature.description}</p>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
