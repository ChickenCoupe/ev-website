export type VehicleTimelineItem = {
  name: string
  year: string
  image: string
  alt: string
  story: string
  category?: string
}

export const proofPoints = [
  '6th place Urban Concept',
  '1st place Data and Telemetry',
  '1.8x efficiency increase to 36.98 mi/kWh',
] as const

export const vehicleTimeline: VehicleTimelineItem[] = [
  {
    name: 'CRR18',
    year: '2018',
    image: '/vehicles/crr18.avif',
    alt: 'CRR18 prototype vehicle',
    story: '',
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
  },
]
