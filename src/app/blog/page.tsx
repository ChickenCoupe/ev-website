import PageMast from '@/components/site/PageMast'
import ActionLink from '@/components/site/ActionLink'
import Footer from '@/components/Footer'

type BlogPost = {
  title: string
  date: string
  excerpt: string
  href?: string
}

const posts: BlogPost[] = [
  {
    title: 'Competition season highlights',
    date: '2025',
    excerpt:
      'Reflections from Shell Eco-Marathon and how the team pushed efficiency and reliability on the track.',
  },
  {
    title: 'Building Chicken Coupe',
    date: '2024–2025',
    excerpt:
      'From design reviews to manufacturing: how mechanical, electrical, and software came together for our urban concept vehicle.',
  },
  {
    title: 'Behind the telemetry stack',
    date: '2025',
    excerpt:
      'How we capture, visualize, and learn from vehicle data during testing and competition.',
  },
]

export default function BlogPage() {
  return (
    <main>
      <PageMast
        title="Build notes and competition stories."
        body="Updates on vehicle development, testing, and Shell Eco-Marathon."
        tone="red"
      />

      <section className="rl-band">
        <div className="rl-container">
          <h2 className="rl-title">Recent stories</h2>
          <div className="rl-logbook">
            {posts.map((post) => {
              const content = (
                <>
                  <div className="rl-log__stamp">{post.date}</div>
                  <div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </div>
                </>
              )

              if (post.href) {
                return (
                  <a
                    key={post.title}
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rl-log"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {content}
                  </a>
                )
              }

              return (
                <article key={post.title} className="rl-log">
                  {content}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="rl-finish">
        <div className="rl-container rl-finish__grid">
          <div>
            <h2>Want to feature CEV?</h2>
          </div>
          <div className="rl-proof">
            <p>Press, sponsors, and collaborators can reach us for interviews and technical deep dives.</p>
            <p>Students who want to write the next entry should apply to the team.</p>
          </div>
          <div className="rl-actions" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
            <ActionLink
              href="mailto:cornellev@cornell.edu?subject=CEV%20Blog%20%2F%20Press"
              variant="invert"
              external
            >
              Email the team
            </ActionLink>
            <ActionLink href="/apply" variant="ghost">
              Join us
            </ActionLink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
