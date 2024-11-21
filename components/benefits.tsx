"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import { ChevronLeft, ChevronRight } from "lucide-react";

const benefits = [
  {
    title: "Exclusive Mentorship & Private Networking Event",
    description: "Gak ada batas untuk penghasilan kamu! Makin giat hustling, makin gede income yang masuk. Our top performers udah buktiin dengan penghasilan 100jt+ per bulan! 🚀",
    value: "Rp. 50.000.000 / Tahun",
    tag: "HIGHEST EARNING",
    video: "/Included 1.mp4",
    type: "video/mp4"
  },
  {
    title: "Perks & Recognition For Excellence Performance",
    description: "Bye bye 9-to-5! Design your own schedule, work from anywhere, kapanpun. Quality time sama keluarga? Traveling sambil kerja? You name it, you can do it! ✨",
    value: "Rp. 10.000.000 / Tahun",
    tag: "WORK FREEDOM",
    video: "/benefits.mp4",
    type: "video/mp4"
  },
  {
    title: "Exclusive Outside Events (Sport, Travel, etc)",
    description: "Level up your career at lightning speed! Dengan sistem mentoring yang proven + regular training, kamu bisa jadi expert dalam waktu singkat. The sky is the limit! 💫",
    value: "Rp. 28.000.000 / Tahun",
    tag: "CAREER PATH",
    video: "/benefit 2.mp4",
    type: "video/mp4"
  },
  {
    title: "Top-Tier Speaker for Personal Development",
    description: "Join circle of high achievers! Network sama orang-orang successful yang siap support your journey. Your network determines your net worth! 🌟",
    value: "Rp. 35.000.000 / Tahun",
    tag: "STRONG TEAM",
    video: "/benefit 3.mp4",
    type: "video/mp4"
  }
];

export default function Benefits() {
  return (
    <section className="pt-40 md:pt-48 pb-32 md:pb-40 relative bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs md:text-sm text-red-400 px-3 py-1.5 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-3"
          >
            The Perks
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl lg:text-4xl text-white mb-3"
          >
            Benefits That You'll Get<br/>
            <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-transparent bg-clip-text">
              When You Join Us
            </span>
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
                {/* Floating Media Container */}
                <div className="absolute -top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] z-20 transform group-hover:-translate-y-2 transition-transform duration-500">
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
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
}