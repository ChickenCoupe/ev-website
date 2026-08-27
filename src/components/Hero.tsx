import Image from 'next/image'
import ActionLink from '@/components/site/ActionLink'

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100dvh] items-center overflow-hidden bg-[#780b0b] pt-[7.5rem] text-white">
      <div
        className="absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 12% 18%, rgba(255,255,255,0.14), transparent 34%)',
        }}
      />

      <div className="relative z-20 mx-auto w-[calc(100%_-_2rem)] max-w-[1400px]">
        <div className="max-w-2xl">
          <h1 className="max-w-[12ch] text-5xl font-bold leading-[0.92] tracking-[-0.04em] text-balance sm:text-6xl lg:text-[5.25rem]">
            Cornell students build efficient electric vehicles.
          </h1>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/apply" variant="invert">
              Apply to CEV
            </ActionLink>
            <ActionLink href="/team" variant="ghost">
              Meet the Crew
            </ActionLink>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-14 -right-32 z-10 w-[48rem] max-w-none select-none sm:-bottom-28 sm:-right-40 sm:w-[64rem] lg:bottom-[-10%] lg:right-[-12%] lg:w-[min(96vw,84rem)]">
        <Image
          src="/vehicles/car-mask.webp"
          alt="Chicken Coupe urban concept vehicle, carbon fiber body with Shell Eco-Marathon markings"
          width={2400}
          height={1457}
          priority
          unoptimized
          sizes="(min-width: 1024px) 82vw, 110vw"
          className="h-auto w-full"
        />
      </div>
    </section>
  )
}
