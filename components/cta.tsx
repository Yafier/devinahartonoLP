"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-900/30 rounded-full blur-3xl translate-y-1/4" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm md:text-base text-orange-400 px-4 py-2 rounded-full border border-orange-800 bg-orange-950/30 backdrop-blur-sm inline-block mb-4">
              Make Your Choice
            </p>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-300 to-red-400 bg-clip-text text-transparent mb-6">
              di Dunia ini Ada 2 Tipe Orang
            </h2>
            <p className="text-lg text-orange-100/70 max-w-2xl mx-auto leading-relaxed">
              Pilihan ada di tangan kamu. The choice is in your hands.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Type 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative w-full h-[400px] mt-8 pt-8 pb-12"
            >
              {/* Verified Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                <Badge className="px-6 py-2 bg-gradient-to-r from-orange-600 to-red-500 text-white border-none shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <Star className="w-4 h-4 mr-1 fill-white" />
                  ACHIEVER
                </Badge>
              </div>

              {/* Card Container */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 p-[2px] shadow-xl">
                {/* Image Container */}
                <div className="relative h-full w-full rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?q=80&w=2069"
                    alt="Success Mindset"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                </div>
              </div>

              {/* Title Text - Positioned outside with glow effect */}
              <div className="absolute -bottom-8 -left-12 z-20 w-[140%]">
                <div className="relative">
                  {/* Glow Effect Background */}
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-orange-600/10 via-orange-400/5 to-transparent blur-xl" />
                  
                  <motion.h3 
                    className="relative text-4xl font-bold text-orange-200"
                  >
                    Orang Yang Berani<br />
                    <span className="text-orange-100">
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
              className="group relative w-full h-[400px] mt-8 pt-8 pb-12"
            >
              {/* Verified Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                <Badge className="px-6 py-2 bg-gradient-to-r from-gray-600 to-gray-400 text-white border-none shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <Star className="w-4 h-4 mr-1 fill-white" />
                  STAGNANT
                </Badge>
              </div>

              {/* Card Container */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 p-[2px] shadow-xl">
                {/* Image Container */}
                <div className="relative h-full w-full rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2069"
                    alt="Comfort Zone"
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                </div>
              </div>

              {/* Title Text - Positioned outside with glow effect */}
              <div className="absolute -bottom-8 -left-12 z-20 w-[140%]">
                <div className="relative">
                  {/* Glow Effect Background */}
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-gray-600/10 via-gray-400/5 to-transparent blur-xl" />
                  
                  <motion.h3 
                    className="relative text-4xl font-bold text-gray-300"
                  >
                    Dan Yang Memilih<br />
                    <span className="text-gray-400">
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
              className="group relative px-12 py-6 text-lg bg-gradient-to-tr from-orange-700 via-orange-600 to-red-500 text-white hover:opacity-90 transition-all duration-300 rounded-xl backdrop-blur-sm border border-orange-400/30 shadow-[0_8px_16px_rgb(249_115_22_/_0.1)] hover:shadow-[0_8px_20px_rgb(249_115_22_/_0.3)] w-full sm:w-[400px]"
            >
              <span className="relative z-10">Take Action Sekarang</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}