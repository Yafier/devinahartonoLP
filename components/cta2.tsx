"use client";

import { motion } from "framer-motion";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import ShimmerButton from "./ui/shimmer-button";

export default function CTA2() {
  return (
    <section className="relative py-24 bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Magic Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Card Content */}
            <div className="relative bg-gradient-to-br from-black/60 via-zinc-900/30 to-black/60 rounded-2xl overflow-hidden border border-gray-600/10 backdrop-blur-sm p-12">
              <div className="relative z-10 text-center space-y-8">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
                  Bergabung dengan Tim Sukses Kami
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Mulai perjalanan kesuksesan Anda bersama tim yang solid dan sistem yang terbukti!
                  <span className="block mt-2 text-gray-400 text-base">
                    Start your success journey with our proven system and solid team!
                  </span>
                </p>

                {/* CTA Button */}
                <div className="flex justify-center pt-4">
                  <ShimmerButton 
                    className="w-full sm:w-auto text-lg font-semibold px-12 py-6"
                    shimmerColor="rgba(255, 255, 255, 0.1)"
                    shimmerSize="0.1em"
                    shimmerDuration="1.5s"
                    background="linear-gradient(to right, #f97316, #ef4444)"
                    borderRadius="9999px"
                  >
                    Mulai Sekarang
                  </ShimmerButton>
                </div>
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
