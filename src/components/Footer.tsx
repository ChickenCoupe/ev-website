'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin, Youtube, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="mb-6 flex items-center gap-4">
              <Image 
                src="/logo.png" 
                alt="Cornell Electric Vehicles Logo"
                width={64}
                height={128}
                className="h-16 w-auto"
              />
              <div>
                <h3 className="text-2xl font-bold text-red-400 mb-1">CORNELL</h3>
                <h3 className="text-2xl font-bold text-white mb-1">ELECTRIC VEHICLES</h3>
                <h4 className="text-lg font-medium text-gray-400">PROJECT TEAM</h4>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Cornell Electric Vehicles Project Team is the foremost project team at Cornell University 
              dedicated to building autonomous, hyper-efficient electric cars.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/cornellelectricvehicles/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/cornell-electric-vehicles-project-team-241840294/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCIfPZHm8n76n-ruNO9-Xkag"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-lg transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:cornellev@cornell.edu"
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <div className="space-y-4">
              <Link
                href="/team"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Our Team
              </Link>
              <Link
                href="/vehicles"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Vehicles
              </Link>
              <Link
                href="/apply"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Apply
              </Link>
              <Link
                href="https://www.shellecomarathon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Shell Eco-Marathon
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <Link
                href="mailto:cornellev@cornell.edu"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                cornellev@cornell.edu
              </Link>
              <div className="text-gray-400">
                Cornell University<br />
                Ithaca, NY 14853
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            ©2025 by Cornell Electric Vehicles (CEV) Project Team. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm">
            Registered Student Organization of Cornell University
          </div>
        </div>
      </div>
    </footer>
  )
}
