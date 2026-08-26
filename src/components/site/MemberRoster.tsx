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
  leadPositions?: string[]
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="rl-member">
      <div className="rl-member__photo">
        <Image
          src={member.image}
          alt={`Portrait of ${member.name}`}
          fill
          sizes="(min-width: 1280px) 288px, (min-width: 640px) 30vw, 90vw"
          className="object-cover"
        />
      </div>
      <div className="rl-member__body">
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
  )
}

export default function MemberRoster({
  members,
  leadPositions,
}: MemberRosterProps) {
  const isLead = (member: TeamMember) =>
    leadPositions
      ? leadPositions.includes(member.position)
      : member.position.toLowerCase().includes('lead')
  const leads = members.filter(isLead)
  const remainingMembers = members.filter((member) => !isLead(member))
  const hasSeparateGroups = leads.length > 0 && remainingMembers.length > 0

  if (!hasSeparateGroups) {
    return (
      <div className="rl-roster">
        {members.map((member) => (
          <MemberCard
            key={`${member.name}-${member.position}`}
            member={member}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="rl-roster-groups">
      <section className="rl-roster__group" aria-label="Subteam leads">
        <h3 className="rl-roster__heading">Subteam leads</h3>
        <div className="rl-roster rl-roster--leads">
          {leads.map((member) => (
            <MemberCard
              key={`${member.name}-${member.position}`}
              member={member}
            />
          ))}
        </div>
      </section>

      <section className="rl-roster__group" aria-label="Team members">
        <h3 className="rl-roster__heading">Team members</h3>
        <div className="rl-roster">
          {remainingMembers.map((member) => (
            <MemberCard
              key={`${member.name}-${member.position}`}
              member={member}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
