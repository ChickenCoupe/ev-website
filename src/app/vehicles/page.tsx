'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { Battery, Car, Zap, Gauge, Weight, Users, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Vehicles() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const vehicleImages = [
    {
      src: '/vehicles/uc25_1.png',
      alt: 'Chicken Coupe - Front View',
    },
    {
      src: '/vehicles/uc25_2.avif', // Replace with actual side view image path
      alt: 'Chicken Coupe - Side View',
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicleImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicleImages.length) % vehicleImages.length)
  }

  const currentVehicle = {
    name: "Chicken Coupe",
    year: "2023",
    category: "Urban Concept",
    specs: [
      { icon: <Weight className="w-6 h-6" />, label: "Weight", value: "75 kg" },
      { icon: <Car className="w-6 h-6" />, label: "Chassis", value: "Carbon Fiber Monocoque" },
      { icon: <Battery className="w-6 h-6" />, label: "Battery", value: "20000 mAH 6S" },
      { icon: <Zap className="w-6 h-6" />, label: "Motor", value: "48V BLDC" },
    ],
    achievements: [
      "5th Place - Shell Eco-Marathon Americas 2025",
      "1st Place - Communications Award",
      "2nd Place - Data & Telemetry Award"
    ]
  }

  const previousVehicles = [
    {
      name: "Cuckoo Caravan",
      year: "2022",
      category: "Prototype",
      image: "/vehicles/pt22_1.avif", // Replace with actual CEV-24 image path
      alt: "Cuckoo Caravan - 2022 Prototype Vehicle"
    },
    {
      name: "Kiwi Cruiser",
      year: "2019",
      category: "Prototype",
      image: "/vehicles/pt_21.avif", // Replace with actual CEV-23 image path
      alt: "Kiwi Cruiser - 2019 Prototype Vehicle"
    },
    {
      name: "CRR18",
      year: "2018",
      category: "Prototype",
      image: "/vehicles/crr18.avif", // Replace with actual CEV-22 image path
      alt: "CRR18 - 2018 Prototype Vehicle"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
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
              {currentVehicle.name}
            </h2>
            <p className="text-xl text-gray-300">{currentVehicle.year} {currentVehicle.category}</p>
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
              {/* Image Carousel */}
              <div className="relative aspect-video rounded-2xl shadow-2xl overflow-hidden bg-[#191717]">
                <Image
                  src={vehicleImages[currentImageIndex].src}
                  alt={vehicleImages[currentImageIndex].alt}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Dots Indicator */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {vehicleImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-white' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
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
              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Specifications</h3>
                <div className="space-y-4">
                  {currentVehicle.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center gap-4">
                      <div className="bg-red-900 p-2 rounded-lg text-red-400">
                        {spec.icon}
                      </div>
                      <div>
                        <span className="font-semibold text-white">{spec.label}:</span>
                        <span className="text-gray-300 ml-2">{spec.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">2025 Achievements</h3>
                <ul className="space-y-2">
                  {currentVehicle.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Previous Vehicles */}
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
              Our Legacy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                  <div className="relative aspect-video rounded-2xl shadow-lg overflow-hidden bg-gray-800 flex items-center justify-center">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-3xl font-bold text-white mb-2">{vehicle.name}</h3>
                  <p className="text-red-400 font-semibold mb-4">{vehicle.year}</p>
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
