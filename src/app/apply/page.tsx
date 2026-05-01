import Link from 'next/link'
import { Users, Code, Wrench, Zap, BarChart } from 'lucide-react'
import Image from 'next/image';
import Footer from '@/components/Footer'
import CountdownTimer from '@/components/CountdownTimer'

function ApplicationPhase({ phase, year }: { phase: number, year?: number }) {
    return (
        <div className="mb-16 bg-gray-800 rounded-2xl border border-gray-700 p-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Fall {year} Applications</h2>
          { phase === 1 && (
            <>
            <p className="text-lg text-gray-300 mb-8 text-center">CEV is excited to welcome a new class of team members this semester!</p>
            <p className="text-lg text-gray-300 mb-8 text-center">Please note that <b>applications are now <u>closed</u>.</b> We look forward to seeing you apply in the future!</p>
            <p className="text-lg text-gray-300 mb-8 text-center">CEV thrives thanks to a dedicate team of electrical, mechanical, and software engineers working alongside project managers, financial advisors, and graphic designers. We&apos;re hoping to see you among us in the current application cycle! </p>
            <p className="text-lg text-gray-300 mb-8 text-center">For any questions about our team or updates on our endeavors and timelines, reach out to us at <a href="mailto:cornellev@cornell.edu" className="font-bold text-red-500">cornellev@cornell.edu</a>.</p>
            </>
          )}
          {
            phase === 2 && (
                <>
                 <Link
                   href="https://docs.google.com/forms/d/e/1FAIpQLSeRy1lEO_K8oHmt2BG_V4IBAjcQi5rWzJmT4U_rdNMHVpxbzA/viewform?pli=1"
                 > 
                   <p className="text-2xl text-red-500 hover:text-red-400 transition-colors mb-8 text-center underline font-bold"> 
                     Fall Application Form 
                   </p> 
                 </Link> 
                 <p className="text-lg text-gray-300 mb-8 text-center">In the meantime, feel free to check out our <a href="https://docs.google.com/spreadsheets/d/1xRi3kiw8y6D5583K1GDtnGMFYcFLgEJdAhKS9BXGwlI/edit?gid=0#gid=0" className="font-bold italic text-red-500 hover:text-red-400">Coffee Chat Information</a> and fill out our&nbsp; 
                   <Link 
                     href="https://docs.google.com/forms/d/e/1FAIpQLSeTDgkBkoyXQS9YPAmIlsOSRW8ZHlHpMccRRt7n-RoQeb180A/viewform?usp=dialog" 
                     className="text-gray-150 hover:text-white transition-colors font-bold underline" 
                   > 
                     Interest Form 
                   </Link> 
                   !</p> 
                <p className="text-lg text-gray-300 mb-8 text-center">Thank you for your interest in joining our team! We&apos;ve been thrilled to engage with so many passionate individuals keen on pushing the limits of autonomous and electric vehicle innovation.</p> 
                </>
            )
          }
          {
            phase === 3 && (
                <>
                    {/** Date when apps open: Monday, Aug. 17 */}
                    <CountdownTimer target="2026-08-17T00:00:00" subtitle='We look forward to reviewing your applications!'/>
                </>
            )
          }
        </div>
    )
}

function Subteam({ icon, name, description }: { icon: React.ReactNode, name: string, description: string }) {
    return (
        <div className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow border border-gray-700">
            <div className="text-red-400 mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    )
}

function SubteamView() {
    return (
        <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Subteams</h2>
            <div className="flex flex-col gap-6">
                <div className='flex flex-col md:flex-row gap-6'>
                    <Subteam
                        icon={<Wrench className="w-8 h-8" />}
                        name="Mechanical"
                        description="Engineer chassis, suspension, aerodynamics, and manufacture the vehicle"
                    />
                    <Subteam
                        icon={<Zap className="w-8 h-8" />}
                        name="Electrical"
                        description="Design power systems, motor controllers, and electronic circuits"
                    />
                    <Subteam
                        icon={<Code className="w-8 h-8" />}
                        name="Data A&A"
                        description="Develop telemetry visualization and capture software"
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <Subteam
                        icon={<BarChart className="w-8 h-8" />}
                        name="Autonomy"
                        description="Develop autonomous driving systems and vehicle control software"
                    />
                    <Subteam
                        icon={<Users className="w-8 h-8" />}
                        name="Operations"
                        description="Manage partnerships, fundraising, marketing, and team operations"
                    />
                </div>
            </div>
        </div>
        
    )
}

export default function Apply() {
  

  const timelineEvents = [
    {
      title: "Project Teams Fest",
      date: "9/3 @ 4:00 PM - 6:00 PM",
      location: "Duffield Atrium",
      side: "left"
    },
    {
      title: "Info Session #1",
      date: "TBA",
      location: "TBA",
      side: "right"
    },
    {
      title: "Info Session #2",
      date: "TBA",
      location: "TBA",
      side: "left"
    },
    {
      title: "Info Session #3",
      date: "TBA",
      location: "TBA",
      side: "right"
    },
    {
      title: "Info Session #4",
      date: "TBA",
      location: "TBA",
      side: "left"
    },
    {
      title: "Open House",
      date: "TBA",
      location: "Upson B60",
      side: "right"
    },
    {
      title: "Freshmen/Transfers Applications Due",
      date: "10/15 @ 11:59 PM",
      location: null,
      side: "left"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-9 py-16">
            {/* i'll fix this eventually -jaiden */}
            <h1 className="text-white text-8xl font-bold">Join</h1>
            <Image src="/logo.png" alt="Logo" width={90} height={90} />
          </div>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-bold">
            Ready to build the future of sustainable transportation? Join our interdisciplinary team
            and work on cutting-edge electric vehicle technology.
          </p>
        </div>

        {/* Applications */}
        <ApplicationPhase phase={3} year={2026} />

        {/* Application Process */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-16 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Application Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Project Team Form</h3>
              <p className="text-gray-300">Fill out <Link className='text-blue-500 hover:text-blue-400' href={"https://www.duffield.cornell.edu/student-project-teams/join-a-project-team/"}>Cornell's Project Team Form</Link> - <b>we cannot accept your applications without it.</b></p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Submit Application</h3>
              <p className="text-gray-300">Complete our application form with your background and interests!</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Interview</h3>
              {/* should be fine for now? */}
              <p className="text-gray-300">After reviewing applications, we'll contact you to schedule an interview.</p>
            </div>
          </div>
        </div>

        {/* Subteams */}
        <SubteamView />

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Important Dates</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gray-600"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative flex items-center">
                    {event.side === "left" ? (
                      <>
                        <div className="flex-1 text-right pr-8">
                          <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                          <p className="text-gray-300 mb-1">{event.date}</p>
                          {event.location && <p className="text-gray-400">{event.location}</p>}
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-gray-900"></div>
                        <div className="flex-1 pl-8"></div>
                      </>
                    ) : (
                      <>
                        <div className="flex-1 pr-8"></div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-gray-900"></div>
                        <div className="flex-1 text-left pl-8">
                          <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                          <p className="text-gray-300 mb-1">{event.date}</p>
                          {event.location && <p className="text-gray-400">{event.location}</p>}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-800 rounded-2xl mb-16 p-8 border-gray-700">
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
      <Footer />
    </div>
  )
}
