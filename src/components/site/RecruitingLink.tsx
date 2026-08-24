'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import ActionLink from '@/components/site/ActionLink'

const ComingSoonContext = createContext<(() => void) | null>(null)

export function RecruitingNoticeProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const [open, setOpen] = useState(false)

  const showNotice = useCallback(() => setOpen(true), [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <ComingSoonContext.Provider value={showNotice}>
      {children}
      <dialog
        ref={dialogRef}
        className="rl-coming-soon"
        aria-labelledby={titleId}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false)
        }}
      >
        <div className="rl-coming-soon__panel">
          <h2 id={titleId}>Link coming soon</h2>
          <p>We will attach this link soon. Thank you for your interest.</p>
          <button
            type="button"
            className="rl-action rl-action--solid"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
      </dialog>
    </ComingSoonContext.Provider>
  )
}

type RecruitingLinkProps = {
  href: string
  children: ReactNode
  variant?: 'solid' | 'inline'
}

export default function RecruitingLink({
  href,
  children,
  variant = 'inline',
}: RecruitingLinkProps) {
  const showNotice = useContext(ComingSoonContext)
  const live = href.trim().length > 0

  if (live) {
    if (variant === 'solid') {
      return (
        <ActionLink href={href} external>
          {children}
        </ActionLink>
      )
    }

    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  const openNotice = () => {
    showNotice?.()
  }

  if (variant === 'solid') {
    return (
      <button type="button" className="rl-action rl-action--solid" onClick={openNotice}>
        {children}
      </button>
    )
  }

  return (
    <button type="button" className="rl-apply-pending" onClick={openNotice}>
      {children}
    </button>
  )
}
