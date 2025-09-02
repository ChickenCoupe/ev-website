import Link from 'next/link'
import { Users, Code, Wrench, Zap, BarChart } from 'lucide-react'
import Image from 'next/image';

export default function Apply() {
  const subteams = [
    {
      icon: <Wrench className="w-8 h-8" />,
      name: "Mechanical",
      description: "Engineer chassis, suspension, aerodynamics, and manufacture the vehicle"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      name: "Electrical",
      description: "Design power systems, motor controllers, and electronic circuits"
    },
    {
      icon: <Code className="w-8 h-8" />,
      name: "Data A&A",
      description: "Develop telemtry visualization and capture software"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      name: "Autonomy",
      description: "Develop autonomous driving systems and vehicle control software"
    },
    {
      icon: <Users className="w-8 h-8" />,
      name: "Operations",
      description: "Manage partnerships, fundraising, marketing, and team operations"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-9 py-16">
            <h1 className="text-white text-8xl font-bold">Join</h1>
            <img src="/logo.png" alt="Logo" className="h-40" />
          </div>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-bold">
            Ready to build the future of sustainable transportation? Join our interdisciplinary team 
            and work on cutting-edge electric vehicle technology.
          </p>
        </div>

        {/* Subteams */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Choose Your Subteam</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subteams.map((subteam) => (
              <div key={subteam.name} className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow border border-gray-700">
                <div className="text-red-400 mb-4">
                  {subteam.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{subteam.name}</h3>
                <p className="text-gray-300">{subteam.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-16 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Application Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Submit Application</h3>
              <p className="text-gray-300">Complete our online application form with your background and interests</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Technical Interview</h3>
              <p className="text-gray-300">Showcase your technical skills and passion for electric vehicles</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Welcome to CEV</h3>
              <p className="text-gray-300">Join our team and start working on cutting-edge projects</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Apply?</h2>
          <p className="text-lg text-gray-300 mb-8">Applications open at the beginning of each semester.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:cornellev@cornell.edu"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
            <Link
              href="/team"
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
