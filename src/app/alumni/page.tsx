import Image from 'next/image'
import PageMast from '@/components/site/PageMast'
import ActionLink from '@/components/site/ActionLink'
import Footer from '@/components/Footer'

export default function Alumni() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <PageMast
        title="Built here. Working everywhere."
        body="CEV alumni leave the shop with real vehicle systems behind them, then carry that craft into electric vehicles, autonomy, aerospace, and research."
        tone="red"
      />

      <section className="bg-gray-900 py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <h2 className="max-w-[11ch] text-4xl font-bold leading-[0.96] tracking-[-0.03em] md:text-5xl">
              Where alumni build
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-300">
              Our alumni work across the hardware and software of many
              different companies.
            </p>
          </div>

          <figure className="border border-red-900/70 bg-white p-5 shadow-[0_18px_40px_rgba(0,0,0,0.22)] sm:p-8 lg:p-10">
            <Image
              src="/alumni/companies.png"
              alt="Logos of companies where CEV alumni work, including Google, Amazon, Microsoft, Apple, Meta, Ford, SpaceX, Rivian, NVIDIA, Tesla, ASML, GM, Palantir, Wayve, Lightship, Lockheed Martin, PayPal, Anduril, Intel, MIT Lincoln Laboratory, IHMC, United, Leidos, and The Boring Company."
              width={2496}
              height={1496}
              sizes="(max-width: 1023px) 100vw, min(1280px, 92vw)"
              className="h-auto w-full"
              priority
            />
          </figure>
        </div>
      </section>

      <section className="bg-gray-800 py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <h2 className="max-w-[13ch] text-4xl font-bold leading-[0.96] tracking-[-0.03em] md:text-5xl">
              Where alumni continue learning
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-300">
              Others keep building through graduate programs and labs at
              universities across the country.
            </p>
          </div>

          <figure className="border border-red-900/70 bg-white p-5 shadow-[0_18px_40px_rgba(0,0,0,0.22)] sm:p-8">
            <Image
              src="/alumni/academia.png"
              alt="Logos of universities where CEV alumni continue their education, including Cornell, Harvard, Wharton, Columbia, Princeton, Johns Hopkins, Brown, Carnegie Mellon, UC Berkeley, Georgia Tech, UC Davis, University of Michigan, and University of Wisconsin–Madison."
              width={1182}
              height={352}
              sizes="(max-width: 1023px) 100vw, min(1280px, 92vw)"
              className="h-auto w-full"
            />
          </figure>
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-950 to-red-950 py-20">
        <div className="mx-auto grid w-full max-w-7xl items-end gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1fr_auto] lg:px-8">
          <h2 className="max-w-[12ch] text-4xl font-bold leading-[0.95] tracking-[-0.03em] md:text-5xl">
            Stay in the network.
          </h2>
          <div className="space-y-3 text-gray-300">
            <p>
              Are you a CEV alum? Reach alumni relations and stay close to the
              team.
            </p>
            <p>
              Prospective members can see the active roster and the work that
              starts here.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <ActionLink
              href="mailto:alumni@cornellelectricvehicles.com"
              variant="solid"
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
