'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Icon, Server, Terminal, Timer} from 'lucide-react';
import { motorRacingHelmet } from '@lucide/lab';
import Footer from '@/components/Footer'

const dataTeam= [
    {
        name: 'Daniel Sorokin',
        position: 'Data A&A Lead',
        major: 'CS',
        year: '2027',
        image: '/team/daniel-sorokin.jpg'
    },
    {
        name: 'Ruth Taddesse',
        position: 'Data A&A Lead',
        major: 'CS',
        year: '2027',
        image: '/team/ruth-taddesse.jpg'
    },
    {
        name: "Serena Duncan",
        position: 'Data A&A Lead',
        major: 'CS',
        year: '2026',
        image: '/team/serena-duncan.webp'
    },
    {
        name: 'Mehdi Heydari',
        position: 'Data A&A Member',
        major: 'CS',
        year: '2026',
        image: '/team/mehdi-heydari.jpg'
    }
]

const TeamMemberCard = ({ member, index }: {member: typeof dataTeam[0], index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 + index * 0.1}}
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
            <h3 className="text-xl font-bold text-white text-center mb-2">{member.name}</h3>
            <p className="text-red-400 font-semibold text-center mb-1">{member.position}</p>
            <p className="text-gray-300 text-center mb-1">{member.major}</p>
            <p className="text-gray-400 text-center mb-1">{member.year}</p>
        </div>
    </motion.div>
)

export default function DataTeam() {
    return (
        <div className="min-h-screen bg-gray-900">
        {/* Header */}
            <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 pt-24 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y:20 }}
                        animate={{ opacity: 1, y:0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center mb-6"
                    >
                        <Server className="w-12 h-12 mr-4" />
                        <h1 className="text-4xl md:text-5xl font-bold">Data A&A Team</h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity:0, y:20 }}
                        animate={{ opacity:1, y:0}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-red-100 max-w-3xl mx-auto"
                    >
                        The Data Apps and Analytics (Data A&A) subteam uses web, mobile, and IoT technology to collect, analyze, and display data from vehicle testing. We&apos;re responsible for the high-frequency data collection, storage, and efficiency analysis required for data-driven engineering. 
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
                            <h3 className="text-xl font-semibold text-white mb-2">Driver Dashboard</h3>
                            <p className="text-gray-300">A mobile app that is both a driver dashboard and a data tunnel, forwarding electrical DAQ data to the Live Timing Dashboard.</p>
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
                            <h3 className="text-xl font-semibold text-white mb-2">Live Timing Dashboard</h3>
                            <p className="text-gray-300">A web-based dashboard useful for competition preparation that displays stats such as speed and battery level in real-time.</p>
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
                            <h3 className="text-xl font-semibold text-white mb-2">AR Windshield</h3>
                            <p className="text-gray-300">A forward-looking project aiming to display Driver Dashboard contents directly on the competition vehicle windshield.</p>
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
                            Meet Our Team
                        </h2>
                        <p className="text-gray-300 text-lg">
                            Our team is dedicated to leveraging cutting-edge technology to enhance vehicle performance and data analysis. We specialize in creating tools that provide real-time insights and improve the overall efficiency of our engineering processes.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {dataTeam.map((member,index) => (
                            <TeamMemberCard key={member.name} member={member} index={index} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}