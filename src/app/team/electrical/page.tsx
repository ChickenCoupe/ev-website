'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap, Battery, Cpu, Shield } from 'lucide-react';
import Footer from '@/components/Footer'

// Electrical team data
const electricalTeam = [
  {
    name: 'Erica Jiang',
    position: 'Electrical Subteam Lead',
    major: 'ECE',
    year: '2028',
    image: '/team/erica-jiang.jpg'
  },
  {
    name: 'Kellen Yu',
    position: 'Electrical Subteam Lead',
    major: 'ECE',
    year: '2029',
    image: '/team/kellen-yu.jpg'
  },

  {
    name: 'Sophia Chen',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2028',
    image: '/team/sophia-chen.jpg'
  },
  {
    name: 'Micah Lai',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2029',
    image: '/team/micah-lai.jpg'
  },
  {
    name: 'Aleena Xiao',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2029',
    image: '/team/aleena-xiao.jpg'
  },
  {
    name: 'Michael Robbins',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2028',
    image: '/team/michael-robbins.jpg'
  },
  {
    name: 'Audrey Cheng',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2029',
    image: '/team/audrey-cheng.jpg'
  },
  {
    name: 'Joyce Lin',
    position: 'Electrical Member',
    major: 'CS/ECE',
    year: '2029',
    image: '/team/joyce-lin.jpg'
  },
  {
    name: 'Thomas Xin',
    position: 'Electrical Member',
    major: 'CS/ECE',
    year: '2029',
    image: '/team/thomas-xin.jpg'
  },
  {
    name: 'Aariv Mody',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2028',
    image: '/team/aariv-mody.jpg'
  },
  {
    name: 'Kaan Akan',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2029',
    image: '/team/kaan-akan.jpg'
  },
  {
    name: 'Elaine Cao',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2028',
    image: '/team/elaine-cao.jpg'
  },
  {
    name: 'Lucia Liu',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2029',
    image: '/team/placeholder.svg'
  },
  {
    name: 'Nora Kingwell',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2028',
    image: '/team/nora-kingwell.jpg'
  },
  {
    name: 'Gabe Gil',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2029',
    image: '/team/placeholder.svg'
  },
]

const sortTeamMembers = <T extends { name: string; year: string }>(members: T[]) =>
  [...members].sort((a, b) => {
    const yearComparison = Number(a.year) - Number(b.year);
    if (yearComparison !== 0) return yearComparison;

    const aLastName = a.name.split(' ').at(-1) ?? a.name;
    const bLastName = b.name.split(' ').at(-1) ?? b.name;
    return aLastName.localeCompare(bLastName);
  });

const electricalLeads = sortTeamMembers(electricalTeam.filter((member) => member.position.includes('Lead')));
const electricalMembers = sortTeamMembers(electricalTeam.filter((member) => !member.position.includes('Lead')));

// Team member card component
const TeamMemberCard = ({ member, index }: { member: typeof electricalTeam[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
    className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700 w-72"
    viewport={{ once: true }}
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
      <p className="text-red-400 font-medium mb-1">{member.position}</p>
      <p className="text-gray-300 text-sm">{member.major} {member.year}</p>
    </div>
  </motion.div>
);

export default function ElectricalPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative overflow-hidden text-white">
        <Image src="/team/groups/electrical.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        {/* Header */}
        <section className="relative z-10 flex min-h-[420px] items-center py-20 pt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl font-bold">Electrical Team</h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-red-100 max-w-3xl mx-auto"
              viewport={{ once: true }}
            >
              We design and implement power systems, motor controllers, and electronic components that bring our electric vehicles to life.
            </motion.p>
          </div>
        </section>

      </div>

      {/* Responsibilities */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
            viewport={{ once: true }}
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
            viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Power Systems</h3>
              <p className="text-gray-300">Design battery management systems and power distribution networks.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Motor Control</h3>
              <p className="text-gray-300">Develop motor controllers and drive systems for optimal performance.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Safety Systems</h3>
              <p className="text-gray-300">Implement safety monitoring and protection circuits.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Data Acquisition</h3>
              <p className="text-gray-300">Create real-time monitoring and telemetry systems.</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Technologies */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-100 mb-8">Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">MATLAB/Simulink</div>
                <div className="text-gray-200">Control Systems</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">Altium Designer</div>
                <div className="text-gray-200">PCB Design</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">STM32</div>
                <div className="text-gray-200">Microcontrollers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">CAN Bus</div>
                <div className="text-gray-200">Communication</div>
              </div>
            </div>
          </motion.div>
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
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Electrical Leads</h2>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {electricalLeads.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Members</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {electricalMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index + electricalLeads.length} />
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
