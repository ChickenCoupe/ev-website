'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Zap, Wrench, Brain, Database, Settings } from 'lucide-react';

const subteams = [
  {
    name: 'Leadership',
    description: 'Our executive board provides guidance, organization, and leadership across all aspects of our team.',
    icon: Users,
    href: '/team/leadership',
    color: 'from-blue-500 to-blue-600',
    members: 7
  },
  {
    name: 'Electrical',
    description: 'Design and implement power systems, motor controllers, and electronic components for our vehicles.',
    icon: Zap,
    href: '/team/electrical',
    color: 'from-yellow-500 to-yellow-600',
    members: 14
  },
  {
    name: 'Mechanical',
    description: 'Engineer the chassis, aerodynamics, and mechanical systems that make our vehicles efficient.',
    icon: Wrench,
    href: '/team/mechanical',
    color: 'from-green-500 to-green-600',
    members: 20
  },
  {
    name: 'Autonomy',
    description: 'Develop autonomous driving capabilities and intelligent navigation systems.',
    icon: Brain,
    href: '/team/autonomy',
    color: 'from-purple-500 to-purple-600',
    members: 12
  },
  {
    name: 'Data A&A',
    description: 'Analyze performance data and develop algorithms for optimization and insights.',
    icon: Database,
    href: '/team/data-aa',
    color: 'from-indigo-500 to-indigo-600',
    members: 5
  },
  {
    name: 'Operations',
    description: 'Manage logistics, outreach, and day-to-day operations of the team.',
    icon: Settings,
    href: '/team/operations',
    color: 'from-red-500 to-red-600',
    members: 4
  }
];

const SubteamCard = ({ subteam, index }: { subteam: typeof subteams[0], index: number }) => {
  const IconComponent = subteam.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={subteam.href} className="block">
        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700">
          <div className={`h-2 bg-gradient-to-r ${subteam.color}`}></div>
          <div className="p-8">
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${subteam.color} mr-4`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors">
                  {subteam.name}
                </h3>
                <p className="text-sm text-gray-400">{subteam.members} members</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              {subteam.description}
            </p>
            <div className="flex items-center text-red-400 font-medium group-hover:text-red-300 transition-colors">
              View Team
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-900 py-16 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Meet the dedicated students behind Cornell Electric Vehicles, working together across multiple specialized teams to build the future of sustainable transportation.
          </motion.p>
        </div>
      </div>

      {/* Stats */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">62</div>
              <div className="text-gray-300">Total Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">6</div>
              <div className="text-gray-300">Specialized Teams</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-gray-300">Academic Majors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Subteams Grid */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Subteams</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Each team brings unique expertise and skills to create innovative, efficient electric vehicles.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subteams.map((subteam, index) => (
              <SubteamCard key={index} subteam={subteam} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
