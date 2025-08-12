'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowLeft, Battery, Zap, Gauge, Weight, Users } from 'lucide-react'

export default function Vehicles() {
  const currentVehicle = {
    name: "CEV-25",
    year: "2025",
    category: "Urban Concept",
    description: "Our latest electric vehicle designed for maximum efficiency and urban mobility. Features cutting-edge autonomous capabilities and record-breaking energy efficiency.",
    specs: [
      { icon: <Battery className="w-6 h-6" />, label: "Battery", value: "48V Lithium-ion" },
      { icon: <Zap className="w-6 h-6" />, label: "Motor", value: "10kW BLDC" },
      { icon: <Weight className="w-6 h-6" />, label: "Weight", value: "350 kg" },
      { icon: <Gauge className="w-6 h-6" />, label: "Top Speed", value: "65 km/h" },
      { icon: <Users className="w-6 h-6" />, label: "Capacity", value: "1 Driver" },
    ],
    achievements: [
      "5th Place - Shell Eco-Marathon Americas 2025",
      "1st Place - Communications Award",
      "2nd Place - Data & Telemetry Award"
    ]
  }

  const previousVehicles = [
    {
      name: "CEV-24",
      year: "2024",
      category: "Urban Concept",
      description: "Previous generation vehicle that established our reputation for innovation and efficiency.",
      achievements: ["Top 10 Finish - Shell Eco-Marathon Americas 2024"]
    },
    {
      name: "CEV-23",
      year: "2023",
      category: "Prototype",
      description: "Our breakthrough prototype that introduced autonomous features to our vehicle lineup.",
      achievements: ["Innovation Award - Shell Eco-Marathon Americas 2023"]
    },
    {
      name: "CEV-22",
      year: "2022",
      category: "Urban Concept",
      description: "The vehicle that marked our entry into competitive electric vehicle racing.",
      achievements: ["Rookie Team Excellence Award"]
    }
  ]

  const technologies = [
    {
      title: "Autonomous Navigation",
      description: "Level 2 autonomy with advanced sensor fusion and machine learning algorithms for safe urban navigation."
    },
    {
      title: "Energy Management",
      description: "Sophisticated battery management system with regenerative braking and optimal power distribution."
    },
    {
      title: "Aerodynamic Design",
      description: "CFD-optimized body design achieving minimal drag coefficient for maximum efficiency."
    },
    {
      title: "Lightweight Materials",
      description: "Carbon fiber and aluminum construction reducing weight while maintaining structural integrity."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-red-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Vehicles
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Explore our award-winning electric vehicles designed for maximum efficiency, innovation, and performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Vehicle */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {currentVehicle.name}
            </h2>
            <p className="text-xl text-gray-600">{currentVehicle.year} {currentVehicle.category}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Vehicle Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-2xl">
                <div className="w-full h-full flex items-center justify-center text-gray-500 font-semibold text-lg">
                  CEV-25 Vehicle Image
                </div>
              </div>
            </motion.div>

            {/* Vehicle Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {currentVehicle.description}
              </p>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h3>
                <div className="space-y-4">
                  {currentVehicle.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center gap-4">
                      <div className="bg-red-100 p-2 rounded-lg text-red-600">
                        {spec.icon}
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">{spec.label}:</span>
                        <span className="text-gray-600 ml-2">{spec.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2025 Achievements</h3>
                <ul className="space-y-2">
                  {currentVehicle.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
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
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our vehicles incorporate the latest innovations in electric vehicle technology and autonomous systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Vehicles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Legacy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A timeline of innovation showcasing our journey in electric vehicle development.
            </p>
          </motion.div>

          <div className="space-y-8">
            {previousVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-lg">
                    <div className="w-full h-full flex items-center justify-center text-gray-500 font-semibold">
                      {vehicle.name} Image
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                  <p className="text-red-600 font-semibold mb-4">{vehicle.year} {vehicle.category}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{vehicle.description}</p>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Achievements:</h4>
                    <ul className="space-y-1">
                      {vehicle.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Build the Next Vehicle
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our team and help design and build the next generation of award-winning electric vehicles.
            </p>
            <Link
              href="/apply"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all transform hover:scale-105 shadow-lg inline-block"
            >
              Join Our Team
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
