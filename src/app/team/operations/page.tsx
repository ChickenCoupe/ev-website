'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, DollarSign, Megaphone, Calendar } from 'lucide-react';
import Footer from '@/components/Footer'

const operationsTeam = [
    {
        name: 'Tatum McLaughlin',
        position: 'Operations Lead',
        major: 'ORIE',
        year: '2027',
        image: '/team/tatum-mclaughlin.jpg'
    },
    {
        name: 'Cate Defa',
        position: 'Operations Member',
        major: 'ORIE',
        year: '2027',
        image: '/team/cate-defa.jpg'
    },
    {
        name: 'Lena Schapiro',
        position: 'Operations Member',
        major: 'ORIE',
        year: '2028',
        image: '/team/lena-schapiro.jpg'
    },
    {
        name: 'Bator Diop',
        position: 'Operations Member',
        major: 'ORIE',
        year: '2028',
        image: '/team/bator-diop.jpg'
    },
    {
        name: 'Eunice Son',
        position: 'Operations Member',
        major: 'ORIE',
        year: '2027',
        image: '/team/eunice-son.jpg'
    }
]

const TeamMemberCard = ({ member, index }: {member: typeof operationsTeam[0], index: number }) => (
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
            <p className="text-red-400 font-semibold mb-1">{member.position}</p>
            <p className="text-gray-300" >{member.major} {member.year}</p>
        </div>
    </motion.div>
)

export default function OperationsTeam() {
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
                        <Users className="w-12 h-12 mr-4" />
                        <h1 className="text-4xl md:text-5xl font-bold">Operations Team</h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity:0, y:20 }}
                        animate={{ opacity:1, y:0}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-red-100 max-w-3xl mx-auto"
                    >
                        The Operations team manages partnerships, fundraising, marketing, and team coordination to ensure smooth project execution and sustainable growth. We&apos;re the backbone that enables our technical teams to focus on innovation and excellence.
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
                               <DollarSign className="w-8 h-8 text-red-400" /> 
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Fundraising & Sponsorships</h3>
                            <p className="text-gray-300">Secure funding and build partnerships with industry leaders to support our team&apos;s operations and competition participation.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="bg-red-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Megaphone className="w-8 h-8 text-red-400" /> 
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Marketing & Outreach</h3>
                            <p className="text-gray-300">Promote our team&apos;s achievements and initiatives through social media, events, and community engagement to build our brand and attract new members.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="bg-red-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Calendar className="w-8 h-8 text-red-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Event Coordination</h3>
                            <p className="text-gray-300">Plan and execute team events, competition logistics, and cross-functional meetings to maintain team cohesion and operational efficiency.</p>
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
                            Our operations team brings together diverse skills in business, marketing, and project management to create a sustainable foundation for our technical innovation and competitive success.
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                        {operationsTeam.map((member,index) => (
                            <TeamMemberCard key={member.name} member={member} index={index} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
