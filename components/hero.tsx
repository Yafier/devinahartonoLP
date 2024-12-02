"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SilverGradientDivider } from "@/components/ui/silver-gradient-divider";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import Image from "next/image";
import { useEffect, useState } from "react";

const requirements = [
  "Without Previous Experience",
  "Without Spending Millions",
  "Without Age Limit",
  "Without Capital Required",
  "Without Sales Target",
  "Without Complex Requirements"
];

const slides = [
  {
    id: 1,
    image: "/thumb-dev.png",
    title: "COMMUNITY GATHERING",
    date: "02.03.2024", 
    description: "Celebrating transformative success stories and building lifelong connections in our exclusive high-value community"
  },
  {
    id: 2,
    image: "/thumb-dev2.png",
    title: "COMMUNITY PROJECT",
    date: "18.09.2024",
    description: "Collaborating on impactful initiatives that create positive change while developing leadership skills"
  },
  {
    id: 3,
    image: "/thumb-dev3.png",
    title: "COMMUNITY EVENT",
    date: "18.09.2024",
    description: "Fostering growth through engaging activities that bring our vibrant community together"
  },
  {
    id: 4,
    image: "/thumb-dev4.png",
    title: "COMMUNITY ACHIEVEMENT",
    date: "18.09.2024",
    description: "Recognizing outstanding accomplishments and celebrating the remarkable success of our community members"
  }
  // Add more slides with same image for now
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-change slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-neutral-100 to-white">
      {/* Simplified navbar with centered logo */}
      <div className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 bg-white/80 backdrop-blur-sm border-b border-neutral-200">
        <div className="container mx-auto flex justify-center items-center">
          <div className="gradient-text text-xl sm:text-2xl font-light tracking-[0.2em]">ALIFE</div>
        </div>
      </div>

      {/* Main hero content - adjusted spacing for tighter title */}
      <div className="relative z-10 container mx-auto min-h-[calc(100vh-64px)] pt-16 sm:pt-20 px-4 sm:px-6">
        {/* Magazine-style title with reduced spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-20 text-center mb-2 sm:mb-4"  
        >
          <AnimatedShinyText
            className="text-xs sm:text-sm tracking-[0.3em] text-neutral-500 uppercase metallic-effect inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
            shimmerWidth={200}
          >
            Exclusive Opportunity
          </AnimatedShinyText>
          
          <div className="relative mt-3 sm:mt-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[1.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-instrument-serif italic 
              leading-[1] sm:leading-[0.85] text-neutral-900 max-w-[95%] mx-auto block"
            >
              <span className="whitespace-nowrap">Earn & Grow Together</span>
              <br className="hidden sm:block" />
              <span className="text-[1.4rem] sm:text-5xl md:text-6xl lg:text-7xl font-instrument-serif 
              leading-[1.1] sm:leading-[0.85] text-neutral-800 normal-case block sm:inline whitespace-nowrap">
                Community Based Business
              </span>
            </motion.h1>
          </div>
        </motion.div>

        {/* Feature image section - adjusted margins and responsive grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative mt-6 sm:mt-8 md:mt-12"
        >
          <div className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/30 mix-blend-overlay z-10" />
            <Image
              src={slides[currentSlide].image}
              alt="Exclusive gathering"
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
          </div>

          {/* Image caption - responsive grid */}
          <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 px-2 sm:px-4">
            <div className="sm:col-span-3">
              <h3 className="text-xs sm:text-sm font-medium tracking-[0.2em] text-neutral-900 uppercase">
                {slides[currentSlide].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                {slides[currentSlide].date}
              </p>
            </div>
            <div className="col-span-1 sm:col-span-6">
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>
            {/* Hide counter and next button on mobile */}
            <div className="hidden sm:flex sm:col-span-3 justify-end items-center">
              <span className="text-sm text-neutral-400">{currentSlide + 1}/{slides.length}</span>
              <button 
                className="ml-4 p-2 hover:bg-neutral-100 rounded-full transition-colors"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              >
                <svg className="w-6 h-6 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* CTA section - adjusted spacing and responsive sizing */}
        <div className="relative z-20 mt-8 sm:mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button 
              className="px-6 sm:px-8 py-6 sm:py-9 text-base sm:text-lg tracking-[0.2em] bg-neutral-900 
              text-white hover:bg-neutral-800 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
            >
              START YOUR JOURNEY
            </Button>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-neutral-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base mb-6 sm:mb-8 pt-6 sm:pt-8 px-4"
          >
            Sementara kamu ragu, orang lain sudah melangkah maju. 
            Don't get left behind in your journey to financial freedom.
          </motion.p>
        </div>

        {/* Requirements ticker - adjusted padding */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 sm:mt-16 border-t border-neutral-200"
        >
          <div className="relative overflow-hidden py-4 sm:py-6">
            <div className="flex animate-marquee-infinite whitespace-nowrap">
              {[...requirements, ...requirements].map((req, index) => (
                <span
                  key={index}
                  className="mx-6 sm:mx-8 text-xs sm:text-sm tracking-[0.2em] text-neutral-600"
                >
                  {req}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Magazine-style About Us Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-24 mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 text-left">
              <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
                About Us
              </span>
              
              <h2 className="mt-6 font-instrument-serif">
                <span className="block text-[2.5rem] sm:text-6xl leading-[1.1] text-neutral-900">
                  More than
                </span>
                <span className="block text-[2rem] sm:text-5xl uppercase mt-2">
                  BUSINESS
                </span>
                <span className="block text-[1.8rem] sm:text-4xl italic font-light mt-1">
                  we create
                </span>
                <span className="block text-[2.2rem] sm:text-5xl uppercase mt-1">
                  LEGACY
                </span>
              </h2>
            </div>

            <div className="lg:col-span-7 lg:pl-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-instrument-serif leading-snug text-neutral-800 mb-8">
                Ready to change your life? Join a high-value community where dreams become reality.
              </h3>
              
              <p className="text-neutral-600 leading-relaxed mb-6">
                Di ALIFE, kami tidak hanya berbicara tentang kesuksesan finansial. We're building a movement of ambitious individuals who dare to dream bigger. Bersama tim kami, Anda akan menemukan IKIGAI — purpose dan goal dalam menjalankan bisnis yang meaningful.
              </p>

              <p className="text-neutral-600 leading-relaxed">
                Stop wasting your time with limited income potential. Bergabunglah dengan komunitas yang telah menghasilkan puluhan successful entrepreneurs dengan penghasilan 100 juta hingga miliaran per bulan.
              </p>

              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <p className="text-3xl sm:text-4xl font-instrument-serif text-neutral-900">100JT+</p>
                  <p className="text-sm text-neutral-600 mt-2">Monthly Income Potential</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-instrument-serif text-neutral-900">3X</p>
                  <p className="text-sm text-neutral-600 mt-2">Income Growth in First Year</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                  <p className="text-3xl sm:text-4xl font-instrument-serif text-neutral-900">50+</p>
                  <p className="text-sm text-neutral-600 mt-2">High-Value Leaders</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-instrument-serif text-neutral-900">24/7</p>
                  <p className="text-sm text-neutral-600 mt-2">Community Support</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}