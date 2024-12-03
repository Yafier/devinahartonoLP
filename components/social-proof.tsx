"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";


const testimonials = [
  {
    name: "Mariska Karsana",
    role: "Joined Alife 2019 • Monthly Income: 300jt+",
    image: "/mariskakarsana.jpg",
    quote: "Semenjak join Alife menemukan IKIGAI — purpose dan goal dalam menjalankan bisnis bukan hanya sekedar mencari uang tapi mendapatkan personal dan financial growth. Yang membuat aku jatuh cinta dengan Alife adalah komunitasnya yang solid dan positive."
  },
  {
    name: "Gwen Sembada",
    role: "MDiT 4 Stars • Joined Alife 2019",
    image: "/gwensembada.jpg",
    quote: "Alife has been a life-changing experience, offering not only financial growth but also incredible opportunities for personal development. What truly sets Alife apart is its supportive and inspiring community—a network of high-achievers who uplift one another like family."
  },
  {
    name: "Jessica Suwarsono",
    role: "Monthly Income: 100jt+ • Joined Alife 2020",
    image: "/jessicasuwarsono.jpg",
    quote: "Sejak join ALIFE aku merasakan perubahan hidup yg signifikan since now I can have flexible working hours jadi bisa punya lebih banyak waktu untuk keluarga dan income nya pun sudah mencapai 3x lipat dari gaji aku sebelumnya."
  },
  {
    name: "Martha Teja",
    role: "3 Digit Monthly Income • Joined Alife 2019",
    image: "/marthateja.jpg",
    quote: "Satu satunya komunitas yang kasi full support dari segi edukasi maupun entertainnya. Di alife bener2 bisa menjadi kendaraan tercepat gw buat numbuhin growth income yang bisa ngebantu hidup gw dan seluruh tim."
  },
  {
    name: "Shannon Subeno",
    role: "Monthly Income: 120jt+",
    image: "/shannonsubeno.jpg",
    quote: "Devina is a straightforward and nurturing leader. When it comes to other aspects of growing the business, such as working together with other leaders, she's very reliable and is such an amazing team player!"
  },
  {
    name: "Anastasia Inez",
    role: "Monthly Income: 110jt+",
    image: "/anastasiainez.jpg",
    quote: "Environment yg positive, creative & smart! Income acceleration nya luar biasa dengan plenty of room for growth in many different aspects. Devina itu calm but organized and fun, consistent, selalu ada, dan sangat dependable!"
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
    <section className="pt-8 md:pt-12 pb-16 md:pb-20 relative bg-white" style={{ backgroundColor: '#ffffff' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-neutral-100" />

      <div className="container mx-auto px-4">
        {/* Header - Updated to match problem.tsx magazine style */}
        <div className="text-center mb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
              Success Stories
            </span>
            
            <h2 className="mt-6 font-instrument-serif">
              <span className="block text-[2rem] sm:text-6xl leading-[1.1] text-neutral-900">
                MEET OUR
              </span>
              <span className="block text-[1.8rem] sm:text-5xl italic font-light mt-2">
                rising
              </span>
              <span className="block text-[2.2rem] sm:text-6xl uppercase mt-1">
                STARS
              </span>
            </h2>

            <p className="text-neutral-600 leading-relaxed mt-6 max-w-2xl mx-auto">
              Dari fresh graduate sampe jadi top achiever!
            </p>
          </motion.div>
        </div>

        {/* Magic Card Container - Updated colors */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-neutral-100 border border-neutral-200 backdrop-blur-sm hover:bg-neutral-200 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-neutral-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-neutral-100 border border-neutral-200 backdrop-blur-sm hover:bg-neutral-200 transition-colors"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-neutral-600" />
          </button>

          {/* Enhanced Card */}
          <div className="relative h-[300px] md:h-[320px]">
            {/* Updated gradient overlays - more subtle */}
            <div className="absolute inset-0 bg-gradient-radial from-neutral-100/30 via-transparent to-transparent blur-[80px] opacity-40" />
            
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
                  {/* Updated metallic effect - more subtle */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-neutral-200/10 via-neutral-100/10 to-neutral-200/10 rounded-xl blur-lg opacity-60 group-hover:opacity-80 transition duration-500" />
                  
                  {/* Updated card background - more subtle */}
                  <div className="relative bg-gradient-to-br from-white/95 via-neutral-50/95 to-white/95 rounded-xl overflow-hidden border border-neutral-100 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.03)] group-hover:border-neutral-200 transition duration-500">
                    <div className="flex flex-col md:flex-row h-full">
                      {/* Image Section - Updated overlay */}
                      <div className="relative w-full md:w-[280px] h-[180px] md:h-full overflow-hidden">
                        {/* Updated background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/30 via-neutral-900/20 to-neutral-900/30" />
                        
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

                      {/* Content Section - Updated background */}
                      <div className="flex-1 p-5 md:p-8 flex flex-col justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/90 via-white/80 to-neutral-50/90" />
                        <div className="relative z-10">
                          <p className="text-xs md:text-lg text-neutral-800 mb-4 md:mb-6 relative leading-relaxed">
                            <span className="absolute -left-2 -top-2 text-xl md:text-2xl text-neutral-300">"</span>
                            {testimonials[currentIndex].quote}
                            <span className="absolute -right-2 bottom-0 text-xl md:text-2xl text-neutral-300">"</span>
                          </p>
                          <div>
                            <h3 className="text-xs md:text-sm text-neutral-900">
                              {testimonials[currentIndex].name}
                            </h3>
                            <p className="text-[10px] md:text-xs text-neutral-500">
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
          <div className="flex justify-center gap-2 mt-4 md:mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-neutral-800 w-4' 
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      </div>
    </section>
  );
}