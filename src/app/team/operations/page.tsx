import TeamSubpageShell from '@/components/site/TeamSubpageShell'
import MemberRoster from '@/components/site/MemberRoster'

const operationsTeam = [
  {
    name: 'Tatum McLaughlin',
    position: 'Operations Lead',
    major: 'ORIE',
    year: '2027',
    image: '/team/tatum-mclaughlin.jpg',
  },
  {
    name: 'Cate Defa',
    position: 'Operations Member',
    major: 'ORIE',
    year: '2027',
    image: '/team/cate-defa.jpg',
  },
  {
    name: 'Lena Schapiro',
    position: 'Operations Member',
    major: 'ORIE',
    year: '2028',
    image: '/team/lena-schapiro.jpg',
  },
  {
    name: 'Bator Diop',
    position: 'Operations Member',
    major: 'ORIE',
    year: '2028',
    image: '/team/bator-diop.jpg',
  },
  {
    name: 'Eunice Son',
    position: 'Operations Member',
    major: 'ORIE',
    year: '2027',
    image: '/team/eunice-son.jpg',
  },
]

const focusAreas = [
  {
    label: '01',
    title: 'Fundraising & Sponsorships',
    body: "Secure funding and build partnerships with industry leaders to support our team's operations and competition participation.",
  },
  {
    label: '02',
    title: 'Marketing & Outreach',
    body: "Promote our team's achievements and initiatives through social media, events, and community engagement to build our brand and attract new members.",
  },
  {
    label: '03',
    title: 'Event Coordination',
    body: 'Plan and execute team events, competition logistics, and cross-functional meetings to maintain team cohesion and operational efficiency.',
  },
]

export default function OperationsTeam() {
  return (
    <TeamSubpageShell
      title="Operations Team"
      body="Operations manages sponsorships, fundraising, recruiting, travel, and competition logistics."
    >
      <section className="rl-band">
        <div className="rl-container">
          <h2 className="rl-title">Operations responsibilities</h2>
          {focusAreas.map((area) => (
            <div key={area.label} className="rl-phase">
              <p className="rl-phase__label">{area.label}</p>
              <h3>{area.title}</h3>
              <p>{area.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rl-band rl-band--raised">
        <div className="rl-container">
          <h2 className="rl-title">Operations roster</h2>
          <MemberRoster members={operationsTeam} />
        </div>
      </section>
    </TeamSubpageShell>
  )
}
