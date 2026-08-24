import Image from 'next/image'
import ActionLink from '@/components/site/ActionLink'

export default function Hero() {
  return (
    <section className="rl-mast rl-mast--red">
      <div className="rl-container rl-mast__grid">
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
        <div className="rl-mast__aside">
          <p>
            We design, manufacture, test, and race vehicles for Shell
            Eco-Marathon.
          </p>
          <div className="rl-media rl-media--wide" style={{ marginTop: '1.5rem' }}>
            <Image
              src="/vehicles/uc25_1.png"
              alt="Chicken Coupe urban concept vehicle"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
