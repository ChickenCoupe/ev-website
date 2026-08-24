import Image from 'next/image'

export type TeamMember = {
  name: string
  position: string
  major?: string
  year?: string
  image: string
  email?: string
  linkedin?: string
}

type MemberRosterProps = {
  members: TeamMember[]
}

export default function MemberRoster({ members }: MemberRosterProps) {
  return (
    <div className="rl-roster">
      {members.map((member) => (
        <article key={`${member.name}-${member.position}`} className="rl-member">
          <div className="rl-member__photo">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="88px"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="rl-member__name">{member.name}</h3>
            <p className="rl-member__role">{member.position}</p>
            {(member.major || member.year) && (
              <p className="rl-member__meta">
                {[member.major, member.year].filter(Boolean).join(' · ')}
              </p>
            )}
            {(member.email || member.linkedin) && (
              <div className="rl-member__links">
                {member.email ? (
                  <a href={`mailto:${member.email}`}>Email</a>
                ) : null}
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                ) : null}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
