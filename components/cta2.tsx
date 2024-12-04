"use client";

import { motion } from "framer-motion";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import { Button } from "@/components/ui/button";

export default function CTA2() {
  return (
    <section className="relative py-12 md:py-16 bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />
      
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
            <div className="relative bg-gradient-to-br from-black/60 via-zinc-900/30 to-black/60 rounded-2xl overflow-hidden border border-gray-600/10 backdrop-blur-sm p-6 md:p-8">
              <div className="relative z-10 text-center space-y-4 md:space-y-6">
                {/* Title - Reduced size */}
                <h2 className="text-2xl md:text-3xl font-bold text-white max-w-xl mx-auto leading-tight">
                  Bergabung dengan Tim Sukses Kami
                </h2>

                {/* Description - More compact */}
                <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto">
                  Mulai perjalanan kesuksesan Anda bersama tim yang solid dan sistem yang terbukti!
                </p>

                {/* CTA Button - Matching CTA.tsx style */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="pt-2 md:pt-4"
                >
                  <Button 
                    className="group relative px-6 md:px-10 py-2.5 md:py-5 text-sm md:text-base bg-gradient-to-r from-red-900 via-red-700 to-red-900 text-white hover:opacity-90 transition-all duration-300 rounded-xl backdrop-blur-sm border border-red-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-red-500/20 w-full sm:w-[280px] overflow-hidden"
                  >
                    {/* Metallic 3D Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/20" />
                    
                    {/* Fire Effect Layers */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 via-red-500/10 to-orange-400/5 animate-pulse" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(220,38,38,0.5),transparent_50%)] blur-xl animate-pulse" />
                      <div className="absolute inset-y-0 -inset-x-4 bg-gradient-to-r from-transparent via-red-500/30 to-transparent animate-[shimmer_2s_infinite] group-hover:opacity-100" />
                    </div>

                    {/* Button Content */}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span className="relative">
                        {/* Text Glow Effect */}
                        <span className="absolute inset-0 blur-sm bg-gradient-to-r from-red-400 to-orange-300 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                        Mulai Sekarang
                      </span>
                    </span>

                    {/* Metallic Edge Highlight */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-white/5 to-red-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </Button>
                </motion.div>
              </div>
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
