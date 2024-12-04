"use client";

import { motion } from "framer-motion";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import { Button } from "@/components/ui/button";

export default function CTA2() {
  return (
    <section className="pt-24 md:pt-32 pb-24 md:pb-32 relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Magic Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Card Content */}
            <div className="relative bg-gradient-to-br from-white/95 via-neutral-50/95 to-white/95 rounded-xl overflow-hidden border border-neutral-100 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.03)] p-12 md:p-16">
              <div className="relative z-10 text-center">
                {/* Title */}
                <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
                  Join Us Now
                </span>
                
                <h2 className="mt-6 font-instrument-serif">
                  <span className="block text-[2rem] sm:text-6xl leading-[1.1] text-neutral-900">
                    BERGABUNG
                  </span>
                  <span className="block text-[1.8rem] sm:text-5xl italic font-light mt-2 text-neutral-800">
                    dengan tim
                  </span>
                  <span className="block text-[2.2rem] sm:text-6xl uppercase mt-1">
                    SUKSES KAMI
                  </span>
                </h2>

                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 text-neutral-600 max-w-xl mx-auto text-sm md:text-base"
                >
                  Mulai perjalanan kesuksesan Anda bersama tim yang solid dan sistem yang terbukti!
                </motion.p>
              </div>

              {/* Subtle gradient effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-neutral-200/20 via-neutral-100/20 to-neutral-200/20 rounded-xl blur-lg opacity-60 group-hover:opacity-80 transition duration-500" />
            </div>

            {/* Subtle radial gradient overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-radial from-neutral-500/5 via-transparent to-transparent blur-[100px] opacity-60" />
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
