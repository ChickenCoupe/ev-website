import Link from 'next/link'
import Image from 'next/image'
import { navLinks, socialLinks } from '@/data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="rl-footer">
      <div className="rl-container">
        <div className="rl-footer__grid">
          <div className="rl-footer__brand">
            <Image
              src="/logo.png"
              alt="Cornell Electric Vehicles logo"
              width={64}
              height={128}
              style={{ width: 'auto', height: '3.5rem' }}
            />
            <div>
              <h3>Cornell Electric Vehicles</h3>
              <p>
                Cornell&apos;s project team building autonomous, hyper-efficient
                electric vehicles for Shell Eco-Marathon competition.
              </p>
              <div className="rl-footer__social" style={{ marginTop: '1rem' }}>
                {socialLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4>Quick links</h4>
            <div className="rl-footer__links">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
              <Link href="/apply">Apply</Link>
            </div>
          </div>

          <div>
            <h4>Contact</h4>
            <div className="rl-footer__links">
              <Link href="mailto:cornellev@cornell.edu">cornellev@cornell.edu</Link>
              <span style={{ color: 'var(--cev-ink-muted)', fontSize: '0.95rem' }}>
                Cornell University
                <br />
                Ithaca, NY 14853
              </span>
            </div>
          </div>
        </div>

        <div className="rl-footer__bottom">
          <span>©{year} Cornell Electric Vehicles Project Team. All rights reserved.</span>
          <span>Registered Student Organization of Cornell University</span>
        </div>
      </div>
    </footer>
  )
}
