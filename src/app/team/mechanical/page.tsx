'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Wrench, Settings, Cog, Wind } from 'lucide-react';
import Footer from '@/components/Footer'

// Mechanical team data organized by subteams
const mechanicalLeadership = [
  {
    name: 'Serkan Yurday',
    position: 'Mechanical Lead',
    major: 'MAE',
    year: '2028',
    image: '/team/serkan-yurday.jpg'
  },
  {
    name: 'Albert Zheng',
    position: 'Mechanical Lead',
    major: 'MAE',
    year: '2028',
    image: '/team/albert-zheng.jpg'
  }
];

const chassisTeam = [
  {
    name: 'Joe Dalton',
    position: 'Chassis Subsystem Lead',
    major: 'MAE',
    year: '2027',
    image:'/team/joseph-dalton.jpg'
  },
  {
    name: 'Jackson Skagen',
    position: 'Chassis Subsystem Lead',
    major: 'MAE',
    year: '2029',
    image: '/team/jackson-skagen.jpg'
  },
  {
    name: 'Yohanne Lin',
    position: 'Chassis Member',
    major: 'MAE',
    year: '2028',
    image: '/team/yohanne-lin.jpg'
  },
  {
    name: 'Ei Thiri Kyaw',
    position: 'Chassis Member',
    major: 'MAE',
    year: '2028',
    image: '/team/ei-thiri-kyaw.jpg'
  },
  {
    name: 'Ana Mahuad',
    position: 'Chassis Member',
    major: 'MAE',
    year: '2028',
    image: '/team/ana-mahuad.jpg'
  },
  {
    name: 'Isabella Rodriguez',
    position: 'Chassis Member',
    major: 'MAE',
    year: '2029',
    image: '/team/isabella-rodriguez.jpg'
  },
];

const drivetrainTeam = [
  {
    name: 'Emely Benavides',
    position: 'Drivetrain Subsystem Lead',
    major: 'MAE',
    year: '2028',
    image: '/team/emely-benavides.jpg'
  },
  {
    name: 'Alexis Barrow',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2027',
    image: '/team/alexis-barrow.jpg'
  },
  {
    name: 'Anna Shub',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2029',
    image: '/team/anna-shub.jpg'
  },
  {
    name: 'Ian Olenich',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2029',
    image: '/team/ian-olenich.jpg'
  },
  {
    name: 'Zachary Davidson',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2029',
    image: '/team/placeholder.svg'
  },
  ];

const steeringTeam = [
  {
    name: "Lydia Woodall",
    position: "Steering Subsystem Lead",
    major: "MAE",
    year: "2028",
    image: "/team/lydia-woodall.jpg"
  },

  // {
  //   name: 'Aahil Ali',
  //   position: 'Steering Member',
  //   major: 'MAE',
  //   year: '2027',
  //   image: '/team/aahil-ali.jpg'
  // },
  {
    name: 'Olivia Mei',
    position: 'Steering Member',
    major: 'MAE',
    year: '2028',
    image:'/team/placeholder.svg'
  },
  {
    name: 'Ashley Johnny',
    position: 'Steering Member',
    major: 'ECE',
    year: '2029',
    image: '/team/ashley-johnny.jpg'
  },
  {
    name: 'Hamza Waseem',
    position: 'Steering Member',
    major: 'MAE',
    year: '2029',
    image: '/team/hamza-waseem.jpg'
  },
  {
    name: 'Magnus Simmons',
    position: 'Steering Member',
    major: 'ECE',
    year: '2029',
    image: '/team/magnus-simmons.jpg'
  },
  {
    name: 'Neha Chigurupati',
    position: 'Steering Member',
    major: 'MAE',
    year: '2029',
    image: '/team/neha-chigurupati.jpg'
  },
  {
    name: 'Samiksha Emmaneni',
    position: 'Steering Member',
    major: 'MAE',
    year: '2029',
    image: '/team/samiksha-emmaneni.jpg'
  },
];

const suspensionTeam = [
  {
    name: 'Jonathan Wan',
    position: 'Suspension Subsystem Lead',
    major: 'MAE',
    year: '2028',
    image: '/team/jonathan-wan.jpg'
  },
  {
    name: 'Jackson Skagen',
    position: 'Suspension Member',
    major: 'MAE',
    year: '2029',
    image: '/team/jackson-skagen.jpg'
  },
  {
    name: 'Ei Thiri Kyaw',
    position: 'Suspension Member',
    major: 'MAE',
    year: '2028',
    image: '/team/ei-thiri-kyaw.jpg'
  },
  {
    name: 'Hamza Waseem',
    position: 'Suspension Member',
    major: 'MAE',
    year: '2029',
    image: '/team/hamza-waseem.jpg'
  },
];

const seniorAdvisors = [
  {
    name: 'Christina Ge',
    position: 'Senior Advisor',
    major: 'MAE',
    year: '2027',
    image: '/team/christina-ge.jpg'
  },
  {
    name: 'Jordan Vogel',
    position: 'Senior Advisor',
    major: 'MAE',
    year: '2027',
    image: '/team/jordan-vogel.jpg'
  },
];  

const sortTeamMembers = <T extends { name: string; year: string; position: string }>(members: T[]) =>
  [...members].sort((a, b) => {
    const aIsLead = a.position.toLowerCase().includes('lead') ? 0 : 1;
    const bIsLead = b.position.toLowerCase().includes('lead') ? 0 : 1;
    if (aIsLead !== bIsLead) return aIsLead - bIsLead;

    const yearComparison = Number(a.year) - Number(b.year);
    if (yearComparison !== 0) return yearComparison;

    const aLastName = a.name.split(' ').at(-1) ?? a.name;
    const bLastName = b.name.split(' ').at(-1) ?? b.name;
    return aLastName.localeCompare(bLastName);
  });

const sortedMechanicalLeadership = sortTeamMembers(mechanicalLeadership);
const sortedChassisTeam = sortTeamMembers(chassisTeam);
const sortedDrivetrainTeam = sortTeamMembers(drivetrainTeam);
const sortedSteeringTeam = sortTeamMembers(steeringTeam);
const sortedSuspensionTeam = sortTeamMembers(suspensionTeam);
const sortedSeniorAdvisors = sortTeamMembers(seniorAdvisors);

// Team member card component
const TeamMemberCard = ({ member, index }: { member: typeof mechanicalLeadership[0], index: number }) => (
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
      <div className="relative flex min-h-[420px] items-center overflow-hidden py-20 pt-28 text-white">
        <Image src="/team/groups/mechanical.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
            viewport={{ once: true }}
          >
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
                <div className="text-2xl font-bold text-red-400 mb-2">Inventor</div>
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
            <h2 className="text-3xl font-bold text-white mb-4">Mechanical Leads</h2>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {sortedMechanicalLeadership.map((member, index) => (
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
            {sortedChassisTeam.map((member, index) => (
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
            {sortedDrivetrainTeam.map((member, index) => (
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
            {sortedSteeringTeam.map((member, index) => (
              <div key={index} className="w-full sm:w-80">
                <TeamMemberCard member={member} index={index} />
              </div>
            ))}
          </div>

          {/* Suspension Subteam */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 mt-16"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Suspension Subteam</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Designs suspension and structural components for vehicle control and stability
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {sortedSuspensionTeam.map((member, index) => (
              <div key={index} className="w-full sm:w-80">
                <TeamMemberCard member={member} index={index} />
              </div>
            ))}
          </div>

          {/* Senior Advisors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 mt-16"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Senior Advisors</h3>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {sortedSeniorAdvisors.map((member, index) => (
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
