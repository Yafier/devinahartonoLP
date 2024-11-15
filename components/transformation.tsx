"use client";

import { Button } from "@/components/ui/button";
import { MagicCard } from "./magic-card";
import { BookOpen, Brain, Workflow } from "lucide-react";
import { GradientSeparator } from "./ui/gradient-separator";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/moving-cards";

const communityImages = [
  {
    quote: "Annual Team Gathering - Celebrating Success Together",
    name: "Team Events",
    title: "Building Strong Bonds",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
  },
  {
    quote: "Award Ceremony - Recognizing Top Performers",
    name: "Recognition",
    title: "Rewarding Excellence",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070",
  },
  {
    quote: "Training Session - Learning from the Best",
    name: "Development",
    title: "Continuous Growth",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070",
  },
  {
    quote: "Team Building - Creating Lasting Connections",
    name: "Community",
    title: "Strong Together",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070",
  },
  {
    quote: "Company Trip - Exploring New Horizons",
    name: "Rewards",
    title: "Work Hard, Play Hard",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070",
  },
];

export default function Transformation() {
  const steps = [
    {
      title: "Mulai dari Nol",
      description: "Gak perlu pengalaman! Kita mulai dari basic dan berkembang bareng. No experience needed, we'll grow together!",
      icon: BookOpen,
    },
    {
      title: "Proses yang Terbukti",
      description: "System yang udah menghasilkan ratusan agen sukses. Join the proven system that created hundreds of successful agents!",
      icon: Brain,
    },
    {
      title: "Support System 24/7",
      description: "Tim support yang selalu siap bantu kamu kapanpun. Our team is always ready to help you anytime!",
      icon: Workflow,
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      x: 0,
      y: 200,
      rotateX: 45,
    },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      x: index === 0 ? -40 : index === 2 ? 40 : 0,
      y: index === 1 ? 48 : 0,
      rotateX: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.6,
        mass: 0.8,
        stiffness: 120,
      },
    }),
  };

  return (
    <>
      <section className="relative py-24 px-4 overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />

        <div className="relative max-w-5xl mx-auto flex flex-col items-center pt-8">
          <div className="text-center max-w-2xl mb-16">
            <p className="text-sm md:text-base text-orange-400 px-4 py-2 rounded-full border border-orange-800 bg-orange-950/30 backdrop-blur-sm inline-block mb-4">
              Your Success Journey Starts Here
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transformasi Karirmu
            </h2>
            <p className="text-lg text-orange-100/70 leading-relaxed">
              Ratusan agen sudah membuktikan! Saatnya kamu yang next.
              <span className="block mt-2 text-orange-200/60 text-base">
                Hundreds have proven it! It's your turn to shine.
              </span>
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="w-full grid md:grid-cols-3 gap-6 mb-16"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                className="transform"
              >
                <MagicCard 
                  gradientColor="rgba(249, 115, 22, 0.2)"
                  className="h-[280px] bg-black relative overflow-hidden hover:shadow-lg hover:shadow-orange-900/30 transition-all duration-300 group"
                >
                  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-red-500/40 via-blue-500/20 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/40 via-blue-500/20 via-black/40 to-transparent" />
                  
                  <div className="flex flex-col items-center text-center h-full p-6 relative z-10">
                    <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {step.title}
                    </h3>
                    <p className="text-orange-100/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </motion.div>

          <div className="relative mt-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-1">
                Life at Devina Hartono Team
              </h3>
              <p className="text-orange-200/70 text-base">
                Join our vibrant community of achievers
              </p>
            </div>

            <div className="relative w-full overflow-hidden">
              <InfiniteMovingCards
                items={communityImages}
                speed="slow"
                className="py-4"
              />
            </div>

            <div className="mt-12 text-center">
              <Button 
                className="group relative px-8 py-6 text-lg bg-gradient-to-tr from-orange-700 via-orange-600 to-red-500 text-white hover:opacity-90 transition-all duration-300 rounded-xl backdrop-blur-sm border border-orange-400/30 shadow-[0_8px_16px_rgb(249_115_22_/_0.1)] hover:shadow-[0_8px_20px_rgb(249_115_22_/_0.3)] w-full md:w-auto"
              >
                <span className="relative z-10">Mulai Perjalananmu</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}