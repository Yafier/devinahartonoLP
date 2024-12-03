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

            {/* Final Portrait */}
            <motion.article 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="col-span-12 md:col-span-4 relative rounded-2xl overflow-hidden group"
            >
              <VideoCard {...steps[5]} />
            </motion.article>
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