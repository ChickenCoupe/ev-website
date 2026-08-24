import TeamSubpageShell from '@/components/site/TeamSubpageShell'
import MemberRoster from '@/components/site/MemberRoster'

const mechanicalLeadership = [
  {
    name: 'Mackemey Munion',
    position: 'Mechanical Lead',
    major: 'MAE',
    year: '2026',
    image: '/team/mackemey-munion.jpg',
  },
  {
    name: 'Jordan Vogel',
    position: 'Mechanical Lead',
    major: 'MAE',
    year: '2027',
    image: '/team/jordan-vogel.jpg',
  },
]

const chassisTeam = [
  {
    name: 'Lucas Libshutz',
    position: 'Chassis Subteam Lead',
    major: 'MAE',
    year: '2027',
    image: '/team/lucas-libshutz.jpg',
  },
  {
    name: 'Zach Feldman',
    position: 'Chassis Subteam Lead',
    major: 'MAE',
    year: '2027',
    image: '/team/zach-feldman.jpg',
  },
  {
    name: 'Joe Dalton',
    position: 'Chassis Member',
    major: 'MAE',
    year: '2027',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Serkan Yurday',
    position: 'Chassis Member',
    major: 'MAE',
    year: '2028',
    image: '/team/serkan-yurday.jpg',
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
]

const drivetrainTeam = [
  {
    name: 'Christina Ge',
    position: 'Drivetrain Subteam Lead',
    major: 'MAE',
    year: '2027',
    image: '/team/christina-ge.jpg',
  },
  {
    name: 'Ava Ianuale',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2026',
    image: '/team/ava-ianuale.jpg',
  },
  {
    name: 'Nathan Varghese',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2027',
    image: '/team/nathan-varghese.jpg',
  },
  {
    name: 'Alexis Barrow',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2027',
    image: '/team/alexis-barrow.jpg',
  },
  {
    name: 'Emely Benavides',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2028',
    image: '/team/emely-benavides.jpg',
  },
  {
    name: 'Nora Kingwell',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2028',
    image: '/team/nora-kingwell.jpg',
  },
  {
    name: 'Jonathan Wan',
    position: 'Drivetrain Member',
    major: 'MAE',
    year: '2028',
    image: '/team/jonathan-wan.jpg',
  },
]

const steeringTeam = [
  {
    name: 'Cion Kim',
    position: 'Steering Subteam Lead',
    major: 'MAE',
    year: '2027',
    image: '/team/cion-kim.jpg',
  },
  {
    name: 'Tadg Manna',
    position: 'Steering Member',
    major: 'MAE',
    year: '2026',
    image: '/team/tadg-manna.jpg',
  },
  {
    name: 'Shashank Chalamsetty',
    position: 'Steering Member',
    major: 'MAE',
    year: '2026',
    image: '/team/shashank-chalamalasetty.jpg',
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
    name: 'Lydia Woodall',
    position: 'Steering Member',
    major: 'MAE',
    year: '2028',
    image: '/team/lydia-woodall.jpg',
  },
  {
    name: 'Albert Zheng',
    position: 'Steering Member',
    major: 'MAE',
    year: '2028',
    image: '/team/albert-zheng.jpg',
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
