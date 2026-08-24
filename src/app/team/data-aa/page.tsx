import TeamSubpageShell from '@/components/site/TeamSubpageShell'
import MemberRoster from '@/components/site/MemberRoster'

const dataTeam = [
  {
    name: 'Daniel Sorokin',
    position: 'Data A&A Lead',
    major: 'CS',
    year: '2027',
    image: '/team/daniel-sorokin.jpg',
  },
  {
    name: 'Ruth Taddesse',
    position: 'Data A&A Lead',
    major: 'CS',
    year: '2027',
    image: '/team/ruth-taddesse.jpg',
  },
  {
    name: 'Mehdi Heydari',
    position: 'Data A&A Member',
    major: 'CS',
    year: '2026',
    image: '/team/mehdi-heydari.jpg',
  },
  {
    name: 'Amelia Zheng',
    position: 'Data A&A Member',
    major: 'CS',
    year: '2027',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Rhea Agrawal',
    position: 'Data A&A Member',
    major: 'CS',
    year: '2028',
    image: '/team/rhea-agrawal.jpg',
  },
  {
    name: 'Ajay Parthibha',
    position: 'Data A&A Member',
    major: 'CS',
    year: '2028',
    image: '/team/ajay-parthibha.jpg',
  },
  {
    name: 'Julia Lau',
    position: 'Data A&A Member',
    major: 'CS',
    year: '2028',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Jerry Ji',
    position: 'Data A&A Member',
    major: 'CS',
    year: '2028',
    image: '/team/jerry-ji.jpg',
  },
  {
    name: 'Katie Xiao',
    position: 'Data A&A Member',
    major: 'CS',
    year: '2028',
    image: '/team/katie-xiao.jpg',
  },
]

export default function DataTeam() {
  return (
    <TeamSubpageShell
      title="Data A&A Team"
      body="The Data Apps and Analytics (Data A&A) subteam uses web, mobile, and IoT technology to collect, analyze, and display data from vehicle testing. We're responsible for the high-frequency data collection, storage, and efficiency analysis required for data-driven engineering."
    >
      <section className="rl-band">
        <div className="rl-container">
          <h2 className="rl-title">Data A&A roster</h2>
          <MemberRoster members={dataTeam} />
        </div>
      </section>
    </TeamSubpageShell>
  )
}
