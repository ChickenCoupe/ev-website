import TeamSubpageShell from '@/components/site/TeamSubpageShell'
import MemberRoster from '@/components/site/MemberRoster'

const operationsTeam = [
  {
    name: 'Lena Schapiro',
    position: 'Operations Lead',
    major: 'ORIE',
    year: '2028',
    image: '/team/lena-schapiro.jpg',
  },
  {
    name: 'Jessie Shi',
    position: 'Operations Member',
    major: 'ORIE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Kayra Tosun',
    position: 'Operations Member',
    major: 'ORIE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Lauren Stanley',
    position: 'Operations Member',
    major: 'ORIE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Mino Furtado',
    position: 'Operations Member',
    major: 'ORIE',
    year: '2027',
    image: '/team/placeholder.svg',
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
          <h2 className="rl-title">Operations roster</h2>
          <MemberRoster members={operationsTeam} />
        </div>
      </section>
    </TeamSubpageShell>
  )
}
