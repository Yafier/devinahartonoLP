import Hero from '@/components/hero'
import Transformation from '@/components/transformation'
import Included from '@/components/included'
import CaseStudies from '@/components/case-studies'
import Benefits from '@/components/benefits'
import HowItWorks from '@/components/how-it-works'
import SocialProof from '@/components/social-proof'
import FAQ from '@/components/faq'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Transformation />
      <CaseStudies />
      <Included />
      <Benefits />
      <HowItWorks />
      <SocialProof />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}