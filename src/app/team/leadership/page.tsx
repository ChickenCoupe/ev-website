'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, Mail, Linkedin } from 'lucide-react';

// Leadership team data
const leadershipTeam = [
  {
    name: 'Selena Yao',
    position: 'Co-Project Manager',
    major: 'ILR',
    year: "'25",
    image: '/team/selena-yao.webp',
    bio: 'Leading CEV\'s strategic vision and coordinating cross-functional team efforts to deliver industry-grade vehicles.'
  },
  {
    name: 'Tyler Wisniewski',
    position: 'Co-Project Manager',
    major: 'Computer Science',
    year: "'26",
    image: '/team/tyler-wisniewski.webp',
    bio: 'Co-leading the team\'s mechanical and engineering efforts for next-generation electric vehicles.'
  },
  {
    name: 'Daniela Tran',
    position: 'Secretary',
    major: 'Economics & Computer Science',
    year: "'25",
    image: '/team/daniela-tran.webp',
    bio: 'Managing team communications and ensuring organizational efficiency across all subteams.'
  },
  {
    name: 'Juan Pelaez',
    position: 'Treasurer',
    major: 'Computer Science',
    year: "'26",
    image: '/team/juan-pelaez.webp',
    bio: 'Overseeing financial planning and resource allocation for optimal team performance.'
  },
  {
    name: 'Lauren Kam',
    position: 'Public Relations Chair',
    major: 'Communication',
    year: "'25",
    image: '/team/lauren-kam.webp',
    bio: 'Building relationships with sponsors and managing external communications.'
  },
  {
    name: 'Rachel Arena',
    position: 'Safety Chair',
    major: 'Applied Engineering Physics',
    year: "'26",
    image: '/team/rachel-arena.webp',
    bio: 'Ensuring all safety protocols and standards are met across team operations.'
  },
  {
    name: 'Serena Duncan',
    position: 'Marketing Chair',
    major: 'Communication',
    year: "'25",
    image: '/team/serena-duncan.webp',
    bio: 'Developing marketing strategies and promoting CEV\'s mission and achievements.'
  }
];

// Team member card component
const TeamMemberCard = ({ member }: { member: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
      <p className="text-blue-600 font-medium mb-1">{member.position}</p>
      <p className="text-gray-600 text-sm mb-3">{member.major} {member.year}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
      <div className="flex space-x-3 mt-4">
        <button className="text-gray-400 hover:text-blue-600 transition-colors">
          <Linkedin className="w-5 h-5" />
        </button>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <Mail className="w-5 h-5" />
        </button>
      </div>
    </div>
  </motion.div>
);

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/team" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Teams
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Leadership Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Our executive board provides guidance, organization, and leadership across all aspects of Cornell Electric Vehicles.
          </motion.p>
        </div>
      </div>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
              <div className="text-gray-600">Leadership Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600">Subteams Managed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Dedicated Leaders</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leaders</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our leadership team guides strategic direction and ensures our continued success in building innovative electric vehicles.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Leadership Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Fostering creative solutions and pushing the boundaries of electric vehicle technology.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">Building strong partnerships across teams and with external stakeholders.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">Maintaining high standards in all aspects of our work and continuous improvement.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
