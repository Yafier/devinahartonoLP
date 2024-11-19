import Hero from '@/components/hero'
import Transformation from '@/components/transformation'
import Included from '@/components/included'
import CaseStudies from '@/components/case-studies'
import Benefits from '@/components/benefits'
import SocialProof from '@/components/social-proof'
import FAQ from '@/components/faq'
import CTA from '@/components/cta'
import CTA2 from '@/components/cta2'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Problem from "@/components/problem";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Transformation />
      <CaseStudies />
      <Included />
      <Benefits />
      <SocialProof />
      <FAQ />
      <CTA />
      <CTA2 />
      <Footer />
    </main>
  )
}