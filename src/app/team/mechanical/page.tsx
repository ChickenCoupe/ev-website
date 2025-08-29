'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Wrench, Settings, Cog, Wind } from 'lucide-react';

// Mechanical team data
const mechanicalTeam = [
  // Leads
  {
    name: 'Juan Pelaez',
    position: 'Mechanical Lead',
    major: 'MAE',
    year: '2025',
    image: '/team/juan-pelaez.jpg'
  },
  {
    name: 'Selena Yao',
    position: 'Mechanical Lead',
    major: 'MAE',
    year: '2026',
    image: '/team/selena-yao.jpg'
  },
  // Members
  {
    name: 'Alexis Barrow',
    position: 'Mechanical Member',
    major: 'MAE',
    year: '2027',
    image: '/team/alexis-barrow.jpg'
  },
  {
    name: 'Jamie Cashman',
    position: 'Mechanical Member',
    major: 'MAE',
    year: '2024',
    image: '/team/jamie-cashman.jpg'
  },
  {
    name: 'Addison Motto',
    position: 'Mechanical Member',
    major: 'MAE',
    year: '2026',
    image: '/team/addison-motto.jpg'
  },
  {
    name: 'Aahil Ali',
    position: 'Mechanical Member',
    major: 'CS',
    year: '2027',
    image: '/team/aahil-ali.jpg'
  },
  {
    name: 'Adrienne Yoon',
    position: 'Mechanical Member',
    major: 'MAE',
    year: '2025',
    image: '/team/adrienne-yoon.jpg'
  },
  {
    name: 'Alyssa Yoon',
    position: 'Mechanical Member',
    major: 'MAE',
    year: '2025',
    image: '/team/alyssa-yoon.jpg'
  },
  {
    name: 'Ava Epstein',
    position: 'Mechanical Member',
    major: 'MAE',
    year: '2025',
    image: '/team/ava-epstein.jpg'
  },
  {
    name: 'Ethan Sarpong',
    position: 'Mechanical Member',
    major: 'MAE',
    year: '2025',
    image: '/team/ethan-sarpong.jpg'
  },
  {
    name: 'Evan Leong',
    position: 'Mechanical Member',
    major: 'CS',
    year: '2025',
    image: '/team/evan-leong.jpg'
  },
  {
    name: 'Zach Feldman',
    position: 'Mechanical Member',
    major: 'MAE',
    year: '2027',
    image: '/team/zach-feldman.jpg'
  },
  {
    name: 'Sophia Lin',
    position: 'Mechanical Member',
    major: 'MAE',
    year: '2025',
    image: '/team/sophia-lin.jpg'
  },
  {
    name: 'Nathan Varghese',
    position: 'Mechanical Member',
    major: 'ECE',
    year: '2027',
    image: '/team/nathan-varghese.jpg'
  },
  {
    name: 'Amy Wang',
    position: 'Mechanical Member',
    major: 'Undecided',
    year: '2026',
    image: '/team/amy-wang.jpg'
  },
  {
    name: 'Tadg Manna',
    position: 'Mechanical Member',
    major: 'MAE',
    year: '2026',
    image: '/team/tadg-manna.jpg'
  },
  {
    name: 'Ava Ianuale',
    position: 'Mechanical Member',
    major: 'MAE & AEP',
    year: '2026',
    image: '/team/ava-ianuale.jpg'
  },
  {
    name: 'Emilio Ceballos',
    position: 'Mechanical Member',
    major: 'MAE',
    year: '2026',
    image: '/team/emilio-ceballos.jpg'
  },
  {
    name: 'Gregory Sharma',
    position: 'Mechanical Member',
    major: 'MAE',
    year: '2026',
    image: '/team/gregory-sharma.jpg'
  },
  {
    name: 'Kelvin Yuan',
    position: 'Mechanical Member',
    major: 'MAE',
    year: '2026',
    image: '/team/kelvin-yuan.jpg'
  },
  {
    name: 'Mackemey Munion',
    position: 'Mechanical Member',
    major: 'MAE',
    year: '2026',
    image: '/team/mackemey-munion.jpg'
  },
  {
    name: 'Lucas Libshutz',
    position: 'Mechanical Member',
    major: 'MAE',
    year: '2027',
    image: '/team/lucas-libshutz.jpg'
  },
  {
    name: 'Wesley DeCosta',
    position: 'Mechanical Member',
    major: 'MAE',
    year: '2026',
    image: '/team/wesley-decosta.jpg'
  },
  {
    name: 'Christina Ge',
    position: 'Mechanical Member',
    major: 'MAE',
    year: '2027',
    image: '/team/christina-ge.jpg'
  },
  {
    name: 'Cion Kim',
    position: 'Mechanical Member',
    major: 'MAE/CS',
    year: '2027',
    image: '/team/cion-kim.jpg'
  },
  {
    name: 'Jordan Vogel',
    position: 'Mechanical Member',
    major: 'MAE',
    year: '2027',
    image: '/team/jordan-vogel.jpg'
  }
];

// Team member card component
const TeamMemberCard = ({ member }: { member: typeof mechanicalTeam[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
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
      <p className="text-green-400 font-medium mb-1">{member.position}</p>
      <p className="text-gray-300 text-sm">{member.major} {member.year}</p>
    </div>
  </motion.div>
);

export default function MechanicalPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 py-16 pt-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <Wrench className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Mechanical Team</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-green-100 max-w-3xl mx-auto"
          >
            We engineer the chassis, aerodynamics, and mechanical systems that make our electric vehicles efficient and competitive.
          </motion.p>
        </div>
      </div>

      {/* Stats */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">20</div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">4</div>
              <div className="text-gray-300">Focus Areas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Parts Designed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Efficiency Target</div>
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
              The mechanical team designs and builds the physical structure and systems that optimize vehicle performance.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Chassis Design</h3>
              <p className="text-gray-300">Design lightweight yet strong vehicle frames and suspension systems.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Aerodynamics</h3>
              <p className="text-gray-300">Optimize vehicle body shape for minimal drag and maximum efficiency.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Drivetrain</h3>
              <p className="text-gray-300">Develop transmission and wheel systems for optimal power delivery.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Manufacturing</h3>
              <p className="text-gray-300">Build and assemble components using advanced manufacturing techniques.</p>
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
              Our mechanical engineers design and build the physical systems that make our vehicles competitive and efficient.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                          {mechanicalTeam.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Tools & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">SolidWorks</div>
                <div className="text-gray-600">CAD Design</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">ANSYS</div>
                <div className="text-gray-600">FEA Analysis</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">3D Printing</div>
                <div className="text-gray-600">Rapid Prototyping</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">CNC Machining</div>
                <div className="text-gray-600">Manufacturing</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
