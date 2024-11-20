"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import { IoPlayCircle } from "react-icons/io5";

const videos = [
  {
    id: 1,
    src: "/galaxy.mp4",
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
  const videoRef = useRef<HTMLVideoElement>(null);

  const features = [
    {
      id: 1,
      title: "Sistem Teruji & Terpercaya",
      description: "Sistem yang udah terbukti bantu ratusan agen capai target finansial mereka. Dengan track record yang jelas dan terukur, kamu bisa yakin sistem ini bakal work buat kamu juga!",
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
      title: "Digital Marketing Tools",
      description: "Akses ke tools marketing modern buat boost performa kamu. Dari social media management sampe lead generation tools, semua disediakan!",
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
    <section className="pt-8 md:pt-12 pb-16 md:pb-20 relative bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs md:text-sm text-red-400 px-3 py-1.5 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-3">
            What You'll Get
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Semua yang Kamu Butuhkan
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl mx-auto">
            Tools lengkap buat kamu jadi agen sukses!
          </p>
        </div>

        {/* Content Container */}
        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Timeline */}
          <div className="relative lg:w-1/2">
            <div className="absolute left-[20px] md:left-[28px] top-[40px] bottom-[40px] w-[2px] bg-gradient-to-b from-red-900/20 via-red-800/30 to-red-900/20">
              <div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-red-500/30 via-red-400/40 to-red-500/30 transition-all duration-500"
                style={{ height: `${(activeNumber / 5) * 100}%` }}
              />
            </div>

            <div className="space-y-4 md:space-y-6">
              {features.map((feature) => (
                <motion.div 
                  key={feature.id}
                  data-number={feature.id}
                  className={`flex items-start gap-4 md:gap-6 relative pl-12 md:pl-16 cursor-pointer transition-all duration-300 ${
                    activeNumber === feature.id ? 'scale-105' : 'hover:scale-102'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleFeatureClick(feature.id)}
                >
                  <div 
                    className={`absolute left-0 w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center 
                      ${activeNumber === feature.id 
                        ? 'bg-gradient-to-br from-red-500 via-red-600 to-red-500 border-red-400/20 scale-110' 
                        : 'bg-gradient-to-br from-red-950 via-red-900 to-red-950 border-red-800/20 opacity-40'
                      } border transition-all duration-300 shadow-lg hover:shadow-red-500/20`}
                  >
                    <span className="text-lg md:text-xl font-bold text-white">
                      {feature.id}
                    </span>
                  </div>

                  <div className="flex-1 space-y-2">
                    <Badge 
                      className={`bg-gradient-to-r from-red-950 to-red-900 text-white border-red-800 px-2 py-1 text-xs rounded-full shadow-md ${
                        activeNumber === feature.id ? 'from-red-600 to-red-700' : ''
                      }`}
                    >
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Feature
                    </Badge>
                    <h3 className="text-base md:text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="lg:w-1/2 relative aspect-[4/3] rounded-xl overflow-hidden group">
            <div className="absolute -inset-2 bg-gradient-radial from-red-500/20 via-red-500/5 to-transparent blur-xl" />
            
            <div className="relative h-full">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeNumber}
                  initial={{ opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 0.15,
                    type: "tween",
                    ease: "easeOut"
                  }}
                  className="relative h-full"
                >
                  <video
                    key={`video-${activeNumber}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    onError={(e) => {
                      console.warn(`Failed to load video: ${videos[activeNumber - 1].src}`);
                      setVideoError(true);
                    }}
                    onLoadedData={() => {
                      setVideoError(false);
                    }}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                  >
                    <source 
                      src={videos[activeNumber - 1].src} 
                      type={videos[activeNumber - 1].type}
                    />
                    Your browser does not support the video tag.
                  </video>
                  {videoError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <p className="text-white text-sm">Error loading video</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IoPlayCircle className="text-white/80 text-5xl hover:text-white transition-colors" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
}