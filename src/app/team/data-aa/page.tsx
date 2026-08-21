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

const products = [
  {
    label: '01',
    title: 'Driver Dashboard',
    body: 'A mobile app that is both a driver dashboard and a data tunnel, forwarding electrical DAQ data to the Live Timing Dashboard.',
  },
  {
    label: '02',
    title: 'Live Timing Dashboard',
    body: 'A web-based dashboard useful for competition preparation that displays stats such as speed and battery level in real-time.',
  },
  {
    label: '03',
    title: 'AR Windshield',
    body: 'A forward-looking project aiming to display Driver Dashboard contents directly on the competition vehicle windshield.',
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
          <h2 className="rl-title">Data products</h2>
          {products.map((product) => (
            <div key={product.label} className="rl-phase">
              <p className="rl-phase__label">{product.label}</p>
              <h3>{product.title}</h3>
              <p>{product.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rl-band rl-band--raised">
        <div className="rl-container">
          <h2 className="rl-title">{'Data A&A roster'}</h2>
          <MemberRoster members={dataTeam} />
        </div>
      </section>
    </TeamSubpageShell>
  )
}
