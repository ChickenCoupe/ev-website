'use client'

import { motion } from 'framer-motion'

export default function Stats() {
  const stats = [
    { number: '10+', label: 'majors' },
    { number: '85', label: 'members' },
    { number: '5', label: 'subteams' },
    { number: '50%', label: 'women' },
    { number: '20+', label: 'projects' }
  ]

  return (
    <section className="py-20 bg-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
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
                {stat.number}
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
