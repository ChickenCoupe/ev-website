import type { ReactNode } from 'react'
import PageMast from '@/components/site/PageMast'
import Footer from '@/components/Footer'
import ActionLink from '@/components/site/ActionLink'

type TeamSubpageShellProps = {
  title: string
  body: string
  children: ReactNode
}

export default function TeamSubpageShell({
  title,
  body,
  children,
}: TeamSubpageShellProps) {
  return (
    <main>
      <PageMast title={title} body={body} tone="red" />

      {children}

      <section className="rl-finish">
        <div className="rl-container rl-finish__grid">
          <div>
            <h2>Build with CEV.</h2>
          </div>
          <div className="rl-proof">
            <p>Applications open on the Apply page each cycle.</p>
            <p>Every subteam ships work that reaches the vehicle.</p>
          </div>
          <ActionLink href="/apply" variant="invert">
            Apply to CEV
          </ActionLink>
        </div>
      </section>

      <Footer />
    </main>
  )
}
