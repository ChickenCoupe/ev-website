'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Excited To <span className="text-red-600"> Join Us?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Be part of the next generation of automotive innovation. Join Cornell Electric Vehicles 
            and help build the future of sustainable transportation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            href="/apply"
            className="group text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center gap-3"
            style={{ backgroundColor: '#b31b1b' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a11717'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#b31b1b'}
          >
            Apply Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/vehicles"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-xl font-semibold transition-all transform hover:scale-105"
          >
            View Our Vehicles
          </Link>
        </motion.div>

        {/* YouTube Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Check out this edit of CEV at Shell Eco Marathon 2025!
            </h3>
            <div className="relative aspect-video rounded-2xl shadow-2xl overflow-hidden bg-gray-800">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/2di7Gq69jUw"
                title="CEV at Shell Eco Marathon 2023"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
