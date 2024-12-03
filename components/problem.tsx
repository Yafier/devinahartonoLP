"use client";

import { motion } from "framer-motion";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import Image from "next/image";

const problems = [
  {
    id: 1,
    title: "Stuck in the Comfort Zone",
    location: "JAKARTA",
    description: "Kerja 9-5, income terbatas, dan waktu habis untuk perusahaan. Deep inside, you know you're meant for something bigger. Ready for change?",
    image: "/thumb-dev.png"
  },
  {
    id: 2,
    title: "Dream of Financial Freedom",
    location: "SINGAPORE",
    description: "Bayangkan punya passive income yang konsisten tanpa harus trading time for money. Di ALIFE, this isn't just a dream—it's our reality.",
    image: "/thumb-dev.png"
  },
  {
    id: 3,
    title: "Need a Proven System",
    location: "BALI",
    description: "Mau mulai tapi takut salah langkah? Our community has a tested system that's helped create multiple 6-7 figure earners. Your success is our blueprint.",
    image: "/thumb-dev.png"
  },
  {
    id: 4,
    title: "Looking for Real Mentorship",
    location: "SURABAYA",
    description: "Stop following random advice. Join a community of high-achievers who've been where you are and achieved what you dream of. Real guidance, real results.",
    image: "/thumb-dev.png"
  }
];

export default function Problem() {
  return (
    <section className="py-24 md:py-32 relative bg-neutral-100">
      <div className="container mx-auto px-4">
        {/* Magazine-style Header */}
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
              Shared by
            </span>
            
            <h2 className="mt-6 font-instrument-serif">
              <span className="block text-[2rem] sm:text-6xl leading-[1.1] text-neutral-900">
                PERSPECTIVE
              </span>
              <span className="block text-[1.8rem] sm:text-5xl italic font-light mt-2">
                by
              </span>
              <span className="block text-[2.2rem] sm:text-6xl uppercase mt-1">
                OUR CLIENTS
              </span>
            </h2>
          </motion.div>

          {/* Problems Grid - Magazine Layout with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {problems.map((problem, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Image Container */}
                <div className="aspect-[4/5] relative overflow-hidden mb-6">
                  <Image
                    src={problem.image}
                    alt={problem.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-instrument-serif">
                    {problem.title}
                  </h3>
                  <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase">
                    {problem.location}
                  </p>
                  <p className="text-neutral-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Magazine-style Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-24"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-instrument-serif leading-snug text-neutral-800 mb-6">
                Stop watching others succeed while you stay behind.
              </h3>
              <p className="text-neutral-600 leading-relaxed italic">
                "Sementara kamu ragu, orang lain sudah melangkah maju. 
                The time for change is now."
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