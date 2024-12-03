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
        {/* Header - Updated to match hero.tsx magazine style but with original size */}
        <div className="text-center mb-12 md:mb-16 relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs md:text-sm tracking-[0.3em] text-neutral-500 uppercase px-3 py-1.5 rounded-full border border-neutral-300 bg-white/80 backdrop-blur-sm inline-block mb-3"
          >
            Success Stories
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative mt-3 sm:mt-4"
          >
            <span className="text-2xl md:text-3xl lg:text-4xl font-instrument-serif italic 
            leading-[1.2] text-neutral-900 max-w-[95%] mx-auto block">
              Meet Our Rising Stars
            </span>
            <span className="text-xl md:text-2xl lg:text-3xl font-instrument-serif 
            leading-[1.2] text-neutral-800 normal-case block mt-2">
              Your Success Story Starts Here
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto mt-4"
          >
            Dari fresh graduate sampe jadi top achiever!
          </motion.p>
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
            {/* Updated gradient overlays */}
            <div className="absolute inset-0 bg-gradient-radial from-neutral-200/50 via-transparent to-transparent blur-[100px] opacity-60" />
            
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
                  {/* Updated metallic effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-neutral-300/20 via-white/20 to-neutral-300/20 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
                  <div className="relative bg-gradient-to-br from-white/90 via-neutral-50/90 to-white/90 rounded-xl overflow-hidden border border-neutral-200 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.1)] group-hover:border-neutral-300 transition duration-500">
                    <div className="flex flex-col md:flex-row h-full">
                      {/* Image Section - Adjusted height for mobile */}
                      <div className="relative w-full md:w-[280px] h-[180px] md:h-full overflow-hidden">
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

                      {/* Content Section - Adjusted padding and font size for mobile */}
                      <div className="flex-1 p-5 md:p-8 flex flex-col justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 via-black/80 to-zinc-900/90" />
                        <div className="relative z-10">
                          <p className="text-xs md:text-lg text-white mb-4 md:mb-6 relative leading-relaxed">
                            <span className="absolute -left-2 -top-2 text-xl md:text-2xl text-red-500/60">"</span>
                            {testimonials[currentIndex].quote}
                            <span className="absolute -right-2 bottom-0 text-xl md:text-2xl text-red-500/60">"</span>
                          </p>
                          <div>
                            <h3 className="text-xs md:text-sm text-white">
                              {testimonials[currentIndex].name}
                            </h3>
                            <p className="text-[10px] md:text-xs text-gray-400">
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