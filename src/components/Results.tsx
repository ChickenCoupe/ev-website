'use client'

import { motion } from 'framer-motion'
import { Trophy, Database, MessageCircle } from 'lucide-react'

export default function Results() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            2025 Shell Eco-Marathon Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This year, our team achieved impressive results at the Shell Eco-Marathon Americas, 
            securing multiple awards and solidifying our status as one of the competition's leading teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-yellow-500"
          >
            <div className="flex items-center mb-6">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <Trophy className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">5th Place</h3>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Urban Concept</h4>
            <p className="text-gray-600 leading-relaxed">
              Efficient city vehicle design powered by battery electric technology for sustainable urban 
              transportation solutions. Passed all inspections and had 3 successful runs.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">2nd Place</h3>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Data & Telemetry</h4>
            <p className="text-gray-600 leading-relaxed">
              Recognizes excellence in vehicle data collection, analysis, and implementation 
              to optimize performance and efficiency.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500"
          >
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <MessageCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">1st Place</h3>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Communications</h4>
            <p className="text-gray-600 leading-relaxed">
              Honors exceptional outreach, branding, and public engagement strategies 
              promoting sustainable energy innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
