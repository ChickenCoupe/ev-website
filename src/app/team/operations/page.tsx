'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { DollarSign, Megaphone, Calendar } from 'lucide-react';
import Footer from '@/components/Footer'

const operationsTeam = [
    {
        name: 'Lena Schapiro',
        position: 'Operations Lead',
        major: 'ORIE',
        year: '2028',
        image: '/team/lena-schapiro.jpg'
    },
    {
        name: 'Jessie Shi',
        position: 'Operations Member',
        major: 'ORIE',
        year: '2029',
        image: '/team/jessie-shi.jpg'
    },
    {
        name: 'Kayra Tosun',
        position: 'Operations Member',
        major: 'ORIE',
        year: '2029',
        image: '/team/kayra-tosun.jpg'
    },
    {
        name: 'Lauren Stanley',
        position: 'Operations Member',
        major: 'ORIE',
        year: '2029',
        image: '/team/lauren-stanley.jpg'
    },
    {
        name: 'Mino Furtado',
        position: 'Operations Member',
        major: 'E&S',
        year: '2029',
        image: '/team/minori-furtado.jpg'
    },
    {
        name: 'Allen Lin',
        position: 'Operations Member',
        major: 'ORIE',
        year: '2029',
        image: '/team/allen-lin.jpg'
    }
]

const seniorAdvisors = [
    {
        name: 'Tatum McLaughlin',
        position: 'Senior Advisor',
        major: 'ORIE',
        year: '2027',
        image: '/team/tatum-mclaughlin.jpg'
    }
]

const sortTeamMembers = <T extends { name: string; year: string }>(members: T[]) =>
    [...members].sort((a, b) => {
        const yearComparison = Number(a.year) - Number(b.year);
        if (yearComparison !== 0) return yearComparison;

        const aLastName = a.name.split(' ').at(-1) ?? a.name;
        const bLastName = b.name.split(' ').at(-1) ?? b.name;
        return aLastName.localeCompare(bLastName);
    });

const operationsLeads = sortTeamMembers(operationsTeam.filter((member) => member.position.includes('Lead')));
const operationsMembers = sortTeamMembers(operationsTeam.filter((member) => !member.position.includes('Lead')));

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
            <section className="relative flex min-h-[420px] items-center overflow-hidden py-20 pt-28 text-white">
                <Image src="/team/groups/operations.jpg" alt="" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y:20 }}
                        animate={{ opacity: 1, y:0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-6"
                    >
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
                            Operations Lead
                        </h2>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-8 mb-16">
                        {operationsLeads.map((member,index) => (
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
                        {operationsMembers.map((member,index) => (
                            <TeamMemberCard key={member.name} member={member} index={index + operationsLeads.length} />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-16 mb-8 text-center"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">Senior Advisors</h3>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {seniorAdvisors.map((member, index) => (
                            <TeamMemberCard key={member.name} member={member} index={index + operationsLeads.length + operationsMembers.length} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
