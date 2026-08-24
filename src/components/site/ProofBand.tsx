import type { ReactNode } from 'react'
import ActionLink from './ActionLink'

type ProofBandProps = {
  title: string
  points: readonly string[]
  href?: string
  cta?: string
  children?: ReactNode
}

export default function ProofBand({
  title,
  points,
  href,
  cta,
  children,
}: ProofBandProps) {
  return (
    <section className="rl-finish">
      <div className="rl-container rl-finish__grid">
        <div>
          <h2>{title}</h2>
        </div>
        <div className="rl-proof">
          {points.map((point) => (
            <p key={point}>{point}</p>
          ))}
          {children}
        </div>
        {href && cta ? <ActionLink href={href}>{cta}</ActionLink> : null}
      </div>
    </section>
  )
}
