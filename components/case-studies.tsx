"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const cases = [
  {
    name: "Michael Wijaya",
    image: "/galaxy.mp4",
    income: "Rp 150.000.000+",
    yearsJoined: 2,
    position: "Senior Insurance Advisor",
    story: "Dulu aku cuma karyawan biasa dengan gaji UMR. Sekarang? Income aku naik 10x lipat dalam 2 tahun aja!",
  },
  {
    name: "Jessica Tanadi",
    image: "/galaxy.mp4",
    income: "Rp 200.000.000+",
    yearsJoined: 3,
    position: "Regional Manager",
    story: "Sistem mentoring yang ada tuh bener-bener ngebantu banget! Dari yang gak tau apa-apa.",
  },
  {
    name: "David Susanto",
    image: "/galaxy.mp4",
    income: "Rp 180.000.000+",
    yearsJoined: 2.5,
    position: "Elite Insurance Consultant",
    story: "Yang bikin betah? Tim yang supportive dan sharing knowledge tanpa ditutup-tutupi.",
  },
  {
    name: "Sarah Chen",
    image: "/galaxy.mp4",
    income: "Rp 170.000.000+",
    yearsJoined: 2,
    position: "Senior Advisor",
    story: "Sistem yang proven dan support yang luar biasa dari tim senior.",
  },
  {
    name: "Kevin Zhang",
    image: "/galaxy.mp4",
    income: "Rp 190.000.000+",
    yearsJoined: 2.8,
    position: "Elite Consultant",
    story: "Transformasi karir yang luar biasa berkat guidance yang tepat.",
  }
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
    <section className="pt-6 md:pt-12 pb-6 md:pb-20 relative bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />

      <div className="container mx-auto px-4 relative">
        {/* Header - Updated text */}
        <div className="text-center mb-2 md:mb-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs md:text-sm text-red-400 px-3 py-1.5 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-3"
          >
            Ini Buktinya
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl lg:text-4xl text-white mb-3"
          >
            Kisah Sukses Tim Kami<br/>
            <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-transparent bg-clip-text">
              They've Made It, So Can You
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Mereka udah buktiin kalau sistem kita work banget!
          </motion.p>
        </div>

        {/* 3D Carousel - Adjusted height and top margin */}
        <div className="relative h-[480px] md:h-[600px] max-w-5xl mx-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            {cases.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                animate={getVariant(index)}
                variants={slideVariants}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="absolute w-[300px] md:w-[400px] rounded-xl overflow-hidden"
                style={{ perspective: 1000 }}
              >
                <div className="bg-black/90 backdrop-blur-sm border border-red-900/10 rounded-xl overflow-hidden">
                  <div className="relative h-[180px] md:h-[250px]">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={item.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      <p className="text-[10px] md:text-xs text-white">{item.yearsJoined} years</p>
                    </div>
                  </div>

                  <div className="p-4 md:p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-white">{item.name}</h3>
                        <p className="text-xs md:text-sm text-gray-400">{item.position}</p>
                      </div>
                      <p className="text-sm md:text-base text-red-400 font-bold">{item.income}</p>
                    </div>
                    <p className="text-xs md:text-sm text-gray-400">{item.story}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(-1)}
            className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-red-500/20 hover:bg-red-500/30 p-2 md:p-3 rounded-full text-white/80 hover:text-white transition-colors"
          >
            <FiChevronLeft className="text-lg md:text-2xl" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(1)}
            className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-red-500/20 hover:bg-red-500/30 p-2 md:p-3 rounded-full text-white/80 hover:text-white transition-colors"
          >
            <FiChevronRight className="text-lg md:text-2xl" />
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
}