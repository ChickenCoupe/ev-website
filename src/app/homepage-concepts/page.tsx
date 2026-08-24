import ConceptLabShell from '@/components/homepage-concepts/ConceptLabShell'
import { defaultConcept, isConceptId, type ConceptId } from '@/components/homepage-concepts/conceptData'

type HomepageConceptsPageProps = {
  searchParams?: Promise<{
    concept?: string | string[]
  }>
}

export default async function HomepageConceptsPage({ searchParams }: HomepageConceptsPageProps) {
  const params = await searchParams
  const requestedConcept = Array.isArray(params?.concept) ? params?.concept[0] : params?.concept
  const initialConcept: ConceptId = isConceptId(requestedConcept) ? requestedConcept : defaultConcept

  return <ConceptLabShell initialConcept={initialConcept} />
}
