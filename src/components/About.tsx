'use client'

import { motion } from 'framer-motion'
import { Zap, Brain, Cog } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const features = [
    {
      icon: <Zap className="w-12 h-12 text-red-600" />,
      title: "Industry-Aligned Innovation",
      description: "Aligned with the electrification and autonomy efforts of the modern automotive industry, our members gain essential experience building imminent greener, smarter mobility solutions."
    },
    {
      icon: <Brain className="w-12 h-12 text-red-600" />,
      title: "Cutting-Edge R&D",
      description: "With R&D-oriented projects leveraging emergent technologies from AR to ML and heterogeneous compute, our members are given flexibility and resources to explore several exciting upcoming domains."
    },
    {
      icon: <Cog className="w-12 h-12 text-red-600" />,
      title: "End-to-End Development",
      description: "Between extensive onboarding, extensive in-house manufacturing, and end-to-end development, our members exercise skills associated with every step of the modern design cycle."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Vehicle Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl shadow-2xl overflow-hidden">
              <Image 
                src="/hero-vehicle.jpg" 
                alt="Cornell Electric Vehicles team and vehicle"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Why CEV is Different
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Cornell Electric Vehicles Project Team is the foremost project team at Cornell University 
              dedicated to building autonomous, hyper-efficient electric cars. Our deeply knowledgeable 
              interdisciplinary organization operates at the pace of a startup and has repeatedly produced 
              industry-grade vehicles.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="bg-red-50 p-3 rounded-lg">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Founded section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 py-16 bg-gray-50 rounded-3xl"
        >
          <div className="text-6xl md:text-8xl font-bold text-red-600 mb-4">
            2014
          </div>
          <div className="text-3xl md:text-4xl font-bold text-gray-900">
            FOUNDED
          </div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Over a decade of innovation, excellence, and pushing the boundaries of sustainable transportation
          </p>
        </motion.div>
      </div>
    </section>
  )
}
