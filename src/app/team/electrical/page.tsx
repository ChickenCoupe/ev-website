import TeamSubpageShell from '@/components/site/TeamSubpageShell'
import MemberRoster from '@/components/site/MemberRoster'

const electricalTeam = [
  {
    name: 'Erica Jiang',
    position: 'Electrical Subteam Lead',
    major: 'ECE',
    year: '2028',
    image: '/team/erica-jiang.png',
  },
  {
    name: 'Kellen Yu',
    position: 'Electrical Subteam Lead',
    major: 'ECE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Guillaume Ah-Hot',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2027',
    image: '/team/guillaume-ah-hot.jpg',
  },
  {
    name: 'Nimish Goel',
    position: 'Electrical Member',
    major: 'ECE/CS',
    year: '2027',
    image: '/team/nimish-goel.jpg',
  },
  {
    name: 'Arnav Shah',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2026',
    image: '/team/arnav-shah.jpg',
  },
  {
    name: 'Jenny Lee',
    position: 'Electrical Member',
    major: 'ECE/CS',
    year: '2027',
    image: '/team/jenny-lee.jpg',
  },
  {
    name: 'Yoon Kang',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2026',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Elaine Cao',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2028',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Aariv Mody',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2028',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Sophia Chen',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2028',
    image: '/team/sophia-chen.jpg',
  },
  {
    name: 'Michael Robbins',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2028',
    image: '/team/michael-robbins.jpg',
  },
]

export default function ElectricalPage() {
  return (
    <TeamSubpageShell
      title="Electrical Team"
      body="We design and implement power systems, motor controllers, and electronic components that bring our electric vehicles to life."
    >
      <section className="rl-band">
        <div className="rl-container">
          <h2 className="rl-title">Electrical roster</h2>
          <MemberRoster members={electricalTeam} />
        </div>
      </section>
    </TeamSubpageShell>
  )
}
