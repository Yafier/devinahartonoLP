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
    step: "Step 01 — Foundation",
    title: "Mindset Upgrade",
    description: "The only thing holding you back is your mind. Di ALIFE, kami akan membuka perspektif kamu tentang what's truly possible.",
    video: "/tablet.mp4",
    type: "landscape",
    tag: "MINDSET"
  },
  {
    id: 2,
    step: "Step 02 — Growth",
    title: "Learn from the Best",
    description: "Belajar langsung dari successful entrepreneurs yang sudah menghasilkan 6-7 digit income per bulan. Real mentors, real results.",
    video: "/meeting.mp4",
    type: "square",
    tag: "MENTORSHIP"
  },
  {
    id: 3,
    step: "Step 03 — Action",
    title: "Take Massive Action",
    description: "Stop overthinking, start doing. Our proven system will guide you through every step, ensuring your success journey starts right away.",
    video: "/deal.mp4",
    type: "landscape",
    tag: "ACTION"
  },
  {
    id: 4,
    step: "Step 04 — Growth",
    title: "Build Your Empire",
    description: "Join a supportive community of high-achievers. Your success accelerates when you're surrounded by people who inspire you.",
    video: "/worker.mp4",
    type: "square",
    tag: "GROWTH"
  },
  {
    id: 5,
    step: "Step 05 — Scale",
    title: "Scale Your Success",
    description: "Leverage our proven systems and network to multiply your income. From 6 to 7 figures, we'll show you the way.",
    video: "/meeting.mp4",
    type: "landscape",
    tag: "SCALE"
  },
  {
    id: 6,
    step: "Step 06 — Legacy",
    title: "Create Impact",
    description: "Transform not just your life, but help others achieve their dreams. Build a legacy that matters.",
    video: "/tablet.mp4",
    type: "square",
    tag: "LEGACY"
  }
];

export default function Transformation() {
  return (
    <section className="relative bg-neutral-100">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
            The Process
          </span>
          
          <h2 className="mt-6 font-instrument-serif">
            <span className="block text-[2rem] sm:text-6xl leading-[1.1] text-neutral-900">
              TRANSFORM
            </span>
            <span className="block text-[1.8rem] sm:text-5xl italic font-light mt-2">
              your life with
            </span>
            <span className="block text-[2.2rem] sm:text-6xl uppercase mt-1">
              PROVEN STEPS
            </span>
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full space-y-1 md:space-y-0">
        <div className="grid grid-cols-1 gap-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative h-[70vh] md:h-[80vh]"
          >
            <TransformationCard {...steps[0]} />
          </motion.div>
        </div>

        <div className="h-1 md:h-2" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {steps.slice(1, 3).map((step, index) => (
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
              className="relative h-[50vh] md:h-[60vh]"
            >
              <TransformationCard {...step} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32">
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