import TeamSubpageShell from '@/components/site/TeamSubpageShell'
import MemberRoster from '@/components/site/MemberRoster'

const electricalTeam = [
  {
    name: 'Rachel Arena',
    position: 'Electrical Co-Lead',
    major: 'ECE',
    year: '2026',
    image: '/team/rachel-arena.jpg',
  },
  {
    name: 'Edward Lee',
    position: 'Electrical Co-Lead',
    major: 'ECE',
    year: '2026',
    image: '/team/edward-lee.jpg',
  },
  {
    name: 'Micah Fisher',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2026',
    image: '/team/micah-fisher.jpg',
  },
  {
    name: 'Guillaume Ah-Hot',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2027',
    image: '/team/guillaume-ah-hot.jpg',
  },
  {
    name: 'Nimish Goel',
    position: 'Electrical Member',
    major: 'ECE/CS',
    year: '2027',
    image: '/team/nimish-goel.jpg',
  },
  {
    name: 'Arnav Shah',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2026',
    image: '/team/arnav-shah.jpg',
  },
  {
    name: 'Jenny Lee',
    position: 'Electrical Member',
    major: 'ECE/CS',
    year: '2027',
    image: '/team/jenny-lee.jpg',
  },
  {
    name: 'Yoon Kang',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2026',
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
    name: 'Aariv Mody',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2028',
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
    name: 'Michael Robbins',
    position: 'Electrical Member',
    major: 'ECE',
    year: '2028',
    image: '/team/michael-robbins.jpg',
  },
]

const focusAreas = [
  {
    label: '01',
    title: 'Power Systems',
    body: 'Design battery management systems and power distribution networks.',
  },
  {
    label: '02',
    title: 'Motor Control',
    body: 'Develop motor controllers and drive systems for optimal performance.',
  },
  {
    label: '03',
    title: 'Safety Systems',
    body: 'Implement safety monitoring and protection circuits.',
  },
  {
    label: '04',
    title: 'Data Acquisition',
    body: 'Create real-time monitoring and telemetry systems.',
  },
]

const technologies = [
  { title: 'MATLAB/Simulink', meta: 'Control Systems' },
  { title: 'Altium Designer', meta: 'PCB Design' },
  { title: 'STM32', meta: 'Microcontrollers' },
  { title: 'CAN Bus', meta: 'Communication' },
]

export default function ElectricalPage() {
  return (
    <TeamSubpageShell
      title="Electrical Team"
      body="We design and implement power systems, motor controllers, and electronic components that bring our electric vehicles to life."
    >
      <section className="rl-band">
        <div className="rl-container">
          <h2 className="rl-title">Electrical systems</h2>
          <p className="rl-copy" style={{ marginBottom: '1.5rem' }}>
            The electrical team is responsible for all electronic systems that
            power and control our vehicles.
          </p>
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
          <h2 className="rl-title">Tools and platforms</h2>
          <div className="rl-lane" style={{ marginTop: '1.5rem' }}>
            {technologies.map((tech) => (
              <div key={tech.title} className="rl-lane__row">
                <div>
                  <h3 className="rl-lane__title">{tech.title}</h3>
                  <p className="rl-lane__meta">{tech.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rl-band">
        <div className="rl-container">
          <h2 className="rl-title">Electrical roster</h2>
          <MemberRoster members={electricalTeam} />
        </div>
      </section>
    </TeamSubpageShell>
  )
}
