"use client";

import { useEffect, useRef, useState } from "react";
<<<<<<< HEAD
import { motion, useScroll, useTransform } from "framer-motion";
=======
import { motion, AnimatePresence } from "framer-motion";
>>>>>>> 6ea4b2f2f017a3258e6f417cb79e7104fc9aa1f8
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import { IoPlayCircle } from "react-icons/io5";

const videos = [
  {
    id: 1,
    src: "/Included 1.mp4",
    type: "video/mp4"
  },
  {
    id: 2,
    src: "/astronout.mp4",
    type: "video/mp4"
  },
  {
    id: 3,
    src: "/galaxy.mp4",
    type: "video/mp4"
  },
  {
    id: 4,
    src: "/astronout.mp4",
    type: "video/mp4"
  },
  {
    id: 5,
    src: "/galaxy.mp4",
    type: "video/mp4"
  }
];

export default function Included() {
  const [activeNumber, setActiveNumber] = useState(1);
<<<<<<< HEAD
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
=======
  const [videoError, setVideoError] = useState(false);
>>>>>>> 6ea4b2f2f017a3258e6f417cb79e7104fc9aa1f8

  const features = [
    {
      id: 1,
      title: "Sistem Teruji & Terpercaya",
      description: "Sistem yang udah terbukti bantu ratusan pembisnis capai target finansial mereka. Dengan track record yang jelas dan terukur, kamu bisa yakin sistem ini bakal work buat kamu juga!",
    },
    {
      id: 2,
      title: "Pelatihan Super Lengkap",
      description: "Program training yang mencakup semua aspek, dari basic sampe advanced. Mulai dari product knowledge, sales skill, sampe digital marketing - semua ada mentornya!",
    },
    {
      id: 3,
      title: "Support Tim 24/7",
      description: "Mentor berpengalaman & tools digital siap support kamu kapan aja. Gak perlu takut stuck atau bingung, karena tim kita selalu siap bantu!",
    },
    {
      id: 4,
      title: "Bimbingan Langsung dari Leader",
      description: "Kamu bakal aku temenin untuk ketemu potensial leads dan aku bantu nge-close! Gak perlu takut bingung atau stress, karena aku siap bantu!",
    },
    {
      id: 5,
      title: "Rewards & Recognition",
      description: "Program rewards menarik buat apresiasi pencapaian kamu. Dari insentif bulanan, bonus performance, sampe jalan-jalan ke luar negeri!",
    }
  ];

  const handleFeatureClick = (number: number) => {
    setActiveNumber(number);
  };

  return (
    <section className="pt-24 md:pt-32 pb-24 md:pb-32 relative bg-neutral-100 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),rgba(255,255,255,0))]" />

<<<<<<< HEAD
      <motion.div 
        ref={containerRef}
        style={{ opacity, y }}
        className="container mx-auto px-4 relative"
      >
        {/* Updated Magazine-style Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
            What You'll Get
          </span>
          
          <h2 className="mt-6 font-instrument-serif">
            <span className="block text-[2rem] sm:text-6xl leading-[1.1] text-neutral-900">
              EVERYTHING
            </span>
            <span className="block text-[1.8rem] sm:text-5xl italic font-light mt-2 text-neutral-800">
              you need to
            </span>
            <span className="block text-[2.2rem] sm:text-6xl uppercase mt-1">
              SUCCEED
            </span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-neutral-600 max-w-xl mx-auto text-sm md:text-base"
          >
            Tools lengkap buat kamu jadi agen sukses dengan sistem yang teruji
          </motion.p>
        </motion.div>

        {/* Content Container with Enhanced Magazine Layout */}
        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Timeline with Magazine Styling */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative lg:w-1/2"
          >
            {/* Enhanced Timeline Line */}
            <div className="absolute left-[20px] md:left-[28px] top-[40px] bottom-[40px] w-[2px]">
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-200" />
              <motion.div 
                className="absolute top-0 left-0 w-full bg-neutral-900"
                style={{
                  height: `${(activeNumber / features.length) * 100}%`,
                  transition: "height 0.5s ease-out"
                }}
              />
            </div>

            {/* Timeline Items with Magazine Styling */}
            <div className="space-y-12">
=======
      <div className="container mx-auto px-4 relative">
        {/* Header - Updated text */}
        <div className="text-center mb-12 md:mb-16 relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs md:text-sm text-red-400 px-3 py-1.5 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-3"
          >
            Kamu Akan Mendapat
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl lg:text-4xl text-white mb-3"
          >
            Semua yang Kamu Butuhkan<br/>
            <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-transparent bg-clip-text">
              For Your Success Journey
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Tools lengkap buat kamu jadi agen sukses!
          </motion.p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex relative max-w-6xl mx-auto flex-row gap-8">
          {/* Timeline */}
          <div className="relative lg:w-1/2">
            <div className="absolute left-[16px] md:left-[22px] top-[40px] bottom-[40px] w-[1.5px] bg-gradient-to-b from-gray-600/20 via-gray-300/30 to-gray-600/20">
              <div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-gray-100/40 via-white/50 to-gray-100/40 transition-all duration-500"
                style={{ height: `${(activeNumber / 5) * 100}%` }}
              />
            </div>

            <div className="space-y-4 md:space-y-6">
>>>>>>> 6ea4b2f2f017a3258e6f417cb79e7104fc9aa1f8
              {features.map((feature) => (
                <motion.div 
                  key={feature.id}
                  data-number={feature.id}
<<<<<<< HEAD
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: feature.id * 0.1 }}
                  className="flex items-start gap-6 relative pl-16"
                >
                  {/* Enhanced Number Circle */}
                  <div 
                    className={`absolute left-0 w-14 h-14 rounded-xl flex items-center justify-center 
                      ${activeNumber >= feature.id 
                        ? 'bg-neutral-900 border-neutral-800' 
                        : 'bg-neutral-100 border-neutral-200'
                      } border backdrop-blur-sm transition-all duration-500`}
                  >
                    <span className={`font-instrument-serif text-xl ${
                      activeNumber >= feature.id ? 'text-neutral-100' : 'text-neutral-400'
=======
                  className={`flex items-start gap-4 md:gap-6 relative pl-10 md:pl-14 cursor-pointer transition-all duration-300 ${
                    activeNumber === feature.id ? 'scale-105' : 'hover:scale-102'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleFeatureClick(feature.id)}
                >
                  <div 
                    className={`absolute left-0 w-7 h-7 md:w-10 md:h-10 rounded-lg flex items-center justify-center 
                      ${activeNumber === feature.id 
                        ? 'bg-gradient-to-br from-zinc-900 via-zinc-800 to-black border-zinc-700/40 scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)]' 
                        : 'bg-gradient-to-br from-zinc-900 via-zinc-800 to-black border-zinc-800/30 opacity-40'
                      } border transition-all duration-300 backdrop-blur-sm`}
                  >
                    <span className={`text-base md:text-lg font-bold ${
                      activeNumber === feature.id 
                        ? 'bg-gradient-to-br from-zinc-300 via-zinc-400 to-zinc-300 bg-clip-text text-transparent' 
                        : 'text-zinc-400'
>>>>>>> 6ea4b2f2f017a3258e6f417cb79e7104fc9aa1f8
                    }`}>
                      {feature.id}
                    </span>
                  </div>

<<<<<<< HEAD
                  {/* Enhanced Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-instrument-serif text-neutral-900">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <p className="text-xs text-neutral-500 italic">
                      {feature.englishDesc}
=======
                  <div className="flex-1 space-y-2">
                    <Badge 
                      className={`bg-gradient-to-r from-zinc-900 via-black to-zinc-900 text-white border-zinc-800/30 px-2 py-1 text-xs rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.5)] ${
                        activeNumber === feature.id 
                          ? 'bg-gradient-to-br from-zinc-900 via-zinc-800 to-black border-zinc-700/40 shadow-[0_0_20px_rgba(0,0,0,0.5)]' 
                          : ''
                      }`}
                    >
                      <CheckCircle className="w-3 h-3 mr-1" />
                      <span className={`${
                        activeNumber === feature.id 
                          ? 'bg-gradient-to-br from-zinc-300 via-zinc-400 to-zinc-300 bg-clip-text text-transparent' 
                          : 'text-zinc-400'
                      }`}>
                        {feature.id === 1 && "System"}
                        {feature.id === 2 && "Training"}
                        {feature.id === 3 && "Support"}
                        {feature.id === 4 && "Tools"}
                        {feature.id === 5 && "Rewards"}
                      </span>
                    </Badge>
                    <h3 className="text-base md:text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
>>>>>>> 6ea4b2f2f017a3258e6f417cb79e7104fc9aa1f8
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

<<<<<<< HEAD
          {/* Enhanced Video Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden group"
          >
            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-radial from-neutral-300/30 via-neutral-300/5 to-transparent blur-2xl group-hover:from-neutral-300/40 transition-all duration-700" />
            
            <div className="relative h-full transform transition-transform duration-700 group-hover:scale-105">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/galaxy.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-transparent" />
=======
          {/* Video Section */}
          <div className="lg:w-1/2 relative aspect-[4/3] rounded-xl overflow-hidden group">
            {/* Glow Effects - Behind everything */}
            <div className="absolute -inset-2 bg-gradient-radial from-red-500/20 via-red-500/5 to-transparent blur-xl opacity-60" />
            <div className="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-transparent blur-[100px] opacity-60" />
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-gray-100/20 to-red-500/20 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative h-full">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeNumber}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 0.1,
                    type: "tween",
                    ease: "linear"
                  }}
                  className="relative h-full w-full"
                >
                  {/* Container with border - Made to fill entire space */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:border-red-500/20 transition duration-500">
                    {/* Video - Made to fill entire container */}
                    <video
                      key={`video-${activeNumber}`}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      onError={(e) => {
                        console.warn(`Failed to load video: ${videos[activeNumber - 1].src}`);
                        setVideoError(true);
                      }}
                      onLoadedData={() => {
                        console.log('Video loaded successfully:', videos[activeNumber - 1].src);
                        setVideoError(false);
                      }}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-100 group-hover:scale-105"
                    >
                      <source 
                        src={videos[activeNumber - 1].src} 
                        type={videos[activeNumber - 1].type}
                      />
                      Your browser does not support the video tag.
                    </video>

                    {/* Overlays - On top of video */}
                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 pointer-events-none" />
                    
                    {/* Error State */}
                    {videoError && (
                      <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/50">
                        <p className="text-white text-sm">Error loading video</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
>>>>>>> 6ea4b2f2f017a3258e6f417cb79e7104fc9aa1f8
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD
      </motion.div>
=======

        {/* Mobile View */}
        <div className="md:hidden space-y-8">
          {features.map((feature) => (
            <div key={feature.id} className="space-y-4">
              {/* Feature Content */}
              <div className="flex items-start gap-4 relative pl-10">
                {/* Number Circle */}
                <div 
                  className={`absolute left-0 w-7 h-7 rounded-lg flex items-center justify-center 
                    bg-gradient-to-br from-zinc-900 via-zinc-800 to-black border-zinc-700/40 
                    border transition-all duration-300 backdrop-blur-sm`}
                >
                  <span className="text-base font-bold bg-gradient-to-br from-zinc-300 via-zinc-400 to-zinc-300 bg-clip-text text-transparent">
                    {feature.id}
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex-1 space-y-2">
                  <Badge 
                    className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 text-white border-zinc-800/30 px-2 py-1 text-xs rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                  >
                    <CheckCircle className="w-3 h-3 mr-1" />
                    <span className="text-zinc-400">
                      {feature.id === 1 && "System"}
                      {feature.id === 2 && "Training"}
                      {feature.id === 3 && "Support"}
                      {feature.id === 4 && "Tools"}
                      {feature.id === 5 && "Rewards"}
                    </span>
                  </Badge>
                  <h3 className="text-base font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Video Below Content */}
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <div className="absolute -inset-2 bg-gradient-radial from-red-500/20 via-red-500/5 to-transparent blur-xl opacity-60" />
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="relative w-full h-full object-cover rounded-xl border border-white/10"
                >
                  <source src={videos[feature.id - 1].src} type={videos[feature.id - 1].type} />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
>>>>>>> 6ea4b2f2f017a3258e6f417cb79e7104fc9aa1f8

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
}