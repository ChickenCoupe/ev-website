import Image from 'next/image'
import Link from 'next/link'
import PageMast from '@/components/site/PageMast'
import ActionLink from '@/components/site/ActionLink'
import Footer from '@/components/Footer'
import { proofPoints } from '@/data/site'

const sponsors = [
  {
    name: 'TDK',
    logo: '/sponsors/TDK_LOGO.png',
    website: 'https://www.tdk.com/en/index.html',
  },
  {
    name: 'NVIDIA',
    logo: '/sponsors/nvidia-logo.png',
    website: 'https://www.nvidia.com/en-us/',
  },
  {
    name: 'Second Order Effects',
    logo: '/sponsors/soe-logo.webp',
    website: 'https://soeffects.com/',
  },
  {
    name: 'Lutron',
    logo: '/sponsors/lutron-logo.png',
    website: 'https://www.lutron.com/us/en',
  },
  {
    name: 'Altium',
    logo: '/sponsors/altium-logo.avif',
    website: 'https://www.altium.com/',
  },
  {
    name: 'Penske',
    logo: '/sponsors/penske-logo.svg',
    website: 'https://www.gopenske.com/',
  },
  {
    name: 'Elegoo',
    logo: '/sponsors/elegoo-logo.avif',
    website: 'https://us.elegoo.com/',
  },
  {
    name: 'Rock West Composites',
    logo: '/sponsors/rockwest-logo.avif',
    website: 'https://www.rockwestcomposites.com/',
  },
  {
    name: 'Easy Composites',
    logo: '/sponsors/easycomp-logo.png',
    website: 'https://www.easycomposites.co.uk/',
  },
  {
    name: 'Rivian',
    logo: '/sponsors/rivian-logo.avif',
    website: 'https://rivian.com/',
  },
  {
    name: 'Altair',
    logo: '/sponsors/altair-logo.avif',
    website: 'https://altair.com/',
  },
  {
    name: 'Dragon Plate',
    logo: '/sponsors/dragonplate-logo.webp',
    website: 'https://dragonplate.com/',
  },
  {
    name: 'FixPosition',
    logo: '/sponsors/fixposition-logo.avif',
    website: 'https://www.fixposition.com/',
  },
  {
    name: 'Hakko',
    logo: '/sponsors/hakko-logo.png',
    website: 'https://hakkousa.com/',
  },
  {
    name: 'Celsius',
    logo: '/sponsors/celsius-logo.avif',
    website: 'https://www.celsius.com/',
  },
  {
    name: 'ANSYS',
    logo: '/sponsors/ansys-logo.svg',
    website: 'https://www.ansys.com/',
  },
  {
    name: 'OSH Park',
    logo: '/sponsors/oshpark-logo.avif',
    website: 'https://oshpark.com/',
  },
  {
    name: 'JBC',
    logo: '/sponsors/jbc-logo.svg',
    website: 'https://jbctools.com',
  },
  {
    name: 'Aircat',
    logo: '/sponsors/aircat-logo.svg',
    website: 'https://aircat.com',
  },
  {
    name: 'Kurtz Ersa',
    logo: '/sponsors/kurtz-logo.avif',
    website: 'https://kurtzersa.com',
  },
  {
    name: 'Korad',
    logo: '/sponsors/korad_logo.png',
    website: 'https://www.koradtechnology.com/',
  },
]

export default function Sponsors() {
  return (
    <main>
      <PageMast
        title="Our sponsors"
        body="Sponsors make fabrication, travel, and competition possible. Their logos sit on the car and in the shop."
        tone="red"
      />

      <section className="rl-band">
        <div className="rl-container">
          <h2 className="rl-title">Current sponsors</h2>
          <div className="rl-partner-wall">
            {sponsors.map((sponsor) => (
              <Link
                key={sponsor.name}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="rl-partner"
                aria-label={`${sponsor.name} website`}
              >
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  width={180}
                  height={90}
                  className="object-contain"
                  style={{ width: '100%', height: 'auto', maxHeight: '4.5rem' }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="rl-band rl-band--raised">
        <div className="rl-container rl-split">
          <div>
            <h2 className="rl-title">2025 competition results</h2>
          </div>
          <div className="rl-proof">
            {proofPoints.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="rl-finish">
        <div className="rl-container rl-finish__grid">
          <div>
            <h2>Support the next vehicle.</h2>
          </div>
          <div className="rl-proof">
            <p>Review the sponsorship packet for tiers, visibility, and collaboration paths.</p>
            <p>Direct inquiries go to cornellev@cornell.edu.</p>
          </div>
          <div className="rl-actions" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
            <ActionLink
              href="https://drive.google.com/file/d/1Q_YE834QOpAB5jCGuT5cxrJBnuHpwlFX/view?usp=drive_link"
              variant="invert"
              external
            >
              Sponsorship packet
            </ActionLink>
            <ActionLink
              href="mailto:cornellev@cornell.edu?subject=Sponsorship Inquiry"
              variant="ghost"
              external
            >
              Contact us
            </ActionLink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
