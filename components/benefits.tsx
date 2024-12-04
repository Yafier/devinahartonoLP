"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";

const benefits = [
  {
    title: "Exclusive Community",
    subtitle: "Private Networking Events",
    description: "Gak ada batas untuk penghasilan kamu! Makin giat hustling, makin gede income yang masuk. Our top performers udah buktiin dengan penghasilan 100jt+ per bulan!",
    value: "Rp. 50.000.000 / Tahun",
<<<<<<< HEAD
    image: "/thumb-dev.png",
=======
    tag: "HIGHEST EARNING",
    video: "/Included 1.mp4",
    type: "video/mp4"
>>>>>>> 6ea4b2f2f017a3258e6f417cb79e7104fc9aa1f8
  },
  {
    title: "Recognition & Growth",
    subtitle: "Excellence Rewards Program",
    description: "Bye bye 9-to-5! Design your own schedule, work from anywhere, kapanpun. Quality time sama keluarga? Traveling sambil kerja? You name it, you can do it!",
    value: "Rp. 10.000.000 / Tahun",
<<<<<<< HEAD
    image: "/thumb-dev2.png",
    time: "Community Project"
=======
    tag: "WORK FREEDOM",
    video: "/benefits.mp4",
    type: "video/mp4"
>>>>>>> 6ea4b2f2f017a3258e6f417cb79e7104fc9aa1f8
  },
  {
    title: "Exclusive Events",
    subtitle: "High-Value Networking",
    description: "Level up your career at lightning speed! Dengan sistem mentoring yang proven + regular training, kamu bisa jadi expert dalam waktu singkat.",
    value: "Rp. 28.000.000 / Tahun",
<<<<<<< HEAD
    image: "/thumb-dev3.png",
    time: "Community Event"
=======
    tag: "CAREER PATH",
    video: "/benefit 2.mp4",
    type: "video/mp4"
>>>>>>> 6ea4b2f2f017a3258e6f417cb79e7104fc9aa1f8
  },
  {
    title: "Personal Development",
    subtitle: "Expert Mentorship Program",
    description: "Join circle of high achievers! Network sama orang-orang successful yang siap support your journey. Your network determines your net worth!",
    value: "Rp. 35.000.000 / Tahun",
<<<<<<< HEAD
    image: "/thumb-dev4.png",
    time: "Community Achievement"
=======
    tag: "STRONG TEAM",
    video: "/benefit 3.mp4",
    type: "video/mp4"
>>>>>>> 6ea4b2f2f017a3258e6f417cb79e7104fc9aa1f8
  }
];

export default function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[400vh] bg-black"
    >
      <div className="absolute top-[10vh] left-0 right-0 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 text-center"
        >
          <span className="text-xs tracking-[0.3em] text-white/70 uppercase">
            What You'll Get
          </span>
          
          <h2 className="mt-6 font-instrument-serif">
            <span className="block text-[2rem] sm:text-6xl leading-[1.1] text-white">
              EXCLUSIVE
            </span>
<<<<<<< HEAD
            <span className="block text-[1.8rem] sm:text-5xl italic font-light mt-2 text-white">
              benefits worth
            </span>
            <span className="block text-[2.2rem] sm:text-6xl uppercase mt-1 bg-gradient-to-r from-white via-white/90 to-white text-transparent bg-clip-text">
              100JT+ PER YEAR
            </span>
          </h2>
        </motion.div>
=======
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto"
          >
            Keuntungan yang bikin kamu makin semangat untuk join!
          </motion.p>
        </div>

        {/* Benefits Container - Now 2x2 Grid */}
        <div className="relative max-w-[95vw] mx-auto">
          {/* Cards Container - Now 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-x-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative w-full pt-32"
              >
                {/* Floating Media Container - Updated top spacing */}
                <div className="absolute -top-0 md:-top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[250px] md:h-[300px] z-20 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="relative w-full h-full">
                    {/* Shadow */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-[20px] bg-black/50 blur-xl rounded-full" />
                    
                    {/* Media Container */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src={benefit.video} type={benefit.type} />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Value Tag */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
                        <div className="px-10 py-1.5 bg-gradient-to-r from-red-800 to-red-600 rounded-full text-white text-s backdrop-blur-sm border border-red-500/20 shadow-lg whitespace-nowrap">
                          {benefit.value}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className="relative w-full h-[350px] rounded-xl">
                  {/* Metallic Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-gray-100/20 to-red-500/20 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
                  
                  {/* Content Container */}
                  <div className="relative h-full bg-gradient-to-br from-black/90 via-zinc-900/90 to-black/90 rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:border-red-500/20 transition duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />
                    
                    {/* Content */}
                    <div className="relative z-10 p-8 pt-24 flex flex-col h-full justify-end">
                      <h3 className="text-base md:text-lg lg:text-2xl text-white mb-4 font-medium">
                        {benefit.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
>>>>>>> 6ea4b2f2f017a3258e6f417cb79e7104fc9aa1f8
      </div>

      <div className="sticky top-0 h-screen flex items-end overflow-hidden">
        {/* Background Images */}
        {benefits.map((benefit, index) => {
          const opacity = useTransform(
            scrollYProgress,
            [
              Math.max(0, index * 0.25 - 0.15),
              index * 0.25,
              (index + 1) * 0.25 - 0.15,
              (index + 1) * 0.25
            ],
            [0, 1, 1, 0]
          );
          const scale = useTransform(
            scrollYProgress,
            [index * 0.25, (index + 1) * 0.25],
            [1.05, 1]
          );

          return (
            <motion.div
              key={index}
              style={{ opacity }}
              className="absolute inset-0 w-full h-full"
            >
              <motion.div 
                style={{ scale }} 
                className="relative w-full h-full transition-transform duration-700"
              >
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </motion.div>
            </motion.div>
          );
        })}

        {/* Updated Content Container - Adjusted position */}
        <div className="relative w-full pb-80">
          {benefits.map((benefit, index) => {
            const opacity = useTransform(
              scrollYProgress,
              [
                Math.max(0, index * 0.3 - 0.15),
                index * 0.3,
                (index + 1) * 0.3 - 0.15,
                (index + 1) * 0.3
              ],
              [0, 1, 1, 0]
            );
            const x = useTransform(
              scrollYProgress,
              [
                index * 0.3,
                index * 0.3 + 0.05,
                (index + 1) * 0.3 - 0.2,
                (index + 1) * 0.3
              ],
              [100, 0, 0, -100]
            );

            return (
              <motion.div
                key={index}
                style={{ opacity, x }}
                className="absolute left-0 right-0 w-full"
              >
                {/* Time Indicator - Centered */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                  className="flex justify-center mb-12"
                >
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-[1920px] mx-auto">
                  {/* Left Column - Title and Value */}
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                    className="text-center"
                  >
                    <span className="block text-[2.5rem] sm:text-6xl md:text-7xl text-white mb-6">
                      {benefit.title}
                    </span>
                    <span className="block text-xl sm:text-2xl md:text-3xl text-white/80 italic mb-4">
                      {benefit.subtitle}
                    </span>
                    <div className="inline-block px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mt-4">
                      <p className="text-white font-medium text-lg">{benefit.value}</p>
                    </div>
                  </motion.div>

                  {/* Right Column - Description */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                    className="flex items-center"
                  >
                    <p className="text-white/70 leading-relaxed text-lg max-w-[800px]">
                      {benefit.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}

          {/* Progress Bar - Moved up slightly */}
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
            <motion.div 
              className="h-[2px] w-[200px] bg-white/20 overflow-hidden rounded-full"
            >
              <motion.div 
                style={{ 
                  scaleX: useTransform(
                    scrollYProgress,
                    [0, 0.95],  // Stop before the end
                    [0, 1]
                  )
                }}
                className="origin-left h-full bg-white"
              />
            </motion.div>
            <div className="flex gap-2">
              {benefits.map((_, index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 rounded-full bg-white/20"
                  style={{
                    backgroundColor: useTransform(
                      scrollYProgress,
                      [(index * 0.25), ((index + 1) * 0.25)],
                      ["rgba(255,255,255,0.2)", "rgba(255,255,255,1)"]
                    )
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Seamless transition overlay */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-screen bg-black"
          style={{
            opacity: useTransform(
              scrollYProgress,
              [0.8, 0.95],  // Start fading in near the end
              [0, 1]
            )
          }}
        />
      </div>
    </section>
  );
}