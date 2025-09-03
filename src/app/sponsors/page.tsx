'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Handshake } from 'lucide-react';
import Footer from '@/components/Footer';
import Link from 'next/link'

const sponsors = [
  {
    name: "NVIDIA",
    logo: "/sponsors/nvidia-logo.png", // Replace with actual sponsor logo
    website: "https://www.nvidia.com/en-us/",
  },
  {
    name: "Second Order Effects",
    logo: "/sponsors/soe-logo.webp", // Replace with actual sponsor logo
    website: "https://soeffects.com/",
  },
  {
    name: "Lutron",
    logo: "/sponsors/lutron-logo.png", // Replace with actual sponsor logo
    website: "https://www.lutron.com/us/en",
  },
  {
    name: "Altium",
    logo: "/sponsors/altium-logo.avif", // Replace with actual sponsor logo
    website: "https://www.altium.com/",
  },
  {
    name: "Penske",
    logo: "/sponsors/penske-logo.svg",
    website: "https://www.gopenske.com/",
  },
  {
    name: "Elegoo",
    logo: "/sponsors/elegoo-logo.avif",
    website: "https://us.elegoo.com/"
  },
  {
    name: "Rock West Composites",
    logo: "/sponsors/rockwest-logo.avif",
    website: "https://www.rockwestcomposites.com/",
  },
  {
    name: "Easy Composites",
    logo: "/sponsors/easycomp-logo.png",
    website: "https://www.easycomposites.co.uk/"
  },
  {
    name: "Rivian",
    logo: "/sponsors/rivian-logo.avif",
    website: "https://rivian.com/"
  },
  {
    name: "Altair",
    logo: "/sponsors/altair-logo.avif",
    website: "https://altair.com/"
  },
  {
    name: "Dragon Plate",
    logo: "/sponsors/dragonplate-logo.webp",
    website: "https://dragonplate.com/"
  },
  {
    name: "FixPosition",
    logo: "/sponsors/fixposition-logo.avif",
    website: "https://www.fixposition.com/"
  },
  {
    name: "Hakko",
    logo: "/sponsors/hakko-logo.png",
    website: "https://hakkousa.com/"
  },
  {
    name: "Celsius",
    logo: "/sponsors/celsius-logo.avif",
    website: "https://www.celsius.com/"
  },
  {
    name: "ANSYS",
    logo: "/sponsors/ansys-logo.svg",
    website: "https://www.ansys.com/"
  },
  {
    name: "OSH Park",
    logo: "/sponsors/oshpark-logo.avif",
    website: "https://oshpark.com/"
  },
  {
    name: "JBC",
    logo: "/sponsors/jbc-logo.svg",
    website: "https://jbctools.com"
  },
  {
    name: "Aircat",
    logo: "/sponsors/aircat-logo.svg",
    website: "https://aircat.com"
  },
  {
    name: "Kurtz Ersa",
    logo: "/sponsors/kurtz-logo.avif",
    website: "https://kurtzersa.com"
  },
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
    className="flex items-center justify-center p-6"
  >
    <Link href={sponsor.website} className="bg-gray-300 rounded-lg p-4 hover:bg-gray-200 transition-colors duration-300 w-64 h-64 flex items-center justify-center">    
      <Image
        src={sponsor.logo}
        alt={`${sponsor.name} logo`}
        width={200}
        height={100}
        className="max-w-full max-h-full object-contain"
      />
    </Link>

  </motion.div>
);

export default function Sponsors() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 pt-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <Handshake className="w-12 h-12 mr-4" />
            <h1 className="text-5xl font-bold">Our Sponsors</h1>
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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

          <div className="flex flex-wrap gap-8 mb-16 justify-center">
            {sponsors.map((sponsor, index) => (
              <SponsorCard key={sponsor.name} sponsor={sponsor} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      {/* <section className="py-16 bg-gray-800">
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
      </section> */}

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
              href="https://drive.google.com/file/d/1sOx76vTJu_u-nbNxcC6NlEa43vC49LW7/view"
              className="border-white border-3 hover:bg-gray-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all transform hover:scale-105 shadow-lg inline-block mb-8"
            >
             View our Sponsorship Packet 
            </a>
            <br/>
            <a
              href="mailto:cornellev@cornell.edu?subject=Sponsorship Inquiry"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all transform hover:scale-105 shadow-lg inline-block"
            >
              Contact Us
            </a>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
