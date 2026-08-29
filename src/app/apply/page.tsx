import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { Code, Wrench, Zap, BarChart, Users } from 'lucide-react'
import Image from 'next/image';
import CoffeeChatsCarousel from '@/components/CoffeeChatsCarousel'
import Footer from '@/components/Footer'
import { parseCsv } from '@/lib/csv'
import Reveal from '@/components/site/Reveal'


export default function Apply() {
  const subteamOrder: Record<string, number> = {
    'Full Team': 0,
    Mechanical: 1,
    Electrical: 2,
    Telemetry: 3,
    Autonomy: 4,
    Operations: 5,
  }
  const coffeeChats = parseCsv(fs.readFileSync(path.join(process.cwd(), 'src/data/coffee-chats.csv'), 'utf8'))
    .sort((a, b) => {
      const subteamDifference = (subteamOrder[a.Subteam] ?? 99) - (subteamOrder[b.Subteam] ?? 99)
      if (subteamDifference !== 0) return subteamDifference

      const isPrimaryLead = (chat: Record<string, string>) => {
        const role = chat.Role.toLowerCase().trim()
        const subteam = chat.Subteam.toLowerCase().trim()
        return role.includes('full team lead') || role === `${subteam} lead`
      }
      const aIsLead = isPrimaryLead(a) ? 0 : 1
      const bIsLead = isPrimaryLead(b) ? 0 : 1
      if (aIsLead !== bIsLead) return aIsLead - bIsLead

      const aLastName = a.Name.trim().split(/\s+/).pop() ?? ''
      const bLastName = b.Name.trim().split(/\s+/).pop() ?? ''
      return aLastName.localeCompare(bLastName)
    })

  const subteams = [
    {
      icon: <Wrench className="w-8 h-8" />,
      name: "Mechanical",
      href: "/team/mechanical",
      description: "Engineer chassis, suspension, aerodynamics, and manufacture the vehicle"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      name: "Electrical",
      href: "/team/electrical",
      description: "Design power systems, motor controllers, and electronic circuits"
    },
    {
      icon: <Code className="w-8 h-8" />,
      name: "Telemetry",
      href: "/team/telemetry",
      description: "Develop telemetry visualization and capture software"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      name: "Autonomy",
      href: "/team/autonomy",
      description: "Develop autonomous driving systems and vehicle control software"
    },
    {
      icon: <Users className="w-8 h-8" />,
      name: "Operations",
      href: "/team/operations",
      description: "Manage partnerships, fundraising, marketing, and team operations"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      <section className="relative flex min-h-[420px] items-center overflow-hidden py-20 pt-28 text-white">
        <Image
          src="/comp-tech-inspection-group-pic.JPG"
          alt="Cornell Electric Vehicles team at technical inspection"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <Reveal className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Join CEV Today!</h1>
          <p className="mx-auto max-w-4xl text-xl text-gray-100 md:text-2xl">
            Ready to build the future of sustainable transportation? Work on the mechanical, electrical, autonomy, telemetry, or operations systems that put the vehicle on track.
          </p>
        </Reveal>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Reveal hover className="result-card mb-16 p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Fall 2026 Upperclassmen Applications Now Open!</h2>
          {/* <p className="text-lg text-gray-300 mb-8 text-center">Please note that <b>applications are now <u>closed</u>.</b> We look forward to seeing you apply in the future!</p> */}
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSccbMhOsd8ubA3QOC4H1Q3ZRBalmmk0lNqcNneyT-N650SZDg/viewform?usp=sharing&ouid=102160163982044776728"
            className="inline-block rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-red-500 mb-8"
          >
            Application Form Link
          </Link>
          <p className="text-lg text-gray-300">Have any questions about our team or our current endeavors? Check out our{' '}
            <Link href="/team" className="font-semibold text-red-400 underline hover:text-red-300">different subteams</Link>,{' '}
            <Link href="/vehicles" className="font-semibold text-red-400 underline hover:text-red-300">vehicles</Link>, or{' '}
            <Link
              href="#coffee-chats"
              className="font-semibold text-red-400 underline hover:text-red-300"
            >
              coffee chat
            </Link>
            {' '}with one of our team members!
          </p>
        </Reveal>

        <Reveal hover className="result-card mb-16 p-8 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white">Fall 2026 Application Interest Form</h2>
          <Link
            href="https://docs.google.com/forms/d/1O_qhDbE15cuPkU3foFVn20y4mv15s3UCOPEVB_eSnMQ/edit"
            className="mb-8 inline-block bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-red-500"
          >
            Interest Form Link
          </Link>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Want email updates on our info sessions, application deadlines, and recruitment timeline? Fill out our interest form!
          </p>
        </Reveal>

        {/* Application Process */}
        <Reveal hover className="result-card p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Application Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center"><div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div><h3 className="text-xl font-semibold text-white mb-2">Choose Subteam(s)</h3><p className="text-gray-300">Choose which subteam(s) that you want to apply to.</p></div>
            <div className="text-center"><div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div><h3 className="text-xl font-semibold text-white mb-2">Submit Application</h3><p className="text-gray-300">Complete the online application with your background and interests.</p></div>
            <div className="text-center"><div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div><h3 className="text-xl font-semibold text-white mb-2">Technical Interview</h3><p className="text-gray-300">Showcase your technical skills, and tell us about you!</p></div>
          </div>
        </Reveal>

        {/* Coffee Chats */}
        <Reveal hover className="result-card coffee-chat-section mb-16 scroll-mt-24 p-4 sm:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-white sm:text-3xl">Coffee Chats</h2>
          <CoffeeChatsCarousel chats={coffeeChats} />
          <div className="hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-700">
                  <th className="py-3 pr-4 font-medium">Name</th>
                  <th className="py-3 pr-4 font-medium">Subteam</th>
                  <th className="py-3 pr-4 font-medium">Role</th>
                  <th className="py-3 pr-4 font-medium">Schedule</th>
                  <th className="py-3 font-medium">Bio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {coffeeChats.map((chat) => (
                  <tr key={chat.Name} className="align-top">
                    <td className="py-4 pr-4 text-white font-semibold whitespace-nowrap">{chat.Name}</td>
                    <td className="py-4 pr-4 text-gray-300 whitespace-nowrap">{chat.Subteam}</td>
                    <td className="py-4 pr-4 text-gray-300">{chat.Role}</td>
                    <td className="py-4 pr-4 whitespace-nowrap">
                      {chat['Google Calendar Link'] ? (
                        <a
                          href={chat['Google Calendar Link']}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-500 hover:text-red-400 font-semibold"
                        >
                          Book ↗
                        </a>
                      ) : (
                        <span className="text-gray-500">—</span>
                      )}
                    </td>
                    <td className="py-4 text-sm text-gray-400 leading-relaxed min-w-[24rem]">{chat.Bio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Application Process */}
        <div className="hidden bg-gray-800 rounded-2xl p-8 mb-16 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Application Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Choose Subteam</h3>
              <p className="text-gray-300">Choose which subteam that you want to apply to.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Submit Application</h3>
              <p className="text-gray-300">Complete the online application with your background and interests.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Technical Interview</h3>
              <p className="text-gray-300">Showcase your technical skills, and tell us about you!</p>
            </div>
          </div>
        </div>

        {/* Subteams */}
        <div className="hidden mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Subteams</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subteams.map((subteam) => (
              <Link key={subteam.name} href={subteam.href} className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow border border-gray-700">
                <div className="text-red-400 mb-4">
                  {subteam.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{subteam.name}</h3>
                <p className="text-gray-300">{subteam.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Timeline forn when we have dates. NOTE: this is not ready yet, so we will fill this out once things are finalized. */}
        {/* Timeline */}
        {/* <div className="mb-16"> */}
        {/*   <h2 className="text-3xl font-bold text-white mb-12 text-center">Important Dates</h2> */}
        {/*   <div className="max-w-4xl mx-auto"> */}
        {/*     <div className="relative"> */}
              {/* Timeline line */}
              {/* <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gray-600"></div> */}

              {/* Timeline items */}
        {/*       <div className="space-y-12"> */}
        {/*         {timelineEvents.map((event, index) => ( */}
        {/*           <div key={index} className="relative flex items-center"> */}
        {/*             {event.side === "left" ? ( */}
        {/*               <> */}
        {/*                 <div className="flex-1 text-right pr-8"> */}
        {/*                   <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3> */}
        {/*                   <p className="text-gray-300 mb-1">{event.date}</p> */}
        {/*                   {event.location && <p className="text-gray-400">{event.location}</p>} */}
        {/*                 </div> */}
        {/*                 <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-gray-900"></div> */}
        {/*                 <div className="flex-1 pl-8"></div> */}
        {/*               </> */}
        {/*             ) : ( */}
        {/*               <> */}
        {/*                 <div className="flex-1 pr-8"></div> */}
        {/*                 <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-gray-900"></div> */}
        {/*                 <div className="flex-1 text-left pl-8"> */}
        {/*                   <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3> */}
        {/*                   <p className="text-gray-300 mb-1">{event.date}</p> */}
        {/*                   {event.location && <p className="text-gray-400">{event.location}</p>} */}
        {/*                 </div> */}
        {/*               </> */}
        {/*             )} */}
        {/*           </div> */}
        {/*         ))} */}
        {/*       </div> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </div> */}

        {/* CTA */}
        <div className="hidden text-center bg-gray-800 rounded-2xl mb-16 p-8 border-gray-700">
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
