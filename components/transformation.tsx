"use client";

import Image from "next/image";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import { motion } from "framer-motion";

interface Step {
  id: number;
  step: string;
  title: string;
  description: string;
  video: string;
  type: string;
  tag: string;
}

interface VideoCardProps {
  step: string;
  title: string;
  description: string;
  video: string;
  featured?: boolean;
}

const steps: Step[] = [
  {
    id: 1,
    step: "Step 01 — Exclusive Access",
    title: "Private Mentoring",
    description: "Dapatkan akses langsung ke sesi mentoring private dengan Devina Hartono. Belajar dari pengalaman nyata transformasi dari introvert menjadi business leader.",
    video: "/mentor.mp4",
    type: "landscape", 
    tag: "EXCLUSIVE"
  },
  {
    id: 2,
    step: "Step 02 — Elite Network",
    title: "High-Value Connections",
    description: "Bergabung dengan circle eksklusif para high achievers. Network dengan entrepreneurs yang sudah menghasilkan 8-9 digit income. Your network is your net worth.",
    video: "/network.mp4",
    type: "square",
    tag: "PREMIUM"
  },
  {
    id: 3,
    step: "Step 03 — Expert Training",
    title: "International Speakers",
    description: "Akses ke training dari international speakers dan industry experts. Upgrade skillset dan mindset-mu dengan knowledge yang tidak bisa didapat di tempat lain.",
    video: "/speaker.mp4",
    type: "landscape",
    tag: "GLOBAL"
  },
  {
    id: 4,
    step: "Step 04 — Outside Events",
    title: "More than just Business",
    description: "Akses ke event-event yang tidak hanya tentang bisnis, tapi juga tentang lifestyle, entertainment, dan pengalaman yang luar biasa.",
    video: "/tennis.mp4",
    type: "square",
    tag: "LUXURY"
  },
  {
    id: 5,
    step: "Step 05 — Personal Growth",
    title: "Transformational Program",
    description: "Program transformasi personal yang sudah proven berhasil mengubah ribuan lives. Dari public speaking, leadership, hingga wealth management.",
    video: "/transformation.mp4",
    type: "landscape",
    tag: "GROWTH"
  },
  {
    id: 6,
    step: "Step 06 — Business Support",
    title: "Complete System",
    description: "Akses ke sistem bisnis yang proven dan tim support dedicated. Mulai dari marketing, sales, hingga operational guidance untuk scale your business.",
    video: "/system.mp4",
    type: "square",
    tag: "SYSTEM"
  }
];

export default function Transformation() {
  return (
    <section className="relative bg-neutral-100">
      <div className="container mx-auto px-4 pt-16 pb-12 md:pt-20 md:pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
            What to Expect.
          </span>
          
          <h2 className="mt-6 font-instrument-serif">
            <span className="block text-[2rem] sm:text-6xl leading-[1.1] text-neutral-900">
              
            </span>
            <span className="block text-[1.8rem] sm:text-5xl italic font-light mt-2">
              The Experience & Knowledge
            </span>
            <span className="block text-[2.2rem] sm:text-6xl uppercase mt-1">
              That You Will Get.
            </span>
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full space-y-1 md:space-y-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {steps.slice(0, 3).map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative h-[60vh] md:h-[70vh]"
            >
              <TransformationCard {...step} />
            </motion.div>
          ))}
        </div>

        <div className="h-1 md:h-2" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {steps.slice(3, 6).map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative h-[60vh] md:h-[70vh]"
            >
              <TransformationCard {...step} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-20 md:pt-20 md:pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-instrument-serif leading-snug text-neutral-800 mb-6">
              Ready to transform your life?
            </h3>
            <p className="text-neutral-600 leading-relaxed italic">
              "Don't let fear hold you back. Ambil langkah pertama menuju kesuksesanmu sekarang!"
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
}

function TransformationCard({ step, title, description, video, tag }: Step) {
  return (
    <div className="relative h-full group">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full z-20">
        <p className="text-xs tracking-[0.2em] text-neutral-600 uppercase">
          {tag}
        </p>
      </div>

      <div className="absolute top-4 right-4 px-3 py-1">
        <p className="text-xs tracking-[0.2em] text-white/80 uppercase">
          {step}
        </p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <h3 className="text-white text-xl md:text-3xl font-medium mb-2">
            {title}
          </h3>
          <p className="text-white/80 text-sm md:text-base max-w-xl">
            {description}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}