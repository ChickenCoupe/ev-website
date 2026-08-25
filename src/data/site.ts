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
  '6th place Urban Concept',
  '1st place Data and Telemetry',
  '1.8x efficiency increase to 36.98 mi/kWh',
] as const

export const proofDetails = [
  {
    place: '6th',
    title: 'Urban Concept',
    body: 'Efficient city vehicle design powered by battery electric technology.',
  },
  {
    place: '1st',
    title: 'Data & Telemetry',
    body: 'Recognized for our innovative data collection and optimization strategy.',
  },
  {
    place: '1.8x',
    title: 'Efficiency Increase',
    body: "The team increased the urban concept's efficiency to 36.98 mi/kWh, almost doubling the previous year's efficiency.",
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
    year: '2024',
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
    role: 'Our amazing leadership that helps us organize, create, build, and race our vehicles.',
    href: '/team/leadership',
    portrait: '/team/sameer-mehta.jpg',
  },
  {
    id: 'mechanical',
    name: 'Mechanical',
    discipline: 'chassis, aero, manufacturing',
    role: 'Shapes the vehicle and its systems, from the carbon fiber monocoque to the aerodynamic bodywork.',
    href: '/team/mechanical',
    portrait: '/team/serkan-yurday.jpg',
  },
  {
    id: 'electrical',
    name: 'Electrical',
    discipline: 'battery, controls, harnessing',
    role: 'Designs and builds the vehicle’s electrical systems, from the battery pack to the motor controller and everything in between.',
    href: '/team/electrical',
    portrait: '/team/erica-jiang.png',
  },
  {
    id: 'data-aa',
    name: 'Telemetry',
    discipline: 'telemetry and race analysis',
    role: 'Analyzes vehicle data to improve performance and reliability, and builds the telemetry systems that let the team see what the car is doing in real time.',
    href: '/team/data-aa',
    portrait: '/team/katie-xiao.jpg',
  },
  {
    id: 'autonomy',
    name: 'Autonomy',
    discipline: 'perception and planning',
    role: 'Makes the vehicle drive itself, from the sensors that perceive the world to the algorithms that plan a safe path through it.',
    href: '/team/autonomy',
    portrait: '/team/lucas-libshutz.jpg',
  },
  {
    id: 'operations',
    name: 'Operations',
    discipline: 'sponsors, logistics, media',
    role: 'Helps the team run smoothly, from managing sponsors and finances to organizing events and more!',
    href: '/team/operations',
    portrait: '/team/lena-schapiro.jpg',
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
  applyForm:
    'https://docs.google.com/forms/d/e/1FAIpQLSccbMhOsd8ubA3QOC4H1Q3ZRBalmmk0lNqcNneyT-N650SZDg/viewform?usp=sharing&ouid=102160163982044776728',
  coffeeChat: '',
  interestForm:
    'https://docs.google.com/forms/d/e/1FAIpQLSeTDgkBkoyXQS9YPAmIlsOSRW8ZHlHpMccRRt7n-RoQeb180A/viewform?usp=dialog',
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
