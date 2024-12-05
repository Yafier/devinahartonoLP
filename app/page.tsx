import Hero2 from '@/components/hero2'
import Transformation from '@/components/transformation'
import Included from '@/components/included'
import CaseStudies from '@/components/case-studies'
import Benefits from '@/components/benefits'
import SocialProof from '@/components/social-proof'
import FAQ from '@/components/faq'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Problem from "@/components/problem";
import Hero from '@/components/hero'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <Benefits />
      <SocialProof />
      <Included />
      <Transformation />
      
      <CaseStudies />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}