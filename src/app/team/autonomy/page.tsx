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
    position: 'Perception Lead',
    major: 'CS/ECE',
    year: '2027',
    image: '/team/sophia-tsang.jpg',
  },
  {
    name: 'Ethan Berkowitz',
    position: 'Controls Lead',
    major: 'ECE/CS',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Jaiden Grimminck',
    position: 'Simulation Lead',
    major: 'CS',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Smriti Kumar',
    position: 'Planning Lead',
    major: 'CS/ECE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Utku Melemetci',
    position: 'Autonomy Member',
    major: 'CS',
    year: '2027',
    image: '/team/utku-melemetci.jpg',
  },
  {
    name: 'Ishaan Parikh',
    position: 'Autonomy Member',
    major: 'ECE',
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

export default function AutonomyTeam() {
  return (
    <TeamSubpageShell
      title="Autonomy Team"
      body="We develop autonomous driving systems, computer vision, and AI algorithms that enable our vehicles to navigate intelligently."
    >
      <section className="rl-band">
        <div className="rl-container">
          <h2 className="rl-title">Autonomy roster</h2>
          <MemberRoster members={autonomyTeam} />
        </div>
      </section>
    </TeamSubpageShell>
  )
}
