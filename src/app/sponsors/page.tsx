'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Heart, Handshake } from 'lucide-react';
import Footer from '@/components/Footer';

const sponsors = [
  {
    name: "Cornell Engineering",
    tier: "Title Sponsor",
    logo: "/logo.png", // Replace with actual sponsor logo
    website: "https://www.engineering.cornell.edu",
    description: "Supporting innovation and excellence in engineering education."
  },
  {
    name: "Shell",
    tier: "Platinum Sponsor",
    logo: "/logo.png", // Replace with actual sponsor logo
    website: "https://www.shell.com",
    description: "Global energy company committed to sustainable mobility solutions."
  },
  {
    name: "Tesla",
    tier: "Gold Sponsor",
    logo: "/logo.png", // Replace with actual sponsor logo
    website: "https://www.tesla.com",
    description: "Leading electric vehicle and clean energy technology company."
  },
  {
    name: "ANSYS",
    tier: "Silver Sponsor",
    logo: "/logo.png", // Replace with actual sponsor logo
    website: "https://www.ansys.com",
    description: "Engineering simulation software for product design and optimization."
  },
  {
    name: "SolidWorks",
    tier: "Bronze Sponsor",
    logo: "/logo.png", // Replace with actual sponsor logo
    website: "https://www.solidworks.com",
    description: "3D CAD design software and engineering solutions."
  }
];

const sponsorshipTiers = [
  {
    tier: "Title Sponsor",
    color: "from-yellow-500 to-yellow-600",
    benefits: [
      "Prominent logo placement on vehicle",
      "Major recognition at all events",
      "Exclusive partnership opportunities",
      "Direct access to team leadership"
    ]
  },
  {
    tier: "Platinum Sponsor",
    color: "from-gray-300 to-gray-400",
    benefits: [
      "Large logo on vehicle and materials",
      "Recognition at competitions",
      "Recruitment opportunities",
      "Technical collaboration"
    ]
  },
  {
    tier: "Gold Sponsor",
    color: "from-yellow-400 to-yellow-500",
    benefits: [
      "Medium logo placement",
      "Website recognition",
      "Competition updates",
      "Networking events"
    ]
  },
  {
    tier: "Silver Sponsor",
    color: "from-gray-200 to-gray-300",
    benefits: [
      "Small logo placement",
      "Social media recognition",
      "Team updates",
      "Annual report inclusion"
    ]
  }
];

const SponsorCard = ({ sponsor, index }: { sponsor: typeof sponsors[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700 group"
  >
    <div className="aspect-video bg-white flex items-center justify-center p-6">
      <Image
        src={sponsor.logo}
        alt={`${sponsor.name} logo`}
        width={200}
        height={100}
        className="max-w-full max-h-full object-contain"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-white">{sponsor.name}</h3>
        <a
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 hover:text-red-300 transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      <p className="text-red-400 font-semibold mb-3">{sponsor.tier}</p>
      <p className="text-gray-300 text-sm">{sponsor.description}</p>
    </div>
  </motion.div>
);

export default function Sponsors() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 pt-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <Handshake className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Our Sponsors</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-red-100 max-w-3xl mx-auto"
          >
            We&apos;re grateful for the support of our sponsors who make our innovation and competition participation possible.
          </motion.p>
        </div>
      </section>

      {/* Current Sponsors */}
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
              Current Sponsors
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              These organizations support our mission to advance electric vehicle technology and education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
              <SponsorCard key={sponsor.name} sponsor={sponsor} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
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
              Sponsorship Opportunities
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Partner with us to support the next generation of electric vehicle engineers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700"
              >
                <div className={`bg-gradient-to-r ${tier.color} rounded-lg p-4 mb-4`}>
                  <h3 className="text-lg font-bold text-gray-900 text-center">
                    {tier.tier}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heart className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Become a Sponsor
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our mission to advance electric vehicle technology and support the next generation of engineers.
            </p>
            <a
              href="mailto:cornellev@cornell.edu?subject=Sponsorship Inquiry"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all transform hover:scale-105 shadow-lg inline-block"
            >
              Contact Us About Sponsorship
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
