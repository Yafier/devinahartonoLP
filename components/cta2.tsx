"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTA2() {
  return (
    <section className="relative py-12 md:py-16 bg-neutral-100">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-neutral-100" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Magic Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Card Content */}
            <div className="relative bg-gradient-to-br from-white/95 via-neutral-50/95 to-white/95 rounded-2xl overflow-hidden border border-neutral-200 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.03)] p-6 md:p-8">
              <div className="relative z-10 text-center space-y-4 md:space-y-6">
                {/* Title - Updated to match problem.tsx style */}
                <div className="font-instrument-serif">
                  <span className="block text-2xl md:text-3xl leading-[1.1] text-neutral-900">
                    BERGABUNG
                  </span>
                  <span className="block text-xl md:text-2xl italic font-light mt-2">
                    dengan
                  </span>
                  <span className="block text-2xl md:text-3xl uppercase mt-1">
                    TIM SUKSES KAMI
                  </span>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-neutral-600 max-w-xl mx-auto">
                  Mulai perjalanan kesuksesan Anda bersama tim yang solid dan sistem yang terbukti!
                </p>

                {/* CTA Button - Updated with neutral theme */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="pt-2 md:pt-4"
                >
                  <Button 
                    className="group relative px-6 md:px-10 py-2.5 md:py-5 text-sm md:text-base bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white hover:opacity-90 transition-all duration-300 rounded-xl backdrop-blur-sm border border-neutral-700/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-neutral-900/20 w-full sm:w-[280px] overflow-hidden"
                  >
                    {/* Metallic 3D Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/10" />
                    
                    {/* Hover Effect Layers */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-800/20 via-neutral-700/10 to-neutral-600/5 animate-pulse" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.5),transparent_50%)] blur-xl animate-pulse" />
                      <div className="absolute inset-y-0 -inset-x-4 bg-gradient-to-r from-transparent via-neutral-500/30 to-transparent animate-[shimmer_2s_infinite] group-hover:opacity-100" />
                    </div>

                    {/* Button Content */}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span className="relative">
                        {/* Text Glow Effect */}
                        <span className="absolute inset-0 blur-sm bg-gradient-to-r from-neutral-400 to-neutral-300 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                        Mulai Sekarang
                      </span>
                    </span>

                    {/* Metallic Edge Highlight */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-neutral-500/10 via-white/5 to-neutral-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      </div>
    </section>
  );
}
