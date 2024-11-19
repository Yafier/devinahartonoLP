"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";

export default function Included() {
  const [activeNumber, setActiveNumber] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      id: 1,
      title: "Sistem Teruji & Terpercaya",
      description: "Sistem yang udah terbukti bantu ratusan agen capai target finansial mereka. Dengan track record yang jelas dan terukur, kamu bisa yakin sistem ini bakal work buat kamu juga!",
      englishDesc: "Our proven system has helped hundreds achieve their financial goals, with clear metrics and proven track record!"
    },
    {
      id: 2,
      title: "Pelatihan Super Lengkap",
      description: "Program training yang mencakup semua aspek, dari basic sampe advanced. Mulai dari product knowledge, sales skill, sampe digital marketing - semua ada mentornya!",
      englishDesc: "Comprehensive training covering all aspects, from product knowledge to advanced sales techniques and digital marketing!"
    },
    {
      id: 3,
      title: "Support Tim 24/7",
      description: "Mentor berpengalaman & tools digital siap support kamu kapan aja. Gak perlu takut stuck atau bingung, karena tim kita selalu siap bantu!",
      englishDesc: "Experienced mentors and digital tools ready to support you anytime through multiple communication channels!"
    },
    {
      id: 4,
      title: "Digital Marketing Tools",
      description: "Akses ke tools marketing modern buat boost performa kamu. Dari social media management sampe lead generation tools, semua disediakan!",
      englishDesc: "Access to modern marketing tools to boost your performance, from social media to lead generation!"
    },
    {
      id: 5,
      title: "Rewards & Recognition",
      description: "Program rewards menarik buat apresiasi pencapaian kamu. Dari insentif bulanan, bonus performance, sampe jalan-jalan ke luar negeri!",
      englishDesc: "Exciting reward programs including monthly incentives, performance bonuses, and international trips!"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const number = parseInt(entry.target.getAttribute("data-number") || "1");
            setActiveNumber(number);
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll("[data-number]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-20 relative bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs md:text-sm text-orange-400 px-3 py-1.5 rounded-full border border-orange-800 bg-orange-950/30 backdrop-blur-sm inline-block mb-3">
            What You'll Get
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Semua yang Kamu Butuhkan
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl mx-auto">
            Tools lengkap buat kamu jadi agen sukses!
            <span className="block mt-1 text-gray-500 text-xs md:text-sm">
              Everything you need to succeed in your insurance career
            </span>
          </p>
        </div>

        {/* Content Container */}
        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Timeline */}
          <div className="relative lg:w-1/2">
            {/* Timeline Line */}
            <div className="absolute left-[20px] md:left-[28px] top-[40px] bottom-[40px] w-[2px] bg-gradient-to-b from-black via-zinc-800 to-black">
              <div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-black via-zinc-900 to-black transition-all duration-500"
                style={{ height: `${(activeNumber / 5) * 100}%` }}
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-4 md:space-y-6">
              {features.map((feature) => (
                <motion.div 
                  key={feature.id}
                  data-number={feature.id}
                  className="flex items-start gap-4 md:gap-6 relative pl-12 md:pl-16"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Number Circle */}
                  <div 
                    className={`absolute left-0 w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center ${
                      activeNumber >= feature.id 
                        ? 'bg-gradient-to-br from-black via-zinc-900 to-black border-gray-600/20' 
                        : 'bg-gradient-to-br from-black via-zinc-900 to-black border-gray-600/20 opacity-40'
                    } border transition-all duration-500 shadow-lg`}
                    style={{
                      boxShadow: activeNumber >= feature.id 
                        ? '0 8px 24px -4px rgba(161, 161, 170, 0.2)' 
                        : '0 8px 24px -4px rgba(161, 161, 170, 0.1)'
                    }}
                  >
                    <span className="text-lg md:text-xl font-bold text-white">
                      {feature.id}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge 
                        className="bg-gradient-to-r from-zinc-800 to-zinc-900 text-white border-zinc-700 px-2 py-1 text-xs rounded-full shadow-md"
                      >
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Feature
                      </Badge>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                      <span className="block mt-1 text-gray-500 text-[10px] md:text-xs">
                        {feature.englishDesc}
                      </span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="lg:w-1/2 relative aspect-[4/3] rounded-xl overflow-hidden group">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-radial from-orange-500/20 via-orange-500/5 to-transparent blur-xl" />
            
            <div className="relative h-full">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              >
                <source src="/galaxy.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
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