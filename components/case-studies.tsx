"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import Marquee from "./ui/marquee";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Case {
  name: string;
  image: string;
  income: string;
  yearsJoined: number;
  position: string;
  story: string;
  englishStory: string;
  date: string;
  category: string;
}

const cases: Case[] = [
  {
    name: "Michael Wijaya",
    image: "/galaxy.mp4",
    income: "Rp 150.000.000+",
    yearsJoined: 2,
    position: "Senior Insurance Advisor",
    story: "Dulu aku cuma karyawan biasa dengan gaji UMR. Sekarang? Income aku naik 10x lipat dalam 2 tahun aja! Semua berkat sistem dan support yang keren dari tim.",
    englishStory: "From a minimum wage employee to a successful advisor. The amazing system and team support made it possible.",
    date: "Jul 24, 2024",
    category: "Success Story",
  },
  // Add more cases as needed
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideVariants = {
    center: { scale: 1, x: 0, zIndex: 5, opacity: 1, rotateY: 0 },
    left: { scale: 0.8, x: -300, zIndex: 3, opacity: 0.7, rotateY: 15 },
    right: { scale: 0.8, x: 300, zIndex: 3, opacity: 0.7, rotateY: -15 },
    farLeft: { scale: 0.6, x: -450, zIndex: 1, opacity: 0.4, rotateY: 30 },
    farRight: { scale: 0.6, x: 450, zIndex: 1, opacity: 0.4, rotateY: -30 },
  };

  const getVariant = (index: number) => {
    const diff = (index - currentIndex + cases.length) % cases.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === cases.length - 1) return "left";
    if (diff === 2) return "farRight";
    return "farLeft";
  };

  const navigate = (direction: number) => {
    setCurrentIndex((prev) => (prev + direction + cases.length) % cases.length);
  };

  return (
    <section className="py-24 md:py-32 relative bg-neutral-100">
      <div className="px-4 md:px-0">
        <div className="max-w-screen-2xl mx-auto">
          <div className="max-w-[1400px] mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-20"
            >
              <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
                Success Stories
              </span>
              
              <h2 className="mt-6 font-instrument-serif">
                <span className="block text-[2rem] sm:text-6xl leading-[1.1] text-neutral-900">
                  SHARED BY
                </span>
                <span className="block text-[1.8rem] sm:text-5xl italic font-light mt-2">
                  perspective
                </span>
                <span className="block text-[2.2rem] sm:text-6xl uppercase mt-1">
                  OUR CLIENTS
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="relative mt-20">
            <div className="absolute left-0 top-0 bottom-0 w-40 md:w-60 bg-gradient-to-r from-neutral-100 via-neutral-100/80 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-40 md:w-60 bg-gradient-to-l from-neutral-100 via-neutral-100/80 to-transparent z-10" />

            <Marquee className="py-4" pauseOnHover>
              {cases.map((item: Case, index: number) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[400px] flex-shrink-0 px-3 md:px-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                        <p className="text-xs tracking-[0.2em] text-neutral-600 uppercase">
                          {item.category}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-2xl sm:text-3xl font-instrument-serif group-hover:text-neutral-700 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase">
                          {item.date}
                        </p>
                      </div>

                      <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase">
                        {item.position}
                      </p>

                      <p className="text-neutral-600 leading-relaxed line-clamp-3">
                        {item.story}
                      </p>
                      
                      <p className="text-sm text-neutral-500 italic line-clamp-2">
                        {item.englishStory}
                      </p>

                      <div className="pt-4 flex justify-between items-center border-t border-neutral-200">
                        <p className="text-sm text-neutral-500">
                          Monthly Income: <span className="font-semibold text-neutral-900">{item.income}</span>
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                        >
                          Read More →
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </Marquee>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-24"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-instrument-serif leading-snug text-neutral-800 mb-6">
              Ready to write your success story?
            </h3>
            <p className="text-neutral-600 leading-relaxed italic">
              "Join our community of achievers and transform your life today."
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative w-full bg-white py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.03),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.8),transparent_10%,transparent_90%,rgba(255,255,255,0.8))]" />
        </div>

        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
              Featured Video
            </span>
            
            <h2 className="mt-6 font-instrument-serif">
              <span className="block text-[2.5rem] sm:text-7xl leading-[1.1] text-neutral-900">
                WATCH THE
              </span>
              <span className="block text-[2rem] sm:text-6xl italic font-light mt-2 text-neutral-800">
                transformation
              </span>
              <span className="block text-[2.5rem] sm:text-7xl uppercase mt-1">
                JOURNEY
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 xl:-mx-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24"
          >
            <div className="relative max-w-[2000px] mx-auto">
              <div className="relative aspect-video bg-white shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/ewO-PvUV1go?controls=1&autoplay=0&rel=0&playsinline=1"
                  className="absolute inset-0 w-full h-full z-20"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Transformation Journey"
                />

                <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-neutral-200 z-30" />
                <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-neutral-200 z-30" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-neutral-200 z-30" />
                <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-neutral-200 z-30" />

                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/50 to-transparent z-30 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/50 to-transparent z-30 pointer-events-none" />
              </div>

              <div className="mt-12 flex items-center justify-between max-w-screen-xl mx-auto px-4">
                <div className="flex items-center space-x-6">
                  <span className="text-xs tracking-[0.4em] text-neutral-500">WATCH THE</span>
                  <div className="w-[1px] h-4 bg-neutral-300" />
                  <span className="text-xs tracking-[0.4em] text-neutral-500">TRANSFORMATION</span>
                  <div className="w-[1px] h-4 bg-neutral-300" />
                  <span className="text-xs tracking-[0.4em] text-neutral-500">JOURNEY</span>
                </div>
                <span className="text-xs tracking-[0.2em] text-neutral-400">2024</span>
              </div>

              <div className="mt-20 text-center max-w-2xl mx-auto px-4">
                <p className="text-sm tracking-wide text-neutral-600 leading-relaxed">
                  Watch how our community members transform their lives and achieve extraordinary success through dedication and our proven system.
                </p>
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

