"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SilverGradientDivider } from "@/components/ui/silver-gradient-divider";

export default function Transformation() {
  const rightSideCards = [
    {
      title: "Mulai dari Nol",
      description: "Gak perlu pengalaman! Kita mulai dari basic dan berkembang bareng.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    },
    {
      title: "Proses yang Terbukti",
      description: "System yang udah menghasilkan ratusan agen sukses.",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070",
    },
    {
      title: "Support System 24/7",
      description: "Tim support yang selalu siap bantu kamu kapanpun.",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070",
    },
  ];

  return (
    <section className="relative py-4 md:py-12 overflow-hidden bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />

      <div className="relative max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Left side - Large Image (60%) */}
        <div className="w-full lg:w-[60%] relative aspect-[4/3] rounded-xl overflow-hidden group">
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
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
              <p className="text-xs md:text-sm text-orange-400 px-3 py-1.5 rounded-full border border-orange-800 bg-orange-950/30 backdrop-blur-sm inline-block mb-2 md:mb-3">
                Your Success Journey Starts Here
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white">
                Transform Your <span className="italic">Career</span>
              </h2>
              <p className="text-sm md:text-base text-gray-400 mt-2 max-w-xl">
                Join our team and unlock your potential in the insurance industry
              </p>
            </div>
          </div>
        </div>

        {/* Right side - 3 Vertical Cards (40%) */}
        <div className="w-full lg:w-[40%] flex flex-col gap-3 md:gap-4">
          {rightSideCards.map((card, index) => (
            <div key={index} className="relative h-[140px] md:h-[160px] rounded-lg overflow-hidden group">
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-radial from-orange-500/10 via-orange-500/5 to-transparent blur-xl" />
              
              <div className="relative h-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1">{card.title}</h3>
                  <p className="text-xs md:text-sm text-gray-300">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent" />
        <SilverGradientDivider />
      </div>
    </section>
  );
}