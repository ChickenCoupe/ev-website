import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Results from '@/components/Results'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Results />
      <Stats />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}
