'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Brain, Car, Cpu, Eye } from 'lucide-react';
import Footer from '@/components/Footer'

// Autonomy team data
const autonomyTeam = [
  {
    name: 'Lucas Libshutz',
    position: 'Autonomy Lead',
    major: 'MAE',
    year: '2027',
    image: '/team/lucas-libshutz.jpg'
  },
  {
    name: 'Cam Mezzacane',
    position: 'Autonomy Lead',
    major: 'CS/Math',
    year: '2028',
    image: '/team/cam-mezzacane.jpg'
  },
  {
    name: 'Sophia Tsang',
    position: 'Autonomy Member',
    major: 'CS/ECE',
    year: '2027',
    image: '/team/sophia-tsang.jpg'
  },
  {
    name: 'Ethan Berkowitz',
    position: 'Autonomy Member',
    major: 'ECE/CS',
    year: '2029',
    image: '/team/ethan-berkowitz.jpg'
  },
  {
    name: 'Jaiden Grimminck',
    position: 'Autonomy Member',
    major: 'CS',
    year: '2029',
    image: '/team/jaiden-grimminck.jpg'
  },
  {
    name: 'Smriti Kumar',
    position: 'Autonomy Member',
    major: 'CS/ECE',
    year: '2029',
    image: '/team/smriti-kumar.jpg'
  },
  {
    name: 'Utku Melemetci',
    position: 'Senior Advisor',
    major: 'CS',
    year: '2027',
    image: '/team/utku-melemetci.jpg'
  },
  {
    name: 'Ishaan Parikh',
    position: 'Autonomy Member',
    major: 'ECE',
    year: '2029',
    image: '/team/ishaan-parikh.jpg'
  },
  {
    name: 'Surya Chandaskaran',
    position: 'Autonomy Member',
    major: 'CS/ORIE',
    year: '2029',
    image: '/team/placeholder.svg'
  },
  {
    name: 'Sidharth Rao',
    position: 'Senior Advisor',
    major: 'CS/ECE',
    year: '2027',
    image: '/team/sidharth-rao.jpg'
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

const autonomyLeads = sortTeamMembers(autonomyTeam.filter((member) => member.position.includes('Lead')));
const autonomyRegularMembers = autonomyTeam.filter((member) => !member.position.includes('Lead') && !member.position.includes('Advisor'));
const autonomyAdvisors = autonomyTeam.filter((member) => member.position.includes('Advisor'));
const autonomyMembers = sortTeamMembers(autonomyRegularMembers);
const seniorAdvisors = sortTeamMembers(autonomyAdvisors);

// Team member card component
const TeamMemberCard = ({ member, index }: { member: typeof autonomyTeam[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
    className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700 w-72"
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
      <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
      <p className="text-red-400 font-semibold mb-1">{member.position}</p>
      <p className="text-gray-300">{member.major} {member.year}</p>
  </div>
  </motion.div>
);

export default function AutonomyTeam() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative overflow-hidden text-white">
        <Image src="/team/groups/autonomy.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        {/* Header */}
        <section className="relative z-10 flex min-h-[420px] items-center py-20 pt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold">Autonomy Team</h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-red-100 max-w-3xl mx-auto"
            >
              We develop autonomous driving systems, computer vision, and AI algorithms that enable our vehicles to navigate intelligently.
            </motion.p>
          </div>
        </section>

      </div>

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
              <div className="bg-red-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-red-400" />
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
              <div className="bg-red-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-red-400" />
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
              <div className="bg-red-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-red-400" />
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
              <div className="bg-red-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-red-400" />
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
              Autonomy Leads
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {autonomyLeads.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Members</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {autonomyMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index + autonomyLeads.length} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 mb-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Senior Advisors</h3>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {seniorAdvisors.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index + autonomyLeads.length + autonomyMembers.length} />
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
