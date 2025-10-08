'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import Footer from '@/components/Footer'

// Leadership team data
const leadershipTeam = [
  {
    name: 'Selena Yao',
    position: 'Full Team Lead',
    major: 'MAE',
    year: "'26",
    image: '/team/selena-yao.jpg',
    email: 'ssy37@cornell.edu', // Replace with actual email
    linkedin: 'https://linkedin.com/in/selena-yao', // Replace with actual LinkedIn
  },
  {
    name: 'Kelvin Resch',
    position: 'Full Team Lead',
    major: 'ECE',
    year: "'26",
    image: '/team/kelvin-resch.jpg',
    email: 'kr562@cornell.edu', // Replace with actual email
    linkedin: 'https://linkedin.com/in/kelvin-resch', // Replace with actual LinkedIn
  },
  {
    name: 'Leonora Phillips',
    position: 'Full Team Lead',
    major: 'ORIE',
    year: "'26",
    image: '/team/leonora-phillips.jpg',
    email: 'lkp42@cornell.edu', // Replace with actual email
    linkedin: 'https://www.linkedin.com/in/leonora-phillips-86b84a250/'
  },
  {
    name: 'Rachel Arena',
    position: 'Electrical Lead',
    major: 'ECE',
    year: "'26",
    image: '/team/rachel-arena.jpg',
    email: 'rga47@cornell.edu', // Replace with actual email
    linkedin: 'https://linkedin.com/in/rachelarena', // Replace with actual LinkedIn
  },
  {
    name: 'Edward Lee',
    position: 'Electrical Lead',
    major: 'ECE',
    year: "'26",
    image: '/team/edward-lee.jpg',
    email: 'ehl54@cornell.edu', // Replace with actual email
    linkedin: 'https://linkedin.com/in/edwardhyungjunlee', // Replace with actual LinkedIn
  },
  {
    name: 'Mackemey Munion',
    position: 'Mechanical Lead',
    major: 'MAE',
    year: "'26",
    image: '/team/mackemey-munion.jpg',
    email: 'mcm239@cornell.edu', // Replace with actual email
    linkedin: 'https://www.linkedin.com/in/mackemey-munion-b23878211/', // Replace with actual LinkedIn
  },
  {
    name: 'Jordan Vogel',
    position: 'Mechanical Lead',
    major: 'MAE',
    year: "'27",
    image: '/team/jordan-vogel.jpg',
    email: 'jv457@cornell.edu', // Replace with actual email
    linkedin: 'https://www.linkedin.com/in/jordan-vogel-301927241/', // Replace with actual LinkedIn
  },
  {
    name: 'Daniel Sorokin',
    position: 'Data A&A Lead',
    major: 'CS',
    year: "'27",
    image: '/team/daniel-sorokin.jpg',
    email: 'dhs263@cornell.edu', // Replace with actual email
    linkedin: 'https://www.linkedin.com/in/daniel-sorokin-6a391328b/', // Replace with actual LinkedIn
  },
  {
    name: 'Ruth Taddesse',
    position: 'Data A&A Lead',
    major: 'CS',
    year: "'27",
    image: '/team/ruth-taddesse.jpg',
    email: 'ryt5@cornell.edu', // Replace with actual email
    linkedin: 'https://linkedin.com/in/ruth-taddesse', // Replace with actual LinkedIn
  },
  {
    name: 'Tatum McLaughlin',
    position: 'Operations Lead',
    major: 'ORIE',
    year: "'27",
    image: '/team/tatum-mclaughlin.jpg',
    email: 'tmm266@cornell.edu', // Replace with actual email
    linkedin: 'https://linkedin.com/in/tatum-mclaughlin', // Replace with actual LinkedIn
  },
  {
    name: 'Sidharth Rao',
    position: 'Autonomy Lead',
    major: 'CS',
    year: "'27",
    image: '/team/sidharth-rao.jpg',
    email: 'smr353@cornell.edu', // Replace with actual email
    linkedin: 'https://linkedin.com/in/sidharthmrao', // Replace with actual LinkedIn
  },
  {
    name: 'Erica Jiang',
    position: 'Autonomy Lead',
    major: 'ECE',
    year: "'28",
    image: '/team/erica-jiang.png',
    email: 'ej289@cornell.edu', // Replace with actual email
    linkedin: 'https://www.linkedin.com/in/erica-jiang-321322287/', // Replace with actual LinkedIn
  },
 
];

// Team member card component
const TeamMemberCard = ({ member, index }: { member: typeof leadershipTeam[0], index: number }) => (
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
      <p className="text-red-400 font-medium mb-1">{member.position}</p>
      <p className="text-gray-300 text-sm mb-3">{member.major} {member.year}</p>
      <div className="flex space-x-3 mt-4">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-400 transition-colors"
            aria-label={`${member.name}'s LinkedIn profile`}
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="text-gray-400 hover:text-gray-300 transition-colors"
            aria-label={`Email ${member.name}`}
          >
            <Mail className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-16 pt-24 text-white">
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
            className="text-xl text-red-100 max-w-3xl mx-auto"
          >
            Our executive board provides guidance, organization, and leadership across all aspects of Cornell Electric Vehicles.
          </motion.p>
        </div>
      </div>

      {/* Stats */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">7</div>
              <div className="text-gray-300">Leadership Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">6</div>
              <div className="text-gray-300">Subteams Managed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
              <div className="text-gray-300">Dedicated Leaders</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Leaders</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our leadership team guides strategic direction and ensures our continued success in building innovative electric vehicles.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      {/* <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Our Leadership Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">Fostering creative solutions and pushing the boundaries of electric vehicle technology.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-gray-300">Building strong partnerships across teams and with external stakeholders.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-300">Maintaining high standards in all aspects of our work and continuous improvement.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
      <Footer/>
    </div>
  );
}
