"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Image from "next/image";
import { SilverGradientDivider } from "@/components/ui/silver-gradient-divider";
import { motion } from "framer-motion";

const partners = [
  {
    id: 1,
    name: "Yafier",
    logo: "https://placehold.co/100x100/333/white?text=IC",
    text: "Leading Provider"
  },
  {
    id: 2,
    name: "Global Ins",
    logo: "https://placehold.co/100x100/333/white?text=GI",
    text: "Global Excellence"
  },
  {
    id: 3,
    name: "Trust Life",
    logo: "https://placehold.co/100x100/333/white?text=TL",
    text: "Life Insurance"
  },
  {
    id: 4,
    name: "Pro Guard",
    logo: "https://placehold.co/100x100/333/white?text=PG",
    text: "Protection Expert"
  },
  {
    id: 5,
    name: "Smart Ins",
    logo: "https://placehold.co/100x100/333/white?text=SI",
    text: "Smart Solutions"
  },
  {
    id: 6,
    name: "Safe Life",
    logo: "https://placehold.co/100x100/333/white?text=SL",
    text: "Safety First"
  }
];

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300%] h-[1800px] bg-gradient-to-b from-red-800/50 via-red-900/10 to-transparent blur-[180px] opacity-100 transform -translate-y-[65%]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250%] h-[1500px] bg-gradient-to-b from-red-700/40 via-red-800/20 to-transparent blur-[150px] opacity-90 transform -translate-y-[45%]" />
      <div className="absolute top-0 left-0 w-full h-[1000px] bg-[radial-gradient(ellipse_at_top,_rgba(153,27,27,0.3),transparent_70%)] opacity-90" />
      <div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_rgba(185,28,28,0.2),transparent_50%)] opacity-80" />
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.1),transparent_40%)] opacity-70" />
      <div className="absolute top-0 left-1/4 w-[2px] h-[600px] bg-gradient-to-b from-red-800/60 via-red-900/20 to-transparent transform rotate-[30deg] blur-[3px]" />
      <div className="absolute top-0 right-1/4 w-[2px] h-[600px] bg-gradient-to-b from-red-800/60 via-red-900/20 to-transparent transform -rotate-[30deg] blur-[3px]" />
      <div className="absolute top-0 left-[40%] w-[1px] h-[500px] bg-gradient-to-b from-red-700/50 via-red-800/20 to-transparent transform rotate-[20deg] blur-[2px]" />
      <div className="absolute top-0 right-[40%] w-[1px] h-[500px] bg-gradient-to-b from-red-700/50 via-red-800/20 to-transparent transform -rotate-[20deg] blur-[2px]" />
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-[5%] left-[10%] w-1.5 h-1.5 bg-red-300/40 rounded-full animate-float-slow" />
        <div className="absolute top-[15%] right-[20%] w-1.5 h-1.5 bg-red-200/40 rounded-full animate-float-slower" />
        <div className="absolute top-[25%] left-[30%] w-1.5 h-1.5 bg-red-300/40 rounded-full animate-float" />
        <div className="absolute top-[10%] right-[40%] w-1.5 h-1.5 bg-red-200/40 rounded-full animate-float-slow" />
        <div className="absolute top-[20%] left-[25%] w-1 h-1 bg-red-300/30 rounded-full animate-float-slower" />
        <div className="absolute top-[30%] right-[35%] w-1 h-1 bg-red-200/30 rounded-full animate-float" />
        <div className="absolute top-[40%] left-[15%] w-1 h-1 bg-red-300/30 rounded-full animate-float-slow" />
        <div className="absolute top-[8%] right-[45%] w-1 h-1 bg-red-200/30 rounded-full animate-float-slower" />
        <div className="absolute top-[15%] left-[45%] w-0.5 h-0.5 bg-red-300/20 rounded-full animate-float" />
        <div className="absolute top-[25%] right-[25%] w-0.5 h-0.5 bg-red-200/20 rounded-full animate-float-slower" />
        <div className="absolute top-[35%] left-[35%] w-0.5 h-0.5 bg-red-300/20 rounded-full animate-float-slow" />
        <div className="absolute top-[12%] right-[15%] w-0.5 h-0.5 bg-red-200/20 rounded-full animate-float" />
        <div className="absolute top-[45%] right-[15%] w-px h-px bg-red-200/20 rounded-full animate-float" />
        <div className="absolute top-[55%] left-[20%] w-px h-px bg-red-300/20 rounded-full animate-float-slower" />
        <div className="absolute top-[65%] right-[30%] w-px h-px bg-red-200/20 rounded-full animate-float-slow" />
        <div className="absolute top-[18%] left-[38%] w-px h-px bg-red-300/20 rounded-full animate-float" />
        <div className="absolute top-[22%] right-[42%] w-px h-px bg-red-200/20 rounded-full animate-float-slower" />
        <div className="absolute top-[28%] left-[12%] w-px h-px bg-red-300/20 rounded-full animate-float-slow" />
      </div>
      <div className="relative z-50">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl">
          <div className="relative">
            <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-red-800/20 via-red-900/5 to-transparent blur-md" />
            <div className="relative bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="px-6 md:px-8 py-4 md:py-5">
                <Navbar />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4 pt-16 md:pt-32 pb-0 md:pb-8">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mx-auto"
          >
            <p className="text-[10px] md:text-sm text-red-400 px-3 py-1.5 rounded-full border border-red-800/50 bg-red-950/30 backdrop-blur-sm">
              Transform Your Career With Us
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-3 md:space-y-6"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight px-2">
              Unlock Your Potential<br/>
              <span className="relative inline-block">
                <span className="absolute -inset-8 bg-gradient-radial from-red-900/30 via-red-800/20 to-transparent blur-[30px] scale-125" />
                <span className="absolute -inset-10 bg-gradient-to-r from-red-950/30 via-red-900/20 to-red-950/30 blur-[20px] scale-125" />
                
                <span className="absolute -inset-4 bg-red-900/10 blur-[25px] rounded-full" />
                
                <span className="relative bg-gradient-to-r from-red-800 via-red-700 to-red-900 text-transparent bg-clip-text">
                  In Insurance Industry
                </span>
              </span>
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
              Join our elite team and access proven systems, comprehensive training,
              and unlimited earning potential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative aspect-video w-full max-w-3xl mx-auto mt-8 md:mt-12"
          >
            <div className="absolute -inset-4 bg-gradient-radial from-red-800/20 via-red-900/5 to-transparent blur-xl" />
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-black/90">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=0&rel=0&modestbranding=1"
                title="Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '0.75rem',
                }}
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-8 md:pt-12"
          >
            <Button 
              className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 text-base md:text-lg bg-gradient-to-r from-red-800 to-red-900 text-white hover:opacity-90 rounded-full shadow-xl hover:shadow-red-900/20 transition-all duration-300"
            >
              Start Your Journey Now
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-12 md:pt-16"
          >
            <div className="relative w-full overflow-hidden">
              <div className="flex animate-marquee-infinite">
                <div className="flex shrink-0 gap-8">
                  {partners.map((partner, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-red-950/5 backdrop-blur-sm rounded-full border border-red-900/10"
                    >
                      <div className="relative w-6 h-6">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-white/70 text-sm">{partner.name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex shrink-0 gap-8">
                  {partners.map((partner, index) => (
                    <div
                      key={`duplicate-${index}`}
                      className="flex items-center gap-2 px-4 py-2 bg-red-950/5 backdrop-blur-sm rounded-full border border-red-900/10"
                    >
                      <div className="relative w-6 h-6">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-white/70 text-sm">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </div>
  );
}