"use client";

import { useEffect, useRef, useState } from "react";
import { GradientSeparator } from "./ui/gradient-separator";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export default function Included() {
  const [activeNumber, setActiveNumber] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      id: 1,
      title: "Sistem Teruji & Terpercaya",
      description: "Sistem yang udah terbukti bantu ratusan agen capai target finansial mereka. Dengan track record yang jelas dan terukur, kamu bisa yakin sistem ini bakal work buat kamu juga! Our proven system has helped hundreds achieve their financial goals, with clear metrics and proven track record!",
      videoId: "hOHJTJVrHJM"
    },
    {
      id: 2,
      title: "Pelatihan Super Lengkap",
      description: "Program training yang mencakup semua aspek, dari basic sampe advanced. Mulai dari product knowledge, sales skill, sampe digital marketing - semua ada mentornya! Comprehensive training covering all aspects, from product knowledge to advanced sales techniques and digital marketing!",
      videoId: "hOHJTJVrHJM"
    },
    {
      id: 3,
      title: "Support Tim 24/7",
      description: "Mentor berpengalaman & tools digital siap support kamu kapan aja. Gak perlu takut stuck atau bingung, karena tim kita selalu siap bantu lewat berbagai channel komunikasi! Experienced mentors and digital tools ready to support you anytime through multiple communication channels!",
      videoId: "hOHJTJVrHJM"
    },
    {
      id: 4,
      title: "Digital Marketing Tools",
      description: "Akses ke tools marketing modern buat boost performa kamu. Dari social media management sampe lead generation tools, semua disediakan buat bantu kamu dapat prospek lebih gampang! Access to modern marketing tools to boost your performance, from social media to lead generation!",
      videoId: "hOHJTJVrHJM"
    },
    {
      id: 5,
      title: "Rewards & Recognition",
      description: "Program rewards menarik buat apresiasi pencapaian kamu. Dari insentif bulanan, bonus performance, sampe jalan-jalan ke luar negeri - semuanya bisa kamu dapetin! Exciting reward programs including monthly incentives, performance bonuses, and international trips!",
      videoId: "hOHJTJVrHJM"
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
    <>
      <section className="py-12 bg-gray-950 relative" ref={containerRef}>
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-900/30 rounded-full blur-3xl translate-y-1/4" />

        <div className="container mx-auto px-4 relative">
          {/* Header - Updated colors */}
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <p className="text-sm md:text-base text-orange-400 px-4 py-2 rounded-full border border-orange-800 bg-orange-950/30 backdrop-blur-sm inline-block mb-4">
              What You'll Get
            </p>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-300 to-red-400 bg-clip-text text-transparent mb-6">
              Semua Yang Kamu Butuhkan
            </h2>
            <p className="text-lg text-orange-100/70 leading-relaxed">
              Tools lengkap buat kamu jadi agen sukses!
              <span className="block mt-2 text-orange-200/60 text-base">
                Everything you need to succeed in your insurance career
              </span>
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Vertical connecting line - Updated colors */}
            <div className="absolute left-[42px] top-[60px] bottom-[60px] w-[2px] bg-gradient-to-b from-orange-800 via-orange-700 to-orange-800">
              <div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-orange-500 to-red-500 transition-all duration-500"
                style={{ height: `${(activeNumber / 5) * 100}%` }}
              />
            </div>

            <div className="space-y-16">
              {features.map((feature) => (
                <motion.div 
                  key={feature.id}
                  data-number={feature.id}
                  className="flex items-center gap-16 relative pl-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                    <div 
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${
                        activeNumber >= feature.id 
                          ? 'from-orange-600 to-red-500 border-orange-700' 
                          : 'from-orange-800 to-red-700 border-orange-800 opacity-40'
                      } border-2 transition-all duration-500 shadow-lg`}
                      style={{
                        boxShadow: activeNumber >= feature.id 
                          ? '0 8px 24px -4px rgba(249, 115, 22, 0.3)' 
                          : '0 8px 24px -4px rgba(249, 115, 22, 0.1)'
                      }}
                    >
                      <span className="text-2xl font-bold text-white">
                        {feature.id}
                      </span>
                    </div>
                  </div>

                  <div className="relative aspect-video w-[500px] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${feature.videoId}?autoplay=0&rel=0&modestbranding=1`}
                      title={feature.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        border: '1px solid rgba(249, 115, 22, 0.2)',
                        borderRadius: '0.75rem',
                      }}
                    />
                  </div>

                  <div className="flex-1 flex items-center">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge 
                          className="bg-gradient-to-r from-orange-600 to-red-500 text-white border-orange-700 px-2 py-1 text-xs rounded-full shadow-md"
                          style={{
                            boxShadow: '0 4px 12px -2px rgba(249, 115, 22, 0.3)',
                            textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                          }}
                        >
                          <CheckCircle className="w-3 h-3" />
                        </Badge>
                        <h3 className="text-2xl font-semibold bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-orange-100/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Separator - Updated gradient */}
      <div className="w-full py-8 bg-gradient-to-t from-gray-950 to-gray-900">
        <GradientSeparator />
      </div>
    </>
  );
}