"use client";

import { motion } from "framer-motion";
import { GradientSeparator } from "./ui/gradient-separator";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Wijaya",
    role: "Senior Insurance Advisor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
    rating: 5,
    value: "600JT+/YEAR",
    quote: "Sistem yang ada di sini bener-bener ngebantu banget buat tingkatin performa. Tools digitalnya lengkap, plus support timnya luar biasa!",
    englishQuote: "The system here really helps improve performance. Complete digital tools, plus amazing team support!"
  },
  {
    name: "Andrew Tanaka",
    role: "Regional Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
    rating: 5,
    value: "1.2B+/YEAR",
    quote: "Dari yang awalnya ragu-ragu, sekarang udah jadi top performer. Training dan mentoring yang dikasih tuh bener-bener bikin skill kita naik!",
    englishQuote: "From being hesitant to becoming a top performer. The training and mentoring provided really elevate our skills!"
  },
  {
    name: "Linda Kusuma",
    role: "Elite Insurance Consultant",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
    rating: 5,
    value: "800JT+/YEAR",
    quote: "Yang paling berkesan itu komunitas dan budaya sharing-nya. Kita semua saling support dan berbagi ilmu buat sukses bareng-bareng.",
    englishQuote: "The most impressive thing is the community and sharing culture. We all support each other and share knowledge to succeed together."
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
    <>
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-900/30 rounded-full blur-3xl translate-y-1/4" />

        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 relative z-10">
            <p className="text-sm md:text-base text-orange-400 px-4 py-2 rounded-full border border-orange-800 bg-orange-950/30 backdrop-blur-sm inline-block mb-4">
              What Our Team Says
            </p>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-300 to-red-400 bg-clip-text text-transparent mb-6">
              Testimonial Tim Sukses
            </h2>
            <p className="text-lg text-orange-100/70 max-w-2xl mx-auto leading-relaxed">
              Dengar langsung dari rekan-rekan yang telah berhasil!
              <span className="block mt-2 text-orange-200/60 text-base">
                Hear directly from our successful team members
              </span>
            </p>
          </div>

          {/* Testimonials Slider */}
          <div className="max-w-7xl mx-auto relative">
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-900/80 shadow-lg hover:bg-gray-800 transition-all border border-orange-900/20"
            >
              <ChevronLeft className="w-6 h-6 text-orange-400" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-900/80 shadow-lg hover:bg-gray-800 transition-all border border-orange-900/20"
            >
              <ChevronRight className="w-6 h-6 text-orange-400" />
            </button>

            {/* Cards Container */}
            <div className="flex gap-6 transition-all duration-500" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full min-w-[33.33%] px-4"
                >
                  {/* Card */}
                  <div className="relative bg-gray-900/80 rounded-2xl overflow-hidden group">
                    {/* Shiny Border Effect */}
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Card Content */}
                    <div className="relative bg-gray-900/90 rounded-2xl overflow-hidden border border-orange-900/20">
                      {/* Value Tag */}
                      <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-orange-600 to-red-500 rounded-full text-white text-sm font-bold shadow-lg z-10">
                        {testimonial.value}
                      </div>

                      {/* Portrait Image */}
                      <div className="relative h-[300px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10" />
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="relative -mt-20 bg-gradient-to-br from-gray-900 to-gray-900/95 rounded-t-3xl p-8 z-20">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent">
                              {testimonial.name}
                            </h3>
                            <p className="text-orange-400 font-medium text-sm">{testimonial.role}</p>
                          </div>
                          <div className="flex gap-0.5">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                            ))}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <p className="text-orange-100/90 leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                          <p className="text-sm text-orange-200/70 italic">
                            "{testimonial.englishQuote}"
                          </p>
                        </div>
                      </div>

                      {/* Enhanced Shadow Effect */}
                      <div className="absolute inset-0 rounded-2xl shadow-[0_8px_30px_rgb(249,115,22,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index 
                      ? 'w-8 bg-orange-500' 
                      : 'bg-orange-800/50 hover:bg-orange-700/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Separator */}
      <div className="w-full py-8 bg-gradient-to-t from-gray-950 to-gray-900">
        <GradientSeparator />
      </div>
    </>
  );
}