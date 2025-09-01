'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { Briefcase, GraduationCap, Users, Calendar } from 'lucide-react'

export default function Alumni() {
  const alumniData = [
    {
      name: "Sarah Chen",
      year: "2023",
      degree: "Mechanical Engineering",
      currentPosition: "Tesla - Powertrain Engineer",
      team: "Mechanical",
      achievements: ["Led chassis design for CEV-23", "Shell Eco-Marathon Innovation Award"]
    },
    {
      name: "Michael Rodriguez",
      year: "2022",
      degree: "Electrical Engineering", 
      currentPosition: "Rivian - Battery Systems Engineer",
      team: "Electrical",
      achievements: ["Developed motor control systems", "Improved efficiency by 15%"]
    },
    {
      name: "Emily Johnson",
      year: "2024",
      degree: "Computer Science",
      currentPosition: "Waymo - Autonomous Systems Engineer",
      team: "Software",
      achievements: ["Implemented autonomous navigation", "Machine learning optimization"]
    },
    {
      name: "David Park",
      year: "2023",
      degree: "Mechanical Engineering",
      currentPosition: "Ford - EV Development Team",
      team: "Mechanical",
      achievements: ["Aerodynamics optimization", "Weight reduction innovations"]
    }
  ]

  const stats = [
    { icon: <GraduationCap className="w-8 h-8" />, label: "Alumni", value: "150+" },
    { icon: <Briefcase className="w-8 h-8" />, label: "Industry Leaders", value: "85%" },
    { icon: <Users className="w-8 h-8" />, label: "Fortune 500", value: "60%" },
    { icon: <Calendar className="w-8 h-8" />, label: "Years Active", value: "8+" }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              CEV Alumni Network
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Our graduates are leading innovation in the electric vehicle industry, 
              autonomous systems, and sustainable technology worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Alumni</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet some of our outstanding graduates who are making an impact in the industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {alumniData.map((alum, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{alum.name}</h3>
                    <p className="text-red-400 font-semibold">Class of {alum.year}</p>
                    <p className="text-gray-300">{alum.degree}</p>
                  </div>
                  <div className="bg-red-900 text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                    {alum.team}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Briefcase className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-white font-medium">Current Position</span>
                  </div>
                  <p className="text-gray-300 ml-6">{alum.currentPosition}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Key Achievements</h4>
                  <ul className="space-y-1">
                    {alum.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-300 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Alumni Network
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Are you a CEV alumni? Connect with us and stay involved with the team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:alumni@cornellelectricvehicles.com"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Contact Alumni Relations
              </a>
              <Link
                href="/team"
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Meet Current Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
