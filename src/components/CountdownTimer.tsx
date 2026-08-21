'use client'

import { useEffect, useMemo, useState } from 'react'

type CountdownTimerProps = {
  target: Date | string
  title?: string
}

function pad2(value: number): string {
  return String(value).padStart(2, '0')
}

function clampToNonNegative(ms: number): number {
  return ms < 0 ? 0 : ms
}

function formatTarget(date: Date): string {
  return new Intl.DateTimeFormat(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

function splitDuration(msRemaining: number) {
  const totalSeconds = Math.floor(msRemaining / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

function useNow(tickMs: number) {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = window.setInterval(() => {
      setNow(Date.now())
    }, tickMs)

    return () => window.clearInterval(id)
  }, [tickMs])

  return now
}

export default function CountdownTimer({
  target,
  title = 'Applications open in',
}: CountdownTimerProps) {
  const [hasMounted, setHasMounted] = useState(false)

  const targetDate = useMemo(() => {
    return target instanceof Date ? target : new Date(target)
  }, [target])

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const now = useNow(1000)

  const { parts, isComplete } = useMemo(() => {
    const remaining = clampToNonNegative(targetDate.getTime() - now)
    return {
      parts: splitDuration(remaining),
      isComplete: remaining === 0,
    }
  }, [now, targetDate])

  const targetLabel = useMemo(() => {
    if (Number.isNaN(targetDate.getTime())) return null
    return formatTarget(targetDate)
  }, [targetDate])

  if (targetLabel == null) {
    return (
      <div className="rl-countdown">
        <h3 className="rl-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
          Countdown unavailable
        </h3>
        <p className="rl-copy">Invalid target date.</p>
      </div>
    )
  }

  return (
    <section className="rl-countdown" aria-label="Countdown timer">
      <h3 className="rl-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
        {title}
      </h3>

      <div className="rl-countdown__grid" aria-live="polite">
        <TimeBlock
          label="Days"
          value={hasMounted ? String(parts.days) : '--'}
        />
        <TimeBlock
          label="Hours"
          value={hasMounted ? pad2(parts.hours) : '--'}
        />
        <TimeBlock
          label="Minutes"
          value={hasMounted ? pad2(parts.minutes) : '--'}
        />
        <TimeBlock
          label="Seconds"
          value={hasMounted ? pad2(parts.seconds) : '--'}
        />
      </div>

      <div style={{ marginTop: '1.1rem' }}>
        {hasMounted && isComplete ? (
          <p className="rl-copy" style={{ color: 'var(--cev-ink)' }}>
            Applications are now open.
          </p>
        ) : (
          <p className="rl-copy">Applications open {targetLabel}.</p>
        )}
      </div>
    </section>
  )
}

function TimeBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rl-countdown__block">
      <span className="rl-countdown__value">{value}</span>
      <span className="rl-countdown__label">{label}</span>
    </div>
  )
}
