"use client";

import Image from "next/image";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import { motion } from "framer-motion";

export default function Transformation() {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />

      {/* Add Title Section */}
      <div className="container mx-auto px-4 mb-12 md:mb-16 relative z-10">
        <div className="text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs md:text-sm text-red-400 px-3 py-1.5 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-3"
          >
            The Solution
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl lg:text-4xl text-white mb-3"
          >
            Your Journey to Success<br/>
            <span className="text-red-400">Starts Here</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto"
          >
            Sistem yang proven dan community yang supportive untuk transformasi karir kamu
          </motion.p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr] gap-3 md:gap-4">
          {/* Left Column - Tall Rectangle (30%) */}
          <div className="flex flex-col gap-3 md:gap-4">
            {/* Video Card - Top */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group bg-black/40"
            >
              <div className="absolute -inset-2 bg-gradient-radial from-red-500/20 via-red-500/5 to-transparent blur-xl" />
              <div className="relative h-full">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
                  <source src="/galaxy.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-red-400 px-2 py-1 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-2">
                    Step 1: Transform
                  </p>
                  <h2 className="text-lg text-white mb-1">
                    Mindset Upgrade
                  </h2>
                  <p className="text-xs text-gray-300">
                    Level up your mindset bareng mentor yang udah proven
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image Card - Bottom */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group bg-black/40 flex-1"
            >
              <div className="absolute -inset-2 bg-gradient-radial from-red-500/20 via-red-500/5 to-transparent blur-xl" />
              <div className="relative h-full">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                  alt="Development Process"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-red-400 px-2 py-1 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-2">
                    Step 2: Learn
                  </p>
                  <h2 className="text-lg text-white mb-1">
                    Skill Development
                  </h2>
                  <p className="text-xs text-gray-300">
                    Master the skills dengan sistem yang proven
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - 70% */}
          <div className="flex flex-col gap-3 md:gap-4">
            {/* Top Wide Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative aspect-[21/9] rounded-2xl overflow-hidden group bg-black/40"
            >
              <div className="absolute -inset-2 bg-gradient-radial from-red-500/20 via-red-500/5 to-transparent blur-xl" />
              <div className="relative h-full">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070"
                  alt="Team Collaboration"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-red-400 px-2 py-1 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-2">
                    Step 3: Grow
                  </p>
                  <h2 className="text-xl text-white mb-2">
                    Supportive Community
                  </h2>
                  <p className="text-sm text-gray-300 max-w-xl">
                    Join komunitas high achievers yang siap support your journey
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Wide Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative aspect-[21/9] rounded-2xl overflow-hidden group bg-black/40 flex-1"
            >
              <div className="absolute -inset-2 bg-gradient-radial from-red-500/20 via-red-500/5 to-transparent blur-xl" />
              <div className="relative h-full">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070"
                  alt="Innovation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-red-400 px-2 py-1 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-2">
                    Step 4: Excel
                  </p>
                  <h2 className="text-xl text-white mb-2">
                    Achieve Your Dreams
                  </h2>
                  <p className="text-sm text-gray-300 max-w-xl">
                    Raih financial freedom dan lifestyle yang kamu impikan
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent" />
        <SilverGradientDivider />
      </div>
    </section>
  );
}