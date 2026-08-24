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
  const classes = `rl-action rl-action--${variant} ${className}`.trim()
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
