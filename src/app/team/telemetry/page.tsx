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
    major: 'CS/Stats',
    year: '2028',
    image: '/team/katie-xiao.jpg',
  },
  {
    name: 'Ajay Parthibha',
    position: 'Telemetry Member',
    major: 'CS',
    year: '2027',
    image: '/team/ajay-parthibha.jpg',
  },
  {
    name: 'Julia Lau',
    position: 'Telemetry Member',
    major: 'CS',
    year: '2028',
    image: '/team/julia-lau.jpg',
  },
  {
    name: 'Eric Shen',
    position: 'Telemetry Member',
    major: 'CS/Math',
    year: '2029',
    image: '/team/eric-shen.jpg',
  },
  {
    name: 'Donte Truong',
    position: 'Telemetry Member',
    major: 'CS/ECE',
    year: '2029',
    image: '/team/donte-truong.jpg',
  },
  {
    name: 'Adi Murgescu',
    position: 'Telemetry Member',
    major: 'CS/Math',
    year: '2029',
    image: '/team/adi-murgescu.jpg',
  },
  {
    name: 'Meira Chenicheri',
    position: 'Telemetry Member',
    major: 'CS',
    year: '2029',
    image: '/team/meira-chenicheri.jpg',
  },
  {
    name: 'Shreyaa Sanjay',
    position: 'Telemetry Member',
    major: 'CS/ECE',
    year: '2029',
    image: '/team/shreyaa-sanjay.jpg',
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
