import type { ReactNode } from 'react'

type PageMastProps = {
  title: string
  body?: string
  tone?: 'red' | 'dark' | 'ink'
  children?: ReactNode
}

export default function PageMast({
  title,
  body,
  tone = 'dark',
  children,
}: PageMastProps) {
  const tones = {
    red: 'bg-[#b31b1b] text-white',
    dark: 'bg-gray-950 text-white',
    ink: 'bg-white text-gray-950',
  }

  return (
    <header
      className={`relative flex min-h-[22rem] items-end overflow-hidden border-b border-white/10 pb-16 pt-32 ${tones[tone]}`}
    >
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
      <div className="relative mx-auto grid w-full max-w-7xl items-end gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <h1 className="max-w-[13ch] text-5xl font-bold leading-[0.95] tracking-[-0.035em] text-balance md:text-6xl">
            {title}
          </h1>
        </div>
        {(body || children) && (
          <div>
            {body ? (
              <p
                className={`max-w-2xl text-lg leading-relaxed md:text-xl ${
                  tone === 'ink' ? 'text-gray-700' : 'text-white/80'
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
