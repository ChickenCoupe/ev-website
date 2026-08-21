'use client'

import { useState } from 'react'
import Image from 'next/image'
import PageMast from '@/components/site/PageMast'
import TrackSection from '@/components/site/TrackSection'
import ActionLink from '@/components/site/ActionLink'
import Footer from '@/components/Footer'
import { proofPoints, vehicleTimeline } from '@/data/site'

const vehicleImages = [
  {
    src: '/vehicles/uc25_1.png',
    alt: 'Chicken Coupe - Front View',
  },
  {
    src: '/vehicles/uc25_2.avif',
    alt: 'Chicken Coupe - Side View',
  },
]

const specs = [
  { label: 'Weight', value: '75 kg' },
  { label: 'Chassis', value: 'Carbon Fiber Monocoque' },
  { label: 'Battery', value: '20000 mAH 6S' },
  { label: 'Motor', value: '48V BLDC' },
]

export default function Vehicles() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicleImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + vehicleImages.length) % vehicleImages.length
    )
  }

  return (
    <main>
      <PageMast
        title="Our vehicles"
        body="Explore Chicken Coupe and the prototypes that taught the team how packaging, power, and data change race-day behavior."
        tone="red"
      />

      <section className="rl-band">
        <div className="rl-container rl-split rl-split--top">
          <div>
            <h2 className="rl-title">Chicken Coupe</h2>
            <p className="rl-copy">2025 Urban Concept</p>

            <div className="rl-carousel" style={{ marginTop: '1.5rem' }}>
              <div className="rl-carousel__frame">
                <Image
                  src={vehicleImages[currentImageIndex].src}
                  alt={vehicleImages[currentImageIndex].alt}
                  fill
                  className="object-contain"
                  priority
                  sizes="(min-width: 1024px) 45vw, 90vw"
                />
              </div>
              <div className="rl-carousel__controls">
                <button
                  type="button"
                  className="rl-carousel__btn"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="rl-carousel__btn"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  Next
                </button>
                {vehicleImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className="rl-carousel__dot"
                    data-active={index === currentImageIndex}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="rl-subtitle">Specifications</h3>
            <dl className="rl-spec-grid">
              {specs.map((spec) => (
                <div key={spec.label} className="rl-spec">
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>

            <h3 className="rl-subtitle" style={{ marginTop: '2rem' }}>
              2025 achievements
            </h3>
            <div className="rl-proof">
              {proofPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rl-band rl-band--raised">
        <div className="rl-container">
          <h2 className="rl-title">Previous vehicles</h2>
          <TrackSection vehicles={vehicleTimeline} />
        </div>
      </section>

      <section className="rl-finish">
        <div className="rl-container rl-finish__grid">
          <div>
            <h2>Build the next vehicle.</h2>
          </div>
          <div className="rl-proof">
            <p>Mechanical, electrical, autonomy, data, and operations all ship to the car.</p>
            <p>Applications open each fall cycle on the Apply page.</p>
          </div>
          <ActionLink href="/apply" variant="invert">
            Join our team
          </ActionLink>
        </div>
      </section>

      <Footer />
    </main>
  )
}
