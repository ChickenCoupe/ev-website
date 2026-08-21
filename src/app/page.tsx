import Hero from '@/components/Hero'
import About from '@/components/About'
import VehicleLineage from '@/components/VehicleLineage'
import Results from '@/components/Results'
import Stats from '@/components/Stats'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <VehicleLineage />
      <Results />
      <Stats />
      <CTA />
      <Footer />
    </main>
  )
}
