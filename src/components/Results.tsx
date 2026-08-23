'use client'

import { motion } from 'framer-motion'
import { Trophy, Car, CloudLightning } from 'lucide-react'

export default function Results() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            2026 Shell Eco-Marathon Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This year, our team achieved impressive results at the Shell Eco-Marathon Americas, 
            securing multiple awards and solidifying our status as one of the competition&apos;s leading teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500"
          >
            <div className="flex items-center mb-6">
              <div className="bg-red-900 p-3 rounded-full mr-4">
                <Car className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">6th Place</h3>
            </div>
            <h4 className="text-xl font-semibold text-gray-200 mb-3">Urban Concept</h4>
            <p className="text-gray-300 leading-relaxed">
              Efficient city vehicle design powered by battery electric technology for sustainable urban 
              transportation solutions. Passed all inspections and had 3 successful runs.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500"
          >
            <div className="flex items-center mb-6">
              <div className="bg-red-900 p-3 rounded-full mr-4">
                <Trophy className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">1st Place</h3>
            </div>
            <h4 className="text-xl font-semibold text-gray-200 mb-3">Data & Telemetry</h4>
            <p className="text-gray-300 leading-relaxed">
             Recognized for our innovative data collection and optimization strategy. 
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500"
          >
            <div className="flex items-center mb-6">
              <div className="bg-red-900 p-3 rounded-full mr-4">
                <CloudLightning className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">1.8x</h3>
            </div>
            <h4 className="text-xl font-semibold text-gray-200 mb-3">Efficiency Increase</h4>
            <p className="text-gray-300 leading-relaxed">
              The team increased the urban concept&#39;s efficiency to <b>36.98 mi/kWh</b>, almost doubling the previous year&#39;s efficiency.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
