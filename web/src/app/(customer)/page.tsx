import React from 'react'
import BestSellers from '@/features/home/components/BestSellers'
import CategorySection from '@/features/home/components/CategorySection'
import FeaturedProducts from '@/features/home/components/FeaturedProducts'
import HeroSection from '@/features/home/components/HeroSection'
import HowItWorks from '@/features/home/components/HowItWorks'
import ServicesSection from '@/features/home/components/ServicesSection'
import Testimonials from '@/features/home/components/Testimonials'
import TrustHighlights from '@/features/home/components/TrustHighlights'
import WholesaleCTA from '@/features/home/components/WholesaleCTA'
import WhyChooseUs from '@/features/home/components/WhyChooseUs'

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <TrustHighlights />
      <CategorySection />
      <FeaturedProducts />
      <BestSellers />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <WholesaleCTA />
      <Testimonials />
    </>
  )
}

export default Home