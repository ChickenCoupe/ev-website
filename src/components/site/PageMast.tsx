import Image from 'next/image'
import type { ReactNode } from 'react'

type PageMastProps = {
  title: string
  body?: string
  tone?: 'red' | 'dark' | 'ink'
  imageSrc?: string
  imageAlt?: string
  imagePosition?: string
  children?: ReactNode
}

export default function PageMast({
  title,
  body,
  tone = 'dark',
  imageSrc,
  imageAlt = '',
  imagePosition = 'center',
  children,
}: PageMastProps) {
  const tones = {
    red: 'bg-[#b31b1b] text-white',
    dark: 'bg-gray-950 text-white',
    ink: 'bg-white text-gray-950',
  }

  return (
    <header
      className={`relative flex min-h-[420px] items-center overflow-hidden py-20 pt-28 ${
        imageSrc ? '' : 'border-b border-white/10'
      } ${tones[tone]}`}
    >
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      ) : (
        <div
          className="absolute inset-0 opacity-70"
          aria-hidden="true"
          style={{
            background:
              tone === 'ink'
                ? 'radial-gradient(circle at top right, rgba(179, 27, 27, 0.12), transparent 42%)'
                : 'radial-gradient(circle at top right, rgba(255, 255, 255, 0.14), transparent 42%)',
          }}
        />
      )}
      <div
        className={`relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${
          imageSrc
            ? 'text-center'
            : 'grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]'
        }`}
      >
        <div>
          <h1
            className={`font-bold leading-[0.98] tracking-[-0.025em] text-balance ${
              imageSrc ? 'mx-auto max-w-4xl' : 'max-w-[13ch]'
            } ${imageSrc ? 'text-4xl md:text-5xl' : 'text-5xl md:text-6xl'}`}
          >
            {title}
          </h1>
        </div>
        {(body || children) && (
          <div>
            {body ? (
              <p
                className={`text-lg leading-relaxed md:text-xl ${
                  imageSrc
                    ? 'mx-auto mt-6 max-w-3xl text-gray-100'
                    : `max-w-2xl ${
                        tone === 'ink' ? 'text-gray-700' : 'text-white/80'
                      }`
                }`}
              >
                {body}
              </p>
            ) : null}
            {children}
          </div>
        )}
      </div>
    </header>
  )
}
