"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Image from "next/image";
import { SilverGradientDivider } from "@/components/ui/silver-gradient-divider";
import { motion } from "framer-motion";
import Particles from "@/components/ui/particles";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

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
      <Particles
        className="absolute inset-0 z-10 hidden md:block"
        quantity={800}
        staticity={30}
        ease={35}
        size={0.5}
        color="#FFF"
        vx={0.4}
        vy={-0.3}
      />

      <Particles
        className="absolute inset-0 z-10 md:hidden"
        quantity={500}
        staticity={35}
        ease={40}
        size={0.3}
        color="#FFF"
        vx={0.3}
        vy={-0.2}
      />

      <div className="absolute inset-0 z-[5]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />
        
        <div className="absolute left-0 inset-y-0 w-[600px] md:w-[1000px] opacity-30 md:opacity-40">
          <div className="absolute top-1/4 -left-20 w-[400px] md:w-[800px] h-[500px] md:h-[1000px] bg-gradient-radial from-red-900/40 via-red-800/20 to-transparent blur-[120px] md:blur-[180px] rotate-[15deg] animate-blob" />
          <div className="absolute bottom-1/3 -left-40 w-[450px] md:w-[900px] h-[400px] md:h-[800px] bg-gradient-radial from-red-950/40 via-red-900/20 to-transparent blur-[100px] md:blur-[150px] -rotate-[20deg] animate-blob animation-delay-2000" />
          <div className="absolute top-2/3 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-radial from-red-800/30 via-red-900/15 to-transparent blur-[90px] md:blur-[130px] rotate-[45deg] animate-blob animation-delay-4000" />
        </div>

        <div className="absolute right-0 inset-y-0 w-[600px] md:w-[1000px] opacity-30 md:opacity-40">
          <div className="absolute top-1/3 -right-20 w-[400px] md:w-[800px] h-[500px] md:h-[1000px] bg-gradient-radial from-red-800/30 via-red-900/15 to-transparent blur-[120px] md:blur-[180px] -rotate-[15deg] animate-blob animation-delay-4000" />
          <div className="absolute bottom-1/4 -right-40 w-[450px] md:w-[900px] h-[400px] md:h-[800px] bg-gradient-radial from-red-900/40 via-red-800/20 to-transparent blur-[100px] md:blur-[150px] rotate-[20deg] animate-blob" />
          <div className="absolute top-1/4 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-radial from-red-950/30 via-red-800/15 to-transparent blur-[90px] md:blur-[130px] -rotate-[45deg] animate-blob animation-delay-2000" />
        </div>

        <div className="absolute inset-0 opacity-30 md:opacity-40">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] md:w-[1000px] h-[300px] md:h-[600px] bg-gradient-radial from-red-800/30 via-red-900/15 to-transparent blur-[100px] md:blur-[150px] animate-pulse" />
          
          <div className="absolute top-1/3 left-1/3 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-radial from-red-900/20 via-red-800/10 to-transparent blur-[120px] md:blur-[180px] animate-blob animation-delay-3000" />
          <div className="absolute top-2/3 right-1/3 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-gradient-radial from-red-950/25 via-red-900/15 to-transparent blur-[90px] md:blur-[140px] animate-blob animation-delay-5000" />
          
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] md:w-[1000px] h-[300px] md:h-[600px] bg-gradient-radial from-red-900/30 via-red-800/15 to-transparent blur-[100px] md:blur-[150px] animate-pulse animation-delay-1000" />
        </div>

        <div className="absolute inset-0 opacity-40 hidden md:block">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-red-800/40 via-red-900/20 to-transparent blur-[150px] animate-pulse" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-gradient-radial from-red-900/30 via-red-800/15 to-transparent blur-[180px] animate-blob animation-delay-3000" />
          
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-red-950/35 via-red-900/20 to-transparent blur-[130px] rotate-45 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-radial from-red-800/35 via-red-900/20 to-transparent blur-[140px] -rotate-45 animate-blob animation-delay-4000" />
          
          <div className="absolute top-1/3 left-2/3 w-[400px] h-[400px] bg-gradient-radial from-red-900/25 to-transparent blur-[100px] animate-float" />
          <div className="absolute bottom-1/3 right-2/3 w-[450px] h-[450px] bg-gradient-radial from-red-800/30 to-transparent blur-[110px] animate-float animation-delay-2000" />
          <div className="absolute top-[15%] left-[25%] w-[600px] h-[600px] bg-gradient-radial from-red-900/30 to-transparent blur-[120px] animate-float" />
          <div className="absolute bottom-[20%] right-[30%] w-[500px] h-[500px] bg-gradient-radial from-red-800/25 to-transparent blur-[100px] animate-float animation-delay-2000" />
          <div className="absolute top-[40%] right-[15%] w-[400px] h-[400px] bg-gradient-radial from-red-950/35 to-transparent blur-[90px] animate-float animation-delay-4000" />
          <div className="absolute top-[60%] left-[35%] w-[450px] h-[450px] bg-gradient-radial from-red-900/20 to-transparent blur-[110px] animate-pulse" />
          <div className="absolute bottom-[40%] left-[20%] w-[550px] h-[550px] bg-gradient-radial from-red-800/25 to-transparent blur-[130px] animate-pulse animation-delay-3000" />
          <div className="absolute top-[25%] right-[40%] w-[300px] h-[300px] bg-gradient-radial from-red-950/30 to-transparent blur-[70px] animate-blob" />
          <div className="absolute bottom-[30%] right-[25%] w-[250px] h-[250px] bg-gradient-radial from-red-900/25 to-transparent blur-[60px] animate-blob animation-delay-1000" />
          <div className="absolute top-[45%] left-[45%] w-[350px] h-[350px] bg-gradient-radial from-red-800/20 to-transparent blur-[80px] animate-blob animation-delay-5000" />
        </div>
      </div>

      <div className="relative z-50 container-fluid px-4 pt-16 md:pt-40 pb-4 md:pb-24">
        <div className="max-w-[1920px] mx-auto text-center space-y-2 md:space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mx-auto"
          >
            <AnimatedShinyText
              className="text-sm sm:text-xs md:text-2xl text-white/90 px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full border border-red-500/20 bg-gradient-to-r from-red-500/10 via-red-600/5 to-red-500/10 backdrop-blur-sm"
              shimmerWidth={300}
            >
              Waktunya Perubahan.
            </AnimatedShinyText>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-1 md:space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-normal tracking-tight text-white leading-[1.05] px-2">
              Ready to Scale<br className="block" />
              <span className="relative inline-block text-white">
                <div className="relative font-instrument-serif italic">
                  Your Income With Us?
                </div>
              </span>
            </h1>
            <p className="text-sm sm:text-xl md:text-3xl text-gray-300/80 max-w-[90%] sm:max-w-3xl mx-auto leading-relaxed font-light tracking-normal">
              Udah saatnya kamu stop berada di zona nyaman.
            </p>
          </motion.div>

          <div className="absolute inset-0 opacity-50 hidden md:block">
            <div className="absolute top-[20%] left-[30%] w-[800px] h-[800px] bg-gradient-radial from-red-800/40 via-red-900/20 to-transparent blur-[150px] animate-float" />
            <div className="absolute bottom-[30%] right-[25%] w-[700px] h-[700px] bg-gradient-radial from-red-700/35 via-red-800/20 to-transparent blur-[130px] animate-float animation-delay-2000" />
            
            <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-red-600/30 via-red-700/20 to-transparent blur-[90px] animate-pulse" />
            <div className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] bg-gradient-radial from-red-500/25 via-red-600/15 to-transparent blur-[80px] animate-pulse animation-delay-3000" />
            
            <div className="absolute top-[45%] right-[40%] w-[300px] h-[300px] bg-gradient-radial from-red-500/35 to-transparent blur-[70px] animate-blob" />
            <div className="absolute bottom-[40%] left-[35%] w-[250px] h-[250px] bg-gradient-radial from-red-600/30 to-transparent blur-[60px] animate-blob animation-delay-4000" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 via-transparent to-red-900/10 opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.08),transparent_70%)] opacity-80" />
          </div>

          <div className="relative -mt-2 md:mt-0">
            <ContainerScroll
              titleComponent={null}
            >
              <div className="relative w-full h-full">
                <div className="absolute -inset-1 bg-gradient-radial from-red-500/10 via-red-800/5 to-transparent blur-[40px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50" />
                
                <div className="relative w-full h-full rounded-[28px] overflow-hidden shadow-2xl">
                  <iframe
                    className="w-full h-full relative z-10 scale-110"
                    src="https://www.youtube.com/embed/w532SXmLGC8"
                    title="Introduction Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      border: '1px solid rgba(255,255,255,0.05)',
                      borderRadius: '28px',
                    }}
                  />
                </div>
              </div>
            </ContainerScroll>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-0 md:pt-8 px-2 sm:px-4 space-y-2 md:space-y-6"
          >
            <Button 
              className="relative group overflow-hidden w-[90%] sm:w-auto px-6 sm:px-16 md:px-24 py-3 sm:py-7 md:py-9 text-base sm:text-xl md:text-3xl 
              bg-gradient-to-br from-red-500 via-red-600 to-red-700 
              hover:from-red-600 hover:via-red-700 hover:to-red-800
              text-white rounded-full shadow-[0_0_40px_rgba(220,38,38,0.4)] 
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

            <AnimatedShinyText
              className="text-sm md:text-3xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light tracking-normal"
              shimmerWidth={200}
            >
              Watch how we can help you transform your life
            </AnimatedShinyText>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-8 md:pt-16 relative"
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
                      className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
                    >
                      <svg 
                        className="w-4 h-4 md:w-5 md:h-5 text-red-500/70" 
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
                      <AnimatedShinyText
                        className="text-sm md:text-lg text-white/90 whitespace-nowrap font-medium"
                        shimmerWidth={100}
                      >
                        {req}
                      </AnimatedShinyText>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 md:gap-6 shrink-0">
                  {requirements.map((req, index) => (
                    <div
                      key={`duplicate-${index}`}
                      className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
                    >
                      <svg 
                        className="w-4 h-4 md:w-5 md:h-5 text-red-500/70" 
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
                      <AnimatedShinyText
                        className="text-sm md:text-lg text-white/90 whitespace-nowrap font-medium"
                        shimmerWidth={100}
                      >
                        {req}
                      </AnimatedShinyText>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-6" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-50">
        <SilverGradientDivider />
      </div>
    </div>
  );
}