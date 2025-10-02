'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-red-900 to-gray-800 text-white overflow-hidden pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gray-900" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <div className="pt-8 mb-8">
            <Image 
              src="/fulllight.png"
              alt="Cornell Electric Vehicles Project Team"
              width={800}
              height={300}
              className="mx-auto w-full max-w-4xl h-auto"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 -mt-15"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="block text-red-400">BUILD THE</span>
            <span className="block text-white">FUTURE.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cornell&apos;s foremost project team dedicated to building autonomous, hyper-efficient electric vehicles. 
            Operating at the pace of a startup, producing industry-grade vehicles that compete at the highest levels.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            href="/apply"
            className="text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: '#b31b1b'}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a11717'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#b31b1b'}
          >
            Apply to CEV
          </Link>
          <Link
            href="/team"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
          >
            Meet Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
