'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { Briefcase, GraduationCap, Users, Calendar } from 'lucide-react'

export default function Alumni() {
  const alumniLocations = [
    {
      city: "San Francisco, CA",
      name: "Logan Horowitz",
      company: "University of California, Berkeley"
    },
    {
      city: "San Francisco, CA", 
      name: "Jocelyn Sun",
      company: "Ford"
    },
    {
      city: "San Francisco, CA",
      name: "Kunal Gupta", 
      company: "Wayve"
    },
    {
      city: "San Jose, CA",
      name: "Nicholas Christians",
      company: "Google"
    },
    {
      city: "San Jose, CA",
      name: "Avan Agarwal",
      company: "Amazon"
    },
    {
      city: "Gravesboro, CA",
      name: "Nitya Sharma",
      company: "Lightship"
    },
    {
      city: "Los Angeles, CA",
      name: "Evelyn Hu",
      company: "Harbinger"
    },
    {
      city: "Seattle, WA",
      name: "Vivian Dai",
      company: "Google"
    },
    {
      city: "Coles Corner, WA",
      name: "Raphel Fortuna",
      company: "Microsoft"
    },
    {
      city: "TX",
      name: "Andrew Cai",
      company: "Apple"
    },
    {
      city: "Kansas City, MS",
      name: "Alberto Gutierrez",
      company: "Collins Aerospace"
    },
    {
      city: "IL",
      name: "Alexandra Kung",
      company: "Tableau"
    },
    {
      city: "Chicago, IL",
      name: "Kate Sawin",
      company: "United Airlines"
    },
    {
      city: "Milwaukee, WI",
      name: "Sarah Behringer",
      company: "Eaton"
    },
    {
      city: "Ann Arbor, MI",
      name: "Rachel Mead",
      company: "University of Michigan" 
    },
    {
      city: "Detroit, MI",
      name: "Jamie Cashman",
      company: "General Motors"
    },
    {
      city: "OH",
      name: "Vivek Ivaturi",
      company: "Proctor and Gamble"
    },
    {
      city: "Pittsburgh, PA",
      name: "Charlie Ruan",
      company: "Carnegie Mellon University"
    },
    {
      city: "PA",
      name: "Aaron Peng",
      company: "Aurora"
    },
    {
      city: "Washington DC",
      name: "Steven Kiekel",
      company: "Dwellwell Analytics, Inc."
    },
    {
      city: "Baltimore, MD",
      name: "Hanna Yen",
      company: "Johns Hopkins University"
    },
    {
      city: "FL",
      name: "Bhadra Bejoy",
      company: "Ford Motor Company"  
    },
    {
      city: "Princeton, NJ",
      name: "Emma Farkash",
      company: "Princeton University"
    },
    {
      city: "New York, NY",
      name: "Ashley Miller",
      company: "Columbia University"
    },
    {
      city: "Waterbury, CT",
      name: "Felipe Santamaria",
      company: "ASML"
    },
    {
      city: "Boston, MA",
      name: "Adi Carmel",
      company: "Harvard University",
    },
    {
      city: "Boston, MA",
      name: "David Moy",
      company: "Lexington Medical"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
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
      {/* <section className="py-16 bg-gray-800">
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
      </section> */}

      {/* Alumni World Map */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Alumni Network</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              CEV graduates are making an impact at leading companies across the country and around the world
            </p>
          </motion.div>

          {/* Alumni by City Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumniLocations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{location.city}</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="text-white font-medium">{location.name}</p>
                        <p className="text-gray-300 text-sm">{location.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map Coming Soon Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-gray-800 rounded-xl p-8 border border-gray-700 text-center"
          >
            <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Interactive Map Coming Soon</h3>
                <p className="text-gray-300">We're building an interactive map to showcase our global alumni network</p>
              </div>
            </div>
          </motion.div>
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
