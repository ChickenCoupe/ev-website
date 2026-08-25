import Image from 'next/image'
import ActionLink from '@/components/site/ActionLink'

export default function Hero() {
  return (
    <section className="rl-mast rl-mast--red rl-mast--hero">
      <div className="rl-container rl-mast__grid rl-mast__grid--hero">
        <div className="rl-mast__copy">
          <h1>Cornell students build efficient electric vehicles.</h1>
          <div className="rl-actions">
            <ActionLink href="/apply" variant="invert">
              Apply to CEV
            </ActionLink>
            <ActionLink href="/team" variant="ghost">
              Meet the crew
            </ActionLink>
          </div>
        </div>
      </div>
      <div className="rl-mast__vehicle">
        <Image
          src="/vehicles/car-mask.webp"
          alt="Chicken Coupe urban concept vehicle, carbon fiber body with Shell Eco-Marathon markings"
          width={2400}
          height={1457}
          priority
          unoptimized
          sizes="(min-width: 1024px) 82vw, 110vw"
          className="rl-mast__vehicle-img"
        />
      </div>
    </section>
  )
}
