"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { SilverGradientDivider } from "@/components/ui/silver-gradient-divider";

export default function CTA() {
  return (
    <section id="cta" className="pt-8 md:pt-16 pb-8 md:pb-12 relative bg-neutral-100">
      {/* Enhanced Dramatic Background Effects - Updated to neutral theme */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-neutral-100" />
        
        {/* Neutral effect layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 via-neutral-800/5 to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-600/10 via-neutral-900/5 to-transparent blur-3xl" />
        
        {/* Dynamic waves */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-[500px] bg-gradient-to-b from-neutral-500/10 via-neutral-500/5 to-transparent rotate-12 animate-pulse blur-2xl" />
          <div className="absolute top-0 right-1/4 w-1/2 h-[500px] bg-gradient-to-b from-neutral-600/10 via-neutral-600/5 to-transparent -rotate-12 animate-pulse delay-75 blur-2xl" />
        </div>
        
        {/* Particle effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neutral-400/40 rounded-full animate-float-slow blur-sm" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-neutral-400/40 rounded-full animate-float blur-sm" />
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-neutral-300/40 rounded-full animate-float-slower blur-sm" />
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-neutral-300/40 rounded-full animate-float-slow blur-sm" />
          <div className="absolute top-1/4 right-1/2 w-1 h-1 bg-neutral-400/40 rounded-full animate-float-slower blur-sm" />
        </div>
        
        {/* Glowing overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-neutral-600/5 via-transparent to-transparent blur-2xl" />
        
        {/* Distortion effect */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header - Updated to match problem.tsx style */}
          <div className="text-center mb-8 md:mb-16">
            <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
              Make Your Choice
            </span>
            
            <h2 className="mt-6 font-instrument-serif">
              <span className="block text-[2rem] sm:text-6xl leading-[1.1] text-neutral-900">
                DI DUNIA INI
              </span>
              <span className="block text-[1.8rem] sm:text-5xl italic font-light mt-2">
                ada
              </span>
              <span className="block text-[2.2rem] sm:text-6xl uppercase mt-1">
                DUA TIPE
              </span>
            </h2>

            <p className="text-neutral-600 leading-relaxed mt-6">
              Pilihan ada di tangan kamu!
            </p>
          </div>

          {/* Rest of the component - Update badges and cards */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-12 mb-12 md:mb-24">
            {/* Type 1 - Update colors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative w-full h-[300px] md:h-[400px] mt-12 md:mt-8 pt-8"
            >
              {/* Verified Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                <Badge className="px-4 md:px-6 py-1.5 md:py-2 bg-gradient-to-r from-neutral-800 to-neutral-600 text-white border-none shadow-[0_8px_32px_rgba(0,0,0,0.4)] transform hover:scale-105 transition-transform duration-300">
                  <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 fill-white" />
                  ACHIEVER
                </Badge>
              </div>

              {/* Card Container - Update metallic effect */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-neutral-500/20 via-gray-100/20 to-neutral-500/20 p-[2px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:shadow-neutral-500/20 transition duration-500">
                {/* Image Container */}
                <div className="relative h-full w-full rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?q=80&w=2069"
                    alt="Success Mindset"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  {/* Metallic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>
              </div>

              {/* Title Text with Enhanced Styling */}
              <div className="absolute -bottom-8 md:-bottom-8 -left-4 md:-left-12 z-20 w-[calc(100%+2rem)] md:w-[140%]">
                <div className="relative px-4 md:px-0">
                  {/* Enhanced Glow Effect */}
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-red-500/20 via-red-500/5 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
                  
                  <motion.h3 
                    className="relative text-lg md:text-2xl text-white"
                  >
                    Orang Yang Berani<br />
                    <span className="text-base md:text-lg text-gray-400">
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
                <Badge className="px-4 md:px-6 py-1.5 md:py-2 bg-gradient-to-r from-zinc-700 to-zinc-600 text-white border-none shadow-[0_8px_32px_rgba(0,0,0,0.4)] transform hover:scale-105 transition-transform duration-300">
                  <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 fill-white" />
                  STAGNANT
                </Badge>
              </div>

              {/* Card Container with Metallic Effect */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-zinc-500/20 via-gray-100/20 to-zinc-500/20 p-[2px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:shadow-zinc-500/20 transition duration-500">
                {/* Image Container */}
                <div className="relative h-full w-full rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2069"
                    alt="Comfort Zone"
                    fill
                    className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  {/* Metallic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/10 via-transparent to-zinc-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>
              </div>

              {/* Title Text with Enhanced Styling */}
              <div className="absolute -bottom-8 md:-bottom-8 -left-4 md:-left-8 z-20 w-[calc(100%+2rem)] md:w-[140%]">
                <div className="relative px-4 md:px-0">
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-zinc-500/20 via-zinc-500/5 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
                  
                  <motion.h3 
                    className="relative text-lg md:text-2xl text-white"
                  >
                    Dan Yang Memilih<br />
                    <span className="text-base md:text-lg text-gray-400">
                      Berdiam Diri di Zona Nyaman<br />
                      Tanpa Ada Perubahan
                    </span>
                  </motion.h3>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced CTA Button with Metallic and Fire Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <Button 
              className="group relative px-6 md:px-12 py-3 md:py-6 text-sm md:text-base bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white hover:opacity-90 transition-all duration-300 rounded-xl backdrop-blur-sm border border-neutral-700/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-neutral-900/20 w-full sm:w-[300px] md:w-[400px] overflow-hidden"
            >
              {/* Metallic 3D Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/20" />
              
              {/* Fire Effect Layers */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 via-red-500/10 to-orange-400/5 animate-pulse" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(220,38,38,0.5),transparent_50%)] blur-xl animate-pulse" />
                <div className="absolute inset-y-0 -inset-x-4 bg-gradient-to-r from-transparent via-red-500/30 to-transparent animate-[shimmer_2s_infinite] group-hover:opacity-100" />
              </div>

              {/* Button Content */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="relative">
                  {/* Text Glow Effect */}
                  <span className="absolute inset-0 blur-sm bg-gradient-to-r from-red-400 to-orange-300 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  Take Action Sekarang
                </span>
              </span>

              {/* Metallic Edge Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-white/5 to-red-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      </div>
    </section>
  );
}