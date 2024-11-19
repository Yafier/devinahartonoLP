"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Anderson",
    role: "Senior Software Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop",
    quote: "The development environment and tech stack here are cutting-edge. The team's commitment to clean code and best practices makes it a dream workplace for any engineer."
  },
  {
    name: "Michael Chen",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
    quote: "What sets this team apart is the culture of continuous learning and innovation. We're constantly pushing boundaries and exploring new technologies."
  },
  {
    name: "Emily Rodriguez",
    role: "DevOps Specialist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop",
    quote: "The infrastructure and automation pipelines we've built are state-of-the-art. It's incredible to work with a team that values efficiency and scalability."
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
            Team Insights
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Voices of Excellence
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Hear from our team of passionate developers
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

          {/* Card */}
          <div className="relative h-[280px] md:h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <div className="bg-gradient-to-br from-black/60 via-zinc-900/30 to-black/60 rounded-xl overflow-hidden border border-red-900/10 backdrop-blur-sm shadow-xl">
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Image Section */}
                    <div className="relative w-full md:w-[280px] h-[140px] md:h-full">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 280px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/50 md:bg-gradient-to-l" />
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                      <p className="text-lg md:text-xl text-white font-light italic mb-6">
                        "{testimonials[currentIndex].quote}"
                      </p>
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {testimonials[currentIndex].role}
                        </p>
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