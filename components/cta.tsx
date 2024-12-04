"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { SilverGradientDivider } from "@/components/ui/silver-gradient-divider";

export default function CTA() {
  return (
    <section className="pt-24 md:pt-32 pb-24 md:pb-32 relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
              Make Your Choice
            </span>
            
            <h2 className="mt-6 font-instrument-serif">
              <span className="block text-[2rem] sm:text-6xl leading-[1.1] text-neutral-900">
                DI DUNIA INI
              </span>
              <span className="block text-[1.8rem] sm:text-5xl italic font-light mt-2 text-neutral-800">
                ada dua
              </span>
              <span className="block text-[2.2rem] sm:text-6xl uppercase mt-1">
                TIPE
              </span>
            </h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-neutral-600 max-w-xl mx-auto text-sm md:text-base"
            >
              Pilihan ada di tangan kamu!
            </motion.p>
          </motion.div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-12 mb-12 md:mb-24">
            {/* Type 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative w-full h-[300px] md:h-[400px] mt-12 md:mt-8 pt-8"
            >
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                <Badge className="px-4 md:px-6 py-1.5 md:py-2 bg-neutral-900 text-white border-none shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 fill-white" />
                  ACHIEVER
                </Badge>
              </div>

              {/* Card Container */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-neutral-200/20 via-neutral-100/20 to-neutral-200/20 p-[2px] shadow-lg group-hover:shadow-xl transition duration-500">
                <div className="relative h-full w-full rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?q=80&w=2069"
                    alt="Success Mindset"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-500/10 via-transparent to-neutral-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>
              </div>

              {/* Title Text */}
              <div className="absolute -bottom-8 md:-bottom-8 -left-4 md:-left-12 z-20 w-[calc(100%+2rem)] md:w-[140%]">
                <div className="relative px-4 md:px-0">
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-neutral-500/20 via-neutral-500/5 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
                  
                  <motion.h3 
                    className="relative text-lg md:text-2xl text-neutral-900"
                  >
                    Orang Yang Berani<br />
                    <span className="text-base md:text-lg text-neutral-600">
                      Melompat & Mengubah Hidupnya<br />
                      Menjadi Lebih Baik
                    </span>
                  </motion.h3>
                </div>
              </div>
            </motion.div>

            {/* Type 2 - Similar structure with different styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative w-full h-[300px] md:h-[400px] mt-12 md:mt-8 pt-8"
            >
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                <Badge className="px-4 md:px-6 py-1.5 md:py-2 bg-neutral-400 text-white border-none shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 fill-white" />
                  STAGNANT
                </Badge>
              </div>

              {/* Card Container */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-neutral-200/20 via-neutral-100/20 to-neutral-200/20 p-[2px] shadow-lg group-hover:shadow-xl transition duration-500">
                <div className="relative h-full w-full rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2069"
                    alt="Comfort Zone"
                    fill
                    className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-500/10 via-transparent to-neutral-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>
              </div>

              {/* Title Text */}
              <div className="absolute -bottom-8 md:-bottom-8 -left-4 md:-left-8 z-20 w-[calc(100%+2rem)] md:w-[140%]">
                <div className="relative px-4 md:px-0">
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-neutral-500/20 via-neutral-500/5 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
                  
                  <motion.h3 
                    className="relative text-lg md:text-2xl text-neutral-900"
                  >
                    Dan Yang Memilih<br />
                    <span className="text-base md:text-lg text-neutral-600">
                      Berdiam Diri di Zona Nyaman<br />
                      Tanpa Ada Perubahan
                    </span>
                  </motion.h3>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <Button 
              className="group relative px-6 md:px-12 py-3 md:py-6 text-sm md:text-base bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-300 rounded-xl border border-neutral-200/10 shadow-lg hover:shadow-xl w-full sm:w-[300px] md:w-[400px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/20" />
              <span className="relative z-10">
                Take Action Sekarang
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-500/10 via-white/5 to-neutral-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
}