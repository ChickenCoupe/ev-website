import TeamSubpageShell from '@/components/site/TeamSubpageShell'
import MemberRoster from '@/components/site/MemberRoster'

const autonomyTeam = [
  {
    name: 'Lucas Libshutz',
    position: 'Autonomy Lead',
    major: 'MAE',
    year: '2027',
    image: '/team/lucas-libshutz.jpg',
  },
  {
    name: 'Cam Mazzacane',
    position: 'Autonomy Lead',
    major: 'CS/Math',
    year: '2028',
    image: '/team/cam-mazzacane.jpg',
  },
  {
    name: 'Sophia Tsang',
    position: 'Autonomy Member',
    major: 'CS/ECE',
    year: '2027',
    image: '/team/sophia-tsang.jpg',
  },
  {
    name: 'Utku Melemetci',
    position: 'Autonomy Member',
    major: 'CS',
    year: '2027',
    image: '/team/utku-melemetci.jpg',
  },
  {
    name: 'Sameer Mehta',
    position: 'Autonomy Member',
    major: 'CS',
    year: '2028',
    image: '/team/sameer-mehta.jpg',
  },
  {
    name: 'Ibrahim Ahmed',
    position: 'Autonomy Member',
    major: 'ECE/CS',
    year: '2028',
    image: '/team/ibrahim-ahmed.jpg',
  },
  {
    name: 'Ethan Berkowitz',
    position: 'Autonomy Member',
    major: 'ECE/CS',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Ishaan Parikh',
    position: 'Autonomy Member',
    major: 'ECE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Jaiden Grimminck',
    position: 'Autonomy Member',
    major: 'CS',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Joyce Lin',
    position: 'Autonomy Member',
    major: 'CS/ECE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Smriti Kumar',
    position: 'Autonomy Member',
    major: 'CS/ECE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Surya Chandaskaran',
    position: 'Autonomy Member',
    major: 'CS/ORIE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Thomas Xin',
    position: 'Autonomy Member',
    major: 'CS/ECE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Sidharth Rao',
    position: 'Autonomy Advisor',
    major: 'CS/ECE',
    year: '2027',
    image: '/team/sidharth-rao.jpg',
  },
]

const focusAreas = [
  {
    label: '01',
    title: 'Computer Vision',
    body: 'Object detection and recognition for safe navigation',
  },
  {
    label: '02',
    title: 'Machine Learning',
    body: 'AI algorithms for intelligent decision making',
  },
  {
    label: '03',
    title: 'Path Planning',
    body: 'Optimal route calculation and obstacle avoidance',
  },
  {
    label: '04',
    title: 'Real-time Processing',
    body: 'High-performance computing for instant responses',
  },
]

export default function AutonomyTeam() {
  return (
    <TeamSubpageShell
      title="Autonomy Team"
      body="We develop autonomous driving systems, computer vision, and AI algorithms that enable our vehicles to navigate intelligently."
    >
      <section className="rl-band">
        <div className="rl-container">
          <h2 className="rl-title">Autonomy systems</h2>
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
          <h2 className="rl-title">Autonomy roster</h2>
          <MemberRoster members={autonomyTeam} />
        </div>
      </section>
    </TeamSubpageShell>
  )
}
