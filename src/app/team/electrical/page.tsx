'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap, Battery, Cpu, Shield } from 'lucide-react';

// Electrical team data
//! Need to add current sophomores
const electricalTeam = [
  {
    name: 'Rachel Arena',
    position: 'Electrical Co-Lead',
    major: 'ECE',
    year: '2026',
    image: '/team/rachel-arena.jpg'
  },
  {
    name: 'Edward Lee',
    position: 'Electrical Co-Lead',
    major: 'ECE',
    year: '2026',
    image: '/team/edward-lee.jpg'
  },
  {
    name: 'Micah Fisher',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2026',
    image: '/team/micah-fisher.jpg'
  },
  {
    name: 'Guillaume Ah-Hot',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2027',
    image: '/team/guillaume-ah-hot.jpg'
  },
  {
    name: 'Nimish Goel',
    position: 'Electrical Member',
    major: 'ECE/CS',
    year: '2027',
    image: '/team/nimish-goel.jpg'
  },
  {
    name: 'Arnav Shah',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2026',
    image: '/team/arnav-shah.jpg'
  },
  {
    name: 'Jenny Lee',
    position: 'Electrical Member',
    major: 'ECE/CS',
    year: '2027',
    image: '/team/jenny-lee.jpg'
  }
]

// Team member card component
const TeamMemberCard = ({ member, index }: { member: typeof electricalTeam[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
    className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700"
  >
    <div className="aspect-square relative">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
      <p className="text-yellow-400 font-medium mb-1">{member.position}</p>
      <p className="text-gray-300 text-sm">{member.major} {member.year}</p>
    </div>
  </motion.div>
);

export default function ElectricalPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-16 pt-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <Zap className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Electrical Team</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-yellow-100 max-w-3xl mx-auto"
          >
            We design and implement power systems, motor controllers, and electronic components that bring our electric vehicles to life.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">14</div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">3</div>
              <div className="text-gray-300">Major Systems</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">400V+</div>
              <div className="text-gray-300">System Voltage</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Safety Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The electrical team is responsible for all electronic systems that power and control our vehicles.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Power Systems</h3>
              <p className="text-gray-300">Design battery management systems and power distribution networks.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Motor Control</h3>
              <p className="text-gray-300">Develop motor controllers and drive systems for optimal performance.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Safety Systems</h3>
              <p className="text-gray-300">Implement safety monitoring and protection circuits.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Data Acquisition</h3>
              <p className="text-gray-300">Create real-time monitoring and telemetry systems.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our electrical engineers design and implement the power systems, motor controllers, and electronic components.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {electricalTeam.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">MATLAB/Simulink</div>
                <div className="text-gray-600">Control Systems</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">Altium Designer</div>
                <div className="text-gray-600">PCB Design</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">STM32</div>
                <div className="text-gray-600">Microcontrollers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">CAN Bus</div>
                <div className="text-gray-600">Communication</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
