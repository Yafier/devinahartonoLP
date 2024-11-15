"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { GridPattern } from "./grid-pattern";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gray-950 overflow-hidden">
      {/* Background Grid Pattern - Updated gradients */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-950/30 to-gray-950/20" />
        <div className="absolute inset-0 overflow-hidden">
          <GridPattern
            width={40}
            height={40}
            x={-1}
            y={-1}
            strokeDasharray="4 4"
            className="absolute w-full h-full transform scale-[200%] stroke-orange-500/10"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-25%, -25%) scale(1.5)',
              background: 'linear-gradient(to bottom, rgba(255,165,0,0.05), transparent)',
              maskImage: 'linear-gradient(to bottom, black 30%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent)',
            }}
          />
        </div>
      </div>

      <Navbar />

      {/* Hero Content - Reduced container padding */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-24">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Tagline */}
          <div className="inline-block mx-auto">
            <p className="text-sm text-orange-400 px-4 py-2 rounded-full border border-orange-800 bg-orange-950/30 backdrop-blur-sm">
              Join a team that will lead you to success
            </p>
          </div>

          {/* Text Content */}
          <div className="space-y-6 mb-36">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
              Wujudkan <span className="font-serif italic text-white font-medium">Potensimu</span><br/>
              <span className="text-4xl md:text-5xl lg:text-6xl text-white">
                Bersama Kami
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed backdrop-blur-sm">
              Yuk, mulai perjalanan karirmu bareng tim yang asik dan supportive! 
              <span className="block mt-2 text-gray-500 text-sm md:text-base">
                Start your journey with our awesome team!
              </span>
            </p>
          </div>

          {/* Video Embed - Fixed container and glow effect */}
          <div className="relative aspect-video w-full max-w-4xl mx-auto">
            {/* Glow effect layers */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-red-600 opacity-30 blur-2xl rounded-3xl" />
            <div className="absolute -inset-2 bg-gradient-to-br from-orange-400 to-red-500 opacity-20 blur-xl rounded-2xl" />
            
            {/* Video container - Fixed positioning and size */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90">
              <iframe
                className="w-full h-full aspect-video"
                src="https://www.youtube.com/embed/hOHJTJVrHJM?si=gLSt9JpuKeh8eG-S&autoplay=0&rel=0&modestbranding=1"
                title="Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '1rem',
                }}
              />
            </div>
          </div>

          {/* CTA Button - Adjusted padding */}
          <div className="pt-4">
            <Button 
              className="group relative px-10 py-5 text-lg bg-gradient-to-tr from-orange-700 via-orange-600 to-red-500 text-white hover:opacity-90 transition-all duration-300 rounded-xl backdrop-blur-sm border border-orange-400/30 shadow-[0_8px_16px_rgb(249_115_22_/_0.1)] hover:shadow-[0_8px_20px_rgb(249_115_22_/_0.3)] w-full sm:w-[400px]"
            >
              <span className="relative z-10">Gabung Sekarang!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl" />
            </Button>
          </div>

          {/* Social Proof - Adjusted padding */}
          <div className="pt-2 pb-6 flex flex-col items-center space-y-2">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="relative w-10 h-10 rounded-full border-2 border-gray-800 overflow-hidden">
                  <Image
                    src={`https://i.pravatar.cc/150?img=${i + 10}`}
                    alt={`Team member ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-orange-950 border-2 border-gray-800 flex items-center justify-center text-orange-400 text-sm font-medium">
                +50
              </div>
            </div>
            <p className="text-sm text-orange-200/70">
              Bergabung dengan <span className="font-semibold">50+ Insurance Elite</span> lainnya
            </p>
          </div>
        </div>
      </div>

      {/* Update gradient fade out - Remove bottom padding and adjust gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-950 to-transparent" 
        style={{ marginBottom: "-1px" }} // Ensure seamless connection
      />
    </div>
  );
}