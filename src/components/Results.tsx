import ProofBand from '@/components/site/ProofBand'
import { proofPoints } from '@/data/site'

export default function Results() {
  return (
    <ProofBand
      title="2026 Shell Eco-Marathon results."
      points={proofPoints}
      href="/vehicles"
      cta="View vehicles"
    />
  )
}
