"use client";

import Image from "next/image";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import { motion } from "framer-motion";

export default function Transformation() {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />

      {/* Title Section */}
      <div className="container mx-auto px-4 mb-12 md:mb-16 relative z-10">
        <div className="text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs md:text-sm text-red-400 px-3 py-1.5 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-3"
          >
            Kalau itu kamu.
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl lg:text-4xl text-white mb-3"
          >
            Please Pay Attention Closely<br/>
            <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-transparent bg-clip-text">
              This Might Be The Game Changer For You
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Every big things in your life come from unexpected angle.
          </motion.p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Bento Grid Container - Increased size */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%,1fr] gap-8 md:gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-8 md:gap-10">
            {/* Video Card - Top */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group bg-black/40"
            >
              {/* Enhanced Border Effect */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-red-500/30 via-white/20 to-red-500/30 blur-sm opacity-50 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative h-full">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
                  <source src="/tablet.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.4)_30%,rgba(0,0,0,0.05)_70%,rgba(0,0,0,0)_100%)]" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs text-red-400 px-3 py-1.5 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-3">
                    Step 1: Transform
                  </p>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-white/5 to-red-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                    <h2 className="relative text-lg md:text-xl font-bold mb-3 z-10">
                      <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 text-transparent bg-clip-text group-hover:from-red-400 group-hover:to-red-300 transition-all duration-300">
                        Mindset Upgrade
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">
                    The only thing that holding you back is your mind. Kalau kamu belum lihat what's possible, kamu gak bakal percaya.
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
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
                  <source src="/meeting.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.4)_30%,rgba(0,0,0,0.05)_70%,rgba(0,0,0,0)_100%)]" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm text-red-400 px-2 py-1 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-2">
                    Step 2: Learn
                  </p>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-red-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h2 className="relative text-lg md:text-xl font-bold mb-3 z-10">
                      <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 text-transparent bg-clip-text group-hover:from-red-400 group-hover:to-red-300 transition-all duration-300">
                        Belajar dari Orang yang Sudah Berhasil.
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">
                    Belajar langsung dari orang yang sudah berhasil, and the person yang udah punya apa yang kamu ingin. The blind can't lead the blind, right?
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 md:gap-10">
            {/* Top Wide Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative aspect-[16/9] rounded-2xl overflow-hidden group bg-black/40"
            >
              {/* Enhanced Border Effect */}
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-red-500/30 via-white/20 to-red-500/30 blur-sm opacity-50 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative h-full">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
                  <source src="/deal.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.4)_30%,rgba(0,0,0,0.05)_70%,rgba(0,0,0,0)_100%)]" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs text-red-400 px-3 py-1.5 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-3">
                    Step 3: Implement
                  </p>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-white/5 to-red-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                    <h2 className="relative text-lg md:text-xl font-bold mb-3 z-10">
                      <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 text-transparent bg-clip-text group-hover:from-red-400 group-hover:to-red-300 transition-all duration-300">
                        Terjun Langsung ke Lapangan
                      </span>
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-xl">
                    Theory and Preparation bakal nge hold you back from impactful result. The only way to learn is by doing and we are here to make sure you do, learn, and grow.
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
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
                  <source src="/worker.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.4)_30%,rgba(0,0,0,0.05)_70%,rgba(0,0,0,0)_100%)]" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm text-red-400 px-2 py-1 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-2">
                    Step 4: Consistent
                  </p>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-red-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h2 className="relative text-lg md:text-xl font-bold mb-3 z-10">
                      <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 text-transparent bg-clip-text group-hover:from-red-400 group-hover:to-red-300 transition-all duration-300">
                        Take Action & Keep It Going.
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-xl">
                    Yes there are no overnight success, but kecepatan kamu bakal capai sukses dengan komunitas yang benar will be massive.
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