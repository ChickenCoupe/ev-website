import type { ComponentType } from 'react'
import type { LucideProps } from 'lucide-react'
import { BrainCircuit, CircuitBoard, ClipboardList, Gauge, Wrench } from 'lucide-react'

export type ConceptId =
  | 'wind-tunnel'
  | 'pit-crew'
  | 'race-line'
  | 'systems-map'
  | 'first-lap'
  | 'night-shift'
  | 'open-seat'

export type VehicleStage = 'shell' | 'battery' | 'compute' | 'assembled'

export type SubteamId = 'mechanical' | 'electrical' | 'autonomy' | 'data' | 'operations'

export type ConceptMeta = {
  id: ConceptId
  name: string
  shortName: string
  frame: string
  mood: string
  accent: string
  ink: string
  surface: string
}

export type Subteam = {
  id: SubteamId
  name: string
  discipline: string
  role: string
  build: string
  icon: ComponentType<LucideProps>
  portrait: string
  vehicleDetail: string
  coordinates: {
    x: string
    y: string
  }
}

export const concepts: ConceptMeta[] = [
  {
    id: 'wind-tunnel',
    name: 'Wind Tunnel',
    shortName: 'Wind',
    frame: '3D engineering specimen',
    mood: 'quiet lab, high precision',
    accent: '#b31b1b',
    ink: '#111111',
    surface: '#f3f1ea',
  },
  {
    id: 'pit-crew',
    name: 'Pit Crew',
    shortName: 'Crew',
    frame: 'team-first recruiting wall',
    mood: 'garage heat, human pace',
    accent: '#ff4a32',
    ink: '#f7f0e3',
    surface: '#16130f',
  },
  {
    id: 'race-line',
    name: 'Race Line',
    shortName: 'Race',
    frame: 'competition story track',
    mood: 'cinematic, fast, earned',
    accent: '#b31b1b',
    ink: '#f5f5f0',
    surface: '#190b0b',
  },
  {
    id: 'systems-map',
    name: 'Systems Map',
    shortName: 'Map',
    frame: 'interactive subteam map',
    mood: 'clear, spatial, applicant-ready',
    accent: '#b31b1b',
    ink: '#0d1728',
    surface: '#e9eef6',
  },
  {
    id: 'first-lap',
    name: 'First Lap',
    shortName: 'Lap',
    frame: 'your first semester, week by week',
    mood: 'personal, forward-looking, warm',
    accent: '#b31b1b',
    ink: '#1a1512',
    surface: '#f6f2ec',
  },
  {
    id: 'night-shift',
    name: 'Night Shift',
    shortName: 'Shift',
    frame: 'live build-log, real work in progress',
    mood: 'late lab, honest, in motion',
    accent: '#e8442e',
    ink: '#e9e4da',
    surface: '#101314',
  },
  {
    id: 'open-seat',
    name: 'Open Seat',
    shortName: 'Seat',
    frame: 'two questions to your subteam',
    mood: 'direct, conversational, decisive',
    accent: '#b31b1b',
    ink: '#14100d',
    surface: '#efe9df',
  },
]

export const defaultConcept: ConceptId = 'wind-tunnel'

export const subteams: Subteam[] = [
  {
    id: 'mechanical',
    name: 'Mechanical',
    discipline: 'chassis, aero, manufacturing',
    role: 'Shapes the vehicle around low drag, low mass, and repairable race-day geometry.',
    build: 'carbon structure, body packaging, steering, wheels',
    icon: Wrench,
    portrait: '/team/serkan-yurday.jpg',
    vehicleDetail: '/vehicles/uc25_2.avif',
    coordinates: { x: '17%', y: '30%' },
  },
  {
    id: 'electrical',
    name: 'Electrical',
    discipline: 'battery, controls, harnessing',
    role: 'Turns power into predictable motion and keeps every sensor, board, and actuator talking.',
    build: 'battery pack, motor controller, wiring, safety loops',
    icon: CircuitBoard,
    portrait: '/team/erica-jiang.png',
    vehicleDetail: '/vehicles/uc25_1.png',
    coordinates: { x: '76%', y: '26%' },
  },
  {
    id: 'autonomy',
    name: 'Autonomy',
    discipline: 'perception and planning',
    role: 'Builds the stack that lets the car read a course and choose a path without hand holding.',
    build: 'perception, path planning, actuation logic',
    icon: BrainCircuit,
    portrait: '/team/lucas-libshutz.jpg',
    vehicleDetail: '/hero-vehicle.jpg',
    coordinates: { x: '82%', y: '65%' },
  },
  {
    id: 'data',
    name: 'Data A&A',
    discipline: 'telemetry and race analysis',
    role: 'Finds the losses hiding in test runs and turns messy track data into engineering decisions.',
    build: 'dashboards, telemetry, run analysis, simulations',
    icon: Gauge,
    portrait: '/team/daniel-sorokin.jpg',
    vehicleDetail: '/vehicles/uc25_2.avif',
    coordinates: { x: '44%', y: '80%' },
  },
  {
    id: 'operations',
    name: 'Operations',
    discipline: 'sponsors, logistics, media',
    role: 'Keeps the team supplied, visible, funded, and ready when competition week gets loud.',
    build: 'sponsor relationships, travel, media, recruiting',
    icon: ClipboardList,
    portrait: '/team/ana-mahuad.jpg',
    vehicleDetail: '/team-photo.jpg',
    coordinates: { x: '12%', y: '67%' },
  },
]

export const proofPoints = [
  '5th place Urban Concept',
  '1st place Communications',
  '2nd place Data and Telemetry',
]

export const vehicleTimeline = [
  {
    name: 'CRR18',
    year: '2018',
    image: '/vehicles/crr18.avif',
    alt: 'CRR18 prototype vehicle',
    story: "An early prototype that made the team's efficiency work tangible.",
  },
  {
    name: 'Kiwi Cruiser',
    year: '2019',
    image: '/vehicles/pt_21.avif',
    alt: 'Kiwi Cruiser prototype vehicle',
    story: 'A lighter platform for learning how packaging choices change race-day behavior.',
  },
  {
    name: 'Cuckoo Caravan',
    year: '2022',
    image: '/vehicles/pt22_1.avif',
    alt: 'Cuckoo Caravan prototype vehicle',
    story: 'A prototype that pushed the team toward cleaner fabrication and tighter systems work.',
  },
  {
    name: 'Chicken Coupe',
    year: '2025',
    image: '/vehicles/uc25_1.png',
    alt: 'Chicken Coupe urban concept vehicle',
    story: 'The current urban concept platform, built for inspection, data, and repeatable runs.',
  },
]

export const teamImages = [
  '/team-photo.jpg',
  '/team/alyssa-yoon.jpg',
  '/team/sameer-mehta.jpg',
  '/team/juan-pelaez.jpg',
  '/team/sophia-tsang.jpg',
  '/team/daniela-tran.jpg',
  '/team/kelvin-yuan.jpg',
  '/team/rachel-arena.jpg',
  '/team/cam-mazzacane.jpg',
]

export type FirstLapWeek = {
  id: string
  label: string
  title: string
  body: string
  artifact: string
  image: string
  alt: string
}

export const firstLapWeeks: FirstLapWeek[] = [
  {
    id: 'week-01',
    label: 'Week 01',
    title: 'You pick a bay.',
    body: 'Onboarding is a lab tour, not a lecture. You shadow every subteam for a night, ask what they are stuck on, and choose where you want to spend the semester.',
    artifact: 'You leave with: a subteam, a lead who knows your name.',
    image: '/team-photo.jpg',
    alt: 'The full Cornell Electric Vehicles team gathered around the vehicle',
  },
  {
    id: 'week-03',
    label: 'Week 03',
    title: 'Your first part ships.',
    body: 'Nobody warms the bench. By week three you have CAD in the assembly, a board at the fab, or a branch in the autonomy stack, reviewed by someone who did it last year.',
    artifact: 'You leave with: something on the car with your name in the log.',
    image: '/vehicles/uc25_2.avif',
    alt: 'Side profile of the Chicken Coupe urban concept vehicle',
  },
  {
    id: 'week-06',
    label: 'Week 06',
    title: 'First test day.',
    body: 'A cold parking lot at 7am, the car on a trailer, and you holding the telemetry laptop. Test days are where classroom physics turns into a number you have to explain.',
    artifact: 'You leave with: real run data and a job on the checklist.',
    image: '/hero-vehicle.jpg',
    alt: 'The vehicle out on pavement during a test run',
  },
  {
    id: 'week-09',
    label: 'Week 09',
    title: 'Something breaks. Good.',
    body: 'A connector backs out, a bracket cracks, the planner clips a cone. Failure here is a teardown, a root cause, and a fix, with people who have broken worse.',
    artifact: 'You leave with: a debugging story you will tell in interviews.',
    image: '/team/lucas-libshutz.jpg',
    alt: 'A team member working through a problem in the lab',
  },
  {
    id: 'week-13',
    label: 'Week 13',
    title: 'You present at design review.',
    body: 'End of semester, your subsystem goes up on the screen and alumni engineers ask why you chose what you chose. Then the car gets crated for competition in May.',
    artifact: 'You leave with: work you can defend, and a seat next year.',
    image: '/team/erica-jiang.png',
    alt: 'A team member presenting subsystem work',
  },
]

export type NightShiftEntry = {
  id: string
  time: string
  subteam: SubteamId
  text: string
  metricLabel?: string
  metricValue?: string
  image?: string
  alt?: string
}

export const nightShiftEntries: NightShiftEntry[] = [
  {
    id: 'entry-1940',
    time: '19:40',
    subteam: 'mechanical',
    text: 'Wet-sanding the left fairing seam before tomorrow\u2019s weigh-in. Third pass, still chasing a proud edge near the wheel cutout.',
    metricLabel: 'shell mass',
    metricValue: '-0.4 kg vs last body',
    image: '/vehicles/uc25_1.png',
    alt: 'The Chicken Coupe body shell under work lights',
  },
  {
    id: 'entry-2055',
    time: '20:55',
    subteam: 'electrical',
    text: 'Pack rebuild continues. Re-torqued the bus bars, balancing group three overnight so the morning crew can close the enclosure.',
    metricLabel: 'cell spread',
    metricValue: '11 mV across pack',
  },
  {
    id: 'entry-2210',
    time: '22:10',
    subteam: 'autonomy',
    text: 'Replaying Tuesday\u2019s runs. The planner is clipping apexes on the second cone gate, so we are re-tuning the cost on lateral error.',
    metricLabel: 'replays tonight',
    metricValue: '41 runs',
    image: '/team/daniel-sorokin.jpg',
    alt: 'A team member reviewing autonomy replays at a laptop',
  },
  {
    id: 'entry-2330',
    time: '23:30',
    subteam: 'data',
    text: 'Coast-down numbers disagree with the drag model by more than we like. Either the wind picked up or the sim is flattering us. Rerunning both.',
    metricLabel: 'model gap',
    metricValue: '6.8% high',
  },
  {
    id: 'entry-0045',
    time: '00:45',
    subteam: 'operations',
    text: 'Freight quote for the competition crate came back workable. Booked the truck window and updated the travel roster, 27 seats confirmed.',
    metricLabel: 'days to comp',
    metricValue: '38',
  },
  {
    id: 'entry-0214',
    time: '02:14',
    subteam: 'mechanical',
    text: 'Sanity lap around the service corridor before we lock up. Steering feels right. Lights off at 2:30, first meeting at noon.',
    image: '/team/serkan-yurday.jpg',
    alt: 'A team member with the vehicle late at night in the lab',
  },
]

export type OpenSeatOptionId = 'build' | 'wire' | 'code' | 'measure' | 'run'
export type OpenSeatStyleId = 'hands' | 'iterate' | 'people'

export const openSeatQuestions = {
  make: {
    prompt: 'What do you want to make?',
    options: [
      { id: 'build' as OpenSeatOptionId, label: 'Parts you can hold' },
      { id: 'wire' as OpenSeatOptionId, label: 'Power and circuits' },
      { id: 'code' as OpenSeatOptionId, label: 'Code that drives' },
      { id: 'measure' as OpenSeatOptionId, label: 'Sense of messy data' },
      { id: 'run' as OpenSeatOptionId, label: 'The team run well' },
    ],
  },
  style: {
    prompt: 'How do you like to work?',
    options: [
      { id: 'hands' as OpenSeatStyleId, label: 'Heads-down building' },
      { id: 'iterate' as OpenSeatStyleId, label: 'Test, break, retune' },
      { id: 'people' as OpenSeatStyleId, label: 'Across the whole team' },
    ],
  },
}

export const openSeatMatrix: Record<OpenSeatOptionId, Record<OpenSeatStyleId, SubteamId>> = {
  build: { hands: 'mechanical', iterate: 'mechanical', people: 'operations' },
  wire: { hands: 'electrical', iterate: 'electrical', people: 'electrical' },
  code: { hands: 'autonomy', iterate: 'autonomy', people: 'data' },
  measure: { hands: 'data', iterate: 'data', people: 'operations' },
  run: { hands: 'operations', iterate: 'data', people: 'operations' },
}

export const openSeatFirstBuilds: Record<SubteamId, string> = {
  mechanical: 'Your first build: a fixture or bracket that goes on the real car, machined in our shop.',
  electrical: 'Your first build: a harness segment or sensor board that has to survive a test day.',
  autonomy: 'Your first build: a perception or planning change you can replay against real track logs.',
  data: 'Your first build: a telemetry view the drive team actually opens on race day.',
  operations: 'Your first build: a sponsor pitch or logistics plan that moves the team to competition.',
}

export function isConceptId(value: string | null | undefined): value is ConceptId {
  return concepts.some((concept) => concept.id === value)
}

export function getConcept(value: string | null | undefined) {
  return concepts.find((concept) => concept.id === value) ?? concepts[0]
}
