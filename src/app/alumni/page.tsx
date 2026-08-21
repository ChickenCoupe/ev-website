import Image from 'next/image'
import PageMast from '@/components/site/PageMast'
import ActionLink from '@/components/site/ActionLink'
import Footer from '@/components/Footer'

export default function Alumni() {
  return (
    <main className="rl-alumni">
      <PageMast
        title="Built here. Working everywhere."
        body="CEV alumni leave the shop with real vehicle systems behind them, then carry that craft into electric vehicles, autonomy, aerospace, and research."
        tone="red"
      />

      <section className="rl-band rl-band--ink rl-alumni-stage">
        <div className="rl-container rl-alumni-stage__grid">
          <div className="rl-alumni-stage__copy">
            <h2 className="rl-title">Where alumni build</h2>
            <p className="rl-copy">
              From Google and SpaceX to Rivian, Wayve, and Lockheed Martin, CEV
              graduates ship hardware and software at the companies shaping
              mobility and defense.
            </p>
          </div>
          <figure className="rl-alumni-stage__figure">
            <Image
              src="/alumni/companies.png"
              alt="Logos of companies where CEV alumni work, including Google, Amazon, Microsoft, Apple, Meta, Ford, SpaceX, Rivian, NVIDIA, Tesla, ASML, GM, Palantir, Wayve, Lightship, Lockheed Martin, PayPal, Anduril, Intel, MIT Lincoln Laboratory, IHMC, United, Leidos, and The Boring Company."
              width={2496}
              height={1496}
              sizes="(max-width: 1023px) 100vw, min(1400px, 92vw)"
              className="rl-alumni-stage__image"
              priority
            />
          </figure>
        </div>
      </section>

      <section className="rl-band rl-band--ink rl-alumni-stage rl-alumni-stage--academia">
        <div className="rl-container rl-alumni-stage__grid rl-alumni-stage__grid--wide">
          <div className="rl-alumni-stage__copy">
            <h2 className="rl-title">Where alumni continue learning</h2>
            <p className="rl-copy">
              Others keep building through graduate programs and labs at Harvard,
              Princeton, Carnegie Mellon, Berkeley, Michigan, and more, extending
              the same systems instincts past Cornell.
            </p>
          </div>
          <figure className="rl-alumni-stage__figure rl-alumni-stage__figure--wide">
            <Image
              src="/alumni/academia.png"
              alt="Logos of universities where CEV alumni continue their education, including Cornell, Harvard, Wharton, Columbia, Princeton, Johns Hopkins, Brown, Carnegie Mellon, UC Berkeley, Georgia Tech, UC Davis, University of Michigan, and University of Wisconsin–Madison."
              width={1182}
              height={352}
              sizes="(max-width: 1023px) 100vw, min(1400px, 92vw)"
              className="rl-alumni-stage__image"
            />
          </figure>
        </div>
      </section>

      <section className="rl-band rl-alumni-bridge">
        <div className="rl-container rl-alumni-bridge__grid">
          <h2 className="rl-title">Shop hours become career signal.</h2>
          <div className="rl-alumni-bridge__proof">
            <p>
              Late nights on chassis, battery packs, autonomy stacks, and race
              telemetry teach the same habits recruiters look for: own a system,
              ship under pressure, and learn from the data.
            </p>
            <p>
              That is why alumni land across hardware, software, aerospace, and
              research. CEV is practice for the work that follows.
            </p>
          </div>
        </div>
      </section>

      <section className="rl-finish">
        <div className="rl-container rl-finish__grid">
          <div>
            <h2>Stay in the network.</h2>
          </div>
          <div className="rl-proof">
            <p>Are you a CEV alum? Reach alumni relations and stay close to the team.</p>
            <p>Prospective members can see the active roster and the work that starts here.</p>
          </div>
          <div className="rl-actions" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
            <ActionLink
              href="mailto:alumni@cornellelectricvehicles.com"
              variant="invert"
              external
            >
              Contact alumni relations
            </ActionLink>
            <ActionLink href="/team" variant="ghost">
              Meet current team
            </ActionLink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
