"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";

export default function CTA() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Video Background - Updated path */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        style={{ filter: 'brightness(0.7)' }}
      >
        <source src="/cta-v.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Adjusted gradient overlay to be less dark */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-xs tracking-[0.3em] text-white/70 uppercase">
            Take Action Now
          </span>
          
          <h2 className="mt-6 font-instrument-serif">
            <span className="block text-[2rem] sm:text-6xl leading-[1.1] text-white">
              READY TO START
            </span>
            <span className="block text-[1.8rem] sm:text-5xl italic font-light mt-2 text-white/90">
              your journey to
            </span>
            <span className="block text-[2.2rem] sm:text-6xl uppercase mt-1 text-white">
              SUCCESS?
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <Button 
              className="group relative px-8 md:px-12 py-6 md:py-8 text-base md:text-lg bg-white text-black hover:bg-white/90 transition-all duration-300 rounded-full border border-white/10 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">
                JOIN SEKARANG
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-500/10 via-white/5 to-neutral-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
}