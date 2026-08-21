import ActionLink from '@/components/site/ActionLink'

export default function CTA() {
  return (
    <section className="rl-band">
      <div className="rl-container rl-split rl-split--top">
        <div>
          <h2 className="rl-title">Build with us.</h2>
          <p className="rl-copy">
            Apply to work on the next vehicle, or support the team through a
            sponsorship.
          </p>
          <div className="rl-actions">
            <ActionLink href="/apply">Apply now</ActionLink>
            <ActionLink href="/sponsors" variant="ghost">
              Sponsor CEV
            </ActionLink>
            <ActionLink href="/vehicles" variant="ghost">
              View vehicles
            </ActionLink>
          </div>
        </div>

        <div>
          <h3 className="rl-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Shell Eco-Marathon 2025
          </h3>
          <div className="rl-video" style={{ marginTop: '1rem' }}>
            <iframe
              src="https://www.youtube.com/embed/2di7Gq69jUw"
              title="CEV at Shell Eco Marathon 2025"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
