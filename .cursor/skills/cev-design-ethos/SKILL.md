---
name: cev-design-ethos
description: Preserves Cornell Electric Vehicles' Race Line design ethos while removing common LLM-generated interface tells. Use when designing, rewriting, reviewing, or polishing any CEV page, component, layout, navigation, interaction, or marketing copy.
---

# CEV Design Ethos

Build a site that feels precise, kinetic, collaborative, and grounded in real engineering work. The design should make the people, vehicle, and competition record easy to understand without decorative marketing scaffolding.

## Source of truth

Before changing a public-facing page:

1. Read `PRODUCT.md`.
2. Inspect the relevant page, shared components, and `src/app/globals.css`.
3. Reuse real team, vehicle, sponsor, and competition content already in the repository.
4. Preserve working links, forms, controls, rosters, and accessibility behavior.

## Content hierarchy

Prioritize:

1. What CEV builds.
2. Who does the work.
3. How the systems and subteams contribute.
4. Verifiable vehicles, results, dates, specifications, and partners.
5. A clear next action.

Do not make the vehicle story crowd out the people building it.

## Visual language

- Use Cornell red as a deliberate identity signal, not a wash over every section.
- Pair red with oxblood surfaces, warm off-white text, and restrained one-pixel rules.
- Keep Geist Sans and Geist Mono. Use mono only for real technical data, dates, or values.
- Favor asymmetric mastheads, real photography, horizontal chronology, and rule-separated lists.
- Use cards only when the content is a distinct interactive object.
- Preserve generous spacing and strong left alignment.
- Use real vehicle and team imagery. Never replace available photography with decorative CSS graphics.

## Anti-LLM rules

Never add:

- Tiny uppercase kickers above headings.
- Decorative section labels such as “Competition narrative,” “Open lane,” “Latest entries,” or “Finish line proof.”
- Numbered section scaffolding such as `01 / 02 / 03` unless the content is an actual ordered process.
- Decorative metrics or stat tables on team pages.
- Equal three-card rows with an icon, heading, and paragraph.
- Generic “coming soon” panels or placeholder copy.
- Vague race metaphors that do not explain the content.
- Copy that restates the heading.
- Startup language such as “operating at the pace of a startup,” “cutting-edge,” “industry-leading,” “next-generation,” or “innovation and excellence.”
- Em dashes.
- Gradient text, neon glows, glass panels, or ornamental motion.

If removing a label leaves the section clear, remove it. Do not replace it with a different eyebrow, badge, or subtitle.

## Copy standard

Every sentence must provide at least one useful fact, decision, responsibility, result, date, specification, or next step.

Write direct headings:

- “Our vehicles”
- “Electrical systems”
- “Leadership roster”
- “2025 Shell Eco-Marathon results”
- “Apply to Cornell Electric Vehicles”

Avoid atmospheric headings:

- “Make the page feel like a run”
- “Results after the build story”
- “Where you can land”
- “Ready for the next run?”
- “Scale you can verify”

Prefer:

> Students across six subteams design, manufacture, test, and race Cornell's electric vehicles.

Avoid:

> Vehicle lineage, race pressure, and results move as one story.

Keep paragraphs short. Remove any sentence that does not help a prospective student, sponsor, alum, or competition visitor understand CEV.

## Page patterns

### Homepage

- Lead with a direct statement of what Cornell students build.
- Introduce the subteams before the full vehicle archive.
- Use the horizontal vehicle track only because the vehicles are chronological.
- Show actual competition results and team scale.
- End with specific Apply and Sponsor actions.

### Team pages

- Do not show summary stat strips.
- Use one direct masthead, responsibility sections, and the roster.
- Preserve every member, role, portrait, email, and LinkedIn link.
- Use numbers only where sequence or data is meaningful.

### Vehicles

- Keep Chicken Coupe controls and specifications usable.
- Present previous vehicles chronologically.
- Let vehicle names, years, photographs, and engineering lessons carry the page.

### Apply

- Preserve application phases, external forms, dates, and countdown behavior.
- Ordered application steps may use numbers because order matters.
- Display actual dates instead of decorative status labels.

### Sponsors, alumni, and blog

- Sponsors: prioritize readable logos, working links, and the sponsorship packet.
- Alumni: show the actual directory; do not add an empty map placeholder.
- Blog: show real post data; do not label unavailable posts “coming soon.”

## Interaction and accessibility

- Keep UI feedback below 300ms.
- Animate only when it explains state, chronology, or spatial movement.
- Respect `prefers-reduced-motion`.
- Gate hover behavior to fine pointers.
- Keep visible focus states and accurate ARIA labels.
- Collapse asymmetric layouts to one column on small screens.
- Ensure horizontal tracks become a vertical reading order on mobile and reduced motion.

## Implementation workflow

1. Identify the page's primary user question.
2. Remove decorative labels, repeated copy, fake metrics, and placeholder sections.
3. Replace vague copy with facts already present in the repository.
4. Reuse the existing Race Line tokens and shared components where they still earn their place.
5. Do not preserve a shared component merely because it exists; delete it if its only purpose is decorative scaffolding.
6. Search changed files for banned patterns and stale imports.
7. Run:

```bash
npm run lint
npm run build
```

8. Manually check mobile layout, keyboard navigation, reduced motion, image text alternatives, and working links.

## Final review

Before finishing, confirm:

- A visitor can identify what CEV builds within one screen.
- Team responsibilities and rosters contain no decorative metrics.
- Every heading names real content.
- Every paragraph adds information.
- Every number is real and useful.
- Every interaction still works.
- The page feels authored for CEV rather than generated from a landing-page template.
