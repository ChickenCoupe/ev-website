import Link from 'next/link'
import Image from 'next/image'
import { BarChart, Code, Users, Wrench, Zap } from 'lucide-react'
import ActionLink from '@/components/site/ActionLink'
import RecruitingLink, {
  RecruitingNoticeProvider,
} from '@/components/site/RecruitingLink'
import Footer from '@/components/Footer'
import CountdownTimer from '@/components/CountdownTimer'
import { recruitingLinks } from '@/data/site'

const PROJECT_TEAM_FORM =
  'https://www.duffield.cornell.edu/student-project-teams/join-a-project-team/'

function ApplicationPhase({ phase, year }: { phase: number; year?: number }) {
  return (
    <section className="rl-band">
      <div className="rl-container">
        <div className="rl-apply-panel">
          <h2 className="rl-title">Fall {year ?? ''} applications</h2>

          {phase === 1 && (
            <div className="rl-apply-closed">
              <p>
                CEV is excited to welcome a new class of team members each
                semester. Applications are now closed. We look forward to seeing
                you apply in the future.
              </p>
              <p>
                CEV thrives thanks to electrical, mechanical, and software
                engineers working alongside project managers, financial
                advisors, and graphic designers. For questions, reach out to{' '}
                <a href="mailto:cornellev@cornell.edu">cornellev@cornell.edu</a>.
              </p>
            </div>
          )}

          {phase === 2 && (
            <RecruitingNoticeProvider>
              <div className="rl-apply-open">
                <div className="rl-actions">
                  <RecruitingLink href={recruitingLinks.applyForm} variant="solid">
                    Fall application form
                  </RecruitingLink>
                </div>
                <p>
                  In the meantime, check the{' '}
                  <RecruitingLink href={recruitingLinks.coffeeChat}>
                    coffee chat information
                  </RecruitingLink>{' '}
                  and fill out our{' '}
                  <RecruitingLink href={recruitingLinks.interestForm}>
                    interest form
                  </RecruitingLink>
                  .
                </p>
                <p>
                  Thank you for your interest in joining. We have been glad to
                  meet so many people who want to work on autonomous and electric
                  vehicles.
                </p>
              </div>
            </RecruitingNoticeProvider>
          )}

          {phase === 3 && (
            <CountdownTimer target="2026-08-17T00:00:00" />
          )}
        </div>
      </div>
    </section>
  )
}

const processSteps = [
  {
    title: 'Project Team Form',
    body: (
      <>
        Fill out{' '}
        <Link href={PROJECT_TEAM_FORM} target="_blank" rel="noopener noreferrer">
          Cornell&apos;s Project Team Form
        </Link>
        . We cannot accept applications without it.
      </>
    ),
  },
  {
    title: 'Submit Application',
    body: 'Complete our application form with your background and interests.',
  },
  {
    title: 'Interview',
    body: "After reviewing applications, we'll contact you to schedule an interview.",
  },
]

const subteams = [
  {
    href: '/team/mechanical',
    icon: Wrench,
    name: 'Mechanical',
    description: 'Engineer chassis, suspension, aerodynamics, and manufacture the vehicle',
  },
  {
    href: '/team/electrical',
    icon: Zap,
    name: 'Electrical',
    description: 'Design power systems, motor controllers, and electronic circuits',
  },
  {
    href: '/team/data-aa',
    icon: Code,
    name: 'Data A&A',
    description: 'Develop telemetry visualization and capture software',
  },
  {
    href: '/team/autonomy',
    icon: BarChart,
    name: 'Autonomy',
    description: 'Develop autonomous driving systems and vehicle control software',
  },
  {
    href: '/team/operations',
    icon: Users,
    name: 'Operations',
    description: 'Manage partnerships, fundraising, marketing, and team operations',
  },
]

const timelineEvents = [
  {
    title: 'Project Teams Fest',
    date: '9/3 @ 4:00 PM - 6:00 PM',
    location: 'Duffield Atrium',
    side: 'left',
  },
  {
    title: 'Info Session #1',
    date: 'TBA',
    location: 'TBA',
    side: 'right',
  },
  {
    title: 'Info Session #2',
    date: 'TBA',
    location: 'TBA',
    side: 'left',
  },
  {
    title: 'Info Session #3',
    date: 'TBA',
    location: 'TBA',
    side: 'right',
  },
  {
    title: 'Info Session #4',
    date: 'TBA',
    location: 'TBA',
    side: 'left',
  },
  {
    title: 'Open House',
    date: 'TBA',
    location: 'Upson B60',
    side: 'right',
  },
  {
    title: 'Freshmen/Transfers Applications Due',
    date: '10/15 @ 11:59 PM',
    location: null,
    side: 'left',
  },
] as const

export default function Apply() {
  return (
    <main className="rl-apply">
      <header className="rl-mast">
        <div className="rl-container rl-apply-hero">
          <div className="rl-apply-hero__mark">
            <h1>Join</h1>
            <Image
              src="/logo.png"
              alt="Cornell Electric Vehicles"
              width={90}
              height={90}
              className="rl-apply-hero__logo"
              priority
            />
          </div>
          <p>
            Work on the mechanical, electrical, autonomy, data, or operations
            systems that put the vehicle on track.
          </p>
        </div>
      </header>

      <ApplicationPhase phase={2} year={2026} />

      <section className="rl-band">
        <div className="rl-container">
          <div className="rl-apply-panel">
            <h2 className="rl-title">Application process</h2>
            <div className="rl-apply-process">
              {processSteps.map((step, index) => (
                <div key={step.title} className="rl-apply-step">
                  <span className="rl-apply-step__num">{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rl-band">
        <div className="rl-container">
          <h2 className="rl-title rl-apply-heading">Our subteams</h2>
          <div className="rl-apply-subteams">
            {subteams.map((subteam) => {
              const Icon = subteam.icon
              return (
                <Link
                  key={subteam.name}
                  href={subteam.href}
                  className="rl-apply-subteam"
                >
                  <Icon className="w-8 h-8" aria-hidden="true" />
                  <h3>{subteam.name}</h3>
                  <p>{subteam.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="rl-band">
        <div className="rl-container">
          <h2 className="rl-title rl-apply-heading">Important dates</h2>
          <div className="rl-apply-dates">
            {timelineEvents.map((event) => (
              <article
                key={event.title}
                className="rl-apply-event"
                data-side={event.side}
              >
                <div className="rl-apply-event__copy">
                  <h3>{event.title}</h3>
                  <p>{event.date}</p>
                  {event.location ? <p>{event.location}</p> : null}
                </div>
                <span className="rl-apply-event__dot" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rl-finish">
        <div className="rl-container rl-apply-cta">
          <h2>Ready to apply?</h2>
          <p>Applications open at the beginning of each semester.</p>
          <div className="rl-actions">
            <ActionLink href="mailto:cornellev@cornell.edu" variant="invert" external>
              Contact us
            </ActionLink>
            <ActionLink href="/team" variant="ghost">
              Meet the team
            </ActionLink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
