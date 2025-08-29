'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Brain, Car, Cpu, Eye } from 'lucide-react';

// Autonomy team data
const autonomyTeam = [
  {
    name: 'Jason Klein',
    position: 'Autonomy Lead',
    major: 'CS/Math',
    year: '2026',
    image: '/team/jason-klein.jpg'
  },
  {
    name: 'Sidharth Rao',
    position: 'Autonomy Lead',
    major: 'CS/ECE',
    year: '2027',
    image: '/team/sidharth-rao.jpg'
  },
  {
    name: 'Eric Marchetti',
    position: 'Autonomy Member',
    major: 'CS',
    year: '2026',
    image: '/team/eric-marchetti.jpg'
  },
  {
    name: 'Zachary Chosed',
    position: 'Autonomy Member',
    major: 'CS',
    year: '2025',
    image: '/team/zachary-chosed.jpg'
  },
  {
    name: 'Sophia Tsang',
    position: 'Autonomy Member',
    major: 'CS/ECE',
    year: '2027',
    image: '/team/placeholder.jpg'
  },
  {
    name: 'Myles Pasetsky',
    position: 'Autonomy Member',
    major: 'ECE',
    year: '2027',
    image: '/team/myles-pasetsky.jpg'
  },
  {
    name: 'Utku Melemetci',
    position: 'Autonomy Member',
    major: 'CS',
    year: '2027',
    image: '/team/utku-melemetci.jpg'
  },
  {
    name: 'Zephan Sanghani',
    position: 'Autonomy Member',
    major: 'CS',
    year: '2027',
    image: '/team/zephan-sanghani.jpg'
  },
  {
    name: 'Sameer Mehta',
    position: 'Autonomy Member',
    major: 'CS',
    year: '2028',
    image: '/team/placeholder.jpg'
  },
  {
    name: 'Erica Jiang',
    position: 'Autonomy Member',
    major: 'CS/ECE',
    year: '2028',
    image: '/team/placeholder.jpg'
  },
  {
    name: 'Jess Wang',
    position: 'Autonomy Member',
    major: 'CS',
    year: '2028',
    image: '/team/placeholder.jpg'
  },
  {
    name: 'Ibrahim Ahmed',
    position: 'Autonomy Member',
    major: 'ECE/CS',
    year: '2028',
    image: '/team/placeholder.jpg'
  },
  {
    name: 'Cam Mazzacane',
    position: 'Autonomy Member',
    major: 'CS/Math',
    year: '2028',
    image: '/team/placeholder.jpg'
  }
]

// Team member card component
const TeamMemberCard = ({ member }: { member: typeof autonomyTeam[0] }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
  >
    <div className="aspect-square w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
      <Image 
        src={member.image} 
        alt={member.name}
        width={128}
        height={128}
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-xl font-bold text-white text-center mb-2">{member.name}</h3>
    <p className="text-blue-400 font-semibold text-center mb-1">{member.position}</p>
    <p className="text-gray-300 text-center mb-1">{member.major}</p>
    <p className="text-gray-400 text-sm text-center">{member.year}</p>
  </motion.div>
);

export default function AutonomyTeam() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 pt-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <Brain className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Autonomy Team</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            We develop autonomous driving systems, computer vision, and AI algorithms that enable our vehicles to navigate intelligently.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">13</div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">Level 2</div>
              <div className="text-gray-300">Autonomy Target</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">AI/ML</div>
              <div className="text-gray-300">Core Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">Vision</div>
              <div className="text-gray-300">Primary Sensor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We Do
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Computer Vision</h3>
              <p className="text-gray-300">Object detection and recognition for safe navigation</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Machine Learning</h3>
              <p className="text-gray-300">AI algorithms for intelligent decision making</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Path Planning</h3>
              <p className="text-gray-300">Optimal route calculation and obstacle avoidance</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-time Processing</h3>
              <p className="text-gray-300">High-performance computing for instant responses</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300">
              Leading the future of autonomous vehicle technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                          {autonomyTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
