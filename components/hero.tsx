"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Image from "next/image";
import { SilverGradientDivider } from "@/components/ui/silver-gradient-divider";

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />
      
      <div className="absolute top-20 -left-20 w-[600px] h-[600px] bg-gradient-radial from-red-500/30 via-orange-500/20 to-transparent blur-[120px] opacity-70" />
      <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-gradient-radial from-orange-500/30 via-red-500/20 to-transparent blur-[120px] opacity-70" />

      <Navbar />

      <div className="relative z-10 container mx-auto px-4 pt-8 md:pt-16 pb-0 md:pb-8">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
          <div className="inline-block mx-auto">
            <p className="text-[10px] md:text-xs text-orange-400 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full border border-orange-800 bg-orange-950/30 backdrop-blur-sm">
              Join a team that will lead you to success
            </p>
          </div>

          <div className="space-y-3 md:space-y-4 mb-8 md:mb-8">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight px-2">
              Wujudkan <span className="font-serif italic text-white font-medium">Potensimu</span><br/>
              <span className="text-2xl md:text-4xl lg:text-5xl text-white mt-1 block">
                Bersama Kami
              </span>
            </h1>
            <p className="text-xs md:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed backdrop-blur-sm px-2">
              Yuk, mulai perjalanan karirmu bareng tim yang asik dan supportive! 
              <span className="block mt-1 text-gray-500 text-[10px] md:text-xs">
                Start your journey with our awesome team!
              </span>
            </p>
          </div>

          <div className="relative aspect-video w-full max-w-3xl mx-auto px-2 md:px-0">
            <div className="absolute -inset-4 bg-gradient-radial from-orange-500/20 via-orange-500/5 to-transparent blur-xl" />
            
            <div className="relative w-full h-full rounded-lg md:rounded-xl overflow-hidden shadow-xl bg-black/90">
              <iframe
                className="w-full h-full aspect-video"
                src="https://www.youtube.com/embed/hOHJTJVrHJM?si=gLSt9JpuKeh8eG-S&autoplay=0&rel=0&modestbranding=1"
                title="Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '0.5rem',
                }}
              />
            </div>
          </div>

          <div className="pt-3 px-2">
            <Button 
              className="group relative px-4 md:px-8 py-2.5 md:py-3.5 text-sm md:text-base bg-gradient-to-tr from-orange-700 via-orange-600 to-red-500 text-white hover:opacity-90 transition-all duration-300 rounded-lg backdrop-blur-sm border border-orange-400/30 shadow-[0_4px_12px_rgb(249_115_22_/_0.1)] hover:shadow-[0_4px_16px_rgb(249_115_22_/_0.3)] w-full sm:w-[300px]"
            >
              <span className="relative z-10">Gabung Sekarang!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg" />
            </Button>
          </div>

          <div className="pt-2 pb-3 md:pb-4 flex flex-col items-center space-y-1.5">
            <div className="flex -space-x-1.5 md:-space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="relative w-6 md:w-8 h-6 md:h-8 rounded-full border-[1.5px] border-gray-800 overflow-hidden">
                  <Image
                    src={`https://i.pravatar.cc/150?img=${i + 10}`}
                    alt={`Team member ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-orange-950 border-[1.5px] border-gray-800 flex items-center justify-center text-orange-400 text-[10px] md:text-xs font-medium">
                +50
              </div>
            </div>
            <p className="text-[10px] md:text-xs text-orange-200/70">
              Bergabung dengan <span className="font-semibold">50+ Insurance Elite</span> lainnya
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent" />
        <SilverGradientDivider />
      </div>
    </div>
  );
}