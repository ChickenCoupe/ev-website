import TeamSubpageShell from '@/components/site/TeamSubpageShell'
import MemberRoster from '@/components/site/MemberRoster'

const dataTeam = [
  {
    name: 'Rhea Agrawal',
    position: 'Telemetry Subteam Lead',
    major: 'CS',
    year: '2028',
    image: '/team/rhea-agrawal.jpg',
  },
  {
    name: 'Katie Xiao',
    position: 'Telemetry Subteam Lead',
    major: 'CS',
    year: '2028',
    image: '/team/katie-xiao.jpg',
  },
  {
    name: 'Amelia Zheng',
    position: 'Telemetry Member',
    major: 'CS',
    year: '2027',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Ajay Parthibha',
    position: 'Telemetry Member',
    major: 'CS',
    year: '2028',
    image: '/team/ajay-parthibha.jpg',
  },
  {
    name: 'Julia Lau',
    position: 'Telemetry Member',
    major: 'CS',
    year: '2028',
    image: '/team/placeholder.svg',
  },
]

export default function DataTeam() {
  return (
    <TeamSubpageShell
      title="Telemetry Team"
      body="The Telemetry subteam uses web, mobile, and IoT technology to collect, analyze, and display data from vehicle testing. We're responsible for the high-frequency data collection, storage, and efficiency analysis required for data-driven engineering."
    >
      <section className="rl-band">
        <div className="rl-container">
          <h2 className="rl-title">Telemetry roster</h2>
          <MemberRoster members={dataTeam} />
        </div>
      </section>
    </TeamSubpageShell>
  )
}
