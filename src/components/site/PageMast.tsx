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
  return (
    <header className={`rl-mast rl-mast--${tone}`}>
      <div className="rl-container rl-mast__grid">
        <div className="rl-mast__copy">
          <h1>{title}</h1>
        </div>
        {(body || children) && (
          <div className="rl-mast__aside">
            {body ? <p>{body}</p> : null}
            {children}
          </div>
        )}
      </div>
    </header>
  )
}
