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
    name: 'Sophia Chen',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2028',
    image: '/team/sophia-chen.jpg',
  },
  {
    name: 'Micah Lai',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Aleena Xiao',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Michael Robbins',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2028',
    image: '/team/michael-robbins.jpg',
  },
  {
    name: 'Audrey Cheng',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Joyce Lin',
    position: 'Electrical Member',
    major: 'CS/ECE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Thomas Xin',
    position: 'Electrical Member',
    major: 'CS/ECE',
    year: '2029',
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
    name: 'Kaan Akan',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2029',
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
    name: 'Lucia Liu',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Nora Kingwell',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2028',
    image: '/team/nora-kingwell.jpg',
  },
  {
    name: 'Gabe Gil',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2029',
    image: '/team/placeholder.svg',
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
