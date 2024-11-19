"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { SilverGradientDivider } from "@/components/ui/silver-gradient-divider";

export default function CTA() {
  return (
    <section className="pt-8 md:pt-16 pb-8 md:pb-12 relative bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16">
            <p className="text-xs md:text-sm text-orange-400 px-3 py-1.5 rounded-full border border-orange-800 bg-orange-950/30 backdrop-blur-sm inline-block mb-3 md:mb-4">
              Make Your Choice
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-6">
              di Dunia ini Ada 2 Tipe Orang
            </h2>
            <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Pilihan ada di tangan kamu!
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-12 mb-12 md:mb-24">
            {/* Type 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative w-full h-[300px] md:h-[400px] mt-12 md:mt-8 pt-8"
            >
              {/* Verified Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                <Badge className="px-4 md:px-6 py-1.5 md:py-2 bg-gradient-to-r from-orange-600 to-red-500 text-white border-none shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 fill-white" />
                  ACHIEVER
                </Badge>
              </div>

              {/* Card Container */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 p-[2px] shadow-xl">
                {/* Image Container */}
                <div className="relative h-full w-full rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?q=80&w=2069"
                    alt="Success Mindset"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                </div>
              </div>

              {/* Title Text - Adjusted for mobile */}
              <div className="absolute -bottom-8 md:-bottom-8 -left-4 md:-left-12 z-20 w-[calc(100%+2rem)] md:w-[140%]">
                <div className="relative px-4 md:px-0">
                  {/* Glow Effect Background */}
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-orange-600/10 via-orange-400/5 to-transparent blur-xl" />
                  
                  <motion.h3 
                    className="relative text-xl md:text-3xl font-bold text-white"
                  >
                    Orang Yang Berani<br />
                    <span className="text-lg md:text-2xl text-gray-400">
                      Melompat & Mengubah Hidupnya<br />
                      Menjadi Lebih Baik
                    </span>
                  </motion.h3>
                </div>
              </div>
            </motion.div>

            {/* Type 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative w-full h-[300px] md:h-[400px] mt-12 md:mt-8 pt-8"
            >
              {/* Verified Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                <Badge className="px-4 md:px-6 py-1.5 md:py-2 bg-gradient-to-r from-gray-600 to-gray-400 text-white border-none shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 fill-white" />
                  STAGNANT
                </Badge>
              </div>

              {/* Card Container */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 p-[2px] shadow-xl">
                {/* Image Container */}
                <div className="relative h-full w-full rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2069"
                    alt="Comfort Zone"
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                </div>
              </div>

              {/* Title Text - Adjusted for mobile */}
              <div className="absolute -bottom-8 md:-bottom-8 -left-4 md:-left-8 z-20 w-[calc(100%+2rem)] md:w-[140%]">
                <div className="relative px-4 md:px-0">
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-gray-600/10 via-gray-400/5 to-transparent blur-xl" />
                  
                  <motion.h3 
                    className="relative text-xl md:text-3xl font-bold text-white"
                  >
                    Dan Yang Memilih<br />
                    <span className="text-lg md:text-2xl text-gray-400">
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
              className="group relative px-6 md:px-12 py-3 md:py-6 text-sm md:text-lg bg-gradient-to-tr from-orange-700 via-orange-600 to-red-500 text-white hover:opacity-90 transition-all duration-300 rounded-lg md:rounded-xl backdrop-blur-sm border border-orange-400/30 shadow-[0_8px_16px_rgb(249_115_22_/_0.1)] hover:shadow-[0_8px_20px_rgb(249_115_22_/_0.3)] w-full sm:w-[300px] md:w-[400px]"
            >
              <span className="relative z-10">Take Action Sekarang</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl" />
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