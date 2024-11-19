"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import Marquee from "./ui/marquee";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Tech Lead & Senior Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940",
  },
  {
    name: "Emily Rodriguez",
    role: "Software Architect",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2940",
  },
  {
    name: "David Park",
    role: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2940",
  },
  {
    name: "Sarah Johnson",
    role: "Frontend Specialist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940",
  }
];

export default function SocialProof() {
  return (
    <section className="pt-16 pb-24 relative bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <p className="text-sm md:text-base text-orange-400 px-4 py-2 rounded-full border border-orange-800 bg-orange-950/30 backdrop-blur-sm inline-block mb-4">
            Meet Our Expert Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Engineering Excellence
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Driven by innovation and technical expertise
          </p>
        </div>

        {/* 3D Marquee Container */}
        <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
          <div className="flex flex-row gap-4 [perspective:1000px]">
            <Marquee
              className="justify-center overflow-hidden [--duration:40s] [--gap:2rem]"
              pauseOnHover
              style={{
                transform: "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(0deg) scale(1.2)",
              }}
            >
              {testimonials.map((profile, index) => (
                <div key={index} className="relative w-[300px] h-[350px] rounded-xl overflow-hidden group">
                  {/* Image Container */}
                  <div className="relative h-full w-full">
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />
                  </div>

                  {/* Floating Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center transform transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                      {profile.name}
                    </h3>
                    <p className="text-gray-200 text-sm backdrop-blur-sm bg-black/30 px-3 py-1 rounded-full inline-block">
                      {profile.role}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </Marquee>
          </div>

          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0a0a0a] z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0a0a0a] z-10"></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
}