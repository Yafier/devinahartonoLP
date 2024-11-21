"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Image from "next/image";
import { SilverGradientDivider } from "@/components/ui/silver-gradient-divider";
import { motion } from "framer-motion";

const requirements = [
  "Without Previous Experience",
  "Without Spending Millions",
  "Without Age Limit",
  "Without Capital Required",
  "Without Sales Target",
  "Without Complex Requirements"
];

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-black/95" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />
        
        <div className="absolute left-0 inset-y-0 w-[400px] md:w-[800px] opacity-30 md:opacity-40">
          <div className="absolute top-1/4 -left-20 w-[300px] md:w-[600px] h-[400px] md:h-[800px] bg-gradient-radial from-red-900/40 via-red-800/20 to-transparent blur-[100px] md:blur-[150px] rotate-[15deg] animate-blob" />
          <div className="absolute bottom-1/3 -left-40 w-[350px] md:w-[700px] h-[300px] md:h-[600px] bg-gradient-radial from-red-950/40 via-red-900/20 to-transparent blur-[80px] md:blur-[130px] -rotate-[20deg] animate-blob animation-delay-2000" />
        </div>

        <div className="absolute right-0 inset-y-0 w-[400px] md:w-[800px] opacity-30 md:opacity-40">
          <div className="absolute top-1/3 -right-20 w-[300px] md:w-[600px] h-[400px] md:h-[800px] bg-gradient-radial from-red-800/30 via-red-900/15 to-transparent blur-[100px] md:blur-[150px] -rotate-[15deg] animate-blob animation-delay-4000" />
          <div className="absolute bottom-1/4 -right-40 w-[350px] md:w-[700px] h-[300px] md:h-[600px] bg-gradient-radial from-red-900/40 via-red-800/20 to-transparent blur-[80px] md:blur-[130px] rotate-[20deg] animate-blob" />
        </div>
      </div>

      <div className="relative z-50">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl">
          <div className="relative">
            <div className="relative bg-black/10 backdrop-blur-sm rounded-full border border-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="px-4 md:px-6 py-2">
                <Navbar />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 md:pt-48 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mx-auto"
          >
            <p className="text-[10px] md:text-sm text-gray-400 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              Mau Tau Rahasia Sukses di Insurance Industry?
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 md:space-y-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-normal tracking-tight text-white leading-tight px-2">
              Ready to Scale<br/>
              <span className="relative inline-block text-white">
                <div className="relative font-instrument-serif italic">
                  Your Income With Us?
                </div>
              </span>
            </h1>
            <p className="text-sm md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light tracking-normal">
              Udah saatnya kamu stop berada di zona nyaman. Join our elite team dan akses proven system yang udah tested. Your time is now!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative aspect-video w-full max-w-5xl mx-auto mt-12 md:mt-16"
          >
            <div className="absolute -inset-4 bg-gradient-radial from-red-500/20 via-red-800/10 to-transparent blur-[40px]" />
            <div className="absolute -inset-8 bg-gradient-conic from-orange-500/10 via-red-500/10 to-orange-500/10 blur-[50px] animate-spin-slow" />
            <div className="absolute -inset-2 bg-gradient-to-b from-red-500/20 via-orange-400/10 to-white/5 blur-[30px] animate-pulse" />
            
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-black/90">
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 via-orange-900/10 to-transparent opacity-50" />
              
              <iframe
                className="w-full h-full relative z-10"
                src="https://www.youtube.com/embed/w532SXmLGC8"
                title="Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '0.75rem',
                }}
              />
              
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-radial from-red-500/30 to-transparent blur-2xl animate-pulse" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-radial from-orange-500/20 to-transparent blur-2xl animate-pulse delay-75" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-12 md:pt-16"
          >
            <Button 
              className="relative group overflow-hidden w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 text-base md:text-lg 
              bg-gradient-to-br from-red-500 via-red-600 to-red-700 
              hover:from-red-600 hover:via-red-700 hover:to-red-800
              text-white rounded-full shadow-[0_0_20px_rgba(220,38,38,0.3)] 
              transition-all duration-300 transform hover:scale-[1.02]"
            >
              {/* Metallic shine effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-white/5 to-transparent opacity-50" />
              
              {/* Moving gradient shine on hover */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] 
                bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000" />
              
              {/* Inner shadow for depth */}
              <div className="absolute inset-0 rounded-full shadow-inner-lg" />
              
              {/* Button text with subtle text shadow */}
              <span className="relative z-10 font-medium tracking-wide text-shadow-sm">
                Start Your Journey Now
              </span>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-12 md:pt-16 relative"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

            <div className="relative w-full overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

              <div className="flex whitespace-nowrap animate-marquee-infinite">
                <div className="flex gap-3 md:gap-6 shrink-0">
                  {requirements.map((req, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-4 py-1.5 md:py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
                    >
                      <svg 
                        className="w-3 h-3 md:w-4 md:h-4 text-white/70" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span className="text-white/90 text-xs md:text-sm whitespace-nowrap">
                        {req}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-6 shrink-0">
                  {requirements.map((req, index) => (
                    <div
                      key={`duplicate-${index}`}
                      className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-4 py-1.5 md:py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
                    >
                      <svg 
                        className="w-3 h-3 md:w-4 md:h-4 text-white/70" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span className="text-white/90 text-xs md:text-sm whitespace-nowrap">
                        {req}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-6" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </div>
  );
}