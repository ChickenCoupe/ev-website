'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 10, suffix: '+', label: 'majors' },
  { value: 65, suffix: '+', label: 'members' },
  { value: 5, suffix: '', label: 'subteams' },
  { value: 50, suffix: '%', label: 'women' },
]

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hasStarted, setHasStarted] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasStarted(true)
        observer.disconnect()
      }
    }, { threshold: 0.35 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted) return

    const startTime = performance.now()
    const duration = 1600
    let animationFrame = 0

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      setCounts(stats.map((stat) => Math.round(stat.value * easedProgress)))
      if (progress < 1) animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [hasStarted, stats])

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 text-white">
      <Image
        src="/comp-moving-car.JPG"
        alt="Cornell Electric Vehicles car at competition"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            CEV by the Numbers
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Our diverse, interdisciplinary team brings together talent from across Cornell University
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-50 mb-2">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-xl text-red-100 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
