export type VehicleTimelineItem = {
  name: string
  year: string
  image: string
  alt: string
  story: string
  category?: string
}

export type SubteamSummary = {
  id: string
  name: string
  discipline: string
  role: string
  href: string
  portrait: string
}

export const proofPoints = [
  '5th place Urban Concept',
  '1st place Communications',
  '2nd place Data and Telemetry',
] as const

export const proofDetails = [
  {
    place: '5th',
    title: 'Urban Concept',
    body: 'Efficient city vehicle design powered by battery electric technology. Passed all inspections and completed 3 successful runs.',
  },
  {
    place: '1st',
    title: 'Communications',
    body: 'Exceptional outreach, branding, and public engagement promoting sustainable energy innovation.',
  },
  {
    place: '2nd',
    title: 'Data & Telemetry',
    body: 'Excellence in vehicle data collection, analysis, and implementation to optimize performance.',
  },
] as const

export const vehicleTimeline: VehicleTimelineItem[] = [
  {
    name: 'CRR18',
    year: '2018',
    image: '/vehicles/crr18.avif',
    alt: 'CRR18 prototype vehicle',
    story: "",
    category: 'Prototype',
  },
  {
    name: 'Kiwi Cruiser',
    year: '2019',
    image: '/vehicles/pt_21.avif',
    alt: 'Kiwi Cruiser prototype vehicle',
    story: '',
    category: 'Prototype',
  },
  {
    name: 'Cuckoo Caravan',
    year: '2022',
    image: '/vehicles/pt22_1.avif',
    alt: 'Cuckoo Caravan prototype vehicle',
    story: '',
    category: 'Prototype',
  },
  {
    name: 'Chicken Coupe',
    year: '2025',
    image: '/vehicles/uc25_1.png',
    alt: 'Chicken Coupe urban concept vehicle',
    story: '',
    category: 'Urban Concept',
  },
  {
    name: 'Dodo Drifter',
    year: '2026',
    image: '/vehicles/uc26_1.png',
    alt: 'Dodo Drifter urban concept vehicle',
    story: '',
    category: 'Urban Concept',
  }
]

export const teamStats = [
  { value: '85', label: 'members' },
  { value: '6', label: 'subteams' },
  { value: '10+', label: 'majors' },
  { value: '50%', label: 'women' },
] as const

export const subteamSummaries: SubteamSummary[] = [
  {
    id: 'leadership',
    name: 'Leadership',
    discipline: 'guidance and coordination',
    role: 'Sets direction across the build, keeps every bay aligned, and owns the race-week decisions.',
    href: '/team/leadership',
    portrait: '/team/sameer-mehta.jpg',
  },
  {
    id: 'mechanical',
    name: 'Mechanical',
    discipline: 'chassis, aero, manufacturing',
    role: 'Shapes the vehicle around low drag, low mass, and repairable race-day geometry.',
    href: '/team/mechanical',
    portrait: '/team/serkan-yurday.jpg',
  },
  {
    id: 'electrical',
    name: 'Electrical',
    discipline: 'battery, controls, harnessing',
    role: 'Turns power into predictable motion and keeps every sensor, board, and actuator talking.',
    href: '/team/electrical',
    portrait: '/team/erica-jiang.png',
  },
  {
    id: 'data-aa',
    name: 'Data A&A',
    discipline: 'telemetry and race analysis',
    role: 'Finds the losses hiding in test runs and turns messy track data into engineering decisions.',
    href: '/team/data-aa',
    portrait: '/team/daniel-sorokin.jpg',
  },
  {
    id: 'autonomy',
    name: 'Autonomy',
    discipline: 'perception and planning',
    role: 'Builds the stack that lets the car read a course and choose a path without hand holding.',
    href: '/team/autonomy',
    portrait: '/team/lucas-libshutz.jpg',
  },
  {
    id: 'operations',
    name: 'Operations',
    discipline: 'sponsors, logistics, media',
    role: 'Keeps the team supplied, visible, funded, and ready when competition week gets loud.',
    href: '/team/operations',
    portrait: '/team/ana-mahuad.jpg',
  },
]

export const navLinks = [
  { href: '/team', label: 'Team' },
  { href: '/vehicles', label: 'Vehicles' },
  { href: '/alumni', label: 'Alumni' },
  { href: '/sponsors', label: 'Sponsors' },
  // Blog temporarily disabled — restore { href: '/blog', label: 'Blog' } when ready
] as const

/**
 * Apply-page form URLs. Leave a value empty ('') to show the
 * "link coming soon" popup. Paste a URL to send people there instead.
 */
export const recruitingLinks = {
  applyForm: '',
  coffeeChat: '',
  interestForm: '',
}

export const socialLinks = [
  {
    href: 'https://www.instagram.com/cornellelectricvehicles/',
    label: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/in/cornell-electric-vehicles-project-team-241840294/',
    label: 'LinkedIn',
  },
  {
    href: 'https://www.youtube.com/channel/UCIfPZHm8n76n-ruNO9-Xkag',
    label: 'YouTube',
  },
  {
    href: 'mailto:cornellev@cornell.edu',
    label: 'Email',
  },
] as const
