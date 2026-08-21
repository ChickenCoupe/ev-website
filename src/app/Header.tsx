'use client'

import { useEffect, useId, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/data/site'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="rl-header">
      <div className="rl-header__shell">
        <Link href="/" className="rl-header__logo" aria-label="Cornell Electric Vehicles home">
          <Image
            src="/cev-logo.png"
            alt=""
            width={80}
            height={36}
            className="object-contain"
            style={{ width: 'auto', height: '28px' }}
            priority
          />
        </Link>

        <nav className="rl-header__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rl-header__link"
              data-active={isActive(link.href)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="rl-header__link rl-header__apply"
            data-active={isActive('/apply')}
          >
            Apply
          </Link>
        </nav>

        <button
          type="button"
          className="rl-header__toggle"
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isOpen ? (
        <nav id={menuId} className="rl-header__mobile" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rl-header__link"
              data-active={isActive(link.href)}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="rl-header__link rl-header__apply"
            data-active={isActive('/apply')}
            onClick={() => setIsOpen(false)}
          >
            Apply
          </Link>
        </nav>
      ) : null}
    </header>
  )
}
