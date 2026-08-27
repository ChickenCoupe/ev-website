'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Icon, Terminal, Timer} from 'lucide-react';
import { motorRacingHelmet } from '@lucide/lab';
import Footer from '@/components/Footer'

const dataTeam= [
    {
      name: 'Rhea Agrawal',
      position: 'Telemetry Subteam Lead',
      major: 'CS',
      year: '2028',
      image: '/team/rhea-agrawal.jpg'
    },
    {
      name: 'Katie Xiao',
      position: 'Telemetry Subteam Lead',
      major: 'CS/Stats',
      year: '2028',
      image: '/team/katie-xiao.jpg'
    },
    {
        name: 'Ajay Parthibha',
        position: 'Telemetry Member',
        major: 'CS',
        year: '2027',
        image: '/team/ajay-parthibha.jpg'
    },
    {
        name: 'Julia Lau',
        position: 'Telemetry Member',
        major: 'CS',
        year: '2028',
        image: '/team/julia-lau.jpg'
    },
    {
        name: 'Eric Shen',
        position: 'Telemetry Member',
        major: 'CS/Math',
        year: '2029',
        image: '/team/eric-shen.jpg'
    },
    {
        name: 'Donte Truong',
        position: 'Telemetry Member',
        major: 'CS/ECE',
        year: '2029',
        image: '/team/donte-truong.jpg'
    },
    {
        name: 'Adi Murgescu',
        position: 'Telemetry Member',
        major: 'CS/Math',
        year: '2029',
        image: '/team/adi-murgescu.jpg'
    },
    {
        name: 'Meira Chenicheri',
        position: 'Telemetry Member',
        major: 'CS',
        year: '2029',
        image: '/team/meira-chenicheri.jpg'
    },
    {
        name: 'Shreyaa Sanjay',
        position: 'Telemetry Member',
        major: 'CS/ECE',
        year: '2029',
        image: '/team/shreyaa-sanjay.jpg'
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

const telemetryLeads = sortTeamMembers(dataTeam.filter((member) => member.position.includes('Lead')));
const telemetryMembers = sortTeamMembers(dataTeam.filter((member) => !member.position.includes('Lead')));

const TeamMemberCard = ({ member, index }: {member: typeof dataTeam[0], index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 + index * 0.1}}
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
            <p className="text-red-400 font-semibold">{member.position}</p>
            <p className="text-gray-300">{member.major} {member.year}</p>
        </div>
    </motion.div>
)

export default function DataTeam() {
    return (
        <div className="min-h-screen bg-gray-900">
        {/* Header */}
            <section className="relative flex min-h-[420px] items-center overflow-hidden py-20 pt-28 text-white">
                <Image src="/team/groups/telemetry.jpg" alt="" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y:20 }}
                        animate={{ opacity: 1, y:0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-6"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold">Telemetry Team</h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity:0, y:20 }}
                        animate={{ opacity:1, y:0}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-red-100 max-w-3xl mx-auto"
                    >
                        The Telemetry subteam uses web, mobile, and IoT technology to collect, analyze, and display data from vehicle testing. We&apos;re responsible for the high-frequency data collection, storage, and efficiency analysis required for data-driven engineering. 
                    </motion.p>
                </div>
            </section>

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

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="bg-red-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                               <Icon iconNode={motorRacingHelmet} className="w-8 h-8 text-red-400" /> 
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Modular Data Acquisition System</h3>
                            <p className="text-gray-300">A distributed telemetry architecture using modular sensor nodes and a central DAQ computer to collect, synchronize, and transmit vehicle data in real time.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="bg-red-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Timer className="w-8 h-8 text-red-400" /> 
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Race Engineer Dashboard</h3>
                            <p className="text-gray-300">A real-time dashboard for monitoring vehicle performance, with RaceGPT providing AI-powered analysis and insights from live telemetry.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="bg-red-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Terminal className="w-8 h-8 text-red-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Cross-Analysis Toolbox</h3>
                            <p className="text-gray-300">A post-race analysis platform for exploring and comparing telemetry across runs, helping engineers identify performance trends, diagnose issues, and guide future vehicle improvements.</p>
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
                            Telemetry Leads
                        </h2>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-8 mb-16">
                        {telemetryLeads.map((member,index) => (
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
                        {telemetryMembers.map((member,index) => (
                            <TeamMemberCard key={member.name} member={member} index={index + telemetryLeads.length} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
