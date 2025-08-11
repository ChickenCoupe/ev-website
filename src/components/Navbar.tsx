'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo-dark.png" 
                alt="Cornell Electric Vehicles Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/team" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
                Our Team
              </Link>
              <Link href="/vehicles" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
                Vehicles
              </Link>
              <Link href="/apply" className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors">
                Apply
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-red-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="/" className="text-gray-900 hover:text-red-600 block px-3 py-2 text-base font-medium">
              Home
            </Link>
            <Link href="/team" className="text-gray-900 hover:text-red-600 block px-3 py-2 text-base font-medium">
              Our Team
            </Link>
            <Link href="/vehicles" className="text-gray-900 hover:text-red-600 block px-3 py-2 text-base font-medium">
              Vehicles
            </Link>
            <Link href="/apply" className="bg-red-600 text-white block px-3 py-2 text-base font-medium rounded-md mx-3 mt-2">
              Apply
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
