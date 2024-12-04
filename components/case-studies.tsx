"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";

import Marquee from "./ui/marquee";
=======
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
    category: "Success Story"
=======
    story: "Dulu aku cuma karyawan biasa dengan gaji UMR. Sekarang? Income aku naik 10x lipat dalam 2 tahun aja!",

  },
  {
    name: "Jessica Tanadi",
    image: "/galaxy.mp4",
    income: "Rp 200.000.000+",
    yearsJoined: 3,
    position: "Regional Manager",

    story: "Sistem mentoring yang ada tuh bener-bener ngebantu banget! Dari yang gak tau apa-apa, sekarang bisa bantu banyak orang sambil dapet income gede.",
    englishStory: "The mentoring system truly helped me grow from zero knowledge to helping others while earning big.",
    date: "Jul 25, 2024",
    category: "Success Story"
=======
    story: "Sistem mentoring yang ada tuh bener-bener ngebantu banget! Dari yang gak tau apa-apa.",

  },
  {
    name: "David Susanto",
    image: "/galaxy.mp4",
    income: "Rp 180.000.000+",
    yearsJoined: 2.5,
    position: "Elite Insurance Consultant",

    story: "Yang bikin betah? Tim yang supportive dan sharing knowledge tanpa ditutup-tutupi. Di sini kita sukses bareng-bareng!",
    englishStory: "What keeps me here? The supportive team and open knowledge sharing. Here, we succeed together!",
    date: "Jul 26, 2024",
    category: "Success Story"

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
=======
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
            className="text-xl md:text-3xl lg:text-4xl text-white mb-0"
          >
            Kisah Sukses Tim Kami<br/>
            <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-transparent bg-clip-text">
              They've Made It, So Can You
            </span>
          </motion.h2>
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