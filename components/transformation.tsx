"use client";

import Image from "next/image";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import { motion } from "framer-motion";

// Add these interfaces at the top of the file
interface Step {
  id: number;
  step: string;
  title: string;
  description: string;
  video: string;
}

interface VideoCardProps {
  step: string;
  title: string;
  description: string;
  video: string;
  featured?: boolean;
}

// Update the steps array with proper typing
const steps: Step[] = [
  {
    id: 1,
    step: "Step 01 — Foundation",
    title: "Mindset Upgrade",
    description: "The only thing holding you back is your mind. Di ALIFE, kami akan membuka perspektif kamu tentang what's truly possible.",
    video: "/tablet.mp4"
  },
  {
    id: 2,
    step: "Step 02 — Growth",
    title: "Learn from the Best",
    description: "Belajar langsung dari successful entrepreneurs yang sudah menghasilkan 6-7 digit income per bulan. Real mentors, real results.",
    video: "/meeting.mp4"
  },
  {
    id: 3,
    step: "Step 03 — Action",
    title: "Take Massive Action",
    description: "Stop overthinking, start doing. Our proven system will guide you through every step, ensuring your success journey starts right away.",
    video: "/deal.mp4"
  },
  {
    id: 4,
    step: "Step 04 — Growth",
    title: "Build Your Empire",
    description: "Join a supportive community of high-achievers. Your success accelerates when you're surrounded by people who inspire you.",
    video: "/worker.mp4"
  },
  {
    id: 5,
    step: "Step 05 — Scale",
    title: "Scale Your Success",
    description: "Leverage our proven systems and network to multiply your income. From 6 to 7 figures, we'll show you the way.",
    video: "/meeting.mp4"
  },
  {
    id: 6,
    step: "Step 06 — Legacy",
    title: "Create Impact",
    description: "Transform not just your life, but help others achieve their dreams. Build a legacy that matters.",
    video: "/tablet.mp4"
  }
];

export default function Transformation() {
  return (
    <section className="py-24 md:py-32 relative bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="max-w-[1400px] mx-auto">
          {/* Magazine-style Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
              The Process
            </span>
            
            <h2 className="mt-6 font-instrument-serif">
              <span className="block text-[2rem] sm:text-6xl leading-[1.1] text-neutral-900">
                TRANSFORM
              </span>
              <span className="block text-[1.8rem] sm:text-5xl italic font-light mt-2">
                your life with
              </span>
              <span className="block text-[2.2rem] sm:text-6xl uppercase mt-1">
                PROVEN STEPS
              </span>
            </h2>
          </motion.div>

          {/* Dynamic Bento Grid */}
          <div className="grid grid-cols-12 auto-rows-[320px] gap-4 md:gap-6 lg:gap-8">
            {/* Feature Card - Large */}
            <motion.article 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="col-span-12 md:col-span-8 row-span-2 relative rounded-2xl overflow-hidden group"
            >

              <VideoCard {...steps[0]} featured />
            </motion.article>

              {/* Enhanced Border Effect */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-red-500/30 via-white/20 to-red-500/30 blur-sm opacity-50 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative h-full">
                <Image
                  src="/transform.jpg"
                  alt="Transformation Step"
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.4)_30%,rgba(0,0,0,0.05)_70%,rgba(0,0,0,0)_100%)]" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs md:text-lg text-red-400 px-3 py-1.5 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-3">
                    Step 1: Transform
                  </p>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-white/5 to-red-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                    <h2 className="relative text-lg md:text-3xl font-bold mb-3 z-10">
                      <span className="bg-gradient-to-r from-red-800 via-red-500 to-red-800 text-transparent bg-clip-text group-hover:from-red-700 group-hover:via-red-400 group-hover:to-red-700 transition-all duration-300">
                        Mindset Upgrade
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </h2>
                  </div>
                  <p className="text-sm md:text-xl text-white/90 leading-relaxed">
                    The only thing that holding you back is your mind. Kalau kamu belum lihat what's possible, kamu gak bakal percaya.
                  </p>
                </div>
              </div>
            </motion.div>


            {/* Tall Portrait */}
            <motion.article 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="col-span-12 md:col-span-4 row-span-2 relative rounded-2xl overflow-hidden group"
            >
              <VideoCard {...steps[1]} />
            </motion.article>

            {/* Middle Cards */}
            <motion.article 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="col-span-12 md:col-span-6 relative rounded-2xl overflow-hidden group"
            >

              <VideoCard {...steps[2]} />
            </motion.article>

              <div className="absolute -inset-2 bg-gradient-radial from-red-500/20 via-red-500/5 to-transparent blur-xl" />
              <div className="relative h-full">
                <Image
                  src="/learn.jpg"
                  alt="Transformation Step"
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.4)_30%,rgba(0,0,0,0.05)_70%,rgba(0,0,0,0)_100%)]" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm md:text-lg text-red-400 px-2 py-1 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-2">
                    Step 2: Learn
                  </p>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-red-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h2 className="relative text-lg md:text-3xl font-bold mb-3 z-10">
                      <span className="bg-gradient-to-r from-red-800 via-red-500 to-red-800 text-transparent bg-clip-text group-hover:from-red-700 group-hover:via-red-400 group-hover:to-red-700 transition-all duration-300">
                        Belajar dari Orang yang Sudah Berhasil.
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </h2>
                  </div>
                  <p className="text-sm md:text-xl text-white/90 leading-relaxed">
                    Belajar langsung dari orang yang sudah berhasil, and the person yang udah punya apa yang kamu ingin. The blind can't lead the blind, right?
                  </p>
                </div>
              </div>
            </motion.div>
          </div>


            <motion.article 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="col-span-12 md:col-span-6 relative rounded-2xl overflow-hidden group"
            >
              <VideoCard {...steps[3]} />
            </motion.article>

            {/* Wide Landscape */}
            <motion.article 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="col-span-12 md:col-span-8 relative rounded-2xl overflow-hidden group"
            >

              <VideoCard {...steps[4]} />
            </motion.article>

              {/* Enhanced Border Effect */}
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-red-500/30 via-white/20 to-red-500/30 blur-sm opacity-50 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative h-full">
                <Image
                  src="/implement.jpg"
                  alt="Transformation Step"
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.4)_30%,rgba(0,0,0,0.05)_70%,rgba(0,0,0,0)_100%)]" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs md:text-lg text-red-400 px-3 py-1.5 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-3">
                    Step 3: Implement
                  </p>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-white/5 to-red-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                    <h2 className="relative text-lg md:text-3xl font-bold mb-3 z-10">
                      <span className="bg-gradient-to-r from-red-800 via-red-500 to-red-800 text-transparent bg-clip-text group-hover:from-red-700 group-hover:via-red-400 group-hover:to-red-700 transition-all duration-300">
                        Terjun Langsung ke Lapangan
                      </span>
                    </h2>
                  </div>
                  <p className="text-sm md:text-xl text-white/90 leading-relaxed max-w-xl">
                    Theory and Preparation bakal nge hold you back from impactful result. The only way to learn is by doing and we are here to make sure you do, learn, and grow.
                  </p>
                </div>
              </div>
            </motion.div>


            {/* Final Portrait */}
            <motion.article 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="col-span-12 md:col-span-4 relative rounded-2xl overflow-hidden group"
            >

              <VideoCard {...steps[5]} />
            </motion.article>

              <div className="absolute -inset-2 bg-gradient-radial from-red-500/20 via-red-500/5 to-transparent blur-xl" />
              <div className="relative h-full">
                <Image
                  src="/Action.jpg"
                  alt="Transformation Step"
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.4)_30%,rgba(0,0,0,0.05)_70%,rgba(0,0,0,0)_100%)]" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm md:text-lg text-red-400 px-2 py-1 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-2">
                    Step 4: Consistent
                  </p>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-red-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h2 className="relative text-lg md:text-3xl font-bold mb-3 z-10">
                      <span className="bg-gradient-to-r from-red-800 via-red-500 to-red-800 text-transparent bg-clip-text group-hover:from-red-700 group-hover:via-red-400 group-hover:to-red-700 transition-all duration-300">
                        Take Action & Keep It Going.
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </h2>
                  </div>
                  <p className="text-sm md:text-xl text-white/90 leading-relaxed max-w-xl">
                    Yes there are no overnight success, but kecepatan kamu bakal capai sukses dengan komunitas yang benar will be massive.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Enhanced Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-center mt-32"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-instrument-serif leading-snug text-neutral-800 mb-6">
                Ready to transform your life?
              </h3>
              <p className="text-neutral-600 leading-relaxed italic">
                "Don't let fear hold you back. Ambil langkah pertama menuju kesuksesanmu sekarang!"
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
}

// Video Card Component
function VideoCard({ step, title, description, video, featured = false }: VideoCardProps) {
  return (
    <div className="relative h-full transform transition-transform duration-700 group-hover:scale-105">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`absolute bottom-8 left-8 right-8 ${featured ? 'max-w-2xl' : ''}`}
      >
        <p className="text-xs tracking-[0.2em] text-neutral-400 uppercase mb-4">
          {step}
        </p>
        <h3 className={`${featured ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-3xl'} font-instrument-serif text-white mb-4`}>
          {title}
        </h3>
        <p className={`${featured ? 'text-sm sm:text-base' : 'text-sm'} text-white/90 leading-relaxed`}>
          {description}
        </p>
      </motion.div>
    </div>
  );
}