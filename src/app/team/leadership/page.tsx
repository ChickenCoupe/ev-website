import TeamSubpageShell from '@/components/site/TeamSubpageShell'
import MemberRoster from '@/components/site/MemberRoster'

const leadershipTeam = [
  {
    name: 'Daniel Sorokin',
    position: 'Full Team Lead',
    major: 'CS',
    year: '2027',
    image: '/team/daniel-sorokin.jpg',
    email: 'dhs263@cornell.edu',
    linkedin: 'https://www.linkedin.com/in/daniel-sorokin-6a391328b/',
  },
  {
    name: 'Zach Feldman',
    position: 'Full Team Lead',
    major: 'MAE',
    year: '2027',
    image: '/team/zach-feldman.jpg',
    email: 'zlf3@cornell.edu',
    linkedin: 'https://www.linkedin.com/in/zlf3/',
  },
  {
    name: 'Ruth Taddesse',
    position: 'Full Team Lead',
    major: 'CS',
    year: '2027',
    image: '/team/ruth-taddesse.jpg',
    email: 'ryt5@cornell.edu',
    linkedin: 'https://linkedin.com/in/ruth-taddesse',
  },
  {
    name: 'Lucas Libshutz',
    position: 'Autonomy Lead',
    major: 'MAE',
    year: '2027',
    image: '/team/lucas-libshutz.jpg',
    email: 'lsl94@cornell.edu',
    linkedin: 'https://linkedin.com/in/lucaslibshutz',
  },
  {
    name: 'Cam Mazzacanne',
    position: 'Autonomy Lead',
    major: 'CS/Math',
    year: '2028',
    image: '/team/cam-mazzacane.jpg',
    email: 'clm357@cornell.edu',
    linkedin: 'https://linkedin.com/in/cam-mazzcanne',
  },
  {
    name: 'Erica Jiang',
    position: 'Electrical Lead',
    major: 'ECE',
    year: '2028',
    image: '/team/erica-jiang.png',
    email: 'ej289@cornell.edu',
    linkedin: 'https://www.linkedin.com/in/erica-jiang-321322287/',
  },
  {
    name: 'Kellen Yu',
    position: 'Electrical Lead',
    major: 'ECE',
    year: '2029',
    image: '/team/placeholder.svg',
    email: 'kcy24@cornell.edu',
    linkedin: 'https://www.linkedin.com/in/kellen-yu-ab2728318/',
  },
  {
    name: 'Serkan Yurday',
    position: 'Mechanical Lead',
    major: 'MAE',
    year: '2028',
    image: '/team/serkan-yurday.jpg',
    email: 'sy794@cornell.edu',
    linkedin: 'https://www.linkedin.com/in/serkanyurday/',
  },
  {
    name: 'Albert Zheng',
    position: 'Mechanical Lead',
    major: 'MAE',
    year: '2028',
    image: '/team/albert-zheng.jpg',
    email: 'az487@cornell.edu',
    linkedin: 'https://www.linkedin.com/in/al-zheng/',
  },
  {
    name: 'Katie Xiao',
    position: 'Telemetry Lead',
    major: 'CS/Stats',
    year: '2028',
    image: '/team/katie-xiao.jpg',
    email: 'jx385@cornell.edu',
    linkedin: 'https://www.linkedin.com/in/kayt9673/',
  },
  {
    name: 'Rhea Agrawal',
    position: 'Telemetry Lead',
    major: 'CS',
    year: '2028',
    image: '/team/rhea-agrawal.jpg',
    email: 'ra677@cornell.edu',
    linkedin: 'https://www.linkedin.com/in/rhea-agrawal-aab7b3328/',
  },
  {
    name: 'Lena Schapiro',
    position: 'Operations Lead',
    major: 'ORIE',
    year: '2028',
    image: '/team/lena-schapiro.jpg',
    email: 'lms458@cornell.edu',
    linkedin: 'https://www.linkedin.com/in/lena-schapiro/',
  },
]

export default function LeadershipPage() {
  return (
    <TeamSubpageShell
      title="Leadership Team"
      body="Our executive board provides guidance, organization, and leadership across all aspects of Cornell Electric Vehicles."
    >
      <section className="rl-band">
        <div className="rl-container">
          <h2 className="rl-title">Leadership roster</h2>
          <MemberRoster members={leadershipTeam} />
        </div>
      </section>
    </TeamSubpageShell>
  )
}
