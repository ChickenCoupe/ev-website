'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Zap, Wrench, Brain, Database, Settings } from 'lucide-react';
import Footer from '@/components/Footer';

const subteams = [
  {
    name: 'Leadership',
    description: 'Our executive board provides guidance, organization, and leadership across all aspects of our team.',
    icon: Users,
    href: '/team/leadership',
    color: 'from-red-500 to-red-600',
  },
  {
    name: 'Mechanical',
    description: 'Engineer the chassis, aerodynamics, and mechanical systems that make our vehicles efficient.',
    icon: Wrench,
    href: '/team/mechanical',
    color: 'from-red-500 to-red-600',
  },
  {
    name: 'Electrical',
    description: 'Design and implement power systems, motor controllers, and electronic components for our vehicles.',
    icon: Zap,
    href: '/team/electrical',
    color: 'from-red-500 to-red-600',
  },
  {
    name: 'Telemetry',
    description: 'Analyze performance data and develop algorithms for optimization and insights.',
    icon: Database,
    href: '/team/telemetry',
    color: 'from-red-500 to-red-600',
  },
  {
    name: 'Autonomy',
    description: 'Develop autonomous driving capabilities and intelligent navigation systems.',
    icon: Brain,
    href: '/team/autonomy',
    color: 'from-red-500 to-red-600',
  },
  {
    name: 'Operations',
    description: 'Manage logistics, outreach, and day-to-day operations of the team.',
    icon: Settings,
    href: '/team/operations',
    color: 'from-red-500 to-red-600',
  }
];

const subteamPhotos: Record<string, string> = {
  Leadership: '/team/groups/leads.jpg',
  Mechanical: '/team/groups/mechanical.jpg',
  Electrical: '/team/groups/electrical.jpg',
  Telemetry: '/team/groups/telemetry.jpg',
  Autonomy: '/team/groups/autonomy.jpg',
  Operations: '/team/groups/operations.jpg',
};

const SubteamCard = ({ subteam, index }: { subteam: typeof subteams[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={subteam.href} className="block">
        <div className="group relative overflow-hidden border border-red-900/70 bg-gray-950 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-2xl">
          <div className="absolute left-0 top-0 z-20 h-1 w-full bg-red-600 transition-all group-hover:h-2"></div>
          <Image src={subteamPhotos[subteam.name]} alt="" fill className="object-cover opacity-10" />
          <div className="relative z-10 p-8 text-left">
            <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-red-400">
              {subteam.name}
            </h3>
            <p className="mb-6 leading-relaxed text-gray-400">
              {subteam.description}
            </p>
            <div className="learn-more flex items-center text-red-400 font-semibold transition-colors group-hover:text-red-300">
              Learn More 
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
      <div className="relative flex min-h-[420px] items-center overflow-hidden py-20 pt-28 text-white">
        <Image src="/full-team-cropped.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
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
              <div className="text-4xl font-bold text-red-600 mb-2">68</div>
              <div className="text-gray-300">Total Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">6</div>
              <div className="text-gray-300">Specialized Teams</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">10+</div>
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
      <Footer />
    </div>
  );
}
