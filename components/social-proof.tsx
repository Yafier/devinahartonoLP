"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";


const testimonials = [
  {
    name: "Jessica Wijaya",
    role: "Senior Insurance Advisor",
    image: "/steam3.png",
    quote: "Gak nyangka banget bisa achieve my dreams disini! From zero knowledge about insurance sampe bisa jadi top performer. The training system disini bener-bener next level dan supportive banget. Best decision ever! 🌟"
  },
  {
    name: "Melinda Kusuma",
    role: "Protection Specialist",
    image: "/steam3.png",
    quote: "Awalnya ragu untuk join industri asuransi, tapi sistem mentoring disini changed everything! In just 8 months, udah bisa beli apartment sendiri. Super grateful for the opportunity dan team yang super solid! ✨"
  },
  {
    name: "Angela Hartono",
    role: "Financial Freedom Advisor",
    image: "/steam3.png",
    quote: "Who knew kalau jadi insurance advisor bisa se-rewarding ini! Started from scratch, sekarang udah punya passive income yang stable. The best part? Bisa bantu banyak orang while living my dream life! 💫"
  }
];

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-20 relative bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <p className="text-xs md:text-sm text-red-400 px-3 py-1.5 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-3">
            Success Stories
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Meet Our Rising Stars ✨
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Dari fresh graduate sampe jadi top achiever. Your success story starts here!
          </p>
        </div>

        {/* Magic Card Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-red-950/10 border border-red-900/10 backdrop-blur-sm hover:bg-red-900/20 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-red-950/10 border border-red-900/10 backdrop-blur-sm hover:bg-red-900/20 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Enhanced Card */}
          <div className="relative h-[280px] md:h-[320px]">
            {/* Radial Gradient Overlay - Sunshine Effect */}
            <div className="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-transparent blur-[100px] opacity-60" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <div className="relative group">
                  {/* Metallic Effect behind testimonials */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-gray-100/20 to-red-500/20 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
                  <div className="relative bg-gradient-to-br from-black/90 via-zinc-900/90 to-black/90 rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:border-red-500/20 transition duration-500">
                    <div className="flex flex-col md:flex-row h-full">
                      {/* Image Section with fixed dimensions */}
                      <div className="relative w-full md:w-[280px] h-[280px] md:h-full overflow-hidden">
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40" />
                        
                        {/* Image container with explicit dimensions */}
                        <div className="relative w-full h-full min-h-[280px]">
                          <Image
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            fill
                            className="object-cover z-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-[1.02]"
                            style={{
                              objectFit: 'cover',
                              objectPosition: 'center',
                            }}
                            sizes="(max-width: 768px) 100vw, 280px"
                            priority
                          />
                          
                          {/* Overlay shadow for depth */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-20" />
                        </div>
                        
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 z-30" />
                      </div>

                      {/* Content Section with Metallic Background */}
                      <div className="flex-1 p-6 md:p-8 flex flex-col justify-center relative">
                        {/* Metallic background for testimonial text */}
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 via-black/80 to-zinc-900/90" />
                        <div className="relative z-10">
                          <p className="text-base md:text-lg text-white mb-6 relative leading-relaxed">
                            <span className="absolute -left-2 -top-2 text-2xl text-red-500/60">"</span>
                            {testimonials[currentIndex].quote}
                            <span className="absolute -right-2 bottom-0 text-2xl text-red-500/60">"</span>
                          </p>
                          <div>
                            <h3 className="text-sm text-white">
                              {testimonials[currentIndex].name}
                            </h3>
                            <p className="text-xs text-gray-400">
                              {testimonials[currentIndex].role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-red-800 w-4' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
}