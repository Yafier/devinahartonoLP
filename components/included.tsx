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

        <div className="container mx-auto px-4 relative">
          {/* Desktop View */}
          <div className="hidden md:flex relative max-w-6xl mx-auto flex-row gap-8">
            {/* Timeline Section */}
            <div className="relative lg:w-1/2">
              {/* Timeline Line */}
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

              {/* Timeline Items */}
              <div className="space-y-12">
                {features.map((feature) => (
                  <motion.div 
                    key={feature.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => handleFeatureClick(feature.id)}
                    className="flex items-start gap-6 relative pl-16 cursor-pointer"
                  >
                    {/* Number Circle */}
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

                    {/* Content */}
                    <div className="flex-1 space-y-3">
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
            </div>

            {/* Video Section */}
            <div className="lg:w-1/2 relative aspect-[4/3] rounded-xl overflow-hidden group">
              <div className="absolute -inset-2 bg-gradient-radial from-neutral-300/30 via-neutral-300/5 to-transparent blur-2xl group-hover:from-neutral-300/40 transition-all duration-700" />
              
              <div className="relative h-full">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeNumber}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="relative h-full"
                  >
                    <video
                      key={`video-${activeNumber}`}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    >
                      <source src={videos[activeNumber - 1].src} type={videos[activeNumber - 1].type} />
                    </video>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            {features.map((feature) => (
              <div key={feature.id} className="mb-16">
                <div className="flex items-start gap-4 relative pl-10 mb-6">
                  <div 
                    className={`absolute left-0 w-7 h-7 rounded-lg flex items-center justify-center 
                      bg-gradient-to-br from-zinc-900 via-zinc-800 to-black border-zinc-700/40 
                      border transition-all duration-300 backdrop-blur-sm`}
                  >
                    <span className="text-base font-bold bg-gradient-to-br from-zinc-300 via-zinc-400 to-zinc-300 bg-clip-text text-transparent">
                      {feature.id}
                    </span>
                  </div>

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
                    <h3 className="text-base font-semibold text-neutral-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="w-full aspect-video rounded-xl overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={videos[feature.id - 1].src} type={videos[feature.id - 1].type} />
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
}