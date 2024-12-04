"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
  const [videoError, setVideoError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

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

      <motion.div 
        ref={containerRef}
        style={{ opacity, y }}
        className="container mx-auto px-4 relative"
      >
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

        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative lg:w-1/2"
          >
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

            <div className="space-y-12">
              {features.map((feature) => (
                <motion.div 
                  key={feature.id}
                  data-number={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: feature.id * 0.1 }}
                  className="flex items-start gap-6 relative pl-16"
                  onClick={() => handleFeatureClick(feature.id)}
                >
                  <div 
                    className={`absolute left-0 w-14 h-14 rounded-xl flex items-center justify-center 
                      ${activeNumber >= feature.id 
                        ? 'bg-neutral-900 border-neutral-800' 
                        : 'bg-neutral-100 border-neutral-200'
                      } border backdrop-blur-sm transition-all duration-500`}
                  >
                    <span className={`font-instrument-serif text-xl ${
                      activeNumber >= feature.id ? 'text-neutral-100' : 'text-neutral-400'
                    }`}>
                      {feature.id}
                    </span>
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-instrument-serif text-neutral-900">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden group"
          >
            <div className="absolute -inset-2 bg-gradient-radial from-neutral-300/30 via-neutral-300/5 to-transparent blur-2xl group-hover:from-neutral-300/40 transition-all duration-700" />
            
            <div className="relative h-full transform transition-transform duration-700 group-hover:scale-105">
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
                  <div className="absolute inset-0 rounded-xl overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:border-red-500/20 transition duration-500">
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

                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 pointer-events-none" />
                    
                    {videoError && (
                      <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/50">
                        <p className="text-white text-sm">Error loading video</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
}