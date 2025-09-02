'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Wrench, Settings, Cog, Wind } from 'lucide-react';
import Footer from '@/components/Footer'

// Mechanical team data organized by subteams
//! Add current sophomores
const mechanicalLeadership = [
  {
    name: 'Mackemey Munion',
    position: 'Mechanical Lead',
    major: 'MAE',
    year: '2026',
    image: '/team/mackemey-munion.jpg'
  },
  {
    name: 'Jordan Vogel',
    position: 'Mechanical Lead',
    major: 'MAE',
    year: '2027',
    image: '/team/jordan-vogel.jpg'
  }
];

const chassisTeam = [
  {
    name: 'Lucas Libshutz',
    position: 'Chassis Subteam Lead',
    major: 'MAE',
    year: '2027',
    image: '/team/lucas-libshutz.jpg'
  },
  {
    name: 'Zach Feldman',
    position: 'Chassis Member',
    major: 'MAE',
    year: '2027',
    image:'/team/zach-feldman.jpg'
  },
  {
    name: 'Serkan Yurday',
    position: 'Chassis Member',
    major: 'MAE',
    year: '2028',
    image: '/team/placeholder.svg'
  },
  {
    name: 'Yohanne Lin',
    position: 'Chassis Member',
    major: 'MAE',
    year: '2028',
    image: '/team/placeholder.svg'
  },
  {
    name: 'Ei Thiri Kyaw',
    position: 'Chassis Member',
    major: 'MAE',
    year: '2028',
    image: '/team/placeholder.svg'
  },
  {
    name: 'Ana Mahuad',
    position: 'Chassis Member',
    major: 'MAE',
    year: '2028',
    image: '/team/placeholder.svg'
  },
];

const drivetrainTeam = [
  {
    name: 'Christina Ge',
    position: 'Drivetrain Subteam Lead',
    major: 'MAE',
    year: '2027',
    image: '/team/christina-ge.jpg'
  },
  {
    name: 'Ava Ianuale',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2026',
    image: '/team/ava-ianuale.jpg'
  },
  {
    name: 'Nathan Varghese',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2027',
    image: '/team/nathan-varghese.jpg'
  },
  {
    name: 'Alexis Barrow',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2027',
    image: '/team/alexis-barrow.jpg'
  },
  {
    name: 'Emely Benevides',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2028',
    image: '/team/placeholder.svg'
  },
  {
    name: 'Nora Kingwell',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2028',
    image: '/team/placeholder.svg'
  },
  {
    name: 'Jonathan Wan',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2028',
    image: '/team/placeholder.svg'
  },
];

const steeringTeam = [
  {
    name: 'Cion Kim',
    position: 'Steering Subteam Lead',
    major: 'MAE',
    year: '2027',
    image: '/team/cion-kim.jpg'
  },
  {
    name: 'Tadg Manna',
    position: 'Steering Member',
    major: 'MAE',
    year: '2026',
    image: '/team/tadg-manna.jpg'
  },
  {
    name: "Shashank Chalmasetty",
    position: "Steering Member",
    major: "MAE",
    year: "2026",
    image: "/team/placeholder.svg"
  },
  {
    name: 'Aahil Ali',
    position: 'Steering Member',
    major: 'MAE',
    year: '2027',
    image: '/team/aahil-ali.jpg'
  },
  {
    name: "Lydia Woodall",
    position: "Steering Member",
    major: "MAE",
    year: "2028",
    image: "/team/placeholder.svg"
  },
  {
    name: "Albert Zheng",
    position: "Steering Member",
    major: "MAE",
    year: "2028",
    image: "/team/placeholder.svg"
  },
];

// Team member card component
const TeamMemberCard = ({ member, index }: { member: typeof mechanicalLeadership[0], index: number }) => (
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
      <p className="text-gray-300 text-sm">{member.major} {member.year}</p>
    </div>
  </motion.div>
);

export default function MechanicalPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 py-16 pt-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
            viewport={{ once: true }}
          >
            <Wrench className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Mechanical Team</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-red-100 max-w-3xl mx-auto"
            viewport={{ once: true }}
          >
            We engineer the chassis, aerodynamics, and mechanical systems that make our electric vehicles efficient and competitive.
          </motion.p>
        </div>
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
              The mechanical team designs and builds the physical structure and systems that optimize vehicle performance.
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
                <Settings className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Chassis Design</h3>
              <p className="text-gray-300">Design lightweight yet strong vehicle frames and suspension systems.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Aerodynamics</h3>
              <p className="text-gray-300">Optimize vehicle body shape for minimal drag and maximum efficiency.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Drivetrain</h3>
              <p className="text-gray-300">Develop transmission and wheel systems for optimal power delivery.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Manufacturing</h3>
              <p className="text-gray-300">Build and assemble components using advanced manufacturing techniques.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Tools & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">SolidWorks</div>
                <div className="text-gray-300">CAD Design</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">ANSYS</div>
                <div className="text-gray-300">FEA Analysis</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">3D Printing</div>
                <div className="text-gray-300">Rapid Prototyping</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">CNC Machining</div>
                <div className="text-gray-300">Manufacturing</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Leadership</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Our mechanical team leaders coordinate across all subteams to ensure cohesive design and manufacturing.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {mechanicalLeadership.map((member, index) => (
              <div key={index} className="w-full sm:w-80">
                <TeamMemberCard member={member} index={index} />
              </div>
            ))}
          </div>

          {/* Chassis Subteam */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Chassis Subteam</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Designs and builds the vehicle frame, body structure, and ensures structural integrity.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {chassisTeam.map((member, index) => (
              <div key={index} className="w-full sm:w-80">
                <TeamMemberCard member={member} index={index} />
              </div>
            ))}
          </div>

          {/* Drivetrain Subteam */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Drivetrain Subteam</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Develops transmission systems, wheel assemblies, and power delivery mechanisms.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {drivetrainTeam.map((member, index) => (
              <div key={index} className="w-full sm:w-80">
                <TeamMemberCard member={member} index={index} />
              </div>
            ))}
          </div>

          {/* Steering Subteam */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Steering Subteam</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Creates precise steering systems and suspension components for optimal vehicle control.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {steeringTeam.map((member, index) => (
              <div key={index} className="w-full sm:w-80">
                <TeamMemberCard member={member} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
