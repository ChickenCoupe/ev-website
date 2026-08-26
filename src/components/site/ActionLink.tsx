import Link from 'next/link'
import type { ReactNode } from 'react'

type ActionLinkProps = {
  href: string
  children: ReactNode
  variant?: 'solid' | 'ghost' | 'invert'
  className?: string
  external?: boolean
}

export default function ActionLink({
  href,
  children,
  variant = 'solid',
  className = '',
  external = false,
}: ActionLinkProps) {
  const baseClasses =
    'inline-flex min-h-12 items-center justify-center border px-6 py-3 text-sm font-semibold transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.98] motion-reduce:transition-none'
  const variants = {
    solid:
      'border-[#b31b1b] bg-[#b31b1b] text-white hover:border-[#8f1515] hover:bg-[#8f1515]',
    invert:
      'border-white bg-white text-gray-950 hover:border-gray-200 hover:bg-gray-200',
    ghost:
      'border-white/60 bg-transparent text-white hover:border-white hover:bg-white/10',
  }
  const classes = `${baseClasses} ${variants[variant]} ${className}`.trim()
  const isMail = href.startsWith('mailto:')

  if (external || isMail) {
    return (
      <a
        href={href}
        className={classes}
        target={isMail ? undefined : '_blank'}
        rel={isMail ? undefined : 'noopener noreferrer'}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
