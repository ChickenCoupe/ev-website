'use client'

import { useEffect, useMemo, useState } from 'react'

type CountdownTimerProps = {
  target: Date | string
  title?: string
  subtitle?: string
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
  subtitle,
}: CountdownTimerProps) {
  const [hasMounted, setHasMounted] = useState(false)

  const targetDate = useMemo(() => {
    const d = target instanceof Date ? target : new Date(target)
    return d
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
      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center">
        <p className="text-lg font-semibold text-white">Countdown unavailable</p>
        <p className="text-gray-300">Invalid target date.</p>
      </div>
    )
  }

  return (
    <section
      className="bg-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
      aria-label="Countdown timer"
    >
      <div className="text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-[30px]">{title}</h3>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4" aria-live="polite">
        <TimeBlock
          label="Days"
          value={hasMounted ? String(parts.days) : '--'}
          emphasize={hasMounted && parts.days > 0}
        />
        <TimeBlock
          label="Hours"
          value={hasMounted ? pad2(parts.hours) : '--'}
          emphasize={hasMounted && (parts.days > 0 || parts.hours > 0)}
        />
        <TimeBlock
          label="Minutes"
          value={hasMounted ? pad2(parts.minutes) : '--'}
          emphasize={hasMounted && (parts.days > 0 || parts.hours > 0 || parts.minutes > 0)}
        />
        <TimeBlock
          label="Seconds"
          value={hasMounted ? pad2(parts.seconds) : '--'}
          emphasize={hasMounted && !isComplete}
        />
      </div>

      <div className="mt-6 text-center">
        {hasMounted && isComplete ? (
          <p className="text-lg font-semibold text-white">Applications are now open.</p>
        ) : (
          <p className="text-gray-300">
            { subtitle }
          </p>
        )}
      </div>
    </section>
  )
}

function TimeBlock({
  label,
  value,
  emphasize,
}: {
  label: string
  value: string
  emphasize?: boolean
}) {
  return (
    <div className="rounded-xl border border-gray-700 bg-gray-900/40 p-4 text-center">
      <div
        className={
          emphasize
            ? 'text-4xl font-bold text-white tabular-nums'
            : 'text-4xl font-bold text-gray-200 tabular-nums'
        }
      >
        {value}
      </div>
      <div className="mt-1 text-sm uppercase tracking-wider text-gray-400">{label}</div>
    </div>
  )
}
