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
    image: '/team/jessie-shi.jpg',
  },
  {
    name: 'Kayra Tosun',
    position: 'Operations Member',
    major: 'ORIE',
    year: '2029',
    image: '/team/kayra-tosun.jpg',
  },
  {
    name: 'Lauren Stanley',
    position: 'Operations Member',
    major: 'ORIE',
    year: '2029',
    image: '/team/lauren-stanley.jpg',
  },
  {
    name: 'Mino Furtado',
    position: 'Operations Member',
    major: 'ORIE',
    year: '2027',
    image: '/team/minori-furtado.jpg',
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
