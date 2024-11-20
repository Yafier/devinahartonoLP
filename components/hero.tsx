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
    <div className="relative min-h-[100vh] overflow-hidden bg-black" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="relative z-50">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl">
          <div className="relative">
            <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-white/5 via-white/10 to-transparent blur-md" />
            <div className="relative bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="px-6 md:px-8 py-4 md:py-5">
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
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-normal tracking-tight text-white leading-tight px-2">
              Ready to Scale<br/>
              <span className="relative inline-block text-white">
                <div className="relative font-instrument-serif italic">
                  Your Income With Us?
                </div>
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light tracking-normal">
              Udah saatnya kamu stop berada di zona nyaman. Join our elite team dan akses proven system yang udah tested. Your time is now!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative aspect-video w-full max-w-5xl mx-auto mt-12 md:mt-16"
          >
            <div className="absolute -inset-4 bg-gradient-radial from-white/5 via-transparent to-transparent blur-xl" />
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-black/90">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/w532SXmLGC8"
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
            className="pt-12 md:pt-16"
          >
            <Button 
              className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 text-base md:text-lg bg-white/10 text-white hover:bg-white/20 rounded-full shadow-xl transition-all duration-300"
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
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
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
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
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