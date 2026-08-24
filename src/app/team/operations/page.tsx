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
