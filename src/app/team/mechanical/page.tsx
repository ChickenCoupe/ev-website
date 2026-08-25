import TeamSubpageShell from '@/components/site/TeamSubpageShell'
import MemberRoster from '@/components/site/MemberRoster'

const mechanicalLeadership = [
  {
    name: 'Serkan Yurday',
    position: 'Mechanical Lead',
    major: 'MAE',
    year: '2028',
    image: '/team/serkan-yurday.jpg',
  },
  {
    name: 'Albert Zheng',
    position: 'Mechanical Lead',
    major: 'MAE',
    year: '2028',
    image: '/team/albert-zheng.jpg',
  },
]

const chassisTeam = [
  {
    name: 'Joe Dalton',
    position: 'Chassis Subteam Lead',
    major: 'MAE',
    year: '2027',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Jackson Skagen',
    position: 'Chassis Subteam Lead',
    major: 'MAE',
    year: '2028',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Yohanne Lin',
    position: 'Chassis Member',
    major: 'MAE',
    year: '2028',
    image: '/team/yohanne-lin.jpg',
  },
  {
    name: 'Ei Thiri Kyaw',
    position: 'Chassis Member',
    major: 'MAE',
    year: '2028',
    image: '/team/ei-thiri-kyaw.jpg',
  },
  {
    name: 'Ana Mahuad',
    position: 'Chassis Member',
    major: 'MAE',
    year: '2028',
    image: '/team/ana-mahuad.jpg',
  },
  {
    name: 'Isabella Rodriguez',
    position: 'Chassis Member',
    major: 'MAE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
]

const drivetrainTeam = [
  {
    name: 'Emely Benavides',
    position: 'Drivetrain Subteam Lead',
    major: 'MAE',
    year: '2028',
    image: '/team/emely-benavides.jpg',
  },
  {
    name: 'Jonathan Wan',
    position: 'Drivetrain Subteam Lead',
    major: 'MAE',
    year: '2028',
    image: '/team/jonathan-wan.jpg',
  },
  {
    name: 'Alexis Barrow',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2027',
    image: '/team/alexis-barrow.jpg',
  },
  {
    name: 'Anna Shub',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Ian Olenich',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Zachary Davidson',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
]

const steeringTeam = [
  {
    name: 'Lydia Woodall',
    position: 'Steering Subteam Lead',
    major: 'MAE',
    year: '2028',
    image: '/team/lydia-woodall.jpg',
  },
  {
    name: 'Aahil Ali',
    position: 'Steering Member',
    major: 'MAE',
    year: '2027',
    image: '/team/aahil-ali.jpg',
  },
  {
    name: 'Olivia Mei',
    position: 'Steering Member',
    major: 'MAE',
    year: '2028',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Ashley Johnny',
    position: 'Steering Member',
    major: 'ECE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Hamza Waseem',
    position: 'Steering Member',
    major: 'MAE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Magnus Simmons',
    position: 'Steering Member',
    major: 'ECE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Neha Chigurupati',
    position: 'Steering Member',
    major: 'MAE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Samiksha Emmaneni',
    position: 'Steering Member',
    major: 'MAE',
    year: '2029',
    image: '/team/placeholder.svg',
  },
]

export default function MechanicalPage() {
  return (
    <TeamSubpageShell
      title="Mechanical Team"
      body="We engineer the chassis, aerodynamics, and mechanical systems that make our electric vehicles efficient and competitive."
    >
      <section className="rl-band">
        <div className="rl-container">
          <h2 className="rl-title">Mechanical leadership</h2>
          <MemberRoster members={mechanicalLeadership} />
        </div>
      </section>

      <section className="rl-band rl-band--raised">
        <div className="rl-container">
          <h2 className="rl-title">Chassis</h2>
          <MemberRoster members={chassisTeam} />
        </div>
      </section>

      <section className="rl-band">
        <div className="rl-container">
          <h2 className="rl-title">Drivetrain</h2>
          <MemberRoster members={drivetrainTeam} />
        </div>
      </section>

      <section className="rl-band rl-band--raised">
        <div className="rl-container">
          <h2 className="rl-title">Steering</h2>
          <MemberRoster members={steeringTeam} />
        </div>
      </section>
    </TeamSubpageShell>
  )
}
